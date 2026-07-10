import Link from 'next/link';
import { products } from '@/lib/products';
import { ProductIcon } from '@/components/logos';
import { IsoLab, IsoDialysis, IsoDistribution, IsoRental, IsoLogistics } from '@/components/IsoIllustrations';

const ISO_MAP = {
  labya: IsoLab,
  dialya: IsoDialysis,
  medira: IsoDistribution,
  rentara: IsoRental,
  logistara: IsoLogistics,
};

export const metadata = {
  title: 'Vos difficultés par secteur — Errendis',
  description:
    'Les difficultés typiques rencontrées par les laboratoires, centres de dialyse, distributeurs médicaux, agences de location, transitaires, restaurants, entreprises BTP et écoles privées — et comment un logiciel métier y répond.',
  alternates: { canonical: '/secteurs' },
};

const PAIN_POINTS = {
  labya: [
    'Résultats retrouvés à la main dans des classeurs papier',
    'Facturation AMO/CNOPS/CNSS gérée manuellement, source d\'erreurs',
    'Aucune alerte automatique sur les valeurs critiques',
  ],
  dialya: [
    'Planning des séances refait chaque jour sur papier ou tableur',
    'Dossier patient dispersé entre plusieurs supports',
    'Suivi du parc de générateurs approximatif',
  ],
  medira: [
    'Stock géré sans visibilité sur les dates de péremption',
    'Appels d\'offres publics suivis par email et relances manuelles',
    'SAV sans historique centralisé par équipement',
  ],
  rentara: [
    'Réservations gérées par WhatsApp et appels téléphoniques',
    'Contrats papier facilement perdus ou incomplets',
    'Aucune alerte avant l\'échéance d\'une assurance ou d\'une vignette',
  ],
  logistara: [
    'Statut des dossiers demandé par téléphone plusieurs fois par jour',
    'Documents de transport éparpillés entre emails et classeurs',
    'Blocages douaniers découverts tardivement',
  ],
  medikara: [
    'Rapports de visite remplis sur Excel en fin de semaine',
    'Aucune visibilité du manager sur l\'activité terrain en temps réel',
    'Gestion des échantillons sans traçabilité réglementaire',
  ],
  restara: [
    'Commandes mal transmises entre salle et cuisine',
    'Coût matières par plat inconnu, marges devinées',
    'Caisse difficile à clôturer en fin de service',
  ],
  batira: [
    'Retenues de garantie calculées manuellement sur chaque décompte',
    'Déclarations CNSS chantier basées sur des pointages papier',
    'Aucun suivi d\'avancement en temps réel par phase',
  ],
  skolara: [
    'Suivi des paiements de scolarité sur fichiers Excel',
    'Parents non notifiés automatiquement des absences',
    'Bulletins générés manuellement à chaque période',
  ],
};

const SECTOR_PAGES = {
  labya: '/secteurs/sante',
  dialya: '/secteurs/sante',
  medira: '/secteurs/sante',
  medikara: '/secteurs/sante',
  rentara: '/secteurs/location',
  logistara: '/secteurs/logistique',
  restara: '/secteurs/restauration',
  batira: '/secteurs/btp',
  skolara: '/secteurs/education',
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
            {products.map((p) => {
              const Iso = ISO_MAP[p.slug];
              const sectorPage = SECTOR_PAGES[p.slug];
              return (
                <div className="sector-card sector-card--iso" key={p.slug}>
                  <div className="sector-card-illustration">{Iso && <Iso />}</div>
                  <div className="sector-card-body">
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
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                      <Link href={`/produits/${p.slug}`} className="btn btn--ghost" style={{ alignSelf: 'flex-start' }}>
                        Découvrir {p.name} →
                      </Link>
                      {sectorPage && (
                        <Link href={sectorPage} className="btn btn--ghost" style={{ alignSelf: 'flex-start' }}>
                          Guide secteur →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
