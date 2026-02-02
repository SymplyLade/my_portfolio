# from fastapi import FastAPI, Depends
# from fastapi.middleware.cors import CORSMiddleware
# from sqlalchemy.orm import Session
# from database import Base, engine, SessionLocal
# from models import Message
# from schemas import MessageCreate
# from config import SMTP_EMAIL, SMTP_PASSWORD, SMTP_SERVER, SMTP_PORT
# import smtplib
# from email.mime.multipart import MIMEMultipart
# from email.mime.text import MIMEText

# app = FastAPI()

# @app.get("/")
# def root():
#     return {"message": "Welcome to SymplyLade Portfolio API"}


# Base.metadata.create_all(bind=engine)

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()


# def send_email(subject: str, body: str, to_email: str = SMTP_EMAIL):
#     msg = MIMEMultipart("alternative")
#     msg["From"] = f"SymplyLade Portfolio <{SMTP_EMAIL}>"
#     msg["To"] = to_email
#     msg["Reply-To"] = SMTP_EMAIL
#     msg["Subject"] = subject


#     msg.attach(MIMEText(body, "plain"))

#     html_body = f"""
#     <html>
#       <body>
#         <h2>{subject}</h2>
#         <pre>{body}</pre>
#       </body>
#     </html>
#     """
#     msg.attach(MIMEText(html_body, "html"))

#     try:
#         server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
#         server.set_debuglevel(1)
#         server.starttls()
#         server.login(SMTP_EMAIL, SMTP_PASSWORD)
#         server.sendmail(SMTP_EMAIL, to_email, msg.as_string())
#         server.quit()
#         print(f"Email sent successfully to {to_email}!")
#     except smtplib.SMTPAuthenticationError:
#         print("SMTP Authentication failed. Check your App Password and email.")
#     except Exception as e:
#         print(f"Error sending email: {e}")


# @app.post("/contact")
# def receive_message(data: MessageCreate, db: Session = Depends(get_db)):
   
#     new_msg = Message(
#         name=data.name,
#         email=data.email,
#         phone=data.phone,
#         message=data.message
#     )
#     db.add(new_msg)
#     db.commit()
#     db.refresh(new_msg)

#     email_body = f"""
# New Portfolio Contact Message:

# Name: {data.name}
# Email: {data.email}
# Phone: {data.phone}
# Message:
# {data.message}
#     """

#     send_email("New Portfolio Message", email_body, to_email=SMTP_EMAIL)

#     return {"success": True, "message": "Message delivered successfully!"}


# projects = [
#     {
#         "id": 1,
#         "title": "Project One",
#         "description": "A sample React & Tailwind project",
#         "image": "/project1.png",
#         "tech": ["React", "Tailwind"],
#         "repoLink": "https://github.com/SymplyLade/project1",
#         "liveLink": "#"
#     },
#     {
#         "id": 2,
#         "title": "Project Two",
#         "description": "FastAPI backend with MySQL",
#         "image": "/project2.png",
#         "tech": ["FastAPI", "Python", "MySQL"],
#         "repoLink": "https://github.com/SymplyLade/project2",
#         "liveLink": "#"
#     },
  
# ]

# @app.get("/projects")
# def get_projects():
#     return projects

# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="127.0.0.1", port=8000)




from fastapi import FastAPI, HTTPException, Depends
from fastapi.exceptions import RequestValidationError
from pydantic import BaseModel, Field
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from sqlalchemy import text
import uvicorn
from database import get_db, Base, engine, create_tables
from hero_routes import router as hero_router
from about_routes import router as about_router
from projects_routes import router as project_router
from messages_routes import router as message_router
from skills_routes import router as skills_router
from resume_routes import router as resume_router


try:
    create_tables() 
    print("Tables created/verified successfully")
except Exception as e:
    print(f"Warning: Could not create tables: {e}")
    print("Make sure PostgreSQL is running")

app = FastAPI(title="My Personal Portfolio Backend", version="1.0.0")

origins = [
    "http://localhost:5173",
    "http://localhost:3000",
    "http://localhost:5174",
    "https://my-portfolio-eoye.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class UserLogin(BaseModel):
    email: str = Field(..., example="sam@gmail.com")
    password: str = Field(..., example="yourpassword")


app.include_router(hero_router)
app.include_router(about_router)
app.include_router(project_router)
app.include_router(message_router)
app.include_router(skills_router)
app.include_router(resume_router)



@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request, exc):
    return JSONResponse(
        status_code=422,
        content={"detail": exc.errors()},
    )


@app.get("/")
def home():
    return {"message": "Welcome to My Personal Portfolio Backend!"}


@app.post("/login")
@app.post("/api/login")
def login(user: UserLogin, db=Depends(get_db)):
    query = text("SELECT * FROM users WHERE email = :email")
    result = db.execute(query, {"email": user.email}).fetchone()

    if result:
        if user.password == result.password:
            return {
                "message": "Login successful",
                "email": result.email,
            }
        else:
            raise HTTPException(status_code=401, detail="Invalid password")
    else:
        raise HTTPException(status_code=404, detail="User not found")


if __name__ == "__main__":
    uvicorn.run(app, port=8000)