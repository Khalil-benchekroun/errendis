import { buildSearchIndex } from '@/lib/search-index';
import SearchClient from '@/components/SearchClient';

export const metadata = {
  title: 'Recherche',
  description: 'Recherchez un produit, un article ou un terme du glossaire Errendis.',
  alternates: { canonical: '/recherche' },
  robots: { index: false, follow: true },
};

export default function RecherchePage() {
  const index = buildSearchIndex();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Rechercher</h1>
          <p>Un produit, un terme technique, un article de blog — tout est ici.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SearchClient index={index} />
        </div>
      </section>
    </>
  );
}
