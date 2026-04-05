'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { LucideIcon, X, ExternalLink } from 'lucide-react';
import {
  Brain, Cpu, Smartphone, Link, Database, Settings, Bot, Glasses,
  Wifi, Cloud, Printer, Users, Zap, Shield, Mic, Atom,
  UsersRound, Heart, Fingerprint, MapPin, Layers, Hand,
  BatteryCharging, Leaf, CircuitBoard, Building, Server, Radio,
  Bluetooth, Monitor
} from 'lucide-react';

const iconMap: { [key: string]: LucideIcon } = {
  'Artificial Intelligence': Brain, 'Internet of Things': Cpu, 'Mobile/Social Internet': Smartphone,
  'Blockchain': Link, 'Big Data': Database, 'Automation': Settings, 'Robots & Drones': Bot,
  'Immersive Media': Glasses, 'Mobile Technologies': Wifi, 'Cloud Computing': Cloud,
  '3D Printing': Printer, 'Customer Experience': Users, 'Energy Tech': Zap, 'Cybersecurity': Shield,
  'Voice Assistants': Mic, 'Nanotechnology': Atom, 'Collaborative Tech': UsersRound,
  'Health Tech': Heart, 'Human-Computer Interaction': Fingerprint, 'Geo-Spatial Tech': MapPin,
  'Advanced Materials': Layers, 'Touch Interfaces': Hand, 'Wireless Power': BatteryCharging,
  'Clean Tech': Leaf, 'Quantum Computing': CircuitBoard, 'Smart Cities': Building,
  'Edge/Fog Computing': Server, 'Next-Gen Internet': Radio, 'Proximity Tech': Bluetooth, 'New Screens': Monitor,
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

  return (
    <section
      id="technologies"
      data-testid="technologies-section"
      className="py-24 sm:py-32 relative overflow-hidden bg-[#0A0A0A]"
    >
      <div className="absolute inset-0 noise" />

      <div ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.2em] text-[#00F0FF] uppercase">Technology Portfolio</span>
          <h2
            data-testid="technologies-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mt-4 mb-4"
          >
            35+ Integrated Verticals
          </h2>
          <p className="text-lg text-[#888] max-w-2xl mx-auto">
            Every Harver solution creates a closed-loop energy-intelligence ecosystem.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
          data-testid="tech-filters"
        >
          {categories.map(cat => (
            <button
              key={cat}
              data-testid={`filter-${cat}`}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 text-xs font-medium uppercase tracking-wider rounded-full transition-all ${
                filter === cat
                  ? 'bg-white text-black'
                  : 'bg-white/5 text-[#888] hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {filteredTechs.map((tech, index) => {
            const TechIcon = Icon(tech.name);
            return (
              <motion.button
                key={tech.id}
                data-testid={`tech-card-${tech.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.02, duration: 0.4 }}
                onClick={() => setSelectedTech(tech)}
                className="card-premium p-5 text-left group"
              >
                <TechIcon className="w-8 h-8 text-[#00F0FF] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-medium text-sm text-white mb-1 group-hover:text-[#00F0FF] transition-colors line-clamp-2">
                  {tech.name}
                </h3>
                <p className="font-mono text-[10px] text-[#555] uppercase tracking-wider line-clamp-1">
                  {tech.short}
                </p>
              </motion.button>
            );
          })}
        </div>

        {/* Count */}
        <div className="mt-10 text-center">
          <span className="text-sm text-[#555]">
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedTech(null)}
            data-testid="tech-modal"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-[#0A0A0A] border border-white/10 rounded-3xl max-w-lg w-full p-8 relative"
            >
              <button
                onClick={() => setSelectedTech(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-[#888] hover:text-white transition-colors"
                data-testid="modal-close"
              >
                <X className="w-5 h-5" />
              </button>

              {(() => {
                const ModalIcon = Icon(selectedTech.name);
                return (
                  <div className="w-16 h-16 rounded-2xl bg-[#00F0FF]/10 flex items-center justify-center mb-6">
                    <ModalIcon className="w-8 h-8 text-[#00F0FF]" />
                  </div>
                );
              })()}

              <span className="font-mono text-xs tracking-wider text-[#555] uppercase">
                {selectedTech.category}
              </span>
              <h3 className="font-display text-2xl font-bold mt-2 mb-4">{selectedTech.name}</h3>
              <p className="text-[#888] leading-relaxed mb-6">{selectedTech.description}</p>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="font-mono text-xs text-[#00F0FF]">
                  WEH IMPACT: 24/7 autonomous operations
                </span>
                <button className="flex items-center gap-2 text-sm text-white hover:text-[#00F0FF] transition-colors">
                  Learn More <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
