'use client';

const SECTIONS = [
  { id: 'modules', label: 'Modules' },
  { id: 'app-dediee', label: 'Application incluse' },
  { id: 'confiance', label: 'Pourquoi nous faire confiance' },
  { id: 'faq', label: 'FAQ' },
];

export default function ProductAnchors() {
  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <nav className="product-anchors" aria-label="Sommaire de la page">
      {SECTIONS.map((s) => (
        <button key={s.id} type="button" onClick={() => scrollTo(s.id)}>
          {s.label}
        </button>
      ))}
    </nav>
  );
}
