'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';
import {
  Brain, Cpu, Smartphone, Link, Database, Settings, Bot, Glasses,
  Wifi, Cloud, Printer, Users, Zap, Shield, Mic, Atom,
  UsersRound, Heart, Fingerprint, MapPin, Layers, Hand,
  BatteryCharging, Leaf, CircuitBoard, Building, Server, Radio,
  Bluetooth, Monitor, X
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
      .catch(() => setTechnologies([]));
  }, []);

  const categories = ['all', ...Array.from(new Set(technologies.map(t => t.category)))];
  const filteredTechs = filter === 'all' ? technologies : technologies.filter(t => t.category === filter);
  const Icon = (name: string) => iconMap[name] || Cpu;

  // Group technologies for bento layout
  const featuredTechs = filteredTechs.slice(0, 6);
  const gridTechs = filteredTechs.slice(6);

  return (
    <section
      id="technologies"
      data-testid="technologies-section"
      className="py-24 lg:py-32 relative overflow-hidden bg-[#050505]"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-technical opacity-50" />

      <div ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-px bg-[#FF3B00]" />
            <span className="font-mono text-xs tracking-[0.2em] text-[#FF3B00] uppercase">
              Technology Portfolio
            </span>
          </div>
          <h2
            data-testid="technologies-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] mb-4"
          >
            35+ Integrated
            <br />
            <span className="text-[#8A8A93]">Verticals</span>
          </h2>
          <p className="text-lg text-[#8A8A93] max-w-2xl">
            Every Harver solution creates a closed-loop energy-intelligence ecosystem.
            Click any technology to explore real-world deployments.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap gap-2 mb-10"
          data-testid="tech-filters"
        >
          {categories.map(cat => (
            <button
              key={cat}
              data-testid={`filter-${cat}`}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all ${
                filter === cat
                  ? 'bg-[#FF3B00] text-white'
                  : 'bg-[#0C0C0E] border border-[#222225] text-[#8A8A93] hover:border-[#FF3B00] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Bento Grid - Featured */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-[#222225] mb-px">
          {featuredTechs.map((tech, index) => {
            const TechIcon = Icon(tech.name);
            return (
              <motion.button
                key={tech.id}
                data-testid={`tech-card-${tech.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                onClick={() => setSelectedTech(tech)}
                className="bg-[#0C0C0E] p-6 lg:p-8 text-left group hover:bg-[#141417] transition-all relative"
              >
                <TechIcon className="w-10 h-10 text-[#FF3B00] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display font-bold text-lg mb-1 group-hover:text-[#FF3B00] transition-colors">
                  {tech.name}
                </h3>
                <p className="font-mono text-xs text-[#8A8A93] uppercase tracking-wider">
                  {tech.short}
                </p>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#FF3B00] group-hover:w-full transition-all duration-300" />
              </motion.button>
            );
          })}
        </div>

        {/* Dense Grid - Rest */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-px bg-[#222225]">
          {gridTechs.map((tech, index) => {
            const TechIcon = Icon(tech.name);
            return (
              <motion.button
                key={tech.id}
                data-testid={`tech-card-${tech.id}`}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.02, duration: 0.3 }}
                onClick={() => setSelectedTech(tech)}
                className="bg-[#0C0C0E] p-4 text-left group hover:bg-[#141417] transition-all"
              >
                <TechIcon className="w-6 h-6 text-[#8A8A93] mb-2 group-hover:text-[#FF3B00] transition-colors" />
                <h3 className="font-medium text-xs text-white group-hover:text-[#FF3B00] transition-colors line-clamp-2">
                  {tech.name}
                </h3>
              </motion.button>
            );
          })}
        </div>

        {/* Count */}
        <div className="mt-6 text-center">
          <span className="font-mono text-sm text-[#8A8A93]">
            Showing {filteredTechs.length} of 30 technologies
          </span>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedTech && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedTech(null)}
            data-testid="tech-modal"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-[#0C0C0E] border border-[#222225] max-w-lg w-full relative"
            >
              <button
                onClick={() => setSelectedTech(null)}
                className="absolute top-4 right-4 p-2 text-[#8A8A93] hover:text-white transition-colors"
                data-testid="modal-close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-1 bg-[#FF3B00]" />
              
              <div className="p-8">
                {(() => {
                  const ModalIcon = Icon(selectedTech.name);
                  return <ModalIcon className="w-12 h-12 text-[#FF3B00] mb-4" />;
                })()}

                <span className="font-mono text-xs tracking-wider text-[#8A8A93] uppercase">
                  {selectedTech.category}
                </span>
                <h3 className="font-display text-2xl font-bold mt-2 mb-4">{selectedTech.name}</h3>
                <p className="text-[#8A8A93] leading-relaxed mb-6">{selectedTech.description}</p>

                <div className="pt-4 border-t border-[#222225]">
                  <span className="font-mono text-xs text-[#FF3B00]">
                    WEH IMPACT: Powers 24/7 autonomous operations without grid dependency
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
