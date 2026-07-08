'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const COOKIE_KEY = 'errendis_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      // Petit délai pour ne pas gêner le chargement initial
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
    if (consent === 'accepted') {
      enableGTM();
    }
  }, []);

  function enableGTM() {
    // Active GA4 via GTM en poussant un événement consent
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'cookie_consent_granted',
        analytics_storage: 'granted',
      });
    }
  }

  function handleAccept() {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    enableGTM();
    setVisible(false);
  }

  function handleRefuse() {
    localStorage.setItem(COOKIE_KEY, 'refused');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <>
      <div
        role="dialog"
        aria-label="Gestion des cookies"
        aria-live="polite"
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          zIndex: 9999,
          maxWidth: '360px',
          width: 'calc(100vw - 48px)',
          background: '#ffffff',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)',
          border: '1px solid #e5e7eb',
          padding: '20px',
          animation: 'cookieSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          fontFamily: 'var(--font-body, Inter, sans-serif)',
        }}
      >
        {/* Icône + Titre */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <span style={{ fontSize: '20px' }}>🍪</span>
          <p style={{
            margin: 0,
            fontSize: '15px',
            fontWeight: '600',
            color: '#111827',
            fontFamily: 'var(--font-display, Space Grotesk, sans-serif)',
          }}>
            Cookies & confidentialité
          </p>
        </div>

        {/* Texte */}
        <p style={{
          margin: '0 0 16px 0',
          fontSize: '13px',
          lineHeight: '1.6',
          color: '#6b7280',
        }}>
          Nous utilisons des cookies analytiques (Google Analytics) pour améliorer votre expérience.
          Vos données restent anonymisées.{' '}
          <Link
            href="/confidentialite"
            style={{ color: '#2563eb', textDecoration: 'underline' }}
          >
            En savoir plus
          </Link>
        </p>

        {/* Boutons */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={handleRefuse}
            style={{
              flex: 1,
              padding: '9px 12px',
              fontSize: '13px',
              fontWeight: '500',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              background: '#f9fafb',
              color: '#374151',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.target.style.background = '#f3f4f6'}
            onMouseLeave={e => e.target.style.background = '#f9fafb'}
          >
            Refuser
          </button>
          <button
            onClick={handleAccept}
            style={{
              flex: 1,
              padding: '9px 12px',
              fontSize: '13px',
              fontWeight: '600',
              border: 'none',
              borderRadius: '8px',
              background: '#1d4ed8',
              color: '#ffffff',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.target.style.background = '#1e40af'}
            onMouseLeave={e => e.target.style.background = '#1d4ed8'}
          >
            Accepter
          </button>
        </div>
      </div>

      <style>{`
        @keyframes cookieSlideIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}