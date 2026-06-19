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

          {/* Right - CSS Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Animated rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-[#00F0FF]/10 animate-[spin_60s_linear_infinite]" />
              </div>
              <div className="absolute inset-8 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-[#00F0FF]/15 animate-[spin_45s_linear_infinite_reverse]" />
              </div>
              <div className="absolute inset-16 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-[#00F0FF]/20 animate-[spin_30s_linear_infinite]" />
              </div>

              {/* Center glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-[#00F0FF]/10 blur-xl animate-pulse" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[#00F0FF]/20 blur-lg animate-pulse" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#00F0FF]/30 blur-md" />
              </div>

              {/* Orbiting dots */}
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <div
                  key={i}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ transform: `rotate(${deg}deg)` }}
                >
                  <div
                    className="absolute w-3 h-3 rounded-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]"
                    style={{ top: '0', left: '50%', transform: 'translateX(-50%)' }}
                  />
                </div>
              ))}

              {/* Labels */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 font-mono text-[10px] text-[#00F0FF]/50 tracking-wider">
                RF ENERGY
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] text-[#00F0FF]/50 tracking-wider">
                DC OUTPUT
              </div>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[10px] text-[#00F0FF]/50 tracking-wider writing-mode-vertical" style={{ writingMode: 'vertical-rl' }}>
                THERMAL
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-[10px] text-[#00F0FF]/50 tracking-wider" style={{ writingMode: 'vertical-rl' }}>
                KINETIC
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
