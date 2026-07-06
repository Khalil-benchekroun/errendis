import Link from 'next/link';

export default function CtaSection({ productName }) {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="cta-band">
          <h2>Voyez {productName} en action.</h2>
          <p>Une démonstration de 30 minutes, sur vos cas concrets, sans engagement.</p>
          <Link href="/contact" className="btn btn--primary">
            Réserver ma démo
          </Link>
        </div>
      </div>
    </section>
  );
}