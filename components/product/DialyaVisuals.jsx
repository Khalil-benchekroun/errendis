// ────────────────────────────────────────────────────────────
// Visuels des 9 modules Dialya — mini-interfaces fidèles à la
// charte réelle du prototype (petrol #0C2B30 / teal #12A5A0,
// IBM Plex Mono pour les valeurs). Un composant par module,
// dans l'ordre exact de lib/products.js → dialya.modules.
// ────────────────────────────────────────────────────────────

function Frame({ children }) {
  return <div className="dvz-frame">{children}</div>;
}

// 01 — Dossier patient complet
function VisualDossier() {
  return (
    <Frame>
      <div className="dvz-patient">
        <div className="dvz-avatar">MI</div>
        <div>
          <div className="dvz-patient-name">M. Idrissi Rachid</div>
          <div className="dvz-patient-sub">62 ans · Groupe O+ · FAV bras gauche</div>
        </div>
      </div>
      <div className="dvz-tags">
        <span className="dvz-tag dvz-tag--hemo">Diabète type 2</span>
        <span className="dvz-tag dvz-tag--amber">HTA</span>
        <span className="dvz-tag dvz-tag--green">VHC négatif</span>
      </div>
      <div className="dvz-mini-row"><span>Séances / semaine</span><b>3</b></div>
      <div className="dvz-mini-row"><span>Poids sec</span><b>68,4 kg</b></div>
      <div className="dvz-mini-row"><span>Dernière séance</span><b>02/07/2026</b></div>
    </Frame>
  );
}

// 02 — Planning des séances
function VisualPlanning() {
  const cells = ['M. Idrissi', 'Mme Cherkaoui', '', 'M. Benjelloun', '', 'Mme Fassi', ''];
  return (
    <Frame>
      <div className="dvz-planning-head">
        <span>Poste</span>
        {['08h', '12h30', '17h'].map((h) => (
          <span key={h}>{h}</span>
        ))}
      </div>
      {[1, 2, 3].map((poste, r) => (
        <div className="dvz-planning-row" key={poste}>
          <span className="dvz-planning-label">P{poste}</span>
          {[0, 1, 2].map((c) => {
            const val = cells[r * 3 + c] ?? cells[(r + c) % cells.length];
            return (
              <span key={c} className={`dvz-planning-cell${val ? ' dvz-planning-cell--busy' : ''}`}>
                {val || '—'}
              </span>
            );
          })}
        </div>
      ))}
    </Frame>
  );
}

// 03 — Séances en direct
function VisualLive() {
  return (
    <Frame>
      <div className="dvz-live-head">
        <span className="dvz-dot-pulse" /> LIVE — 4 postes en cours
      </div>
      {[
        { p: 'Poste 2', t: 'T+1h45', pa: 'TA 128/76', pu: 'FC 74' },
        { p: 'Poste 5', t: 'T+0h20', pa: 'TA 134/82', pu: 'FC 81' },
      ].map((s) => (
        <div className="dvz-live-row" key={s.p}>
          <span className="dvz-ref">{s.p}</span>
          <span className="dvz-cell">{s.t}</span>
          <span className="dvz-mono-sm">{s.pa}</span>
          <span className="dvz-mono-sm">{s.pu}</span>
        </div>
      ))}
    </Frame>
  );
}

// 04 — Prescriptions & signature électronique
function VisualPrescriptions() {
  return (
    <Frame>
      <div className="dvz-panel-title">Protocole — M. Idrissi</div>
      <div className="dvz-mini-row"><span>Héparine</span><b>2500 UI</b></div>
      <div className="dvz-mini-row"><span>Durée séance</span><b>4h00</b></div>
      <div className="dvz-mini-row"><span>Débit dialysat</span><b>500 mL/min</b></div>
      <div className="dvz-signature">
        <span>✓ Signé électroniquement</span>
        <span className="dvz-mono-sm">Dr. Alaoui — 02/07 07:52</span>
      </div>
    </Frame>
  );
}

// 05 — Biologie & alertes intelligentes
function VisualBiologie() {
  return (
    <Frame>
      <div className="dvz-mini-row"><span>Hémoglobine</span><b>10,2 g/dL</b></div>
      <div className="dvz-mini-row"><span>Potassium</span><b className="dvz-alert-text">6,1 mmol/L</b></div>
      <div className="dvz-mini-row"><span>Urée</span><b>1,42 g/L</b></div>
      <div className="dvz-alert-box">⚠ Kaliémie critique — action requise</div>
    </Frame>
  );
}

// 06 — Parc générateurs
function VisualGenerateurs() {
  return (
    <Frame>
      {[
        { id: 'GEN-04', status: 'Actif', tone: 'ok' },
        { id: 'GEN-07', status: 'Désinfection', tone: 'pending' },
        { id: 'GEN-11', status: 'Maintenance', tone: 'alert' },
      ].map((g) => (
        <div className="dvz-mini-row" key={g.id}>
          <span className="dvz-mono-sm">{g.id}</span>
          <span className={`dvz-chip dvz-chip--${g.tone}`}>{g.status}</span>
        </div>
      ))}
    </Frame>
  );
}

// 07 — Stock & pharmacie
function VisualStock() {
  return (
    <Frame>
      <div className="dvz-mini-row"><span>Dialyseurs F8</span><b>142 u.</b></div>
      <div className="dvz-mini-row"><span>Héparine 5mL</span><b className="dvz-alert-text">18 u.</b></div>
      <div className="dvz-mini-row"><span>Sérum physiologique</span><b>320 u.</b></div>
      <div className="dvz-alert-box">Lot HEP-2216 — péremption 30j</div>
    </Frame>
  );
}

// 08 — Facturation AMO & organismes
function VisualFacturation() {
  return (
    <Frame>
      <div className="dvz-mini-row"><span>CNOPS</span><b>18 dossiers</b></div>
      <div className="dvz-mini-row"><span>CNSS</span><b>11 dossiers</b></div>
      <div className="dvz-mini-row"><span>AMO Tadamon</span><b>6 dossiers</b></div>
      <div className="dvz-mini-row"><span>Rejets</span><b className="dvz-alert-text">2</b></div>
    </Frame>
  );
}

// 09 — Portail patient
function VisualPortail() {
  return (
    <Frame>
      <div className="dvz-phone">
        <div className="dvz-phone-notch" />
        <div className="dvz-phone-title">Bonjour Rachid</div>
        <div className="dvz-phone-card">Prochaine séance<br /><b>Jeudi 08h00 — Poste 2</b></div>
        <div className="dvz-phone-card">Dernier bilan disponible</div>
      </div>
    </Frame>
  );
}

export const DIALYA_VISUALS = [
  VisualDossier,
  VisualPlanning,
  VisualLive,
  VisualPrescriptions,
  VisualBiologie,
  VisualGenerateurs,
  VisualStock,
  VisualFacturation,
  VisualPortail,
];