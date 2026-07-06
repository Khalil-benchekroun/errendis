import Link from 'next/link';
import { ProductIcon } from '@/components/logos';
import ProductMockup from '@/components/ProductMockup';

export default function ProductHero({ product }) {
  return (
    <section className="product-hero">
      <div className="container">
        <nav className="breadcrumb" aria-label="Fil d'Ariane">
          <Link href="/">Accueil</Link> / <Link href="/#produits">Produits</Link> /{' '}
          {product.name}
        </nav>
        <div className="product-hero-lockup">
          <ProductIcon slug={product.slug} size={52} />
          <h1>{product.name}</h1>
        </div>
        <div className="product-hero-sector">{product.sector}</div>
        <p className="product-hero-pitch">{product.pitch}</p>
        <div className="hero-actions">
          <Link href="/contact" className="btn btn--primary">
            Demander une démo de {product.name}
          </Link>
        </div>

        <div className="product-shot">
          <ProductMockup slug={product.slug} name={product.name} />
        </div>
      </div>
    </section>
  );
}