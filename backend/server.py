from fastapi import FastAPI, APIRouter, HTTPException, Request
from fastapi.responses import FileResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Portfolio Models
class ContactSubmission(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    company: Optional[str] = None
    message: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    status: str = "new"

class ContactSubmissionCreate(BaseModel):
    name: str
    email: EmailStr
    company: Optional[str] = None
    message: str

class ContactResponse(BaseModel):
    success: bool
    message: str
    id: Optional[str] = None

class ResumeDownload(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    download_date: datetime = Field(default_factory=datetime.utcnow)
    user_agent: Optional[str] = None

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Uday Jain Portfolio API - Ready to serve!"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Portfolio API Endpoints
@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact_form(contact_data: ContactSubmissionCreate):
    """Handle contact form submissions from potential employers"""
    try:
        # Create contact submission object
        contact_obj = ContactSubmission(**contact_data.dict())
        
        # Store in MongoDB
        result = await db.contact_submissions.insert_one(contact_obj.dict())
        
        if result.inserted_id:
            logger.info(f"Contact form submitted by {contact_data.name} ({contact_data.email})")
            return ContactResponse(
                success=True,
                message="Thank you for your message! I will get back to you within 24 hours.",
                id=contact_obj.id
            )
        else:
            raise HTTPException(status_code=500, detail="Failed to store contact submission")
            
    except Exception as e:
        logger.error(f"Error processing contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/contact")
async def get_contact_submissions():
    """Get all contact submissions (for admin purposes)"""
    try:
        submissions = await db.contact_submissions.find().sort("timestamp", -1).to_list(100)
        return [ContactSubmission(**submission) for submission in submissions]
    except Exception as e:
        logger.error(f"Error fetching contact submissions: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/resume/download")
async def download_resume(request):
    """Serve downloadable resume PDF and track analytics"""
    try:
        # Track download analytics
        user_agent = request.headers.get("user-agent")
        download_record = ResumeDownload(user_agent=user_agent)
        await db.resume_downloads.insert_one(download_record.dict())
        
        # Path to resume file
        resume_path = ROOT_DIR / "assets" / "Uday_Jain_Resume.pdf"
        
        # Check if resume file exists, if not create a placeholder
        if not resume_path.exists():
            # Create assets directory if it doesn't exist
            os.makedirs(resume_path.parent, exist_ok=True)
            
            # For now, return a JSON response indicating resume is being generated
            return {
                "success": True,
                "message": "Resume download will begin shortly. Please check back later for the PDF file.",
                "note": "Resume file is being prepared"
            }
        
        logger.info(f"Resume downloaded - User Agent: {user_agent}")
        
        # Return the file for download
        return FileResponse(
            path=resume_path,
            filename="Uday_Jain_Cybersecurity_Resume.pdf",
            media_type="application/pdf"
        )
        
    except Exception as e:
        logger.error(f"Error processing resume download: {str(e)}")
        raise HTTPException(status_code=500, detail="Resume download failed")

@api_router.get("/resume/stats")
async def get_resume_download_stats():
    """Get resume download statistics"""
    try:
        total_downloads = await db.resume_downloads.count_documents({})
        recent_downloads = await db.resume_downloads.find().sort("download_date", -1).limit(10).to_list(10)
        
        return {
            "total_downloads": total_downloads,
            "recent_downloads": [ResumeDownload(**download) for download in recent_downloads]
        }
    except Exception as e:
        logger.error(f"Error fetching resume stats: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
