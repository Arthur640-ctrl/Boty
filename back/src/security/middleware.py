from fastapi import Request, FastAPI
from starlette.middleware.base import BaseHTTPMiddleware
from fastapi.middleware.cors import CORSMiddleware
from config.config import *

# Base Middleware
class BaseMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        response = await call_next(request)
        return response

# Cors Middleware
class CorsMiddleware:
    def __init__(
        self,
        allow_origins=None,
        allow_credentials=True,
        allow_methods=None,
        allow_headers=None,
    ):
        self.allow_origins = allow_origins
        self.allow_credentials = allow_credentials
        self.allow_methods = allow_methods
        self.allow_headers = allow_headers
    
    def load(self):
        try:
            config = config_load()
            
            cors_config = config["middlewares"]["cors"]

            self.allow_origins = cors_config["allow_origins"]
            self.allow_credentials = cors_config["allow_credentials"]
            self.allow_methods = cors_config["allow_methods"]
            self.allow_headers = cors_config["allow_headers"]

            return True

        except Exception as e:
            return False
    
    def apply(self, app : FastAPI):
        app.add_middleware(
            CORSMiddleware,
            allow_origins=self.allow_origins,
            allow_credentials=self.allow_credentials,
            allow_methods=self.allow_methods,
            allow_headers=self.allow_headers,
        )

        return True
