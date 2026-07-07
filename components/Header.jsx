'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { products } from '@/lib/products';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="header-logo" onClick={() => setOpen(false)}>
          <Logo size={30} />
        </Link>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav${open ? ' nav--open' : ''}`} aria-label="Navigation principale">
          <div className="nav-group">
            <span className="nav-group-label">Produits</span>
            <ul className="nav-products">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/produits/${p.slug}`} onClick={() => setOpen(false)}>
                    <strong>{p.name}</strong>
                    <span>{p.sector}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/recherche" className="nav-link" onClick={() => setOpen(false)} aria-label="Rechercher">
            🔍
          </Link>
          <Link href="/blog" className="nav-link" onClick={() => setOpen(false)}>
            Blog
          </Link>
          <Link href="/a-propos" className="nav-link" onClick={() => setOpen(false)}>
            À propos
          </Link>
          <Link href="/contact" className="nav-cta" onClick={() => setOpen(false)}>
            Demander une démo
          </Link>
        </nav>
      </div>
    </header>
  );
}
