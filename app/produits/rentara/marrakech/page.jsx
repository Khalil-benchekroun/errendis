import Link from 'next/link';
import { getProduct } from '@/lib/products';

const product = getProduct('rentara');
const SITE_URL = 'https://errendis.com';

export const metadata = {
  title: 'Logiciel location voiture Marrakech — Rentara par Errendis',
  description: 'Rentara : logiciel de gestion pour agences de location de voitures à Marrakech. Planning flotte, contrats dématérialisés, suivi GPS, entretien et alertes kilométriques.',
  alternates: { canonical: '/produits/rentara/marrakech' },
  openGraph: {
    title: 'Logiciel location voiture Marrakech — Rentara',
    description: 'Logiciel de gestion pour agences de location de voitures à Marrakech : planning flotte temps réel, contrats et EDL dématérialisés, GPS, entretien.',
    url: '/produits/rentara/marrakech',
    images: [{ url: '/og/rentara-og.png', width: 1200, height: 630, alt: 'Rentara — Logiciel location voiture Marrakech' }],
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Rentara — Logiciel location voiture Marrakech',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Logiciel de gestion pour agences de location de voitures à Marrakech, Marrakech-Safi.',
  url: `${SITE_URL}/produits/rentara/marrakech`,
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
    name: 'Marrakech',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Rentara', item: `${SITE_URL}/produits/rentara` },
    { '@type': 'ListItem', position: 3, name: 'Marrakech', item: `${SITE_URL}/produits/rentara/marrakech` },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Rentara fonctionne-t-il pour une agence de location à Marrakech ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, Rentara est conçu pour les agences de location de voitures marocaines, quelle que soit leur ville. À Marrakech, marrakech est la destination touristique la plus visitée du maroc. les agences de location y font face à une saisonnalit... Rentara gère cette réalité avec un planning flotte en temps réel et des alertes automatiques.',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on gérer plusieurs agences à Marrakech et dans d\u2019autres villes ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, Rentara est multi-sites nativement. Vous pouvez gérer votre agence de Marrakech et d\u2019autres points de location (Casablanca, Rabat, Marrakech...) depuis un tableau de bord unique, avec des droits d\u2019accès par agence.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps pour mettre en service Rentara à Marrakech ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La mise en service de Rentara prend généralement 1 à 3 jours selon la taille de votre flotte. Nous reprenons vos données existantes (Excel, registre papier) et formons vos équipes à Marrakech sur site ou à distance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Rentara gère-t-il le suivi GPS des véhicules à Marrakech ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, Rentara intègre le suivi GPS en temps réel pour localiser chaque véhicule de votre flotte à Marrakech, avec des alertes en cas de sortie de zone géographique autorisée.',
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
].filter((c) => c.slug !== 'marrakech');

export default function RentaraMarrakechPage() {
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
            Marrakech
          </nav>
          <span className="section-eyebrow">Logiciel location voiture · Marrakech</span>
          <h1>Rentara — Logiciel de gestion pour agence de location de voiture à Marrakech</h1>
          <p>
            Marrakech, capitale touristique du Maroc et destination internationale.
            Marrakech est la destination touristique la plus visitée du Maroc. Les agences de location y font face à une saisonnalité forte, des clients internationaux aux exigences variées, et une nécessité de gérer des flottes diversifiées (citadines, 4x4, luxe).
            Rentara centralise votre flotte, vos contrats et vos alertes dans un seul outil,
            accessible depuis n&apos;importe quel appareil.
          </p>
          <div className="hero-actions" style={{ marginTop: 28 }}>
            <Link href="/contact" className="btn btn--primary">
              Demander une démo à Marrakech
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
            <h2>Ce que Rentara fait pour votre agence à Marrakech</h2>
          </div>
          <div className="sectors-grid">
            <div className="sector-item">
              <h3>Planning flotte temps réel</h3>
              <p>
                Visualisez la disponibilité de chaque véhicule de votre agence à Marrakech
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
                Localisez chaque véhicule de votre flotte à Marrakech en temps réel.
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
            <span className="section-eyebrow">Rentara à Marrakech</span>
            <h2>Pourquoi les agences de location de Marrakech choisissent Rentara</h2>
          </div>
          <div className="why-grid">
            <div className="why-item">
              <h3><span className="why-check">✓</span>Conçu pour le marché marocain</h3>
              <p>
                Documents en dirhams, vérification CIN marocaine, TVA à 20%,
                formulaires d&apos;assurance marocains : Rentara parle la langue
                des agences de Marrakech.
              </p>
            </div>
            <div className="why-item">
              <h3><span className="why-check">✓</span>Multi-agences natif</h3>
              <p>
                Gérez votre agence de Marrakech et d&apos;autres points de location
                depuis un tableau de bord unique. Transférez des véhicules entre agences
                en quelques clics.
              </p>
            </div>
            <div className="why-item">
              <h3><span className="why-check">✓</span>Accessible partout</h3>
              <p>
                Rentara fonctionne sur ordinateur, tablette et smartphone.
                Votre équipe à Marrakech travaille depuis le comptoir ou
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
            <h2>Rentara à Marrakech — vos questions</h2>
          </div>
          <div className="faq-list" style={{ maxWidth: 820 }}>
            <details className="faq-item">
              <summary>Rentara fonctionne-t-il pour une agence de location à Marrakech ?</summary>
              <p>
                Oui, Rentara est conçu pour les agences de location de voitures marocaines,
                quelle que soit leur ville. Marrakech est la destination touristique la plus visitée du Maroc. Les agences de location y font face à une saisonnalité forte, des clients internationaux aux exigences variées, et une nécessité de gérer des flottes diversifiées (citadines, 4x4, luxe).
              </p>
            </details>
            <details className="faq-item">
              <summary>Peut-on gérer plusieurs agences à Marrakech et dans d&apos;autres villes ?</summary>
              <p>
                Oui, Rentara est multi-sites nativement. Vous pouvez gérer votre agence de Marrakech
                et d&apos;autres points de location depuis un tableau de bord unique,
                avec des droits d&apos;accès par agence.
              </p>
            </details>
            <details className="faq-item">
              <summary>Combien de temps pour mettre en service Rentara à Marrakech ?</summary>
              <p>
                La mise en service prend généralement 1 à 3 jours selon la taille de votre flotte.
                Nous reprenons vos données existantes et formons vos équipes sur site ou à distance.
              </p>
            </details>
            <details className="faq-item">
              <summary>Rentara gère-t-il le suivi GPS des véhicules à Marrakech ?</summary>
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
            <h2>Prêt à digitaliser votre agence de location à Marrakech ?</h2>
            <p>
              Réservez une démonstration gratuite et voyez Rentara en action
              sur les réalités de votre agence à Marrakech.
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
