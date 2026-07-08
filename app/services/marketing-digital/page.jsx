import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import ModuleShowcase from '@/components/product/ModuleShowcase';
import FaqSection from '@/components/product/FaqSection';
import { IsoSocialMedia, IsoAdvertising, IsoSEO } from '@/components/IsoMarketing';
import { getService } from '@/lib/services';

const service = getService('marketing-digital');

export const metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
  alternates: { canonical: '/services/marketing-digital' },
};

function ModuleVisual({ Icon }) {
  return (
    <div className="module-visual-card">
      <div style={{ width: '55%' }}>
        <Icon />
      </div>
    </div>
  );
}

const VISUAL_BY_KEY = {
  social: () => <ModuleVisual Icon={IsoSocialMedia} />,
  ads: () => <ModuleVisual Icon={IsoAdvertising} />,
  seo: () => <ModuleVisual Icon={IsoSEO} />,
};

const PILLAR_ICON = {
  social: IsoSocialMedia,
  ads: IsoAdvertising,
  seo: IsoSEO,
};

export default function MarketingDigitalPage() {
  const visuals = service.modules.map((m) => (m.visualKey ? VISUAL_BY_KEY[m.visualKey] : undefined));

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Marketing digital',
    name: service.name,
    description: service.seoDescription,
    provider: { '@type': 'Organization', name: 'Errendis' },
    areaServed: 'MA',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">Services</span>
          <h1>{service.name}</h1>
          <p>{service.pitch}</p>
          <div className="hero-actions">
            <Link href="#formulaire" className="btn btn--primary">
              Discuter de mon projet
            </Link>
            <Link href="/services" className="btn btn--ghost">
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 24,
            }}
          >
            {service.pillars.map((p) => {
              const Icon = PILLAR_ICON[p.key];
              return (
                <div className="contact-card" key={p.key}>
                  {Icon && (
                    <div style={{ width: 64, marginBottom: 14 }}>
                      <Icon />
                    </div>
                  )}
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ModuleShowcase modules={service.modules} visuals={visuals} />

      <section id="confiance" className="section section--alt">
        <div className="container">
          <div className="why-grid">
            <div className="why-item">
              <h3>
                <span className="why-check">✓</span>Pour qui ?
              </h3>
              <p>{service.audience}</p>
            </div>
            {service.trust.map((t) => (
              <div className="why-item" key={t.title}>
                <h3>
                  <span className="why-check">✓</span>
                  {t.title}
                </h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
          <div className="audience-note">
            <strong>Vous vous reconnaissez ?</strong>{' '}
            <Link href="#formulaire">Parlons de votre visibilité en ligne</Link>.
          </div>
        </div>
      </section>

      <FaqSection faqs={service.faqs} productName={service.name} />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <h2>Prêt à développer votre visibilité en ligne ?</h2>
            <p>Un premier échange gratuit pour comprendre votre activité et vos objectifs, sans engagement.</p>
            <Link href="#formulaire" className="btn btn--primary">
              Discuter de mon projet
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="formulaire">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Formulaire</span>
            <h2>Parlez-nous de votre visibilité en ligne</h2>
            <p>
              Décrivez votre activité et vos objectifs, nous revenons vers vous
              rapidement pour en discuter.
            </p>
          </div>
          <ContactForm product={service.name} />
        </div>
      </section>
    </>
  );
}