// ────────────────────────────────────────────────────────────
// Illustrations isométriques — pôle Marketing digital
// Même grammaire graphique que components/IsoIllustrations.jsx
// (projection isométrique légère, aplats de couleur, ombre portée).
// ────────────────────────────────────────────────────────────

function IsoBase({ children, color }) {
  return (
    <svg viewBox="0 0 200 200" className="iso-illustration" aria-hidden="true">
      <ellipse cx="100" cy="172" rx="70" ry="14" fill={color} opacity="0.08" />
      {children}
    </svg>
  );
}

export function IsoSocialMedia() {
  // Réseaux sociaux — téléphone isométrique + bulle de like
  return (
    <IsoBase color="#EC4899">
      <g transform="translate(58,40)">
        <polygon points="0,10 42,0 84,10 42,20" fill="#FCE7F3" />
        <polygon points="0,10 0,140 42,150 42,20" fill="#FBCFE8" />
        <polygon points="42,20 42,150 84,140 84,10" fill="#F9A8D4" />
        <rect x="14" y="35" width="56" height="80" rx="4" fill="#fff" opacity="0.85" />
        <circle cx="42" cy="130" r="6" fill="#fff" opacity="0.9" />
      </g>
      <g transform="translate(118,55)">
        <polygon points="0,18 22,6 44,18 22,30" fill="#F472B6" />
        <polygon points="0,18 0,40 22,52 22,30" fill="#EC4899" />
        <polygon points="22,30 22,52 44,40 44,18" fill="#DB2777" />
        <path
          d="M11 15 C 8 11, 2 12, 2 17 C 2 21, 11 27, 11 27 C 11 27, 20 21, 20 17 C 20 12, 14 11, 11 15 Z"
          fill="#fff"
        />
      </g>
      <circle cx="45" cy="35" r="5" fill="#F9A8D4" opacity="0.9" />
      <circle cx="150" cy="100" r="4" fill="#F472B6" opacity="0.7" />
    </IsoBase>
  );
}

export function IsoAdvertising() {
  // Publicité — mégaphone isométrique + ondes de diffusion
  return (
    <IsoBase color="#F97316">
      <g transform="translate(48,70)">
        <polygon points="0,25 30,10 30,60 0,50" fill="#FED7AA" />
        <polygon points="30,10 70,0 90,15 30,60" fill="#FDBA74" />
        <polygon points="30,60 90,15 90,35 30,80" fill="#FB923C" />
        <rect x="0" y="46" width="14" height="20" rx="2" fill="#EA580C" />
      </g>
      <g transform="translate(150,55)">
        <path d="M0 30 C 0 14, 12 2, 28 2" stroke="#FDBA74" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M-12 42 C -12 16, 10 -8, 36 -8" stroke="#FED7AA" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.8" />
      </g>
      <circle cx="150" cy="130" r="10" fill="#FB923C" opacity="0.8" />
      <circle cx="168" cy="118" r="6" fill="#FDBA74" opacity="0.7" />
    </IsoBase>
  );
}

export function IsoSEO() {
  // SEO — loupe isométrique posée sur des barres en croissance
  return (
    <IsoBase color="#10B981">
      <g transform="translate(38,90)">
        <polygon points="0,40 20,32 20,72 0,80" fill="#A7F3D0" />
        <polygon points="0,40 20,32 40,40 20,48" fill="#D1FAE5" />
        <polygon points="20,32 40,40 40,80 20,72" fill="#6EE7B7" />

        <polygon points="45,20 65,12 65,72 45,80" fill="#6EE7B7" />
        <polygon points="45,20 65,12 85,20 65,28" fill="#A7F3D0" />
        <polygon points="65,12 85,20 85,80 65,72" fill="#34D399" />

        <polygon points="90,0 110,-8 110,72 90,80" fill="#34D399" />
        <polygon points="90,0 110,-8 130,0 110,8" fill="#6EE7B7" />
        <polygon points="110,-8 130,0 130,80 110,72" fill="#10B981" />
      </g>
      <g transform="translate(112,28)">
        <circle cx="20" cy="20" r="18" fill="none" stroke="#059669" strokeWidth="7" />
        <line x1="33" y1="33" x2="52" y2="52" stroke="#059669" strokeWidth="8" strokeLinecap="round" />
      </g>
    </IsoBase>
  );
}