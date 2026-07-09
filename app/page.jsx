import Link from 'next/link';
import { products } from '@/lib/products';
import ProductMockup from '@/components/ProductMockup';
import { ProductIcon } from '@/components/logos';
import Reveal from '@/components/Reveal';
import TiltCard from '@/components/TiltCard';
import CursorGlow from '@/components/CursorGlow';
import MaskTitle from '@/components/MaskTitle';
import Hero3DLogo from '@/components/Hero3DLogo';
import ClientsCarousel from '@/components/ClientsCarousel';

// ── MÉTADONNÉES PAGE ACCUEIL ─────────────────────────────────────────────────
// Title : 60 car. — mot-clé principal en tête (corrigé depuis 75 car.)
// Description : 158 car. — 9 produits + Maroc explicite (corrigé depuis 201 car.)
export const metadata = {
  title: 'Logiciels métiers SaaS au Maroc — Errendis',
  description:
    'Errendis : logiciels de gestion SaaS pour laboratoires, hémodialyse, location voiture, transit, équipements médicaux, délégués pharma, restaurants, BTP et écoles au Maroc.',
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
      {/*
        H1 reécrit pour inclure "logiciel de gestion" + "Maroc"
        (mots-clés cibles absents de la version précédente)
      */}
      <section className="hero">
        <CursorGlow />
        <div className="container hero-grid">
          <div className="hero-inner">
            <Hero3DLogo size={100} />
            <span className="hero-eyebrow">Éditeur de logiciels métiers SaaS · Maroc</span>
            <h1>
              Le logiciel de gestion <em>spécialisé</em> pour votre métier au Maroc.
            </h1>
            <p>
              Chaque secteur a ses règles, ses documents, ses urgences. Errendis
              conçoit des logiciels de gestion SaaS spécialisés — un par métier —
              pour remplacer les registres papier, les fichiers Excel et les
              groupes WhatsApp qui font tourner votre entreprise aujourd&apos;hui.
              Labya pour les laboratoires d&apos;analyses, Dialya pour l&apos;hémodialyse,
              Rentara pour la location de voitures, Logistara pour le transit,
              Medira pour la distribution médicale, et quatre autres verticaux.
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

      {/* ── CLIENTS ──────────────────────────────────────── */}
      <ClientsCarousel />

      {/* ── PRODUITS ─────────────────────────────────────── */}
      <section className="section" id="produits">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Nos 9 logiciels métiers</span>
            <h2><MaskTitle>Un logiciel de gestion par secteur. Pas un outil générique à adapter.</MaskTitle></h2>
            <p>
              Chaque produit Errendis est construit autour des réalités d&apos;un
              seul secteur : son vocabulaire, ses documents officiels, ses
              organismes réglementaires marocains (AMO, CNOPS, CNSS, Massar…),
              ses habitudes de travail.
            </p>
          </div>

          <div className="products-grid">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60}>
                <TiltCard>
                  <Link
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
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTEURS COUVERTS ────────────────────────────── */}
      {/*
        Section nouvelle — enrichit le thin content home (+~300 mots)
        et introduit les 9 mots-clés verticaux dans le corps de page
      */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Secteurs couverts</span>
            <h2><MaskTitle>9 verticaux métiers, 9 logiciels conçus pour le Maroc.</MaskTitle></h2>
            <p>
              Errendis couvre aujourd&apos;hui neuf secteurs d&apos;activité marocains avec
              un logiciel SaaS dédié à chacun.
            </p>
          </div>

          <Reveal>
            <div className="sectors-grid">
              <div className="sector-item">
                <h3>Laboratoires d&apos;analyses médicales</h3>
                <p>
                  <strong>Labya</strong> gère la réception des patients, la connexion
                  aux automates (Cobas, Sysmex, Architect), la validation biologique,
                  la facturation AMO/CNOPS/CNSS et le portail médecin prescripteur.
                  Conçu pour être conforme ISO 15189 et GBEA dès la mise en service.
                </p>
              </div>
              <div className="sector-item">
                <h3>Centres d&apos;hémodialyse</h3>
                <p>
                  <strong>Dialya</strong> couvre le dossier patient dialysé, le
                  planning des postes et générateurs, le suivi de séance en direct,
                  l&apos;intégration biologie et la facturation organismes.
                  Le premier logiciel de gestion hémodialyse pensé pour les centres
                  marocains.
                </p>
              </div>
              <div className="sector-item">
                <h3>Distribution d&apos;équipements médicaux</h3>
                <p>
                  <strong>Medira</strong> couvre le catalogue produits avec gestion
                  des lots et numéros de série, les commandes et devis, la gestion
                  de stock FEFO, les consignations, le SAV parc installé et la
                  facturation multi-organisme.
                </p>
              </div>
              <div className="sector-item">
                <h3>Location de voitures</h3>
                <p>
                  <strong>Rentara</strong> gère la flotte en temps réel, les
                  contrats de location et états des lieux, la caisse, le suivi GPS,
                  l&apos;entretien avec alertes kilométriques et le portail conducteur
                  mobile. Adapté aux agences locales et aux enseignes multi-agences
                  au Maroc.
                </p>
              </div>
              <div className="sector-item">
                <h3>Transit et freight forwarding</h3>
                <p>
                  <strong>Logistara</strong> couvre la gestion des dossiers
                  douaniers, le suivi d&apos;expéditions, la facturation prestataires
                  et clients, les délais et alertes documentaires. Conçu pour les
                  transitaires et commissionnaires en douane marocains.
                </p>
              </div>
              <div className="sector-item">
                <h3>Délégués médicaux et force de vente pharma</h3>
                <p>
                  <strong>Medikara</strong> digitalise les tournées de visite
                  médicale : CRM médecins, comptes-rendus de visite, gestion des
                  échantillons et gadgets, objectifs et incentives, reporting
                  terrain. Aucun concurrent francophone sérieux sur ce créneau
                  au Maroc.
                </p>
              </div>
              <div className="sector-item">
                <h3>Restaurants et cafés</h3>
                <p>
                  <strong>Restara</strong> propose caisse et prise de commande,
                  plan de salle, menu digital QR, écran cuisine KDS, gestion des
                  stocks et fiches techniques, fidélité clients et reporting.
                  Conçu pour les restaurateurs marocains indépendants et les enseignes.
                </p>
              </div>
              <div className="sector-item">
                <h3>BTP et promotion immobilière</h3>
                <p>
                  <strong>Batira</strong> couvre le suivi de chantier, les retenues
                  de garantie, la gestion des sous-traitants, la TVA multi-taux
                  et les déclarations CNSS intégrées. Pensé pour les entreprises
                  de construction et promoteurs immobiliers marocains.
                </p>
              </div>
              <div className="sector-item">
                <h3>Écoles privées et crèches</h3>
                <p>
                  <strong>Skolara</strong> gère les inscriptions, les emplois du
                  temps, les notes et évaluations, les paiements de scolarité,
                  les absences et la communication parents. Complète ce que
                  Massar ne couvre pas pour les établissements privés marocains.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── POURQUOI ─────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Pourquoi Errendis</span>
            <h2><MaskTitle>Pensé pour les entreprises marocaines. Construit aux standards internationaux.</MaskTitle></h2>
          </div>

          <Reveal>
            <div className="why-grid">
              <div className="why-item">
                <h3>
                  <span className="why-check">✓</span>Spécialisation verticale
                </h3>
                <p>
                  Nous ne vendons pas un ERP généraliste. Chaque logiciel de gestion
                  Errendis parle la langue de votre métier dès le premier écran —
                  avec vos documents, vos nomenclatures et vos flux réels.
                </p>
              </div>
              <div className="why-item">
                <h3>
                  <span className="why-check">✓</span>Conforme aux organismes locaux
                </h3>
                <p>
                  AMO, CNOPS, CNSS, Massar, documents réglementaires marocains :
                  la conformité est intégrée dans chaque module, pas ajoutée après coup.
                </p>
              </div>
              <div className="why-item">
                <h3>
                  <span className="why-check">✓</span>SaaS cloud, accessible partout
                </h3>
                <p>
                  Vos données dans le cloud, sécurisées et sauvegardées automatiquement.
                  Travaillez depuis le bureau, la maison ou le téléphone sans
                  installation ni serveur local à maintenir.
                </p>
              </div>
              <div className="why-item">
                <h3>
                  <span className="why-check">✓</span>Support qui répond
                </h3>
                <p>
                  Une équipe au Maroc, joignable par WhatsApp et téléphone, qui
                  connaît votre logiciel et votre métier. Pas un ticket numéro
                  #28741 sans réponse.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CHIFFRES CLÉS ────────────────────────────────── */}
      {/*
        Section nouvelle — crédibilité + mots-clés longue traîne
      */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Errendis en chiffres</span>
            <h2><MaskTitle>Une suite SaaS construite pour la réalité des entreprises marocaines.</MaskTitle></h2>
          </div>
          <Reveal>
            <div className="stats-band-home">
              <div className="stat-item">
                <span className="stat-value">9</span>
                <span className="stat-label">logiciels métiers SaaS</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">100+</span>
                <span className="stat-label">modules fonctionnels</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">100%</span>
                <span className="stat-label">conçu au Maroc</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">AMO</span>
                <span className="stat-label">CNOPS · CNSS · Massar intégrés</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── MÉTHODE ──────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Notre méthode</span>
            <h2><MaskTitle>De la démonstration à la mise en service, sans mauvaise surprise.</MaskTitle></h2>
          </div>

          <div className="method">
            <div className="method-step">
              <h3>Démonstration</h3>
              <p>
                Vous voyez le logiciel fonctionner sur des cas concrets de
                votre métier, pas sur des slides. La démo est gratuite et
                sans engagement.
              </p>
            </div>
            <div className="method-step">
              <h3>Adaptation</h3>
              <p>
                Nous configurons le logiciel à votre organisation : vos
                documents, vos tarifs, vos utilisateurs et vos organismes
                de prise en charge.
              </p>
            </div>
            <div className="method-step">
              <h3>Mise en service</h3>
              <p>
                Reprise de vos données existantes et formation de vos équipes,
                sur site ou à distance. Nous ne disparaissons pas après
                la livraison.
              </p>
            </div>
            <div className="method-step">
              <h3>Accompagnement</h3>
              <p>
                Support continu et évolutions régulières : votre logiciel
                de gestion s&apos;améliore chaque mois, avec vous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      {/* inline style paddingTop:0 remplacé par classe utilitaire */}
      <section className="section section--no-top">
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

      {/* ── COORDONNÉES ──────────────────────────────────── */}
      {/* inline style paddingTop:0 remplacé par classe utilitaire */}
      <section className="section section--no-top">
        <div className="container">
          <div className="contact-band">
            <div>
              <span className="section-eyebrow">Nous contacter</span>
              <h2>Une question ? Parlons-en directement.</h2>
            </div>
            <div className="contact-band-grid">
              <a href="tel:+212684637854" className="contact-band-item">
                <span className="lbl">Téléphone</span>
                <span className="val">+212 684 637 854</span>
              </a>
              <a
                href="https://wa.me/212617489723"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-band-item"
              >
                <span className="lbl">WhatsApp</span>
                <span className="val">+212 617 489 723</span>
                <span className="val">+33 7 69 76 01 74</span>
              </a>
              <a href="mailto:contact@errendis.com" className="contact-band-item">
                <span className="lbl">Email</span>
                <span className="val">contact@errendis.com</span>
              </a>
              <a href="https://www.errendis.com" className="contact-band-item">
                <span className="lbl">Site internet</span>
                <span className="val">www.errendis.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}