import Link from 'next/link';
import { posts } from '@/lib/blog';

export const metadata = {
  title: 'Blog',
  description:
    'Articles et guides pratiques sur la gestion d’entreprise, la santé, la distribution médicale et la logistique au Maroc.',
  alternates: { canonical: '/blog' },
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Le blog Errendis</h1>
          <p>
            Guides pratiques et réflexions sur la gestion d’entreprise,
            la santé, la distribution médicale et la logistique au Maroc.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {sorted.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                <span className="blog-card-category">{post.category}</span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className="blog-card-meta">
                  <span>{formatDate(post.date)}</span>
                  <span>·</span>
                  <span>{post.readingTime} de lecture</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}