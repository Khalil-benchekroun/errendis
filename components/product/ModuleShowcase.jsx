export default function ModuleShowcase({ modules }) {
  if (!modules?.length) return null;

  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Modules</span>
          <h2>Ce que vous gérez, module par module</h2>
        </div>

        <div className="modules-zigzag">
          {modules.map((mod, i) => (
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
                <div className="module-visual-card">
                  <span className="module-visual-glyph">{String(i + 1).padStart(2, '0')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}