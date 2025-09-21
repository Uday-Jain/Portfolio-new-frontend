#!/usr/bin/env python3
"""
Backend API Testing for Uday Jain's Cybersecurity Portfolio
Tests all portfolio endpoints with comprehensive validation
"""

import requests
import json
import time
from datetime import datetime
from typing import Dict, Any, List

# Configuration
BASE_URL = "https://cyberpro-portfolio.preview.emergentagent.com/api"
HEADERS = {
    "Content-Type": "application/json",
    "User-Agent": "Portfolio-Test-Client/1.0"
}

class PortfolioAPITester:
    def __init__(self):
        self.base_url = BASE_URL
        self.headers = HEADERS
        self.test_results = []
        self.contact_submission_id = None
        
    def log_test(self, test_name: str, success: bool, details: str, response_data: Any = None):
        """Log test results"""
        result = {
            "test": test_name,
            "success": success,
            "details": details,
            "timestamp": datetime.now().isoformat(),
            "response_data": response_data
        }
        self.test_results.append(result)
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} {test_name}: {details}")
        if response_data and not success:
            print(f"   Response: {response_data}")
    
    def test_health_check(self):
        """Test GET /api/ - Basic health check"""
        try:
            response = requests.get(f"{self.base_url}/", headers=self.headers, timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if "message" in data and "Portfolio API" in data["message"]:
                    self.log_test("Health Check", True, f"API is healthy - {data['message']}", data)
                else:
                    self.log_test("Health Check", False, f"Unexpected response format", data)
            else:
                self.log_test("Health Check", False, f"HTTP {response.status_code}", response.text)
                
        except Exception as e:
            self.log_test("Health Check", False, f"Connection error: {str(e)}")
    
    def test_contact_form_valid_submission(self):
        """Test POST /api/contact with valid data"""
        test_data = {
            "name": "John Smith",
            "email": "john.smith@techcorp.com",
            "company": "TechCorp Solutions",
            "message": "Hi Uday, I'm interested in discussing a cybersecurity analyst position at our company. Your expertise in Burp Suite and vulnerability assessment looks impressive. Would you be available for a call this week?"
        }
        
        try:
            response = requests.post(
                f"{self.base_url}/contact", 
                json=test_data, 
                headers=self.headers,
                timeout=10
            )
            
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and data.get("id"):
                    self.contact_submission_id = data["id"]
                    self.log_test("Contact Form Valid Submission", True, 
                                f"Contact form submitted successfully - ID: {data['id']}", data)
                else:
                    self.log_test("Contact Form Valid Submission", False, 
                                "Response missing success or id field", data)
            else:
                self.log_test("Contact Form Valid Submission", False, 
                            f"HTTP {response.status_code}", response.text)
                
        except Exception as e:
            self.log_test("Contact Form Valid Submission", False, f"Request error: {str(e)}")
    
    def test_contact_form_invalid_email(self):
        """Test POST /api/contact with invalid email"""
        test_data = {
            "name": "Jane Doe",
            "email": "invalid-email-format",
            "message": "Test message with invalid email"
        }
        
        try:
            response = requests.post(
                f"{self.base_url}/contact", 
                json=test_data, 
                headers=self.headers,
                timeout=10
            )
            
            # Should return 422 for validation error
            if response.status_code == 422:
                self.log_test("Contact Form Invalid Email", True, 
                            "Correctly rejected invalid email format", response.json())
            else:
                self.log_test("Contact Form Invalid Email", False, 
                            f"Expected 422, got {response.status_code}", response.text)
                
        except Exception as e:
            self.log_test("Contact Form Invalid Email", False, f"Request error: {str(e)}")
    
    def test_contact_form_missing_fields(self):
        """Test POST /api/contact with missing required fields"""
        test_data = {
            "name": "Test User"
            # Missing email and message
        }
        
        try:
            response = requests.post(
                f"{self.base_url}/contact", 
                json=test_data, 
                headers=self.headers,
                timeout=10
            )
            
            # Should return 422 for validation error
            if response.status_code == 422:
                self.log_test("Contact Form Missing Fields", True, 
                            "Correctly rejected missing required fields", response.json())
            else:
                self.log_test("Contact Form Missing Fields", False, 
                            f"Expected 422, got {response.status_code}", response.text)
                
        except Exception as e:
            self.log_test("Contact Form Missing Fields", False, f"Request error: {str(e)}")
    
    def test_get_contact_submissions(self):
        """Test GET /api/contact - Get contact submissions"""
        try:
            response = requests.get(f"{self.base_url}/contact", headers=self.headers, timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    # Check if our test submission is in the list
                    found_submission = False
                    if self.contact_submission_id:
                        for submission in data:
                            if submission.get("id") == self.contact_submission_id:
                                found_submission = True
                                break
                    
                    if found_submission or len(data) > 0:
                        self.log_test("Get Contact Submissions", True, 
                                    f"Retrieved {len(data)} contact submissions", 
                                    {"count": len(data), "has_test_submission": found_submission})
                    else:
                        self.log_test("Get Contact Submissions", True, 
                                    "No submissions found (empty list is valid)", data)
                else:
                    self.log_test("Get Contact Submissions", False, 
                                "Response is not a list", data)
            else:
                self.log_test("Get Contact Submissions", False, 
                            f"HTTP {response.status_code}", response.text)
                
        except Exception as e:
            self.log_test("Get Contact Submissions", False, f"Request error: {str(e)}")
    
    def test_resume_download(self):
        """Test GET /api/resume/download - Resume PDF download"""
        try:
            response = requests.get(
                f"{self.base_url}/resume/download", 
                headers=self.headers,
                timeout=15
            )
            
            if response.status_code == 200:
                content_type = response.headers.get('content-type', '').lower()
                
                if 'application/pdf' in content_type:
                    # Actual PDF file
                    self.log_test("Resume Download", True, 
                                f"PDF file downloaded successfully - Size: {len(response.content)} bytes",
                                {"content_type": content_type, "size": len(response.content)})
                elif 'application/json' in content_type:
                    # JSON response (placeholder)
                    data = response.json()
                    if data.get("success") and "Resume download will begin shortly" in data.get("message", ""):
                        self.log_test("Resume Download", True, 
                                    "Resume placeholder response received (PDF being prepared)", data)
                    else:
                        self.log_test("Resume Download", False, 
                                    "Unexpected JSON response format", data)
                else:
                    self.log_test("Resume Download", False, 
                                f"Unexpected content type: {content_type}", 
                                {"content_type": content_type})
            else:
                self.log_test("Resume Download", False, 
                            f"HTTP {response.status_code}", response.text)
                
        except Exception as e:
            self.log_test("Resume Download", False, f"Request error: {str(e)}")
    
    def test_resume_stats(self):
        """Test GET /api/resume/stats - Download statistics"""
        try:
            response = requests.get(f"{self.base_url}/resume/stats", headers=self.headers, timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if "total_downloads" in data and "recent_downloads" in data:
                    total = data["total_downloads"]
                    recent = data["recent_downloads"]
                    
                    if isinstance(total, int) and isinstance(recent, list):
                        self.log_test("Resume Stats", True, 
                                    f"Stats retrieved - Total: {total}, Recent: {len(recent)}", 
                                    {"total_downloads": total, "recent_count": len(recent)})
                    else:
                        self.log_test("Resume Stats", False, 
                                    "Invalid data types in response", data)
                else:
                    self.log_test("Resume Stats", False, 
                                "Missing required fields in response", data)
            else:
                self.log_test("Resume Stats", False, 
                            f"HTTP {response.status_code}", response.text)
                
        except Exception as e:
            self.log_test("Resume Stats", False, f"Request error: {str(e)}")
    
    def test_cors_headers(self):
        """Test CORS configuration"""
        try:
            # Make an OPTIONS request to check CORS
            response = requests.options(f"{self.base_url}/contact", headers=self.headers, timeout=10)
            
            cors_headers = {
                'access-control-allow-origin': response.headers.get('access-control-allow-origin'),
                'access-control-allow-methods': response.headers.get('access-control-allow-methods'),
                'access-control-allow-headers': response.headers.get('access-control-allow-headers')
            }
            
            if any(cors_headers.values()):
                self.log_test("CORS Configuration", True, 
                            "CORS headers present", cors_headers)
            else:
                self.log_test("CORS Configuration", False, 
                            "No CORS headers found", cors_headers)
                
        except Exception as e:
            self.log_test("CORS Configuration", False, f"Request error: {str(e)}")
    
    def run_all_tests(self):
        """Run all API tests"""
        print("=" * 60)
        print("UDAY JAIN PORTFOLIO BACKEND API TESTING")
        print("=" * 60)
        print(f"Testing API at: {self.base_url}")
        print(f"Started at: {datetime.now().isoformat()}")
        print()
        
        # Run tests in logical order
        self.test_health_check()
        self.test_contact_form_valid_submission()
        self.test_contact_form_invalid_email()
        self.test_contact_form_missing_fields()
        self.test_get_contact_submissions()
        self.test_resume_download()
        self.test_resume_stats()
        self.test_cors_headers()
        
        # Summary
        print("\n" + "=" * 60)
        print("TEST SUMMARY")
        print("=" * 60)
        
        passed = sum(1 for result in self.test_results if result["success"])
        total = len(self.test_results)
        
        print(f"Total Tests: {total}")
        print(f"Passed: {passed}")
        print(f"Failed: {total - passed}")
        print(f"Success Rate: {(passed/total)*100:.1f}%")
        
        if total - passed > 0:
            print("\nFAILED TESTS:")
            for result in self.test_results:
                if not result["success"]:
                    print(f"  ❌ {result['test']}: {result['details']}")
        
        print(f"\nCompleted at: {datetime.now().isoformat()}")
        return self.test_results

if __name__ == "__main__":
    tester = PortfolioAPITester()
    results = tester.run_all_tests()