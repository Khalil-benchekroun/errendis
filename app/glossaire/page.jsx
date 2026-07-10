import Link from 'next/link';
import { getGlossaryByCategory } from '@/lib/glossary';

export const metadata = {
  title: 'Glossaire métier — Termes santé, logistique et BTP au Maroc',
  description:
    'Glossaire des termes techniques utilisés en santé, distribution médicale, logistique, BTP et éducation au Maroc : AMO, CNOPS, FEFO, HL7, FCL/LCL, KDS, Massar et plus.',
  alternates: { canonical: '/glossaire' },
};

const jsonLdBase = (terms) => ({
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Glossaire Errendis',
  url: 'https://errendis.com/glossaire',
  hasDefinedTerm: terms.map((t) => ({
    '@type': 'DefinedTerm',
    name: t.term,
    description: t.definition,
    url: `https://errendis.com/glossaire/${t.slug}`,
  })),
});

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://errendis.com/' },
    { '@type': 'ListItem', position: 2, name: 'Glossaire', item: 'https://errendis.com/glossaire' },
  ],
};

export default function GlossairePage() {
  const grouped = getGlossaryByCategory();
  const allTerms = Object.values(grouped).flat();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBase(allTerms)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="page-hero">
        <div className="container">
          <h1>Glossaire métier</h1>
          <p>
            Les termes techniques que vous croiserez dans nos logiciels et
            sur ce site, expliqués simplement — santé, distribution médicale,
            logistique, BTP, location automobile, restauration et éducation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Navigation par catégorie */}
          <div className="glossary-nav">
            {Object.keys(grouped).map((cat) => (
              <a key={cat} href={`#${cat}`}>{cat}</a>
            ))}
          </div>

          {Object.entries(grouped).map(([category, terms]) => (
            <div key={category} id={category} className="glossary-group">
              <h2>{category}</h2>
              <dl className="glossary-list">
                {terms.map((t) => (
                  <div className="glossary-item" key={t.term}>
                    <dt>
                      <Link href={`/glossaire/${t.slug}`} className="glossary-term-link">
                        {t.term}
                      </Link>
                    </dt>
                    <dd>
                      {t.definition}{' '}
                      <Link href={`/glossaire/${t.slug}`} className="glossary-more-link">
                        Lire la définition complète →
                      </Link>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
