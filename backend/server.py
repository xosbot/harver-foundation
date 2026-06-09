import os
from datetime import datetime, timezone
from typing import Optional
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Harver Technologies API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MONGO_URL = os.environ.get("MONGO_URL")
DB_NAME = os.environ.get("DB_NAME")

client: AsyncIOMotorClient = None
db = None

@app.on_event("startup")
async def startup_db_client():
    global client, db
    client = AsyncIOMotorClient(MONGO_URL)
    db = client[DB_NAME]

@app.on_event("shutdown")
async def shutdown_db_client():
    global client
    if client:
        client.close()

class ContactInquiry(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    company: Optional[str] = Field(None, max_length=200)
    phone: Optional[str] = Field(None, max_length=30)
    subject: str = Field(..., min_length=5, max_length=200)
    message: str = Field(..., min_length=10, max_length=5000)
    inquiry_type: str = Field(default="general", pattern="^(partnership|investment|technical|media|general)$")

class ContactResponse(BaseModel):
    id: str
    message: str
    submitted_at: str

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "service": "Harver Technologies API", "timestamp": datetime.now(timezone.utc).isoformat()}

@app.post("/api/contact", response_model=ContactResponse)
async def submit_contact_inquiry(inquiry: ContactInquiry):
    inquiry_doc = {
        "name": inquiry.name,
        "email": inquiry.email,
        "company": inquiry.company,
        "phone": inquiry.phone,
        "subject": inquiry.subject,
        "message": inquiry.message,
        "inquiry_type": inquiry.inquiry_type,
        "created_at": datetime.now(timezone.utc).isoformat(),
        "status": "new"
    }
    
    result = await db.contact_inquiries.insert_one(inquiry_doc)
    
    return ContactResponse(
        id=str(result.inserted_id),
        message="Thank you for your inquiry. Our team will respond within 24-48 hours.",
        submitted_at=inquiry_doc["created_at"]
    )

@app.get("/api/inquiries")
async def get_all_inquiries():
    inquiries = []
    cursor = db.contact_inquiries.find({}, {"_id": 0}).sort("created_at", -1).limit(100)
    async for doc in cursor:
        inquiries.append(doc)
    return {"inquiries": inquiries, "total": len(inquiries)}

@app.get("/api/technologies")
async def get_technologies():
    technologies = [
        {"id": 1, "name": "Artificial Intelligence", "short": "AI/ML/Deep Learning", "category": "core", "description": "Battery-free neural processors (Harver NeuroCore™) enable real-time inference in remote environments. Deployed in 400+ industrial plants."},
        {"id": 2, "name": "Internet of Things", "short": "IoT/IIoT/Sensors", "category": "core", "description": "World's largest deployment of self-powered IoT—over 1.2 million nodes operating indefinitely in harsh conditions."},
        {"id": 3, "name": "Mobile/Social Internet", "short": "5G/6G Edge Nodes", "category": "connectivity", "description": "Energy-autonomous 5G/6G edge nodes for livestreaming and social mesh networks in rural regions."},
        {"id": 4, "name": "Blockchain", "short": "Distributed Ledgers", "category": "core", "description": "WEH-powered blockchain validators reducing crypto's carbon footprint by 99%. World's first carbon-negative Layer-1."},
        {"id": 5, "name": "Big Data", "short": "Predictive Analytics", "category": "data", "description": "Decentralized analytics engines powered by harvested energy, processing petabyte-scale smart city data."},
        {"id": 6, "name": "Automation", "short": "Process/Decision/Action", "category": "industrial", "description": "Fully autonomous robotic process automation where every actuator draws power wirelessly. 87 manufacturing lines."},
        {"id": 7, "name": "Robots & Drones", "short": "Autonomous Vehicles", "category": "core", "description": "SkyHarvester™ drone fleets recharge mid-mission via ambient harvesting. 1.4 million flight hours logged."},
        {"id": 8, "name": "Immersive Media", "short": "VR/AR/MR/360°", "category": "experience", "description": "Wireless-powered AR glasses and haptic suits for enterprise training with zero charging downtime."},
        {"id": 9, "name": "Mobile Technologies", "short": "Infrastructure/Networks", "category": "connectivity", "description": "Private 5G networks powered entirely by WEH base stations, reducing telco OPEX by 72%."},
        {"id": 10, "name": "Cloud Computing", "short": "SaaS/IaaS/PaaS/MESH", "category": "data", "description": "Harver MeshCloud™ edge-cloud continuum with self-powering mesh nodes. 14 Fortune 500 clients."},
        {"id": 11, "name": "3D Printing", "short": "Additive Manufacturing", "category": "industrial", "description": "Field-deployable 3D printers running on harvested solar/RF energy for disaster relief operations."},
        {"id": 12, "name": "Customer Experience", "short": "CX/Personalization", "category": "experience", "description": "AI-driven personalization engines embedded in retail, powered wirelessly for seamless omnichannel."},
        {"id": 13, "name": "Energy Tech", "short": "Storage/Decentralized Grid", "category": "core", "description": "Harver MicroGrid™ solutions create hyper-local energy networks that are 100% resilient."},
        {"id": 14, "name": "Cybersecurity", "short": "Detection/Remediation", "category": "security", "description": "Quantum-resistant, self-powered security nodes operating indefinitely without battery weak points."},
        {"id": 15, "name": "Voice Assistants", "short": "NLP/Chatbots", "category": "experience", "description": "Always-on, battery-free voice interfaces for smart homes and industrial voice-command systems."},
        {"id": 16, "name": "Nanotechnology", "short": "Smart Dust/NanoMachines", "category": "advanced", "description": "Harver NanoHarvester™ particles—self-powered computing dust for environmental monitoring."},
        {"id": 17, "name": "Collaborative Tech", "short": "Open Source Platforms", "category": "connectivity", "description": "Global developer ecosystem with WEH-powered collaboration hubs across continents."},
        {"id": 18, "name": "Health Tech", "short": "Genomics/Bionics", "category": "core", "description": "Implantable bionics and glucose monitors never requiring surgical battery replacement."},
        {"id": 19, "name": "Human-Computer Interaction", "short": "Biometrics/Gaze Tracking", "category": "experience", "description": "Seamless, always-available interfaces in public spaces and vehicles, powered invisibly."},
        {"id": 20, "name": "Geo-Spatial Tech", "short": "GIS/GPS/Navigation", "category": "data", "description": "Satellite-calibrated, self-powered sensor networks for precision agriculture and disaster warning."},
        {"id": 21, "name": "Advanced Materials", "short": "Composites/Nanomfg", "category": "advanced", "description": "Next-gen metamaterials optimized for maximum energy harvesting efficiency."},
        {"id": 22, "name": "Touch Interfaces", "short": "Haptics/Exoskeletons", "category": "experience", "description": "Exoskeleton and haptic feedback systems for immersive training, all wirelessly powered."},
        {"id": 23, "name": "Wireless Power", "short": "Ambient Harvesting", "category": "flagship", "description": "True ambient wireless power at scale—68% RF-to-DC conversion, 400% above industry benchmarks."},
        {"id": 24, "name": "Clean Tech", "short": "Sustainability", "category": "environment", "description": "Carbon-capture materials and water purification systems that self-power their own operations."},
        {"id": 25, "name": "Quantum Computing", "short": "Exascale", "category": "advanced", "description": "Cryogenically cooled quantum nodes stabilized by harvested thermal energy gradients."},
        {"id": 26, "name": "Smart Cities", "short": "Infrastructure/Transport", "category": "core", "description": "11 cities wired with fully energy-autonomous infrastructure including Delhi pilots."},
        {"id": 27, "name": "Edge/Fog Computing", "short": "Localized Processing", "category": "data", "description": "Processing clusters harvesting power from urban RF environments for zero-grid dependency."},
        {"id": 28, "name": "Next-Gen Internet", "short": "5G/Li-Fi/LoRa", "category": "connectivity", "description": "Li-Fi access points and LoRa gateways operating indefinitely off harvested energy."},
        {"id": 29, "name": "Proximity Tech", "short": "RFID/NFC/Beacons", "category": "connectivity", "description": "Passive, battery-free proximity systems for asset tracking and contactless commerce."},
        {"id": 30, "name": "New Screens", "short": "MicroLED/Digital Signage", "category": "experience", "description": "Large-format, self-powered digital billboards and interactive surfaces."}
    ]
    return {"technologies": technologies}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
