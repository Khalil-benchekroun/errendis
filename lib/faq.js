// ────────────────────────────────────────────────────────────
// ERRENDIS — FAQ générale enrichie
// 9 questions générales + questions par vertical
// Mise à jour juillet 2026
// ────────────────────────────────────────────────────────────

export const FAQS = [

  // ── QUESTIONS GÉNÉRALES ──────────────────────────────────

  {
    q: 'Comment se passe la mise en service d\u2019un logiciel Errendis ?',
    a: 'Après une démonstration sur vos cas concrets, nous configurons le logiciel à votre organisation (documents, tarifs, utilisateurs), reprenons vos données existantes si besoin, puis formons vos équipes sur site ou à distance. Comptez généralement quelques jours à quelques semaines selon la taille de votre structure.',
    category: 'general',
  },
  {
    q: 'Proposez-vous un essai gratuit ?',
    a: 'Nous privilégions une démonstration personnalisée de 30 minutes sur vos propres cas d\u2019usage plutôt qu\u2019un essai générique en autonomie, car nos logiciels sont paramétrés pour chaque métier. Cette démonstration ne vous engage à rien.',
    category: 'general',
  },
  {
    q: 'Quels sont vos délais de réponse et de support ?',
    a: 'Nous répondons habituellement sous 24h ouvrées par email, et plus rapidement par WhatsApp. Une fois client, vous disposez d\u2019un contact direct avec notre équipe pour toute question ou incident.',
    category: 'general',
  },
  {
    q: 'Où sont hébergées nos données ?',
    a: 'Vos données sont hébergées sur des infrastructures cloud sécurisées, avec sauvegardes automatiques régulières. Les détails techniques précis (localisation, chiffrement) sont communiqués lors de la mise en service, selon le produit concerné.',
    category: 'general',
  },
  {
    q: 'Peut-on personnaliser un logiciel Errendis à notre organisation ?',
    a: 'Oui, chaque logiciel est paramétré à votre structure : vos documents, vos tarifs, vos utilisateurs et leurs rôles. Des développements spécifiques supplémentaires peuvent être étudiés au cas par cas.',
    category: 'general',
  },
  {
    q: 'Comment sont facturés vos logiciels ?',
    a: 'Nos tarifs dépendent du produit, du nombre d\u2019utilisateurs et de la taille de votre structure. Nous établissons un devis personnalisé après avoir compris votre organisation lors de la démonstration.',
    category: 'general',
  },
  {
    q: 'Vos logiciels fonctionnent-ils sur mobile ?',
    a: 'Oui, nos logiciels sont accessibles depuis un navigateur sur ordinateur, tablette ou smartphone. Certains produits incluent en complément une application mobile dédiée (par exemple le portail patient de Dialya ou le portail conducteur de Rentara).',
    category: 'general',
  },
  {
    q: 'Peut-on migrer depuis notre solution actuelle (Excel, autre logiciel) ?',
    a: 'Oui, la reprise de vos données existantes fait partie de notre méthode de mise en service, que vous partiez d\u2019un fichier Excel, d\u2019un registre papier ou d\u2019un autre logiciel.',
    category: 'general',
  },
  {
    q: 'Errendis développe-t-il d\u2019autres logiciels métiers ?',
    a: 'Oui, notre gamme s\u2019élargit régulièrement à de nouveaux secteurs. Si votre métier n\u2019a pas encore son logiciel Errendis, contactez-nous : c\u2019est peut-être le prochain que nous construirons.',
    category: 'general',
  },

  // ── LABYA — LABORATOIRES ─────────────────────────────────

  {
    q: 'Labya est-il compatible avec les automates de laboratoire courants au Maroc ?',
    a: 'Oui, Labya se connecte en bidirectionnel aux automates les plus utilisés au Maroc : Cobas (Roche), Sysmex (hématologie), Abbott Architect (biochimie/immunologie) et BioMérieux VIDAS (sérologie). La connexion supprime la ressaisie manuelle des résultats et élimine les erreurs de transcription.',
    category: 'labya',
  },
  {
    q: 'Labya aide-t-il les laboratoires à obtenir l\u2019accréditation ISO 15189 ?',
    a: 'Oui, Labya est conçu pour faciliter la conformité ISO 15189 et GBEA : gestion des contrôles qualité internes (CQI) avec cartes de Levey-Jennings, suivi de la métrologie et des étalonnages, traçabilité complète de chaque dossier analytique et gestion des non-conformités. Ces fonctions sont incluses dans la version standard, pas en option payante.',
    category: 'labya',
  },
  {
    q: 'Labya gère-t-il la facturation AMO, CNOPS et CNSS ?',
    a: 'Oui, Labya gère nativement la facturation auprès des organismes de prise en charge marocains : CNOPS, CNSS, AMO Tadamon et mutuelles privées. Il génère les bordereaux dans les formats requis, suit les rejets et facilite leur correction.',
    category: 'labya',
  },
  {
    q: 'Labya propose-t-il un portail pour les médecins prescripteurs ?',
    a: 'Oui, Labya inclut un portail web sécurisé pour les médecins prescripteurs. Ils peuvent consulter les résultats de leurs patients directement en ligne, recevoir des alertes sur les valeurs critiques et télécharger les comptes-rendus — sans avoir à appeler le laboratoire.',
    category: 'labya',
  },

  // ── DIALYA — HÉMODIALYSE ─────────────────────────────────

  {
    q: 'Dialya gère-t-il la facturation AMO pour les séances de dialyse ?',
    a: 'Oui, Dialya génère automatiquement les bordereaux de facturation AMO, CNOPS et CNSS à partir des séances réalisées. Il suit les rejets, facilite leur correction et produit des rapports de recouvrement détaillés.',
    category: 'dialya',
  },
  {
    q: 'Dialya peut-il se connecter au laboratoire d\u2019analyses du centre ?',
    a: 'Oui, Dialya s\u2019intègre avec les logiciels de laboratoire partenaires via HL7 ou API pour importer automatiquement les résultats biologiques des patients dialysés dans leur dossier. Les valeurs critiques déclenchent des alertes automatiques.',
    category: 'dialya',
  },
  {
    q: 'Dialya gère-t-il le planning des postes et des générateurs de dialyse ?',
    a: 'Oui, c\u2019est l\u2019une des fonctions centrales de Dialya : un planning visuel des postes et générateurs, avec gestion des créneaux par patient, réaffectation rapide en cas d\u2019imprévu et alertes en cas de conflit de planning.',
    category: 'dialya',
  },

  // ── RENTARA — LOCATION VOITURE ───────────────────────────

  {
    q: 'Rentara fonctionne-t-il pour des agences multi-sites au Maroc ?',
    a: 'Oui, Rentara est conçu pour la gestion multi-agences : tableau de bord centralisé pour toutes vos agences (Casablanca, Rabat, Marrakech, Agadir, Fès, Tanger...), transferts de véhicules entre sites, droits d\u2019accès par agence et rapports consolidés au niveau du groupe.',
    category: 'rentara',
  },
  {
    q: 'Rentara gère-t-il les états des lieux avec photos ?',
    a: 'Oui, Rentara permet de réaliser les états des lieux sur tablette ou smartphone avec photos horodatées associées au dossier de location. Le client signe électroniquement à la prise et à la restitution du véhicule. Ces éléments éliminent quasiment tous les litiges à la restitution.',
    category: 'rentara',
  },
  {
    q: 'Rentara inclut-il un suivi GPS des véhicules ?',
    a: 'Oui, Rentara intègre le suivi GPS en temps réel pour localiser chaque véhicule de votre flotte, détecter les sorties de zone géographique autorisée et disposer de données objectives en cas de sinistre (position, vitesse, historique des trajets).',
    category: 'rentara',
  },

  // ── RESTARA — RESTAURANT ─────────────────────────────────

  {
    q: 'Restara fonctionne-t-il pour une chaîne de restaurants au Maroc ?',
    a: 'Oui, Restara prend en charge la gestion multi-établissements avec un tableau de bord central qui consolide les performances de tous vos restaurants. Chaque établissement dispose de sa propre configuration (carte, plan de salle, personnel) tout en étant visible depuis le siège.',
    category: 'restara',
  },
  {
    q: 'Restara propose-t-il un écran cuisine KDS ?',
    a: 'Oui, Restara inclut un écran cuisine (KDS, Kitchen Display System) qui affiche les commandes par ordre de priorité avec un code couleur selon le temps écoulé. Le chef valide chaque plat prêt d\u2019un toucher, ce qui notifie automatiquement le serveur en salle.',
    category: 'restara',
  },
  {
    q: 'Restara calcule-t-il le coût matières par plat ?',
    a: 'Oui, Restara intègre un module de fiches techniques qui calcule automatiquement le coût de revient et la marge brute de chaque plat à partir des prix d\u2019achat des ingrédients. Quand un prix fournisseur change, les marges sont recalculées automatiquement.',
    category: 'restara',
  },

  // ── LOGISTARA — TRANSIT ──────────────────────────────────

  {
    q: 'Logistara couvre-t-il les formalités douanières marocaines ?',
    a: 'Oui, Logistara est conçu pour les transitaires et commissionnaires en douane marocains. Il gère les dossiers d\u2019importation et d\u2019exportation avec tous les documents requis par l\u2019ADII, les délais, les alertes documentaires et le suivi des expéditions de bout en bout.',
    category: 'logistara',
  },
  {
    q: 'Logistara gère-t-il plusieurs régimes douaniers ?',
    a: 'Oui, Logistara prend en charge les principaux régimes douaniers marocains : mise à la consommation, admission temporaire, transit douanier et régimes des zones franches. Chaque dossier est traité selon le régime approprié avec les documents correspondants.',
    category: 'logistara',
  },

  // ── SKOLARA — ÉCOLES ─────────────────────────────────────

  {
    q: 'Skolara est-il compatible avec Massar, la plateforme du ministère marocain ?',
    a: 'Skolara couvre les fonctions que Massar ne propose pas pour les établissements privés : paiements de scolarité, cantine, communication parents, activités périscolaires et gestion commerciale de l\u2019école. Pour les fonctions couvertes par Massar (notes officielles), Skolara peut s\u2019interfacer avec la plateforme ministérielle.',
    category: 'skolara',
  },
  {
    q: 'Skolara inclut-il une application mobile pour les parents ?',
    a: 'Oui, Skolara propose une application mobile parent pour consulter les notes et bulletins, recevoir des notifications d\u2019absence en temps réel, voir le menu de cantine, payer les frais de scolarité et communiquer directement avec les enseignants et la direction.',
    category: 'skolara',
  },
];

// ── HELPERS ──────────────────────────────────────────────────

export function getFaqsByCategory(category) {
  return FAQS.filter((f) => f.category === category || category === 'all');
}

export function getGeneralFaqs() {
  return FAQS.filter((f) => f.category === 'general');
}

export function getProductFaqs(productSlug) {
  return FAQS.filter((f) => f.category === productSlug);
}
