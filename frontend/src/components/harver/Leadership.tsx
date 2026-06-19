'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Globe, Users, Award } from 'lucide-react';

const leaders = [
  {
    name: 'Dr. Shaan Sherif',
    role: 'Founder & Chief Visionary Officer',
    bio: 'Inventor, corporate consultant, and strategic catalyst. CEO & Co-Founder of Harver Space Corp and Harver Space Industries. Pioneering autonomous debris-clearing swarms, orbital power-beaming to fuel Earth from space. Founder of the ONE THING OS cross-platform energy grid.',
    gradient: 'from-[#00F0FF] to-[#0080FF]',
  },
];

const advisoryStats = [
  { label: 'Advisory Board Members', value: '22', icon: Users },
  { label: 'Avg. Industry Experience', value: '24 yrs', icon: Award },
  { label: 'Combined Patents Advised', value: '600+', icon: Award },
  { label: 'Countries Represented', value: '11', icon: Globe },
];

const aashrayamStats = [
  { label: 'Communities Served', value: '50+', icon: Heart },
  { label: 'Youth Trained', value: '10,000+', icon: Users },
  { label: 'Sustainability Score', value: '94%', icon: Globe },
  { label: 'Impact Rating', value: 'AAA', icon: Award },
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
              {/* CSS Avatar */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${leader.gradient} opacity-20`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-[#0A0A0A] border-2 border-[#00F0FF]/30 flex items-center justify-center">
                    <span className="font-display text-4xl text-[#00F0FF]">DS</span>
                  </div>
                </div>
                {/* Decorative rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border border-[#00F0FF]/10 animate-[spin_20s_linear_infinite]" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full border border-[#00F0FF]/5 animate-[spin_30s_linear_infinite_reverse]" />
                </div>
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
            <div key={i} className="bento-card text-center group">
              <div className="w-10 h-10 rounded-xl bg-[#00F0FF]/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#00F0FF]/20 transition-colors">
                <stat.icon className="w-5 h-5 text-[#00F0FF]" />
              </div>
              <div className="stat-number text-3xl text-white mb-2">{stat.value}</div>
              <div className="text-sm text-[#888]">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Aashrayam Initiative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12"
        >
          <div className="bento-card glow-accent">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#00F0FF]/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#00F0FF]" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">Aashrayam</h3>
                <span className="font-mono text-xs tracking-wider text-[#00F0FF] uppercase">
                  Humanitarian Initiative
                </span>
              </div>
            </div>
            <p className="text-[#888] leading-relaxed mb-6">
              Our social impact arm bridges deep tech with grassroots development. From training rural youth in
              AI and IoT to deploying clean energy solutions in underserved communities, Aashrayam ensures
              technology serves humanity at every level.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {aashrayamStats.map((stat, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#030303] border border-white/5 text-center">
                  <stat.icon className="w-5 h-5 text-[#00F0FF] mx-auto mb-2" />
                  <div className="stat-number text-2xl text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-[#888]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
