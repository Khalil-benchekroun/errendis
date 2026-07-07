import Link from 'next/link';
import Logo from './Logo';
import { products } from '@/lib/products';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo size={28} inverted />
          <p>
            Éditeur marocain de logiciels métiers. Nous mettons de l&apos;ordre
            dans les opérations des entreprises, un secteur à la fois.
          </p>
        </div>

        <div>
          <h3 className="footer-title">Produits</h3>
          <ul className="footer-list">
            {products.map((p) => (
              <li key={p.slug}>
                <Link href={`/produits/${p.slug}`}>
                  {p.name} — {p.sector}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer-title">Ressources</h3>
          <ul className="footer-list">
            <li>
              <Link href="/comparer-produits">Comparer nos produits</Link>
            </li>
            <li>
              <Link href="/pourquoi-errendis">Pourquoi Errendis</Link>
            </li>
            <li>
              <Link href="/secteurs">Vos difficultés par secteur</Link>
            </li>
            <li>
              <Link href="/glossaire">Glossaire métier</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title">Errendis</h3>
          <ul className="footer-list">
            <li>
              <Link href="/a-propos">À propos</Link>
            </li>
            <li>
              <Link href="/faq">Questions fréquentes</Link>
            </li>
            <li>
              <Link href="/contact">Contact & démo</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Errendis. Tous droits réservés.</p>
        <div style={{ display: 'flex', gap: 20 }}>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/confidentialite">Confidentialité</Link>
        </div>
        <p>Mohammedia · Maroc</p>
      </div>
    </footer>
  );
}