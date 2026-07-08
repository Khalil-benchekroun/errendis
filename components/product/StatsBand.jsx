'use client';

import { useEffect, useRef, useState } from 'react';

function AnimatedValue({ value }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);
  const numericMatch = value.match(/^(\d+)(.*)$/);

  useEffect(() => {
    if (!numericMatch) return; // valeurs non-numériques (LIVE, IA, GPS...) restent telles quelles
    const target = parseInt(numericMatch[1], 10);
    const suffix = numericMatch[2];
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const duration = 900;
        const start = performance.now();
        function tick(now) {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(target * eased) + suffix);
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{display}</span>;
}

export default function StatsBand({ stats }) {
  if (!stats?.length) return null;
  return (
    <section className="section" style={{ paddingBottom: 0 }}>
      <div className="container">
        <div className="stats-band">
          {stats.map((s) => (
            <div className="stat-item" key={s.label}>
              <span className="stat-value">
                <AnimatedValue value={s.value} />
              </span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
