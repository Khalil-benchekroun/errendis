import Link from 'next/link';
import { products } from '@/lib/products';
import { ProductIcon } from '@/components/logos';

const SITE_URL = 'https://errendis.com';

export const metadata = {
  title: 'À propos — Éditeur de logiciels métiers au Maroc',
  description:
    'Errendis est un éditeur marocain de logiciels métiers fondé par Khalil Benchekroun. Notre conviction : chaque secteur mérite un logiciel de gestion conçu pour lui, pas un outil générique à adapter.',
  alternates: { canonical: '/a-propos' },
  openGraph: {
    title: 'À propos d’Errendis — Éditeur de logiciels métiers au Maroc',
    description:
      'Découvrez l’histoire, la méthode et les engagements d’Errendis, éditeur marocain de logiciels de gestion sur mesure par métier.',
    url: '/a-propos',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'À propos d’Errendis',
  url: `${SITE_URL}/a-propos`,
  mainEntity: {
    '@type': 'Organization',
    name: 'Errendis',
    url: SITE_URL,
    founder: {
      '@type': 'Person',
      name: 'Khalil Benchekroun',
      jobTitle: 'Fondateur',
    },
    description:
      'Éditeur marocain de logiciels de gestion métiers (vertical SaaS) : santé, location automobile, transit et distribution médicale.',
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <h1>Chaque métier mérite un logiciel conçu pour lui.</h1>
          <p>
            Errendis est un éditeur marocain de logiciels de gestion sur
            mesure — un produit par secteur, pensé pour son métier plutôt
            qu’adapté après coup.
          </p>
        </div>
      </section>

      {/* ── LE CONSTAT ───────────────────────────────────── */}
      <section className="about-section">
        <div className="container">
          <div className="about-lead">
            <p>
              Un laboratoire d’analyses médicales, un centre
              d’hémodialyse, une agence de location de voitures et un
              transitaire n’ont presque rien en commun — sauf une chose :
              tous font tourner aujourd’hui une activité exigeante avec
              des registres papier, des fichiers Excel fragiles et des
              groupes WhatsApp qui tiennent lieu de système de suivi. Les
              logiciels génériques leur demandent de s’adapter à l’outil.{' '}
              <strong>Errendis fait l’inverse.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ── NOTRE APPROCHE ───────────────────────────────── */}
      <section className="about-section about-section--alt">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Notre approche</span>
            <h2>Un logiciel par métier, pas un ERP à tout faire</h2>
          </div>
          <div className="about-lead">
            <p>
              Chaque produit Errendis est conçu pour un seul secteur, avec
              son vocabulaire, ses documents officiels, ses organismes de
              prise en charge et ses habitudes réelles de travail — la
              nomenclature AMO/CNOPS/CNSS pour la santé, l’allocation FEFO
              pour la distribution médicale, le FCL/LCL pour le transit
              maritime. C’est ce qui rend nos outils immédiatement
              familiers pour vos équipes, et immédiatement utiles dès la
              première semaine d’utilisation.
            </p>
          </div>
        </div>
      </section>

      {/* ── MOT DU FONDATEUR ─────────────────────────────── */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div>
              <span className="section-eyebrow">Le mot du fondateur</span>
              <h2 style={{ marginTop: 10, marginBottom: 20, fontSize: '1.6rem' }}>
                Une conviction née sur le terrain
              </h2>
              <p style={{ color: 'var(--slate)', fontSize: '1rem', lineHeight: 1.7 }}>
                Errendis est fondé par <strong>Khalil Benchekroun</strong> :
                plus de douze ans d’expérience en marketing digital et en
                gestion de projet, également enseignant en analyse de
                données et en gestion. Cette double culture — le terrain
                des entreprises et la rigueur pédagogique — se retrouve
                dans chaque produit Errendis : simple à prendre en main,
                mais bâti sur une compréhension fine du métier qu’il sert.
              </p>
            </div>

            <div className="founder-quote">
              <p>
                « J’ai passé plus de dix ans à construire des stratégies
                marketing et à piloter des projets pour des entreprises de
                secteurs très différents — santé, distribution, transport,
                mode. Ce que j’ai observé partout, c’est le même écart :
                des équipes compétentes, freinées par des outils qui ne
                parlent pas leur langage. Errendis est né de cette
                conviction simple : un logiciel doit s’adapter au métier,
                jamais l’inverse. Chaque produit que nous construisons
                commence par la même question — comment cette activité
                fonctionne-t-elle vraiment, au quotidien ? »
              </p>
              <div className="founder-signature">
                <strong>Khalil Benchekroun</strong>
                <span>Fondateur d’Errendis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NOTRE HISTOIRE ───────────────────────────────── */}
      <section className="about-section about-section--alt">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Notre histoire</span>
            <h2>Une même histoire, racontée par plusieurs secteurs différents</h2>
          </div>
          <div className="about-lead">
            <p>
              Errendis n’est pas parti d’une idée unique, mais d’une
              répétition. En accompagnant des entreprises de secteurs très
              différents — un centre de soins, un distributeur, une
              agence, un transitaire — la même scène revenait : une équipe
              compétente, un métier exigeant, et des outils inadaptés. Un
              tableur qui craque, un cahier qui se perd, un groupe
              WhatsApp qui remplace un vrai système de suivi. Chaque fois,
              la solution générique du marché ratait quelque chose
              d’essentiel au métier.
            </p>
            <p style={{ marginTop: 18 }}>
              De ce constat répété est née une conviction, puis une
              méthode : construire, secteur par secteur, le logiciel que
              chaque métier aurait dû avoir depuis le début. Dialya,
              Medira, Logistara, Labya, Rentara, et les prochains à
              venir — chaque produit Errendis raconte cette même histoire,
              une fois de plus, pour un métier différent.
            </p>
          </div>
        </div>
      </section>

      {/* ── NOTRE MÉTHODE ────────────────────────────────── */}
      <section className="about-section">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Notre méthode</span>
            <h2>De la démonstration à la mise en service, sans mauvaise surprise</h2>
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
                Reprise de vos données existantes et formation de vos
                équipes, sur site ou à distance.
              </p>
            </div>
            <div className="method-step">
              <h3>Accompagnement</h3>
              <p>
                Support continu et évolutions régulières : votre logiciel
                s’améliore chaque mois.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── NOS ENGAGEMENTS ──────────────────────────────── */}
      <section className="about-section about-section--alt">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Nos engagements</span>
            <h2>Ce qui ne change jamais, quel que soit le produit</h2>
          </div>

          <div className="engagement-grid">
            <div className="engagement-card">
              <span className="num">01</span>
              <h3>Spécialisation métier réelle</h3>
              <p>
                Chaque produit est construit avec des professionnels du
                secteur qu’il sert, pas depuis un cahier des charges
                générique.
              </p>
            </div>
            <div className="engagement-card">
              <span className="num">02</span>
              <h3>Conformité marocaine native</h3>
              <p>
                AMO, CNOPS, CNSS, marchés publics : la conformité locale
                est intégrée dès la conception, pas ajoutée après coup.
              </p>
            </div>
            <div className="engagement-card">
              <span className="num">03</span>
              <h3>Support basé au Maroc</h3>
              <p>
                Une équipe joignable par WhatsApp et téléphone, qui répond
                en français, en darija et en anglais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── RAPPEL PRODUITS ──────────────────────────────── */}
      <section className="about-section">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Nos produits</span>
            <h2>Une gamme qui grandit, secteur par secteur</h2>
          </div>

          <div className="about-products-grid">
            {products.map((p) => (
              <Link key={p.slug} href={`/produits/${p.slug}`} className="about-product-chip">
                <ProductIcon slug={p.slug} size={32} />
                <div>
                  <strong>{p.name}</strong>
                  <span>{p.sector}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <h2>Envie d’en discuter directement ?</h2>
            <p>
              Parlons de votre activité et voyons si un produit Errendis
              peut déjà vous aider — ou si le prochain devrait être conçu
              pour vous.
            </p>
            <Link href="/contact" className="btn btn--primary">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}