'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const leaders = [
  {
    name: 'Dr. Arjun Harver',
    role: 'Founder & Chief Visionary',
    bio: 'Former lead researcher at IIT Delhi. Pioneered ambient RF energy capture.',
    image: 'https://images.unsplash.com/photo-1762522926157-bcc04bf0b10a?w=600&q=80',
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Chief Executive Officer',
    bio: 'Stanford MBA. Led $1B+ Series C funding from Temasek & SoftBank.',
    image: 'https://images.unsplash.com/photo-1771898343647-bd979ad8cca5?w=600&q=80',
  },
  {
    name: 'Prof. Elena Voss',
    role: 'Chief Scientific Officer',
    bio: 'Ex-CERN. Nobel laureate advisor. 47 patents in quantum harvesting.',
    image: 'https://images.unsplash.com/photo-1769636929261-e913ed023c83?w=600&q=80',
  },
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
            Guided by a 22-member Global Advisory Board featuring Nobel laureates.
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
      </div>
    </section>
  );
}
