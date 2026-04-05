'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const stats = [
  { value: 2.8, suffix: 'B', prefix: '$', label: 'VALUATION', sub: 'Series C 2023' },
  { value: 214, suffix: '+', prefix: '', label: 'PATENTS', sub: 'Global IP Portfolio' },
  { value: 14, suffix: '', prefix: '', label: 'COUNTRIES', sub: 'Worldwide Operations' },
  { value: 1850, suffix: '', prefix: '', label: 'EMPLOYEES', sub: '42% PhDs' },
];

function AnimatedNumber({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const duration = 2500;
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

  const formatted = value >= 100 
    ? Math.floor(displayValue).toLocaleString() 
    : displayValue.toFixed(1);

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
    <section data-testid="stats-section" className="py-0 relative">
      <div ref={containerRef} className="max-w-7xl mx-auto">
        {/* Control Room Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              data-testid={`stat-${stat.label.toLowerCase()}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="border border-[#222225] p-8 lg:p-12 bg-[#0C0C0E] hover:bg-[#141417] transition-all group"
            >
              <div className="stat-number text-4xl sm:text-5xl lg:text-6xl text-white mb-4 group-hover:text-[#FF3B00] transition-colors">
                <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="font-mono text-xs tracking-[0.2em] text-[#FF3B00] mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-[#8A8A93]">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
