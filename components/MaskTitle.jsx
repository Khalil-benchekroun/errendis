'use client';

import { useEffect, useRef, useState } from 'react';

export default function MaskTitle({ children, as: Tag = 'span' }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

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
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`mask-reveal${shown ? ' mask-reveal--shown' : ''}`}>
      <span>{children}</span>
    </Tag>
  );
}
