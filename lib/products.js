// ────────────────────────────────────────────────────────────
// ERRENDIS — Catalogue produits
// Chaque produit alimente sa propre page dédiée dans
// app/produits/<slug>/page.jsx, ainsi que sa carte sur la home,
// ses métadonnées SEO et le sitemap.
//
// Champs par produit :
//   features   → grille simple (aperçu rapide)
//   modules    → présentation détaillée en zigzag (le cœur du contenu)
//   stats      → bandeau de chiffres clés
//   trust      → garanties / arguments de confiance
//   faqs       → questions fréquentes (+ JSON-LD FAQPage, bonus SEO)
// ────────────────────────────────────────────────────────────

export const products = [
  {
    slug: "labya",
    name: "Labya",
    badgeSet: "sante",
    sector: "Laboratoires d'analyses médicales",
    tagline: "Le système d'information complet pour laboratoires de biologie médicale.",
    seoTitle: "Labya — Logiciel de gestion pour laboratoire d'analyses médicales au Maroc",
    seoDescription:
      "Labya est le logiciel de gestion pour laboratoires de biologie médicale au Maroc : réception, connexion automates, validation biologique, portail médecin prescripteur, application patient et facturation AMO/CNOPS/CNSS.",
    pitch:
      "De la réception du patient à la remise des résultats, Labya couvre tout le parcours de votre laboratoire — connexion directe à vos automates, validation biologique assistée, portail dédié à vos médecins prescripteurs et application mobile pour vos patients.",
    longDescription:
      "Labya s'adresse aux laboratoires d'analyses médicales marocains qui gèrent encore leur activité sur des registres papier et des fichiers Excel dispersés entre la réception, la paillasse et la facturation. Le logiciel couvre la biologie clinique de bout en bout : réception et prescriptions, suivi des échantillons par code-barres, connexion directe aux automates (Cobas, Sysmex, Architect, VIDAS...) pour éliminer la ressaisie, validation biologique avec alertes sur les valeurs critiques, gestion des réactifs et de la métrologie pour la conformité ISO 15189/GBEA, et facturation AMO/CNOPS/CNSS native. Un portail dédié à vos médecins prescripteurs et une application mobile pour vos patients complètent l'ensemble.",
    stats: [
      { value: "13", label: "modules métier" },
      { value: "4", label: "automates connectés en direct" },
      { value: "ISO", label: "15189 · conformité GBEA" },
    ],
    modules: [
      {
        title: "Tableau de bord",
        text: "Une vue d'ensemble du laboratoire dès la connexion : dossiers du jour, résultats en attente de validation et état des automates, visibles en un coup d'œil.",
        points: ["Indicateurs clés en temps réel", "Alertes prioritaires centralisées", "Accès rapide à chaque module"],
        image: "/screenshots/labya/tableau-de-bord.webp",
      },
      {
        title: "Réception & prescriptions",
        text: "Scannez l'ordonnance du patient : le dossier se crée automatiquement avec les analyses détectées, le médecin prescripteur et l'organisme de prise en charge.",
        points: ["Scan d'ordonnance avec pré-remplissage", "Détection automatique des analyses", "Organisme de prise en charge identifié"],
        image: "/screenshots/labya/reception-prescriptions.webp",
      },
      {
        title: "Suivi des échantillons",
        text: "Chaque tube est tracé par code-barres, de la réception au résultat final, avec un statut clair visible par toute l'équipe.",
        points: ["Traçabilité code-barres complète", "Statuts en temps réel par poste", "Historique complet du tube"],
        image: "/screenshots/labya/echantillons.webp",
      },
      {
        title: "Connexion automates",
        text: "Une connexion directe à vos automates (Cobas, Sysmex, Architect, VIDAS) récupère les résultats automatiquement — zéro ressaisie, zéro erreur de transcription.",
        points: ["Connexion RS232 et réseau LAN", "Récupération automatique des résultats", "Alerte en cas de déconnexion automate"],
        image: "/screenshots/labya/automates.webp",
      },
      {
        title: "Validation biologique",
        text: "Les résultats sont présentés avec leurs valeurs usuelles, les valeurs critiques sont signalées et le médecin prescripteur est notifié automatiquement.",
        points: ["Valeurs usuelles par âge/sexe", "Alertes sur valeurs critiques", "Notification automatique du prescripteur"],
        image: "/screenshots/labya/validation-biologique.webp",
      },
      {
        title: "Stock & réactifs",
        text: "Suivi des réactifs avec alertes de péremption et de seuil critique, pour ne jamais être pris au dépourvu avant une commande fournisseur.",
        points: ["Alertes de péremption", "Seuils critiques par réactif", "Historique des réceptions fournisseur"],
        image: "/screenshots/labya/stock-reactifs.webp",
      },
      {
        title: "Qualité & métrologie",
        text: "Le suivi des étalonnages et de la maintenance des équipements soutient votre conformité ISO 15189 et GBEA, prêt pour vos audits.",
        points: ["Suivi des étalonnages par équipement", "Échéances de maintenance", "Historique prêt pour audit qualité"],
        image: "/screenshots/labya/qualite-metrologie.webp",
      },
      {
        title: "Facturation AMO, CNOPS, CNSS",
        text: "Tiers payant, mutuelles et bordereaux organismes gérés nativement, avec suivi des rejets et rapprochement des règlements.",
        points: ["Tiers payant automatisé", "Bordereaux CNOPS/CNSS/AMO Tadamon", "Suivi et correction des rejets"],
        image: "/screenshots/labya/facturation-amo.webp",
      },
      {
        title: "Business Intelligence",
        text: "Volumes par type d'analyse, temps de rendu moyen (TAT) et taux de rejet suivis dans le temps, pour piloter la performance du laboratoire.",
        points: ["TAT moyen par poste", "Volumes par type d'analyse", "Taux de rejet suivi dans le temps"],
        image: "/screenshots/labya/rapports-bi.webp",
      },
    ],
    patientApp: {
      title: "Application patient — vos résultats en poche",
      text: "Vos patients consultent leurs résultats dès leur validation, retrouvent leur historique et peuvent contacter le laboratoire directement depuis leur téléphone — sans appeler pour savoir si le résultat est prêt.",
      image: "/screenshots/labya/portail-patient-app.webp",
      points: [
        "Résultats disponibles dès validation",
        "Historique complet des analyses",
        "Notification automatique de disponibilité",
        "Contact direct avec le laboratoire",
        "Accès sécurisé par le patient uniquement",
      ],
      stats: [
        { value: "0", label: "appel nécessaire pour un résultat" },
        { value: "LIVE", label: "notification dès validation" },
        { value: "100%", label: "accès sécurisé patient" },
      ],
    },
    features: [
      { title: "Tableau de bord", text: "Vue d'ensemble du laboratoire en un coup d'œil." },
      { title: "Réception & prescriptions", text: "Scan d'ordonnance, dossier créé automatiquement." },
      { title: "Suivi des échantillons", text: "Traçabilité code-barres complète." },
      { title: "Connexion automates", text: "Résultats récupérés automatiquement, zéro ressaisie." },
      { title: "Validation biologique", text: "Alertes sur valeurs critiques, notification prescripteur." },
      { title: "Stock & réactifs", text: "Alertes de péremption et de seuil critique." },
      { title: "Qualité & métrologie", text: "Conformité ISO 15189 et GBEA." },
      { title: "Facturation AMO", text: "CNOPS, CNSS, AMO Tadamon gérés nativement." },
      { title: "Business Intelligence", text: "TAT, volumes et taux de rejet suivis." },
      { title: "Portail médecin", text: "Vos prescripteurs consultent et demandent en ligne." },
      { title: "Application patient", text: "Résultats disponibles dès validation." },
    ],
    trust: [
      { title: "Conforme ISO 15189 et GBEA", text: "Suivi qualité et métrologie prêt pour vos audits d'accréditation." },
      { title: "Zéro ressaisie automate", text: "Connexion directe à vos automates, résultats récupérés sans erreur de transcription." },
      { title: "Prise en charge marocaine intégrée", text: "AMO, CNOPS et CNSS gérés nativement, sans module tiers à ajouter." },
    ],
    faqs: [
      {
        q: "Labya se connecte-t-il à nos automates existants ?",
        a: "Oui, Labya se connecte directement aux automates courants (Cobas, Sysmex, Architect, VIDAS...) par RS232 ou réseau LAN, selon votre équipement, pour récupérer les résultats automatiquement.",
      },
      {
        q: "Le médecin prescripteur a-t-il accès à un espace dédié ?",
        a: "Oui, un portail médecin permet à vos prescripteurs de consulter les résultats de leurs patients et de transmettre de nouvelles demandes d'analyse directement, sans appeler le laboratoire.",
      },
      {
        q: "Comment fonctionne l'application patient ?",
        a: "Le patient reçoit une notification dès que son résultat est validé et le consulte directement depuis l'application, avec l'historique complet de ses analyses passées.",
      },
      {
        q: "Labya gère-t-il plusieurs points de prélèvement ?",
        a: "Oui, vous pouvez gérer un plateau technique central et plusieurs points de prélèvement, avec une visibilité centralisée sur l'ensemble des dossiers.",
      },
      {
        q: "Peut-on reprendre nos données existantes ?",
        a: "Oui, nous reprenons votre historique patients et vos tarifs existants lors de la mise en service, à partir de vos fichiers ou de votre logiciel actuel.",
      },
    ],
    audience: "Directeurs et biologistes de laboratoires d'analyses médicales",
  },

  {
    slug: "rentara",
    name: "Rentara",
    badgeSet: "location",
    related: ["logistara"],
    sector: "Agences de location de voitures",
    tagline: "Pilotez votre flotte, vos contrats et vos échéances depuis un seul écran.",
    seoTitle: "Rentara — Logiciel de gestion pour agence de location de voitures au Maroc",
    seoDescription:
      "Rentara remplace Excel et WhatsApp : planning de flotte visuel, contrats et états des lieux avec photos, scan CIN/permis, suivi GPS temps réel, assistant IA et portail conducteur mobile.",
    pitch:
      "Votre agence tourne encore sur Excel, WhatsApp et des contrats papier ? Rentara centralise votre flotte, vos réservations et vos clients — et vous alerte avant chaque échéance d'assurance, de vignette ou de vidange.",
    stats: [
      { value: "9", label: "modules métier" },
      { value: "GPS", label: "suivi en temps réel" },
      { value: "100%", label: "contrats digitalisés" },
    ],
    modules: [
      {
        title: "Tableau de bord",
        text: "Une vue d'ensemble de toute l'activité en temps réel : véhicules loués, revenus du mois, retours du jour et alertes d'entretien prioritaires — dès la connexion.",
        points: ["Taux d'occupation de la flotte en direct", "Revenus et comparaison mois précédent", "Alertes prioritaires centralisées"],
        image: "/screenshots/rentara/tableau-de-bord.webp",
      },
      {
        title: "Planning de flotte",
        text: "Un calendrier visuel de toutes vos réservations : disponibilités, départs et retours en un coup d'œil, avec alertes de conflit et vue multi-agences.",
        points: ["Vue calendrier par véhicule", "Alertes de conflit de réservation", "Multi-agences sur un seul planning"],
        image: "/screenshots/rentara/planning-flotte.webp",
      },
      {
        title: "Clients & scan CIN",
        text: "Photographiez ou scannez la CIN et le permis du client : la fiche se crée automatiquement en 10 secondes, sans ressaisie. Identité, permis et historique centralisés.",
        points: ["Scan CIN et permis de conduire", "Fiche client créée automatiquement", "Historique complet des locations par client"],
        image: "/screenshots/rentara/clients-cin.webp",
      },
      {
        title: "Contrats & états des lieux",
        text: "Contrat PDF généré automatiquement, état des lieux comparatif départ/retour avec photos horodatées, signature électronique et suivi des cautions.",
        points: ["Contrat PDF généré en un clic", "Comparatif photos départ vs retour", "Signature électronique et cautions suivies"],
        image: "/screenshots/rentara/contrats-edl.webp",
      },
      {
        title: "Suivi GPS temps réel",
        text: "Localisez vos véhicules en direct sur une carte, suivez leur vitesse et sécurisez votre flotte avec des alertes de sortie de zone géographique.",
        points: ["Position en direct sur carte", "Historique de trajets", "Alerte sortie de zone autorisée"],
        image: "/screenshots/rentara/suivi-gps.webp",
      },
      {
        title: "Entretien & alertes",
        text: "Vidanges, assurances, vignettes et contrôles techniques : un tableau de bord par véhicule avec alertes automatiques avant chaque échéance.",
        points: ["Alertes automatiques par véhicule", "Tableau vidange / assurance / vignette / CT", "Historique d'entretien centralisé"],
        image: "/screenshots/rentara/entretien-alertes.webp",
      },
      {
        title: "Caisse & facturation",
        text: "Encaissements, avances et factures suivis véhicule par véhicule, avec taux d'occupation et revenu par véhicule pour piloter la rentabilité de votre flotte.",
        points: ["Revenu par véhicule", "Taux d'occupation mensuel", "Cautions bloquées et factures en attente"],
        image: "/screenshots/rentara/caisse-facturation.webp",
      },
      {
        title: "Assistant Rentara (IA)",
        text: "Posez vos questions en langage naturel : disponibilités du week-end, contrats en retard, revenus du mois. L'assistant répond en quelques secondes sans naviguer entre les menus.",
        points: ["Questions en langage naturel", "Disponibilités, revenus, retards en un instant", "Suggestions proactives sur la flotte"],
        image: "/screenshots/rentara/assistant-ia.webp",
      },
      {
        title: "Portail conducteur",
        text: "Vos clients voient leur contrat, leur facture et les détails de leur location depuis leur téléphone — et peuvent contacter l'agence ou localiser le véhicule directement.",
        points: ["Location et retour visible sur mobile", "Facture et contrat PDF accessibles", "Contact direct avec l'agence"],
        image: "/screenshots/rentara/portail-conducteur.webp",
      },
    ],
    patientApp: {
      title: "Portail conducteur — l'application incluse",
      text: "Vos clients consultent leur contrat, leur facture et les détails de leur location depuis leur smartphone — sans appeler l'agence. Ils peuvent localiser leur véhicule et contacter l'équipe directement depuis l'application.",
      image: "/screenshots/rentara/portail-conducteur-app.webp",
      points: [
        "Location en cours visible en temps réel",
        "Contrat PDF et facture accessibles depuis le téléphone",
        "Rappel automatique de la date de retour",
        "Contact direct avec l'agence en un tap",
        "Localisation du véhicule incluse",
      ],
      stats: [
        { value: "0", label: "appel pour consulter son contrat" },
        { value: "LIVE", label: "statut de la location en direct" },
        { value: "100%", label: "documents accessibles sur mobile" },
      ],
    },
    features: [
      { title: "Tableau de bord", text: "Taux d'occupation, revenus et alertes en temps réel." },
      { title: "Planning de flotte", text: "Toutes vos réservations en un coup d'œil." },
      { title: "Clients & scan CIN", text: "Fiche client créée en 10 secondes par scan." },
      { title: "Contrats & états des lieux", text: "Contrat PDF automatique, photos horodatées." },
      { title: "Suivi GPS temps réel", text: "Localisez vos véhicules en direct." },
      { title: "Entretien & alertes", text: "Alertes avant chaque échéance." },
      { title: "Caisse & facturation", text: "Revenus et taux d'occupation par véhicule." },
      { title: "Assistant IA", text: "Réponses en langage naturel sur votre activité." },
      { title: "Portail conducteur", text: "Vos clients gèrent leur location sur mobile." },
    ],
    trust: [
      { title: "Zéro papier perdu", text: "Contrats et états des lieux archivés numériquement, retrouvables en un clic." },
      { title: "Flotte sécurisée", text: "Suivi GPS et alertes de sortie de zone pour protéger vos véhicules." },
      { title: "Client autonome", text: "Le portail conducteur réduit fortement les appels entrants à l'agence." },
    ],
    faqs: [
      {
        q: "Faut-il installer un boîtier GPS sur chaque véhicule ?",
        a: "Oui, un petit boîtier GPS est nécessaire par véhicule. Nous vous orientons vers des solutions compatibles adaptées au marché marocain.",
      },
      {
        q: "Rentara fonctionne-t-il pour la location longue durée ?",
        a: "Oui, le planning et la facturation s'adaptent aussi bien à la location courte durée (jour/semaine) qu'à la longue durée (mois/année).",
      },
      {
        q: "Peut-on gérer plusieurs agences avec un seul compte ?",
        a: "Oui, chaque agence a ses propres accès et son propre planning, avec une vue consolidée pour le gérant sur l'ensemble du réseau.",
      },
      {
        q: "Le scan CIN fonctionne-t-il avec tous les types de documents ?",
        a: "Oui, Rentara scanne la carte nationale d'identité (CIN) et le permis de conduire marocains, et crée la fiche client automatiquement sans ressaisie.",
      },
      {
        q: "Comment fonctionne l'assistant IA ?",
        a: "Il répond à vos questions en langage naturel sur vos données en temps réel : disponibilités, revenus, contrats en retard. Pas besoin de naviguer entre les menus.",
      },
    ],
    audience: "Gérants d'agences de location courte et longue durée",
  },

  {
    slug: "logistara",
    name: "Logistara",
    badgeSet: "transit",
    related: ["rentara"],
    sector: "Transitaires & freight forwarding",
    tagline: "La gestion de vos dossiers d'expédition, du booking à la livraison.",
    seoTitle: "Logistara — Logiciel de gestion pour transitaires et freight forwarders au Maroc",
    seoDescription:
      "Logistara digitalise vos opérations de transit : dossiers d'expédition maritime, aérien et routier, suivi douanier, agents IA de traitement documentaire, base de données clients et portail de suivi public.",
    pitch:
      "Conçu avec des professionnels du transit, Logistara suit chaque dossier d'expédition de bout en bout — maritime, aérien, routier — avec la douane, les documents et la facturation centralisés, et un portail de suivi que vos clients utilisent sans même avoir de compte.",
    longDescription:
      "Logistara s'adresse aux transitaires et commissionnaires de transport marocains qui jonglent aujourd'hui entre fichiers Excel, échanges WhatsApp et relances téléphoniques pour savoir où en est chaque dossier. Le logiciel centralise les trois modes de transport — maritime, aérien, routier — avec leurs spécificités propres (FCL/LCL, marchandises sensibles, corridors Maroc-Europe), le suivi douanier et la conformité réglementaire, et même des agents d'intelligence artificielle qui lisent et classent automatiquement vos documents de transport. Vos clients, eux, suivent leur marchandise en autonomie avec un simple numéro de dossier, sans jamais avoir besoin d'un compte.",
    stats: [
      { value: "12", label: "modules métier" },
      { value: "3", label: "modes : mer, air, route" },
      { value: "IA", label: "traitement documentaire automatisé" },
    ],
    modules: [
      {
        title: "Tableau de bord",
        text: "Une vue d'ensemble de toute l'activité de transit : dossiers actifs par mode de transport, alertes douanières et échéances à venir, visibles dès la connexion.",
        points: ["Vue consolidée tous modes de transport", "Alertes et échéances prioritaires", "Accès rapide à chaque dossier"],
        image: "/screenshots/logistara/tableau-de-bord.webp",
      },
      {
        title: "Dossiers d'expédition",
        text: "Vue complète de tous les dossiers d'expédition, tous modes confondus, avec statuts clairs et responsables assignés — cliquez sur une référence pour voir son suivi détaillé.",
        points: ["Un dossier par expédition, tous modes confondus", "Statuts et responsables assignés", "Recherche instantanée par référence"],
        image: "/screenshots/logistara/expeditions.webp",
      },
      {
        title: "Fret maritime (FCL/LCL)",
        text: "Les expéditions maritimes suivies avec leurs spécificités propres : conteneurs complets (FCL) ou groupage (LCL), armateurs et ports d'escale.",
        points: ["Gestion FCL et LCL", "Suivi armateurs et ports", "Documents maritimes centralisés"],
        image: "/screenshots/logistara/fret-maritime.webp",
      },
      {
        title: "Fret aérien",
        text: "Un traitement prioritaire pour les expéditions aériennes et les marchandises sensibles, avec des délais et une traçabilité adaptés à l'urgence du mode aérien.",
        points: ["Traitement prioritaire des dossiers urgents", "Marchandises sensibles identifiées", "Suivi compagnies aériennes"],
        image: "/screenshots/logistara/fret-aerien.webp",
      },
      {
        title: "Transport routier",
        text: "Les corridors routiers Maroc-Europe suivis dossier par dossier, avec transporteurs, chauffeurs et délais de route centralisés.",
        points: ["Corridors Maroc ↔ Europe suivis", "Transporteurs et chauffeurs rattachés", "Délais de route en temps réel"],
        image: "/screenshots/logistara/fret-routier.webp",
      },
      {
        title: "Douane & conformité",
        text: "Le suivi des dossiers douaniers, des blocages et de la conformité réglementaire sur l'ensemble de vos corridors, pour anticiper chaque retard avant qu'il ne coûte cher.",
        points: ["Suivi des blocages douaniers", "Conformité réglementaire par corridor", "Documents douaniers centralisés"],
        image: "/screenshots/logistara/douane.webp",
      },
      {
        title: "Clients & portefeuille",
        text: "Votre portefeuille clients actifs avec leur volume d'expéditions en cours, pour prioriser vos comptes stratégiques et détecter les baisses d'activité.",
        points: ["Volume d'expéditions par client", "Historique complet par compte", "Détection des comptes en baisse"],
        image: "/screenshots/logistara/clients.webp",
      },
      {
        title: "Base de données documentaire",
        text: "Une base de données flexible façon tableur intelligent, pour organiser dossiers, contacts et références sans dépendre d'un développeur pour chaque nouveau besoin.",
        points: ["Colonnes et catégories personnalisables", "Fiches détaillées par enregistrement", "Organisation sans code"],
        image: "/screenshots/logistara/base-de-donnees.webp",
      },
      {
        title: "Contacts & annuaire",
        text: "Un annuaire centralisé de tous vos contacts professionnels — clients, transporteurs, douaniers, agents portuaires — avec leurs coordonnées et leur historique.",
        points: ["Annuaire centralisé par rôle", "Historique de collaboration", "Recherche rapide par contact"],
        image: "/screenshots/logistara/contacts.webp",
      },
      {
        title: "Agents IA de traitement documentaire",
        text: "Des agents d'intelligence artificielle lisent, extraient et classent automatiquement vos documents de transport — connaissements, factures, certificats — pour éliminer la ressaisie manuelle.",
        points: ["Extraction automatique des données", "Classification des documents de transport", "Vérification de conformité assistée"],
        image: "/screenshots/logistara/assistant-ia.webp",
      },
      {
        title: "Rapports & analyses",
        text: "Une analyse de performance et des tendances opérationnelles sur le mois en cours, pour piloter votre activité de transit avec des chiffres à jour plutôt qu'un tableur reconstruit chaque fin de mois.",
        points: ["Tendances opérationnelles mensuelles", "Performance par mode de transport", "Export pour vos comités de direction"],
        image: "/screenshots/logistara/rapports.webp",
      },
      {
        title: "Paramètres & accès",
        text: "Une gestion fine des accès par profil (direction, opérations, comptabilité) pour que chaque collaborateur voie exactement ce dont il a besoin, ni plus ni moins.",
        points: ["Rôles et permissions par profil", "Configuration multi-agences", "Personnalisation de l'espace de travail"],
        image: "/screenshots/logistara/parametres.webp",
      },
    ],
    patientApp: {
      title: "Suivi public — le portail client sans compte",
      text: "Vos clients suivent leur marchandise en temps réel avec un simple numéro de dossier, sans créer de compte ni vous appeler. Maritime, aérien ou routier : chaque étape du transport est visible instantanément, avec les blocages douaniers signalés clairement.",
      image: "/screenshots/logistara/tracking-public.webp",
      points: [
        "Suivi par simple numéro de dossier, aucun compte requis",
        "Statuts en temps réel : maritime, aérien, routier",
        "Alertes visibles en cas de blocage douanier",
        "Accessible depuis un lien partagé par email ou WhatsApp",
        "Réduit fortement les appels de suivi entrants",
      ],
      stats: [
        { value: "3", label: "modes de transport suivis" },
        { value: "0", label: "compte requis pour le client" },
        { value: "LIVE", label: "statut en temps réel" },
      ],
    },
    features: [
      { title: "Tableau de bord", text: "Vue consolidée de l'activité tous modes confondus." },
      { title: "Dossiers d'expédition", text: "Maritime, aérien, routier — statuts clairs." },
      { title: "Fret maritime", text: "Gestion FCL/LCL, armateurs et ports." },
      { title: "Fret aérien", text: "Traitement prioritaire, marchandises sensibles." },
      { title: "Transport routier", text: "Corridors Maroc-Europe suivis en détail." },
      { title: "Douane & conformité", text: "Blocages et conformité réglementaire suivis." },
      { title: "Clients & portefeuille", text: "Volume d'expéditions par client." },
      { title: "Base de données", text: "Organisation flexible sans développeur." },
      { title: "Contacts & annuaire", text: "Tous vos contacts pro centralisés." },
      { title: "Agents IA documentaires", text: "Extraction et classification automatiques." },
      { title: "Rapports & analyses", text: "Tendances et performance mensuelles." },
      { title: "Paramètres & accès", text: "Rôles et permissions par profil." },
      { title: "Portail de suivi public", text: "Vos clients suivent sans compte, par référence." },
    ],
    trust: [
      { title: "Construit avec des professionnels du transit", text: "Le vocabulaire, les statuts et les corridors collent à votre réalité opérationnelle marocaine." },
      { title: "Moins d'appels clients", text: "Le portail de suivi public réduit fortement les demandes de statut par téléphone." },
      { title: "IA au service de la saisie", text: "Les agents documentaires réduisent la ressaisie manuelle sur les documents de transport." },
    ],
    faqs: [
      {
        q: "Logistara gère-t-il le maritime, l'aérien et le routier ?",
        a: "Oui, les trois modes de transport sont pris en charge dans le même outil, chacun avec ses spécificités (FCL/LCL pour le maritime, traitement prioritaire pour l'aérien, corridors pour le routier).",
      },
      {
        q: "Le client a-t-il besoin d'un compte pour suivre sa marchandise ?",
        a: "Non, le portail de suivi public fonctionne avec un simple numéro de dossier — aucune création de compte n'est nécessaire pour vos clients.",
      },
      {
        q: "Comment fonctionnent les agents IA de traitement documentaire ?",
        a: "Ils lisent automatiquement vos documents de transport (connaissements, factures, certificats), en extraient les données clés et les classent dans le bon dossier, réduisant la ressaisie manuelle.",
      },
      {
        q: "Peut-on reprendre nos dossiers en cours ?",
        a: "Oui, nous reprenons vos dossiers actifs et votre historique récent lors de la mise en service, à partir de vos fichiers existants.",
      },
      {
        q: "La base de données documentaire nécessite-t-elle des compétences techniques ?",
        a: "Non, elle fonctionne comme un tableur intelligent : vous créez vos propres catégories et colonnes sans avoir besoin d'un développeur.",
      },
    ],
    audience: "Transitaires, commissionnaires de transport et freight forwarders",
  },

  {
    slug: "dialya",
    name: "Dialya",
    badgeSet: "sante",
    related: ["labya", "medira"],
    sector: "Centres d'hémodialyse",
    tagline: "Le système d'exploitation complet des centres d'hémodialyse.",
    seoTitle: "Dialya — Logiciel de gestion pour centre d'hémodialyse au Maroc",
    seoDescription:
      "Dialya est le logiciel de gestion pour centres d'hémodialyse au Maroc : dossier patient, planning des séances, suivi en direct, biologie, générateurs, stock, facturation AMO/CNOPS/CNSS et application patient incluse.",
    pitch:
      "La dialyse exige une rigueur absolue. Dialya donne à votre centre un dossier patient complet, un planning clair des séances, un suivi en direct de chaque poste et une traçabilité irréprochable — pour que vos équipes se concentrent sur le soin, pas sur l'administratif.",
    longDescription:
      "Conçu avec des néphrologues et des cadres de santé marocains, Dialya réunit dans un seul logiciel tout ce qu'un centre d'hémodialyse gère aujourd'hui dans des registres papier, des tableurs Excel et des groupes WhatsApp dispersés. Du dossier médical du patient jusqu'à la facturation auprès de la CNOPS, de la CNSS et de l'AMO Tadamon, chaque étape du parcours de soin est tracée, centralisée et accessible en quelques secondes. Le logiciel de dialyse Dialya s'adresse aux centres d'hémodialyse privés et publics au Maroc qui souhaitent digitaliser leur gestion clinique et administrative sans complexité technique.",
    stats: [
      { value: "10", label: "modules métier" },
      { value: "LIVE", label: "suivi per-dialytique en direct" },
      { value: "HL7", label: "intégration laboratoire" },
    ],
    modules: [
      {
        title: "Tableau de bord",
        text: "Une vue d'ensemble complète du centre dès la connexion : séances du jour, postes occupés, alertes actives et indicateurs clés visibles en un coup d'œil, sans naviguer entre plusieurs écrans.",
        points: ["Indicateurs clés en temps réel", "Vue consolidée pour la direction médicale", "Accès rapide à chaque module"],
        image: "/screenshots/dialya/tableau-de-bord.webp",
      },
      {
        title: "Dossier patient complet",
        text: "Antécédents, accès vasculaires, sérologies et historique de séances : toute l'histoire du patient dialysé au même endroit, accessible en quelques secondes par toute l'équipe soignante.",
        points: ["Antécédents et comorbidités", "Accès vasculaires suivis", "Historique complet des séances"],
        image: "/screenshots/dialya/dossier-patient.webp",
      },
      {
        title: "Planning des séances",
        text: "Postes, générateurs et créneaux organisés visuellement. Réaffecter un patient se fait en quelques secondes, sans reconstruire tout le planning de la journée.",
        points: ["Vue par poste et par générateur", "Réaffectation rapide en cas d'imprévu", "Alertes de conflit de créneau"],
        image: "/screenshots/dialya/planning-seances.webp",
      },
      {
        title: "Séances en direct",
        text: "Un suivi per-dialytique en temps réel : paramètres de séance, incidents et transmissions saisis au fil de l'eau par l'équipe soignante, visibles instantanément par le médecin.",
        points: ["Paramètres saisis en direct", "Incidents horodatés", "Transmissions d'équipe centralisées"],
        image: "/screenshots/dialya/seances-en-direct.webp",
      },
      {
        title: "Prescriptions & signature électronique",
        text: "Prescriptions de dialyse et protocoles médicamenteux, avec signature électronique tracée pour une conformité totale face aux inspections et au conseil médical.",
        points: ["Protocoles médicamenteux structurés", "Signature électronique horodatée", "Historique des prescriptions"],
        image: "/screenshots/dialya/prescriptions.webp",
      },
      {
        title: "Biologie & alertes intelligentes",
        text: "Intégration laboratoire par HL7 ou API, avec des règles d'alerte personnalisables par le centre pour ne jamais manquer une valeur critique (kaliémie, hémoglobine, Kt/V...).",
        points: ["Intégration laboratoire HL7/API", "Règles d'alerte personnalisables", "Historique biologique par patient"],
        image: "/screenshots/dialya/biologie-alertes.webp",
      },
      {
        title: "Parc générateurs",
        text: "Désinfection, compteurs horaires et maintenance préventive tracés machine par machine, pour répondre aux exigences réglementaires et anticiper les pannes.",
        points: ["Suivi machine par machine", "Désinfection tracée", "Maintenance préventive planifiée"],
        image: "/screenshots/dialya/parc-generateurs.webp",
      },
      {
        title: "Stock & pharmacie",
        text: "Traçabilité lot par lot, rotation FIFO et scan mobile directement en salle de soins, pour une gestion rigoureuse des consommables et médicaments.",
        points: ["Traçabilité lot par lot", "Rotation FIFO automatique", "Scan mobile en salle"],
        image: "/screenshots/dialya/stock-pharmacie.webp",
      },
      {
        title: "Facturation AMO & organismes",
        text: "CNOPS, CNSS, AMO Tadamon et mutuelles : bordereaux, rejets et rapprochement bancaire gérés nativement, sans module tiers à ajouter.",
        points: ["CNOPS, CNSS, AMO Tadamon", "Gestion des rejets", "Rapprochement bancaire"],
        image: "/screenshots/dialya/facturation-amo.webp",
      },
    ],
    patientApp: {
      title: "Portail patient — l'application incluse",
      text: "Une application mobile incluse garde le lien avec le patient dialysé entre les séances : rappels de rendez-vous, derniers résultats, conseils diététiques personnalisés et signalement de symptômes directement transmis à l'équipe soignante.",
      image: "/screenshots/dialya/portail-patient.webp",
      points: [
        "Rappels de séance et confirmation de présence",
        "Derniers résultats (Kt/V, hémoglobine, poids) accessibles au patient",
        "Conseils diététiques personnalisés selon le dernier bilan",
        "Signalement de symptômes avant la séance",
        "Interface disponible en français et en arabe (darija)",
      ],
      stats: [
        { value: "71%", label: "patients équipés en pilote" },
        { value: "-38%", label: "d'absences non anticipées" },
        { value: "4,7★", label: "note moyenne de l'application" },
      ],
    },
    features: [
      { title: "Tableau de bord", text: "Vue d'ensemble du centre en un coup d'œil." },
      { title: "Dossier patient complet", text: "Toute l'histoire du patient au même endroit." },
      { title: "Planning des séances", text: "Postes et générateurs organisés visuellement." },
      { title: "Séances en direct", text: "Suivi per-dialytique en temps réel." },
      { title: "Prescriptions & signature", text: "Signature électronique tracée." },
      { title: "Biologie & alertes", text: "Intégration laboratoire, alertes personnalisables." },
      { title: "Parc générateurs", text: "Désinfection et maintenance tracées." },
      { title: "Stock & pharmacie", text: "Traçabilité lot par lot, scan mobile." },
      { title: "Facturation AMO", text: "CNOPS, CNSS, AMO Tadamon gérés nativement." },
      { title: "Portail patient", text: "Application mobile incluse pour chaque patient." },
    ],
    trust: [
      { title: "Conforme aux exigences réglementaires", text: "Traçabilité complète du matériel et des séances, prête pour vos inspections." },
      { title: "Conçu avec des néphrologues", text: "Le vocabulaire, les alertes et les protocoles collent à la réalité clinique marocaine." },
      { title: "Prise en charge marocaine intégrée", text: "CNOPS, CNSS et AMO Tadamon gérés sans module tiers à ajouter." },
    ],
    faqs: [
      {
        q: "Dialya s'intègre-t-il avec notre laboratoire d'analyses ?",
        a: "Oui, via une intégration HL7 ou API selon votre laboratoire partenaire. Les résultats arrivent directement dans le dossier patient, avec vos règles d'alerte.",
      },
      {
        q: "Peut-on gérer plusieurs centres avec un seul compte ?",
        a: "Oui, Dialya prend en charge la gestion multi-centres avec des accès et des plannings séparés par site, et une vue consolidée pour la direction médicale.",
      },
      {
        q: "L'application patient nécessite-t-elle une installation compliquée ?",
        a: "Non, l'application patient s'installe comme n'importe quelle application mobile et propose un mode simplifié pensé pour les patients seniors, en français et en arabe.",
      },
      {
        q: "Comment se passe la reprise de nos dossiers patients existants ?",
        a: "Nous reprenons votre historique patients (antécédents, séances passées) à partir de vos fichiers ou de votre logiciel actuel lors de la mise en service.",
      },
      {
        q: "Dialya gère-t-il les différents types d'accès vasculaire ?",
        a: "Oui, fistule artério-veineuse, cathéter jugulaire ou fémoral : chaque type d'accès est suivi dans le dossier patient avec son historique propre.",
      },
    ],
    audience: "Néphrologues et gestionnaires de centres de dialyse",
  },

  {
    slug: "medira",
    name: "Medira",
    badgeSet: "sante",
    related: ["dialya", "labya"],
    sector: "Distribution d'équipements médicaux",
    tagline: "La suite complète pour distributeurs et importateurs d'équipements médicaux.",
    seoTitle: "Medira — Logiciel de gestion pour distributeur d'équipements médicaux au Maroc",
    seoDescription:
      "Medira est le logiciel de gestion pour distributeurs d'équipements médicaux au Maroc : CRM, devis, appels d'offres, commandes FEFO, stock par lot, catalogue, achats et imports, SAV, qualité et rappels, portail client B2B.",
    pitch:
      "Du premier contact client jusqu'à la maintenance de l'équipement installé, Medira structure toute l'activité d'un distributeur médical : CRM, devis, appels d'offres publics, commandes avec allocation FEFO, traçabilité des lots, catalogue, achats à l'international, SAV et parc installé, qualité et rappels produits.",
    longDescription:
      "Conçu pour les distributeurs et importateurs d'équipements et de consommables médicaux au Maroc, Medira couvre un métier à forte exigence réglementaire : marchés publics hospitaliers, chaîne du froid, traçabilité des lots jusqu'au rappel fabricant, et parc d'équipements installés chez des dizaines de clients.",
    stats: [
      { value: "14", label: "modules métier" },
      { value: "FEFO", label: "allocation stock automatique" },
      { value: "GS1", label: "scan codes-barres fabricants" },
    ],
    modules: [
      {
        title: "Tableau de bord",
        text: "Une vue direction complète : chiffre d'affaires facturé, encours clients, lots à péremption proche et appels d'offres à déposer, avec graphiques de CA et de marge par segment client.",
        points: ["CA et marge brute en temps réel", "Répartition du CA par segment client", "Vigilance péremptions et activité récente"],
        image: "/screenshots/medira/tableau-de-bord.webp",
      },
      {
        title: "Clients & CRM",
        text: "Chaque établissement dispose d'une fiche complète avec contact, CA, encours, délai de règlement et autorisations réglementaires (DMP).",
        points: ["Segmentation par type d'établissement", "Suivi des autorisations DMP par client", "Historique d'achats et encours en un coup d'œil"],
        image: "/screenshots/medira/clients-crm.webp",
      },
      {
        title: "Devis",
        text: "Des devis professionnels générés en quelques minutes, suivis par statut et convertibles en commande d'un seul clic une fois acceptés.",
        points: ["Suivi par statut avec filtres rapides", "Conversion devis → commande en un clic", "Validité et relances suivies"],
        image: "/screenshots/medira/devis.webp",
      },
      {
        title: "Commandes & allocation FEFO",
        text: "La préparation des commandes applique automatiquement la règle FEFO : les lots les plus proches de péremption sortent en priorité.",
        points: ["Allocation FEFO automatique et justifiée", "Suivi de préparation en temps réel", "Bons de livraison générés"],
        image: "/screenshots/medira/commandes.webp",
      },
      {
        title: "Appels d'offres & marchés publics",
        text: "Veille, montage des dossiers, cautions bancaires et suivi des marchés attribués — avec compte à rebours avant chaque date de dépôt.",
        points: ["Compte à rebours par dossier", "Suivi des pièces admin / technique / financière", "Cautions bancaires centralisées"],
        image: "/screenshots/medira/appels-offres.webp",
      },
      {
        title: "Facturation & recouvrement",
        text: "Facturation conforme aux marchés publics marocains avec relances automatisées à plusieurs niveaux sur les impayés.",
        points: ["Gestion des retenues de garantie", "Relances automatisées par niveau", "Suivi des délais publics vs privés"],
        image: "/screenshots/medira/facturation.webp",
      },
      {
        title: "Stock & lots",
        text: "Traçabilité lot par lot avec alertes de péremption à 90, 60 et 30 jours, gestion multi-dépôts.",
        points: ["Alertes péremption 90 / 60 / 30 jours", "Traçabilité complète réception → client livré", "Réapprovisionnement prédictif par IA"],
        image: "/screenshots/medira/stock-lots.webp",
      },
      {
        title: "Catalogue produits",
        text: "Chaque référence est documentée avec son certificat CE, son enregistrement DMP, ses conditions de conservation et sa marge.",
        points: ["Certificats CE et enregistrements DMP attachés", "Indicateur chaîne du froid par produit", "Marges masquées selon le rôle utilisateur"],
        image: "/screenshots/medira/catalogue.webp",
      },
      {
        title: "Achats & imports",
        text: "Suivi des dossiers d'importation étape par étape avec vos fournisseurs internationaux et leurs conditions de paiement.",
        points: ["Suivi visuel des étapes d'importation", "Fournisseurs et conditions de paiement centralisés", "Prix de revient réel (achat + fret + douane)"],
        image: "/screenshots/medira/achats-imports.webp",
      },
      {
        title: "SAV & parc installé",
        text: "Un registre complet des équipements installés chez vos clients, avec contrats de maintenance et tickets d'intervention suivis par technicien.",
        points: ["Registre des équipements par client", "Contrats de maintenance et échéances", "Tickets d'intervention par technicien"],
        image: "/screenshots/medira/sav-parc-installe.webp",
      },
      {
        title: "Qualité & rappels",
        text: "Non-conformités, actions correctives (CAPA), quarantaine automatique à réception et campagnes de rappel produit.",
        points: ["Quarantaine automatique à réception", "Non-conformités et CAPA tracées", "Campagnes de rappel avec taux d'efficacité"],
        image: "/screenshots/medira/qualite-rappels.webp",
      },
      {
        title: "Consignation & retours",
        text: "Gestion du stock déposé chez vos clients et facturé à la consommation, ainsi que des retours (RMA) avec décision qualité.",
        points: ["Stock en consignation facturé à la consommation", "Retours (RMA) avec décision qualité", "Consignation fournisseur (trésorerie préservée)"],
        image: "/screenshots/medira/consignation-retours.webp",
      },
      {
        title: "Rapports & analyses",
        text: "Rentabilité par famille de produits, par marché public et pipeline commercial complet, exportable en Excel ou PDF.",
        points: ["Marge brute par famille de produits", "Rentabilité des marchés publics attribués", "Pipeline commercial en vue kanban"],
        image: "/screenshots/medira/rapports.webp",
      },
      {
        title: "Paramètres & rôles",
        text: "Une matrice de droits granulaire et un journal d'audit horodaté avec signature électronique sur les actions sensibles.",
        points: ["Matrice de droits par profil métier", "Journal d'audit horodaté et inviolable", "Signature électronique sur les validations critiques"],
        image: "/screenshots/medira/parametres-roles.webp",
      },
    ],
    patientApp: {
      title: "Portail Client B2B — l'espace commande de vos clients",
      text: "Vos clients hospitaliers et cliniques commandent directement en ligne, à leurs tarifs négociés, sans passer par un commercial.",
      image: "/screenshots/medira/portail-client-b2b.webp",
      points: [
        "Tarifs négociés appliqués automatiquement par client",
        "Recommande en un clic la dernière commande",
        "Suivi des livraisons et historique des factures",
        "Certificats CE et enregistrements DMP accessibles",
        "Intégration e-facturation DGI et export comptable",
      ],
      stats: [
        { value: "62%", label: "des commandes passent en ligne" },
        { value: "+35%", label: "de commandes portail en un mois" },
        { value: "~14h", label: "de saisie économisées par mois" },
      ],
    },
    features: [
      { title: "Tableau de bord", text: "CA, marge et alertes de la direction en un coup d'œil." },
      { title: "Clients & CRM", text: "Fiches établissements avec CA, encours et autorisations." },
      { title: "Devis", text: "Générés en minutes, convertis en commande en un clic." },
      { title: "Commandes & FEFO", text: "Allocation automatique des lots à écouler en priorité." },
      { title: "Appels d'offres", text: "Dossiers, cautions et marchés publics suivis." },
      { title: "Facturation", text: "Retenues de garantie et relances automatisées." },
      { title: "Stock & lots", text: "Traçabilité complète, alertes de péremption." },
      { title: "Catalogue", text: "Certificats CE/DMP et marges par référence." },
      { title: "Achats & imports", text: "Suivi des dossiers d'importation étape par étape." },
      { title: "SAV & parc installé", text: "Équipements, contrats et tickets par technicien." },
      { title: "Qualité & rappels", text: "CAPA, quarantaine et campagnes de rappel." },
      { title: "Consignation & retours", text: "Stock consigné facturé à la consommation." },
      { title: "Rapports", text: "Marge par famille et pipeline commercial." },
      { title: "Paramètres & rôles", text: "Matrice de droits et journal d'audit signé." },
      { title: "Portail Client B2B", text: "Vos clients commandent en ligne à leurs tarifs." },
    ],
    trust: [
      { title: "Conforme aux marchés publics marocains", text: "Retenues de garantie, cautions bancaires et délais de règlement publics gérés nativement." },
      { title: "Traçabilité réglementaire complète", text: "Chaque lot suivi de la réception au client livré, prêt pour un rappel fabricant ou un contrôle." },
      { title: "Qualité pharmaceutique intégrée", text: "Quarantaine à réception, CAPA et campagnes de rappel alignées sur les bonnes pratiques ISO 13485." },
    ],
    faqs: [
      {
        q: "Medira gère-t-il les appels d'offres publics et leurs cautions ?",
        a: "Oui, chaque dossier d'appel d'offres est suivi avec ses pièces administratives, techniques et financières, ses cautions bancaires et un compte à rebours avant le dépôt.",
      },
      {
        q: "Comment fonctionne l'allocation FEFO des commandes ?",
        a: "Lors de la préparation d'une commande, Medira propose automatiquement les lots les plus proches de péremption avec une justification affichée.",
      },
      {
        q: "Le portail client B2B est-il personnalisable par client ?",
        a: "Oui, chaque client voit ses propres tarifs négociés et son propre historique — totalement indépendant des autres comptes clients.",
      },
      {
        q: "Medira accompagne-t-il un rappel de produit fabricant ?",
        a: "Oui, le module Qualité & Rappels notifie automatiquement les clients concernés, suit les retours et calcule le taux d'efficacité du rappel.",
      },
      {
        q: "Peut-on suivre le SAV d'un équipement précis avec son numéro de série ?",
        a: "Oui, chaque ticket SAV se rattache à l'équipement exact installé chez le client, avec son numéro de série, sa garantie et son contrat de maintenance.",
      },
    ],
    audience: "Distributeurs et importateurs d'équipements et de consommables médicaux",
  },

  {
    slug: "medikara",
    name: "Medikara",
    badgeSet: "sante",
    related: ["medira", "dialya"],
    sector: "Industrie pharmaceutique & délégués médicaux",
    tagline: "Pilotez vos délégués médicaux, vos visites et vos objectifs depuis un seul tableau de bord.",
    seoTitle: "Medikara — Logiciel de gestion pour délégués médicaux et laboratoires pharmaceutiques au Maroc",
    seoDescription:
      "Medikara est le logiciel de gestion de la force de vente pharmaceutique au Maroc : planification des visites, suivi des délégués, reporting terrain, gestion des échantillons, CRM médecins et tableaux de bord direction.",
    pitch:
      "Vos délégués médicaux planifient leurs tournées sur WhatsApp, remplissent des rapports papier et les objectifs de visite se perdent dans des tableaux Excel ? Medikara centralise toute votre force de vente — planning, terrain, échantillons et reporting — pour que la direction pilote en temps réel et que chaque délégué se concentre sur ses médecins cibles.",
    longDescription:
      "Conçu pour les laboratoires pharmaceutiques et les grossistes-répartiteurs marocains, Medikara couvre le cycle complet de la visite médicale : segmentation et ciblage des médecins, planification des tournées par zone, saisie terrain des comptes-rendus de visite, gestion des échantillons et des dotations, suivi des objectifs par délégué et par produit, et reporting consolidé pour la direction des ventes. Le logiciel s'adresse aussi bien aux forces de vente internes qu'aux délégués externalisés.",
    stats: [
      { value: "10", label: "modules métier" },
      { value: "GPS", label: "validation des visites terrain" },
      { value: "100%", label: "reporting digitalisé" },
    ],
    modules: [
      {
        title: "Tableau de bord direction",
        text: "Une vue consolidée de toute la force de vente : taux de couverture médecins, objectifs atteints par produit et par délégué, visites du jour en cours — sans attendre le rapport de fin de semaine.",
        points: ["Taux de couverture médecins en temps réel", "Objectifs par produit et par délégué", "Visites du jour suivies en direct"],
        image: "/screenshots/medikara/tableau-de-bord.webp",
      },
      {
        title: "Ciblage & segmentation médecins",
        text: "Classez vos médecins par potentiel (A/B/C), spécialité et zone géographique. Chaque délégué voit sa liste de cibles prioritaires et la fréquence de visite recommandée.",
        points: ["Segmentation A/B/C par potentiel prescripteur", "Fréquence de visite par classe", "Historique des interactions par médecin"],
        image: "/screenshots/medikara/ciblage-medecins.webp",
      },
      {
        title: "Planning des tournées",
        text: "Chaque délégué planifie sa semaine sur l'application mobile : médecins à visiter, itinéraire optimisé et créneaux horaires — validés par le superviseur avant le départ.",
        points: ["Planning hebdomadaire par délégué", "Validation superviseur avant tournée", "Itinéraire optimisé par zone"],
        image: "/screenshots/medikara/planning-tournees.webp",
      },
      {
        title: "Comptes-rendus de visite",
        text: "Le délégué saisit son compte-rendu directement depuis son téléphone en fin de visite : produits présentés, réaction du médecin, demande d'échantillons et prochaine date.",
        points: ["Saisie mobile en fin de visite", "Produits présentés et réactions enregistrés", "Géolocalisation automatique de la visite"],
        image: "/screenshots/medikara/comptes-rendus-visite.webp",
      },
      {
        title: "Gestion des échantillons",
        text: "Stock d'échantillons alloué par délégué, suivi des remises médecin par visite et alertes de rupture — pour que chaque dotation soit traçable et conforme à la réglementation.",
        points: ["Stock alloué par délégué", "Remises médecin tracées par visite", "Alertes de rupture d'échantillons"],
        image: "/screenshots/medikara/gestion-echantillons.webp",
      },
      {
        title: "Objectifs & incentives",
        text: "Définissez les objectifs de vente par produit, par zone et par délégué. Le tableau de bord individuel montre en temps réel l'avancement et le bonus projeté.",
        points: ["Objectifs par produit et par période", "Suivi d'avancement individuel en temps réel", "Calcul automatique des incentives"],
        image: "/screenshots/medikara/objectifs-incentives.webp",
      },
      {
        title: "CRM médecins & pharmacies",
        text: "Une fiche complète pour chaque médecin et chaque pharmacie : coordonnées, spécialité, potentiel prescripteur, historique des visites et notes du délégué.",
        points: ["Fiche médecin avec historique complet", "Segmentation pharmacies par volume", "Notes et alertes par contact"],
        image: "/screenshots/medikara/crm-medecins.webp",
      },
      {
        title: "Reporting terrain",
        text: "Les rapports hebdomadaires et mensuels se génèrent automatiquement à partir des données saisies sur le terrain — plus besoin de les consolider manuellement chaque fin de semaine.",
        points: ["Rapport hebdomadaire automatique", "Analyse par produit et par zone", "Export PDF et Excel pour la direction"],
        image: "/screenshots/medikara/reporting-terrain.webp",
      },
      {
        title: "Superviseur & validation",
        text: "Le superviseur valide les plannings, contrôle les comptes-rendus, détecte les visites non effectuées et coache ses délégués depuis un tableau de bord dédié.",
        points: ["Validation des plannings avant tournée", "Détection des visites manquées", "Tableau de bord superviseur dédié"],
        image: "/screenshots/medikara/superviseur-validation.webp",
      },
      {
        title: "Paramètres & accès",
        text: "Gestion fine des profils (directeur des ventes, superviseur, délégué) avec des vues et des droits adaptés à chaque niveau hiérarchique.",
        points: ["Profils direction / superviseur / délégué", "Zones géographiques configurables", "Multi-laboratoires sur un seul compte"],
        image: "/screenshots/medikara/parametres-acces.webp",
      },
    ],
    patientApp: {
      title: "Application délégué — le terrain dans la poche",
      text: "Le délégué médical gère toute sa journée depuis son smartphone : liste des visites du jour, fiche médecin, compte-rendu en fin de visite et stock d'échantillons disponible. Aucun rapport papier, aucune ressaisie le soir.",
      points: [
        "Liste des visites du jour et itinéraire",
        "Fiche médecin complète avec historique",
        "Compte-rendu saisi en moins de 2 minutes",
        "Stock d'échantillons disponible en temps réel",
        "Synchronisation automatique avec le back-office",
      ],
      stats: [
        { value: "0", label: "rapport papier en fin de journée" },
        { value: "LIVE", label: "avancement des objectifs en direct" },
        { value: "-60%", label: "de temps de saisie administratif" },
      ],
    },
    features: [
      { title: "Tableau de bord direction", text: "Couverture, objectifs et visites en temps réel." },
      { title: "Ciblage médecins", text: "Segmentation A/B/C et fréquence de visite." },
      { title: "Planning tournées", text: "Hebdomadaire, validé par le superviseur." },
      { title: "Comptes-rendus mobile", text: "Saisie terrain géolocalisée en fin de visite." },
      { title: "Gestion échantillons", text: "Stock alloué par délégué, remises tracées." },
      { title: "Objectifs & incentives", text: "Avancement et bonus calculés en temps réel." },
      { title: "CRM médecins", text: "Fiche complète avec historique et notes." },
      { title: "Reporting automatique", text: "Rapports hebdomadaires sans saisie manuelle." },
      { title: "Superviseur & validation", text: "Contrôle des tournées et coaching." },
      { title: "Application délégué", text: "Tout le terrain géré depuis le smartphone." },
    ],
    trust: [
      { title: "Conçu pour le terrain marocain", text: "Zones, spécialités et contraintes du marché pharmaceutique marocain intégrées nativement." },
      { title: "Zéro rapport papier", text: "Tous les comptes-rendus saisis sur mobile, disponibles en temps réel pour la direction." },
      { title: "Objectifs toujours visibles", text: "Chaque délégué connaît son avancement en temps réel — plus d'attente du bilan de fin de mois." },
    ],
    faqs: [
      {
        q: "Medikara fonctionne-t-il pour des délégués externalisés ?",
        a: "Oui, vous pouvez créer des comptes délégués pour des forces de vente externalisées avec des droits limités à leur propre zone et leurs propres médecins cibles.",
      },
      {
        q: "Comment se valide une visite médicale ?",
        a: "Le délégué saisit son compte-rendu directement depuis l'application mobile en fin de visite. La géolocalisation est enregistrée automatiquement pour valider la présence sur le terrain.",
      },
      {
        q: "Peut-on suivre les objectifs par produit et par zone simultanément ?",
        a: "Oui, les objectifs sont configurables par produit, par zone géographique et par délégué, avec un tableau de bord croisé pour la direction des ventes.",
      },
      {
        q: "Comment fonctionne la gestion des échantillons ?",
        a: "Chaque délégué dispose d'un stock alloué visible depuis son application. Chaque remise d'échantillon est tracée par visite et par médecin, avec alerte de rupture automatique.",
      },
      {
        q: "Les données terrain sont-elles disponibles immédiatement pour la direction ?",
        a: "Oui, dès que le délégué soumet son compte-rendu depuis le terrain, les données sont disponibles en temps réel sur le tableau de bord de la direction et des superviseurs.",
      },
    ],
    audience: "Directeurs des ventes et superviseurs de laboratoires pharmaceutiques",
  },

  {
    slug: "restara",
    name: "Restara",
    badgeSet: "restauration",
    related: ["skolara", "batira"],
    sector: "Cafés, restaurants & restauration collective",
    tagline: "De la caisse à la cuisine, gérez toute votre salle depuis un seul écran.",
    seoTitle: "Restara — Logiciel de gestion pour restaurant et café au Maroc",
    seoDescription:
      "Restara est le logiciel de gestion pour restaurants et cafés au Maroc : caisse tactile, commandes en salle, gestion des tables, stock cuisine, fiches techniques, fidélité client et reporting journalier.",
    pitch:
      "Vos serveurs prennent les commandes sur papier, votre caisse ne parle pas à la cuisine et votre stock se fait à l'œil ? Restara connecte la salle, la cuisine et la caisse dans un seul outil — pour que vous passiez moins de temps à gérer et plus de temps avec vos clients.",
    longDescription:
      "Conçu pour les restaurants, cafés et établissements de restauration collective marocains, Restara couvre le cycle complet du service : prise de commande en salle sur tablette, transmission instantanée en cuisine, gestion des tables et du plan de salle, caisse tactile avec paiement fractionné, stock et fiches techniques par plat, programme de fidélité et reporting journalier. Le logiciel s'adapte aussi bien à un café de quartier qu'à un restaurant gastronomique ou une chaîne multi-établissements.",
    stats: [
      { value: "9", label: "modules métier" },
      { value: "< 30s", label: "commande transmise en cuisine" },
      { value: "100%", label: "caisse digitalisée" },
    ],
    modules: [
      {
        title: "Tableau de bord",
        text: "Le chiffre d'affaires du jour, les tables occupées, les commandes en cours et les plats les plus vendus — visibles en un coup d'œil dès l'ouverture du service.",
        points: ["CA du jour et comparaison J-1", "Tables occupées et taux de remplissage", "Top plats et alertes stock cuisine"],
        image: "/screenshots/restara/tableau-de-bord.webp",
      },
      {
        title: "Plan de salle & tables",
        text: "Un plan de salle interactif : voyez en temps réel quelles tables sont libres, occupées ou en attente d'addition. Affectez les serveurs et suivez la durée de chaque service.",
        points: ["Plan de salle configurable", "Statut des tables en temps réel", "Affectation des serveurs par zone"],
        image: "/screenshots/restara/plan-de-salle.webp",
      },
      {
        title: "Prise de commande en salle",
        text: "Le serveur prend la commande sur tablette ou smartphone : la commande part instantanément en cuisine avec les modifications et les allergènes signalés, sans passer par la caisse.",
        points: ["Commande sur tablette ou mobile", "Transmission instantanée en cuisine", "Modifications et allergènes signalés"],
        image: "/screenshots/restara/prise-de-commande.webp",
      },
      {
        title: "Gestion cuisine (KDS)",
        text: "Un écran dédié en cuisine affiche les commandes par ordre d'arrivée, avec la priorité des plats et le temps écoulé — pour que chaque table soit servie dans les temps.",
        points: ["Écran cuisine (KDS) dédié", "Priorité et temps par commande", "Synchronisation automatique avec la salle"],
        image: "/screenshots/restara/ecran-cuisine-kds.webp",
      },
      {
        title: "Caisse & paiements",
        text: "Caisse tactile rapide avec paiement fractionné entre convives, gestion des additions partielles, espèces, carte et virement — et clôture de caisse automatique en fin de service.",
        points: ["Paiement fractionné entre convives", "Espèces, carte, virement", "Clôture de caisse automatique"],
        image: "/screenshots/restara/caisse-paiements.webp",
      },
      {
        title: "Carte & fiches techniques",
        text: "Chaque plat dispose d'une fiche technique avec ses ingrédients et leurs coûts. Restara calcule automatiquement votre marge par plat et vous alerte si un prix de revient dépasse votre seuil.",
        points: ["Fiches techniques par plat", "Coût de revient calculé automatiquement", "Alerte si marge insuffisante"],
        image: "/screenshots/restara/carte-fiches-techniques.webp",
      },
      {
        title: "Stock & approvisionnements",
        text: "Les ingrédients se déduisent automatiquement du stock à chaque commande. Vous recevez une alerte quand un article atteint le seuil minimum — sans avoir à compter manuellement.",
        points: ["Déduction automatique à chaque commande", "Alertes de seuil minimum", "Bons de commande fournisseur générés"],
        image: "/screenshots/restara/stock-approvisionnements.webp",
      },
      {
        title: "Fidélité & clients",
        text: "Un programme de fidélité simple : le client cumule des points à chaque visite et les convertit en avantages. Identifiez vos meilleurs clients et leurs habitudes de consommation.",
        points: ["Cumul de points par visite", "Conversion en réductions ou cadeaux", "Historique des visites par client"],
        image: "/screenshots/restara/fidelite-clients.webp",
      },
      {
        title: "Reporting & analyses",
        text: "CA par période, performance par serveur, plats les plus et les moins vendus, heures de pointe et taux de remplissage — pour prendre les bonnes décisions sur votre carte et votre équipe.",
        points: ["CA par période et par serveur", "Analyse des plats et des heures de pointe", "Export pour votre comptable"],
        image: "/screenshots/restara/reporting-analyses.webp",
      },
    ],
    patientApp: {
      title: "Menu digital & commande en ligne",
      text: "Vos clients scannent un QR code sur la table pour consulter la carte, passer leur commande et appeler le serveur — depuis leur propre téléphone. Idéal pour réduire l'attente aux heures de pointe et proposer une expérience moderne.",
      image: "/screenshots/restara/menu-digital-qr.webp",
      points: [
        "QR code par table, aucune application à installer",
        "Commande depuis le téléphone du client",
        "Appel serveur intégré",
        "Menu mis à jour en temps réel depuis le back-office",
        "Disponible en français, arabe et anglais",
      ],
      stats: [
        { value: "-40%", label: "d'attente pour la prise de commande" },
        { value: "0", label: "application à installer pour le client" },
        { value: "3", label: "langues disponibles sur le menu digital" },
      ],
    },
    features: [
      { title: "Tableau de bord", text: "CA du jour, tables et top plats en un coup d'œil." },
      { title: "Plan de salle", text: "Statut des tables en temps réel." },
      { title: "Prise de commande", text: "Sur tablette, transmise instantanément en cuisine." },
      { title: "Écran cuisine (KDS)", text: "Commandes affichées par priorité et par temps." },
      { title: "Caisse & paiements", text: "Fractionné, espèces, carte, clôture automatique." },
      { title: "Carte & fiches techniques", text: "Coût de revient et marge par plat." },
      { title: "Stock & approvisionnements", text: "Déduction automatique, alertes de seuil." },
      { title: "Fidélité clients", text: "Points, réductions et historique des visites." },
      { title: "Reporting", text: "CA, performance serveurs et analyse des plats." },
      { title: "Menu digital QR", text: "Commande depuis le téléphone du client." },
    ],
    trust: [
      { title: "Salle et cuisine connectées", text: "La commande part en cuisine en moins de 30 secondes, sans erreur de transmission entre le serveur et le cuisinier." },
      { title: "Stock piloté automatiquement", text: "Chaque plat vendu déduit ses ingrédients du stock — vous savez toujours ce qu'il vous reste avant le service." },
      { title: "Adapté à toutes les tailles", text: "Du café de quartier à la chaîne multi-établissements, Restara s'adapte à votre configuration." },
    ],
    faqs: [
      {
        q: "Restara fonctionne-t-il sans connexion internet ?",
        a: "Oui, Restara dispose d'un mode hors-ligne pour la prise de commande et la caisse. Les données se synchronisent automatiquement dès que la connexion est rétablie.",
      },
      {
        q: "Peut-on gérer plusieurs établissements avec un seul compte ?",
        a: "Oui, chaque établissement a son propre espace avec sa carte, son stock et ses rapports — et la direction dispose d'une vue consolidée sur l'ensemble du réseau.",
      },
      {
        q: "Le menu digital QR nécessite-t-il une application pour le client ?",
        a: "Non, le client scanne simplement le QR code avec l'appareil photo de son téléphone et accède au menu dans son navigateur — aucune installation n'est requise.",
      },
      {
        q: "Les fiches techniques sont-elles obligatoires pour utiliser le stock ?",
        a: "Non, vous pouvez utiliser la caisse et le stock sans configurer les fiches techniques. Elles sont optionnelles mais très utiles pour suivre vos marges par plat.",
      },
      {
        q: "Comment fonctionne la clôture de caisse ?",
        a: "En fin de service, Restara génère automatiquement le rapport de caisse avec le détail des paiements par mode (espèces, carte, virement) et l'écart éventuel avec le fond de caisse.",
      },
    ],
    audience: "Gérants de restaurants, cafés et établissements de restauration",
  },

  {
    slug: "batira",
    name: "Batira",
    badgeSet: "btp",
    related: ["restara", "skolara"],
    sector: "BTP & promotion immobilière",
    tagline: "Pilotez vos chantiers, vos sous-traitants et vos programmes immobiliers depuis un seul outil.",
    seoTitle: "Batira — Logiciel de gestion pour entreprises BTP et promoteurs immobiliers au Maroc",
    seoDescription:
      "Batira est le logiciel de gestion pour le BTP et la promotion immobilière au Maroc : suivi de chantier, planification, sous-traitants, états d'avancement, facturation travaux et portail acquéreur.",
    pitch:
      "Vos chantiers sont suivis sur des fichiers Excel, vos sous-traitants relancés par WhatsApp et vos états d'avancement préparés manuellement chaque fin de mois ? Batira centralise tout — planification, terrain, sous-traitants et facturation — pour que vous pilotiez en temps réel sans réunion de coordination interminable.",
    longDescription:
      "Conçu pour les entreprises BTP et les promoteurs immobiliers marocains, Batira couvre le cycle complet d'un projet de construction : de la planification initiale au suivi d'avancement sur le terrain, en passant par la gestion des sous-traitants, le contrôle des coûts, la facturation des travaux et le portail acquéreur pour les programmes résidentiels. Le logiciel s'adresse aussi bien aux PME du BTP qu'aux promoteurs gérant plusieurs programmes simultanément.",
    stats: [
      { value: "10", label: "modules métier" },
      { value: "LIVE", label: "avancement chantier en temps réel" },
      { value: "100%", label: "sous-traitants digitalisés" },
    ],
    modules: [
      {
        title: "Tableau de bord",
        text: "Une vue d'ensemble de tous vos projets actifs : avancement global, coûts engagés vs budget, jalons à venir et alertes de retard — sans attendre le rapport de fin de mois.",
        points: ["Avancement global par projet", "Coûts engagés vs budget alloué", "Alertes de retard et jalons critiques"],
        image: "/screenshots/batira/tableau-de-bord.webp",
      },
      {
        title: "Planification des travaux",
        text: "Un planning Gantt par projet avec les phases, les lots de travaux et les jalons clés. Visualisez les dépendances entre tâches et identifiez immédiatement les risques de retard.",
        points: ["Planning Gantt par phase et par lot", "Dépendances entre tâches", "Chemin critique identifié automatiquement"],
        image: "/screenshots/batira/planification-travaux.webp",
      },
      {
        title: "Suivi d'avancement terrain",
        text: "Le chef de chantier saisit l'avancement directement depuis le terrain via l'application mobile : pourcentage d'avancement par tâche, photos horodatées et incidents signalés.",
        points: ["Saisie mobile sur le terrain", "Photos horodatées par lot de travaux", "Incidents et réserves signalés"],
        image: "/screenshots/batira/suivi-avancement-terrain.webp",
      },
      {
        title: "Gestion des sous-traitants",
        text: "Un registre complet de vos sous-traitants avec leurs marchés, leurs situations de travaux mensuelles et le suivi de leurs paiements — pour ne jamais perdre le fil d'un contrat.",
        points: ["Marchés et avenants par sous-traitant", "Situations de travaux mensuelles", "Suivi des paiements et retenues de garantie"],
        image: "/screenshots/batira/gestion-sous-traitants.webp",
      },
      {
        title: "Contrôle des coûts",
        text: "Chaque dépense est rattachée à un lot de travaux et comparée au budget initial. Les écarts sont signalés en temps réel avant qu'ils ne deviennent incontrôlables.",
        points: ["Dépenses rattachées par lot", "Comparaison budget vs réalisé en temps réel", "Alertes de dépassement par lot"],
        image: "/screenshots/batira/controle-des-couts.webp",
      },
      {
        title: "Facturation travaux",
        text: "Situations de travaux, décomptes mensuels et factures générés automatiquement selon l'avancement réel — avec retenues de garantie et délais de règlement conformes aux pratiques marocaines.",
        points: ["Décomptes mensuels automatiques", "Retenues de garantie intégrées", "Délais de règlement par maître d'ouvrage"],
        image: "/screenshots/batira/facturation-travaux.webp",
      },
      {
        title: "Documents & plans",
        text: "Centralisez tous les documents de chantier — plans, CCTP, PV de réception, DOE — par projet et par lot, accessibles à toute l'équipe depuis le bureau ou le terrain.",
        points: ["Documents centralisés par projet", "Versionnement des plans", "Accès mobile sur le terrain"],
        image: "/screenshots/batira/documents-plans.webp",
      },
      {
        title: "Appels d'offres & marchés",
        text: "Consultations, remise des offres, comparatifs de prix et attribution des marchés — tout le processus d'appel d'offres dans un seul outil, avec traçabilité complète.",
        points: ["Consultation des sous-traitants", "Comparatif d'offres par lot", "Attribution et notification automatique"],
        image: "/screenshots/batira/appels-offres.webp",
      },
      {
        title: "Portail acquéreur",
        text: "Pour les promoteurs immobiliers : vos acquéreurs suivent l'avancement de leur logement, consultent le planning prévisionnel de livraison et reçoivent les appels de fonds directement depuis leur espace personnel.",
        points: ["Avancement du logement visible par l'acquéreur", "Appels de fonds notifiés automatiquement", "Documents de vente accessibles en ligne"],
        image: "/screenshots/batira/portail-acquereur.webp",
      },
      {
        title: "Reporting & analyses",
        text: "Rentabilité par programme, performance par chantier et tableau de bord multi-projets — pour piloter votre portefeuille de chantiers avec des chiffres à jour.",
        points: ["Rentabilité par programme", "Performance par chantier et par chef de projet", "Export pour vos partenaires bancaires"],
        image: "/screenshots/batira/reporting-analyses.webp",
      },
    ],
    patientApp: {
      title: "Application terrain — le chantier dans la poche",
      text: "Le chef de chantier ou le conducteur de travaux gère son projet depuis le terrain : saisie de l'avancement, photos horodatées, signalement d'incidents et consultation des plans — sans retour au bureau.",
      points: [
        "Avancement saisi par lot depuis le mobile",
        "Photos horodatées et géolocalisées",
        "Plans consultables hors connexion",
        "Incidents et réserves signalés en temps réel",
        "Synchronisation automatique avec le back-office",
      ],
      stats: [
        { value: "0", label: "déplacement bureau pour signaler un incident" },
        { value: "LIVE", label: "avancement visible par la direction" },
        { value: "-50%", label: "de temps de reporting mensuel" },
      ],
    },
    features: [
      { title: "Tableau de bord", text: "Avancement, coûts et alertes de tous vos projets." },
      { title: "Planning Gantt", text: "Phases, lots et chemin critique identifiés." },
      { title: "Suivi terrain mobile", text: "Avancement et photos horodatées depuis le chantier." },
      { title: "Sous-traitants", text: "Marchés, situations et paiements centralisés." },
      { title: "Contrôle des coûts", text: "Budget vs réalisé en temps réel, alertes de dépassement." },
      { title: "Facturation travaux", text: "Décomptes automatiques, retenues de garantie." },
      { title: "Documents & plans", text: "Centralisés par projet, accessibles sur le terrain." },
      { title: "Appels d'offres", text: "Consultation, comparatif et attribution des marchés." },
      { title: "Portail acquéreur", text: "Avancement et appels de fonds pour vos acheteurs." },
      { title: "Reporting", text: "Rentabilité par programme et performance par chantier." },
    ],
    trust: [
      { title: "Construit pour le BTP marocain", text: "Retenues de garantie, délais de règlement et pratiques contractuelles du marché marocain intégrés nativement." },
      { title: "Terrain et bureau connectés", text: "L'avancement saisi sur le terrain est visible en temps réel par la direction — sans attendre le rapport hebdomadaire." },
      { title: "Coûts toujours sous contrôle", text: "Chaque dépense est comparée au budget en temps réel — les dépassements sont signalés avant qu'il ne soit trop tard." },
    ],
    faqs: [
      {
        q: "Batira convient-il aux petites entreprises BTP comme aux grands promoteurs ?",
        a: "Oui, Batira s'adapte à votre taille : une PME du BTP utilisera le suivi de chantier et les sous-traitants, un promoteur activera en plus le portail acquéreur et le suivi multi-programmes.",
      },
      {
        q: "Comment fonctionne le suivi d'avancement terrain ?",
        a: "Le chef de chantier saisit le pourcentage d'avancement par tâche ou par lot depuis son smartphone, avec des photos horodatées. Les données sont visibles immédiatement par la direction.",
      },
      {
        q: "Le portail acquéreur nécessite-t-il un compte pour chaque acheteur ?",
        a: "Oui, chaque acquéreur reçoit un accès personnel à son espace, où il voit uniquement son logement, son planning prévisionnel et ses appels de fonds.",
      },
      {
        q: "Peut-on gérer plusieurs programmes simultanément ?",
        a: "Oui, Batira est conçu pour la gestion multi-projets : chaque programme a son propre planning, son budget et ses sous-traitants, avec une vue consolidée pour la direction.",
      },
      {
        q: "Les documents de chantier sont-ils accessibles hors connexion ?",
        a: "Oui, les plans et les documents téléchargés sur l'application mobile restent accessibles même sans connexion internet sur le chantier.",
      },
    ],
    audience: "Dirigeants d'entreprises BTP et promoteurs immobiliers",
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SKOLARA — Optimisé SEO rentrée 2026
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: "skolara",
    name: "Skolara",
    badgeSet: "education",
    related: ["restara", "batira"],
    sector: "Écoles, lycées & établissements préscolaires",
    tagline: "Gérez votre établissement, vos élèves et vos parents depuis une seule plateforme.",

    seoTitle: "Skolara — Logiciel de Gestion Scolaire pour Écoles Privées au Maroc | Errendis",
    seoDescription:
      "Adoptez Skolara avant la rentrée 2026 : inscriptions, emplois du temps, absences, bulletins et paiements gérés en une seule plateforme. Adopté par le Groupe Michelet, L'Empreinte Mohammedia et EFV Management. Demandez une démo gratuite.",

    pitch:
      "Le Groupe Scolaire Michelet, l'École L'Empreinte Mohammedia, EFV Management et La Canadienne ont fait confiance à Skolara pour digitaliser leur gestion avant la dernière rentrée. Skolara connecte votre administration, vos enseignants et vos parents dans une seule plateforme — inscriptions, emplois du temps, absences, notes, bulletins et paiements — pour que votre équipe passe moins de temps à gérer et plus de temps à enseigner.",

    longDescription:
      "Conçu pour les établissements scolaires privés marocains — écoles primaires, collèges, lycées et crèches — Skolara couvre le cycle complet de la vie scolaire : inscriptions et dossiers élèves, emplois du temps et gestion des salles, saisie des absences et retards avec notification immédiate aux parents, notes et bulletins personnalisables, communication avec les parents, paiements des frais de scolarité et application famille incluse. Le logiciel s'adresse aussi bien aux petites structures indépendantes qu'aux réseaux d'établissements multi-sites au Maroc.",

    stats: [
      { value: "10", label: "modules métier inclus" },
      { value: "< 2 min", label: "pour saisir les absences d'une classe" },
      { value: "100%", label: "bulletins générés automatiquement" },
    ],

    modules: [
      {
        title: "Tableau de bord direction",
        text: "Effectifs par niveau, taux de présence du jour, paiements en retard et alertes prioritaires — tout ce que la direction a besoin de voir dès le matin, sans ouvrir plusieurs fichiers.",
        points: ["Effectifs et taux de présence en temps réel", "Paiements en retard centralisés", "Alertes administratives prioritaires"],
        image: "/screenshots/skolara/tableau-de-bord.webp",
      },
      {
        title: "Inscriptions & dossiers élèves",
        text: "Le dossier complet de chaque élève : informations personnelles, contacts des parents, documents administratifs, historique scolaire et allergies ou besoins particuliers.",
        points: ["Dossier élève complet et centralisé", "Documents administratifs attachés", "Historique scolaire sur plusieurs années"],
        image: "/screenshots/skolara/inscriptions-eleves.webp",
      },
      {
        title: "Emplois du temps",
        text: "Construisez les emplois du temps de chaque classe en évitant automatiquement les conflits de salles et d'enseignants. Modifiez en quelques clics en cas de changement de dernière minute avant la rentrée.",
        points: ["Détection automatique des conflits", "Vue par classe, par enseignant et par salle", "Modification rapide en cas d'imprévu"],
        image: "/screenshots/skolara/emplois-du-temps.webp",
      },
      {
        title: "Absences & retards",
        text: "L'enseignant saisit les absences depuis son téléphone ou la tablette de classe : les parents reçoivent une notification immédiate, et l'administration voit les absences de toute l'école en temps réel.",
        points: ["Saisie mobile par l'enseignant", "Notification immédiate aux parents", "Vue globale des absences par classe"],
        image: "/screenshots/skolara/absences-retards.webp",
      },
      {
        title: "Notes & évaluations",
        text: "Saisie des notes par matière et par enseignant, calcul automatique des moyennes et génération des bulletins scolaires — personnalisables selon votre maquette d'établissement.",
        points: ["Saisie des notes par matière", "Calcul automatique des moyennes", "Bulletins générés en un clic"],
        image: "/screenshots/skolara/notes-evaluations.webp",
      },
      {
        title: "Communication parents",
        text: "Envoyez des messages, des circulaires et des convocations aux parents directement depuis Skolara — par notification push, SMS ou email — sans passer par WhatsApp ou des imprimés.",
        points: ["Messages individuels ou groupes par classe", "Circulaires et convocations envoyées depuis l'appli", "Accusé de lecture par parent"],
        image: "/screenshots/skolara/communication-parents.webp",
      },
      {
        title: "Paiements & scolarité",
        text: "Suivez les paiements des frais de scolarité par élève : échéancier personnalisé, alertes de retard et reçus générés automatiquement — pour ne plus perdre de temps à relancer manuellement.",
        points: ["Échéancier personnalisé par famille", "Alertes automatiques de retard de paiement", "Reçus générés et envoyés automatiquement"],
        image: "/screenshots/skolara/paiements-scolarite.webp",
      },
      {
        title: "Gestion des enseignants",
        text: "Fiches enseignants, contrats, planning de cours et suivi des heures effectuées — pour piloter votre équipe pédagogique sans jongler entre plusieurs tableaux Excel.",
        points: ["Fiche enseignant avec planning", "Suivi des heures effectuées", "Contrats et documents centralisés"],
        image: "/screenshots/skolara/gestion-enseignants.webp",
      },
      {
        title: "Cantine & activités",
        text: "Gestion des inscriptions à la cantine, au transport scolaire et aux activités parascolaires, avec suivi des paiements et des présences pour chaque service.",
        points: ["Inscriptions cantine, transport, activités", "Présences suivies par service", "Facturation par service souscrit"],
        image: "/screenshots/skolara/cantine-activites.webp",
      },
      {
        title: "Rapports & statistiques",
        text: "Taux de présence par classe, résultats scolaires par niveau et situation des paiements — des rapports clairs pour piloter votre établissement et préparer vos conseils de classe.",
        points: ["Taux de présence par classe et par matière", "Résultats scolaires par niveau", "Situation financière de l'établissement"],
        image: "/screenshots/skolara/reporting-statistiques.webp",
      },
    ],

    patientApp: {
      title: "Application famille — l'école dans la poche des parents",
      text: "Les parents suivent la vie scolaire de leur enfant depuis leur smartphone : absences en temps réel, notes et bulletins dès leur publication, messages de l'école et paiements des frais — sans appeler le secrétariat.",
      points: [
        "Absences notifiées immédiatement sur le téléphone",
        "Notes et bulletins disponibles dès publication",
        "Messages de l'école reçus et envoyés depuis l'appli",
        "Paiements des frais de scolarité depuis le mobile",
        "Planning de l'enfant visible à tout moment",
      ],
      stats: [
        { value: "0", label: "appel au secrétariat pour une absence" },
        { value: "LIVE", label: "notification dès que l'enfant est absent" },
        { value: "100%", label: "bulletins accessibles en ligne" },
      ],
    },

    features: [
      { title: "Tableau de bord", text: "Effectifs, présences et alertes de la direction." },
      { title: "Dossiers élèves", text: "Complets, centralisés, accessibles en un clic." },
      { title: "Emplois du temps", text: "Sans conflit, modifiables en quelques clics." },
      { title: "Absences & retards", text: "Saisie mobile, notification immédiate aux parents." },
      { title: "Notes & bulletins", text: "Moyennes calculées et bulletins générés automatiquement." },
      { title: "Communication parents", text: "Messages, circulaires et convocations depuis l'appli." },
      { title: "Paiements scolarité", text: "Échéanciers, alertes et reçus automatiques." },
      { title: "Gestion enseignants", text: "Planning, heures et contrats centralisés." },
      { title: "Cantine & activités", text: "Inscriptions et paiements par service." },
      { title: "Application famille", text: "L'école dans la poche des parents." },
    ],

    trust: [
      {
        title: "Adopté par des établissements marocains reconnus",
        text: "Le Groupe Scolaire Michelet, l'École L'Empreinte Mohammedia, EFV Management et La Canadienne ont choisi Skolara pour gérer leur établissement au quotidien.",
      },
      {
        title: "Parents toujours informés",
        text: "Chaque absence, chaque note et chaque message de l'école est notifié immédiatement aux parents — sans intermédiaire, sans appel au secrétariat.",
      },
      {
        title: "Administration allégée dès la rentrée",
        text: "Bulletins, reçus et circulaires générés automatiquement. Mise en service en quelques jours — idéal pour être opérationnel avant septembre.",
      },
      {
        title: "Adapté aux établissements marocains",
        text: "Calendrier scolaire, maquette de bulletin et langues (français/arabe) conformes aux pratiques des établissements privés marocains.",
      },
    ],

    faqs: [
      {
        q: "Qu'est-ce que Skolara ?",
        a: "Skolara est un logiciel de gestion scolaire en ligne conçu pour les établissements privés marocains. Il centralise les inscriptions, les emplois du temps, les absences, les notes, les bulletins, la communication avec les parents et les paiements des frais de scolarité dans une seule plateforme accessible depuis n'importe quel appareil.",
      },
      {
        q: "Skolara est-il adapté aux écoles privées marocaines ?",
        a: "Oui, Skolara a été conçu spécifiquement pour les établissements scolaires privés au Maroc. Il intègre le calendrier scolaire marocain, les maquettes de bulletins conformes aux pratiques locales et prend en charge le français et l'arabe. Il est déjà utilisé par des établissements comme le Groupe Scolaire Michelet et l'École L'Empreinte Mohammedia.",
      },
      {
        q: "Peut-on mettre en place Skolara avant la rentrée scolaire ?",
        a: "Oui, la mise en service de Skolara prend quelques jours. Nous reprenons vos données existantes (élèves, classes, enseignants) et vous accompagnons pour que votre équipe soit opérationnelle avant la rentrée. Contactez-nous dès maintenant pour un déploiement avant septembre.",
      },
      {
        q: "Comment les parents sont-ils notifiés des absences ?",
        a: "Dès que l'enseignant saisit une absence depuis son téléphone ou la tablette de classe, les parents de l'élève concerné reçoivent une notification push sur l'application famille Skolara. Ils peuvent également consulter l'historique complet des absences et des retards de leur enfant à tout moment.",
      },
      {
        q: "Les bulletins scolaires sont-ils personnalisables selon notre maquette ?",
        a: "Oui, la maquette du bulletin (logo de l'établissement, matières, coefficients, mentions, appréciations) est entièrement configurable selon vos standards. Une fois paramétrée, les bulletins se génèrent automatiquement en un clic à chaque fin de trimestre.",
      },
      {
        q: "Comment fonctionne le suivi des paiements de scolarité ?",
        a: "Chaque famille dispose d'un échéancier de paiement personnalisé. Skolara envoie des rappels automatiques avant chaque échéance et génère les reçus dès réception du règlement. La direction dispose d'un tableau de bord des impayés mis à jour en temps réel.",
      },
      {
        q: "Skolara convient-il aux crèches et aux établissements préscolaires ?",
        a: "Oui, Skolara dispose d'un mode préscolaire adapté avec suivi des activités journalières, communication renforcée avec les parents et gestion de la cantine et des siestes pour les plus jeunes.",
      },
      {
        q: "Les parents doivent-ils installer une application pour accéder à Skolara ?",
        a: "L'application famille Skolara est disponible sur iOS et Android et s'installe facilement depuis l'App Store ou Google Play. Une version web est également accessible depuis n'importe quel navigateur pour les parents qui préfèrent ne pas installer d'application.",
      },
      {
        q: "Peut-on gérer plusieurs établissements avec un seul compte Skolara ?",
        a: "Oui, les réseaux d'écoles et les groupes scolaires peuvent gérer plusieurs établissements depuis une même interface. Chaque établissement conserve ses propres données, emplois du temps et bulletins, avec une vue consolidée pour la direction du réseau.",
      },
      {
        q: "Comment les enseignants saisissent-ils les absences ?",
        a: "Les enseignants accèdent à leur liste de classe depuis leur smartphone ou une tablette de classe et cochent les élèves absents en début de cours. L'opération prend moins de deux minutes et les parents sont notifiés immédiatement, sans intervention de l'administration.",
      },
      {
        q: "Skolara remplace-t-il les outils actuels comme Excel ou les cahiers papier ?",
        a: "Oui, Skolara remplace les registres papier, les fichiers Excel dispersés et les groupes WhatsApp utilisés pour la communication. La transition est accompagnée : nous reprenons vos données existantes et formons votre équipe pour une adoption rapide dès la rentrée.",
      },
      {
        q: "Quel est le coût de Skolara pour un établissement scolaire marocain ?",
        a: "Le tarif de Skolara est calculé selon la taille de votre établissement et les modules activés. Nous proposons une démonstration gratuite sans engagement pour vous présenter la plateforme adaptée à votre configuration. Contactez-nous pour obtenir un devis personnalisé.",
      },
    ],

    audience: "Directeurs et gestionnaires d'établissements scolaires privés",
  },
];

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}