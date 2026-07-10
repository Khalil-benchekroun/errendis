import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/products';
import { ProductIcon } from '@/components/logos';
import Reveal from '@/components/Reveal';

const SITE_URL = 'https://errendis.com';

export const metadata = {
  title: 'À propos — Éditeur de logiciels métiers au Maroc',
  description:
    "Errendis est un éditeur marocain de logiciels métiers fondé par Khalil Benchekroun. Notre conviction : chaque secteur mérite un logiciel de gestion conçu pour lui, pas un outil générique à adapter.",
  alternates: { canonical: '/a-propos' },
  openGraph: {
    title: "À propos d'Errendis — Éditeur de logiciels métiers au Maroc",
    description:
      "Découvrez l'histoire, la méthode et les engagements d'Errendis, éditeur marocain de logiciels de gestion sur mesure par métier.",
    url: '/a-propos',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: "À propos d'Errendis",
  url: `${SITE_URL}/a-propos`,
  mainEntity: {
    '@type': 'Organization',
    name: 'Errendis',
    url: SITE_URL,
    founder: {
      '@type': 'Person',
      name: 'Khalil Benchekroun',
      jobTitle: 'Fondateur & CTO',
      image: `${SITE_URL}/khalil-profil.png`,
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

      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <h1>Chaque métier mérite un logiciel conçu pour lui.</h1>
          <p>
            Errendis est un éditeur marocain de logiciels de gestion sur
            mesure — un produit par secteur, pensé pour son métier plutôt
            qu&apos;adapté après coup.
          </p>
        </div>
      </section>

      {/* LE CONSTAT */}
      <section className="about-section">
        <div className="container">
          <div className="about-lead">
            <p>
              Un laboratoire d&apos;analyses médicales, un centre
              d&apos;hémodialyse, une agence de location de voitures et un
              transitaire n&apos;ont presque rien en commun — sauf une chose :
              tous font tourner aujourd&apos;hui une activité exigeante avec
              des registres papier, des fichiers Excel fragiles et des
              groupes WhatsApp qui tiennent lieu de système de suivi. Les
              logiciels génériques leur demandent de s&apos;adapter à l&apos;outil.{' '}
              <strong>Errendis fait l&apos;inverse.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* NOTRE APPROCHE */}
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
              nomenclature AMO/CNOPS/CNSS pour la santé, l&apos;allocation FEFO
              pour la distribution médicale, le FCL/LCL pour le transit
              maritime. C&apos;est ce qui rend nos outils immédiatement
              familiers pour vos équipes, et immédiatement utiles dès la
              première semaine d&apos;utilisation.
            </p>
          </div>
        </div>
      </section>

      {/* MOT DU FONDATEUR + PHOTO */}
      <section className="about-section">
        <div className="container">
          <div className="founder-block">

            {/* Photo Khalil */}
            <div className="founder-photo">
              <Image
                src="/khalil-profil.png"
                alt="Khalil Benchekroun — Fondateur et CTO d'Errendis"
                width={280}
                height={280}
                className="founder-img"
                priority
              />
            </div>

            {/* Texte */}
            <div style={{ flex: 1 }}>
              <div>
                <span className="section-eyebrow">Le mot du fondateur</span>
                <h2 style={{ marginTop: 10, marginBottom: 20, fontSize: '1.6rem' }}>
                  Une conviction née sur le terrain
                </h2>
                <p style={{ color: 'var(--slate)', fontSize: '1rem', lineHeight: 1.7, marginBottom: 24 }}>
                  Errendis est fondé par <strong>Khalil Benchekroun</strong> :
                  plus de douze ans d&apos;expérience en marketing digital et en
                  gestion de projet, également enseignant en analyse de
                  données et en gestion. Cette double culture — le terrain
                  des entreprises et la rigueur pédagogique — se retrouve
                  dans chaque produit Errendis : simple à prendre en main,
                  mais bâti sur une compréhension fine du métier qu&apos;il sert.
                </p>
              </div>

              <div className="founder-quote">
                <p>
                  « J&apos;ai passé plus de dix ans à construire des stratégies
                  marketing et à piloter des projets pour des entreprises de
                  secteurs très différents — santé, distribution, transport,
                  mode. Ce que j&apos;ai observé partout, c&apos;est le même écart :
                  des équipes compétentes, freinées par des outils qui ne
                  parlent pas leur langage. Errendis est né de cette
                  conviction simple : un logiciel doit s&apos;adapter au métier,
                  jamais l&apos;inverse. »
                </p>
                <div className="founder-signature">
                  <strong>Khalil Benchekroun</strong>
                  <span>Fondateur d&apos;Errendis</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NOTRE HISTOIRE */}
      <section className="about-section about-section--alt">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Notre histoire</span>
            <h2>Une même histoire, racontée par plusieurs secteurs différents</h2>
          </div>

          <div className="history-timeline">
            <Reveal className="history-step">
              <span className="history-dot" />
              <div className="history-content">
                <span className="history-year">Le constat</span>
                <p>
                  Errendis n&apos;est pas parti d&apos;une idée unique, mais d&apos;une
                  répétition. En accompagnant des entreprises de secteurs
                  très différents — un centre de soins, un distributeur,
                  une agence, un transitaire — la même scène revenait :
                  une équipe compétente, un métier exigeant, et des
                  outils inadaptés.
                </p>
              </div>
            </Reveal>

            <Reveal className="history-step" delay={100}>
              <span className="history-dot" />
              <div className="history-content">
                <span className="history-year">Le symptôme</span>
                <p>
                  Un tableur qui craque, un cahier qui se perd, un groupe
                  WhatsApp qui remplace un vrai système de suivi. Chaque
                  fois, la solution générique du marché ratait quelque
                  chose d&apos;essentiel au métier.
                </p>
              </div>
            </Reveal>

            <Reveal className="history-step" delay={200}>
              <span className="history-dot" />
              <div className="history-content">
                <span className="history-year">La conviction</span>
                <p>
                  De ce constat répété est née une conviction, puis une
                  méthode : construire, secteur par secteur, le logiciel
                  que chaque métier aurait dû avoir depuis le début.
                </p>
              </div>
            </Reveal>

            <Reveal className="history-step" delay={300}>
              <span className="history-dot history-dot--active" />
              <div className="history-content">
                <span className="history-year">La gamme aujourd&apos;hui</span>
                <p>
                  Dialya, Medira, Logistara, Labya, Rentara, et les
                  prochains à venir — chaque produit Errendis raconte
                  cette même histoire, une fois de plus, pour un métier
                  différent.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* NOTRE MÉTHODE */}
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
                s&apos;améliore chaque mois.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NOS ENGAGEMENTS */}
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
                secteur qu&apos;il sert, pas depuis un cahier des charges
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

      {/* RAPPEL PRODUITS */}
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

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <h2>Envie d&apos;en discuter directement ?</h2>
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