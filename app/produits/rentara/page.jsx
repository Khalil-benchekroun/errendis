import { getProduct } from '@/lib/products';
import { PRODUCT_THEME as THEME } from '@/components/logos';
import ProductHero from '@/components/product/ProductHero';
import StatsBand from '@/components/product/StatsBand';
import ModuleShowcase from '@/components/product/ModuleShowcase';
import TrustSection from '@/components/product/TrustSection';
import FaqSection from '@/components/product/FaqSection';
import CtaSection from '@/components/product/CtaSection';

const product = getProduct('rentara');

export const metadata = {
  title: product.seoTitle,
  description: product.seoDescription,
  alternates: { canonical: '/produits/rentara' },
  openGraph: {
    title: product.seoTitle,
    description: product.seoDescription,
    url: '/produits/rentara',
  },
  icons: {
    icon: [
      { url: '/favicons/rentara-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/rentara-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/favicons/rentara-apple.png',
  },
};

export default function RentaraPage() {
  const theme = THEME[product.slug];
  const themeStyle = {
    '--accent': theme.accent,
    '--accent-dark': theme.dark,
    '--accent-soft': theme.soft,
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: product.seoDescription,
    publisher: { '@type': 'Organization', name: 'Errendis' },
  };

  return (
    <div className="product-theme" style={themeStyle}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ProductHero product={product} />
      <StatsBand stats={product.stats} />
      <ModuleShowcase modules={product.modules} />
      <TrustSection product={product} />
      <FaqSection faqs={product.faqs} productName={product.name} />
      <CtaSection productName={product.name} />
    </div>
  );
}
