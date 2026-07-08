import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts, getPost } from '@/lib/blog';
import { products } from '@/lib/products';
import { ProductIcon } from '@/components/logos';
import ReadingProgress from '@/components/ReadingProgress';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url: `/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = products.filter((p) => post.relatedProducts?.includes(p.slug));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'Errendis' },
    publisher: { '@type': 'Organization', name: 'Errendis' },
    description: post.seoDescription,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://errendis.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://errendis.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://errendis.com/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link> / <Link href="/blog">Blog</Link>
          </nav>
          <span className="blog-card-category">{post.category}</span>
          <h1 style={{ marginTop: 12 }}>{post.title}</h1>
          <div className="blog-card-meta" style={{ marginTop: 10 }}>
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readingTime} de lecture</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="blog-article">
            {post.content.map((block, i) => {
              if (block.type === 'h2') {
                return <h2 key={i}>{block.text}</h2>;
              }
              return <p key={i}>{block.text}</p>;
            })}
          </article>

          {related.length > 0 && (
            <div className="blog-related">
              <h3>Logiciels liés à cet article</h3>
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
          )}

          <div style={{ marginTop: 40 }}>
            <Link href="/blog" className="btn btn--ghost">
              ← Retour au blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
