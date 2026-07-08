'use client';

import { useEffect, useRef, useState } from 'react';

// Score indicatif 1-5 par produit sur des axes transverses —
// reflète la richesse fonctionnelle relative (nombre de modules,
// maturité du prototype), pas une notation marketing exagérée.
const AXES = ['Modules métier', 'Conformité locale', 'App dédiée', 'Automatisation', 'Maturité'];

const SCORES = {
  Dialya: [5, 5, 5, 4, 5],
  Medira: [5, 4, 5, 4, 5],
  Logistara: [4, 3, 5, 5, 5],
  Labya: [3, 4, 2, 3, 2],
  Rentara: [3, 2, 2, 3, 2],
};

const COLORS = {
  Dialya: '#0D9488',
  Medira: '#0891B2',
  Logistara: '#1E40AF',
  Labya: '#06B6D4',
  Rentara: '#F59E0B',
};

function polarPoint(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
}

function buildPath(scores, cx, cy, maxR) {
  const n = scores.length;
  const points = scores.map((s, i) => {
    const r = (s / 5) * maxR;
    const [x, y] = polarPoint(cx, cy, r, (360 / n) * i);
    return `${x},${y}`;
  });
  return `M${points.join('L')}Z`;
}

export default function RadarChart() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  const cx = 150;
  const cy = 150;
  const maxR = 110;

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const rings = [0.25, 0.5, 0.75, 1];

  return (
    <div className="radar-wrap" ref={ref}>
      <svg viewBox="0 0 300 300" className="radar-chart">
        {rings.map((f) => (
          <polygon
            key={f}
            points={AXES.map((_, i) => polarPoint(cx, cy, maxR * f, (360 / AXES.length) * i).join(',')).join(' ')}
            fill="none"
            stroke="#E2E8F0"
            strokeWidth="1"
          />
        ))}

        {AXES.map((_, i) => {
          const [x, y] = polarPoint(cx, cy, maxR, (360 / AXES.length) * i);
          return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="#E2E8F0" strokeWidth="1" />;
        })}

        {Object.entries(SCORES).map(([name, scores]) => (
          <path
            key={name}
            d={buildPath(scores, cx, cy, maxR)}
            fill={COLORS[name]}
            fillOpacity="0.08"
            stroke={COLORS[name]}
            strokeWidth="2"
            className={`radar-path${shown ? ' radar-path--shown' : ''}`}
          />
        ))}

        {AXES.map((axis, i) => {
          const [x, y] = polarPoint(cx, cy, maxR + 22, (360 / AXES.length) * i);
          return (
            <text key={axis} x={x} y={y} textAnchor="middle" dominantBaseline="middle" className="radar-label">
              {axis}
            </text>
          );
        })}
      </svg>

      <div className="radar-legend">
        {Object.entries(COLORS).map(([name, color]) => (
          <span key={name} className="radar-legend-item">
            <i style={{ background: color }} /> {name}
          </span>
        ))}
      </div>
    </div>
  );
}
