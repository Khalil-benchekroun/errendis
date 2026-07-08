// ────────────────────────────────────────────────────────────
// Illustrations isométriques par secteur — SVG dessinés à la main
// en projection isométrique (angle 30°), effet "3D propre" léger.
// ────────────────────────────────────────────────────────────

function IsoBase({ children, color }) {
  return (
    <svg viewBox="0 0 200 200" className="iso-illustration" aria-hidden="true">
      <ellipse cx="100" cy="172" rx="70" ry="14" fill={color} opacity="0.08" />
      {children}
    </svg>
  );
}

export function IsoLab() {
  // Labya — paillasse de laboratoire + tubes à essai isométriques
  return (
    <IsoBase color="#06B6D4">
      <g transform="translate(40,60)">
        <polygon points="0,40 60,10 120,40 60,70" fill="#CFFAFE" />
        <polygon points="0,40 0,90 60,120 60,70" fill="#A5F3FC" />
        <polygon points="60,70 60,120 120,90 120,40" fill="#67E8F9" />
      </g>
      <g transform="translate(78,28)">
        <polygon points="10,0 22,0 22,55 16,68 4,68 10,55" fill="#06B6D4" />
        <rect x="10" y="30" width="12" height="10" fill="#0891B2" />
      </g>
      <g transform="translate(100,18)">
        <polygon points="8,0 18,0 18,45 13,56 3,56 8,45" fill="#0891B2" />
        <rect x="8" y="24" width="10" height="8" fill="#0E7490" />
      </g>
    </IsoBase>
  );
}

export function IsoDialysis() {
  // Dialya — lit médicalisé isométrique + moniteur
  return (
    <IsoBase color="#0D9488">
      <g transform="translate(35,70)">
        <polygon points="0,30 65,0 130,30 65,60" fill="#CCFBF1" />
        <polygon points="0,30 0,55 65,85 65,60" fill="#99F6E4" />
        <polygon points="65,60 65,85 130,55 130,30" fill="#5EEAD4" />
      </g>
      <g transform="translate(95,30)">
        <rect x="0" y="0" width="34" height="24" rx="3" fill="#0F766E" />
        <rect x="4" y="4" width="26" height="14" rx="1" fill="#CCFBF1" />
        <polyline points="6,11 11,7 15,14 20,6 26,11" stroke="#0D9488" strokeWidth="1.6" fill="none" />
      </g>
    </IsoBase>
  );
}

export function IsoDistribution() {
  // Medira — caisses d'équipement médical empilées
  return (
    <IsoBase color="#0891B2">
      <g transform="translate(55,55)">
        <polygon points="0,20 40,3 80,20 40,37" fill="#CFFAFE" />
        <polygon points="0,20 0,45 40,62 40,37" fill="#A5F3FC" />
        <polygon points="40,37 40,62 80,45 80,20" fill="#67E8F9" />
      </g>
      <g transform="translate(55,88)">
        <polygon points="0,20 40,3 80,20 40,37" fill="#0891B2" />
        <polygon points="0,20 0,45 40,62 40,37" fill="#0E7490" />
        <polygon points="40,37 40,62 80,45 80,20" fill="#155E75" />
      </g>
      <rect x="90" y="98" width="14" height="14" fill="#fff" opacity="0.8" rx="2" />
    </IsoBase>
  );
}

export function IsoRental() {
  // Rentara — voiture isométrique simplifiée
  return (
    <IsoBase color="#F59E0B">
      <g transform="translate(35,80)">
        <polygon points="0,30 20,10 110,10 130,30 130,55 0,55" fill="#FDE68A" />
        <polygon points="20,10 40,-8 90,-8 110,10" fill="#FCD34D" />
        <polygon points="25,15 45,0 85,0 105,15" fill="#FFFBEB" opacity="0.7" />
        <circle cx="28" cy="58" r="12" fill="#1F2937" />
        <circle cx="102" cy="58" r="12" fill="#1F2937" />
        <circle cx="28" cy="58" r="5" fill="#F59E0B" />
        <circle cx="102" cy="58" r="5" fill="#F59E0B" />
      </g>
    </IsoBase>
  );
}

export function IsoLogistics() {
  // Logistara — conteneurs + navire isométrique
  return (
    <IsoBase color="#1E40AF">
      <g transform="translate(30,90)">
        <polygon points="0,20 140,20 150,45 -10,45" fill="#93C5FD" />
        <polygon points="-10,45 150,45 130,65 10,65" fill="#60A5FA" />
      </g>
      <g transform="translate(55,45)">
        <polygon points="0,10 30,0 60,10 30,20" fill="#1E40AF" />
        <polygon points="0,10 0,30 30,40 30,20" fill="#1E3A8A" />
        <polygon points="30,20 30,40 60,30 60,10" fill="#2563EB" />
      </g>
      <g transform="translate(58,20)">
        <polygon points="0,10 30,0 60,10 30,20" fill="#F59E0B" />
        <polygon points="0,10 0,26 30,36 30,20" fill="#D97706" />
        <polygon points="30,20 30,36 60,26 60,10" fill="#FBBF24" />
      </g>
    </IsoBase>
  );
}
