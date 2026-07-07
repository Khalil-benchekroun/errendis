import Link from 'next/link';

export const metadata = {
  title: 'Pourquoi un logiciel métier plutôt qu’Excel ou un ERP générique ?',
  description:
    'Excel, ERP générique ou logiciel métier spécialisé : comparez les trois approches pour la gestion de votre activité et comprenez pourquoi la spécialisation change tout.',
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
      <section className="page-hero">
        <div className="container">
          <h1>Excel, ERP générique, ou logiciel métier ?</h1>
          <p>
            Trois approches existent pour gérer votre activité. Voici une
            comparaison honnête des trois, sans caricaturer aucune.
          </p>
        </div>
      </section>

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
              d’une activité entière. Un ERP générique peut couvrir
              énormément de besoins, mais demande souvent un budget et un
              délai de mise en œuvre importants pour être adapté à un
              métier spécifique. Un logiciel métier comme ceux
              d’Errendis part du principe inverse : construire d’abord
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
    </>
  );
}
