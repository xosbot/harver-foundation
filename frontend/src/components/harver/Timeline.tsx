'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const milestones = [
  {
    year: '2012',
    title: 'The Spark',
    description: 'First successful wireless energy harvesting prototype (0.8 mW from 2.4 GHz ambient signals) at IIT Delhi.',
  },
  {
    year: '2014',
    title: 'Patent Foundation',
    description: 'Patent portfolio reaches 27 filings across 11 jurisdictions on rectenna efficiency and energy beamforming.',
  },
  {
    year: '2017',
    title: 'Commercial Launch',
    description: "World's first commercial Wireless Energy Harvesting IoT kit, adopted by 14 smart-city pilots.",
  },
  {
    year: '2020',
    title: 'Global Expansion',
    description: 'Wireless-powered medical sensors proved operational in resource-constrained environments during pandemic.',
  },
  {
    year: '2023',
    title: 'Unicorn Status',
    description: 'Valuation surpasses $1 billion following Series C funding led by Temasek and SoftBank Vision Fund.',
  },
  {
    year: '2025',
    title: 'Quantum Leap',
    description: 'Acquisition of three deep-tech startups. IP moat expands to 214 patents in quantum-enhanced harvesting.',
  },
  {
    year: '2026',
    title: 'Today',
    description: '$2.8B valuation. 1,850 employees. 11 global R&D hubs. Manufacturing in India, Vietnam, and Germany.',
  },
];

export function Timeline() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="history"
      data-testid="timeline-section"
      className="py-24 lg:py-32 relative overflow-hidden bg-[#0C0C0E]"
    >
      <div ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-px bg-[#FF3B00]" />
            <span className="font-mono text-xs tracking-[0.2em] text-[#FF3B00] uppercase">
              Our Journey
            </span>
          </div>
          <h2
            data-testid="timeline-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95]"
          >
            From Lab to
            <br />
            <span className="text-[#8A8A93]">Global Leader</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Main Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px timeline-line" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              data-testid={`milestone-${milestone.year}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative mb-12 lg:mb-16 pl-12 lg:pl-0 ${
                index % 2 === 0 ? 'lg:pr-[55%] lg:text-right' : 'lg:pl-[55%]'
              }`}
            >
              {/* Node */}
              <div
                className={`absolute w-3 h-3 bg-[#FF3B00] ${
                  index % 2 === 0
                    ? 'left-[13px] lg:left-auto lg:right-[calc(50%-6px)]'
                    : 'left-[13px] lg:left-[calc(50%-6px)]'
                }`}
                style={{ top: '8px' }}
              />

              {/* Connector Line */}
              <div
                className={`absolute top-[14px] h-px bg-[#222225] hidden lg:block ${
                  index % 2 === 0
                    ? 'right-[calc(50%+6px)] w-8'
                    : 'left-[calc(50%+6px)] w-8'
                }`}
              />

              {/* Content */}
              <div className="group">
                <div className={`flex items-center gap-4 mb-3 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                  <span className="stat-number text-3xl lg:text-4xl text-white group-hover:text-[#FF3B00] transition-colors">
                    {milestone.year}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{milestone.title}</h3>
                <p className="text-[#8A8A93] text-sm leading-relaxed max-w-md">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
