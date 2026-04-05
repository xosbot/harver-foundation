'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Globe, Cpu } from 'lucide-react';

export function Hero() {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#050505]">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/80 to-[#050505]" />
        <div className="absolute inset-0 grid-bg" />
      </div>

      {/* Floating Energy Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D4FF00]"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
              opacity: 0,
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Pre-heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-[#D4FF00]" />
            <span className="font-mono text-xs tracking-[0.3em] text-[#D4FF00] uppercase">
              Est. 2012 • Delhi NCR, India
            </span>
            <div className="h-px w-12 bg-[#D4FF00]" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            data-testid="hero-heading"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-grotesk text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-8"
          >
            <span className="block">Energy</span>
            <span className="block gradient-text">Harvested.</span>
            <span className="block text-[#A3A3A3]">Intelligence</span>
            <span className="block">Amplified.</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            data-testid="hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-[#A3A3A3] max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            The definitive architect of tomorrow. Harnessing ambient energy to power 
            <span className="text-white font-medium"> 35+ integrated technology verticals</span> across 14 countries.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#technologies"
              data-testid="hero-cta-primary"
              className="btn-primary px-8 py-4 text-base font-semibold flex items-center gap-2 group"
            >
              Explore Technologies
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              data-testid="hero-cta-secondary"
              className="btn-secondary px-8 py-4 text-base font-semibold"
            >
              Strategic Partnership
            </a>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-20 flex flex-wrap justify-center gap-4"
          >
            {[
              { icon: Zap, text: 'Wireless Energy Harvesting' },
              { icon: Globe, text: '14 Countries' },
              { icon: Cpu, text: '35+ Tech Verticals' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5"
              >
                <item.icon className="w-4 h-4 text-[#D4FF00]" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border border-white/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[#D4FF00]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
