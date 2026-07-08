'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { products } from '@/lib/products';
import { services } from '@/lib/services';

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
          <div className="nav-group">
            <span className="nav-group-label">Ressources</span>
            <ul className="nav-products nav-resources">
              <li>
                <Link href="/comparer-produits" onClick={() => setOpen(false)}>
                  <strong>Comparer nos produits</strong>
                  <span>Nos 5 logiciels côte à côte</span>
                </Link>
              </li>
              <li>
                <Link href="/pourquoi-errendis" onClick={() => setOpen(false)}>
                  <strong>Pourquoi Errendis</strong>
                  <span>Excel, ERP générique ou logiciel métier</span>
                </Link>
              </li>
              <li>
                <Link href="/secteurs" onClick={() => setOpen(false)}>
                  <strong>Vos difficultés par secteur</strong>
                  <span>Les blocages typiques par métier</span>
                </Link>
              </li>
              <li>
                <Link href="/glossaire" onClick={() => setOpen(false)}>
                  <strong>Glossaire métier</strong>
                  <span>AMO, FEFO, HL7, FCL/LCL...</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" onClick={() => setOpen(false)}>
                  <strong>Blog</strong>
                  <span>Guides et bonnes pratiques</span>
                </Link>
              </li>
              <li>
                <Link href="/faq" onClick={() => setOpen(false)}>
                  <strong>Questions fréquentes</strong>
                  <span>Mise en service, support, tarifs</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-group">
            <span className="nav-group-label">Services</span>
            <ul className="nav-products">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} onClick={() => setOpen(false)}>
                    <strong>{s.shortName}</strong>
                    <span>{s.tagline}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav-group">
            <span className="nav-group-label">Besoin spécifique</span>
            <ul className="nav-products nav-resources">
              <li>
                <Link href="/sur-mesure" onClick={() => setOpen(false)}>
                  <strong>Logiciel sur mesure</strong>
                  <span>Un besoin qui ne correspond à aucun de nos produits</span>
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/recherche" className="nav-link" onClick={() => setOpen(false)} aria-label="Rechercher">
            🔍
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