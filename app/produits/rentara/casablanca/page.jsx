import Link from 'next/link';
import { getProduct } from '@/lib/products';

const product = getProduct('rentara');
const SITE_URL = 'https://errendis.com';

export const metadata = {
  title: 'Logiciel location voiture Casablanca — Rentara par Errendis',
  description: 'Rentara : logiciel de gestion pour agences de location de voitures à Casablanca. Planning flotte, contrats dématérialisés, suivi GPS, entretien et alertes kilométriques.',
  alternates: { canonical: '/produits/rentara/casablanca' },
  openGraph: {
    title: 'Logiciel location voiture Casablanca — Rentara',
    description: 'Logiciel de gestion pour agences de location de voitures à Casablanca : planning flotte temps réel, contrats et EDL dématérialisés, GPS, entretien.',
    url: '/produits/rentara/casablanca',
    images: [{ url: '/og/rentara-og.png', width: 1200, height: 630, alt: 'Rentara — Logiciel location voiture Casablanca' }],
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Rentara — Logiciel location voiture Casablanca',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Logiciel de gestion pour agences de location de voitures à Casablanca, Grand Casablanca-Settat.',
  url: `${SITE_URL}/produits/rentara/casablanca`,
  publisher: {
    '@type': 'Organization',
    name: 'Errendis',
    url: SITE_URL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Casablanca',
      addressCountry: 'MA',
    },
  },
  areaServed: {
    '@type': 'City',
    name: 'Casablanca',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Rentara', item: `${SITE_URL}/produits/rentara` },
    { '@type': 'ListItem', position: 3, name: 'Casablanca', item: `${SITE_URL}/produits/rentara/casablanca` },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Rentara fonctionne-t-il pour une agence de location à Casablanca ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, Rentara est conçu pour les agences de location de voitures marocaines, quelle que soit leur ville. À Casablanca, entre l'aéroport mohammed v, la zone industrielle et les quartiers d'affaires, les agences de location de casablanca gèr... Rentara gère cette réalité avec un planning flotte en temps réel et des alertes automatiques.',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on gérer plusieurs agences à Casablanca et dans d'autres villes ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, Rentara est multi-sites nativement. Vous pouvez gérer votre agence de Casablanca et d'autres points de location (Casablanca, Rabat, Marrakech...) depuis un tableau de bord unique, avec des droits d'accès par agence.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps pour mettre en service Rentara à Casablanca ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La mise en service de Rentara prend généralement 1 à 3 jours selon la taille de votre flotte. Nous reprenons vos données existantes (Excel, registre papier) et formons vos équipes à Casablanca sur site ou à distance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Rentara gère-t-il le suivi GPS des véhicules à Casablanca ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, Rentara intègre le suivi GPS en temps réel pour localiser chaque véhicule de votre flotte à Casablanca, avec des alertes en cas de sortie de zone géographique autorisée.',
      },
    },
  ],
};

const OTHER_CITIES = [
  { name: 'Casablanca', slug: 'casablanca' },
  { name: 'Rabat', slug: 'rabat' },
  { name: 'Marrakech', slug: 'marrakech' },
  { name: 'Agadir', slug: 'agadir' },
  { name: 'Fès', slug: 'fes' },
  { name: 'Tanger', slug: 'tanger' },
].filter((c) => c.slug !== 'casablanca');

export default function RentaraCasablancaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link> /{' '}
            <Link href="/produits/rentara">Rentara</Link> /{' '}
            Casablanca
          </nav>
          <span className="section-eyebrow">Logiciel location voiture · Casablanca</span>
          <h1>Rentara — Logiciel de gestion pour agence de location de voiture à Casablanca</h1>
          <p>
            Casablanca, capitale économique du Maroc et première ville pour les affaires.
            Entre l'aéroport Mohammed V, la zone industrielle et les quartiers d'affaires, les agences de location de Casablanca gèrent des flottes parmi les plus sollicitées du pays. Clients d'affaires, touristes et relocations internationales imposent une disponibilité sans faille.
            Rentara centralise votre flotte, vos contrats et vos alertes dans un seul outil,
            accessible depuis n&apos;importe quel appareil.
          </p>
          <div className="hero-actions" style={{ marginTop: 28 }}>
            <Link href="/contact" className="btn btn--primary">
              Demander une démo à Casablanca
            </Link>
            <Link href="/produits/rentara" className="btn btn--ghost">
              Voir toutes les fonctionnalités Rentara
            </Link>
          </div>
        </div>
      </section>

      {/* FONCTIONNALITÉS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Fonctionnalités clés</span>
            <h2>Ce que Rentara fait pour votre agence à Casablanca</h2>
          </div>
          <div className="sectors-grid">
            <div className="sector-item">
              <h3>Planning flotte temps réel</h3>
              <p>
                Visualisez la disponibilité de chaque véhicule de votre agence à Casablanca
                en temps réel. Créez des réservations, gérez les imprévus et évitez les
                doubles réservations depuis un planning visuel clair.
              </p>
            </div>
            <div className="sector-item">
              <h3>Contrats et états des lieux dématérialisés</h3>
              <p>
                Éditez les contrats de location et réalisez les états des lieux sur tablette
                avec photos horodatées. Le client signe électroniquement — plus de litiges
                à la restitution.
              </p>
            </div>
            <div className="sector-item">
              <h3>Scan CIN et permis de conduire</h3>
              <p>
                Vérifiez et archivez automatiquement la CIN et le permis de conduire de
                chaque locataire. Une alerte se déclenche si les documents sont expirés.
              </p>
            </div>
            <div className="sector-item">
              <h3>Suivi GPS et gestion des sinistres</h3>
              <p>
                Localisez chaque véhicule de votre flotte à Casablanca en temps réel.
                En cas de sinistre, les données GPS (position, vitesse, trajets) protègent
                votre agence dans les procédures d&apos;assurance.
              </p>
            </div>
            <div className="sector-item">
              <h3>Entretien et alertes kilométriques</h3>
              <p>
                Suivez le kilométrage de chaque véhicule et recevez des alertes automatiques
                avant les échéances de vidange, de contrôle technique et de renouvellement
                d&apos;assurance.
              </p>
            </div>
            <div className="sector-item">
              <h3>Caisse et facturation</h3>
              <p>
                Gérez les encaissements, les cautions, les remises et les factures directement
                depuis Rentara. Exportez vos données comptables en un clic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI RENTARA À CETTE VILLE */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Rentara à Casablanca</span>
            <h2>Pourquoi les agences de location de Casablanca choisissent Rentara</h2>
          </div>
          <div className="why-grid">
            <div className="why-item">
              <h3><span className="why-check">✓</span>Conçu pour le marché marocain</h3>
              <p>
                Documents en dirhams, vérification CIN marocaine, TVA à 20%,
                formulaires d&apos;assurance marocains : Rentara parle la langue
                des agences de Casablanca.
              </p>
            </div>
            <div className="why-item">
              <h3><span className="why-check">✓</span>Multi-agences natif</h3>
              <p>
                Gérez votre agence de Casablanca et d&apos;autres points de location
                depuis un tableau de bord unique. Transférez des véhicules entre agences
                en quelques clics.
              </p>
            </div>
            <div className="why-item">
              <h3><span className="why-check">✓</span>Accessible partout</h3>
              <p>
                Rentara fonctionne sur ordinateur, tablette et smartphone.
                Votre équipe à Casablanca travaille depuis le comptoir ou
                directement sur le parking.
              </p>
            </div>
            <div className="why-item">
              <h3><span className="why-check">✓</span>Support au Maroc</h3>
              <p>
                Notre équipe est basée au Maroc, joignable par WhatsApp et téléphone.
                Pas de ticket sans réponse, pas de support externalisé à l&apos;étranger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Questions fréquentes</span>
            <h2>Rentara à Casablanca — vos questions</h2>
          </div>
          <div className="faq-list" style={{ maxWidth: 820 }}>
            <details className="faq-item">
              <summary>Rentara fonctionne-t-il pour une agence de location à Casablanca ?</summary>
              <p>
                Oui, Rentara est conçu pour les agences de location de voitures marocaines,
                quelle que soit leur ville. Entre l'aéroport Mohammed V, la zone industrielle et les quartiers d'affaires, les agences de location de Casablanca gèrent des flottes parmi les plus sollicitées du pays. Clients d'affaires, touristes et relocations internationales imposent une disponibilité sans faille.
              </p>
            </details>
            <details className="faq-item">
              <summary>Peut-on gérer plusieurs agences à Casablanca et dans d&apos;autres villes ?</summary>
              <p>
                Oui, Rentara est multi-sites nativement. Vous pouvez gérer votre agence de Casablanca
                et d&apos;autres points de location depuis un tableau de bord unique,
                avec des droits d&apos;accès par agence.
              </p>
            </details>
            <details className="faq-item">
              <summary>Combien de temps pour mettre en service Rentara à Casablanca ?</summary>
              <p>
                La mise en service prend généralement 1 à 3 jours selon la taille de votre flotte.
                Nous reprenons vos données existantes et formons vos équipes sur site ou à distance.
              </p>
            </details>
            <details className="faq-item">
              <summary>Rentara gère-t-il le suivi GPS des véhicules à Casablanca ?</summary>
              <p>
                Oui, Rentara intègre le suivi GPS en temps réel pour localiser chaque véhicule
                de votre flotte, avec des alertes en cas de sortie de zone géographique autorisée.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* AUTRES VILLES */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Autres villes</span>
            <h2>Rentara est disponible dans toutes les villes du Maroc</h2>
          </div>
          <div className="cities-grid">
            {OTHER_CITIES.map((c) => (
              <Link key={c.slug} href={`/produits/rentara/${c.slug}`} className="city-chip">
                Logiciel location voiture {c.name}
              </Link>
            ))}
            <Link href="/produits/rentara" className="city-chip city-chip--main">
              Voir toutes les fonctionnalités Rentara →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Prêt à digitaliser votre agence de location à Casablanca ?</h2>
            <p>
              Réservez une démonstration gratuite et voyez Rentara en action
              sur les réalités de votre agence à Casablanca.
            </p>
            <Link href="/contact" className="btn btn--primary">
              Demander une démo gratuite
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
