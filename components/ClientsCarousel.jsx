// ClientsCarousel.jsx
// Bandeau logos clients défilant — CSS animation uniquement, pas de JS
// Déposer dans : components/ClientsCarousel.jsx
// Logos à placer dans : public/clients/

const clients = [
  { name: 'BK Consulting',               file: 'bk-consulting.png' },
  { name: 'Propre Nettoyage',            file: 'propre-nettoyage.png' },
  { name: 'DrySec',                      file: 'drysec.png' },
  { name: 'ParaDoc',                     file: 'paradoc.png' },
  { name: 'Onceship',                    file: 'onceship.png' },
  { name: 'Royal Air Maroc',             file: 'royal-air-maroc.png' },
  { name: 'Université Internationale de Rabat', file: 'uir.png' },
  { name: 'University of Pennsylvania',  file: 'penn.png' },
  { name: 'Cloud Service Agency',        file: 'cloud-service-agency.png' },
  { name: 'Christian Dior',              file: 'christian-dior.png' },
];

export default function ClientsCarousel() {
  return (
    <section className="clients-section" aria-label="Ils nous font confiance">
      <div className="container">
        <p className="clients-label">Ils nous font confiance</p>
      </div>

      <div className="clients-track-wrap" aria-hidden="true">
        <div className="clients-track">
          {/* Double la liste pour un défilement infini sans saut */}
          {[...clients, ...clients].map((c, i) => (
            <div className="clients-item" key={i}>
              <img
                src={`/clients/${c.file}`}
                alt={`Logo ${c.name}`}
                width={160}
                height={60}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}