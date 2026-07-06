import { products } from '@/lib/products';

export const dynamic = 'force-static';

export default function sitemap() {
  const base = 'https://errendis.com';
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/a-propos`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    ...products.map((p) => ({
      url: `${base}/produits/${p.slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    })),
  ];
}
