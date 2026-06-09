'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { TrendingUp, Globe, FileText, Users } from 'lucide-react';

const stats = [
  { value: 2.8, prefix: '$', suffix: 'B', label: 'Valuation', sub: 'Series C · 2023', icon: TrendingUp },
  { value: 214, prefix: '', suffix: '+', label: 'Patents', sub: 'Global IP Portfolio', icon: FileText },
  { value: 14, prefix: '', suffix: '', label: 'Countries', sub: 'Worldwide Operations', icon: Globe },
  { value: 1850, prefix: '', suffix: '', label: 'Employees', sub: '42% Hold PhDs', icon: Users },
];

function AnimatedNumber({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 4);
        setDisplayValue(value * easeOut);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  const formatted = value >= 100 ? Math.floor(displayValue).toLocaleString() : displayValue.toFixed(1);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{formatted}{suffix}
    </span>
  );
}

export function Stats() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section data-testid="stats-section" className="py-24 sm:py-32 relative">
      <div ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.2em] text-[#00F0FF] uppercase">The Scale</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tighter mt-4">
            Global Impact
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              data-testid={`stat-${stat.label.toLowerCase()}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bento-card group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#00F0FF]/10 flex items-center justify-center group-hover:bg-[#00F0FF]/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-[#00F0FF]" />
                </div>
              </div>
              <div className="stat-number text-5xl lg:text-6xl text-white mb-3">
                <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-white font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-[#888]">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
