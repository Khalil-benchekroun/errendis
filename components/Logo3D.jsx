'use client';

import { useEffect, useRef } from 'react';

/**
 * Petit mesh 3D représentant le "E en strates" du logo Errendis :
 * 4 barres empilées en extrusion légère, rotation douce en continu
 * + réaction discrète au scroll. Chargé dynamiquement (voir
 * Hero3DLogo.jsx) pour ne jamais peser sur les autres pages.
 */
export default function Logo3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    let renderer, scene, camera, frameId, mesh;
    let destroyed = false;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    import('three').then((THREE) => {
      if (destroyed || !mountRef.current) return;

      const el = mountRef.current;
      const size = el.clientWidth || 280;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
      camera.position.set(2.6, 1.8, 4.2);
      camera.lookAt(0, 0, 0);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(size, size);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      el.appendChild(renderer.domElement);

      const group = new THREE.Group();
      const colors = [0x1d4ed8, 0x2563eb, 0x1e40af, 0x1e3a8a];
      const widths = [2.6, 2.0, 2.3, 2.6];

      widths.forEach((w, i) => {
        const geo = new THREE.BoxGeometry(w, 0.34, 0.5);
        const mat = new THREE.MeshStandardMaterial({
          color: colors[i],
          roughness: 0.35,
          metalness: 0.15,
        });
        const bar = new THREE.Mesh(geo, mat);
        bar.position.y = 0.55 - i * 0.37;
        bar.position.x = -0.15 + (i % 2) * 0.08;
        group.add(bar);
      });

      group.rotation.x = -0.15;
      scene.add(group);
      mesh = group;

      scene.add(new THREE.AmbientLight(0xffffff, 0.7));
      const dir = new THREE.DirectionalLight(0xffffff, 0.9);
      dir.position.set(3, 4, 5);
      scene.add(dir);

      let t = 0;
      function animate() {
        if (destroyed) return;
        if (!reduce) {
          t += 0.006;
          mesh.rotation.y = Math.sin(t) * 0.35 + 0.2;
        }
        renderer.render(scene, camera);
        frameId = requestAnimationFrame(animate);
      }
      animate();

      function handleResize() {
        const s = el.clientWidth || 280;
        renderer.setSize(s, s);
      }
      window.addEventListener('resize', handleResize);

      mountRef.current._cleanup = () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(frameId);
        renderer.dispose();
        el.removeChild(renderer.domElement);
      };
    });

    return () => {
      destroyed = true;
      if (mountRef.current?._cleanup) mountRef.current._cleanup();
    };
  }, []);

  return <div ref={mountRef} className="logo3d-mount" aria-hidden="true" />;
}
