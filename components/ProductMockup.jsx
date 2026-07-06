// ────────────────────────────────────────────────────────────
// ProductMockup — fenêtre d'application stylisée par produit.
// Rendu en HTML/CSS pur : net à toutes les tailles, cohérent
// avec la charte, et remplaçable plus tard par de vraies
// captures d'écran.
// ────────────────────────────────────────────────────────────

import { ProductIcon } from './logos';

const MOCKUPS = {
  labya: {
    url: 'labya.errendis.com',
    nav: ['Tableau de bord', 'Patients', 'Analyses', 'Résultats', 'Facturation'],
    kpis: [
      { label: 'Dossiers du jour', value: '47', delta: '+12%' },
      { label: 'À valider', value: '9', delta: null },
      { label: 'CA du mois', value: '184 300 DH', delta: '+8%' },
    ],
    tableTitle: 'Derniers dossiers',
    rows: [
      { c1: 'B-2481', c2: 'Mme El Amrani — NFS, Glycémie', chip: 'Validé', tone: 'ok' },
      { c1: 'B-2480', c2: 'M. Tazi — Bilan lipidique', chip: 'En cours', tone: 'pending' },
      { c1: 'B-2479', c2: 'Mme Bennis — TSH', chip: 'Validé', tone: 'ok' },
      { c1: 'B-2478', c2: 'M. Alaoui — CRP', chip: 'Valeur critique', tone: 'alert' },
    ],
  },

  rentara: {
    url: 'rentara.errendis.com',
    nav: ['Planning', 'Flotte', 'Contrats', 'Clients', 'Caisse'],
    kpis: [
      { label: 'Véhicules loués', value: '18 / 24', delta: null },
      { label: 'Retours aujourd\u2019hui', value: '3', delta: null },
      { label: 'Revenus du mois', value: '96 400 DH', delta: '+15%' },
    ],
    tableTitle: 'Planning de la semaine',
    planning: [
      { name: 'Dacia Logan — 40212-A-6', start: 1, span: 4, tone: 'busy' },
      { name: 'Renault Clio 5 — 38914-B-6', start: 2, span: 5, tone: 'busy' },
      { name: 'Dacia Duster — 41730-A-6', start: 3, span: 4, tone: 'return' },
      { name: 'Hyundai i10 — 39551-B-6', start: 0, span: 0, tone: 'free' },
    ],
  },

  logistara: {
    url: 'logistara.errendis.com',
    nav: ['Dossiers', 'Expéditions', 'Documents', 'Clients', 'Facturation'],
    kpis: [
      { label: 'Dossiers actifs', value: '32', delta: null },
      { label: 'Arrivées cette semaine', value: '7', delta: null },
      { label: 'En douane', value: '4', delta: null },
    ],
    tableTitle: 'Expéditions en cours',
    shipments: [
      { ref: 'EXP-1042', route: 'Casablanca → Marseille', pct: 75, status: 'En transit' },
      { ref: 'EXP-1041', route: 'Shanghai → Casablanca', pct: 40, status: 'Embarqué' },
      { ref: 'EXP-1039', route: 'Tanger Med → Rotterdam', pct: 90, status: 'Arrivée port' },
      { ref: 'EXP-1038', route: 'Istanbul → Casablanca', pct: 100, status: 'Livré' },
    ],
  },

  dialya: {
    url: 'dialya.errendis.com',
    nav: ['Séances', 'Patients', 'Postes', 'Traçabilité', 'Facturation'],
    kpis: [
      { label: 'Séances aujourd\u2019hui', value: '26', delta: null },
      { label: 'Postes occupés', value: '8 / 10', delta: null },
      { label: 'Alertes', value: '2', delta: null },
    ],
    tableTitle: 'Séances du jour',
    rows: [
      { c1: 'Poste 1', c2: '08:00 — M. Idrissi', chip: 'Terminée', tone: 'ok' },
      { c1: 'Poste 2', c2: '08:00 — Mme Cherkaoui', chip: 'En séance', tone: 'pending' },
      { c1: 'Poste 3', c2: '12:30 — M. Benjelloun', chip: 'Planifiée', tone: 'info' },
      { c1: 'Poste 4', c2: '12:30 — Mme Fassi', chip: 'Bilan requis', tone: 'alert' },
    ],
  },

  medira: {
    url: 'medira.errendis.com',
    nav: ['Tableau de bord', 'Catalogue', 'Devis', 'Stock', 'SAV'],
    kpis: [
      { label: 'Devis en cours', value: '14', delta: null },
      { label: 'Commandes du mois', value: '23', delta: '+9%' },
      { label: 'Stock critique', value: '5', delta: null },
    ],
    tableTitle: 'État du stock',
    rows: [
      { c1: 'CONC-O2-5L', c2: 'Concentrateur O2 5L — 12 unités', chip: 'En stock', tone: 'ok' },
      { c1: 'TENS-PRO', c2: 'Tensiomètre professionnel — 3 unités', chip: 'Stock bas', tone: 'alert' },
      { c1: 'LIT-MED-02', c2: 'Lit médicalisé électrique — 7 unités', chip: 'En stock', tone: 'ok' },
      { c1: 'ECG-12P', c2: 'ECG 12 pistes — devis Clinique Atlas', chip: 'Devis envoyé', tone: 'pending' },
    ],
  },
};

const DAYS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

export default function ProductMockup({ slug, name }) {
  const m = MOCKUPS[slug];
  if (!m) return null;

  return (
    <div className="mockup" role="img" aria-label={`Aperçu de l'interface ${name}`}>
      {/* Barre de fenêtre */}
      <div className="mockup-bar">
        <span className="mockup-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="mockup-url">{m.url}</span>
      </div>

      <div className="mockup-body">
        {/* Sidebar */}
        <aside className="mockup-side">
          <div className="mockup-side-logo">
            <ProductIcon slug={slug} size={16} />
            {name}
          </div>
          <ul>
            {m.nav.map((item, i) => (
              <li key={item} className={i === 0 ? 'active' : ''}>
                {item}
              </li>
            ))}
          </ul>
        </aside>

        {/* Zone principale */}
        <div className="mockup-main">
          <div className="mockup-kpis">
            {m.kpis.map((k) => (
              <div className="mockup-kpi" key={k.label}>
                <span className="mockup-kpi-label">{k.label}</span>
                <span className="mockup-kpi-value">
                  {k.value}
                  {k.delta && <em>{k.delta}</em>}
                </span>
              </div>
            ))}
          </div>

          <div className="mockup-panel">
            <div className="mockup-panel-title">{m.tableTitle}</div>

            {/* Variante 1 : lignes + statuts */}
            {m.rows && (
              <ul className="mockup-rows">
                {m.rows.map((r) => (
                  <li key={r.c1}>
                    <span className="mockup-ref">{r.c1}</span>
                    <span className="mockup-cell">{r.c2}</span>
                    <span className={`mockup-chip mockup-chip--${r.tone}`}>{r.chip}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Variante 2 : planning flotte (Rentara) */}
            {m.planning && (
              <div className="mockup-planning">
                <div className="mockup-planning-days">
                  <span />
                  {DAYS.map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
                {m.planning.map((v) => (
                  <div className="mockup-planning-row" key={v.name}>
                    <span className="mockup-cell">{v.name}</span>
                    <div className="mockup-planning-track">
                      {v.span > 0 ? (
                        <span
                          className={`mockup-planning-bar mockup-planning-bar--${v.tone}`}
                          style={{
                            left: `${(v.start / 7) * 100}%`,
                            width: `${(v.span / 7) * 100}%`,
                          }}
                        />
                      ) : (
                        <span className="mockup-planning-free">Disponible</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Variante 3 : expéditions + progression (Logistara) */}
            {m.shipments && (
              <ul className="mockup-rows">
                {m.shipments.map((s) => (
                  <li key={s.ref} className="mockup-ship">
                    <span className="mockup-ref">{s.ref}</span>
                    <span className="mockup-cell">
                      {s.route}
                      <span className="mockup-progress">
                        <span style={{ width: `${s.pct}%` }} />
                      </span>
                    </span>
                    <span
                      className={`mockup-chip mockup-chip--${s.pct === 100 ? 'ok' : 'info'}`}
                    >
                      {s.status}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}