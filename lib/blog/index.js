// ─────────────────────────────────────────────────────────────
// ERRENDIS — Blog index
// Ajouter un nouvel article :
//   1. Créer lib/blog/mon-article.js avec export const post = { ... }
//   2. L'importer ici et l'ajouter dans allPosts (ordre anti-chronologique)
// ─────────────────────────────────────────────────────────────

// ── Articles existants ────────────────────────────────────────
import { post as signesExcel } from './signes-remplacer-excel-logiciel-metier';
import { post as fefoFifo } from './fefo-fifo-gestion-stock-medical';
import { post as digitaliserHemodialyse } from './digitaliser-centre-hemodialyse-maroc';
import { post as logicielLaboratoire } from './logiciel-gestion-laboratoire-analyses-medicales-maroc-2026';
import { post as logicielLocation } from './logiciel-location-voiture-maroc-comparatif';
import { post as logicielRestaurant } from './logiciel-gestion-restaurant-maroc-guide-2026';
import { post as logicielEcolePrivee } from './logiciel-gestion-ecole-privee-maroc-massar';
import { post as logicielBtp } from './logiciel-btp-maroc-suivi-chantier-retenues-garantie';
import { post as logicielDelegues } from './logiciel-delegues-medicaux-maroc-force-vente-pharma';
import { post as iso15189 } from './conformite-iso-15189-laboratoire-maroc';
import { post as insuffisanceRenale } from './insuffisance-renale-chronique-maroc-enjeux-gestion';
import { post as appelOffres } from './appel-offres-dispositifs-medicaux-maroc';
import { post as optimiserTournees } from './optimiser-tournees-delegues-medicaux-maroc';
import { post as transitDouane } from './transit-douane-maroc-guide-operateurs';
import { post as ecoleMaterelle } from './gestion-ecole-maternelle-creche-maroc';
import { post as tangerMed } from './tanger-med-opportunites-transitaires-maroc';
import { post as marcheImmobilier } from './marche-immobilier-maroc-opportunites-promoteurs';
import { post as industriePharma } from './industrie-pharmaceutique-maroc-croissance-digitalisation';
import { post as enseignementPrive } from './enseignement-prive-maroc-croissance-defis-gestion';
import { post as biologieMedicale } from './biologie-medicale-maroc-enjeux-laboratoires-prives';

// ── Nouveaux articles Skolara — Août 2026 ─────────────────────
import { post as checklistRentree } from './rentree-scolaire-2026-checklist-directeur';
import { post as guideLogicielScolaire } from './logiciel-gestion-scolaire-maroc-2026';
import { post as gestionAbsences } from './gestion-absences-eleves-ecole-privee-maroc';
import { post as bulletinsAutomatiques } from './bulletins-scolaires-automatiques-maroc';
import { post as gestionPaiements } from './gestion-paiements-frais-scolarite-maroc';

// ── Tableau complet — anti-chronologique (plus récent en premier) ──
export const posts = [
  gestionPaiements,
  bulletinsAutomatiques,
  gestionAbsences,
  guideLogicielScolaire,
  checklistRentree,
  biologieMedicale,
  enseignementPrive,
  industriePharma,
  marcheImmobilier,
  tangerMed,
  ecoleMaterelle,
  transitDouane,
  optimiserTournees,
  appelOffres,
  insuffisanceRenale,
  iso15189,
  logicielDelegues,
  logicielBtp,
  logicielEcolePrivee,
  logicielRestaurant,
  logicielLocation,
  logicielLaboratoire,
  digitaliserHemodialyse,
  fefoFifo,
  signesExcel,
];

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs() {
  return posts.map((p) => p.slug);
}
