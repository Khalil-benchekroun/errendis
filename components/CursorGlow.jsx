'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    function handleMove(e) {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--glow-x', `${e.clientX - rect.left}px`);
      el.style.setProperty('--glow-y', `${e.clientY - rect.top}px`);
    }
    el.addEventListener('mousemove', handleMove);
    return () => el.removeEventListener('mousemove', handleMove);
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}
