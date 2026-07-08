'use client';

import dynamic from 'next/dynamic';

const Logo3D = dynamic(() => import('./Logo3D'), { ssr: false });

export default function Hero3DLogo({ size = 220 }) {
  return (
    <div className="hero3d-wrap" style={{ minHeight: size }}>
      <div style={{ width: size, height: size }}>
        <Logo3D />
      </div>
    </div>
  );
}
