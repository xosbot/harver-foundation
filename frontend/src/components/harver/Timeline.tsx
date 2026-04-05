'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const milestones = [
  {
    year: '2012',
    title: 'The Spark',
    description: 'First successful wireless energy harvesting prototype (0.8 mW from 2.4 GHz ambient signals) at IIT Delhi.',
    highlight: false,
  },
  {
    year: '2014',
    title: 'Patent Foundation',
    description: 'Patent portfolio reaches 27 filings across 11 jurisdictions on rectenna efficiency and energy beamforming.',
    highlight: false,
  },
  {
    year: '2017',
    title: 'Commercial Launch',
    description: "World's first commercial Wireless Energy Harvesting IoT kit, adopted by 14 smart-city pilots.",
    highlight: true,
  },
  {
    year: '2020',
    title: 'Global Expansion',
    description: 'Proved wireless-powered medical sensors could operate in resource-constrained environments during the pandemic.',
    highlight: false,
  },
  {
    year: '2023',
    title: 'Unicorn Status',
    description: 'Valuation surpasses $1 billion following Series C funding led by Temasek and SoftBank Vision Fund.',
    highlight: true,
  },
  {
    year: '2025',
    title: 'Quantum Leap',
    description: 'Acquisition of three deep-tech startups specializing in quantum-enhanced energy harvesting. IP moat expands to 214 patents.',
    highlight: true,
  },
  {
    year: '2026',
    title: 'Today',
    description: '$2.8B valuation. 1,850 employees (42% PhDs). 11 global R&D hubs. Manufacturing in India, Vietnam, and Germany.',
    highlight: true,
  },
];

export function Timeline() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="history"
      data-testid="timeline-section"
      className="py-24 md:py-32 relative overflow-hidden bg-[#0a0a0a]"
    >
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div ref={containerRef} className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-xs tracking-[0.2em] text-[#D4FF00] uppercase block mb-4">
            Our Journey
          </span>
          <h2
            data-testid="timeline-heading"
            className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6"
          >
            From Lab to
            <br />
            <span className="text-[#A3A3A3]">Global Leader</span>
          </h2>
          <p className="text-lg text-[#A3A3A3] max-w-2xl mx-auto leading-relaxed">
            The story of Harver begins not in a Silicon Valley garage, but in the intellectually fertile 
            soil of New Delhi, India, in 2012.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4FF00] via-[#D4FF00]/50 to-transparent" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              data-testid={`milestone-${milestone.year}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-[55%]' : 'md:pl-[55%]'
              }`}
            >
              {/* Node */}
              <div
                className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 ${
                  milestone.highlight ? 'bg-[#D4FF00]' : 'bg-[#1A1A1A] border-2 border-[#D4FF00]'
                }`}
              />

              {/* Content Card */}
              <div
                className={`ml-12 md:ml-0 p-6 border transition-all duration-300 ${
                  milestone.highlight
                    ? 'border-[#D4FF00]/30 bg-[#D4FF00]/5 glow-energy'
                    : 'border-white/10 bg-[#121212] hover:border-[#D4FF00]/30'
                }`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <span
                    className={`font-grotesk text-3xl font-black ${
                      milestone.highlight ? 'text-[#D4FF00]' : 'text-white'
                    }`}
                  >
                    {milestone.year}
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <h3 className="font-grotesk text-xl font-bold mb-2">{milestone.title}</h3>
                <p className="text-[#A3A3A3] text-sm leading-relaxed">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
