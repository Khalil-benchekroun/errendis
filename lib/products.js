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
    slug: 'labya',
    name: 'Labya',
    badgeSet: 'sante',
    sector: 'Laboratoires d\u2019analyses médicales',
    tagline: 'Le système d\u2019information complet pour laboratoires de biologie médicale.',
    seoTitle: 'Labya — Logiciel de gestion pour laboratoire d\u2019analyses médicales au Maroc',
    seoDescription:
      'Labya est le logiciel de gestion pour laboratoires de biologie médicale au Maroc : réception, connexion automates, validation biologique, portail médecin prescripteur, application patient et facturation AMO/CNOPS/CNSS.',
    pitch:
      'De la réception du patient à la remise des résultats, Labya couvre tout le parcours de votre laboratoire — connexion directe à vos automates, validation biologique assistée, portail dédié à vos médecins prescripteurs et application mobile pour vos patients.',
    longDescription:
      'Labya s\u2019adresse aux laboratoires d\u2019analyses médicales marocains qui gèrent encore leur activité sur des registres papier et des fichiers Excel dispersés entre la réception, la paillasse et la facturation. Le logiciel couvre la biologie clinique de bout en bout : réception et prescriptions, suivi des échantillons par code-barres, connexion directe aux automates (Cobas, Sysmex, Architect, VIDAS...) pour éliminer la ressaisie, validation biologique avec alertes sur les valeurs critiques, gestion des réactifs et de la métrologie pour la conformité ISO 15189/GBEA, et facturation AMO/CNOPS/CNSS native. Un portail dédié à vos médecins prescripteurs et une application mobile pour vos patients complètent l\u2019ensemble.',
    stats: [
      { value: '13', label: 'modules métier' },
      { value: '4', label: 'automates connectés en direct' },
      { value: 'ISO', label: '15189 · conformité GBEA' },
    ],
    modules: [
      {
        title: 'Tableau de bord',
        text: 'Une vue d\u2019ensemble du laboratoire dès la connexion : dossiers du jour, résultats en attente de validation et état des automates, visibles en un coup d\u2019œil.',
        points: ['Indicateurs clés en temps réel', 'Alertes prioritaires centralisées', 'Accès rapide à chaque module'],
        image: '/screenshots/labya/tableau-de-bord.png',
      },
      {
        title: 'Réception & prescriptions',
        text: 'Scannez l\u2019ordonnance du patient : le dossier se crée automatiquement avec les analyses détectées, le médecin prescripteur et l\u2019organisme de prise en charge.',
        points: ['Scan d\u2019ordonnance avec pré-remplissage', 'Détection automatique des analyses', 'Organisme de prise en charge identifié'],
        image: '/screenshots/labya/reception-prescriptions.png',
      },
      {
        title: 'Suivi des échantillons',
        text: 'Chaque tube est tracé par code-barres, de la réception au résultat final, avec un statut clair visible par toute l\u2019équipe.',
        points: ['Traçabilité code-barres complète', 'Statuts en temps réel par poste', 'Historique complet du tube'],
        image: '/screenshots/labya/echantillons.png',
      },
      {
        title: 'Connexion automates',
        text: 'Une connexion directe à vos automates (Cobas, Sysmex, Architect, VIDAS) récupère les résultats automatiquement — zéro ressaisie, zéro erreur de transcription.',
        points: ['Connexion RS232 et réseau LAN', 'Récupération automatique des résultats', 'Alerte en cas de déconnexion automate'],
        image: '/screenshots/labya/automates.png',
      },
      {
        title: 'Validation biologique',
        text: 'Les résultats sont présentés avec leurs valeurs usuelles, les valeurs critiques sont signalées et le médecin prescripteur est notifié automatiquement.',
        points: ['Valeurs usuelles par âge/sexe', 'Alertes sur valeurs critiques', 'Notification automatique du prescripteur'],
        image: '/screenshots/labya/validation-biologique.png',
      },
      {
        title: 'Stock & réactifs',
        text: 'Suivi des réactifs avec alertes de péremption et de seuil critique, pour ne jamais être pris au dépourvu avant une commande fournisseur.',
        points: ['Alertes de péremption', 'Seuils critiques par réactif', 'Historique des réceptions fournisseur'],
        image: '/screenshots/labya/stock-reactifs.png',
      },
      {
        title: 'Qualité & métrologie',
        text: 'Le suivi des étalonnages et de la maintenance des équipements soutient votre conformité ISO 15189 et GBEA, prêt pour vos audits.',
        points: ['Suivi des étalonnages par équipement', 'Échéances de maintenance', 'Historique prêt pour audit qualité'],
        image: '/screenshots/labya/qualite-metrologie.png',
      },
      {
        title: 'Facturation AMO, CNOPS, CNSS',
        text: 'Tiers payant, mutuelles et bordereaux organismes gérés nativement, avec suivi des rejets et rapprochement des règlements.',
        points: ['Tiers payant automatisé', 'Bordereaux CNOPS/CNSS/AMO Tadamon', 'Suivi et correction des rejets'],
        image: '/screenshots/labya/facturation-amo.png',
      },
      {
        title: 'Business Intelligence',
        text: 'Volumes par type d\u2019analyse, temps de rendu moyen (TAT) et taux de rejet suivis dans le temps, pour piloter la performance du laboratoire.',
        points: ['TAT moyen par poste', 'Volumes par type d\u2019analyse', 'Taux de rejet suivi dans le temps'],
        image: '/screenshots/labya/rapports-bi.png',
      },
    ],
    patientApp: {
      title: 'Application patient — vos résultats en poche',
      text: 'Vos patients consultent leurs résultats dès leur validation, retrouvent leur historique et peuvent contacter le laboratoire directement depuis leur téléphone — sans appeler pour savoir si le résultat est prêt.',
      image: '/screenshots/labya/portail-patient-app.png',
      points: [
        'Résultats disponibles dès validation',
        'Historique complet des analyses',
        'Notification automatique de disponibilité',
        'Contact direct avec le laboratoire',
        'Accès sécurisé par le patient uniquement',
      ],
      stats: [
        { value: '0', label: 'appel nécessaire pour un résultat' },
        { value: 'LIVE', label: 'notification dès validation' },
        { value: '100%', label: 'accès sécurisé patient' },
      ],
    },
    features: [
      { title: 'Tableau de bord', text: 'Vue d\u2019ensemble du laboratoire en un coup d\u2019œil.' },
      { title: 'Réception & prescriptions', text: 'Scan d\u2019ordonnance, dossier créé automatiquement.' },
      { title: 'Suivi des échantillons', text: 'Traçabilité code-barres complète.' },
      { title: 'Connexion automates', text: 'Résultats récupérés automatiquement, zéro ressaisie.' },
      { title: 'Validation biologique', text: 'Alertes sur valeurs critiques, notification prescripteur.' },
      { title: 'Stock & réactifs', text: 'Alertes de péremption et de seuil critique.' },
      { title: 'Qualité & métrologie', text: 'Conformité ISO 15189 et GBEA.' },
      { title: 'Facturation AMO', text: 'CNOPS, CNSS, AMO Tadamon gérés nativement.' },
      { title: 'Business Intelligence', text: 'TAT, volumes et taux de rejet suivis.' },
      { title: 'Portail médecin', text: 'Vos prescripteurs consultent et demandent en ligne.' },
      { title: 'Application patient', text: 'Résultats disponibles dès validation.' },
    ],
    trust: [
      { title: 'Conforme ISO 15189 et GBEA', text: 'Suivi qualité et métrologie prêt pour vos audits d\u2019accréditation.' },
      { title: 'Zéro ressaisie automate', text: 'Connexion directe à vos automates, résultats récupérés sans erreur de transcription.' },
      { title: 'Prise en charge marocaine intégrée', text: 'AMO, CNOPS et CNSS gérés nativement, sans module tiers à ajouter.' },
    ],
    faqs: [
      {
        q: 'Labya se connecte-t-il à nos automates existants ?',
        a: 'Oui, Labya se connecte directement aux automates courants (Cobas, Sysmex, Architect, VIDAS...) par RS232 ou réseau LAN, selon votre équipement, pour récupérer les résultats automatiquement.',
      },
      {
        q: 'Le médecin prescripteur a-t-il accès à un espace dédié ?',
        a: 'Oui, un portail médecin permet à vos prescripteurs de consulter les résultats de leurs patients et de transmettre de nouvelles demandes d\u2019analyse directement, sans appeler le laboratoire.',
      },
      {
        q: 'Comment fonctionne l\u2019application patient ?',
        a: 'Le patient reçoit une notification dès que son résultat est validé et le consulte directement depuis l\u2019application, avec l\u2019historique complet de ses analyses passées.',
      },
      {
        q: 'Labya gère-t-il plusieurs points de prélèvement ?',
        a: 'Oui, vous pouvez gérer un plateau technique central et plusieurs points de prélèvement, avec une visibilité centralisée sur l\u2019ensemble des dossiers.',
      },
      {
        q: 'Peut-on reprendre nos données existantes ?',
        a: 'Oui, nous reprenons votre historique patients et vos tarifs existants lors de la mise en service, à partir de vos fichiers ou de votre logiciel actuel.',
      },
    ],
    audience: 'Directeurs et biologistes de laboratoires d\u2019analyses médicales',
  },

  {
    slug: 'rentara',
    name: 'Rentara',
    badgeSet: 'location',
    related: ['logistara'],
    sector: 'Agences de location de voitures',
    tagline: 'Pilotez votre flotte, vos contrats et vos \u00e9ch\u00e9ances depuis un seul \u00e9cran.',
    seoTitle: 'Rentara \u2014 Logiciel de gestion pour agence de location de voitures au Maroc',
    seoDescription:
      'Rentara remplace Excel et WhatsApp\u00a0: planning de flotte visuel, contrats et \u00e9tats des lieux avec photos, scan CIN/permis, suivi GPS temps r\u00e9el, assistant IA et portail conducteur mobile.',
    pitch:
      'Votre agence tourne encore sur Excel, WhatsApp et des contrats papier\u00a0? Rentara centralise votre flotte, vos r\u00e9servations et vos clients \u2014 et vous alerte avant chaque \u00e9ch\u00e9ance d\u2019assurance, de vignette ou de vidange.',
    stats: [
      { value: '9', label: 'modules m\u00e9tier' },
      { value: 'GPS', label: 'suivi en temps r\u00e9el' },
      { value: '100%', label: 'contrats digitalis\u00e9s' },
    ],
    modules: [
      {
        title: 'Tableau de bord',
        text: 'Une vue d\u2019ensemble de toute l\u2019activit\u00e9 en temps r\u00e9el\u00a0: v\u00e9hicules lou\u00e9s, revenus du mois, retours du jour et alertes d\u2019entretien prioritaires \u2014 d\u00e8s la connexion.',
        points: ['Taux d\u2019occupation de la flotte en direct', 'Revenus et comparaison mois pr\u00e9c\u00e9dent', 'Alertes prioritaires centralis\u00e9es'],
        image: '/screenshots/rentara/tableau-de-bord.png',
      },
      {
        title: 'Planning de flotte',
        text: 'Un calendrier visuel de toutes vos r\u00e9servations\u00a0: disponibilit\u00e9s, d\u00e9parts et retours en un coup d\u2019\u0153il, avec alertes de conflit et vue multi-agences.',
        points: ['Vue calendrier par v\u00e9hicule', 'Alertes de conflit de r\u00e9servation', 'Multi-agences sur un seul planning'],
        image: '/screenshots/rentara/planning-flotte.png',
      },
      {
        title: 'Clients & scan CIN',
        text: 'Photographiez ou scannez la CIN et le permis du client\u00a0: la fiche se cr\u00e9e automatiquement en 10 secondes, sans ressaisie. Identit\u00e9, permis et historique centralis\u00e9s.',
        points: ['Scan CIN et permis de conduire', 'Fiche client cr\u00e9\u00e9e automatiquement', 'Historique complet des locations par client'],
        image: '/screenshots/rentara/clients-cin.png',
      },
      {
        title: 'Contrats & \u00e9tats des lieux',
        text: 'Contrat PDF g\u00e9n\u00e9r\u00e9 automatiquement, \u00e9tat des lieux comparatif d\u00e9part/retour avec photos horodat\u00e9es, signature \u00e9lectronique et suivi des cautions.',
        points: ['Contrat PDF g\u00e9n\u00e9r\u00e9 en un clic', 'Comparatif photos d\u00e9part vs retour', 'Signature \u00e9lectronique et cautions suivies'],
        image: '/screenshots/rentara/contrats-edl.png',
      },
      {
        title: 'Suivi GPS temps r\u00e9el',
        text: 'Localisez vos v\u00e9hicules en direct sur une carte, suivez leur vitesse et s\u00e9curisez votre flotte avec des alertes de sortie de zone g\u00e9ographique.',
        points: ['Position en direct sur carte', 'Historique de trajets', 'Alerte sortie de zone autoris\u00e9e'],
        image: '/screenshots/rentara/suivi-gps.png',
      },
      {
        title: 'Entretien & alertes',
        text: 'Vidanges, assurances, vignettes et contr\u00f4les techniques\u00a0: un tableau de bord par v\u00e9hicule avec alertes automatiques avant chaque \u00e9ch\u00e9ance.',
        points: ['Alertes automatiques par v\u00e9hicule', 'Tableau vidange / assurance / vignette / CT', 'Historique d\u2019entretien centralis\u00e9'],
        image: '/screenshots/rentara/entretien-alertes.png',
      },
      {
        title: 'Caisse & facturation',
        text: 'Encaissements, avances et factures suivis v\u00e9hicule par v\u00e9hicule, avec taux d\u2019occupation et revenu par v\u00e9hicule pour piloter la rentabilit\u00e9 de votre flotte.',
        points: ['Revenu par v\u00e9hicule', 'Taux d\u2019occupation mensuel', 'Cautions bloqu\u00e9es et factures en attente'],
        image: '/screenshots/rentara/caisse-facturation.png',
      },
      {
        title: 'Assistant Rentara (IA)',
        text: 'Posez vos questions en langage naturel\u00a0: disponibilit\u00e9s du week-end, contrats en retard, revenus du mois. L\u2019assistant r\u00e9pond en quelques secondes sans naviguer entre les menus.',
        points: ['Questions en langage naturel', 'Disponibilit\u00e9s, revenus, retards en un instant', 'Suggestions proactives sur la flotte'],
        image: '/screenshots/rentara/assistant-ia.png',
      },
      {
        title: 'Portail conducteur',
        text: 'Vos clients voient leur contrat, leur facture et les d\u00e9tails de leur location depuis leur t\u00e9l\u00e9phone \u2014 et peuvent contacter l\u2019agence ou localiser le v\u00e9hicule directement.',
        points: ['Location et retour visible sur mobile', 'Facture et contrat PDF accessibles', 'Contact direct avec l\u2019agence'],
        image: '/screenshots/rentara/portail-conducteur.png',
      },
    ],
    patientApp: {
      title: 'Portail conducteur \u2014 l\u2019application incluse',
      text: 'Vos clients consultent leur contrat, leur facture et les d\u00e9tails de leur location depuis leur smartphone \u2014 sans appeler l\u2019agence. Ils peuvent localiser leur v\u00e9hicule et contacter l\u2019\u00e9quipe directement depuis l\u2019application.',
      image: '/screenshots/rentara/portail-conducteur-app.png',
      points: [
        'Location en cours visible en temps r\u00e9el',
        'Contrat PDF et facture accessibles depuis le t\u00e9l\u00e9phone',
        'Rappel automatique de la date de retour',
        'Contact direct avec l\u2019agence en un tap',
        'Localisation du v\u00e9hicule incluse',
      ],
      stats: [
        { value: '0', label: 'appel pour consulter son contrat' },
        { value: 'LIVE', label: 'statut de la location en direct' },
        { value: '100%', label: 'documents accessibles sur mobile' },
      ],
    },
    features: [
      { title: 'Tableau de bord', text: 'Taux d\u2019occupation, revenus et alertes en temps r\u00e9el.' },
      { title: 'Planning de flotte', text: 'Toutes vos r\u00e9servations en un coup d\u2019\u0153il.' },
      { title: 'Clients & scan CIN', text: 'Fiche client cr\u00e9\u00e9e en 10 secondes par scan.' },
      { title: 'Contrats & \u00e9tats des lieux', text: 'Contrat PDF automatique, photos horodat\u00e9es.' },
      { title: 'Suivi GPS temps r\u00e9el', text: 'Localisez vos v\u00e9hicules en direct.' },
      { title: 'Entretien & alertes', text: 'Alertes avant chaque \u00e9ch\u00e9ance.' },
      { title: 'Caisse & facturation', text: 'Revenus et taux d\u2019occupation par v\u00e9hicule.' },
      { title: 'Assistant IA', text: 'R\u00e9ponses en langage naturel sur votre activit\u00e9.' },
      { title: 'Portail conducteur', text: 'Vos clients g\u00e8rent leur location sur mobile.' },
    ],
    trust: [
      { title: 'Z\u00e9ro papier perdu', text: 'Contrats et \u00e9tats des lieux archiv\u00e9s num\u00e9riquement, retrouvables en un clic.' },
      { title: 'Flotte s\u00e9curis\u00e9e', text: 'Suivi GPS et alertes de sortie de zone pour prot\u00e9ger vos v\u00e9hicules.' },
      { title: 'Client autonome', text: 'Le portail conducteur r\u00e9duit fortement les appels entrants \u00e0 l\u2019agence.' },
    ],
    faqs: [
      {
        q: 'Faut-il installer un bo\u00eetier GPS sur chaque v\u00e9hicule\u00a0?',
        a: 'Oui, un petit bo\u00eetier GPS est n\u00e9cessaire par v\u00e9hicule. Nous vous orientons vers des solutions compatibles adapt\u00e9es au march\u00e9 marocain.',
      },
      {
        q: 'Rentara fonctionne-t-il pour la location longue dur\u00e9e\u00a0?',
        a: 'Oui, le planning et la facturation s\u2019adaptent aussi bien \u00e0 la location courte dur\u00e9e (jour/semaine) qu\u2019\u00e0 la longue dur\u00e9e (mois/ann\u00e9e).',
      },
      {
        q: 'Peut-on g\u00e9rer plusieurs agences avec un seul compte\u00a0?',
        a: 'Oui, chaque agence a ses propres acc\u00e8s et son propre planning, avec une vue consolid\u00e9e pour le g\u00e9rant sur l\u2019ensemble du r\u00e9seau.',
      },
      {
        q: 'Le scan CIN fonctionne-t-il avec tous les types de documents\u00a0?',
        a: 'Oui, Rentara scanne la carte nationale d\u2019identit\u00e9 (CIN) et le permis de conduire marocains, et cr\u00e9e la fiche client automatiquement sans ressaisie.',
      },
      {
        q: 'Comment fonctionne l\u2019assistant IA\u00a0?',
        a: 'Il r\u00e9pond \u00e0 vos questions en langage naturel sur vos donn\u00e9es en temps r\u00e9el\u00a0: disponibilit\u00e9s, revenus, contrats en retard. Pas besoin de naviguer entre les menus.',
      },
    ],
    audience: 'G\u00e9rants d\u2019agences de location courte et longue dur\u00e9e',
  },
  {
    slug: 'logistara',
    name: 'Logistara',
    badgeSet: 'transit',
    related: ['rentara'],
    sector: 'Transitaires & freight forwarding',
    tagline: 'La gestion de vos dossiers d\u2019expédition, du booking à la livraison.',
    seoTitle: 'Logistara — Logiciel de gestion pour transitaires et freight forwarders au Maroc',
    seoDescription:
      'Logistara digitalise vos opérations de transit : dossiers d\u2019expédition maritime, aérien et routier, suivi douanier, agents IA de traitement documentaire, base de données clients et portail de suivi public.',
    pitch:
      'Conçu avec des professionnels du transit, Logistara suit chaque dossier d\u2019expédition de bout en bout — maritime, aérien, routier — avec la douane, les documents et la facturation centralisés, et un portail de suivi que vos clients utilisent sans même avoir de compte.',
    longDescription:
      'Logistara s\u2019adresse aux transitaires et commissionnaires de transport marocains qui jonglent aujourd\u2019hui entre fichiers Excel, échanges WhatsApp et relances téléphoniques pour savoir où en est chaque dossier. Le logiciel centralise les trois modes de transport — maritime, aérien, routier — avec leurs spécificités propres (FCL/LCL, marchandises sensibles, corridors Maroc-Europe), le suivi douanier et la conformité réglementaire, et même des agents d\u2019intelligence artificielle qui lisent et classent automatiquement vos documents de transport. Vos clients, eux, suivent leur marchandise en autonomie avec un simple numéro de dossier, sans jamais avoir besoin d\u2019un compte.',
    stats: [
      { value: '12', label: 'modules métier' },
      { value: '3', label: 'modes : mer, air, route' },
      { value: 'IA', label: 'traitement documentaire automatisé' },
    ],
    modules: [
      {
        title: 'Tableau de bord',
        text: 'Une vue d\u2019ensemble de toute l\u2019activité de transit : dossiers actifs par mode de transport, alertes douanières et échéances à venir, visibles dès la connexion.',
        points: ['Vue consolidée tous modes de transport', 'Alertes et échéances prioritaires', 'Accès rapide à chaque dossier'],
        image: '/screenshots/logistara/tableau-de-bord.png',
      },
      {
        title: 'Dossiers d\u2019expédition',
        text: 'Vue complète de tous les dossiers d\u2019expédition, tous modes confondus, avec statuts clairs et responsables assignés — cliquez sur une référence pour voir son suivi détaillé.',
        points: ['Un dossier par expédition, tous modes confondus', 'Statuts et responsables assignés', 'Recherche instantanée par référence'],
        image: '/screenshots/logistara/expeditions.png',
      },
      {
        title: 'Fret maritime (FCL/LCL)',
        text: 'Les expéditions maritimes suivies avec leurs spécificités propres : conteneurs complets (FCL) ou groupage (LCL), armateurs et ports d\u2019escale.',
        points: ['Gestion FCL et LCL', 'Suivi armateurs et ports', 'Documents maritimes centralisés'],
        image: '/screenshots/logistara/fret-maritime.png',
      },
      {
        title: 'Fret aérien',
        text: 'Un traitement prioritaire pour les expéditions aériennes et les marchandises sensibles, avec des délais et une traçabilité adaptés à l\u2019urgence du mode aérien.',
        points: ['Traitement prioritaire des dossiers urgents', 'Marchandises sensibles identifiées', 'Suivi compagnies aériennes'],
        image: '/screenshots/logistara/fret-aerien.png',
      },
      {
        title: 'Transport routier',
        text: 'Les corridors routiers Maroc-Europe suivis dossier par dossier, avec transporteurs, chauffeurs et délais de route centralisés.',
        points: ['Corridors Maroc ⇄ Europe suivis', 'Transporteurs et chauffeurs rattachés', 'Délais de route en temps réel'],
        image: '/screenshots/logistara/fret-routier.png',
      },
      {
        title: 'Douane & conformité',
        text: 'Le suivi des dossiers douaniers, des blocages et de la conformité réglementaire sur l\u2019ensemble de vos corridors, pour anticiper chaque retard avant qu\u2019il ne coûte cher.',
        points: ['Suivi des blocages douaniers', 'Conformité réglementaire par corridor', 'Documents douaniers centralisés'],
        image: '/screenshots/logistara/douane.png',
      },
      {
        title: 'Clients & portefeuille',
        text: 'Votre portefeuille clients actifs avec leur volume d\u2019expéditions en cours, pour prioriser vos comptes stratégiques et détecter les baisses d\u2019activité.',
        points: ['Volume d\u2019expéditions par client', 'Historique complet par compte', 'Détection des comptes en baisse'],
        image: '/screenshots/logistara/clients.png',
      },
      {
        title: 'Base de données documentaire',
        text: 'Une base de données flexible façon tableur intelligent, pour organiser dossiers, contacts et références sans dépendre d\u2019un développeur pour chaque nouveau besoin.',
        points: ['Colonnes et catégories personnalisables', 'Fiches détaillées par enregistrement', 'Organisation sans code'],
        image: '/screenshots/logistara/base-de-donnees.png',
      },
      {
        title: 'Contacts & annuaire',
        text: 'Un annuaire centralisé de tous vos contacts professionnels — clients, transporteurs, douaniers, agents portuaires — avec leurs coordonnées et leur historique.',
        points: ['Annuaire centralisé par rôle', 'Historique de collaboration', 'Recherche rapide par contact'],
        image: '/screenshots/logistara/contacts.png',
      },
      {
        title: 'Agents IA de traitement documentaire',
        text: 'Des agents d\u2019intelligence artificielle lisent, extraient et classent automatiquement vos documents de transport — connaissements, factures, certificats — pour éliminer la ressaisie manuelle.',
        points: ['Extraction automatique des données', 'Classification des documents de transport', 'Vérification de conformité assistée'],
        image: '/screenshots/logistara/assistant-ia.png',
      },
      {
        title: 'Rapports & analyses',
        text: 'Une analyse de performance et des tendances opérationnelles sur le mois en cours, pour piloter votre activité de transit avec des chiffres à jour plutôt qu\u2019un tableur reconstruit chaque fin de mois.',
        points: ['Tendances opérationnelles mensuelles', 'Performance par mode de transport', 'Export pour vos comités de direction'],
        image: '/screenshots/logistara/rapports.png',
      },
      {
        title: 'Paramètres & accès',
        text: 'Une gestion fine des accès par profil (direction, opérations, comptabilité) pour que chaque collaborateur voie exactement ce dont il a besoin, ni plus ni moins.',
        points: ['Rôles et permissions par profil', 'Configuration multi-agences', 'Personnalisation de l\u2019espace de travail'],
        image: '/screenshots/logistara/parametres.png',
      },
    ],
    patientApp: {
      title: 'Suivi public — le portail client sans compte',
      text: 'Vos clients suivent leur marchandise en temps réel avec un simple numéro de dossier, sans créer de compte ni vous appeler. Maritime, aérien ou routier : chaque étape du transport est visible instantanément, avec les blocages douaniers signalés clairement.',
      image: '/screenshots/logistara/tracking-public.png',
      points: [
        'Suivi par simple numéro de dossier, aucun compte requis',
        'Statuts en temps réel : maritime, aérien, routier',
        'Alertes visibles en cas de blocage douanier',
        'Accessible depuis un lien partagé par email ou WhatsApp',
        'Réduit fortement les appels de suivi entrants',
      ],
      stats: [
        { value: '3', label: 'modes de transport suivis' },
        { value: '0', label: 'compte requis pour le client' },
        { value: 'LIVE', label: 'statut en temps réel' },
      ],
    },
    features: [
      { title: 'Tableau de bord', text: 'Vue consolidée de l\u2019activité tous modes confondus.' },
      { title: 'Dossiers d\u2019expédition', text: 'Maritime, aérien, routier — statuts clairs.' },
      { title: 'Fret maritime', text: 'Gestion FCL/LCL, armateurs et ports.' },
      { title: 'Fret aérien', text: 'Traitement prioritaire, marchandises sensibles.' },
      { title: 'Transport routier', text: 'Corridors Maroc-Europe suivis en détail.' },
      { title: 'Douane & conformité', text: 'Blocages et conformité réglementaire suivis.' },
      { title: 'Clients & portefeuille', text: 'Volume d\u2019expéditions par client.' },
      { title: 'Base de données', text: 'Organisation flexible sans développeur.' },
      { title: 'Contacts & annuaire', text: 'Tous vos contacts pro centralisés.' },
      { title: 'Agents IA documentaires', text: 'Extraction et classification automatiques.' },
      { title: 'Rapports & analyses', text: 'Tendances et performance mensuelles.' },
      { title: 'Paramètres & accès', text: 'Rôles et permissions par profil.' },
      { title: 'Portail de suivi public', text: 'Vos clients suivent sans compte, par référence.' },
    ],
    trust: [
      { title: 'Construit avec des professionnels du transit', text: 'Le vocabulaire, les statuts et les corridors collent à votre réalité opérationnelle marocaine.' },
      { title: 'Moins d\u2019appels clients', text: 'Le portail de suivi public réduit fortement les demandes de statut par téléphone.' },
      { title: 'IA au service de la saisie', text: 'Les agents documentaires réduisent la ressaisie manuelle sur les documents de transport.' },
    ],
    faqs: [
      {
        q: 'Logistara gère-t-il le maritime, l\u2019aérien et le routier ?',
        a: 'Oui, les trois modes de transport sont pris en charge dans le même outil, chacun avec ses spécificités (FCL/LCL pour le maritime, traitement prioritaire pour l\u2019aérien, corridors pour le routier).',
      },
      {
        q: 'Le client a-t-il besoin d\u2019un compte pour suivre sa marchandise ?',
        a: 'Non, le portail de suivi public fonctionne avec un simple numéro de dossier — aucune création de compte n\u2019est nécessaire pour vos clients.',
      },
      {
        q: 'Comment fonctionnent les agents IA de traitement documentaire ?',
        a: 'Ils lisent automatiquement vos documents de transport (connaissements, factures, certificats), en extraient les données clés et les classent dans le bon dossier, réduisant la ressaisie manuelle.',
      },
      {
        q: 'Peut-on reprendre nos dossiers en cours ?',
        a: 'Oui, nous reprenons vos dossiers actifs et votre historique récent lors de la mise en service, à partir de vos fichiers existants.',
      },
      {
        q: 'La base de données documentaire nécessite-t-elle des compétences techniques ?',
        a: 'Non, elle fonctionne comme un tableur intelligent : vous créez vos propres catégories et colonnes sans avoir besoin d\u2019un développeur.',
      },
    ],
    audience: 'Transitaires, commissionnaires de transport et freight forwarders',
  },


  {
    slug: 'dialya',
    name: 'Dialya',
    badgeSet: 'sante',
    related: ['labya', 'medira'],
    sector: 'Centres d\u2019hémodialyse',
    tagline: 'Le système d\u2019exploitation complet des centres d\u2019hémodialyse.',
    seoTitle: 'Dialya — Logiciel de gestion pour centre d\u2019hémodialyse au Maroc',
    seoDescription:
      'Dialya est le logiciel de gestion pour centres d\u2019hémodialyse au Maroc : dossier patient, planning des séances, suivi en direct, biologie, générateurs, stock, facturation AMO/CNOPS/CNSS et application patient incluse.',
    pitch:
      'La dialyse exige une rigueur absolue. Dialya donne à votre centre un dossier patient complet, un planning clair des séances, un suivi en direct de chaque poste et une traçabilité irréprochable — pour que vos équipes se concentrent sur le soin, pas sur l\u2019administratif.',
    longDescription:
      'Conçu avec des néphrologues et des cadres de santé marocains, Dialya réunit dans un seul logiciel tout ce qu\u2019un centre d\u2019hémodialyse gère aujourd\u2019hui dans des registres papier, des tableurs Excel et des groupes WhatsApp dispersés. Du dossier médical du patient jusqu\u2019à la facturation auprès de la CNOPS, de la CNSS et de l\u2019AMO Tadamon, chaque étape du parcours de soin est tracée, centralisée et accessible en quelques secondes. Le logiciel de dialyse Dialya s\u2019adresse aux centres d\u2019hémodialyse privés et publics au Maroc qui souhaitent digitaliser leur gestion clinique et administrative sans complexité technique.',
    stats: [
      { value: '10', label: 'modules métier' },
      { value: 'LIVE', label: 'suivi per-dialytique en direct' },
      { value: 'HL7', label: 'intégration laboratoire' },
    ],
    modules: [
      {
        title: 'Tableau de bord',
        text: 'Une vue d\u2019ensemble complète du centre dès la connexion : séances du jour, postes occupés, alertes actives et indicateurs clés visibles en un coup d\u2019œil, sans naviguer entre plusieurs écrans.',
        points: ['Indicateurs clés en temps réel', 'Vue consolidée pour la direction médicale', 'Accès rapide à chaque module'],
        image: '/screenshots/dialya/tableau-de-bord.png',
      },
      {
        title: 'Dossier patient complet',
        text: 'Antécédents, accès vasculaires, sérologies et historique de séances : toute l\u2019histoire du patient dialysé au même endroit, accessible en quelques secondes par toute l\u2019équipe soignante.',
        points: ['Antécédents et comorbidités', 'Accès vasculaires suivis', 'Historique complet des séances'],
        image: '/screenshots/dialya/dossier-patient.png',
      },
      {
        title: 'Planning des séances',
        text: 'Postes, générateurs et créneaux organisés visuellement. Réaffecter un patient se fait en quelques secondes, sans reconstruire tout le planning de la journée.',
        points: ['Vue par poste et par générateur', 'Réaffectation rapide en cas d\u2019imprévu', 'Alertes de conflit de créneau'],
        image: '/screenshots/dialya/planning-seances.png',
      },
      {
        title: 'Séances en direct',
        text: 'Un suivi per-dialytique en temps réel : paramètres de séance, incidents et transmissions saisis au fil de l\u2019eau par l\u2019équipe soignante, visibles instantanément par le médecin.',
        points: ['Paramètres saisis en direct', 'Incidents horodatés', 'Transmissions d\u2019équipe centralisées'],
        image: '/screenshots/dialya/seances-en-direct.png',
      },
      {
        title: 'Prescriptions & signature électronique',
        text: 'Prescriptions de dialyse et protocoles médicamenteux, avec signature électronique tracée pour une conformité totale face aux inspections et au conseil médical.',
        points: ['Protocoles médicamenteux structurés', 'Signature électronique horodatée', 'Historique des prescriptions'],
        image: '/screenshots/dialya/prescriptions.png',
      },
      {
        title: 'Biologie & alertes intelligentes',
        text: 'Intégration laboratoire par HL7 ou API, avec des règles d\u2019alerte personnalisables par le centre pour ne jamais manquer une valeur critique (kaliémie, hémoglobine, Kt/V...).',
        points: ['Intégration laboratoire HL7/API', 'Règles d\u2019alerte personnalisables', 'Historique biologique par patient'],
        image: '/screenshots/dialya/biologie-alertes.png',
      },
      {
        title: 'Parc générateurs',
        text: 'Désinfection, compteurs horaires et maintenance préventive tracés machine par machine, pour répondre aux exigences réglementaires et anticiper les pannes.',
        points: ['Suivi machine par machine', 'Désinfection tracée', 'Maintenance préventive planifiée'],
        image: '/screenshots/dialya/parc-generateurs.png',
      },
      {
        title: 'Stock & pharmacie',
        text: 'Traçabilité lot par lot, rotation FIFO et scan mobile directement en salle de soins, pour une gestion rigoureuse des consommables et médicaments.',
        points: ['Traçabilité lot par lot', 'Rotation FIFO automatique', 'Scan mobile en salle'],
        image: '/screenshots/dialya/stock-pharmacie.png',
      },
      {
        title: 'Facturation AMO & organismes',
        text: 'CNOPS, CNSS, AMO Tadamon et mutuelles : bordereaux, rejets et rapprochement bancaire gérés nativement, sans module tiers à ajouter.',
        points: ['CNOPS, CNSS, AMO Tadamon', 'Gestion des rejets', 'Rapprochement bancaire'],
        image: '/screenshots/dialya/facturation-amo.png',
      },
    ],
    patientApp: {
      title: 'Portail patient — l\u2019application incluse',
      text: 'Une application mobile incluse garde le lien avec le patient dialysé entre les séances : rappels de rendez-vous, derniers résultats, conseils diététiques personnalisés et signalement de symptômes directement transmis à l\u2019équipe soignante. Le patient devient acteur de son suivi, et le centre réduit les absences non anticipées.',
      image: '/screenshots/dialya/portail-patient.png',
      points: [
        'Rappels de séance et confirmation de présence',
        'Derniers résultats (Kt/V, hémoglobine, poids) accessibles au patient',
        'Conseils diététiques personnalisés selon le dernier bilan',
        'Signalement de symptômes avant la séance',
        'Interface disponible en français et en arabe (darija)',
      ],
      stats: [
        { value: '71%', label: 'patients équipés en pilote' },
        { value: '-38%', label: 'd\u2019absences non anticipées' },
        { value: '4,7★', label: 'note moyenne de l\u2019application' },
      ],
    },
    features: [
      { title: 'Tableau de bord', text: 'Vue d\u2019ensemble du centre en un coup d\u2019œil.' },
      { title: 'Dossier patient complet', text: 'Toute l\u2019histoire du patient au même endroit.' },
      { title: 'Planning des séances', text: 'Postes et générateurs organisés visuellement.' },
      { title: 'Séances en direct', text: 'Suivi per-dialytique en temps réel.' },
      { title: 'Prescriptions & signature', text: 'Signature électronique tracée.' },
      { title: 'Biologie & alertes', text: 'Intégration laboratoire, alertes personnalisables.' },
      { title: 'Parc générateurs', text: 'Désinfection et maintenance tracées.' },
      { title: 'Stock & pharmacie', text: 'Traçabilité lot par lot, scan mobile.' },
      { title: 'Facturation AMO', text: 'CNOPS, CNSS, AMO Tadamon gérés nativement.' },
      { title: 'Portail patient', text: 'Application mobile incluse pour chaque patient.' },
    ],
    trust: [
      { title: 'Conforme aux exigences réglementaires', text: 'Traçabilité complète du matériel et des séances, prête pour vos inspections.' },
      { title: 'Conçu avec des néphrologues', text: 'Le vocabulaire, les alertes et les protocoles collent à la réalité clinique marocaine.' },
      { title: 'Prise en charge marocaine intégrée', text: 'CNOPS, CNSS et AMO Tadamon gérés sans module tiers à ajouter.' },
    ],
    faqs: [
      {
        q: 'Dialya s\u2019intègre-t-il avec notre laboratoire d\u2019analyses ?',
        a: 'Oui, via une intégration HL7 ou API selon votre laboratoire partenaire. Les résultats arrivent directement dans le dossier patient, avec vos règles d\u2019alerte.',
      },
      {
        q: 'Peut-on gérer plusieurs centres avec un seul compte ?',
        a: 'Oui, Dialya prend en charge la gestion multi-centres avec des accès et des plannings séparés par site, et une vue consolidée pour la direction médicale.',
      },
      {
        q: 'L\u2019application patient nécessite-t-elle une installation compliquée ?',
        a: 'Non, l\u2019application patient s\u2019installe comme n\u2019importe quelle application mobile et propose un mode simplifié pensé pour les patients seniors, en français et en arabe.',
      },
      {
        q: 'Comment se passe la reprise de nos dossiers patients existants ?',
        a: 'Nous reprenons votre historique patients (antécédents, séances passées) à partir de vos fichiers ou de votre logiciel actuel lors de la mise en service.',
      },
      {
        q: 'Dialya gère-t-il les différents types d\u2019accès vasculaire ?',
        a: 'Oui, fistule artério-veineuse, cathéter jugulaire ou fémoral : chaque type d\u2019accès est suivi dans le dossier patient avec son historique propre.',
      },
    ],
    audience: 'Néphrologues et gestionnaires de centres de dialyse',
  },

  {
    slug: 'medira',
    name: 'Medira',
    badgeSet: 'sante',
    related: ['dialya', 'labya'],
    sector: 'Distribution d\u2019équipements médicaux',
    tagline: 'La suite complète pour distributeurs et importateurs d\u2019équipements médicaux.',
    seoTitle: 'Medira — Logiciel de gestion pour distributeur d\u2019équipements médicaux au Maroc',
    seoDescription:
      'Medira est le logiciel de gestion pour distributeurs d\u2019équipements médicaux au Maroc : CRM, devis, appels d\u2019offres, commandes FEFO, stock par lot, catalogue, achats et imports, SAV, qualité et rappels, portail client B2B.',
    pitch:
      'Du premier contact client jusqu\u2019à la maintenance de l\u2019équipement installé, Medira structure toute l\u2019activité d\u2019un distributeur médical : CRM, devis, appels d\u2019offres publics, commandes avec allocation FEFO, traçabilité des lots, catalogue, achats à l\u2019international, SAV et parc installé, qualité et rappels produits.',
    longDescription:
      'Conçu pour les distributeurs et importateurs d\u2019équipements et de consommables médicaux au Maroc, Medira couvre un métier à forte exigence réglementaire : marchés publics hospitaliers, chaîne du froid, traçabilité des lots jusqu\u2019au rappel fabricant, et parc d\u2019équipements installés chez des dizaines de clients. Le logiciel de distribution médicale Medira remplace les tableurs Excel, les échanges WhatsApp dispersés et les registres papier par une plateforme unique, du CRM commercial jusqu\u2019à la facturation et au recouvrement, en passant par la gestion des appels d\u2019offres publics et la qualité pharmaceutique.',
    stats: [
      { value: '14', label: 'modules métier' },
      { value: 'FEFO', label: 'allocation stock automatique' },
      { value: 'GS1', label: 'scan codes-barres fabricants' },
    ],
    modules: [
      {
        title: 'Tableau de bord',
        text: 'Une vue direction complète : chiffre d\u2019affaires facturé, encours clients, lots à péremption proche et appels d\u2019offres à déposer, avec graphiques de CA et de marge par segment client.',
        points: ['CA et marge brute en temps réel', 'Répartition du CA par segment client', 'Vigilance péremptions et activité récente'],
        image: '/screenshots/medira/tableau-de-bord.png',
      },
      {
        title: 'Clients & CRM',
        text: 'Chaque établissement — hôpital public, clinique privée, cabinet de radiologie, laboratoire — dispose d\u2019une fiche complète avec contact, CA, encours, délai de règlement et autorisations réglementaires (DMP).',
        points: ['Segmentation par type d\u2019établissement', 'Suivi des autorisations DMP par client', 'Historique d\u2019achats et encours en un coup d\u2019œil'],
        image: '/screenshots/medira/clients-crm.png',
      },
      {
        title: 'Devis',
        text: 'Des devis professionnels générés en quelques minutes, suivis par statut (envoyé, accepté, en négociation, refusé) et convertibles en commande d\u2019un seul clic une fois acceptés.',
        points: ['Suivi par statut avec filtres rapides', 'Conversion devis → commande en un clic', 'Validité et relances suivies'],
        image: '/screenshots/medira/devis.png',
      },
      {
        title: 'Commandes & allocation FEFO',
        text: 'La préparation des commandes applique automatiquement la règle FEFO (First Expired, First Out) : les lots les plus proches de péremption sortent en priorité, avec justification affichée à l\u2019équipe logistique.',
        points: ['Allocation FEFO automatique et justifiée', 'Suivi de préparation en temps réel', 'Bons de livraison générés'],
        image: '/screenshots/medira/commandes.png',
      },
      {
        title: 'Appels d\u2019offres & marchés publics',
        text: 'Veille, montage des dossiers administratifs, techniques et financiers, cautions bancaires et suivi des marchés attribués — avec compte à rebours avant chaque date de dépôt.',
        points: ['Compte à rebours par dossier', 'Suivi des pièces admin / technique / financière', 'Cautions bancaires centralisées'],
        image: '/screenshots/medira/appels-offres.png',
      },
      {
        title: 'Facturation & recouvrement',
        text: 'Facturation conforme aux marchés publics marocains (retenue de garantie, délais de 90 à 150 jours) avec relances automatisées à plusieurs niveaux sur les impayés.',
        points: ['Gestion des retenues de garantie', 'Relances automatisées par niveau', 'Suivi des délais publics vs privés'],
        image: '/screenshots/medira/facturation.png',
      },
      {
        title: 'Stock & lots',
        text: 'Traçabilité lot par lot avec alertes de péremption à 90, 60 et 30 jours, gestion multi-dépôts, et reconstitution complète du parcours d\u2019un lot en cas de rappel fabricant.',
        points: ['Alertes péremption 90 / 60 / 30 jours', 'Traçabilité complète réception → client livré', 'Réapprovisionnement prédictif par IA de tendance'],
        image: '/screenshots/medira/stock-lots.png',
      },
      {
        title: 'Catalogue produits',
        text: 'Chaque référence est documentée avec son certificat CE, son enregistrement DMP le cas échéant, ses conditions de conservation (chaîne du froid) et sa marge — masquée automatiquement selon le profil.',
        points: ['Certificats CE et enregistrements DMP attachés', 'Indicateur chaîne du froid par produit', 'Marges masquées selon le rôle utilisateur'],
        image: '/screenshots/medira/catalogue.png',
      },
      {
        title: 'Achats & imports',
        text: 'Suivi des dossiers d\u2019importation étape par étape (proforma, lettre de crédit, embarquement, douane, réception) avec vos fournisseurs internationaux et leurs conditions de paiement.',
        points: ['Suivi visuel des étapes d\u2019importation', 'Fournisseurs et conditions de paiement centralisés', 'Prix de revient réel (achat + fret + douane)'],
        image: '/screenshots/medira/achats-imports.png',
      },
      {
        title: 'SAV & parc installé',
        text: 'Un registre complet des équipements installés chez vos clients, avec contrats de maintenance, échéances de garantie et tickets d\u2019intervention suivis par technicien.',
        points: ['Registre des équipements par client', 'Contrats de maintenance et échéances', 'Tickets d\u2019intervention par technicien'],
        image: '/screenshots/medira/sav-parc-installe.png',
      },
      {
        title: 'Qualité & rappels',
        text: 'Non-conformités, actions correctives (CAPA), quarantaine automatique à réception et campagnes de rappel produit avec notification client et suivi du taux d\u2019efficacité.',
        points: ['Quarantaine automatique à réception', 'Non-conformités et CAPA tracées', 'Campagnes de rappel avec taux d\u2019efficacité'],
        image: '/screenshots/medira/qualite-rappels.png',
      },
      {
        title: 'Consignation & retours',
        text: 'Gestion du stock déposé chez vos clients et facturé à la consommation, ainsi que des retours (RMA) avec décision qualité : remise en stock, avoir, ou destruction.',
        points: ['Stock en consignation facturé à la consommation', 'Retours (RMA) avec décision qualité', 'Consignation fournisseur (trésorerie préservée)'],
        image: '/screenshots/medira/consignation-retours.png',
      },
      {
        title: 'Rapports & analyses',
        text: 'Rentabilité par famille de produits, par marché public et pipeline commercial complet — de l\u2019opportunité au marché signé, exportable en Excel ou PDF.',
        points: ['Marge brute par famille de produits', 'Rentabilité des marchés publics attribués', 'Pipeline commercial en vue kanban'],
        image: '/screenshots/medira/rapports.png',
      },
      {
        title: 'Paramètres & rôles',
        text: 'Une matrice de droits granulaire (direction, commercial, magasinier, technicien, comptable) et un journal d\u2019audit horodaté avec signature électronique sur les actions sensibles.',
        points: ['Matrice de droits par profil métier', 'Journal d\u2019audit horodaté et inviolable', 'Signature électronique sur les validations critiques'],
        image: '/screenshots/medira/parametres-roles.png',
      },
    ],
    patientApp: {
      title: 'Portail Client B2B — l\u2019espace commande de vos clients',
      text: 'Vos clients hospitaliers et cliniques commandent directement en ligne, à leurs tarifs négociés, sans passer par un commercial. Ils suivent leurs livraisons, retrouvent leurs factures et leurs certificats CE/DMP, et peuvent recommander leur dernière commande en un clic.',
      image: '/screenshots/medira/portail-client-b2b.png',
      points: [
        'Tarifs négociés appliqués automatiquement par client',
        'Recommande en un clic la dernière commande',
        'Suivi des livraisons et historique des factures',
        'Certificats CE et enregistrements DMP accessibles',
        'Intégration e-facturation DGI et export comptable',
      ],
      stats: [
        { value: '62%', label: 'des commandes passent en ligne' },
        { value: '+35%', label: 'de commandes portail en un mois' },
        { value: '~14h', label: 'de saisie économisées par mois' },
      ],
    },
    features: [
      { title: 'Tableau de bord', text: 'CA, marge et alertes de la direction en un coup d\u2019œil.' },
      { title: 'Clients & CRM', text: 'Fiches établissements avec CA, encours et autorisations.' },
      { title: 'Devis', text: 'Générés en minutes, convertis en commande en un clic.' },
      { title: 'Commandes & FEFO', text: 'Allocation automatique des lots à écouler en priorité.' },
      { title: 'Appels d\u2019offres', text: 'Dossiers, cautions et marchés publics suivis.' },
      { title: 'Facturation', text: 'Retenues de garantie et relances automatisées.' },
      { title: 'Stock & lots', text: 'Traçabilité complète, alertes de péremption.' },
      { title: 'Catalogue', text: 'Certificats CE/DMP et marges par référence.' },
      { title: 'Achats & imports', text: 'Suivi des dossiers d\u2019importation étape par étape.' },
      { title: 'SAV & parc installé', text: 'Équipements, contrats et tickets par technicien.' },
      { title: 'Qualité & rappels', text: 'CAPA, quarantaine et campagnes de rappel.' },
      { title: 'Consignation & retours', text: 'Stock consigné facturé à la consommation.' },
      { title: 'Rapports', text: 'Marge par famille et pipeline commercial.' },
      { title: 'Paramètres & rôles', text: 'Matrice de droits et journal d\u2019audit signé.' },
      { title: 'Portail Client B2B', text: 'Vos clients commandent en ligne à leurs tarifs.' },
    ],
    trust: [
      { title: 'Conforme aux marchés publics marocains', text: 'Retenues de garantie, cautions bancaires et délais de règlement publics gérés nativement.' },
      { title: 'Traçabilité réglementaire complète', text: 'Chaque lot suivi de la réception au client livré, prêt pour un rappel fabricant ou un contrôle.' },
      { title: 'Qualité pharmaceutique intégrée', text: 'Quarantaine à réception, CAPA et campagnes de rappel alignées sur les bonnes pratiques ISO 13485.' },
    ],
    faqs: [
      {
        q: 'Medira gère-t-il les appels d\u2019offres publics et leurs cautions ?',
        a: 'Oui, chaque dossier d\u2019appel d\u2019offres est suivi avec ses pièces administratives, techniques et financières, ses cautions bancaires et un compte à rebours avant le dépôt.',
      },
      {
        q: 'Comment fonctionne l\u2019allocation FEFO des commandes ?',
        a: 'Lors de la préparation d\u2019une commande, Medira propose automatiquement les lots les plus proches de péremption avec une justification affichée, pour garantir qu\u2019aucun stock ne périme inutilement.',
      },
      {
        q: 'Le portail client B2B est-il personnalisable par client ?',
        a: 'Oui, chaque client voit ses propres tarifs négociés et son propre historique — totalement indépendant des autres comptes clients.',
      },
      {
        q: 'Medira accompagne-t-il un rappel de produit fabricant ?',
        a: 'Oui, le module Qualité & Rappels notifie automatiquement les clients concernés, suit les retours et calcule le taux d\u2019efficacité du rappel pour vos rapports réglementaires.',
      },
      {
        q: 'Peut-on suivre le SAV d\u2019un équipement précis avec son numéro de série ?',
        a: 'Oui, chaque ticket SAV se rattache à l\u2019équipement exact installé chez le client, avec son numéro de série, sa garantie et son contrat de maintenance.',
      },
    ],
    audience: 'Distributeurs et importateurs d\u2019équipements et de consommables médicaux',
  },
];

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}
