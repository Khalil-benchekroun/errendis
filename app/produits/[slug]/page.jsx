import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products, getProduct } from '@/lib/products';
import ProductMockup from '@/components/ProductMockup';
import { ProductIcon } from '@/components/logos';

// Génération 100% statique : une page HTML pré-rendue par produit.
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.seoTitle,
    description: product.seoDescription,
    alternates: { canonical: `/produits/${product.slug}` },
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      url: `/produits/${product.slug}`,
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: product.seoDescription,
    publisher: { '@type': 'Organization', name: 'Errendis' },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="product-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link> / <Link href="/#produits">Produits</Link> /{' '}
            {product.name}
          </nav>
          <div className="product-hero-lockup">
            <ProductIcon slug={product.slug} size={52} />
            <h1>{product.name}</h1>
          </div>
          <div className="product-hero-sector">{product.sector}</div>
          <p className="product-hero-pitch">{product.pitch}</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn--primary">
              Demander une démo de {product.name}
            </Link>
          </div>

          <div className="product-shot">
            <ProductMockup slug={product.slug} name={product.name} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Fonctionnalités</span>
            <h2>Ce que {product.name} gère pour vous</h2>
          </div>

          <div className="features-grid">
            {product.features.map((f) => (
              <div className="feature-card" key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>

          <div className="audience-note">
            <strong>Pour qui ?</strong> {product.audience}. Vous vous
            reconnaissez ? <Link href="/contact">Parlons de votre organisation</Link>.
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <h2>Voyez {product.name} en action.</h2>
            <p>
              Une démonstration de 30 minutes, sur vos cas concrets, sans
              engagement.
            </p>
            <Link href="/contact" className="btn btn--primary">
              Réserver ma démo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}