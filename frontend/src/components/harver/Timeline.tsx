'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const milestones = [
  { year: '2012', title: 'The Spark', description: 'First wireless energy harvesting prototype at IIT Delhi.', color: '#00F0FF' },
  { year: '2014', title: 'Patent Foundation', description: '27 patent filings across 11 jurisdictions.', color: '#00F0FF' },
  { year: '2017', title: 'Commercial Launch', description: "World's first commercial WEH IoT kit.", color: '#00F0FF' },
  { year: '2020', title: 'Global Expansion', description: 'Medical sensors deployed in pandemic response.', color: '#00F0FF' },
  { year: '2023', title: 'Unicorn Status', description: '$1B+ valuation. Temasek & SoftBank backing.', color: '#0080FF' },
  { year: '2025', title: 'Quantum Leap', description: '214 patents. Quantum-enhanced harvesting.', color: '#0080FF' },
  { year: '2026', title: 'Today', description: '$2.8B valuation. 11 global R&D hubs.', color: '#00F0FF' },
];

export function Timeline() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="journey"
      data-testid="timeline-section"
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      {/* CSS Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#030303]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00F0FF]/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0080FF]/3 rounded-full blur-[100px]" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,240,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-xs tracking-[0.2em] text-[#00F0FF] uppercase">Our Journey</span>
          <h2
            data-testid="timeline-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mt-4"
          >
            From Lab to <span className="text-[#888]">Global Leader</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Animated Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px">
            <div className="absolute inset-0 bg-gradient-to-b from-[#00F0FF] via-white/20 to-transparent" />
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : {}}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#00F0FF] to-transparent"
            />
          </div>

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              data-testid={`milestone-${milestone.year}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`relative mb-12 pl-10 md:pl-0 ${
                index % 2 === 0 ? 'md:pr-[55%] md:text-right' : 'md:pl-[55%]'
              }`}
            >
              {/* Node with pulse */}
              <div
                className={`absolute w-4 h-4 rounded-full bg-[#030303] border-2 ${
                  index % 2 === 0
                    ? 'left-[-6px] md:left-auto md:right-[calc(50%-8px)]'
                    : 'left-[-6px] md:left-[calc(50%-8px)]'
                }`}
                style={{
                  top: '4px',
                  borderColor: milestone.color,
                  boxShadow: `0 0 20px ${milestone.color}80`,
                }}
              >
                <div
                  className="absolute inset-[-4px] rounded-full border animate-ping"
                  style={{ borderColor: `${milestone.color}40` }}
                />
              </div>

              {/* Content Card */}
              <div className="group p-5 rounded-2xl bg-[#0A0A0A]/80 border border-white/5 hover:border-[#00F0FF]/30 transition-all duration-300">
                <span className="stat-number text-3xl text-white group-hover:text-[#00F0FF] transition-colors">
                  {milestone.year}
                </span>
                <h3 className="font-display text-xl font-bold mt-2 mb-2">{milestone.title}</h3>
                <p className="text-[#888] text-sm">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
