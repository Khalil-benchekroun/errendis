import Link from 'next/link';
import { getProduct } from '@/lib/products';

const product = getProduct('restara');
const SITE_URL = 'https://errendis.com';

export const metadata = {
  title: 'Logiciel gestion restaurant Fès — Restara par Errendis',
  description: 'Restara : logiciel de gestion pour restaurants et cafés à Fès. Caisse tactile, plan de salle, menu QR, écran cuisine KDS, stocks et fidélité client.',
  alternates: { canonical: '/produits/restara/fes' },
  openGraph: {
    title: 'Logiciel gestion restaurant Fès — Restara',
    description: 'Logiciel de gestion pour restaurants et cafés à Fès : caisse, plan de salle, menu QR, KDS, stocks et fiches techniques.',
    url: '/produits/restara/fes',
    images: [{ url: '/og/restara-og.png', width: 1200, height: 630, alt: 'Restara — Logiciel restaurant Fès' }],
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Restara — Logiciel gestion restaurant Fès',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Logiciel de gestion pour restaurants et cafés à Fès, Fès-Meknès.',
  url: `${SITE_URL}/produits/restara/fes`,
  publisher: {
    '@type': 'Organization',
    name: 'Errendis',
    url: SITE_URL,
  },
  areaServed: {
    '@type': 'City',
    name: 'Fès',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Restara', item: `${SITE_URL}/produits/restara` },
    { '@type': 'ListItem', position: 3, name: 'Fès', item: `${SITE_URL}/produits/restara/fes` },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Restara convient-il aux restaurants de Fès ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, Restara est conçu pour les restaurants et cafés marocains. À Fès, fès est réputée pour sa gastronomie traditionnelle marocaine. les restaurants doivent gérer une offre authentique tout en répondant aux attentes des t Restara s\u2019adapte à ces réalités avec une caisse rapide et un écran cuisine KDS.',
      },
    },
    {
      '@type': 'Question',
      name: 'Restara propose-t-il un menu digital QR pour les restaurants de Fès ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, Restara inclut un menu digital accessible par QR code, modifiable en temps réel depuis le back-office. Idéal pour les restaurants de Fès qui accueillent une clientèle touristique internationale.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps pour déployer Restara dans mon restaurant à Fès ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La mise en service de Restara prend généralement 1 à 2 jours. Nous configurons votre carte, votre plan de salle et vos fiches techniques, puis formons votre équipe sur site à Fès ou à distance.',
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
].filter((c) => c.slug !== 'fes');

export default function RestaraFesPage() {
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
            <Link href="/produits/restara">Restara</Link> /{' '}
            Fès
          </nav>
          <span className="section-eyebrow">Logiciel gestion restaurant · Fès</span>
          <h1>Restara — Logiciel de gestion pour restaurant et café à Fès</h1>
          <p>
            Fès, ville impériale avec une scène gastronomique traditionnelle riche.
            Fès est réputée pour sa gastronomie traditionnelle marocaine. Les restaurants doivent gérer une offre authentique tout en répondant aux attentes des touristes internationaux qui viennent découvrir la cuisine fassi.
            Restara connecte la salle, la cuisine et la caisse dans un seul outil
            conçu pour les restaurateurs marocains.
          </p>
          <div className="hero-actions" style={{ marginTop: 28 }}>
            <Link href="/contact" className="btn btn--primary">
              Demander une démo à Fès
            </Link>
            <Link href="/produits/restara" className="btn btn--ghost">
              Voir toutes les fonctionnalités Restara
            </Link>
          </div>
        </div>
      </section>

      {/* FONCTIONNALITÉS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Fonctionnalités clés</span>
            <h2>Ce que Restara fait pour votre restaurant à Fès</h2>
          </div>
          <div className="sectors-grid">
            <div className="sector-item">
              <h3>Caisse tactile et prise de commande</h3>
              <p>
                Prenez les commandes sur tablette ou smartphone, envoyez-les directement
                en cuisine et encaissez par espèces, carte ou virement. La clôture de
                caisse se fait en 5 minutes en fin de service.
              </p>
            </div>
            <div className="sector-item">
              <h3>Plan de salle interactif</h3>
              <p>
                Visualisez les tables libres, occupées et réservées de votre restaurant
                à Fès en temps réel. Assignez les serveurs et suivez le statut
                de chaque commande sans confusion.
              </p>
            </div>
            <div className="sector-item">
              <h3>Menu digital QR</h3>
              <p>
                Proposez votre carte via QR code, modifiable en temps réel depuis votre
                back-office. Idéal pour les restaurants de Fès qui accueillent
                une clientèle touristique internationale.
              </p>
            </div>
            <div className="sector-item">
              <h3>Écran cuisine KDS</h3>
              <p>
                Remplacez les bons papier par un écran cuisine numérique. Les commandes
                apparaissent par ordre de priorité, le chef valide chaque plat prêt
                et le serveur est notifié automatiquement.
              </p>
            </div>
            <div className="sector-item">
              <h3>Fiches techniques et coût matières</h3>
              <p>
                Calculez automatiquement la marge brute de chaque plat de votre carte.
                Identifiez les plats qui érodent votre rentabilité et ajustez vos prix
                en conséquence.
              </p>
            </div>
            <div className="sector-item">
              <h3>Gestion des stocks et approvisionnements</h3>
              <p>
                Chaque plat vendu soustrait automatiquement les ingrédients du stock.
                Des alertes de seuil vous préviennent avant les ruptures — plus jamais
                de manque en plein service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI RESTARA À CETTE VILLE */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Restara à Fès</span>
            <h2>Pourquoi les restaurants de Fès choisissent Restara</h2>
          </div>
          <div className="why-grid">
            <div className="why-item">
              <h3><span className="why-check">✓</span>Adapté à la restauration marocaine</h3>
              <p>
                Facturation en dirhams, TVA marocaine, gestion des pourboires et
                des offerts avec traçabilité — Restara parle la langue des
                restaurateurs de Fès.
              </p>
            </div>
            <div className="why-item">
              <h3><span className="why-check">✓</span>Rapide à déployer</h3>
              <p>
                Mise en service en 1 à 2 jours. Nous configurons votre carte,
                votre plan de salle et vos fiches techniques, puis formons
                votre équipe à Fès.
              </p>
            </div>
            <div className="why-item">
              <h3><span className="why-check">✓</span>Accessible sur tous les appareils</h3>
              <p>
                Restara fonctionne sur tablette en salle, écran tactile en cuisine
                et ordinateur en back-office — sans installation, depuis le cloud.
              </p>
            </div>
            <div className="why-item">
              <h3><span className="why-check">✓</span>Support au Maroc</h3>
              <p>
                Notre équipe est joignable par WhatsApp et téléphone,
                basée au Maroc. Un problème en plein service à Fès ?
                Nous répondons rapidement.
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
            <h2>Restara à Fès — vos questions</h2>
          </div>
          <div className="faq-list" style={{ maxWidth: 820 }}>
            <details className="faq-item">
              <summary>Restara convient-il aux restaurants de Fès ?</summary>
              <p>
                Oui. Fès est réputée pour sa gastronomie traditionnelle marocaine. Les restaurants doivent gérer une offre authentique tout en répondant aux attentes des touristes internationaux qui viennent découvrir la cuisine fassi. Restara s&apos;adapte à ces réalités
                avec une caisse rapide, un écran cuisine et une gestion des stocks intégrée.
              </p>
            </details>
            <details className="faq-item">
              <summary>Restara propose-t-il un menu digital QR pour Fès ?</summary>
              <p>
                Oui, Restara inclut un menu digital accessible par QR code, modifiable
                en temps réel. Idéal pour les restaurants de Fès qui accueillent
                une clientèle touristique internationale.
              </p>
            </details>
            <details className="faq-item">
              <summary>Combien de temps pour déployer Restara à Fès ?</summary>
              <p>
                La mise en service prend généralement 1 à 2 jours. Nous configurons
                votre carte, votre plan de salle et vos fiches techniques,
                puis formons votre équipe sur site à Fès ou à distance.
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
            <h2>Restara est disponible dans toutes les villes du Maroc</h2>
          </div>
          <div className="cities-grid">
            {OTHER_CITIES.map((c) => (
              <Link key={c.slug} href={`/produits/restara/${c.slug}`} className="city-chip">
                Logiciel restaurant {c.name}
              </Link>
            ))}
            <Link href="/produits/restara" className="city-chip city-chip--main">
              Voir toutes les fonctionnalités Restara →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Prêt à digitaliser votre restaurant à Fès ?</h2>
            <p>
              Réservez une démonstration gratuite et voyez Restara en action
              sur les réalités de votre établissement à Fès.
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
