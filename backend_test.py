#!/usr/bin/env python3
"""
Backend API Testing for Harver Technologies
Tests all FastAPI endpoints for functionality and data integrity
"""

import requests
import sys
import json
from datetime import datetime
from typing import Dict, Any

class HarverAPITester:
    def __init__(self, base_url: str = "http://localhost:8001"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.results = []

    def log_result(self, test_name: str, success: bool, details: str = "", response_data: Any = None):
        """Log test result"""
        self.tests_run += 1
        if success:
            self.tests_passed += 1
            print(f"✅ {test_name}: PASSED")
        else:
            print(f"❌ {test_name}: FAILED - {details}")
        
        self.results.append({
            "test": test_name,
            "success": success,
            "details": details,
            "response_data": response_data
        })

    def test_health_endpoint(self) -> bool:
        """Test GET /api/health endpoint"""
        try:
            response = requests.get(f"{self.base_url}/api/health", timeout=10)
            
            if response.status_code != 200:
                self.log_result("Health Check", False, f"Expected 200, got {response.status_code}")
                return False
            
            data = response.json()
            required_fields = ["status", "service", "timestamp"]
            
            for field in required_fields:
                if field not in data:
                    self.log_result("Health Check", False, f"Missing field: {field}")
                    return False
            
            if data["status"] != "healthy":
                self.log_result("Health Check", False, f"Status not healthy: {data['status']}")
                return False
            
            if "Harver Technologies" not in data["service"]:
                self.log_result("Health Check", False, f"Unexpected service name: {data['service']}")
                return False
            
            self.log_result("Health Check", True, "All fields present and valid", data)
            return True
            
        except requests.exceptions.RequestException as e:
            self.log_result("Health Check", False, f"Request failed: {str(e)}")
            return False
        except json.JSONDecodeError as e:
            self.log_result("Health Check", False, f"Invalid JSON response: {str(e)}")
            return False

    def test_technologies_endpoint(self) -> bool:
        """Test GET /api/technologies endpoint"""
        try:
            response = requests.get(f"{self.base_url}/api/technologies", timeout=10)
            
            if response.status_code != 200:
                self.log_result("Technologies API", False, f"Expected 200, got {response.status_code}")
                return False
            
            data = response.json()
            
            if "technologies" not in data:
                self.log_result("Technologies API", False, "Missing 'technologies' field")
                return False
            
            technologies = data["technologies"]
            
            if not isinstance(technologies, list):
                self.log_result("Technologies API", False, "Technologies should be a list")
                return False
            
            if len(technologies) != 30:
                self.log_result("Technologies API", False, f"Expected 30 technologies, got {len(technologies)}")
                return False
            
            # Validate technology structure
            required_tech_fields = ["id", "name", "short", "category", "description"]
            for i, tech in enumerate(technologies[:3]):  # Check first 3 for structure
                for field in required_tech_fields:
                    if field not in tech:
                        self.log_result("Technologies API", False, f"Technology {i} missing field: {field}")
                        return False
            
            # Check for specific technologies mentioned in requirements
            tech_names = [tech["name"] for tech in technologies]
            expected_techs = ["Artificial Intelligence", "Internet of Things", "Wireless Power"]
            
            for expected_tech in expected_techs:
                if expected_tech not in tech_names:
                    self.log_result("Technologies API", False, f"Missing expected technology: {expected_tech}")
                    return False
            
            # Check categories
            categories = set(tech["category"] for tech in technologies)
            expected_categories = ["core", "connectivity", "data", "industrial", "experience"]
            
            for expected_cat in expected_categories:
                if expected_cat not in categories:
                    self.log_result("Technologies API", False, f"Missing expected category: {expected_cat}")
                    return False
            
            self.log_result("Technologies API", True, f"30 technologies with valid structure and categories", {
                "count": len(technologies),
                "categories": list(categories),
                "sample_tech": technologies[0] if technologies else None
            })
            return True
            
        except requests.exceptions.RequestException as e:
            self.log_result("Technologies API", False, f"Request failed: {str(e)}")
            return False
        except json.JSONDecodeError as e:
            self.log_result("Technologies API", False, f"Invalid JSON response: {str(e)}")
            return False

    def test_contact_submission(self) -> bool:
        """Test POST /api/contact endpoint"""
        test_data = {
            "name": "Test User",
            "email": "test@example.com",
            "company": "Test Company",
            "phone": "+1-555-0123",
            "subject": "Test Partnership Inquiry",
            "message": "This is a test message for partnership opportunities with Harver Technologies.",
            "inquiry_type": "partnership"
        }
        
        try:
            response = requests.post(
                f"{self.base_url}/api/contact",
                json=test_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            if response.status_code != 200:
                self.log_result("Contact Submission", False, f"Expected 200, got {response.status_code}")
                return False
            
            data = response.json()
            required_fields = ["id", "message", "submitted_at"]
            
            for field in required_fields:
                if field not in data:
                    self.log_result("Contact Submission", False, f"Missing field: {field}")
                    return False
            
            if not data["id"]:
                self.log_result("Contact Submission", False, "Empty ID returned")
                return False
            
            if "24-48 hours" not in data["message"]:
                self.log_result("Contact Submission", False, f"Unexpected message: {data['message']}")
                return False
            
            self.log_result("Contact Submission", True, "Contact form submitted successfully", data)
            return True
            
        except requests.exceptions.RequestException as e:
            self.log_result("Contact Submission", False, f"Request failed: {str(e)}")
            return False
        except json.JSONDecodeError as e:
            self.log_result("Contact Submission", False, f"Invalid JSON response: {str(e)}")
            return False

    def test_contact_validation(self) -> bool:
        """Test POST /api/contact with invalid data"""
        invalid_data = {
            "name": "",  # Empty name should fail
            "email": "invalid-email",  # Invalid email
            "subject": "Hi",  # Too short subject
            "message": "Short",  # Too short message
            "inquiry_type": "invalid"  # Invalid inquiry type
        }
        
        try:
            response = requests.post(
                f"{self.base_url}/api/contact",
                json=invalid_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            if response.status_code == 200:
                self.log_result("Contact Validation", False, "Should have rejected invalid data")
                return False
            
            if response.status_code not in [400, 422]:
                self.log_result("Contact Validation", False, f"Expected 400/422, got {response.status_code}")
                return False
            
            self.log_result("Contact Validation", True, f"Correctly rejected invalid data with status {response.status_code}")
            return True
            
        except requests.exceptions.RequestException as e:
            self.log_result("Contact Validation", False, f"Request failed: {str(e)}")
            return False

    def test_inquiries_endpoint(self) -> bool:
        """Test GET /api/inquiries endpoint (if accessible)"""
        try:
            response = requests.get(f"{self.base_url}/api/inquiries", timeout=10)
            
            if response.status_code != 200:
                self.log_result("Inquiries Endpoint", False, f"Expected 200, got {response.status_code}")
                return False
            
            data = response.json()
            
            if "inquiries" not in data or "total" not in data:
                self.log_result("Inquiries Endpoint", False, "Missing 'inquiries' or 'total' field")
                return False
            
            if not isinstance(data["inquiries"], list):
                self.log_result("Inquiries Endpoint", False, "Inquiries should be a list")
                return False
            
            self.log_result("Inquiries Endpoint", True, f"Retrieved {data['total']} inquiries", {
                "total": data["total"],
                "sample_count": len(data["inquiries"])
            })
            return True
            
        except requests.exceptions.RequestException as e:
            self.log_result("Inquiries Endpoint", False, f"Request failed: {str(e)}")
            return False
        except json.JSONDecodeError as e:
            self.log_result("Inquiries Endpoint", False, f"Invalid JSON response: {str(e)}")
            return False

    def run_all_tests(self) -> Dict[str, Any]:
        """Run all backend tests"""
        print(f"🚀 Starting Harver Technologies Backend API Tests")
        print(f"📍 Testing endpoint: {self.base_url}")
        print("=" * 60)
        
        # Run all tests
        self.test_health_endpoint()
        self.test_technologies_endpoint()
        self.test_contact_submission()
        self.test_contact_validation()
        self.test_inquiries_endpoint()
        
        print("=" * 60)
        print(f"📊 Test Results: {self.tests_passed}/{self.tests_run} passed")
        
        success_rate = (self.tests_passed / self.tests_run * 100) if self.tests_run > 0 else 0
        print(f"✨ Success Rate: {success_rate:.1f}%")
        
        if self.tests_passed == self.tests_run:
            print("🎉 All tests passed! Backend is fully functional.")
            return {"status": "success", "results": self.results}
        else:
            print("⚠️  Some tests failed. Check the details above.")
            return {"status": "partial", "results": self.results}

def main():
    """Main test execution"""
    tester = HarverAPITester()
    results = tester.run_all_tests()
    
    # Return appropriate exit code
    if results["status"] == "success":
        return 0
    else:
        return 1

if __name__ == "__main__":
    sys.exit(main())