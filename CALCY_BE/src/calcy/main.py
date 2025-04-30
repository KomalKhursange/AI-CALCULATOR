from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from calcy.routes import router as calculator_router
from constants import SERVER_URL, PORT, ENV

@asynccontextmanager
async def lifespan(app: FastAPI):
    yield

app = FastAPI(lifespan=lifespan)


app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/')
async def root():
   return {"message": "Server is running"+" "+SERVER_URL+" "+PORT+" "+ENV}

app.include_router(calculator_router, prefix="/calculate", tags=["calculate"])

def start():       
#  uvicorn.run("calcy.main:app", host="127.0.0.1", port=8080, reload=True) 
 uvicorn.run("calcy.main:app", host=SERVER_URL, port=int(PORT), reload=(ENV == "dev"))


# if __name__ == "__main__":
#     uvicorn.run("main:app", host=SERVER_URL, port=int(PORT), reload=(ENV == "dev"))