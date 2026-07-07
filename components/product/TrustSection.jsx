import Link from 'next/link';

export default function TrustSection({ product }) {
  return (
    <section id="confiance" className="section section--alt">
      <div className="container">
        <div className="why-grid">
          <div className="why-item">
            <h3>
              <span className="why-check">✓</span>Pour qui ?
            </h3>
            <p>{product.audience}.</p>
          </div>
          {product.trust?.map((t) => (
            <div className="why-item" key={t.title}>
              <h3>
                <span className="why-check">✓</span>
                {t.title}
              </h3>
              <p>{t.text}</p>
            </div>
          ))}
        </div>
        <div className="audience-note">
          <strong>Vous vous reconnaissez ?</strong>{' '}
          <Link href="/contact">Parlons de votre organisation</Link>.
        </div>
      </div>
    </section>
  );
}
