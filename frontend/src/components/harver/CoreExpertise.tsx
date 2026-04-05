'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Radio, Cpu, Battery, Gauge, Leaf } from 'lucide-react';

const features = [
  { icon: Radio, title: 'Multi-Source Harvesting', value: '5+', unit: 'Sources' },
  { icon: Cpu, title: 'AI Beamforming Accuracy', value: '97.4', unit: '%' },
  { icon: Zap, title: 'RF-to-DC Conversion', value: '68', unit: '%' },
  { icon: Battery, title: 'Chip Size', value: '2.8', unit: 'mm²' },
  { icon: Gauge, title: 'Global Market Share', value: '31', unit: '%' },
  { icon: Leaf, title: 'Carbon Negative Since', value: '2024', unit: '' },
];

export function CoreExpertise() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="expertise"
      data-testid="expertise-section"
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      <div ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs tracking-[0.2em] text-[#00F0FF] uppercase">Core Expertise</span>
            <h2
              data-testid="expertise-heading"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95] mt-4 mb-6"
            >
              Wireless Energy
              <br />
              <span className="text-[#888]">Harvesting</span>
            </h2>
            <p className="text-lg text-[#888] leading-relaxed mb-8">
              The invisible backbone that electrifies all 35+ verticals. Unlike traditional wireless
              power transfer, Harver&apos;s WEH technology harvests ambient electromagnetic, thermal,
              kinetic, and photonic energy at unprecedented efficiencies.
            </p>

            {/* Key Highlight */}
            <div className="bento-card glow-accent">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-xs text-[#00F0FF] tracking-wider mb-1">
                    HARVER RECTENNA METASURFACE™
                  </div>
                  <div className="text-sm text-[#888]">
                    Patented 2021 · AI-optimized nanostructured arrays
                  </div>
                </div>
                <div className="stat-number text-5xl text-[#00F0FF]">68%</div>
              </div>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  data-testid={`expertise-feature-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="p-4 rounded-2xl bg-[#0A0A0A] border border-white/5"
                >
                  <feature.icon className="w-5 h-5 text-[#00F0FF] mb-3" />
                  <div className="stat-number text-2xl text-white">
                    {feature.value}<span className="text-lg text-[#888]">{feature.unit}</span>
                  </div>
                  <div className="text-xs text-[#888] mt-1">{feature.title}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://static.prod-images.emergentagent.com/jobs/7eda1572-c4f0-42a3-ac66-6030124d9fc5/images/7cd7251051c5465a852a55dfecf8c07ce5d653ef1424df7144da9b85d0b29295.png"
                alt="Wireless Energy Technology"
                className="w-full h-auto animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
