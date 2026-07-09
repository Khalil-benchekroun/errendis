// Modification SEO juillet 2026 :
// - Ajout prop `productName` pour enrichir les attributs alt
// - alt passe de "Capture d'écran — {titre}" à "{produit} — {titre} : aperçu du module"
// - Appel dans page.jsx : <ModuleShowcase modules={product.modules} productName={product.name} />

export default function ModuleShowcase({ modules, visuals, productName }) {
  if (!modules?.length) return null;

  return (
    <section id="modules" className="section section--alt">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Modules</span>
          <h2>Ce que vous gérez, module par module</h2>
        </div>

        <div className="modules-zigzag">
          {modules.map((mod, i) => {
            const Visual = visuals?.[i];
            return (
              <div
                className={`module-row${i % 2 === 1 ? ' module-row--reverse' : ''}`}
                key={mod.title}
              >
                <div className="module-text">
                  <span className="module-index">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{mod.title}</h3>
                  <p>{mod.text}</p>
                  {mod.points && (
                    <ul className="module-points">
                      {mod.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="module-visual">
                  {mod.image ? (
                    <div className="module-shot-frame">
                      <div className="module-shot-bar">
                        <span />
                        <span />
                        <span />
                      </div>
                      <img
                        src={mod.image}
                        alt={
                          productName
                            ? `${productName} — ${mod.title} : aperçu du module`
                            : `Aperçu du module ${mod.title}`
                        }
                        loading="lazy"
                        width="1600"
                        height="1000"
                      />
                    </div>
                  ) : Visual ? (
                    <Visual />
                  ) : (
                    <div className="module-visual-card">
                      <span className="module-visual-glyph">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}