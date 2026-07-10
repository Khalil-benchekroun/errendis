import Link from 'next/link';
import { products } from '@/lib/products';
import { ProductIcon } from '@/components/logos';

const SITE_URL = 'https://errendis.com';

export const metadata = {
  title: 'Logiciel gestion transit logistique Maroc — Logistara par Errendis',
  description: 'Logistara : logiciel de gestion pour transitaires et commissionnaires en douane au Maroc. Dossiers douaniers, suivi expéditions, alertes délais, facturation. Tanger Med, Casablanca.',
  alternates: { canonical: '/secteurs/logistique' },
  openGraph: {
    title: 'Logiciel gestion transit logistique Maroc — Logistara par Errendis',
    description: 'Logistara : logiciel de gestion pour transitaires et commissionnaires en douane au Maroc. Dossiers douaniers, suivi expéditions, alertes délais, facturation. Tanger Med, Casablanca.',
    url: '/secteurs/logistique',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Secteurs', item: `${SITE_URL}/secteurs` },
    { '@type': 'ListItem', position: 3, name: 'Logiciel de gestion pour le transit et la logistique au Maroc', item: `${SITE_URL}/secteurs/logistique` },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Logistara couvre-t-il les formalités douanières marocaines ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Logistara est conçu pour les transitaires et commissionnaires en douane marocains. Il gère les dossiers d\\u2019importation et d\\u2019exportation avec tous les documents requis par l\\u2019ADII, les délais, les alertes et le suivi des expéditions de bout en bout.' },
    },
    {
      '@type': 'Question',
      name: 'Logistara fonctionne-t-il pour les opérations via Tanger Med ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Logistara est adapté aux opérations via tous les ports marocains, dont Tanger Med. Il gère les spécificités documentaires et les délais de chaque port.' },
    },
    {
      '@type': 'Question',
      name: 'Logistara gère-t-il les surestaries ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Logistara intègre un système d\\u2019alertes automatiques avant les échéances de free time pour chaque conteneur, permettant d\\u2019anticiper et d\\u2019éviter les surestaries.' },
    }
  ],
};

const RELATED_SLUGS = ['logistara'];

export default function SecteurLogistiquePage() {
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
            Logiciel de gestion pour le transit et la logistique au Maroc
          </nav>
          <span className="section-eyebrow">Secteur · Logistique & Transit</span>
          <h1>Logiciel de gestion pour les transitaires et opérateurs logistiques au Maroc</h1>
          <p>Le Maroc est devenu l'un des hubs logistiques les plus importants d'Afrique, avec Tanger Med comme premier port à conteneurs du continent et Casablanca comme nœud commercial central. Cette position stratégique génère une demande croissante en services de transit et de dédouanement. Les transitaires marocains qui veulent en profiter doivent pouvoir traiter plus de dossiers avec les mêmes équipes — ce qui implique des outils numériques adaptés.</p>
        </div>
      </section>


      {/* LOGISTARA */}
      <section className="section" id="logistara">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Transitaires & freight forwarding</span>
            <h2>Logistara — Logiciel de gestion transitaires & freight forwarding</h2>
          </div>
          <div className="sectors-grid">
            <div className="sector-item" style={{ gridColumn: '1 / -1' }}>
              <p>Les transitaires et commissionnaires en douane marocains gèrent des dossiers complexes : multiples intervenants (armateurs, transporteurs terrestres, douane, entrepôts), délais documentaires serrés, risques de surestaries et exigences de traçabilité croissantes. Un dossier bloqué en attente d'un document non relancé peut coûter plusieurs centaines de dirhams par jour en frais de stationnement.</p>
              <p>Logistara centralise la gestion des dossiers de transit de bout en bout : création du dossier avec tous les intervenants, suivi des étapes documentaires (booking, connaissement, déclaration douanière, bon à délivrer), alertes automatiques avant les échéances critiques, facturation prestataires et clients avec suivi des marges, et reporting d'activité.</p>
              <p>La fonction d'alertes est la plus valorisée par les utilisateurs : elle élimine le risque qu'un dossier reste bloqué sans que personne ne s'en aperçoive — et les surestaries qui s'accumulent silencieusement pendant ce temps.</p>
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <Link href="/produits/logistara" className="btn btn--primary">
              Découvrir Logistara →
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
            <h2>Vos questions sur les logiciels Errendis pour logistique</h2>
          </div>
          <div className="faq-list" style={{ maxWidth: 820 }}>
            <details className="faq-item">
              <summary>Logistara couvre-t-il les formalités douanières marocaines ?</summary>
              <p>Oui, Logistara est conçu pour les transitaires et commissionnaires en douane marocains. Il gère les dossiers d'importation et d'exportation avec tous les documents requis par l'ADII, les délais, les alertes et le suivi des expéditions de bout en bout.</p>
            </details>
            <details className="faq-item">
              <summary>Logistara fonctionne-t-il pour les opérations via Tanger Med ?</summary>
              <p>Oui, Logistara est adapté aux opérations via tous les ports marocains, dont Tanger Med. Il gère les spécificités documentaires et les délais de chaque port.</p>
            </details>
            <details className="faq-item">
              <summary>Logistara gère-t-il les surestaries ?</summary>
              <p>Oui, Logistara intègre un système d'alertes automatiques avant les échéances de free time pour chaque conteneur, permettant d'anticiper et d'éviter les surestaries.</p>
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
