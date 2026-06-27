import os 
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from core.limiter import limiter
from database import connect_db
from core import log_events
import config

# Routers
from routes import auth

# Api :
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_event():
    await connect_db()
    await log_events.log_event("API_STARTED")

app.state.limiter = limiter

# Routes
app.include_router(auth.router)

@app.get("/")
async def root():
    return {
        "message": "Welcome on Boty API"
    }