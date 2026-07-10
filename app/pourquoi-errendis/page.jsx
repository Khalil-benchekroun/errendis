import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Pourquoi un logiciel m\u00e9tier plut\u00f4t qu\u2019Excel ou un ERP g\u00e9n\u00e9rique ?',
  description:
    'Excel, ERP g\u00e9n\u00e9rique ou logiciel m\u00e9tier sp\u00e9cialis\u00e9 : comparez les trois approches pour la gestion de votre activit\u00e9 et comprenez pourquoi la sp\u00e9cialisation change tout.',
  alternates: { canonical: '/pourquoi-errendis' },
};

const ROWS = [
  { label: 'Vocabulaire du m\u00e9tier natif', excel: false, erp: 'partiel', errendis: true },
  { label: 'Conformit\u00e9 marocaine int\u00e9gr\u00e9e (AMO/CNOPS/CNSS)', excel: false, erp: 'partiel', errendis: true },
  { label: 'Mise en service rapide', excel: true, erp: false, errendis: true },
  { label: 'Tra\u00e7abilit\u00e9 et historique fiables', excel: false, erp: true, errendis: true },
  { label: 'Co\u00fbt de personnalisation', excel: 'faible', erp: '\u00e9lev\u00e9', errendis: 'inclus' },
  { label: 'Acc\u00e8s multi-utilisateurs s\u00e9curis\u00e9', excel: false, erp: true, errendis: true },
  { label: '\u00c9volutions adapt\u00e9es \u00e0 votre secteur', excel: false, erp: 'lent', errendis: true },
];

function Cell({ value }) {
  if (value === true) return <span className="compare-yes">\u2713</span>;
  if (value === false) return <span className="compare-no">\u2715</span>;
  return <span className="compare-partial">{value}</span>;
}

export default function PourquoiErrendisPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <h1>Excel, ERP g\u00e9n\u00e9rique, ou logiciel m\u00e9tier ?</h1>
          <p>
            Trois approches existent pour g\u00e9rer votre activit\u00e9. Voici une
            comparaison honn\u00eate des trois, sans caricaturer aucune.
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
                  <th>ERP g\u00e9n\u00e9rique</th>
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
              Excel reste un excellent outil pour du calcul ponctuel \u2014 le
              probl\u00e8me appara\u00eet quand il devient le syst\u00e8me de gestion
              d&apos;une activit\u00e9 enti\u00e8re. Un ERP g\u00e9n\u00e9rique peut couvrir
              \u00e9norm\u00e9ment de besoins, mais demande souvent un budget et un
              d\u00e9lai de mise en \u0153uvre importants pour \u00eatre adapt\u00e9 \u00e0 un
              m\u00e9tier sp\u00e9cifique. Un logiciel m\u00e9tier comme ceux
              d&apos;Errendis part du principe inverse : construire d&apos;abord
              pour le m\u00e9tier, pas pour \u00eatre g\u00e9n\u00e9rique.
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
              />
            </div>
            <div className="founder-text">
              <span className="section-eyebrow">Le fondateur</span>
              <h2>Construit par quelqu&apos;un qui conna\u00eet votre m\u00e9tier.</h2>
              <p>
                Khalil Benchekroun est expert en marketing digital, professeur
                universitaire \u00e0 la FSJES Mohammedia et d\u00e9veloppeur.
                Errendis est n\u00e9 de la conviction qu&apos;au Maroc, les entreprises
                m\u00e9ritent des logiciels con\u00e7us pour leurs r\u00e9alit\u00e9s \u2014 pas des
                outils import\u00e9s mal adapt\u00e9s ou des fichiers Excel fragiles.
              </p>
              <p>
                Chaque logiciel Errendis est con\u00e7u avec des professionnels du
                secteur concern\u00e9, test\u00e9 sur des cas r\u00e9els marocains, et
                \u00e9volu\u00e9 en continu selon les retours des utilisateurs.
              </p>
              <Link href="/contact" className="btn btn--primary" style={{ marginTop: 16 }}>
                Parler \u00e0 l&apos;\u00e9quipe
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}