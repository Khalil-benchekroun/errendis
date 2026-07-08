import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export default function ServicePageTemplate({ service }) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">Services</span>
          <h1>{service.name}</h1>
          <p>{service.tagline}</p>
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

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Ce qui est inclus</span>
            <h2>Une prestation complète, de bout en bout</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 20,
            }}
          >
            {service.includes.map((item) => (
              <div key={item} className="contact-card">
                <p style={{ margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>

          <div className="prose" style={{ maxWidth: 760, marginTop: 40 }}>
            <h2 style={{ fontSize: '1.4rem', marginBottom: 14 }}>Pour qui ?</h2>
            <p>{service.forWho}</p>
          </div>
        </div>
      </section>

      <section className="section" id="formulaire">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Formulaire</span>
            <h2>Parlez-nous de votre projet</h2>
            <p>
              Décrivez votre besoin et vos objectifs, nous revenons vers vous
              rapidement pour en discuter.
            </p>
          </div>
          <ContactForm product={service.name} />
        </div>
      </section>
    </>
  );
}