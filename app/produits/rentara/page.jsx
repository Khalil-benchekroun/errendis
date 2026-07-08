import { getProduct } from '@/lib/products';
import { PRODUCT_THEME as THEME } from '@/components/logos';
import ProductHero from '@/components/product/ProductHero';
import StatsBand from '@/components/product/StatsBand';
import ModuleShowcase from '@/components/product/ModuleShowcase';
import PatientAppSection from '@/components/product/PatientAppSection';
import TrustSection from '@/components/product/TrustSection';
import FaqSection from '@/components/product/FaqSection';
import RelatedProducts from '@/components/product/RelatedProducts';
import CtaSection from '@/components/product/CtaSection';
import ProductLoader from '@/components/product/ProductLoader';
import ProductAnchors from '@/components/product/ProductAnchors';

const product = getProduct('rentara');

export const metadata = {
  title: product.seoTitle,
  description: product.seoDescription,
  alternates: { canonical: '/produits/rentara' },
  openGraph: {
    title: product.seoTitle,
    description: product.seoDescription,
    url: '/produits/rentara',
    images: [{ url: '/og/rentara-og.png', width: 1200, height: 630, alt: product.seoTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: product.seoTitle,
    description: product.seoDescription,
    images: ['/og/rentara-og.png'],
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
    '--accent-contrast': theme.text,
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: product.seoDescription,
    image: 'https://errendis.com/og/rentara-og.png',
    publisher: { '@type': 'Organization', name: 'Errendis' },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://errendis.com/' },
      { '@type': 'ListItem', position: 2, name: 'Produits', item: 'https://errendis.com/#produits' },
      { '@type': 'ListItem', position: 3, name: product.name, item: `https://errendis.com/produits/${product.slug}` },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: product.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="product-theme" style={themeStyle}>
      <ProductLoader slug={product.slug} />
      <ProductAnchors />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <ProductHero product={product} />

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="prose" style={{ maxWidth: 820 }}>
            <p style={{ fontSize: '1.05rem', color: 'var(--slate)' }}>
              {product.pitch}
            </p>
          </div>
        </div>
      </section>

      <StatsBand stats={product.stats} />
      <ModuleShowcase modules={product.modules} />
      <PatientAppSection app={product.patientApp} />
      <TrustSection product={product} />
      <FaqSection faqs={product.faqs} productName={product.name} />
      <RelatedProducts slugs={product.related} />
      <CtaSection productName={product.name} />
    </div>
  );
}
