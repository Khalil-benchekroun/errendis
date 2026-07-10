import Link from 'next/link';
import { products } from '@/lib/products';
import { ProductIcon } from '@/components/logos';

const SITE_URL = 'https://errendis.com';

export const metadata = {
  title: 'Logiciel gestion restaurant café Maroc — Restara par Errendis',
  description: 'Restara : logiciel de gestion pour restaurants et cafés au Maroc. Caisse tactile, plan de salle, menu QR, écran cuisine KDS, fiches techniques et gestion des stocks.',
  alternates: { canonical: '/secteurs/restauration' },
  openGraph: {
    title: 'Logiciel gestion restaurant café Maroc — Restara par Errendis',
    description: 'Restara : logiciel de gestion pour restaurants et cafés au Maroc. Caisse tactile, plan de salle, menu QR, écran cuisine KDS, fiches techniques et gestion des stocks.',
    url: '/secteurs/restauration',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Secteurs', item: `${SITE_URL}/secteurs` },
    { '@type': 'ListItem', position: 3, name: 'Logiciel de gestion pour restaurants et cafés au Maroc', item: `${SITE_URL}/secteurs/restauration` },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Restara fonctionne-t-il pour une chaîne de restaurants au Maroc ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Restara prend en charge la gestion multi-établissements avec un tableau de bord central qui consolide les performances de tous vos restaurants. Chaque établissement garde sa propre configuration.' },
    },
    {
      '@type': 'Question',
      name: 'Restara propose-t-il un menu digital QR ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Restara inclut un menu digital accessible par QR code, modifiable en temps réel depuis le back-office. Idéal pour les restaurants qui accueillent une clientèle touristique internationale.' },
    },
    {
      '@type': 'Question',
      name: 'Restara calcule-t-il le coût matières par plat ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Restara intègre des fiches techniques qui calculent automatiquement le coût de revient et la marge brute de chaque plat. Quand un prix fournisseur change, les marges sont recalculées automatiquement.' },
    }
  ],
};

const RELATED_SLUGS = ['restara'];

export default function SecteurRestaurationPage() {
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
            Logiciel de gestion pour restaurants et cafés au Maroc
          </nav>
          <span className="section-eyebrow">Secteur · Restauration</span>
          <h1>Logiciel de gestion pour restaurants et cafés au Maroc</h1>
          <p>La restauration marocaine connaît une transformation profonde. L'émergence de chaînes locales structurées, la montée en gamme des établissements indépendants et les attentes croissantes d'une clientèle habituée aux standards internationaux créent une pression forte sur les restaurateurs. Dans ce contexte, un logiciel de gestion n'est plus un luxe — c'est un outil de compétitivité.</p>
        </div>
      </section>


      {/* RESTARA */}
      <section className="section" id="restara">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Cafés, restaurants & restauration collective</span>
            <h2>Restara — Logiciel de gestion cafés, restaurants & restauration collective</h2>
          </div>
          <div className="sectors-grid">
            <div className="sector-item" style={{ gridColumn: '1 / -1' }}>
              <p>Un restaurant rentable est un restaurant qui connaît ses coûts. Beaucoup de restaurateurs marocains connaissent leur chiffre d'affaires mais ignorent leur coût matières réel par plat — ce qui les empêche d'identifier les plats qui érodent leur marge et d'ajuster leurs prix en conséquence.</p>
              <p>Restara connecte la salle, la cuisine et la caisse dans un système unique : caisse tactile multi-tables avec prise de commande sur tablette, plan de salle interactif avec suivi du statut de chaque table, menu digital accessible par QR code et modifiable en temps réel, écran cuisine KDS qui remplace les bons papier, fiches techniques avec calcul automatique du coût de revient par plat, gestion des stocks avec soustraction automatique à chaque vente, alertes de seuil avant les ruptures, fidélité clients et reporting journalier complet.</p>
              <p>Le KDS (Kitchen Display System) est souvent la fonctionnalité qui a le plus d'impact immédiat sur la qualité de service : en éliminant les bons papier et la communication orale entre salle et cuisine, il réduit les erreurs de commandes et améliore les temps de service.</p>
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <Link href="/produits/restara" className="btn btn--primary">
              Découvrir Restara →
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
            <h2>Vos questions sur les logiciels Errendis pour restauration</h2>
          </div>
          <div className="faq-list" style={{ maxWidth: 820 }}>
            <details className="faq-item">
              <summary>Restara fonctionne-t-il pour une chaîne de restaurants au Maroc ?</summary>
              <p>Oui, Restara prend en charge la gestion multi-établissements avec un tableau de bord central qui consolide les performances de tous vos restaurants. Chaque établissement garde sa propre configuration.</p>
            </details>
            <details className="faq-item">
              <summary>Restara propose-t-il un menu digital QR ?</summary>
              <p>Oui, Restara inclut un menu digital accessible par QR code, modifiable en temps réel depuis le back-office. Idéal pour les restaurants qui accueillent une clientèle touristique internationale.</p>
            </details>
            <details className="faq-item">
              <summary>Restara calcule-t-il le coût matières par plat ?</summary>
              <p>Oui, Restara intègre des fiches techniques qui calculent automatiquement le coût de revient et la marge brute de chaque plat. Quand un prix fournisseur change, les marges sont recalculées automatiquement.</p>
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
