from models import *

async def log_event(event_type: str, data: dict = None):
    if data is None:
        data = {}

    event = AnalyticsEvent(
        type=event_type,
        data=data
    )

    await event.insert()