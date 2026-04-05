'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';
import {
  Brain, Cpu, Smartphone, Link, Database, Settings, Bot, Glasses,
  Wifi, Cloud, Printer, Users, Zap, Shield, Mic, Atom,
  UsersRound, Heart, Fingerprint, MapPin, Layers, Hand,
  BatteryCharging, Leaf, CircuitBoard, Building, Server, Radio,
  Bluetooth, Monitor, ArrowRight, X
} from 'lucide-react';

const iconMap: { [key: string]: LucideIcon } = {
  'Artificial Intelligence': Brain,
  'Internet of Things': Cpu,
  'Mobile/Social Internet': Smartphone,
  'Blockchain': Link,
  'Big Data': Database,
  'Automation': Settings,
  'Robots & Drones': Bot,
  'Immersive Media': Glasses,
  'Mobile Technologies': Wifi,
  'Cloud Computing': Cloud,
  '3D Printing': Printer,
  'Customer Experience': Users,
  'Energy Tech': Zap,
  'Cybersecurity': Shield,
  'Voice Assistants': Mic,
  'Nanotechnology': Atom,
  'Collaborative Tech': UsersRound,
  'Health Tech': Heart,
  'Human-Computer Interaction': Fingerprint,
  'Geo-Spatial Tech': MapPin,
  'Advanced Materials': Layers,
  'Touch Interfaces': Hand,
  'Wireless Power': BatteryCharging,
  'Clean Tech': Leaf,
  'Quantum Computing': CircuitBoard,
  'Smart Cities': Building,
  'Edge/Fog Computing': Server,
  'Next-Gen Internet': Radio,
  'Proximity Tech': Bluetooth,
  'New Screens': Monitor,
};

const categoryColors: { [key: string]: string } = {
  core: '#D4FF00',
  flagship: '#D4FF00',
  connectivity: '#00D4FF',
  data: '#FF00D4',
  industrial: '#FF6B00',
  experience: '#00FF6B',
  security: '#FF0000',
  advanced: '#9D00FF',
  environment: '#00FF00',
};

interface Technology {
  id: number;
  name: string;
  short: string;
  category: string;
  description: string;
}

export function Technologies() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    fetch('/api/technologies')
      .then(res => res.json())
      .then(data => setTechnologies(data.technologies))
      .catch(() => {
        // Fallback data
        setTechnologies([
          { id: 1, name: 'Artificial Intelligence', short: 'AI/ML/Deep Learning', category: 'core', description: 'Battery-free neural processors (Harver NeuroCore™) enable real-time inference in remote environments.' },
          { id: 2, name: 'Internet of Things', short: 'IoT/IIoT/Sensors', category: 'core', description: 'World\'s largest deployment of self-powered IoT—over 1.2 million nodes.' },
          // Add more fallback items as needed
        ]);
      });
  }, []);

  const categories = ['all', ...Array.from(new Set(technologies.map(t => t.category)))];
  const filteredTechs = filter === 'all' ? technologies : technologies.filter(t => t.category === filter);

  const Icon = (name: string) => iconMap[name] || Cpu;

  return (
    <section
      id="technologies"
      data-testid="technologies-section"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div ref={containerRef} className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="font-mono text-xs tracking-[0.2em] text-[#D4FF00] uppercase block mb-4">
            Technology Portfolio
          </span>
          <h2
            data-testid="technologies-heading"
            className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6"
          >
            35+ Integrated
            <br />
            <span className="text-[#A3A3A3]">Verticals</span>
          </h2>
          <p className="text-lg text-[#A3A3A3] max-w-2xl leading-relaxed">
            Every Harver solution creates a closed-loop energy-intelligence ecosystem. 
            Click any technology to explore its real-world deployment.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap gap-2 mb-8"
          data-testid="tech-filters"
        >
          {categories.map(cat => (
            <button
              key={cat}
              data-testid={`filter-${cat}`}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all ${
                filter === cat
                  ? 'bg-[#D4FF00] text-[#050505]'
                  : 'border border-white/10 text-[#A3A3A3] hover:border-[#D4FF00] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/10">
          {filteredTechs.map((tech, index) => {
            const TechIcon = Icon(tech.name);
            return (
              <motion.button
                key={tech.id}
                data-testid={`tech-card-${tech.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.03, duration: 0.4 }}
                onClick={() => setSelectedTech(tech)}
                className="bg-[#050505] p-6 text-left group hover:bg-[#0a0a0a] transition-all duration-300 tech-card relative"
              >
                <div
                  className="absolute top-0 left-0 w-full h-0.5 transition-all duration-300 group-hover:h-1"
                  style={{ backgroundColor: categoryColors[tech.category] || '#D4FF00' }}
                />
                <TechIcon
                  className="w-8 h-8 mb-4 transition-colors"
                  color={categoryColors[tech.category] || '#D4FF00'}
                />
                <h3 className="font-grotesk font-bold text-sm mb-1 group-hover:text-[#D4FF00] transition-colors line-clamp-2">
                  {tech.name}
                </h3>
                <p className="text-[10px] font-mono text-[#737373] uppercase tracking-wider">
                  {tech.short}
                </p>
                <ArrowRight className="w-4 h-4 absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#D4FF00]" />
              </motion.button>
            );
          })}
        </div>

        {/* Technology Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <span className="font-mono text-sm text-[#737373]">
            Showing {filteredTechs.length} of 30 technologies
          </span>
        </motion.div>
      </div>

      {/* Technology Detail Modal */}
      <AnimatePresence>
        {selectedTech && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedTech(null)}
            data-testid="tech-modal"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-[#121212] border border-white/10 max-w-lg w-full p-8 relative"
            >
              <button
                onClick={() => setSelectedTech(null)}
                className="absolute top-4 right-4 p-2 text-[#737373] hover:text-white transition-colors"
                data-testid="modal-close"
              >
                <X className="w-5 h-5" />
              </button>

              <div
                className="w-full h-1 mb-6"
                style={{ backgroundColor: categoryColors[selectedTech.category] || '#D4FF00' }}
              />

              {(() => {
                const ModalIcon = Icon(selectedTech.name);
                return (
                  <ModalIcon
                    className="w-12 h-12 mb-4"
                    color={categoryColors[selectedTech.category] || '#D4FF00'}
                  />
                );
              })()}

              <span className="font-mono text-xs tracking-wider text-[#737373] uppercase">
                {selectedTech.category}
              </span>
              <h3 className="font-grotesk text-2xl font-bold mt-2 mb-4">{selectedTech.name}</h3>
              <p className="text-[#A3A3A3] leading-relaxed mb-6">{selectedTech.description}</p>

              <div className="pt-4 border-t border-white/10">
                <span className="font-mono text-xs text-[#D4FF00]">
                  WEH Impact: Powers 24/7 autonomous operations without grid dependency
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
