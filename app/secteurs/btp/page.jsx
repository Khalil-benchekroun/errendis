import Link from 'next/link';
import { products } from '@/lib/products';
import { ProductIcon } from '@/components/logos';

const SITE_URL = 'https://errendis.com';

export const metadata = {
  title: 'Logiciel gestion BTP Maroc — Batira pour entreprises construction et promoteurs',
  description: 'Batira : logiciel de gestion pour entreprises BTP et promoteurs immobiliers au Maroc. Suivi chantier, retenues de garantie, TVA multi-taux natif, CNSS chantier intégrés.',
  alternates: { canonical: '/secteurs/btp' },
  openGraph: {
    title: 'Logiciel gestion BTP Maroc — Batira pour entreprises construction et promoteurs',
    description: 'Batira : logiciel de gestion pour entreprises BTP et promoteurs immobiliers au Maroc. Suivi chantier, retenues de garantie, TVA multi-taux natif, CNSS chantier intégrés.',
    url: '/secteurs/btp',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Secteurs', item: `${SITE_URL}/secteurs` },
    { '@type': 'ListItem', position: 3, name: 'Logiciel de gestion pour les entreprises BTP au Maroc', item: `${SITE_URL}/secteurs/btp` },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Batira gère-t-il les retenues de garantie dans les marchés marocains ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Batira calcule automatiquement les retenues de garantie sur chaque décompte, suit leur cumul par chantier et déclenche des alertes à l\\u2019approche des dates de libération (réception provisoire et définitive).' },
    },
    {
      '@type': 'Question',
      name: 'Batira gère-t-il la TVA multi-taux du BTP marocain ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Batira gère nativement les différents taux de TVA applicables dans le BTP marocain (20%, 14%, 7%) par ligne de facturation, avec un calcul détaillé par taux pour la déclaration DGI.' },
    },
    {
      '@type': 'Question',
      name: 'Batira automatise-t-il les déclarations CNSS pour le personnel de chantier ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Batira génère les déclarations CNSS mensuelles à partir des pointages de présence saisis par les chefs de chantier, en appliquant les règles spécifiques au régime CNSS du secteur BTP.' },
    }
  ],
};

const RELATED_SLUGS = ['batira'];

export default function SecteurBtpPage() {
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
            Logiciel de gestion pour les entreprises BTP au Maroc
          </nav>
          <span className="section-eyebrow">Secteur · BTP & Promotion immobilière</span>
          <h1>Logiciel de gestion pour les entreprises BTP et promoteurs immobiliers au Maroc</h1>
          <p>Le BTP représente environ 6% du PIB marocain et emploie plus d'un million de personnes. Porté par les grands chantiers d'infrastructure et la demande en logements, le secteur fait face à des pressions croissantes : hausse des coûts de matériaux, tensions sur la main-d'œuvre qualifiée, délais de paiement des maîtres d'ouvrage publics et intensification des contrôles CNSS. Les PME du BTP qui ne se dotent pas d'outils de gestion adaptés s'exposent à des risques financiers et réglementaires significatifs.</p>
        </div>
      </section>


      {/* BATIRA */}
      <section className="section" id="batira">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">BTP & promotion immobilière</span>
            <h2>Batira — Logiciel de gestion btp & promotion immobilière</h2>
          </div>
          <div className="sectors-grid">
            <div className="sector-item" style={{ gridColumn: '1 / -1' }}>
              <p>Les entreprises de construction marocaines font face à des réalités réglementaires et financières que les logiciels généralistes ne couvrent pas : retenues de garantie sur chaque décompte, TVA à taux multiples (20%, 14%, 7%) selon la nature des travaux, déclarations CNSS spécifiques pour le personnel de chantier, et gestion des sous-traitants avec leurs propres marchés et retenues.</p>
              <p>Batira couvre l'ensemble du cycle de vie d'un chantier : suivi de l'avancement par phases et lots avec comparaison réel/prévisionnel, génération des décomptes mensuels avec calcul automatique des retenues de garantie, facturation multi-taux TVA conforme aux exigences fiscales marocaines, déclarations CNSS chantier générées depuis les pointages de présence, gestion des sous-traitants avec leurs situations mensuelles, et tableau de bord de trésorerie par chantier et global.</p>
              <p>La gestion des retenues de garantie est l'une des fonctions les plus critiques financièrement : dans un chantier à 10 millions de dirhams, les retenues cumulées (5 à 10%) représentent 500 000 à 1 million de dirhams immobilisés. Un système d'alertes sur les dates de libération permet de ne jamais oublier de réclamer ces sommes.</p>
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <Link href="/produits/batira" className="btn btn--primary">
              Découvrir Batira →
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
            <h2>Vos questions sur les logiciels Errendis pour btp</h2>
          </div>
          <div className="faq-list" style={{ maxWidth: 820 }}>
            <details className="faq-item">
              <summary>Batira gère-t-il les retenues de garantie dans les marchés marocains ?</summary>
              <p>Oui, Batira calcule automatiquement les retenues de garantie sur chaque décompte, suit leur cumul par chantier et déclenche des alertes à l'approche des dates de libération (réception provisoire et définitive).</p>
            </details>
            <details className="faq-item">
              <summary>Batira gère-t-il la TVA multi-taux du BTP marocain ?</summary>
              <p>Oui, Batira gère nativement les différents taux de TVA applicables dans le BTP marocain (20%, 14%, 7%) par ligne de facturation, avec un calcul détaillé par taux pour la déclaration DGI.</p>
            </details>
            <details className="faq-item">
              <summary>Batira automatise-t-il les déclarations CNSS pour le personnel de chantier ?</summary>
              <p>Oui, Batira génère les déclarations CNSS mensuelles à partir des pointages de présence saisis par les chefs de chantier, en appliquant les règles spécifiques au régime CNSS du secteur BTP.</p>
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
