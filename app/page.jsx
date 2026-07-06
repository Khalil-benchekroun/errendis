import Link from 'next/link';
import { products } from '@/lib/products';
import ProductMockup from '@/components/ProductMockup';
import { ProductIcon } from '@/components/logos';

export const metadata = {
  title: 'Errendis — Des logiciels métiers qui mettent de l\u2019ordre dans vos opérations',
  description:
    'Errendis est un éditeur marocain de logiciels de gestion spécialisés : laboratoires d\u2019analyses médicales, agences de location de voitures, transitaires, centres d\u2019hémodialyse et distributeurs médicaux.',
  alternates: { canonical: '/' },
};

function StrataSVG({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="6" y="8" width="52" height="10" rx="1.5" fill="#1D4ED8" />
      <rect x="6" y="22" width="40" height="10" rx="1.5" fill="#2563EB" />
      <rect x="6" y="36" width="46" height="10" rx="1.5" fill="#1E40AF" />
      <rect x="6" y="50" width="52" height="10" rx="1.5" fill="#1E3A8A" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-inner">
            <span className="hero-eyebrow">Éditeur de logiciels métiers · Maroc</span>
            <h1>
              Des logiciels qui mettent de l&apos;<em>ordre</em> dans vos opérations.
            </h1>
            <p>
              Chaque métier a ses règles, ses documents, ses urgences. Errendis
              conçoit des logiciels de gestion spécialisés — un par secteur —
              pour remplacer les registres papier, les fichiers Excel et les
              groupes WhatsApp qui font tourner votre entreprise aujourd&apos;hui.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn--primary">
                Demander une démo
              </Link>
              <a href="#produits" className="btn btn--ghost">
                Découvrir nos logiciels
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <StrataSVG className="hero-visual-strata" />
            <ProductMockup slug="labya" name="Labya" />
          </div>
        </div>
      </section>

      {/* ── PRODUITS ─────────────────────────────────────── */}
      <section className="section" id="produits">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Nos logiciels</span>
            <h2>Un logiciel par métier. Pas un outil générique à adapter.</h2>
            <p>
              Chaque produit Errendis est construit autour des réalités d&apos;un
              seul secteur : son vocabulaire, ses documents officiels, ses
              organismes, ses habitudes de travail.
            </p>
          </div>

          <div className="products-grid">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/produits/${p.slug}`}
                className="product-card"
              >
                <div className="product-icon-wrap">
                  <ProductIcon slug={p.slug} size={40} />
                </div>
                <h3>{p.name}</h3>
                <div className="product-sector">{p.sector}</div>
                <p>{p.tagline}</p>
                <span className="product-more">Découvrir {p.name} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── POURQUOI ─────────────────────────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Pourquoi Errendis</span>
            <h2>Pensé pour les entreprises marocaines. Construit aux standards internationaux.</h2>
          </div>

          <div className="why-grid">
            <div className="why-item">
              <h3>
                <span className="why-check">✓</span>Spécialisation verticale
              </h3>
              <p>
                Nous ne vendons pas un ERP à tout faire. Chaque logiciel parle
                la langue de votre métier dès le premier écran.
              </p>
            </div>
            <div className="why-item">
              <h3>
                <span className="why-check">✓</span>Conforme aux organismes locaux
              </h3>
              <p>
                AMO, CNOPS, CNSS, documents réglementaires marocains : la
                conformité est intégrée, pas ajoutée après coup.
              </p>
            </div>
            <div className="why-item">
              <h3>
                <span className="why-check">✓</span>Accessible partout
              </h3>
              <p>
                Vos données dans le cloud, sécurisées et sauvegardées.
                Travaillez depuis le bureau, la maison ou le téléphone.
              </p>
            </div>
            <div className="why-item">
              <h3>
                <span className="why-check">✓</span>Support qui répond
              </h3>
              <p>
                Une équipe au Maroc, joignable par WhatsApp et téléphone, qui
                connaît votre logiciel et votre métier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MÉTHODE ──────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Notre méthode</span>
            <h2>De la démonstration à la mise en service, sans mauvaise surprise.</h2>
          </div>

          <div className="method">
            <div className="method-step">
              <h3>Démonstration</h3>
              <p>
                Vous voyez le logiciel fonctionner sur des cas concrets de
                votre métier, pas sur des slides.
              </p>
            </div>
            <div className="method-step">
              <h3>Adaptation</h3>
              <p>
                Nous configurons le logiciel à votre organisation : vos
                documents, vos tarifs, vos utilisateurs.
              </p>
            </div>
            <div className="method-step">
              <h3>Mise en service</h3>
              <p>
                Reprise de vos données existantes et formation de vos équipes,
                sur site ou à distance.
              </p>
            </div>
            <div className="method-step">
              <h3>Accompagnement</h3>
              <p>
                Support continu et évolutions régulières : votre logiciel
                s&apos;améliore chaque mois.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <StrataSVG className="cta-strata" />
            <h2>Votre métier mérite mieux qu&apos;un fichier Excel.</h2>
            <p>
              Réservez une démonstration gratuite et voyez ce que votre
              activité donne quand tout est enfin au même endroit.
            </p>
            <Link href="/contact" className="btn btn--primary">
              Réserver ma démo gratuite
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}