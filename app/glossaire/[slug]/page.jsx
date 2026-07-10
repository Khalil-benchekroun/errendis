import Link from 'next/link';
import { notFound } from 'next/navigation';
import { glossaryTerms, getTerm, getAllSlugs, getRelatedTerms } from '@/lib/glossary';
import { products } from '@/lib/products';
import { ProductIcon } from '@/components/logos';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const term = getTerm(slug);
  if (!term) return {};
  return {
    title: `${term.term} — Définition et guide | Errendis`,
    description: term.definition,
    alternates: { canonical: `/glossaire/${term.slug}` },
    openGraph: {
      title: `${term.term} — Définition`,
      description: term.definition,
      url: `/glossaire/${term.slug}`,
    },
  };
}

export default async function GlossaireTermPage({ params }) {
  const { slug } = await params;
  const term = getTerm(slug);
  if (!term) notFound();

  const relatedTerms = getRelatedTerms(term);
  const relatedProducts = products.filter((p) =>
    term.relatedProducts?.includes(p.slug)
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: term.term,
    description: term.definition,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'Glossaire Errendis',
      url: 'https://errendis.com/glossaire',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://errendis.com/' },
      { '@type': 'ListItem', position: 2, name: 'Glossaire', item: 'https://errendis.com/glossaire' },
      { '@type': 'ListItem', position: 3, name: term.term, item: `https://errendis.com/glossaire/${term.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link> /{' '}
            <Link href="/glossaire">Glossaire</Link> /{' '}
            {term.term}
          </nav>
          <span className="section-eyebrow">{term.category}</span>
          <h1>{term.term}</h1>
          <p className="term-short-def">{term.definition}</p>
        </div>
      </section>

      {/* DÉFINITION LONGUE */}
      {term.longDefinition && (
        <section className="section">
          <div className="container">
            <div className="term-content">
              {term.longDefinition.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PRODUITS LIÉS */}
      {relatedProducts.length > 0 && (
        <section className="section section--alt">
          <div className="container">
            <div className="section-head">
              <span className="section-eyebrow">Logiciels liés</span>
              <h2>Les logiciels Errendis qui gèrent {term.term}</h2>
            </div>
            <div className="about-products-grid">
              {relatedProducts.map((p) => (
                <Link key={p.slug} href={`/produits/${p.slug}`} className="about-product-chip">
                  <ProductIcon slug={p.slug} size={32} />
                  <div>
                    <strong>{p.name}</strong>
                    <span>{p.sector}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TERMES LIÉS */}
      {relatedTerms.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="section-eyebrow">Voir aussi</span>
              <h2>Termes liés à {term.term}</h2>
            </div>
            <div className="cities-grid">
              {relatedTerms.map((t) => (
                <Link key={t.slug} href={`/glossaire/${t.slug}`} className="city-chip">
                  {t.term}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RETOUR GLOSSAIRE */}
      <section className="section section--alt">
        <div className="container">
          <Link href="/glossaire" className="btn btn--ghost">
            ← Retour au glossaire complet
          </Link>
        </div>
      </section>
    </>
  );
}
