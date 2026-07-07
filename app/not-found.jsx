import Link from 'next/link';
import { products } from '@/lib/products';
import Logo from '@/components/Logo';

export const metadata = {
  title: 'Page introuvable',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="container notfound-inner">
        <Logo size={40} />
        <span className="notfound-code">404</span>
        <h1>Cette page s’est perdue en route.</h1>
        <p>
          La page que vous cherchez n’existe pas ou a changé
          d’adresse. Voici quelques pistes utiles :
        </p>

        <div className="hero-actions" style={{ justifyContent: 'center', marginBottom: 40 }}>
          <Link href="/" className="btn btn--primary">
            Retour à l’accueil
          </Link>
          <Link href="/contact" className="btn btn--ghost">
            Nous contacter
          </Link>
        </div>

        <div className="notfound-products">
          {products.map((p) => (
            <Link key={p.slug} href={`/produits/${p.slug}`} className="notfound-chip">
              {p.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
