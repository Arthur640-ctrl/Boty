from pydantic import BaseModel, EmailStr, Field
from typing import Optional, Literal, Any
from datetime import datetime
from beanie import Document
import uuid

# Documents :
class User(Document):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))

    first_name : str
    last_name : str

    email : EmailStr
    password : str

    created_at : str = Field(default_factory=lambda: datetime.utcnow().isoformat())
    updated_at : str = Field(default_factory=lambda: datetime.utcnow().isoformat())

    class Settings:
        name = "users"

class AnalyticsEvent(Document):
    type: str
    data: dict[str, Any] = Field(default_factory=dict)

    created_at: datetime = Field(default_factory=datetime.utcnow)

    class Settings:
        name = "analytics"

# Requets :
class RegisterRequest(BaseModel):
    first_name : str
    last_name : str

    email : EmailStr
    password : str

    bot : str | None = None

class LoginRequest(BaseModel):
    email : EmailStr
    password : str

    bot : str | None = None