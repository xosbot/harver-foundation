import { NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL;

export async function GET() {
  if (!BACKEND_URL) {
    // Return fallback data when backend URL is not configured
    return NextResponse.json({ technologies: getFallbackTechnologies() });
  }

  try {
    const response = await fetch(`${BACKEND_URL}/api/technologies`);
    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    // Fallback data if backend is unavailable
    return NextResponse.json({ technologies: getFallbackTechnologies() });
  }
}

function getFallbackTechnologies() {
  return [
      { id: 1, name: 'Artificial Intelligence', short: 'AI/ML/Deep Learning', category: 'core', description: 'Battery-free neural processors enable real-time inference in remote environments.' },
      { id: 2, name: 'Internet of Things', short: 'IoT/IIoT/Sensors', category: 'core', description: 'World\'s largest deployment of self-powered IoT—over 1.2 million nodes.' },
      { id: 3, name: 'Mobile/Social Internet', short: '5G/6G Edge Nodes', category: 'connectivity', description: 'Energy-autonomous 5G/6G edge nodes for livestreaming and social mesh networks.' },
      { id: 4, name: 'Blockchain', short: 'Distributed Ledgers', category: 'core', description: 'WEH-powered blockchain validators reducing crypto\'s carbon footprint by 99%.' },
      { id: 5, name: 'Big Data', short: 'Predictive Analytics', category: 'data', description: 'Decentralized analytics engines powered by harvested energy.' },
      { id: 6, name: 'Automation', short: 'Process/Decision/Action', category: 'industrial', description: 'Fully autonomous robotic process automation across 87 manufacturing lines.' },
      { id: 7, name: 'Robots & Drones', short: 'Autonomous Vehicles', category: 'core', description: 'SkyHarvester™ drone fleets with 1.4 million flight hours logged.' },
      { id: 8, name: 'Immersive Media', short: 'VR/AR/MR/360°', category: 'experience', description: 'Wireless-powered AR glasses and haptic suits for enterprise training.' },
      { id: 9, name: 'Mobile Technologies', short: 'Infrastructure/Networks', category: 'connectivity', description: 'Private 5G networks powered entirely by WEH base stations.' },
      { id: 10, name: 'Cloud Computing', short: 'SaaS/IaaS/PaaS/MESH', category: 'data', description: 'Harver MeshCloud™ edge-cloud with 14 Fortune 500 clients.' },
      { id: 11, name: '3D Printing', short: 'Additive Manufacturing', category: 'industrial', description: 'Field-deployable 3D printers for disaster relief operations.' },
      { id: 12, name: 'Customer Experience', short: 'CX/Personalization', category: 'experience', description: 'AI-driven personalization engines in retail environments.' },
      { id: 13, name: 'Energy Tech', short: 'Storage/Decentralized Grid', category: 'core', description: 'Harver MicroGrid™ 100% resilient energy networks.' },
      { id: 14, name: 'Cybersecurity', short: 'Detection/Remediation', category: 'security', description: 'Quantum-resistant, self-powered security nodes.' },
      { id: 15, name: 'Voice Assistants', short: 'NLP/Chatbots', category: 'experience', description: 'Always-on, battery-free voice interfaces.' },
      { id: 16, name: 'Nanotechnology', short: 'Smart Dust/NanoMachines', category: 'advanced', description: 'Self-powered computing dust for environmental monitoring.' },
      { id: 17, name: 'Collaborative Tech', short: 'Open Source Platforms', category: 'connectivity', description: 'Global WEH-powered collaboration hubs.' },
      { id: 18, name: 'Health Tech', short: 'Genomics/Bionics', category: 'core', description: 'Implantable bionics never requiring battery replacement.' },
      { id: 19, name: 'Human-Computer Interaction', short: 'Biometrics/Gaze Tracking', category: 'experience', description: 'Seamless interfaces powered invisibly.' },
      { id: 20, name: 'Geo-Spatial Tech', short: 'GIS/GPS/Navigation', category: 'data', description: 'Self-powered sensor networks for precision agriculture.' },
      { id: 21, name: 'Advanced Materials', short: 'Composites/Nanomfg', category: 'advanced', description: 'Metamaterials for maximum harvesting efficiency.' },
      { id: 22, name: 'Touch Interfaces', short: 'Haptics/Exoskeletons', category: 'experience', description: 'Wirelessly powered haptic feedback systems.' },
      { id: 23, name: 'Wireless Power', short: 'Ambient Harvesting', category: 'flagship', description: 'True ambient wireless power at scale—68% RF-to-DC conversion.' },
      { id: 24, name: 'Clean Tech', short: 'Sustainability', category: 'environment', description: 'Self-powered carbon-capture and water purification.' },
      { id: 25, name: 'Quantum Computing', short: 'Exascale', category: 'advanced', description: 'Quantum nodes stabilized by harvested thermal energy.' },
      { id: 26, name: 'Smart Cities', short: 'Infrastructure/Transport', category: 'core', description: '11 cities with energy-autonomous infrastructure.' },
      { id: 27, name: 'Edge/Fog Computing', short: 'Localized Processing', category: 'data', description: 'Processing clusters harvesting urban RF energy.' },
      { id: 28, name: 'Next-Gen Internet', short: '5G/Li-Fi/LoRa', category: 'connectivity', description: 'Li-Fi and LoRa gateways operating off harvested energy.' },
      { id: 29, name: 'Proximity Tech', short: 'RFID/NFC/Beacons', category: 'connectivity', description: 'Battery-free proximity systems for asset tracking.' },
      { id: 30, name: 'New Screens', short: 'MicroLED/Digital Signage', category: 'experience', description: 'Self-powered digital billboards and interactive surfaces.' },
    ];
}
