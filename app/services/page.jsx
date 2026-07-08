import Link from 'next/link';
import { services } from '@/lib/services';

export const metadata = {
  title: 'Nos services — Développement web, mobile, SaaS & marketing digital',
  description:
    'Errendis développe votre site internet, votre application mobile, votre application web ou votre SaaS, et accompagne votre visibilité en marketing digital.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">Services</span>
          <h1>Nos services de développement & marketing digital</h1>
          <p>
            En dehors de nos 5 logiciels métiers, nous développons aussi vos
            projets digitaux : sites, applications, SaaS et visibilité en
            ligne.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 24,
            }}
          >
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="contact-card"
                style={{ display: 'block', textDecoration: 'none' }}
              >
                <h3>{s.shortName}</h3>
                <p>{s.tagline}</p>
                <span className="btn btn--ghost" style={{ marginTop: 12, display: 'inline-block' }}>
                  En savoir plus
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}