from fastapi import APIRouter
from fastapi.responses import FileResponse
import os

router = APIRouter(prefix="/resume", tags=["resume"])


@router.get("/", summary="Get resume PDF if available")
def get_resume():
	# Serve a local resume.pdf if placed alongside this file, otherwise return a message
	resume_path = os.path.join(os.path.dirname(__file__), "resume.pdf")
	if os.path.exists(resume_path):
		return FileResponse(resume_path, media_type="application/pdf", filename="resume.pdf")
	return {"message": "No resume file found. Place 'resume.pdf' next to resume_routes.py."}

