// Modification SEO juillet 2026 :
// - Ajout prop `productName` pour enrichir l'attribut alt
// - alt passe de "Application mobile patient" à "{produit} — Application mobile : {titre}"
// - Appel dans page.jsx : <PatientAppSection app={product.patientApp} productName={product.name} />

export default function PatientAppSection({ app, productName }) {
  if (!app) return null;

  const altText = productName
    ? `${productName} — Application mobile : ${app.title}`
    : `Application mobile — ${app.title}`;

  return (
    <section id="app-dediee" className="section patient-app">
      <div className="container">
        <div className="patient-app-grid">
          <div className="patient-app-text">
            <span className="section-eyebrow">Application mobile incluse</span>
            <h2>{app.title}</h2>
            <p>{app.text}</p>

            <ul className="module-points">
              {app.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>

            {app.stats && (
              <div className="patient-app-stats">
                {app.stats.map((s) => (
                  <div className="patient-app-stat" key={s.label}>
                    <b>{s.value}</b>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="patient-app-visual">
            <div className="module-shot-frame module-shot-frame--app">
              <div className="module-shot-bar">
                <span />
                <span />
                <span />
              </div>
              <img
                src={app.image}
                alt={altText}
                loading="lazy"
                width="1600"
                height="1000"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}