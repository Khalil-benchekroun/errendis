import { getGlossaryByCategory } from '@/lib/glossary';

export const metadata = {
  title: 'Glossaire métier',
  description:
    'Glossaire des termes techniques utilisés en santé, distribution médicale et logistique au Maroc : AMO, CNOPS, FEFO, HL7, FCL/LCL et plus.',
  alternates: { canonical: '/glossaire' },
};

const jsonLdBase = (terms) => ({
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Glossaire Errendis',
  hasDefinedTerm: terms.map((t) => ({
    '@type': 'DefinedTerm',
    name: t.term,
    description: t.definition,
  })),
});

export default function GlossairePage() {
  const grouped = getGlossaryByCategory();
  const allTerms = Object.values(grouped).flat();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBase(allTerms)) }}
      />

      <section className="page-hero">
        <div className="container">
          <h1>Glossaire métier</h1>
          <p>
            Les termes techniques que vous croiserez dans nos logiciels et
            sur ce site, expliqués simplement.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
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
                    <dt>{t.term}</dt>
                    <dd>{t.definition}</dd>
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
