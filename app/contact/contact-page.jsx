import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact & démonstration',
  description:
    'Contactez Errendis pour une démonstration gratuite de nos logiciels métiers : par WhatsApp, email, téléphone ou formulaire.',
  alternates: { canonical: '/contact' },
};

const WHATSAPP_NUMBER = '212617489723';
const CONTACT_EMAIL = 'contact@errendis.com';

export default function ContactPage() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Bonjour, je souhaite une démonstration d\u2019un logiciel Errendis.'
  )}`;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Parlons de votre activité.</h1>
          <p>
            Une démonstration dure 30 minutes, se fait à distance ou sur
            place, et ne vous engage à rien. Choisissez le canal qui vous
            arrange.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-card">
              <h3>WhatsApp</h3>
              <p>Le plus rapide : écrivez-nous et recevez une réponse dans la journée.</p>
              <a
                href={whatsappLink}
                className="btn btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Écrire sur WhatsApp
              </a>
            </div>

            <div className="contact-card">
              <h3>Téléphone</h3>
              <p>Pour un échange direct avec notre équipe.</p>
              <a href="tel:+212684637854" className="btn btn--ghost">
                +212 684 637 854
              </a>
            </div>

            <div className="contact-card">
              <h3>Email</h3>
              <p>Décrivez votre activité et vos besoins, nous revenons vers vous rapidement.</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn--ghost">
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Formulaire</span>
            <h2>Ou écrivez-nous directement ici</h2>
            <p>Votre message nous arrive immédiatement par email — nous répondons sous 24h ouvrées.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
