from fastapi import APIRouter, HTTPException, Request
from datetime import datetime, timezone
import re
import uuid
from core.limiter import limiter

from models import *
from database import *
from core.auth_security import *
from core.log_events import *

router = APIRouter(prefix="/auth")
EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")

@router.post("/register")
@limiter.limit("5/minute")
async def register(request: Request, data: RegisterRequest):
    
    if data.bot:
        await log_event(event_type="REGISTER_FAILED", data={"reason": "bot_detected", "ip": request.client.host})
        raise HTTPException(400, {"message": "Register failed : Bot detected"})

    
    first_name = data.first_name
    last_name = data.last_name
    email = str(data.email).strip().lower()
    password = data.password

    if not first_name or not first_name.strip():
        await log_event(event_type="REGISTER_FAILED", data={"reason": "missing_first_name", "ip": request.client.host})
        raise HTTPException(400, {"message": "Register failed : First name is required"})

    if not last_name or not last_name.strip():
        await log_event(event_type="REGISTER_FAILED", data={"reason": "missing_last_name", "ip": request.client.host})
        raise HTTPException(400, {"message": "Register failed : Last name is required"})

    if not EMAIL_REGEX.fullmatch(email):
        await log_event(event_type="REGISTER_FAILED", data={"reason": "invalid_email", "ip": request.client.host})
        raise HTTPException(400, {"message": "Register failed : Invalid email format"})

    if await User.find_one({"email": email}):
        await log_event(event_type="REGISTER_FAILED", data={"reason": "email_used", "ip": request.client.host})
        raise HTTPException(400, {"message": "Register failed : Email already used"})
    
    hashed_password = hash_password(password)

    user = User(
        first_name=first_name,
        last_name=last_name,
        email=email,
        password=hashed_password
    )

    await user.insert()

    await log_event(
        "REGISTER_SUCCESS",
        {
            "player_id": str(user.id),
            "ip": request.client.host
        }
    )

    return {
        "message": "Account created",
        "user_id": str(user.id)
    }

@router.post("/login")
@limiter.limit("10/minute")
async def login(request: Request, data: LoginRequest):

    if data.bot:
        await log_event(event_type="LOGIN_FAILED", data={"reason": "bot_detected", "ip": request.client.host})
        raise HTTPException(400, "Bot detected")

    email = data.email
    password = data.password

    user = await User.find_one({"email": email})

    if not user:
        await log_event("LOGIN_FAILED", {"reason": "user_not_found", "ip": request.client.host})
        raise HTTPException(400, "Invalid credentials")
    
    if not verify_password(password, user.password):
        await log_event("LOGIN_FAILED", {"reason": "wrong_password", "ip": request.client.host})
        raise HTTPException(400, "Invalid credentials")
    
    token = create_access_token(str(user.id))

    await log_event(
        "LOGIN_SUCCESS",
        {
            "player_id": str(user.id),
            "ip": request.client.host
        }
    )

    return {
        "message": "Login successful",
        "access_token": token,
        "user_id": str(user.id),
        "email": user.email
    }