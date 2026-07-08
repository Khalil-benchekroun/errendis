import Link from 'next/link';
import { FAQS } from '@/lib/faq';

const SITE_URL = 'https://errendis.com';

export const metadata = {
  title: 'Questions fréquentes',
  description:
    'Toutes les réponses aux questions fréquentes sur Errendis : mise en service, essai, support, sécurité des données, tarifs et personnalisation de nos logiciels métiers.',
  alternates: { canonical: '/faq' },
};



const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="page-hero">
        <div className="container">
          <h1>Questions fréquentes</h1>
          <p>
            Les réponses aux questions les plus courantes sur Errendis et
            nos logiciels. Une question spécifique à un produit ? Chaque
            page produit a sa propre FAQ dédiée.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="faq-list" style={{ maxWidth: 820 }}>
            {FAQS.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>

          <div className="audience-note" style={{ maxWidth: 820, marginTop: 36 }}>
            <strong>Vous ne trouvez pas votre réponse ?</strong>{' '}
            <Link href="/contact">Contactez-nous directement</Link>, nous
            répondons sous 24h ouvrées.
          </div>
        </div>
      </section>
    </>
  );
}