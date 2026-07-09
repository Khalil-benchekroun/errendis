// ────────────────────────────────────────────────────────────
// ERRENDIS — Système de logos de la gamme
// Chaque produit : pictogramme SVG (strates) + couleur propre.
// Usage : <ProductIcon slug="dialya" size={40} />
//         <ProductLogo slug="dialya" size={32} />  (picto + nom)
// ────────────────────────────────────────────────────────────

export const PRODUCT_COLORS = {
  dialya:   '#0D9488',
  labya:    '#06B6D4',
  medira:   '#0891B2',
  rentara:  '#F59E0B',
  logistara:'#1E40AF',
  medikara: '#059669',
  restara:  '#EF4444',
  batira:   '#D97706',
  skolara:  '#0EA5E9',
};

export const PRODUCT_THEME = {
  dialya:   { accent: '#0D9488', dark: '#0F766E', soft: '#F0FDFA', text: '#0F172A' },
  labya:    { accent: '#06B6D4', dark: '#0E7490', soft: '#ECFEFF', text: '#0F172A' },
  medira:   { accent: '#0891B2', dark: '#0E7490', soft: '#ECFEFF', text: '#0F172A' },
  rentara:  { accent: '#F59E0B', dark: '#D97706', soft: '#FFFBEB', text: '#0F172A' },
  logistara:{ accent: '#1E40AF', dark: '#1E3A8A', soft: '#EFF6FF', text: '#FFFFFF' },
  medikara: { accent: '#059669', dark: '#047857', soft: '#ECFDF5', text: '#0F172A' },
  restara:  { accent: '#EF4444', dark: '#DC2626', soft: '#FEF2F2', text: '#FFFFFF' },
  batira:   { accent: '#D97706', dark: '#B45309', soft: '#FFFBEB', text: '#0F172A' },
  skolara:  { accent: '#0EA5E9', dark: '#0284C7', soft: '#F0F9FF', text: '#0F172A' },
};

// ─── PRODUITS EXISTANTS ───────────────────────────────────────

function DialyaIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <clipPath id="err-kidney">
          <path d="M33 3 C 15 3, 3 16, 3 32 C 3 48, 15 61, 33 61 C 44 61, 52 55, 52 47 C 52 45.5, 51 44.5, 49.5 44 C 42.5 42, 38 37.5, 38 32 C 38 26.5, 42.5 22, 49.5 20 C 51 19.5, 52 18.5, 52 17 C 52 9, 44 3, 33 3 Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#err-kidney)">
        {[2, 12.4, 22.8, 33.2, 43.6, 54].map((y) => (
          <rect key={y} x="0" y={y} width="64" height="7.4" fill="#0D9488" />
        ))}
      </g>
    </svg>
  );
}

function LabyaIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g transform="rotate(18 32 32)">
        <rect x="19" y="5" width="26" height="6" rx="1.5" fill="#06B6D4" />
        <defs>
          <clipPath id="err-tube">
            <path d="M24 13 H40 V44 L32 57 L24 44 Z" />
          </clipPath>
        </defs>
        <g clipPath="url(#err-tube)">
          <rect x="24" y="13" width="16" height="5.4" fill="#06B6D4" />
          <rect x="24" y="21" width="16" height="5.4" fill="#06B6D4" />
          <rect x="24" y="29" width="16" height="5.4" fill="#06B6D4" />
          <rect x="24" y="37" width="16" height="20" fill="#06B6D4" />
        </g>
      </g>
    </svg>
  );
}

function MediraIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <clipPath id="err-cross">
          <path d="M26 4 H38 A4 4 0 0 1 42 8 V22 H56 A4 4 0 0 1 60 26 V38 A4 4 0 0 1 56 42 H42 V56 A4 4 0 0 1 38 60 H26 A4 4 0 0 1 22 56 V42 H8 A4 4 0 0 1 4 38 V26 A4 4 0 0 1 8 22 H22 V8 A4 4 0 0 1 26 4 Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#err-cross)">
        {[3, 16, 29, 42, 55].map((y) => (
          <rect key={y} x="0" y={y} width="64" height="9.6" fill="#0891B2" />
        ))}
      </g>
    </svg>
  );
}

function RentaraIcon({ size }) {
  return (
    <svg
      width={size * 1.12}
      height={size}
      viewBox="0 0 72 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="err-car">
          <path d="M4 46 V38 Q4 34 9 33 L22 31 L32 21 Q33.5 19.5 36 19.5 H48 Q50.5 19.5 52 21.5 L59 30.5 L65 32 Q68 33 68 36 V46 Q68 48 66 48 H6 Q4 48 4 46 Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#err-car)">
        <rect x="0" y="18" width="72" height="7" fill="#F59E0B" />
        <rect x="0" y="28" width="72" height="7" fill="#F59E0B" />
        <rect x="0" y="38" width="72" height="12" fill="#F59E0B" />
        <path d="M34 22.5 H46.5 L52 30 H28 Z" fill="#fff" />
      </g>
      <circle cx="21" cy="46" r="9.5" fill="#fff" />
      <circle cx="21" cy="46" r="6" fill="#F59E0B" />
      <circle cx="53" cy="46" r="9.5" fill="#fff" />
      <circle cx="53" cy="46" r="6" fill="#F59E0B" />
    </svg>
  );
}

function LogistaraIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="18" y="7"  width="20" height="8" rx="1" fill="#1E40AF" />
      <rect x="13" y="18" width="30" height="8" rx="1" fill="#1E40AF" />
      <rect x="8"  y="29" width="40" height="8" rx="1" fill="#1E40AF" />
      <path
        d="M3 42 Q20 40 38 37 Q50 35 60 29 Q61 28.5 61 30 Q60 40 54 47 Q49 54 38 54 H14 Q6 52 3.5 46 Q3 44 3 42 Z"
        fill="#1E40AF"
      />
    </svg>
  );
}

// ─── NOUVEAUX PRODUITS ────────────────────────────────────────

// Medikara — capsule/pilule scindée en strates horizontales
function MedikaraIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <clipPath id="err-pill">
          {/* capsule allongée verticale */}
          <rect x="20" y="6" width="24" height="52" rx="12" />
        </clipPath>
      </defs>
      <g clipPath="url(#err-pill)">
        <rect x="20" y="6"  width="24" height="11" fill="#059669" />
        <rect x="20" y="20" width="24" height="10" fill="#059669" />
        <rect x="20" y="33" width="24" height="10" fill="#059669" />
        <rect x="20" y="46" width="24" height="12" fill="#059669" />
      </g>
      {/* ligne de séparation centrale — évoque la jonction des deux demi-capsules */}
      <line x1="20" y1="32" x2="44" y2="32" stroke="#fff" strokeWidth="2" />
    </svg>
  );
}

// Restara — cloche de restaurant en strates
function RestaraIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <clipPath id="err-cloche">
          {/* dôme : arc + base plate */}
          <path d="M8 40 Q8 12 32 12 Q56 12 56 40 Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#err-cloche)">
        <rect x="8" y="12" width="48" height="9"  fill="#EF4444" />
        <rect x="8" y="23" width="48" height="9"  fill="#EF4444" />
        <rect x="8" y="34" width="48" height="8"  fill="#EF4444" />
      </g>
      {/* base / plateau */}
      <rect x="6"  y="41" width="52" height="5" rx="2.5" fill="#EF4444" />
      {/* bouton du haut */}
      <circle cx="32" cy="11" r="4" fill="#EF4444" />
    </svg>
  );
}

// Batira — immeuble/bâtiment en strates (étages)
function BatiraIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* 4 barres horizontales de largeur décroissante vers le haut = silhouette building */}
      <rect x="20" y="8"  width="24" height="9" rx="1.5" fill="#D97706" />
      <rect x="15" y="20" width="34" height="9" rx="1.5" fill="#D97706" />
      <rect x="10" y="32" width="44" height="9" rx="1.5" fill="#D97706" />
      <rect x="5"  y="44" width="54" height="9" rx="1.5" fill="#D97706" />
    </svg>
  );
}

// Skolara — livre ouvert en strates (pages)
function SkolaraIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <clipPath id="err-book-left">
          <path d="M4 14 Q4 12 8 12 L30 12 L30 54 L8 54 Q4 54 4 50 Z" />
        </clipPath>
        <clipPath id="err-book-right">
          <path d="M34 12 L56 12 Q60 12 60 14 L60 50 Q60 54 56 54 L34 54 Z" />
        </clipPath>
      </defs>
      {/* page gauche */}
      <g clipPath="url(#err-book-left)">
        <rect x="4"  y="12" width="26" height="9"  fill="#0EA5E9" />
        <rect x="4"  y="24" width="26" height="9"  fill="#0EA5E9" />
        <rect x="4"  y="36" width="26" height="9"  fill="#0EA5E9" />
        <rect x="4"  y="47" width="26" height="9"  fill="#0EA5E9" />
      </g>
      {/* page droite */}
      <g clipPath="url(#err-book-right)">
        <rect x="34" y="12" width="26" height="9"  fill="#0EA5E9" />
        <rect x="34" y="24" width="26" height="9"  fill="#0EA5E9" />
        <rect x="34" y="36" width="26" height="9"  fill="#0EA5E9" />
        <rect x="34" y="47" width="26" height="9"  fill="#0EA5E9" />
      </g>
      {/* reliure centrale */}
      <rect x="30" y="10" width="4" height="46" rx="2" fill="#0F172A" opacity="0.15" />
      {/* chapeau de diplôme au sommet */}
      <rect x="18" y="5" width="28" height="5" rx="1" fill="#0EA5E9" />
      <polygon points="32,2 22,7 42,7" fill="#0EA5E9" />
    </svg>
  );
}

// ─── REGISTRE ────────────────────────────────────────────────

const ICONS = {
  dialya:    DialyaIcon,
  labya:     LabyaIcon,
  medira:    MediraIcon,
  rentara:   RentaraIcon,
  logistara: LogistaraIcon,
  medikara:  MedikaraIcon,
  restara:   RestaraIcon,
  batira:    BatiraIcon,
  skolara:   SkolaraIcon,
};

/** Pictogramme seul d'un produit. */
export function ProductIcon({ slug, size = 32 }) {
  const Icon = ICONS[slug];
  return Icon ? <Icon size={size} /> : null;
}

/** Lockup complet : pictogramme + nom du produit en minuscules. */
export function ProductLogo({ slug, name, size = 30 }) {
  return (
    <span className="product-logo">
      <ProductIcon slug={slug} size={size} />
      <span className="product-logo-word">{name.toLowerCase()}</span>
    </span>
  );
}