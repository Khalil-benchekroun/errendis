export default function StatsBand({ stats }) {
  if (!stats?.length) return null;
  return (
    <section className="section" style={{ paddingBottom: 0 }}>
      <div className="container">
        <div className="stats-band">
          {stats.map((s) => (
            <div className="stat-item" key={s.label}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}