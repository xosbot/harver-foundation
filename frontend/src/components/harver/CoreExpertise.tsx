'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Radio, Cpu, Battery, Gauge, Leaf } from 'lucide-react';

const features = [
  {
    icon: Radio,
    title: 'Multi-Source Harvesting',
    description: 'Simultaneously captures RF (Wi-Fi, 5G, cellular), thermal gradients, vibration, and photovoltaic micro-energy.',
  },
  {
    icon: Cpu,
    title: 'AI-Driven Beamforming',
    description: 'Predictive algorithms forecast energy availability with 97.4% accuracy for zero-downtime operations.',
  },
  {
    icon: Zap,
    title: '68% RF-to-DC Conversion',
    description: 'Harver Rectenna MetaSurface™ achieves 400% improvement over 2022 industry benchmarks.',
  },
  {
    icon: Battery,
    title: 'Miniaturization Leadership',
    description: 'Harver chips measure 2.8 mm² yet deliver up to 15 mW continuous power for edge-AI inference.',
  },
  {
    icon: Gauge,
    title: '31% Global Market Share',
    description: 'Deployed in over 2.7 million devices worldwide across 41 countries.',
  },
  {
    icon: Leaf,
    title: 'Carbon-Negative Since 2024',
    description: '100% recyclable materials with carbon-negative manufacturing operations.',
  },
];

export function CoreExpertise() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="expertise"
      data-testid="expertise-section"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1760842543713-108c3cadbba1?w=1920&q=80"
          alt="Circuit board technology"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/95 to-[#050505]/90" />
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#FF3B00] flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="font-mono text-xs tracking-[0.2em] text-[#FF3B00] uppercase">
                  Core Expertise
                </span>
              </div>

              <h2
                data-testid="expertise-heading"
                className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] mb-6"
              >
                Wireless Energy
                <br />
                <span className="text-[#8A8A93]">Harvesting</span>
              </h2>

              <p className="text-lg text-[#8A8A93] leading-relaxed mb-8">
                The invisible backbone that electrifies all 35+ verticals. Unlike traditional wireless
                power transfer, Harver&apos;s WEH technology harvests ambient electromagnetic, thermal,
                kinetic, and photonic energy at unprecedented efficiencies.
              </p>

              {/* Key Metric */}
              <div className="border border-[#FF3B00]/30 bg-[#FF3B00]/5 p-6 glow-primary">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="font-mono text-xs text-[#FF3B00] tracking-wider mb-2">
                      HARVER RECTENNA METASURFACE™
                    </div>
                    <div className="text-sm text-[#8A8A93]">
                      Patented 2021 • AI-optimized nanostructured arrays
                    </div>
                  </div>
                  <div className="stat-number text-5xl lg:text-6xl text-[#FF3B00]">68%</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-px bg-[#222225]">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                data-testid={`expertise-feature-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-[#0C0C0E] p-6 group hover:bg-[#141417] transition-all"
              >
                <feature.icon className="w-8 h-8 text-[#FF3B00] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display font-bold text-lg mb-2 group-hover:text-[#FF3B00] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#8A8A93] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
