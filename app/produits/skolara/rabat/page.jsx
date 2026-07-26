// app/produits/skolara/rabat/page.jsx
// Creer ce fichier dans ton projet Next.js

import Link from 'next/link';
import { getProduct } from '@/lib/products';
import CtaSection from '@/components/product/CtaSection';

const product = getProduct('skolara');

export const metadata = {
  title: 'Skolara Rabat — Logiciel de gestion scolaire pour \u00e9coles priv\u00e9es \u00e0 Rabat',
  description: 'Skolara est le logiciel de gestion scolaire utilis\u00e9 par les \u00e9coles priv\u00e9es \u00e0 Rabat : inscriptions, absences, bulletins, paiements et application parents. D\u00e9mo gratuite.',
  alternates: { canonical: '/produits/skolara/rabat' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Skolara',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Logiciel de gestion scolaire pour \u00e9coles priv\u00e9es \u00e0 Rabat',
  publisher: { '@type': 'Organization', name: 'Errendis' },
  areaServed: { '@type': 'City', name: 'Rabat' },
};

export default function SkolaraRabatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Accueil</Link> / <Link href="/produits/skolara">Skolara</Link> / Rabat
          </nav>
          <span className="blog-card-category">\u00c9ducation \u2014 Rabat</span>
          <h1 style={{ marginTop: 12 }}>
            Logiciel de gestion scolaire \u00e0 Rabat
          </h1>
          <p style={{ fontSize: '1.1rem', marginTop: 16, maxWidth: 680 }}>
            Skolara est adopt\u00e9 par les \u00e9coles priv\u00e9es de Rabat pour g\u00e9rer inscriptions, absences, bulletins et paiements \u2014 avec une application parents disponible en fran\u00e7ais et en arabe.
          </p>
          <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn--primary">Demander une d\u00e9mo gratuite</Link>
            <Link href="/produits/skolara" className="btn btn--ghost">Voir Skolara</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Pourquoi les \u00e9coles priv\u00e9es rabatises choisissent Skolara</h2>
          <p>Rabat concentre le plus grand nombre d\u2019\u00e9coles priv\u00e9es du Maroc et la concurrence entre \u00e9tablissements y est la plus forte. Les familles rabatises comparent les outils num\u00e9riques de chaque \u00e9cole. Skolara vous donne l\u2019avantage concurrentiel d\u2019une communication instantan\u00e9e avec les parents.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginTop: 40 }}>
            {[
              { title: 'Absences en temps r\u00e9el', text: 'Les parents rabatis re\u00e7oivent une notification push d\u00e8s que leur enfant est absent \u2014 sans attendre un appel du secr\u00e9tariat.' },
              { title: 'Bulletins g\u00e9n\u00e9r\u00e9s automatiquement', text: 'Votre maquette de bulletin configur\u00e9e une fois, les bulletins se g\u00e9n\u00e8rent en un clic \u00e0 chaque fin de trimestre.' },
              { title: 'Paiements depuis le t\u00e9l\u00e9phone', text: 'Les parents r\u00e8glent les frais de scolarit\u00e9 depuis leur mobile. Les relances automatiques r\u00e9duisent les impay\u00e9s de 40 \u00e0 60%.' },
              { title: 'Application parents bilingue', text: 'Interface disponible en fran\u00e7ais et en arabe \u2014 adapt\u00e9e aux familles cosmopolites de Rabat.' },
              { title: 'Emplois du temps sans conflit', text: 'Construction automatis\u00e9e des emplois du temps avec d\u00e9tection en temps r\u00e9el des conflits de salles et d\u2019enseignants.' },
              { title: 'Mise en service en 3 \u00e0 7 jours', text: 'Op\u00e9rationnel avant la rentr\u00e9e de septembre. Vos donn\u00e9es \u00e9l\u00e8ves import\u00e9es, votre \u00e9quipe form\u00e9e.' },
            ].map((f, i) => (
              <div key={i} style={{ background: 'var(--surface)', borderRadius: 12, padding: 24 }}>
                <strong style={{ display: 'block', marginBottom: 8 }}>{f.title}</strong>
                <p style={{ margin: 0, color: 'var(--slate)' }}>{f.text}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48, padding: 32, background: 'var(--surface)', borderRadius: 16 }}>
            <h2 style={{ marginTop: 0 }}>D\u00e9ployer Skolara dans votre \u00e9cole \u00e0 Rabat avant septembre 2026</h2>
            <p>Il reste suffisamment de temps en ao\u00fbt. Contactez-nous pour une d\u00e9monstration sur vos propres donn\u00e9es \u2014 sans engagement.</p>
            <Link href="/contact" className="btn btn--primary">Demander une d\u00e9mo</Link>
          </div>
        </div>
      </section>

      <CtaSection productName="Skolara" />
    </>
  );
}
