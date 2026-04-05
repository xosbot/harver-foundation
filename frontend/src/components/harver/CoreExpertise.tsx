'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Radio, Cpu, Battery, Gauge, Leaf } from 'lucide-react';

const features = [
  {
    icon: Radio,
    title: 'Multi-Source Harvesting',
    description: 'Simultaneously captures RF (Wi-Fi, 5G, cellular), thermal gradients, vibration (piezo), and photovoltaic micro-energy.',
  },
  {
    icon: Cpu,
    title: 'AI-Driven Beamforming',
    description: 'Predictive algorithms forecast energy availability with 97.4% accuracy, enabling zero-downtime operations.',
  },
  {
    icon: Zap,
    title: '68% RF-to-DC Conversion',
    description: 'Harver Rectenna MetaSurface™ achieves 400% improvement over 2022 industry benchmarks.',
  },
  {
    icon: Battery,
    title: 'Miniaturization Leadership',
    description: 'Harver chips measure 2.8 mm² yet deliver up to 15 mW continuous power—sufficient for edge-AI inference.',
  },
  {
    icon: Gauge,
    title: '31% Global Market Share',
    description: 'Deployed in over 2.7 million devices worldwide across 41 countries.',
  },
  {
    icon: Leaf,
    title: 'Carbon-Negative Manufacturing',
    description: '100% recyclable materials with carbon-negative operations since 2024.',
  },
];

export function CoreExpertise() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="expertise"
      data-testid="expertise-section"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/95 to-[#050505]" />
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#D4FF00] flex items-center justify-center">
              <Zap className="w-6 h-6 text-[#050505]" />
            </div>
            <span className="font-mono text-xs tracking-[0.2em] text-[#D4FF00] uppercase">
              Core Expertise
            </span>
          </div>
          <h2
            data-testid="expertise-heading"
            className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6"
          >
            Wireless Energy
            <br />
            <span className="text-[#A3A3A3]">Harvesting</span>
          </h2>
          <p className="text-lg text-[#A3A3A3] max-w-2xl leading-relaxed">
            The invisible backbone that electrifies all 35+ verticals. Unlike traditional wireless power 
            transfer, Harver's WEH technology harvests ambient electromagnetic, thermal, kinetic, and 
            photonic energy at unprecedented efficiencies.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              data-testid={`expertise-feature-${index}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-[#050505] p-8 group hover:bg-[#0a0a0a] transition-all duration-300 tech-card"
            >
              <feature.icon className="w-8 h-8 text-[#D4FF00] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-grotesk text-xl font-bold mb-3 group-hover:text-[#D4FF00] transition-colors">
                {feature.title}
              </h3>
              <p className="text-[#A3A3A3] text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 p-8 border border-[#D4FF00]/20 bg-[#D4FF00]/5 glow-energy"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="font-grotesk text-2xl font-bold mb-2">
                Harver Rectenna MetaSurface™
              </h3>
              <p className="text-[#A3A3A3]">
                Patented 2021 • AI-optimized nanostructured arrays that dynamically adapt to fluctuating energy landscapes
              </p>
            </div>
            <div className="font-grotesk text-5xl font-black text-[#D4FF00]">68%</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
