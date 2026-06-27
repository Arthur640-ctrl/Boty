from motor.motor_asyncio import AsyncIOMotorClient
from beanie import init_beanie
from models import *
from core import log_events
import config

client = None
db = None

async def connect_db():
    global client, db

    client = AsyncIOMotorClient(config.MONGO_URI)
    db = client[config.MONGO_NAME]

    await init_beanie(
        database=db,
        document_models=[AnalyticsEvent, User]
    )

    await log_events.log_event("DATABASE_CONNECTED")

    print("Database connected !")

def get_db():
    return db