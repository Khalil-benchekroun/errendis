// ────────────────────────────────────────────────────────────
// ERRENDIS — Catalogue produits
// Chaque produit alimente : sa page dédiée, sa carte sur la
// home, ses métadonnées SEO et le sitemap.
// ────────────────────────────────────────────────────────────

export const products = [
  {
    slug: 'labya',
    name: 'Labya',
    sector: 'Laboratoires d\u2019analyses médicales',
    tagline: 'Le logiciel de gestion complet pour laboratoires d\u2019analyses médicales.',
    seoTitle: 'Labya — Logiciel de gestion pour laboratoire d\u2019analyses médicales au Maroc',
    seoDescription:
      'Labya digitalise votre laboratoire : réception patients, suivi des échantillons, validation biologique, facturation AMO / CNOPS / CNSS et portail patient en ligne.',
    pitch:
      'De la réception du patient à la remise des résultats, Labya couvre tout le parcours de votre laboratoire. Fini les registres papier et les fichiers Excel dispersés : chaque tube est tracé, chaque résultat est validé, chaque facture est conforme.',
    features: [
      {
        title: 'Réception & prescriptions',
        text: 'Enregistrement patient rapide, scan de l\u2019ordonnance et sélection des analyses depuis votre catalogue.',
      },
      {
        title: 'Suivi des échantillons',
        text: 'Chaque tube suit un statut clair — prélevé, en cours, validé — visible par toute l\u2019équipe en temps réel.',
      },
      {
        title: 'Validation biologique',
        text: 'Saisie des résultats avec valeurs de référence et alertes automatiques sur les valeurs critiques.',
      },
      {
        title: 'Facturation AMO / CNOPS / CNSS',
        text: 'Tiers payant, mutuelles et encaissements gérés nativement, conformes aux organismes marocains.',
      },
      {
        title: 'Portail patient',
        text: 'Vos patients consultent leurs résultats en ligne et reçoivent une notification dès validation.',
      },
      {
        title: 'Comptes rendus PDF',
        text: 'Des comptes rendus professionnels à l\u2019image de votre laboratoire, générés en un clic.',
      },
    ],
    audience: 'Directeurs et biologistes de laboratoires privés',
  },
  {
    slug: 'rentara',
    name: 'Rentara',
    sector: 'Agences de location de voitures',
    tagline: 'Pilotez votre flotte, vos contrats et vos échéances depuis un seul écran.',
    seoTitle: 'Rentara — Logiciel de gestion pour agence de location de voitures au Maroc',
    seoDescription:
      'Rentara remplace Excel et WhatsApp : planning de flotte visuel, contrats et états des lieux avec photos, suivi GPS temps réel et alertes d\u2019entretien.',
    pitch:
      'Votre agence tourne encore sur Excel, WhatsApp et des contrats papier ? Rentara centralise votre flotte, vos réservations et vos clients — et vous alerte avant chaque échéance d\u2019assurance, de vignette ou de vidange.',
    features: [
      {
        title: 'Planning de flotte visuel',
        text: 'Un calendrier clair de toutes vos réservations : disponibilités, départs et retours en un coup d\u2019œil.',
      },
      {
        title: 'Contrats & états des lieux',
        text: 'Contrat de location PDF généré automatiquement, état des lieux avec photos horodatées, gestion des cautions.',
      },
      {
        title: 'Suivi GPS temps réel',
        text: 'Localisez vos véhicules en direct et sécurisez votre flotte pendant chaque location.',
      },
      {
        title: 'Entretien & échéances',
        text: 'Vidanges, assurances, vignettes, visites techniques : Rentara vous alerte avant qu\u2019il ne soit trop tard.',
      },
      {
        title: 'Caisse & facturation',
        text: 'Avances, paiements et factures suivis véhicule par véhicule, client par client.',
      },
      {
        title: 'Multi-agences',
        text: 'Gérez plusieurs points de location avec des accès séparés pour chaque équipe.',
      },
    ],
    audience: 'Gérants d\u2019agences de location courte et longue durée',
  },
  {
    slug: 'logistara',
    name: 'Logistara',
    sector: 'Transitaires & freight forwarding',
    tagline: 'La gestion de vos dossiers d\u2019expédition, du booking à la livraison.',
    seoTitle: 'Logistara — Logiciel de gestion pour transitaires et freight forwarders',
    seoDescription:
      'Logistara digitalise vos opérations de transit : dossiers d\u2019expédition, suivi des conteneurs, documents douaniers, import/export Excel et portail client.',
    pitch:
      'Conçu avec des professionnels du transit, Logistara suit chaque dossier d\u2019expédition de bout en bout : parties prenantes, documents, statuts et facturation — avec un portail où vos clients suivent leurs marchandises en toute autonomie.',
    features: [
      {
        title: 'Dossiers d\u2019expédition',
        text: 'Toutes vos expéditions structurées : maritime, aérien, routier — avec statuts et responsables clairs.',
      },
      {
        title: 'Suivi en temps réel',
        text: 'Un tracking vivant de chaque dossier, visible par vos équipes et partageable avec vos clients.',
      },
      {
        title: 'Documents centralisés',
        text: 'BL, factures, packing lists, documents douaniers : tout est rattaché au bon dossier.',
      },
      {
        title: 'Import / Export Excel & PDF',
        text: 'Vos données entrent et sortent librement — reprises d\u2019historique et reporting sans friction.',
      },
      {
        title: 'Portail client',
        text: 'Vos clients consultent l\u2019avancement de leurs expéditions sans vous appeler dix fois par jour.',
      },
      {
        title: 'Facturation des dossiers',
        text: 'Débours, honoraires et marges suivis dossier par dossier.',
      },
    ],
    audience: 'Transitaires, commissionnaires de transport et freight forwarders',
  },
  {
    slug: 'dialya',
    name: 'Dialya',
    sector: 'Centres d\u2019hémodialyse',
    tagline: 'Le dossier patient et le suivi des séances, pensés pour la dialyse.',
    seoTitle: 'Dialya — Logiciel de gestion pour centre d\u2019hémodialyse au Maroc',
    seoDescription:
      'Dialya structure votre centre d\u2019hémodialyse : dossiers patients, planification des séances, traçabilité des générateurs et suivi médical continu.',
    pitch:
      'La dialyse exige une rigueur absolue. Dialya donne à votre centre un dossier patient complet, une planification claire des séances et une traçabilité irréprochable — pour que vos équipes se concentrent sur le soin.',
    features: [
      {
        title: 'Dossier patient complet',
        text: 'Antécédents, accès vasculaires, sérologies, historique de séances : toute l\u2019histoire du patient au même endroit.',
      },
      {
        title: 'Planning des séances',
        text: 'Postes, générateurs et créneaux organisés visuellement — glisser-déposer pour réaffecter en un geste.',
      },
      {
        title: 'Séances en direct',
        text: 'Un suivi per-dialytique en temps réel : paramètres de séance, incidents et transmissions saisis au fil de l\u2019eau.',
      },
      {
        title: 'Prescriptions & signature',
        text: 'Prescriptions de dialyse et protocoles médicamenteux, avec signature électronique tracée.',
      },
      {
        title: 'Biologie & alertes intelligentes',
        text: 'Intégration laboratoire (HL7/API) et règles d\u2019alerte personnalisables par le centre.',
      },
      {
        title: 'Parc générateurs',
        text: 'Désinfection, compteurs horaires et maintenance préventive tracés machine par machine.',
      },
      {
        title: 'Stock & pharmacie',
        text: 'Traçabilité lot par lot, rotation FIFO et scan mobile directement en salle de soins.',
      },
      {
        title: 'Facturation AMO & organismes',
        text: 'CNOPS, CNSS, AMO Tadamon et mutuelles : bordereaux, rejets et rapprochement bancaire.',
      },
      {
        title: 'Portail patient',
        text: 'Une application mobile incluse qui garde le lien avec le patient entre les séances.',
      },
    ],
    audience: 'Néphrologues et gestionnaires de centres de dialyse',
  },
  {
    slug: 'medira',
    name: 'Medira',
    sector: 'Distribution d\u2019équipements médicaux',
    tagline: 'Catalogue, devis, stock et SAV pour les distributeurs médicaux.',
    seoTitle: 'Medira — Logiciel de gestion pour distributeur d\u2019équipements médicaux',
    seoDescription:
      'Medira gère votre activité de distribution médicale : catalogue produits, devis et appels d\u2019offres, stock, livraisons, installations et SAV.',
    pitch:
      'Du devis à l\u2019installation chez le client, Medira structure votre activité de distribution d\u2019équipements médicaux : catalogue précis, stock fiable, appels d\u2019offres suivis et SAV qui ne perd plus aucune demande.',
    features: [
      {
        title: 'Catalogue produits',
        text: 'Références, fournisseurs, marquages et documentations techniques organisés proprement.',
      },
      {
        title: 'Devis & appels d\u2019offres',
        text: 'Devis professionnels générés en quelques minutes, suivi des soumissions et des relances.',
      },
      {
        title: 'Stock & livraisons',
        text: 'Entrées, sorties, numéros de série et péremptions suivis en temps réel.',
      },
      {
        title: 'Installations & mises en service',
        text: 'Chaque équipement installé est documenté : date, technicien, PV de réception.',
      },
      {
        title: 'SAV & maintenance',
        text: 'Tickets, interventions et contrats de maintenance rattachés à chaque équipement vendu.',
      },
      {
        title: 'Pilotage commercial',
        text: 'Marges, encours clients et performance par gamme, visibles en un tableau de bord.',
      },
    ],
    audience: 'Distributeurs et importateurs de dispositifs médicaux',
  },
];

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}