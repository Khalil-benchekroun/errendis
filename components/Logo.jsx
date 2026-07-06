// Logo Errendis — E monogramme en strates + wordmark.
// Recréation vectorielle fidèle du logo validé : quatre barres
// horizontales décalées (données qui s'ordonnent), dégradé de bleus.

export function LogoMark({ size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="6" y="8" width="52" height="10" rx="1.5" fill="#1D4ED8" />
      <rect x="6" y="22" width="40" height="10" rx="1.5" fill="#2563EB" />
      <rect x="6" y="36" width="46" height="10" rx="1.5" fill="#1E40AF" />
      <rect x="6" y="50" width="52" height="10" rx="1.5" fill="#1E3A8A" />
    </svg>
  );
}

export default function Logo({ size = 34, wordmark = true, inverted = false }) {
  return (
    <span className="logo" aria-label="Errendis">
      <LogoMark size={size} />
      {wordmark && (
        <span className={`logo-word${inverted ? ' logo-word--inverted' : ''}`}>
          errendis
        </span>
      )}
    </span>
  );
}