'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Marquee from 'react-fast-marquee';

const marqueeWords = [
  'ARTIFICIAL INTELLIGENCE',
  'WIRELESS ENERGY',
  'QUANTUM COMPUTING',
  'SMART CITIES',
  'ROBOTICS',
  'NANOTECHNOLOGY',
  'HEALTH TECH',
  'CYBERSECURITY',
];

export function Hero() {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background Image - Real Industrial */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1771795172587-71ef788374e1?w=1920&q=80"
          alt="Industrial infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/70 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]/50" />
      </div>

      {/* Marquee Background */}
      <div className="absolute inset-0 flex items-center overflow-hidden opacity-[0.03] pointer-events-none">
        <Marquee speed={30} gradient={false}>
          {marqueeWords.map((word, i) => (
            <span
              key={i}
              className="text-[12vw] font-display font-black tracking-tighter mx-8 outline-text"
            >
              {word}
            </span>
          ))}
        </Marquee>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-16 h-px bg-[#FF3B00]" />
            <span className="font-mono text-xs tracking-[0.2em] text-[#FF3B00] uppercase">
              Est. 2012 — Delhi NCR, India
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            data-testid="hero-heading"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
          >
            <span className="block text-white">Energy</span>
            <span className="block text-[#FF3B00]">Harvested.</span>
            <span className="block text-[#8A8A93]">Intelligence</span>
            <span className="block text-white">Amplified.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            data-testid="hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-[#8A8A93] max-w-2xl leading-relaxed mb-12"
          >
            The definitive architect of tomorrow. Harnessing ambient energy to power{' '}
            <span className="text-white font-semibold">35+ integrated technology verticals</span>{' '}
            across 14 countries.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#technologies"
              data-testid="hero-cta-primary"
              className="btn-industrial px-8 py-4 text-sm tracking-wider flex items-center justify-center gap-3 group"
            >
              EXPLORE TECHNOLOGIES
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              data-testid="hero-cta-secondary"
              className="btn-outline px-8 py-4 text-sm tracking-wider text-center"
            >
              STRATEGIC PARTNERSHIP
            </a>
          </motion.div>
        </div>

        {/* Side Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="hidden xl:block absolute right-12 top-1/2 -translate-y-1/2"
        >
          <div className="border-l border-[#222225] pl-8 space-y-8">
            {[
              { value: '$2.8B', label: 'Valuation' },
              { value: '214', label: 'Patents' },
              { value: '14', label: 'Countries' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="stat-number text-3xl text-white">{stat.value}</div>
                <div className="font-mono text-xs text-[#8A8A93] tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-[#8A8A93] tracking-wider">SCROLL</span>
          <ChevronDown className="w-5 h-5 text-[#FF3B00]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
