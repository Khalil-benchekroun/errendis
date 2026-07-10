import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Pourquoi un logiciel métier plutôt qu'Excel ou un ERP générique ?",
  description:
    "Excel, ERP générique ou logiciel métier spécialisé : comparez les trois approches pour la gestion de votre activité et comprenez pourquoi la spécialisation change tout.",
  alternates: { canonical: '/pourquoi-errendis' },
};

const ROWS = [
  { label: 'Vocabulaire du métier natif', excel: false, erp: 'partiel', errendis: true },
  { label: 'Conformité marocaine intégrée (AMO/CNOPS/CNSS)', excel: false, erp: 'partiel', errendis: true },
  { label: 'Mise en service rapide', excel: true, erp: false, errendis: true },
  { label: 'Traçabilité et historique fiables', excel: false, erp: true, errendis: true },
  { label: 'Coût de personnalisation', excel: 'faible', erp: 'élevé', errendis: 'inclus' },
  { label: 'Accès multi-utilisateurs sécurisé', excel: false, erp: true, errendis: true },
  { label: 'Évolutions adaptées à votre secteur', excel: false, erp: 'lent', errendis: true },
];

function Cell({ value }) {
  if (value === true) return <span className="compare-yes">✓</span>;
  if (value === false) return <span className="compare-no">✕</span>;
  return <span className="compare-partial">{value}</span>;
}

export default function PourquoiErrendisPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <h1>Excel, ERP générique, ou logiciel métier ?</h1>
          <p>
            Trois approches existent pour gérer votre activité. Voici une
            comparaison honnête des trois, sans caricaturer aucune.
          </p>
        </div>
      </section>

      {/* TABLEAU COMPARATIF */}
      <section className="section">
        <div className="container">
          <div className="compare-table-wrap">
            <table className="compare-table compare-table--vs">
              <thead>
                <tr>
                  <th></th>
                  <th>Excel / papier</th>
                  <th>ERP générique</th>
                  <th>Logiciel Errendis</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.label}>
                    <td>{r.label}</td>
                    <td><Cell value={r.excel} /></td>
                    <td><Cell value={r.erp} /></td>
                    <td><Cell value={r.errendis} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="prose" style={{ maxWidth: 760, marginTop: 40 }}>
            <h2 style={{ fontSize: '1.4rem', marginBottom: 14 }}>
              Ce que ce tableau ne dit pas
            </h2>
            <p>
              Excel reste un excellent outil pour du calcul ponctuel — le
              problème apparaît quand il devient le système de gestion
              d&apos;une activité entière. Un ERP générique peut couvrir
              énormément de besoins, mais demande souvent un budget et un
              délai de mise en œuvre importants pour être adapté à un
              métier spécifique. Un logiciel métier comme ceux
              d&apos;Errendis part du principe inverse : construire d&apos;abord
              pour le métier, pas pour être générique.
            </p>
          </div>

          <div className="hero-actions" style={{ marginTop: 32 }}>
            <Link href="/comparer-produits" className="btn btn--primary">
              Voir nos produits
            </Link>
            <Link href="/contact" className="btn btn--ghost">
              Discuter de votre cas
            </Link>
          </div>
        </div>
      </section>

      {/* FONDATEUR */}
      <section className="section section--alt">
        <div className="container">
          <div className="founder-block">
            <div className="founder-photo">
              <Image
                src="/khalil-profil.jpg"
                alt="Khalil Benchekroun — Fondateur et CTO d'Errendis"
                width={280}
                height={280}
                className="founder-img"
                priority
              />
            </div>
            <div className="founder-text">
              <span className="section-eyebrow">Le fondateur</span>
              <h2>Construit par quelqu&apos;un qui connaît votre métier.</h2>
              <p>
                Khalil Benchekroun est expert en marketing digital, professeur
                universitaire à la FSJES Mohammedia et développeur.
                Errendis est né de la conviction qu&apos;au Maroc, les entreprises
                méritent des logiciels conçus pour leurs réalités — pas des
                outils importés mal adaptés ou des fichiers Excel fragiles.
              </p>
              <p>
                Chaque logiciel Errendis est conçu avec des professionnels du
                secteur concerné, testé sur des cas réels marocains, et
                évolué en continu selon les retours des utilisateurs.
              </p>
              <Link href="/contact" className="btn btn--primary" style={{ marginTop: 16, display: 'inline-block' }}>
                Parler à l&apos;équipe
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}