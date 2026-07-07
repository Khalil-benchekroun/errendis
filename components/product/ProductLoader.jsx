'use client';

import { useEffect, useState } from 'react';
import { ProductIcon } from '../logos';

/**
 * Loader de transition affiché brièvement à l'arrivée sur une page
 * produit — montre le logo du produit qui pulse, aux couleurs de
 * son thème (--accent défini par product-theme). Disparaît vite
 * (page déjà pré-rendue statiquement, c'est un effet de marque,
 * pas un vrai temps de chargement).
 */
export default function ProductLoader({ slug }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = setTimeout(() => setVisible(false), reduce ? 0 : 550);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="product-loader" aria-hidden="true">
      <span className="product-loader-mark">
        <ProductIcon slug={slug} size={44} />
      </span>
    </div>
  );
}
