import Link from 'next/link';
import { products } from '@/lib/products';
import { posts } from '@/lib/blog';

export const metadata = {
  title: 'Plan du site',
  description: 'Toutes les pages du site Errendis, organisées par section.',
  alternates: { canonical: '/plan-du-site' },
};

export default function SitemapHtmlPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Plan du site</h1>
          <p>Toutes les pages d’errendis.com, organisées par section.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sitemap-grid">
            <div className="sitemap-col">
              <h3>Général</h3>
              <ul>
                <li><Link href="/">Accueil</Link></li>
                <li><Link href="/a-propos">À propos</Link></li>
                <li><Link href="/contact">Contact & démo</Link></li>
                <li><Link href="/sur-mesure">Logiciel sur mesure</Link></li>
                <li><Link href="/faq">Questions fréquentes</Link></li>
              </ul>
            </div>

            <div className="sitemap-col">
              <h3>Produits</h3>
              <ul>
                {products.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/produits/${p.slug}`}>{p.name} — {p.sector}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sitemap-col">
              <h3>Blog</h3>
              <ul>
                <li><Link href="/blog">Tous les articles</Link></li>
                {posts.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sitemap-col">
              <h3>Légal</h3>
              <ul>
                <li><Link href="/mentions-legales">Mentions légales</Link></li>
                <li><Link href="/confidentialite">Politique de confidentialité</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}