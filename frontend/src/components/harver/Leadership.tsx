'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const leaders = [
  {
    name: 'Dr. Arjun Harver',
    role: 'Founder & Chief Visionary',
    bio: 'Former lead researcher at IIT Delhi\'s Advanced Materials Lab. Pioneered ambient RF energy capture technology.',
    image: 'https://images.pexels.com/photos/28442318/pexels-photo-28442318.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Chief Executive Officer',
    bio: 'Stanford MBA. 15 years scaling deep-tech ventures across Asia and Europe. Led $1B+ Series C funding round.',
    image: 'https://images.unsplash.com/photo-1770363756771-c288cfd6a3dc?w=600&q=80',
  },
  {
    name: 'Prof. Elena Voss',
    role: 'Chief Scientific Officer',
    bio: 'Ex-CERN. Nobel laureate advisor. Leads quantum-enhanced energy harvesting research with 47 patents.',
    image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?w=600&q=80',
  },
];

export function Leadership() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="leadership"
      data-testid="leadership-section"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      <div ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-[#FF3B00]" />
            <span className="font-mono text-xs tracking-[0.2em] text-[#FF3B00] uppercase">
              Leadership
            </span>
            <div className="w-16 h-px bg-[#FF3B00]" />
          </div>
          <h2
            data-testid="leadership-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] mb-4"
          >
            Visionary
            <br />
            <span className="text-[#8A8A93]">Minds</span>
          </h2>
          <p className="text-lg text-[#8A8A93] max-w-xl mx-auto">
            Guided by a 22-member Global Advisory Board featuring Nobel laureates and former heads of state.
          </p>
        </motion.div>

        {/* Leaders Grid */}
        <div className="grid md:grid-cols-3 gap-px bg-[#222225]">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              data-testid={`leader-${index}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-[#050505] group"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#FF3B00]/0 group-hover:bg-[#FF3B00]/10 transition-all duration-500" />
                
                {/* Bottom Border */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#FF3B00] group-hover:w-full transition-all duration-500" />
              </div>

              {/* Info */}
              <div className="p-6 lg:p-8">
                <h3 className="font-display text-xl font-bold mb-1 group-hover:text-[#FF3B00] transition-colors">
                  {leader.name}
                </h3>
                <span className="font-mono text-xs tracking-wider text-[#FF3B00] uppercase block mb-4">
                  {leader.role}
                </span>
                <p className="text-[#8A8A93] text-sm leading-relaxed">{leader.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
