'use client';

import { useRef } from 'react';

/**
 * Enveloppe un enfant (ex: une carte) et lui applique une légère
 * rotation 3D qui suit la position du curseur au survol. Désactivé
 * sur tactile (pas de mousemove fiable) et respecte reduced-motion.
 */
export default function TiltCard({ children, className = '', max = 6 }) {
  const ref = useRef(null);

  function handleMouseMove(e) {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * max}deg) rotateX(${-y * max}deg) translateZ(4px)`;
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0)';
  }

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
