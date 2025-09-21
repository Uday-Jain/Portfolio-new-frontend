#!/usr/bin/env python3
"""
MongoDB Connectivity Test for Portfolio Backend
"""

import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent / "backend"
load_dotenv(ROOT_DIR / '.env')

async def test_mongodb_connection():
    """Test MongoDB connection and basic operations"""
    try:
        # Connect to MongoDB
        mongo_url = os.environ['MONGO_URL']
        db_name = os.environ['DB_NAME']
        
        print(f"Testing MongoDB connection to: {mongo_url}")
        print(f"Database: {db_name}")
        
        client = AsyncIOMotorClient(mongo_url)
        db = client[db_name]
        
        # Test connection
        await client.admin.command('ping')
        print("✅ MongoDB connection successful")
        
        # Test collections
        collections = await db.list_collection_names()
        print(f"✅ Available collections: {collections}")
        
        # Test contact_submissions collection
        contact_count = await db.contact_submissions.count_documents({})
        print(f"✅ Contact submissions count: {contact_count}")
        
        # Test resume_downloads collection
        download_count = await db.resume_downloads.count_documents({})
        print(f"✅ Resume downloads count: {download_count}")
        
        # Get recent contact submission
        if contact_count > 0:
            recent_contact = await db.contact_submissions.find_one(sort=[("timestamp", -1)])
            print(f"✅ Most recent contact from: {recent_contact.get('name', 'Unknown')} ({recent_contact.get('email', 'No email')})")
        
        client.close()
        return True
        
    except Exception as e:
        print(f"❌ MongoDB connection failed: {str(e)}")
        return False

if __name__ == "__main__":
    asyncio.run(test_mongodb_connection())