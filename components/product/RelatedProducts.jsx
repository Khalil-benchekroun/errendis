import Link from 'next/link';
import { getProduct } from '@/lib/products';
import { ProductIcon } from '@/components/logos';

export default function RelatedProducts({ slugs }) {
  if (!slugs?.length) return null;
  const related = slugs.map((s) => getProduct(s)).filter(Boolean);
  if (!related.length) return null;

  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Produits complémentaires</span>
          <h2>Souvent utilisés ensemble</h2>
        </div>
        <div className="about-products-grid">
          {related.map((p) => (
            <Link key={p.slug} href={`/produits/${p.slug}`} className="about-product-chip">
              <ProductIcon slug={p.slug} size={32} />
              <div>
                <strong>{p.name}</strong>
                <span>{p.sector}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
