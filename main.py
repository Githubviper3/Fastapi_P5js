from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Mount the static directory
app.mount("/", StaticFiles(directory="static", html=True), name="static")
