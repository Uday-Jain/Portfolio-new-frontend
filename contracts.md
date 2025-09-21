# API Contracts - Uday Jain Portfolio

## Overview
This document outlines the API contracts for integrating the frontend portfolio with the backend services.

## Mock Data Integration
Currently, the frontend uses mock data from `/app/frontend/src/data/mock.js` including:
- Personal information and skills
- Experience timeline
- Project details
- Certifications and education
- Contact form submission simulation
- Resume download simulation

## API Endpoints to Implement

### 1. Contact Form Submission
**Endpoint:** `POST /api/contact`
**Purpose:** Handle contact form submissions from potential employers

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "company": "string (optional)",
  "message": "string (required)"
}
```

**Response:**
```json
{
  "success": boolean,
  "message": "string",
  "id": "string (optional contact ID)"
}
```

**Implementation Notes:**
- Store contact submissions in MongoDB for follow-up
- Add timestamp and basic validation
- Send email notification to Uday's email
- Return success/error messages matching frontend expectations

### 2. Resume Download
**Endpoint:** `GET /api/resume/download`
**Purpose:** Serve downloadable resume PDF

**Response:**
- Content-Type: application/pdf
- File attachment with proper headers
- Resume file generated from portfolio data or static PDF

**Implementation Notes:**
- Generate PDF from portfolio data OR serve static resume file
- Track download statistics
- Set proper file headers for download

### 3. Portfolio Data (Future Enhancement)
**Endpoint:** `GET /api/portfolio`
**Purpose:** Serve dynamic portfolio data instead of mock data

**Response:**
```json
{
  "personalInfo": {...},
  "experience": [...],
  "projects": [...],
  "certifications": [...],
  "skills": {...}
}
```

## Database Models

### Contact Submission
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  company: String (optional),
  message: String,
  timestamp: Date,
  status: String (new/read/responded)
}
```

### Resume Downloads (Analytics)
```javascript
{
  _id: ObjectId,
  downloadDate: Date,
  userAgent: String,
  ipAddress: String (optional, privacy-aware)
}
```

## Frontend Integration Points

### Contact Form (`/app/frontend/src/components/Contact.jsx`)
- Replace `submitContactForm()` mock function with actual API call
- Handle loading states and error responses
- Show success/error toast notifications

### Resume Download (`/app/frontend/src/components/Hero.jsx`, `Header.jsx`, `Contact.jsx`)
- Replace `downloadResume()` mock function with actual API call
- Handle file download and track analytics
- Show download progress if needed

## Security Considerations
- Input validation and sanitization
- Rate limiting for contact form submissions
- CORS configuration for frontend domain
- Basic spam protection for contact form

## Email Integration (Optional Enhancement)
- Send notification emails when contact form is submitted
- Use environment variables for email configuration
- Consider using service like SendGrid or SMTP

## Testing Strategy
1. Test contact form submission with various inputs
2. Verify resume download functionality
3. Test error handling and validation
4. Confirm email notifications (if implemented)

## Implementation Priority
1. **High Priority:** Contact form backend API
2. **High Priority:** Resume download endpoint  
3. **Medium Priority:** Email notifications
4. **Low Priority:** Analytics and portfolio data API

This contract ensures seamless integration between the existing frontend mock functionality and the new backend services.