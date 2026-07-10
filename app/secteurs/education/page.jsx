import Link from 'next/link';
import { products } from '@/lib/products';
import { ProductIcon } from '@/components/logos';

const SITE_URL = 'https://errendis.com';

export const metadata = {
  title: 'Logiciel gestion école privée crèche Maroc — Skolara par Errendis',
  description: 'Skolara : logiciel de gestion pour écoles privées et crèches au Maroc. Inscriptions, paiements scolarité, bulletins, communication parents, cantine. Ce que Massar ne fait pas.',
  alternates: { canonical: '/secteurs/education' },
  openGraph: {
    title: 'Logiciel gestion école privée crèche Maroc — Skolara par Errendis',
    description: 'Skolara : logiciel de gestion pour écoles privées et crèches au Maroc. Inscriptions, paiements scolarité, bulletins, communication parents, cantine. Ce que Massar ne fait pas.',
    url: '/secteurs/education',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Secteurs', item: `${SITE_URL}/secteurs` },
    { '@type': 'ListItem', position: 3, name: 'Logiciel de gestion pour les établissements d'enseignement privé au Maroc', item: `${SITE_URL}/secteurs/education` },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Skolara est-il compatible avec Massar ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Skolara couvre les fonctions que Massar ne propose pas pour les privés : paiements, cantine, communication parents et gestion commerciale. Pour les fonctions officielles couvertes par Massar, Skolara peut s\'interfacer avec la plateforme ministérielle.' },
    },
    {
      '@type': 'Question',
      name: 'Skolara inclut-il une application mobile pour les parents ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Skolara propose une application mobile parent pour consulter les notes, recevoir des notifications d\'absence, voir le menu de cantine, payer les frais de scolarité et communiquer avec les enseignants.' },
    },
    {
      '@type': 'Question',
      name: 'Skolara fonctionne-t-il pour les crèches et maternelles ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Skolara propose des modules spécifiques pour la petite enfance : présences par demi-journée, cahier de liaison numérique, gestion des autorisations de récupération et facturation selon les formules.' },
    }
  ],
};

const RELATED_SLUGS = ['skolara'];

export default function SecteurEducationPage() {
  const relatedProducts = products.filter((p) => RELATED_SLUGS.includes(p.slug));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>{' '}/{' '}
            <Link href="/secteurs">Secteurs</Link>{' '}/{' '}
            Logiciel de gestion pour les établissements d'enseignement privé au Maroc
          </nav>
          <span className="section-eyebrow">Secteur · Éducation privée</span>
          <h1>Logiciel de gestion pour les écoles privées et crèches au Maroc</h1>
          <p>L'enseignement privé marocain accueille aujourd'hui 1,2 million d'élèves dans plus de 6 000 établissements. Ce secteur en croissance fait face à des défis de gestion spécifiques que la plateforme Massar du ministère de l'Éducation nationale n'est pas conçue pour adresser : paiements de scolarité, communication parents, cantine, activités périscolaires et gestion commerciale de l'établissement.</p>
        </div>
      </section>


      {/* SKOLARA */}
      <section className="section" id="skolara">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Écoles privées & crèches</span>
            <h2>Skolara — Logiciel de gestion écoles privées & crèches</h2>
          </div>
          <div className="sectors-grid">
            <div className="sector-item" style={{ gridColumn: '1 / -1' }}>
              <p>Un établissement d'enseignement privé marocain est à la fois une institution pédagogique et une entreprise commerciale. Il doit gérer des inscriptions en ligne, suivre les paiements de scolarité (avec les retards et les plans d'échéancement), organiser les emplois du temps sans conflits, communiquer quotidiennement avec les parents et gérer la cantine et les activités périscolaires. Massar ne couvre aucune de ces fonctions commerciales.</p>
              <p>Skolara couvre l'ensemble du cycle de vie d'un élève dans un établissement privé : inscriptions et dossiers élèves avec gestion des listes d'attente, contrats de scolarité et règlements intérieurs, paiements de scolarité avec suivi des impayés et relances automatiques, emplois du temps avec gestion des contraintes (salles, professeurs, matières), notes et bulletins générés automatiquement, absences avec notifications parents en temps réel, cantine avec présences et facturation, et application mobile parent pour tout suivre depuis le téléphone.</p>
              <p>Pour les crèches et maternelles, Skolara propose des modules spécifiques : présences par demi-journée, cahier de liaison numérique (repas, sieste, activités), gestion des autorisations de récupération et facturation selon les formules choisies.</p>
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <Link href="/produits/skolara" className="btn btn--primary">
              Découvrir Skolara →
            </Link>
            <Link href="/contact" className="btn btn--ghost" style={{ marginLeft: 12 }}>
              Demander une démo
            </Link>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Questions fréquentes</span>
            <h2>Vos questions sur les logiciels Errendis pour l'éducation privée</h2>
          </div>
          <div className="faq-list" style={{ maxWidth: 820 }}>
            <details className="faq-item">
              <summary>Skolara est-il compatible avec Massar ?</summary>
              <p>Skolara couvre les fonctions que Massar ne propose pas pour les privés : paiements, cantine, communication parents et gestion commerciale. Pour les fonctions officielles couvertes par Massar, Skolara peut s'interfacer avec la plateforme ministérielle.</p>
            </details>
            <details className="faq-item">
              <summary>Skolara inclut-il une application mobile pour les parents ?</summary>
              <p>Oui, Skolara propose une application mobile parent pour consulter les notes, recevoir des notifications d'absence, voir le menu de cantine, payer les frais de scolarité et communiquer avec les enseignants.</p>
            </details>
            <details className="faq-item">
              <summary>Skolara fonctionne-t-il pour les crèches et maternelles ?</summary>
              <p>Oui, Skolara propose des modules spécifiques pour la petite enfance : présences par demi-journée, cahier de liaison numérique, gestion des autorisations de récupération et facturation selon les formules.</p>
            </details>

          </div>
        </div>
      </section>

      {/* AUTRES SECTEURS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Autres secteurs</span>
            <h2>Errendis couvre 9 verticaux métiers au Maroc</h2>
          </div>
          <div className="cities-grid">
            <Link href="/secteurs/sante" className="city-chip">Santé</Link>
            <Link href="/secteurs/logistique" className="city-chip">Logistique & Transit</Link>
            <Link href="/secteurs/location" className="city-chip">Location automobile</Link>
            <Link href="/secteurs/restauration" className="city-chip">Restauration</Link>
            <Link href="/secteurs/btp" className="city-chip">BTP</Link>
            <Link href="/secteurs/education" className="city-chip">Éducation privée</Link>
            <Link href="/secteurs" className="city-chip city-chip--main">Tous les secteurs →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--alt">
        <div className="container">
          <div className="cta-band">
            <h2>Votre secteur mérite un logiciel qui le comprend.</h2>
            <p>Réservez une démonstration gratuite et voyez comment Errendis s&apos;adapte à votre activité.</p>
            <Link href="/contact" className="btn btn--primary">Demander une démo gratuite</Link>
          </div>
        </div>
      </section>
    </>
  );
}
