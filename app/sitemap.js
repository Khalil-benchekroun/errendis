import { products } from '@/lib/products';
import { posts } from '@/lib/blog';

export const dynamic = 'force-static';

export default function sitemap() {
  const base = 'https://errendis.com';
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/a-propos`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/glossaire`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/comparer-produits`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/pourquoi-errendis`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/secteurs`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/plan-du-site`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/mentions-legales`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/confidentialite`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    ...products.map((p) => ({
      url: `${base}/produits/${p.slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    })),
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: p.date,
      changeFrequency: 'monthly',
      priority: 0.6,
    })),
  ];
}
