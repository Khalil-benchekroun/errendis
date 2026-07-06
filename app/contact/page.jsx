export const metadata = {
  title: 'Contact & démonstration',
  description:
    'Contactez Errendis pour une démonstration gratuite de nos logiciels métiers : par WhatsApp, email ou téléphone.',
  alternates: { canonical: '/contact' },
};

// ⚠️ À PERSONNALISER : remplace ces deux constantes par tes vraies coordonnées.
const WHATSAPP_NUMBER = '212600000000'; // format international sans le +
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

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-card">
              <h3>WhatsApp</h3>
              <p>
                Le plus rapide : écrivez-nous et recevez une réponse dans la
                journée.
              </p>
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
              <h3>Email</h3>
              <p>
                Décrivez votre activité et vos besoins, nous revenons vers
                vous avec un créneau de démonstration.
              </p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn--ghost">
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className="contact-card">
              <h3>Démo guidée</h3>
              <p>
                Vous préférez voir le logiciel sur vos propres cas ? Nous
                préparons la démonstration avec vos exemples réels.
              </p>
              <a href={`mailto:${CONTACT_EMAIL}?subject=Demande de démo`} className="btn btn--ghost">
                Réserver une démo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
