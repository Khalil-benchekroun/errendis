import Link from 'next/link';
import { products } from '@/lib/products';
import { ProductIcon } from '@/components/logos';

const SITE_URL = 'https://errendis.com';

export const metadata = {
  title: 'Logiciels gestion santé Maroc — Laboratoires, Dialyse, Distribution médicale',
  description: 'Logiciels de gestion spécialisés pour le secteur de la santé au Maroc : Labya pour les laboratoires, Dialya pour la dialyse, Medira pour la distribution médicale, Medikara pour les délégués pharma.',
  alternates: { canonical: '/secteurs/sante' },
  openGraph: {
    title: 'Logiciels gestion santé Maroc — Laboratoires, Dialyse, Distribution médicale',
    description: 'Logiciels de gestion spécialisés pour le secteur de la santé au Maroc : Labya pour les laboratoires, Dialya pour la dialyse, Medira pour la distribution médicale, Medikara pour les délégués pharma.',
    url: '/secteurs/sante',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Secteurs', item: `${SITE_URL}/secteurs` },
    { '@type': 'ListItem', position: 3, name: 'Logiciels de gestion pour le secteur de la santé au Maroc', item: `${SITE_URL}/secteurs/sante` },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quels logiciels Errendis couvrent le secteur de la santé au Maroc ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Errendis propose quatre logiciels pour la santé : Labya pour les laboratoires d\\u2019analyses médicales, Dialya pour les centres d\\u2019hémodialyse, Medira pour les distributeurs d\\u2019équipements médicaux, et Medikara pour les délégués médicaux et forces de vente pharmaceutiques.' },
    },
    {
      '@type': 'Question',
      name: 'Les logiciels Errendis santé gèrent-ils la facturation AMO, CNOPS et CNSS ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Labya et Dialya gèrent nativement la facturation auprès de tous les organismes de prise en charge marocains : CNOPS, CNSS, AMO Tadamon et mutuelles privées. Ils génèrent les bordereaux mensuels dans les formats requis et suivent les rejets.' },
    },
    {
      '@type': 'Question',
      name: 'Labya est-il compatible avec les automates de laboratoire marocains ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Labya se connecte en bidirectionnel aux automates les plus utilisés au Maroc : Cobas Roche, Sysmex, Abbott Architect et BioMérieux VIDAS.' },
    }
  ],
};

const RELATED_SLUGS = ['labya', 'dialya', 'medira', 'medikara'];

export default function SecteurSantePage() {
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
            Logiciels de gestion pour le secteur de la santé au Maroc
          </nav>
          <span className="section-eyebrow">Secteur · Santé</span>
          <h1>Logiciels de gestion pour le secteur de la santé au Maroc</h1>
          <p>Le secteur de la santé marocain est en profonde transformation. Le déploiement de l'Assurance Maladie Obligatoire (AMO), la montée des exigences qualité (ISO 15189, accréditation) et la pression sur les coûts imposent aux structures de santé privées une gestion plus rigoureuse et mieux documentée. Les logiciels Errendis pour la santé couvrent quatre verticaux distincts — chacun avec ses propres réalités opérationnelles et réglementaires.</p>
        </div>
      </section>


      {/* LABYA */}
      <section className="section" id="labya">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Laboratoires d'analyses médicales</span>
            <h2>Labya — Logiciel de gestion laboratoires d'analyses médicales</h2>
          </div>
          <div className="sectors-grid">
            <div className="sector-item" style={{ gridColumn: '1 / -1' }}>
              <p>Les laboratoires d'analyses médicales marocains font face à une triple pression : augmentation des volumes d'analyses avec le déploiement de l'AMO, exigences qualité croissantes (ISO 15189, GBEA), et concurrence accrue entre établissements. Gérer tout cela avec des registres papier et des fichiers Excel n'est plus tenable.</p>
              <p>Labya couvre l'intégralité du cycle analytique : réception des patients avec scan de l'ordonnance, connexion bidirectionnelle aux automates (Cobas Roche, Sysmex, Architect, VIDAS), validation biologique avec alertes valeurs critiques, gestion des réactifs et métrologie conforme ISO 15189, facturation AMO/CNOPS/CNSS avec génération automatique des bordereaux, portail médecin prescripteur et application mobile patient.</p>
              <p>La connexion aux automates est la fonctionnalité qui a le plus d'impact immédiat : elle supprime la ressaisie manuelle des résultats — principale source d'erreurs de transcription — et réduit le délai de rendu des résultats, deux éléments critiques pour la satisfaction des patients et la fidélisation des médecins prescripteurs.</p>
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <Link href="/produits/labya" className="btn btn--primary">
              Découvrir Labya →
            </Link>
            <Link href="/contact" className="btn btn--ghost" style={{ marginLeft: 12 }}>
              Demander une démo
            </Link>
          </div>
        </div>
      </section>

      {/* DIALYA */}
      <section className="section section--alt" id="dialya">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Centres d'hémodialyse</span>
            <h2>Dialya — Logiciel de gestion centres d'hémodialyse</h2>
          </div>
          <div className="sectors-grid">
            <div className="sector-item" style={{ gridColumn: '1 / -1' }}>
              <p>Le Maroc prend en charge près de 35 000 patients dialysés, un chiffre qui croît chaque année avec la progression du diabète et de l'hypertension artérielle. Les centres de dialyse marocains, publics et privés, font face à une demande croissante qui dépasse souvent leur capacité installée, imposant une optimisation maximale de l'utilisation des postes et des générateurs.</p>
              <p>Dialya est le premier logiciel de gestion hémodialyse conçu spécifiquement pour les centres marocains. Il couvre : le dossier patient dialysé (antécédents, accès vasculaire, prescription de dialyse), le planning visuel des postes et générateurs avec réaffectation par glisser-déposer, le suivi de séance en temps réel avec saisie des paramètres cliniques, l'intégration biologie via HL7 avec alertes valeurs critiques, et la facturation AMO/CNOPS/CNSS avec bordereaux automatiques.</p>
              <p>La facturation organismes est l'enjeu financier central : dans un centre à 10 postes, un gain de 10% sur le recouvrement représente plusieurs centaines de milliers de dirhams par an.</p>
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <Link href="/produits/dialya" className="btn btn--primary">
              Découvrir Dialya →
            </Link>
            <Link href="/contact" className="btn btn--ghost" style={{ marginLeft: 12 }}>
              Demander une démo
            </Link>
          </div>
        </div>
      </section>

      {/* MEDIRA */}
      <section className="section" id="medira">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Distribution d'équipements médicaux</span>
            <h2>Medira — Logiciel de gestion distribution d'équipements médicaux</h2>
          </div>
          <div className="sectors-grid">
            <div className="sector-item" style={{ gridColumn: '1 / -1' }}>
              <p>Les distributeurs d'équipements et consommables médicaux au Maroc opèrent dans un environnement réglementaire strict (agréments ministère de la Santé, ONSSA) et commercial exigeant (appels d'offres publics, gestion des lots et péremptions). La traçabilité des produits n'est pas une option — c'est une obligation légale et commerciale.</p>
              <p>Medira couvre l'ensemble de la chaîne de valeur d'un distributeur médical : catalogue produits avec gestion des lots et numéros de série, devis et commandes, gestion de stock FEFO avec alertes de péremption, consignations et retours, SAV parc installé avec historique d'interventions, et facturation multi-organisme. La gestion des appels d'offres publics est intégrée avec suivi des délais et des lots attribués.</p>
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <Link href="/produits/medira" className="btn btn--primary">
              Découvrir Medira →
            </Link>
            <Link href="/contact" className="btn btn--ghost" style={{ marginLeft: 12 }}>
              Demander une démo
            </Link>
          </div>
        </div>
      </section>

      {/* MEDIKARA */}
      <section className="section section--alt" id="medikara">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Délégués médicaux et force de vente pharma</span>
            <h2>Medikara — Logiciel de gestion délégués médicaux et force de vente pharma</h2>
          </div>
          <div className="sectors-grid">
            <div className="sector-item" style={{ gridColumn: '1 / -1' }}>
              <p>La visite médicale reste le principal canal promotionnel des laboratoires pharmaceutiques au Maroc. Pourtant, la quasi-totalité des forces de vente marocaines fonctionnent encore sans CRM dédié : rapports Excel, carnets papier, plannings WhatsApp. Cette absence d'outil numérique limite la productivité des délégués et prive les managers d'une visibilité en temps réel sur l'activité terrain.</p>
              <p>Medikara est le premier CRM mobile pour délégués médicaux conçu pour le marché marocain. Il couvre : base de données médecins et pharmaciens géolocalisée, comptes-rendus de visite en temps réel depuis le terrain, optimisation automatique des tournées, gestion des échantillons avec traçabilité réglementaire, objectifs et incentives par délégué, et tableau de bord superviseur en temps réel. Aucun concurrent francophone sérieux ne couvre ce créneau au Maroc.</p>
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <Link href="/produits/medikara" className="btn btn--primary">
              Découvrir Medikara →
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
            <h2>Vos questions sur les logiciels Errendis pour sante</h2>
          </div>
          <div className="faq-list" style={{ maxWidth: 820 }}>
            <details className="faq-item">
              <summary>Quels logiciels Errendis couvrent le secteur de la santé au Maroc ?</summary>
              <p>Errendis propose quatre logiciels pour la santé : Labya pour les laboratoires d'analyses médicales, Dialya pour les centres d'hémodialyse, Medira pour les distributeurs d'équipements médicaux, et Medikara pour les délégués médicaux et forces de vente pharmaceutiques.</p>
            </details>
            <details className="faq-item">
              <summary>Les logiciels Errendis santé gèrent-ils la facturation AMO, CNOPS et CNSS ?</summary>
              <p>Oui, Labya et Dialya gèrent nativement la facturation auprès de tous les organismes de prise en charge marocains : CNOPS, CNSS, AMO Tadamon et mutuelles privées. Ils génèrent les bordereaux mensuels dans les formats requis et suivent les rejets.</p>
            </details>
            <details className="faq-item">
              <summary>Labya est-il compatible avec les automates de laboratoire marocains ?</summary>
              <p>Oui, Labya se connecte en bidirectionnel aux automates les plus utilisés au Maroc : Cobas Roche, Sysmex, Abbott Architect et BioMérieux VIDAS.</p>
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
