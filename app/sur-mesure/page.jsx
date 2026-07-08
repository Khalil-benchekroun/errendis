import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Logiciel sur mesure — Besoin spécifique',
  description:
    'Votre activité ne correspond à aucun de nos logiciels existants ? Décrivez votre besoin spécifique : nous concevons et développons votre logiciel de gestion sur mesure.',
  alternates: { canonical: '/sur-mesure' },
};

const STEPS = [
  {
    title: 'Vous décrivez votre besoin',
    text: 'Vous nous expliquez votre activité, vos process actuels et ce qui vous bloque aujourd\u2019hui (Excel, papier, logiciel inadapté...).',
  },
  {
    title: 'Nous cadrons ensemble',
    text: 'Un échange (à distance ou sur place) pour définir précisément le périmètre, les fonctionnalités prioritaires et les contraintes métier.',
  },
  {
    title: 'Nous développons votre logiciel',
    text: 'Conception et développement d\u2019une solution pensée pour votre métier exact, pas un outil générique qu\u2019il faut adapter.',
  },
  {
    title: 'Mise en service et suivi',
    text: 'Déploiement, formation de vos équipes, puis accompagnement et évolutions dans la durée.',
  },
];

export default function SurMesurePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">Besoin spécifique</span>
          <h1>Votre activité ne rentre dans aucune case ? Construisons votre logiciel.</h1>
          <p>
            Dialya, Labya, Medira, Rentara et Logistara couvrent des métiers
            précis. Si votre besoin est différent — un process interne
            particulier, un secteur que nous ne couvrons pas encore, une
            gestion très spécifique à votre entreprise — nous pouvons
            concevoir et développer votre propre logiciel de gestion, sur
            mesure.
          </p>
          <div className="hero-actions">
            <Link href="#formulaire" className="btn btn--primary">
              Décrire mon besoin
            </Link>
            <Link href="/comparer-produits" className="btn btn--ghost">
              Voir nos produits existants
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Comment ça se passe</span>
            <h2>De votre besoin à votre logiciel</h2>
            <p>Un accompagnement en quatre étapes, sans engagement au départ.</p>
          </div>

          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {STEPS.map((s, i) => (
              <div key={s.title} className="contact-card">
                <span className="section-eyebrow">Étape {i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>

          <div className="prose" style={{ maxWidth: 760, marginTop: 40 }}>
            <h2 style={{ fontSize: '1.4rem', marginBottom: 14 }}>
              Pour qui est fait le sur-mesure ?
            </h2>
            <p>
              Ce service s&apos;adresse aux entreprises dont l&apos;activité a
              des particularités qu&apos;aucun logiciel standard, y compris
              parmi nos propres produits, ne couvre correctement. Plutôt que
              de vous imposer un outil générique à contourner, nous partons
              de votre besoin réel pour construire une solution qui vous
              correspond.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="formulaire">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Formulaire</span>
            <h2>Décrivez votre besoin spécifique</h2>
            <p>
              Expliquez-nous votre activité et ce qui vous manque aujourd&apos;hui.
              Nous revenons vers vous rapidement pour en discuter.
            </p>
          </div>
          <ContactForm product="Logiciel sur mesure (besoin spécifique)" />
        </div>
      </section>
    </>
  );
}