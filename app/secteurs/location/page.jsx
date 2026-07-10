import Link from 'next/link';
import { products } from '@/lib/products';
import { ProductIcon } from '@/components/logos';

const SITE_URL = 'https://errendis.com';

export const metadata = {
  title: 'Logiciel gestion location voiture Maroc — Rentara par Errendis',
  description: 'Rentara : logiciel de gestion pour agences de location de voitures au Maroc. Planning flotte temps réel, contrats dématérialisés, GPS, entretien. Casablanca, Marrakech, Agadir, Tanger.',
  alternates: { canonical: '/secteurs/location' },
  openGraph: {
    title: 'Logiciel gestion location voiture Maroc — Rentara par Errendis',
    description: 'Rentara : logiciel de gestion pour agences de location de voitures au Maroc. Planning flotte temps réel, contrats dématérialisés, GPS, entretien. Casablanca, Marrakech, Agadir, Tanger.',
    url: '/secteurs/location',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Secteurs', item: `${SITE_URL}/secteurs` },
    { '@type': 'ListItem', position: 3, name: 'Logiciel de gestion pour agences de location de voitures au Maroc', item: `${SITE_URL}/secteurs/location` },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Rentara fonctionne-t-il pour les agences multi-sites au Maroc ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Rentara est conçu pour la gestion multi-agences : tableau de bord centralisé, transferts de véhicules entre sites et droits d\'accès par agence. Il est disponible dans toutes les villes : Casablanca, Rabat, Marrakech, Agadir, Fès et Tanger.' },
    },
    {
      '@type': 'Question',
      name: 'Rentara gère-t-il les états des lieux avec photos ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Rentara permet de réaliser les états des lieux sur tablette avec photos horodatées et signature électronique du client — ce qui élimine quasiment tous les litiges à la restitution.' },
    },
    {
      '@type': 'Question',
      name: 'Rentara inclut-il un suivi GPS des véhicules ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Rentara intègre le suivi GPS en temps réel pour localiser chaque véhicule, détecter les sorties de zone et disposer de données objectives en cas de sinistre.' },
    }
  ],
};

const RELATED_SLUGS = ['rentara'];

export default function SecteurLocationPage() {
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
            Logiciel de gestion pour agences de location de voitures au Maroc
          </nav>
          <span className="section-eyebrow">Secteur · Location automobile</span>
          <h1>Logiciel de gestion pour agences de location de voitures au Maroc</h1>
          <p>Le secteur de la location de voitures au Maroc est l'un des plus dynamiques de l'économie du tourisme et de la mobilité d'affaires. Avec plus de 13 millions de touristes accueillis en 2024 et une forte demande intérieure (hommes d'affaires, expatriés, relocations), les agences font face à une pression croissante sur leur capacité opérationnelle. La gestion d'une flotte sur Excel et WhatsApp atteint rapidement ses limites.</p>
        </div>
      </section>


      {/* RENTARA */}
      <section className="section" id="rentara">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Agences de location de voitures</span>
            <h2>Rentara — Logiciel de gestion agences de location de voitures</h2>
          </div>
          <div className="sectors-grid">
            <div className="sector-item" style={{ gridColumn: '1 / -1' }}>
              <p>Une agence de location de voitures marocaine gère chaque jour des dizaines de réservations, plusieurs contrats simultanés, des états des lieux contradictoires, des alertes d'entretien et une caisse à équilibrer. Sans outil adapté, la moindre erreur — une double réservation, un contrat mal rempli, un permis non vérifié — peut coûter cher en litiges et en image.</p>
              <p>Rentara centralise tous ces flux dans un système unique : planning flotte en temps réel avec vue sur la disponibilité de chaque véhicule, contrats et états des lieux dématérialisés avec photos horodatées et signature électronique, scan CIN et permis de conduire avec vérification de validité, suivi GPS en temps réel, entretien préventif avec alertes kilométriques, caisse et facturation en dirhams, et gestion multi-agences pour les enseignes qui opèrent sur plusieurs villes.</p>
              <p>Le taux d'utilisation de la flotte est l'indicateur clé de rentabilité d'une agence. Rentara le calcule en temps réel par véhicule et par agence, permettant d'identifier les véhicules sous-utilisés et d'optimiser les tarifs selon les périodes.</p>
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <Link href="/produits/rentara" className="btn btn--primary">
              Découvrir Rentara →
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
            <h2>Vos questions sur les logiciels Errendis pour location</h2>
          </div>
          <div className="faq-list" style={{ maxWidth: 820 }}>
            <details className="faq-item">
              <summary>Rentara fonctionne-t-il pour les agences multi-sites au Maroc ?</summary>
              <p>Oui, Rentara est conçu pour la gestion multi-agences : tableau de bord centralisé, transferts de véhicules entre sites et droits d'accès par agence. Il est disponible dans toutes les villes : Casablanca, Rabat, Marrakech, Agadir, Fès et Tanger.</p>
            </details>
            <details className="faq-item">
              <summary>Rentara gère-t-il les états des lieux avec photos ?</summary>
              <p>Oui, Rentara permet de réaliser les états des lieux sur tablette avec photos horodatées et signature électronique du client — ce qui élimine quasiment tous les litiges à la restitution.</p>
            </details>
            <details className="faq-item">
              <summary>Rentara inclut-il un suivi GPS des véhicules ?</summary>
              <p>Oui, Rentara intègre le suivi GPS en temps réel pour localiser chaque véhicule, détecter les sorties de zone et disposer de données objectives en cas de sinistre.</p>
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
