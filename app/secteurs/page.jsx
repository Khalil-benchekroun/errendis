import Link from 'next/link';
import { products } from '@/lib/products';
import { ProductIcon } from '@/components/logos';

export const metadata = {
  title: 'Vos difficultés par secteur',
  description:
    'Les difficultés typiques rencontrées par les laboratoires, centres de dialyse, distributeurs médicaux, agences de location et transitaires — et comment un logiciel métier y répond.',
  alternates: { canonical: '/secteurs' },
};

const PAIN_POINTS = {
  labya: [
    'Résultats retrouvés à la main dans des classeurs papier',
    'Facturation AMO/CNOPS/CNSS gérée manuellement, source d’erreurs',
    'Aucune alerte automatique sur les valeurs critiques',
  ],
  dialya: [
    'Planning des séances refait chaque jour sur papier ou tableur',
    'Dossier patient dispersé entre plusieurs supports',
    'Suivi du parc de générateurs approximatif',
  ],
  medira: [
    'Stock géré sans visibilité sur les dates de péremption',
    'Appels d’offres publics suivis par email et relances manuelles',
    'SAV sans historique centralisé par équipement',
  ],
  rentara: [
    'Réservations gérées par WhatsApp et appels téléphoniques',
    'Contrats papier facilement perdus ou incomplets',
    'Aucune alerte avant l’échéance d’une assurance ou d’une vignette',
  ],
  logistara: [
    'Statut des dossiers demandé par téléphone plusieurs fois par jour',
    'Documents de transport éparpillés entre emails et classeurs',
    'Blocages douaniers découverts tardivement',
  ],
};

export default function SecteursPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Vos difficultés, secteur par secteur</h1>
          <p>
            Chaque métier a ses propres blocages. Retrouvez les vôtres, et
            découvrez comment un logiciel spécialisé y répond.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sector-list">
            {products.map((p) => (
              <div className="sector-card" key={p.slug}>
                <div className="sector-card-head">
                  <ProductIcon slug={p.slug} size={36} />
                  <div>
                    <strong>{p.sector}</strong>
                    <span>Solution : {p.name}</span>
                  </div>
                </div>
                <ul className="sector-pains">
                  {(PAIN_POINTS[p.slug] || []).map((pain) => (
                    <li key={pain}>{pain}</li>
                  ))}
                </ul>
                <Link href={`/produits/${p.slug}`} className="btn btn--ghost" style={{ alignSelf: 'flex-start' }}>
                  Découvrir {p.name} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
