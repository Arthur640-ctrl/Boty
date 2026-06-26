import os 
from dotenv import load_dotenv

app_env = os.getenv("APP_ENV", "local")
env_file = f".env.{app_env}"

if os.path.exists(env_file):
    load_dotenv(dotenv_path=env_file)
    print(f"Configuration loaded from : {env_file}")
else:
    print(f"No file {env_file} found. Using system variables.")

MONGO_URI = os.getenv("MONGO_URI")
MONGO_NAME = os.getenv("MONGO_NAME")
JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")
