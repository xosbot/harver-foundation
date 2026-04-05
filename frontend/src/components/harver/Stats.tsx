'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const stats = [
  { value: 2.8, suffix: 'B', prefix: '$', label: 'Valuation', description: 'Series C 2023' },
  { value: 214, suffix: '', prefix: '', label: 'Patents', description: 'Global IP Portfolio' },
  { value: 14, suffix: '', prefix: '', label: 'Countries', description: 'Global Operations' },
  { value: 1850, suffix: '', prefix: '', label: 'Employees', description: '42% PhDs' },
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
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.floor(value * easeOut * 10) / 10);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {value >= 100 ? Math.floor(displayValue).toLocaleString() : displayValue.toFixed(1)}
      {suffix}
    </span>
  );
}

export function Stats() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section data-testid="stats-section" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      <div ref={containerRef} className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              data-testid={`stat-${stat.label.toLowerCase()}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-[#050505] p-8 md:p-12 text-center group hover:bg-[#0a0a0a] transition-colors"
            >
              <div className="font-grotesk text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-2 group-hover:text-[#D4FF00] transition-colors">
                <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="font-mono text-xs tracking-[0.2em] text-[#D4FF00] uppercase mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-[#737373]">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
