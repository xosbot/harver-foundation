'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link as LinkedinIcon, MessageCircle } from 'lucide-react';

const leaders = [
  {
    name: 'Dr. Arjun Harver',
    role: 'Founder & Chief Visionary',
    bio: 'Former lead researcher at IIT Delhi\'s Advanced Materials Lab. Visionary physicist who pioneered ambient RF energy capture.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Chief Executive Officer',
    bio: 'Stanford MBA. 15 years scaling deep-tech ventures across Asia and Europe. Led Series C funding round.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Prof. Elena Voss',
    role: 'Chief Scientific Officer',
    bio: 'Ex-CERN. Nobel laureate advisor. Leads quantum-enhanced energy harvesting research with 47 patents to her name.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face',
  },
];

export function Leadership() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="leadership"
      data-testid="leadership-section"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div ref={containerRef} className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-xs tracking-[0.2em] text-[#D4FF00] uppercase block mb-4">
            Leadership
          </span>
          <h2
            data-testid="leadership-heading"
            className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6"
          >
            Visionary
            <br />
            <span className="text-[#A3A3A3]">Minds</span>
          </h2>
          <p className="text-lg text-[#A3A3A3] max-w-2xl mx-auto leading-relaxed">
            Guided by a 22-member Global Advisory Board featuring Nobel laureates and former heads of state.
          </p>
        </motion.div>

        {/* Leaders Grid */}
        <div className="grid md:grid-cols-3 gap-px bg-white/10">
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
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#D4FF00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-grotesk text-xl font-bold mb-1 group-hover:text-[#D4FF00] transition-colors">
                  {leader.name}
                </h3>
                <span className="font-mono text-xs tracking-wider text-[#D4FF00] uppercase block mb-3">
                  {leader.role}
                </span>
                <p className="text-[#A3A3A3] text-sm leading-relaxed mb-4">{leader.bio}</p>

                {/* Social Links */}
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="p-2 border border-white/10 text-[#737373] hover:border-[#D4FF00] hover:text-[#D4FF00] transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="p-2 border border-white/10 text-[#737373] hover:border-[#D4FF00] hover:text-[#D4FF00] transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
