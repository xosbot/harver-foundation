'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* CSS-based Background */}
      <div className="absolute inset-0">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-[#030303]" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#00F0FF]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#0080FF]/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00F0FF]/3 rounded-full blur-[150px]" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,240,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Radial vignette */}
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#030303]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-[#888]">
              <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse-glow" />
              Pioneering Deep Tech Since 2012
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            data-testid="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.95] mb-8"
          >
            <span className="block text-white">Energy Harvested.</span>
            <span className="block text-gradient">Intelligence Amplified.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            data-testid="hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg lg:text-xl text-[#888] max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Pioneering wireless energy harvesting across{' '}
            <span className="text-white">35+ integrated technology verticals</span>{' '}
            spanning 14 countries. The $16.4B wireless power market is just the beginning.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#technologies"
              data-testid="hero-cta-primary"
              className="btn-premium px-8 py-4 text-base flex items-center gap-2 group"
            >
              Explore Technologies
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              data-testid="hero-cta-secondary"
              className="btn-ghost px-8 py-4 text-base"
            >
              Strategic Partnership
            </a>
          </motion.div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-24 lg:mt-32"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {[
              { value: '$16.4B', label: 'WPT Market 2025' },
              { value: '20.4%', label: 'Market CAGR' },
              { value: '35+', label: 'Tech Verticals' },
              { value: '14', label: 'Countries Active' },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-[#030303]/80 backdrop-blur-xl px-6 py-8 text-center"
              >
                <div className="stat-number text-3xl lg:text-4xl text-white mb-2">{stat.value}</div>
                <div className="text-sm text-[#888]">{stat.label}</div>
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
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-[#00F0FF]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
