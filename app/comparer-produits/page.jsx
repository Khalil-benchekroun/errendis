import Link from 'next/link';
import { products } from '@/lib/products';
import { ProductIcon } from '@/components/logos';

export const metadata = {
  title: 'Comparer nos produits',
  description:
    'Comparez Dialya, Labya, Medira, Rentara et Logistara : secteur, modules clés et public cible de chaque logiciel Errendis.',
  alternates: { canonical: '/comparer-produits' },
};

export default function ComparerProduitsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Comparer nos produits</h1>
          <p>
            Cinq secteurs, cinq logiciels. Un aperçu côte à côte pour vous
            aider à identifier le bon produit — ou à confirmer que le
            vôtre reste à construire.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Produit</th>
                  <th>Secteur</th>
                  <th>Modules clés</th>
                  <th>Pour qui</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.slug}>
                    <td>
                      <div className="compare-product-cell">
                        <ProductIcon slug={p.slug} size={28} />
                        <strong>{p.name}</strong>
                      </div>
                    </td>
                    <td>{p.sector}</td>
                    <td>{p.modules.slice(0, 3).map((m) => m.title).join(', ')}...</td>
                    <td>{p.audience}</td>
                    <td>
                      <Link href={`/produits/${p.slug}`} className="btn btn--ghost" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                        Voir →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="audience-note" style={{ marginTop: 32 }}>
            <strong>Votre métier n’est pas dans cette liste ?</strong>{' '}
            <Link href="/contact">Contactez-nous</Link> — c’est peut-être
            le prochain logiciel que nous construirons.
          </div>
        </div>
      </section>
    </>
  );
}
