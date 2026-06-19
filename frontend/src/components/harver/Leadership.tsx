'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const leaders = [
  {
    name: 'Dr. Shaan Sherif',
    role: 'Founder & Chief Visionary Officer',
    bio: 'Inventor, corporate consultant, and strategic catalyst. CEO & Co-Founder of Harver Space Corp and Harver Space Industries. Pioneering autonomous debris-clearing swarms, orbital power-beaming to fuel Earth from space. Founder of the ONE THING OS cross-platform energy grid. Author of the HSI Dispatch newsletter on Medium covering orbital infrastructure, debris cleanup, and the future of space-powered civilization.',
    image: '/photo-profile.jpg',
  },
];

const advisoryStats = [
  { label: 'Advisory Board Members', value: '22' },
  { label: 'Avg. Industry Experience', value: '24 yrs' },
  { label: 'Combined Patents Advised', value: '600+' },
  { label: 'Countries Represented', value: '11' },
];

export function Leadership() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="leadership"
      data-testid="leadership-section"
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      <div ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.2em] text-[#00F0FF] uppercase">Leadership</span>
          <h2
            data-testid="leadership-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mt-4 mb-4"
          >
            Visionary Minds
          </h2>
          <p className="text-lg text-[#888] max-w-xl mx-auto">
            Founded by Dr. Shaan Sherif. Guided by a 22-member Global Advisory Board featuring Nobel laureates.
          </p>
        </motion.div>

        {/* Leaders Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              data-testid={`leader-${index}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="card-premium overflow-hidden group"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover grayscale-hover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-1 group-hover:text-[#00F0FF] transition-colors">
                  {leader.name}
                </h3>
                <span className="font-mono text-xs tracking-wider text-[#00F0FF] uppercase block mb-3">
                  {leader.role}
                </span>
                <p className="text-sm text-[#888] leading-relaxed">{leader.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advisory Board Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {advisoryStats.map((stat, i) => (
            <div key={i} className="bento-card text-center">
              <div className="stat-number text-3xl text-white mb-2">{stat.value}</div>
              <div className="text-sm text-[#888]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
