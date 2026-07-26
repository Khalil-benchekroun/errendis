// app/produits/skolara/casablanca/page.jsx

import Link from 'next/link';
import { getProduct } from '@/lib/products';
import CtaSection from '@/components/product/CtaSection';

const product = getProduct('skolara');

export const metadata = {
  title: "Skolara Casablanca — Logiciel de gestion scolaire pour écoles privées à Casablanca",
  description: "Skolara est le logiciel de gestion scolaire utilisé par les écoles privées à Casablanca : inscriptions, absences, bulletins, paiements et application parents. Démo gratuite.",
  alternates: { canonical: '/produits/skolara/casablanca' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Skolara',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: "Logiciel de gestion scolaire pour écoles privées à Casablanca",
  publisher: { '@type': 'Organization', name: 'Errendis' },
  areaServed: { '@type': 'City', name: 'Casablanca' },
};

export default function SkolaraCasablancaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Accueil</Link> / <Link href="/produits/skolara">Skolara</Link> / Casablanca
          </nav>
          <span className="blog-card-category">Éducation — Casablanca</span>
          <h1 style={{ marginTop: 12 }}>
            Logiciel de gestion scolaire à Casablanca
          </h1>
          <p style={{ fontSize: '1.1rem', marginTop: 16, maxWidth: 680 }}>
            Skolara est adopté par les écoles privées de Casablanca pour gérer inscriptions, absences, bulletins et paiements — avec une application parents disponible en français et en arabe.
          </p>
          <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn--primary">Demander une démo gratuite</Link>
            <Link href="/produits/skolara" className="btn btn--ghost">Voir Skolara</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Pourquoi les écoles privées casablancaises choisissent Skolara</h2>
          <p>Casablanca concentre le plus grand nombre d&apos;écoles privées du Maroc et la concurrence entre établissements y est la plus forte. Les familles casablancaises comparent les outils numériques de chaque école. Skolara vous donne l&apos;avantage concurrentiel d&apos;une communication instantanée avec les parents.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginTop: 40 }}>
            {[
              { title: 'Absences en temps réel', text: "Les parents casablancais reçoivent une notification push dès que leur enfant est absent — sans attendre un appel du secrétariat." },
              { title: 'Bulletins générés automatiquement', text: "Votre maquette de bulletin configurée une fois, les bulletins se génèrent en un clic à chaque fin de trimestre." },
              { title: 'Paiements depuis le téléphone', text: "Les parents règlent les frais de scolarité depuis leur mobile. Les relances automatiques réduisent les impayés de 40 à 60%." },
              { title: 'Application parents bilingue', text: "Interface disponible en français et en arabe — adaptée aux familles cosmopolites de Casablanca." },
              { title: 'Emplois du temps sans conflit', text: "Construction automatisée des emplois du temps avec détection en temps réel des conflits de salles et d'enseignants." },
              { title: 'Mise en service en 3 à 7 jours', text: "Opérationnel avant la rentrée de septembre. Vos données élèves importées, votre équipe formée." },
            ].map((f, i) => (
              <div key={i} style={{ background: 'var(--surface)', borderRadius: 12, padding: 24 }}>
                <strong style={{ display: 'block', marginBottom: 8 }}>{f.title}</strong>
                <p style={{ margin: 0, color: 'var(--slate)' }}>{f.text}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48, padding: 32, background: 'var(--surface)', borderRadius: 16 }}>
            <h2 style={{ marginTop: 0 }}>Déployer Skolara dans votre école à Casablanca avant septembre 2026</h2>
            <p>Il reste suffisamment de temps en août. Contactez-nous pour une démonstration sur vos propres données — sans engagement.</p>
            <Link href="/contact" className="btn btn--primary">Demander une démo</Link>
          </div>
        </div>
      </section>

      <CtaSection productName="Skolara" />
    </>
  );
}
