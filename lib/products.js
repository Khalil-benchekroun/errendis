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
    tagline: 'La gestion de vos dossiers d\u2019exp\u00e9dition, du booking \u00e0 la livraison.',
    seoTitle: 'Logistara \u2014 Logiciel de gestion pour transitaires et freight forwarders au Maroc',
    seoDescription:
      'Logistara digitalise vos op\u00e9rations de transit : dossiers d\u2019exp\u00e9dition maritime, a\u00e9rien et routier, suivi douanier, agents IA de traitement documentaire, base de donn\u00e9es clients et portail de suivi public.',
    pitch:
      'Con\u00e7u avec des professionnels du transit, Logistara suit chaque dossier d\u2019exp\u00e9dition de bout en bout \u2014 maritime, a\u00e9rien, routier \u2014 avec la douane, les documents et la facturation centralis\u00e9s, et un portail de suivi que vos clients utilisent sans m\u00eame avoir de compte.',
    longDescription:
      'Logistara s\u2019adresse aux transitaires et commissionnaires de transport marocains qui jonglent aujourd\u2019hui entre fichiers Excel, \u00e9changes WhatsApp et relances t\u00e9l\u00e9phoniques pour savoir o\u00f9 en est chaque dossier. Le logiciel centralise les trois modes de transport \u2014 maritime, a\u00e9rien, routier \u2014 avec leurs sp\u00e9cificit\u00e9s propres (FCL/LCL, marchandises sensibles, corridors Maroc-Europe), le suivi douanier et la conformit\u00e9 r\u00e9glementaire, et m\u00eame des agents d\u2019intelligence artificielle qui lisent et classent automatiquement vos documents de transport. Vos clients, eux, suivent leur marchandise en autonomie avec un simple num\u00e9ro de dossier, sans jamais avoir besoin d\u2019un compte.',
    stats: [
      { value: '12', label: 'modules m\u00e9tier' },
      { value: '3', label: 'modes : mer, air, route' },
      { value: 'IA', label: 'traitement documentaire automatis\u00e9' },
    ],
    modules: [
      {
        title: 'Tableau de bord',
        text: 'Une vue d\u2019ensemble de toute l\u2019activit\u00e9 de transit : dossiers actifs par mode de transport, alertes douani\u00e8res et \u00e9ch\u00e9ances \u00e0 venir, visibles d\u00e8s la connexion.',
        points: ['Vue consolid\u00e9e tous modes de transport', 'Alertes et \u00e9ch\u00e9ances prioritaires', 'Acc\u00e8s rapide \u00e0 chaque dossier'],
        image: '/screenshots/logistara/tableau-de-bord.png',
      },
      {
        title: 'Dossiers d\u2019exp\u00e9dition',
        text: 'Vue compl\u00e8te de tous les dossiers d\u2019exp\u00e9dition, tous modes confondus, avec statuts clairs et responsables assign\u00e9s \u2014 cliquez sur une r\u00e9f\u00e9rence pour voir son suivi d\u00e9taill\u00e9.',
        points: ['Un dossier par exp\u00e9dition, tous modes confondus', 'Statuts et responsables assign\u00e9s', 'Recherche instantan\u00e9e par r\u00e9f\u00e9rence'],
        image: '/screenshots/logistara/expeditions.png',
      },
      {
        title: 'Fret maritime (FCL/LCL)',
        text: 'Les exp\u00e9ditions maritimes suivies avec leurs sp\u00e9cificit\u00e9s propres : conteneurs complets (FCL) ou groupage (LCL), armateurs et ports d\u2019escale.',
        points: ['Gestion FCL et LCL', 'Suivi armateurs et ports', 'Documents maritimes centralis\u00e9s'],
        image: '/screenshots/logistara/fret-maritime.png',
      },
      {
        title: 'Fret a\u00e9rien',
        text: 'Un traitement prioritaire pour les exp\u00e9ditions a\u00e9riennes et les marchandises sensibles, avec des d\u00e9lais et une tra\u00e7abilit\u00e9 adapt\u00e9s \u00e0 l\u2019urgence du mode a\u00e9rien.',
        points: ['Traitement prioritaire des dossiers urgents', 'Marchandises sensibles identifi\u00e9es', 'Suivi compagnies a\u00e9riennes'],
        image: '/screenshots/logistara/fret-aerien.png',
      },
      {
        title: 'Transport routier',
        text: 'Les corridors routiers Maroc-Europe suivis dossier par dossier, avec transporteurs, chauffeurs et d\u00e9lais de route centralis\u00e9s.',
        points: ['Corridors Maroc \u21c4 Europe suivis', 'Transporteurs et chauffeurs rattach\u00e9s', 'D\u00e9lais de route en temps r\u00e9el'],
        image: '/screenshots/logistara/fret-routier.png',
      },
      {
        title: 'Douane & conformit\u00e9',
        text: 'Le suivi des dossiers douaniers, des blocages et de la conformit\u00e9 r\u00e9glementaire sur l\u2019ensemble de vos corridors, pour anticiper chaque retard avant qu\u2019il ne co\u00fbte cher.',
        points: ['Suivi des blocages douaniers', 'Conformit\u00e9 r\u00e9glementaire par corridor', 'Documents douaniers centralis\u00e9s'],
        image: '/screenshots/logistara/douane.png',
      },
      {
        title: 'Clients & portefeuille',
        text: 'Votre portefeuille clients actifs avec leur volume d\u2019exp\u00e9ditions en cours, pour prioriser vos comptes strat\u00e9giques et d\u00e9tecter les baisses d\u2019activit\u00e9.',
        points: ['Volume d\u2019exp\u00e9ditions par client', 'Historique complet par compte', 'D\u00e9tection des comptes en baisse'],
        image: '/screenshots/logistara/clients.png',
      },
      {
        title: 'Base de donn\u00e9es documentaire',
        text: 'Une base de donn\u00e9es flexible fa\u00e7on tableur intelligent, pour organiser dossiers, contacts et r\u00e9f\u00e9rences sans d\u00e9pendre d\u2019un d\u00e9veloppeur pour chaque nouveau besoin.',
        points: ['Colonnes et cat\u00e9gories personnalisables', 'Fiches d\u00e9taill\u00e9es par enregistrement', 'Organisation sans code'],
        image: '/screenshots/logistara/base-de-donnees.png',
      },
      {
        title: 'Contacts & annuaire',
        text: 'Un annuaire centralis\u00e9 de tous vos contacts professionnels \u2014 clients, transporteurs, douaniers, agents portuaires \u2014 avec leurs coordonn\u00e9es et leur historique.',
        points: ['Annuaire centralis\u00e9 par r\u00f4le', 'Historique de collaboration', 'Recherche rapide par contact'],
        image: '/screenshots/logistara/contacts.png',
      },
      {
        title: 'Agents IA de traitement documentaire',
        text: 'Des agents d\u2019intelligence artificielle lisent, extraient et classent automatiquement vos documents de transport \u2014 connaissements, factures, certificats \u2014 pour \u00e9liminer la ressaisie manuelle.',
        points: ['Extraction automatique des donn\u00e9es', 'Classification des documents de transport', 'V\u00e9rification de conformit\u00e9 assist\u00e9e'],
        image: '/screenshots/logistara/assistant-ia.png',
      },
      {
        title: 'Rapports & analyses',
        text: 'Une analyse de performance et des tendances op\u00e9rationnelles sur le mois en cours, pour piloter votre activit\u00e9 de transit avec des chiffres \u00e0 jour plut\u00f4t qu\u2019un tableur reconstruit chaque fin de mois.',
        points: ['Tendances op\u00e9rationnelles mensuelles', 'Performance par mode de transport', 'Export pour vos comit\u00e9s de direction'],
        image: '/screenshots/logistara/rapports.png',
      },
      {
        title: 'Param\u00e8tres & acc\u00e8s',
        text: 'Une gestion fine des acc\u00e8s par profil (direction, op\u00e9rations, comptabilit\u00e9) pour que chaque collaborateur voie exactement ce dont il a besoin, ni plus ni moins.',
        points: ['R\u00f4les et permissions par profil', 'Configuration multi-agences', 'Personnalisation de l\u2019espace de travail'],
        image: '/screenshots/logistara/parametres.png',
      },
    ],
    patientApp: {
      title: 'Suivi public \u2014 le portail client sans compte',
      text: 'Vos clients suivent leur marchandise en temps r\u00e9el avec un simple num\u00e9ro de dossier, sans cr\u00e9er de compte ni vous appeler. Maritime, a\u00e9rien ou routier : chaque \u00e9tape du transport est visible instantan\u00e9ment, avec les blocages douaniers signal\u00e9s clairement.',
      image: '/screenshots/logistara/tracking-public.png',
      points: [
        'Suivi par simple num\u00e9ro de dossier, aucun compte requis',
        'Statuts en temps r\u00e9el : maritime, a\u00e9rien, routier',
        'Alertes visibles en cas de blocage douanier',
        'Accessible depuis un lien partag\u00e9 par email ou WhatsApp',
        'R\u00e9duit fortement les appels de suivi entrants',
      ],
      stats: [
        { value: '3', label: 'modes de transport suivis' },
        { value: '0', label: 'compte requis pour le client' },
        { value: 'LIVE', label: 'statut en temps r\u00e9el' },
      ],
    },
    features: [
      { title: 'Tableau de bord', text: 'Vue consolid\u00e9e de l\u2019activit\u00e9 tous modes confondus.' },
      { title: 'Dossiers d\u2019exp\u00e9dition', text: 'Maritime, a\u00e9rien, routier \u2014 statuts clairs.' },
      { title: 'Fret maritime', text: 'Gestion FCL/LCL, armateurs et ports.' },
      { title: 'Fret a\u00e9rien', text: 'Traitement prioritaire, marchandises sensibles.' },
      { title: 'Transport routier', text: 'Corridors Maroc-Europe suivis en d\u00e9tail.' },
      { title: 'Douane & conformit\u00e9', text: 'Blocages et conformit\u00e9 r\u00e9glementaire suivis.' },
      { title: 'Clients & portefeuille', text: 'Volume d\u2019exp\u00e9ditions par client.' },
      { title: 'Base de donn\u00e9es', text: 'Organisation flexible sans d\u00e9veloppeur.' },
      { title: 'Contacts & annuaire', text: 'Tous vos contacts pro centralis\u00e9s.' },
      { title: 'Agents IA documentaires', text: 'Extraction et classification automatiques.' },
      { title: 'Rapports & analyses', text: 'Tendances et performance mensuelles.' },
      { title: 'Param\u00e8tres & acc\u00e8s', text: 'R\u00f4les et permissions par profil.' },
      { title: 'Portail de suivi public', text: 'Vos clients suivent sans compte, par r\u00e9f\u00e9rence.' },
    ],
    trust: [
      { title: 'Construit avec des professionnels du transit', text: 'Le vocabulaire, les statuts et les corridors collent \u00e0 votre r\u00e9alit\u00e9 op\u00e9rationnelle marocaine.' },
      { title: 'Moins d\u2019appels clients', text: 'Le portail de suivi public r\u00e9duit fortement les demandes de statut par t\u00e9l\u00e9phone.' },
      { title: 'IA au service de la saisie', text: 'Les agents documentaires r\u00e9duisent la ressaisie manuelle sur les documents de transport.' },
    ],
    faqs: [
      {
        q: 'Logistara g\u00e8re-t-il le maritime, l\u2019a\u00e9rien et le routier ?',
        a: 'Oui, les trois modes de transport sont pris en charge dans le m\u00eame outil, chacun avec ses sp\u00e9cificit\u00e9s (FCL/LCL pour le maritime, traitement prioritaire pour l\u2019a\u00e9rien, corridors pour le routier).',
      },
      {
        q: 'Le client a-t-il besoin d\u2019un compte pour suivre sa marchandise ?',
        a: 'Non, le portail de suivi public fonctionne avec un simple num\u00e9ro de dossier \u2014 aucune cr\u00e9ation de compte n\u2019est n\u00e9cessaire pour vos clients.',
      },
      {
        q: 'Comment fonctionnent les agents IA de traitement documentaire ?',
        a: 'Ils lisent automatiquement vos documents de transport (connaissements, factures, certificats), en extraient les donn\u00e9es cl\u00e9s et les classent dans le bon dossier, r\u00e9duisant la ressaisie manuelle.',
      },
      {
        q: 'Peut-on reprendre nos dossiers en cours ?',
        a: 'Oui, nous reprenons vos dossiers actifs et votre historique r\u00e9cent lors de la mise en service, \u00e0 partir de vos fichiers existants.',
      },
      {
        q: 'La base de donn\u00e9es documentaire n\u00e9cessite-t-elle des comp\u00e9tences techniques ?',
        a: 'Non, elle fonctionne comme un tableur intelligent : vous cr\u00e9ez vos propres cat\u00e9gories et colonnes sans avoir besoin d\u2019un d\u00e9veloppeur.',
      },
    ],
    audience: 'Transitaires, commissionnaires de transport et freight forwarders',
  },

  {
    slug: 'dialya',
    name: 'Dialya',
    badgeSet: 'sante',
    related: ['labya', 'medira'],
    sector: 'Centres d\u2019h\u00e9modialyse',
    tagline: 'Le syst\u00e8me d\u2019exploitation complet des centres d\u2019h\u00e9modialyse.',
    seoTitle: 'Dialya \u2014 Logiciel de gestion pour centre d\u2019h\u00e9modialyse au Maroc',
    seoDescription:
      'Dialya est le logiciel de gestion pour centres d\u2019h\u00e9modialyse au Maroc : dossier patient, planning des s\u00e9ances, suivi en direct, biologie, g\u00e9n\u00e9rateurs, stock, facturation AMO/CNOPS/CNSS et application patient incluse.',
    pitch:
      'La dialyse exige une rigueur absolue. Dialya donne \u00e0 votre centre un dossier patient complet, un planning clair des s\u00e9ances, un suivi en direct de chaque poste et une tra\u00e7abilit\u00e9 irr\u00e9prochable \u2014 pour que vos \u00e9quipes se concentrent sur le soin, pas sur l\u2019administratif.',
    longDescription:
      'Con\u00e7u avec des n\u00e9phrologues et des cadres de sant\u00e9 marocains, Dialya r\u00e9unit dans un seul logiciel tout ce qu\u2019un centre d\u2019h\u00e9modialyse g\u00e8re aujourd\u2019hui dans des registres papier, des tableurs Excel et des groupes WhatsApp dispers\u00e9s. Du dossier m\u00e9dical du patient jusqu\u2019\u00e0 la facturation aupr\u00e8s de la CNOPS, de la CNSS et de l\u2019AMO Tadamon, chaque \u00e9tape du parcours de soin est trac\u00e9e, centralis\u00e9e et accessible en quelques secondes. Le logiciel de dialyse Dialya s\u2019adresse aux centres d\u2019h\u00e9modialyse priv\u00e9s et publics au Maroc qui souhaitent digitaliser leur gestion clinique et administrative sans complexit\u00e9 technique.',
    stats: [
      { value: '10', label: 'modules m\u00e9tier' },
      { value: 'LIVE', label: 'suivi per-dialytique en direct' },
      { value: 'HL7', label: 'int\u00e9gration laboratoire' },
    ],
    modules: [
      {
        title: 'Tableau de bord',
        text: 'Une vue d\u2019ensemble compl\u00e8te du centre d\u00e8s la connexion : s\u00e9ances du jour, postes occup\u00e9s, alertes actives et indicateurs cl\u00e9s visibles en un coup d\u2019\u0153il, sans naviguer entre plusieurs \u00e9crans.',
        points: ['Indicateurs cl\u00e9s en temps r\u00e9el', 'Vue consolid\u00e9e pour la direction m\u00e9dicale', 'Acc\u00e8s rapide \u00e0 chaque module'],
        image: '/screenshots/dialya/tableau-de-bord.png',
      },
      {
        title: 'Dossier patient complet',
        text: 'Ant\u00e9c\u00e9dents, acc\u00e8s vasculaires, s\u00e9rologies et historique de s\u00e9ances : toute l\u2019histoire du patient dialy\u00e9 au m\u00eame endroit, accessible en quelques secondes par toute l\u2019\u00e9quipe soignante.',
        points: ['Ant\u00e9c\u00e9dents et comorbidit\u00e9s', 'Acc\u00e8s vasculaires suivis', 'Historique complet des s\u00e9ances'],
        image: '/screenshots/dialya/dossier-patient.png',
      },
      {
        title: 'Planning des s\u00e9ances',
        text: 'Postes, g\u00e9n\u00e9rateurs et cr\u00e9neaux organis\u00e9s visuellement. R\u00e9affecter un patient se fait en quelques secondes, sans reconstruire tout le planning de la journ\u00e9e.',
        points: ['Vue par poste et par g\u00e9n\u00e9rateur', 'R\u00e9affectation rapide en cas d\u2019impr\u00e9vu', 'Alertes de conflit de cr\u00e9neau'],
        image: '/screenshots/dialya/planning-seances.png',
      },
      {
        title: 'S\u00e9ances en direct',
        text: 'Un suivi per-dialytique en temps r\u00e9el : param\u00e8tres de s\u00e9ance, incidents et transmissions saisis au fil de l\u2019eau par l\u2019\u00e9quipe soignante, visibles instantan\u00e9ment par le m\u00e9decin.',
        points: ['Param\u00e8tres saisis en direct', 'Incidents horodat\u00e9s', 'Transmissions d\u2019\u00e9quipe centralis\u00e9es'],
        image: '/screenshots/dialya/seances-en-direct.png',
      },
      {
        title: 'Prescriptions & signature \u00e9lectronique',
        text: 'Prescriptions de dialyse et protocoles m\u00e9dicamenteux, avec signature \u00e9lectronique trac\u00e9e pour une conformit\u00e9 totale face aux inspections et au conseil m\u00e9dical.',
        points: ['Protocoles m\u00e9dicamenteux structur\u00e9s', 'Signature \u00e9lectronique horodat\u00e9e', 'Historique des prescriptions'],
        image: '/screenshots/dialya/prescriptions.png',
      },
      {
        title: 'Biologie & alertes intelligentes',
        text: 'Int\u00e9gration laboratoire par HL7 ou API, avec des r\u00e8gles d\u2019alerte personnalisables par le centre pour ne jamais manquer une valeur critique (kali\u00e9mie, h\u00e9moglobine, Kt/V...).',
        points: ['Int\u00e9gration laboratoire HL7/API', 'R\u00e8gles d\u2019alerte personnalisables', 'Historique biologique par patient'],
        image: '/screenshots/dialya/biologie-alertes.png',
      },
      {
        title: 'Parc g\u00e9n\u00e9rateurs',
        text: 'D\u00e9sinfection, compteurs horaires et maintenance pr\u00e9ventive trac\u00e9s machine par machine, pour r\u00e9pondre aux exigences r\u00e9glementaires et anticiper les pannes.',
        points: ['Suivi machine par machine', 'D\u00e9sinfection trac\u00e9e', 'Maintenance pr\u00e9ventive planifi\u00e9e'],
        image: '/screenshots/dialya/parc-generateurs.png',
      },
      {
        title: 'Stock & pharmacie',
        text: 'Tra\u00e7abilit\u00e9 lot par lot, rotation FIFO et scan mobile directement en salle de soins, pour une gestion rigoureuse des consommables et m\u00e9dicaments.',
        points: ['Tra\u00e7abilit\u00e9 lot par lot', 'Rotation FIFO automatique', 'Scan mobile en salle'],
        image: '/screenshots/dialya/stock-pharmacie.png',
      },
      {
        title: 'Facturation AMO & organismes',
        text: 'CNOPS, CNSS, AMO Tadamon et mutuelles : bordereaux, rejets et rapprochement bancaire g\u00e9r\u00e9s nativement, sans module tiers \u00e0 ajouter.',
        points: ['CNOPS, CNSS, AMO Tadamon', 'Gestion des rejets', 'Rapprochement bancaire'],
        image: '/screenshots/dialya/facturation-amo.png',
      },
    ],
    patientApp: {
      title: 'Portail patient \u2014 l\u2019application incluse',
      text: 'Une application mobile incluse garde le lien avec le patient dialy\u00e9 entre les s\u00e9ances : rappels de rendez-vous, derniers r\u00e9sultats, conseils di\u00e9t\u00e9tiques personnalis\u00e9s et signalement de sympt\u00f4mes directement transmis \u00e0 l\u2019\u00e9quipe soignante.',
      image: '/screenshots/dialya/portail-patient.png',
      points: [
        'Rappels de s\u00e9ance et confirmation de pr\u00e9sence',
        'Derniers r\u00e9sultats (Kt/V, h\u00e9moglobine, poids) accessibles au patient',
        'Conseils di\u00e9t\u00e9tiques personnalis\u00e9s selon le dernier bilan',
        'Signalement de sympt\u00f4mes avant la s\u00e9ance',
        'Interface disponible en fran\u00e7ais et en arabe (darija)',
      ],
      stats: [
        { value: '71%', label: 'patients \u00e9quip\u00e9s en pilote' },
        { value: '-38%', label: 'd\u2019absences non anticip\u00e9es' },
        { value: '4,7\u2605', label: 'note moyenne de l\u2019application' },
      ],
    },
    features: [
      { title: 'Tableau de bord', text: 'Vue d\u2019ensemble du centre en un coup d\u2019\u0153il.' },
      { title: 'Dossier patient complet', text: 'Toute l\u2019histoire du patient au m\u00eame endroit.' },
      { title: 'Planning des s\u00e9ances', text: 'Postes et g\u00e9n\u00e9rateurs organis\u00e9s visuellement.' },
      { title: 'S\u00e9ances en direct', text: 'Suivi per-dialytique en temps r\u00e9el.' },
      { title: 'Prescriptions & signature', text: 'Signature \u00e9lectronique trac\u00e9e.' },
      { title: 'Biologie & alertes', text: 'Int\u00e9gration laboratoire, alertes personnalisables.' },
      { title: 'Parc g\u00e9n\u00e9rateurs', text: 'D\u00e9sinfection et maintenance trac\u00e9es.' },
      { title: 'Stock & pharmacie', text: 'Tra\u00e7abilit\u00e9 lot par lot, scan mobile.' },
      { title: 'Facturation AMO', text: 'CNOPS, CNSS, AMO Tadamon g\u00e9r\u00e9s nativement.' },
      { title: 'Portail patient', text: 'Application mobile incluse pour chaque patient.' },
    ],
    trust: [
      { title: 'Conforme aux exigences r\u00e9glementaires', text: 'Tra\u00e7abilit\u00e9 compl\u00e8te du mat\u00e9riel et des s\u00e9ances, pr\u00eate pour vos inspections.' },
      { title: 'Con\u00e7u avec des n\u00e9phrologues', text: 'Le vocabulaire, les alertes et les protocoles collent \u00e0 la r\u00e9alit\u00e9 clinique marocaine.' },
      { title: 'Prise en charge marocaine int\u00e9gr\u00e9e', text: 'CNOPS, CNSS et AMO Tadamon g\u00e9r\u00e9s sans module tiers \u00e0 ajouter.' },
    ],
    faqs: [
      {
        q: 'Dialya s\u2019int\u00e8gre-t-il avec notre laboratoire d\u2019analyses ?',
        a: 'Oui, via une int\u00e9gration HL7 ou API selon votre laboratoire partenaire. Les r\u00e9sultats arrivent directement dans le dossier patient, avec vos r\u00e8gles d\u2019alerte.',
      },
      {
        q: 'Peut-on g\u00e9rer plusieurs centres avec un seul compte ?',
        a: 'Oui, Dialya prend en charge la gestion multi-centres avec des acc\u00e8s et des plannings s\u00e9par\u00e9s par site, et une vue consolid\u00e9e pour la direction m\u00e9dicale.',
      },
      {
        q: 'L\u2019application patient n\u00e9cessite-t-elle une installation compliqu\u00e9e ?',
        a: 'Non, l\u2019application patient s\u2019installe comme n\u2019importe quelle application mobile et propose un mode simplifi\u00e9 pens\u00e9 pour les patients seniors, en fran\u00e7ais et en arabe.',
      },
      {
        q: 'Comment se passe la reprise de nos dossiers patients existants ?',
        a: 'Nous reprenons votre historique patients (\u00e0nt\u00e9c\u00e9dents, s\u00e9ances pass\u00e9es) \u00e0 partir de vos fichiers ou de votre logiciel actuel lors de la mise en service.',
      },
      {
        q: 'Dialya g\u00e8re-t-il les diff\u00e9rents types d\u2019acc\u00e8s vasculaire ?',
        a: 'Oui, fistule art\u00e9rio-veineuse, cath\u00e9ter jugulaire ou f\u00e9moral : chaque type d\u2019acc\u00e8s est suivi dans le dossier patient avec son historique propre.',
      },
    ],
    audience: 'N\u00e9phrologues et gestionnaires de centres de dialyse',
  },

  {
    slug: 'medira',
    name: 'Medira',
    badgeSet: 'sante',
    related: ['dialya', 'labya'],
    sector: 'Distribution d\u2019\u00e9quipements m\u00e9dicaux',
    tagline: 'La suite compl\u00e8te pour distributeurs et importateurs d\u2019\u00e9quipements m\u00e9dicaux.',
    seoTitle: 'Medira \u2014 Logiciel de gestion pour distributeur d\u2019\u00e9quipements m\u00e9dicaux au Maroc',
    seoDescription:
      'Medira est le logiciel de gestion pour distributeurs d\u2019\u00e9quipements m\u00e9dicaux au Maroc : CRM, devis, appels d\u2019offres, commandes FEFO, stock par lot, catalogue, achats et imports, SAV, qualit\u00e9 et rappels, portail client B2B.',
    pitch:
      'Du premier contact client jusqu\u2019\u00e0 la maintenance de l\u2019\u00e9quipement install\u00e9, Medira structure toute l\u2019activit\u00e9 d\u2019un distributeur m\u00e9dical : CRM, devis, appels d\u2019offres publics, commandes avec allocation FEFO, tra\u00e7abilit\u00e9 des lots, catalogue, achats \u00e0 l\u2019international, SAV et parc install\u00e9, qualit\u00e9 et rappels produits.',
    longDescription:
      'Con\u00e7u pour les distributeurs et importateurs d\u2019\u00e9quipements et de consommables m\u00e9dicaux au Maroc, Medira couvre un m\u00e9tier \u00e0 forte exigence r\u00e9glementaire : march\u00e9s publics hospitaliers, cha\u00eene du froid, tra\u00e7abilit\u00e9 des lots jusqu\u2019au rappel fabricant, et parc d\u2019\u00e9quipements install\u00e9s chez des dizaines de clients.',
    stats: [
      { value: '14', label: 'modules m\u00e9tier' },
      { value: 'FEFO', label: 'allocation stock automatique' },
      { value: 'GS1', label: 'scan codes-barres fabricants' },
    ],
    modules: [
      {
        title: 'Tableau de bord',
        text: 'Une vue direction compl\u00e8te : chiffre d\u2019affaires factur\u00e9, encours clients, lots \u00e0 p\u00e9remption proche et appels d\u2019offres \u00e0 d\u00e9poser, avec graphiques de CA et de marge par segment client.',
        points: ['CA et marge brute en temps r\u00e9el', 'R\u00e9partition du CA par segment client', 'Vigilance p\u00e9remptions et activit\u00e9 r\u00e9cente'],
        image: '/screenshots/medira/tableau-de-bord.png',
      },
      {
        title: 'Clients & CRM',
        text: 'Chaque \u00e9tablissement dispose d\u2019une fiche compl\u00e8te avec contact, CA, encours, d\u00e9lai de r\u00e8glement et autorisations r\u00e9glementaires (DMP).',
        points: ['Segmentation par type d\u2019\u00e9tablissement', 'Suivi des autorisations DMP par client', 'Historique d\u2019achats et encours en un coup d\u2019\u0153il'],
        image: '/screenshots/medira/clients-crm.png',
      },
      {
        title: 'Devis',
        text: 'Des devis professionnels g\u00e9n\u00e9r\u00e9s en quelques minutes, suivis par statut et convertibles en commande d\u2019un seul clic une fois accept\u00e9s.',
        points: ['Suivi par statut avec filtres rapides', 'Conversion devis \u2192 commande en un clic', 'Validit\u00e9 et relances suivies'],
        image: '/screenshots/medira/devis.png',
      },
      {
        title: 'Commandes & allocation FEFO',
        text: 'La pr\u00e9paration des commandes applique automatiquement la r\u00e8gle FEFO : les lots les plus proches de p\u00e9remption sortent en priorit\u00e9.',
        points: ['Allocation FEFO automatique et justifi\u00e9e', 'Suivi de pr\u00e9paration en temps r\u00e9el', 'Bons de livraison g\u00e9n\u00e9r\u00e9s'],
        image: '/screenshots/medira/commandes.png',
      },
      {
        title: 'Appels d\u2019offres & march\u00e9s publics',
        text: 'Veille, montage des dossiers, cautions bancaires et suivi des march\u00e9s attribu\u00e9s \u2014 avec compte \u00e0 rebours avant chaque date de d\u00e9p\u00f4t.',
        points: ['Compte \u00e0 rebours par dossier', 'Suivi des pi\u00e8ces admin / technique / financi\u00e8re', 'Cautions bancaires centralis\u00e9es'],
        image: '/screenshots/medira/appels-offres.png',
      },
      {
        title: 'Facturation & recouvrement',
        text: 'Facturation conforme aux march\u00e9s publics marocains avec relances automatis\u00e9es \u00e0 plusieurs niveaux sur les impay\u00e9s.',
        points: ['Gestion des retenues de garantie', 'Relances automatis\u00e9es par niveau', 'Suivi des d\u00e9lais publics vs priv\u00e9s'],
        image: '/screenshots/medira/facturation.png',
      },
      {
        title: 'Stock & lots',
        text: 'Tra\u00e7abilit\u00e9 lot par lot avec alertes de p\u00e9remption \u00e0 90, 60 et 30 jours, gestion multi-d\u00e9p\u00f4ts.',
        points: ['Alertes p\u00e9remption 90 / 60 / 30 jours', 'Tra\u00e7abilit\u00e9 compl\u00e8te r\u00e9ception \u2192 client livr\u00e9', 'R\u00e9approvisionnement pr\u00e9dictif par IA'],
        image: '/screenshots/medira/stock-lots.png',
      },
      {
        title: 'Catalogue produits',
        text: 'Chaque r\u00e9f\u00e9rence est document\u00e9e avec son certificat CE, son enregistrement DMP, ses conditions de conservation et sa marge.',
        points: ['Certificats CE et enregistrements DMP attach\u00e9s', 'Indicateur cha\u00eene du froid par produit', 'Marges masqu\u00e9es selon le r\u00f4le utilisateur'],
        image: '/screenshots/medira/catalogue.png',
      },
      {
        title: 'Achats & imports',
        text: 'Suivi des dossiers d\u2019importation \u00e9tape par \u00e9tape avec vos fournisseurs internationaux et leurs conditions de paiement.',
        points: ['Suivi visuel des \u00e9tapes d\u2019importation', 'Fournisseurs et conditions de paiement centralis\u00e9s', 'Prix de revient r\u00e9el (achat + fret + douane)'],
        image: '/screenshots/medira/achats-imports.png',
      },
      {
        title: 'SAV & parc install\u00e9',
        text: 'Un registre complet des \u00e9quipements install\u00e9s chez vos clients, avec contrats de maintenance et tickets d\u2019intervention suivis par technicien.',
        points: ['Registre des \u00e9quipements par client', 'Contrats de maintenance et \u00e9ch\u00e9ances', 'Tickets d\u2019intervention par technicien'],
        image: '/screenshots/medira/sav-parc-installe.png',
      },
      {
        title: 'Qualit\u00e9 & rappels',
        text: 'Non-conformit\u00e9s, actions correctives (CAPA), quarantaine automatique \u00e0 r\u00e9ception et campagnes de rappel produit.',
        points: ['Quarantaine automatique \u00e0 r\u00e9ception', 'Non-conformit\u00e9s et CAPA trac\u00e9es', 'Campagnes de rappel avec taux d\u2019efficacit\u00e9'],
        image: '/screenshots/medira/qualite-rappels.png',
      },
      {
        title: 'Consignation & retours',
        text: 'Gestion du stock d\u00e9pos\u00e9 chez vos clients et factur\u00e9 \u00e0 la consommation, ainsi que des retours (RMA) avec d\u00e9cision qualit\u00e9.',
        points: ['Stock en consignation factur\u00e9 \u00e0 la consommation', 'Retours (RMA) avec d\u00e9cision qualit\u00e9', 'Consignation fournisseur (tr\u00e9sorerie pr\u00e9serv\u00e9e)'],
        image: '/screenshots/medira/consignation-retours.png',
      },
      {
        title: 'Rapports & analyses',
        text: 'Rentabilit\u00e9 par famille de produits, par march\u00e9 public et pipeline commercial complet, exportable en Excel ou PDF.',
        points: ['Marge brute par famille de produits', 'Rentabilit\u00e9 des march\u00e9s publics attribu\u00e9s', 'Pipeline commercial en vue kanban'],
        image: '/screenshots/medira/rapports.png',
      },
      {
        title: 'Param\u00e8tres & r\u00f4les',
        text: 'Une matrice de droits granulaire et un journal d\u2019audit horodat\u00e9 avec signature \u00e9lectronique sur les actions sensibles.',
        points: ['Matrice de droits par profil m\u00e9tier', 'Journal d\u2019audit horodat\u00e9 et inviolable', 'Signature \u00e9lectronique sur les validations critiques'],
        image: '/screenshots/medira/parametres-roles.png',
      },
    ],
    patientApp: {
      title: 'Portail Client B2B \u2014 l\u2019espace commande de vos clients',
      text: 'Vos clients hospitaliers et cliniques commandent directement en ligne, \u00e0 leurs tarifs n\u00e9goci\u00e9s, sans passer par un commercial.',
      image: '/screenshots/medira/portail-client-b2b.png',
      points: [
        'Tarifs n\u00e9goci\u00e9s appliqu\u00e9s automatiquement par client',
        'Recommande en un clic la derni\u00e8re commande',
        'Suivi des livraisons et historique des factures',
        'Certificats CE et enregistrements DMP accessibles',
        'Int\u00e9gration e-facturation DGI et export comptable',
      ],
      stats: [
        { value: '62%', label: 'des commandes passent en ligne' },
        { value: '+35%', label: 'de commandes portail en un mois' },
        { value: '~14h', label: 'de saisie \u00e9conomis\u00e9es par mois' },
      ],
    },
    features: [
      { title: 'Tableau de bord', text: 'CA, marge et alertes de la direction en un coup d\u2019\u0153il.' },
      { title: 'Clients & CRM', text: 'Fiches \u00e9tablissements avec CA, encours et autorisations.' },
      { title: 'Devis', text: 'G\u00e9n\u00e9r\u00e9s en minutes, convertis en commande en un clic.' },
      { title: 'Commandes & FEFO', text: 'Allocation automatique des lots \u00e0 \u00e9couler en priorit\u00e9.' },
      { title: 'Appels d\u2019offres', text: 'Dossiers, cautions et march\u00e9s publics suivis.' },
      { title: 'Facturation', text: 'Retenues de garantie et relances automatis\u00e9es.' },
      { title: 'Stock & lots', text: 'Tra\u00e7abilit\u00e9 compl\u00e8te, alertes de p\u00e9remption.' },
      { title: 'Catalogue', text: 'Certificats CE/DMP et marges par r\u00e9f\u00e9rence.' },
      { title: 'Achats & imports', text: 'Suivi des dossiers d\u2019importation \u00e9tape par \u00e9tape.' },
      { title: 'SAV & parc install\u00e9', text: '\u00c9quipements, contrats et tickets par technicien.' },
      { title: 'Qualit\u00e9 & rappels', text: 'CAPA, quarantaine et campagnes de rappel.' },
      { title: 'Consignation & retours', text: 'Stock consign\u00e9 factur\u00e9 \u00e0 la consommation.' },
      { title: 'Rapports', text: 'Marge par famille et pipeline commercial.' },
      { title: 'Param\u00e8tres & r\u00f4les', text: 'Matrice de droits et journal d\u2019audit sign\u00e9.' },
      { title: 'Portail Client B2B', text: 'Vos clients commandent en ligne \u00e0 leurs tarifs.' },
    ],
    trust: [
      { title: 'Conforme aux march\u00e9s publics marocains', text: 'Retenues de garantie, cautions bancaires et d\u00e9lais de r\u00e8glement publics g\u00e9r\u00e9s nativement.' },
      { title: 'Tra\u00e7abilit\u00e9 r\u00e9glementaire compl\u00e8te', text: 'Chaque lot suivi de la r\u00e9ception au client livr\u00e9, pr\u00eat pour un rappel fabricant ou un contr\u00f4le.' },
      { title: 'Qualit\u00e9 pharmaceutique int\u00e9gr\u00e9e', text: 'Quarantaine \u00e0 r\u00e9ception, CAPA et campagnes de rappel align\u00e9es sur les bonnes pratiques ISO 13485.' },
    ],
    faqs: [
      {
        q: 'Medira g\u00e8re-t-il les appels d\u2019offres publics et leurs cautions ?',
        a: 'Oui, chaque dossier d\u2019appel d\u2019offres est suivi avec ses pi\u00e8ces administratives, techniques et financi\u00e8res, ses cautions bancaires et un compte \u00e0 rebours avant le d\u00e9p\u00f4t.',
      },
      {
        q: 'Comment fonctionne l\u2019allocation FEFO des commandes ?',
        a: 'Lors de la pr\u00e9paration d\u2019une commande, Medira propose automatiquement les lots les plus proches de p\u00e9remption avec une justification affich\u00e9e.',
      },
      {
        q: 'Le portail client B2B est-il personnalisable par client ?',
        a: 'Oui, chaque client voit ses propres tarifs n\u00e9goci\u00e9s et son propre historique \u2014 totalement ind\u00e9pendant des autres comptes clients.',
      },
      {
        q: 'Medira accompagne-t-il un rappel de produit fabricant ?',
        a: 'Oui, le module Qualit\u00e9 & Rappels notifie automatiquement les clients concern\u00e9s, suit les retours et calcule le taux d\u2019efficacit\u00e9 du rappel.',
      },
      {
        q: 'Peut-on suivre le SAV d\u2019un \u00e9quipement pr\u00e9cis avec son num\u00e9ro de s\u00e9rie ?',
        a: 'Oui, chaque ticket SAV se rattache \u00e0 l\u2019\u00e9quipement exact install\u00e9 chez le client, avec son num\u00e9ro de s\u00e9rie, sa garantie et son contrat de maintenance.',
      },
    ],
    audience: 'Distributeurs et importateurs d\u2019\u00e9quipements et de consommables m\u00e9dicaux',
  },

  // ─── NOUVEAUX PRODUITS ────────────────────────────────────────

  {
    slug: 'medikara',
    name: 'Medikara',
    badgeSet: 'sante',
    related: ['medira', 'dialya'],
    sector: 'Industrie pharmaceutique & délégués médicaux',
    tagline: 'Pilotez vos délégués médicaux, vos visites et vos objectifs depuis un seul tableau de bord.',
    seoTitle: 'Medikara — Logiciel de gestion pour délégués médicaux et laboratoires pharmaceutiques au Maroc',
    seoDescription:
      'Medikara est le logiciel de gestion de la force de vente pharmaceutique au Maroc : planification des visites, suivi des délégués, reporting terrain, gestion des échantillons, CRM médecins et tableaux de bord direction.',
    pitch:
      'Vos délégués médicaux planifient leurs tournées sur WhatsApp, remplissent des rapports papier et les objectifs de visite se perdent dans des tableaux Excel ? Medikara centralise toute votre force de vente — planning, terrain, échantillons et reporting — pour que la direction pilote en temps réel et que chaque délégué se concentre sur ses médecins cibles.',
    longDescription:
      'Conçu pour les laboratoires pharmaceutiques et les grossistes-répartiteurs marocains, Medikara couvre le cycle complet de la visite médicale : segmentation et ciblage des médecins, planification des tournées par zone, saisie terrain des comptes-rendus de visite, gestion des échantillons et des dotations, suivi des objectifs par délégué et par produit, et reporting consolidé pour la direction des ventes. Le logiciel s\'adresse aussi bien aux forces de vente internes qu\'aux délégués externalisés.',
    stats: [
      { value: '10', label: 'modules métier' },
      { value: 'GPS', label: 'validation des visites terrain' },
      { value: '100%', label: 'reporting digitalisé' },
    ],
    modules: [
      {
        title: 'Tableau de bord direction',
        text: 'Une vue consolidée de toute la force de vente : taux de couverture médecins, objectifs atteints par produit et par délégué, visites du jour en cours — sans attendre le rapport de fin de semaine.',
        points: ['Taux de couverture médecins en temps réel', 'Objectifs par produit et par délégué', 'Visites du jour suivies en direct'],
        image: '/screenshots/medikara/tableau-de-bord.png',
      },
      {
        title: 'Ciblage & segmentation médecins',
        text: 'Classez vos médecins par potentiel (A/B/C), spécialité et zone géographique. Chaque délégué voit sa liste de cibles prioritaires et la fréquence de visite recommandée.',
        points: ['Segmentation A/B/C par potentiel prescripteur', 'Fréquence de visite par classe', 'Historique des interactions par médecin'],
        image: '/screenshots/medikara/ciblage-medecins.png',
      },
      {
        title: 'Planning des tournées',
        text: 'Chaque délégué planifie sa semaine sur l\'application mobile : médecins à visiter, itinéraire optimisé et créneaux horaires — validés par le superviseur avant le départ.',
        points: ['Planning hebdomadaire par délégué', 'Validation superviseur avant tournée', 'Itinéraire optimisé par zone'],
        image: '/screenshots/medikara/planning-tournees.png',
      },
      {
        title: 'Comptes-rendus de visite',
        text: 'Le délégué saisit son compte-rendu directement depuis son téléphone en fin de visite : produits présentés, réaction du médecin, demande d\'échantillons et prochaine date.',
        points: ['Saisie mobile en fin de visite', 'Produits présentés et réactions enregistrés', 'Géolocalisation automatique de la visite'],
        image: '/screenshots/medikara/comptes-rendus-visite.png',
      },
      {
        title: 'Gestion des échantillons',
        text: 'Stock d\'échantillons alloué par délégué, suivi des remises médecin par visite et alertes de rupture — pour que chaque dotation soit traçable et conforme à la réglementation.',
        points: ['Stock alloué par délégué', 'Remises médecin tracées par visite', 'Alertes de rupture d\'échantillons'],
        image: '/screenshots/medikara/gestion-echantillons.png',
      },
      {
        title: 'Objectifs & incentives',
        text: 'Définissez les objectifs de vente par produit, par zone et par délégué. Le tableau de bord individuel montre en temps réel l\'avancement et le bonus projeté.',
        points: ['Objectifs par produit et par période', 'Suivi d\'avancement individuel en temps réel', 'Calcul automatique des incentives'],
        image: '/screenshots/medikara/objectifs-incentives.png',
      },
      {
        title: 'CRM médecins & pharmacies',
        text: 'Une fiche complète pour chaque médecin et chaque pharmacie : coordonnées, spécialité, potentiel prescripteur, historique des visites et notes du délégué.',
        points: ['Fiche médecin avec historique complet', 'Segmentation pharmacies par volume', 'Notes et alertes par contact'],
        image: '/screenshots/medikara/crm-medecins.png',
      },
      {
        title: 'Reporting terrain',
        text: 'Les rapports hebdomadaires et mensuels se génèrent automatiquement à partir des données saisies sur le terrain — plus besoin de les consolider manuellement chaque fin de semaine.',
        points: ['Rapport hebdomadaire automatique', 'Analyse par produit et par zone', 'Export PDF et Excel pour la direction'],
        image: '/screenshots/medikara/reporting-terrain.png',
      },
      {
        title: 'Superviseur & validation',
        text: 'Le superviseur valide les plannings, contrôle les comptes-rendus, détecte les visites non effectuées et coache ses délégués depuis un tableau de bord dédié.',
        points: ['Validation des plannings avant tournée', 'Détection des visites manquées', 'Tableau de bord superviseur dédié'],
        image: '/screenshots/medikara/superviseur-validation.png',
      },
      {
        title: 'Paramètres & accès',
        text: 'Gestion fine des profils (directeur des ventes, superviseur, délégué) avec des vues et des droits adaptés à chaque niveau hiérarchique.',
        points: ['Profils direction / superviseur / délégué', 'Zones géographiques configurables', 'Multi-laboratoires sur un seul compte'],
        image: '/screenshots/medikara/parametres-acces.png',
      },
    ],
    patientApp: {
      title: 'Application délégué — le terrain dans la poche',
      text: 'Le délégué médical gère toute sa journée depuis son smartphone : liste des visites du jour, fiche médecin, compte-rendu en fin de visite et stock d\'échantillons disponible. Aucun rapport papier, aucune ressaisie le soir.',
      points: [
        'Liste des visites du jour et itinéraire',
        'Fiche médecin complète avec historique',
        'Compte-rendu saisi en moins de 2 minutes',
        'Stock d\'échantillons disponible en temps réel',
        'Synchronisation automatique avec le back-office',
      ],
      stats: [
        { value: '0', label: 'rapport papier en fin de journée' },
        { value: 'LIVE', label: 'avancement des objectifs en direct' },
        { value: '-60%', label: 'de temps de saisie administratif' },
      ],
    },
    features: [
      { title: 'Tableau de bord direction', text: 'Couverture, objectifs et visites en temps réel.' },
      { title: 'Ciblage médecins', text: 'Segmentation A/B/C et fréquence de visite.' },
      { title: 'Planning tournées', text: 'Hebdomadaire, validé par le superviseur.' },
      { title: 'Comptes-rendus mobile', text: 'Saisie terrain géolocalisée en fin de visite.' },
      { title: 'Gestion échantillons', text: 'Stock alloué par délégué, remises tracées.' },
      { title: 'Objectifs & incentives', text: 'Avancement et bonus calculés en temps réel.' },
      { title: 'CRM médecins', text: 'Fiche complète avec historique et notes.' },
      { title: 'Reporting automatique', text: 'Rapports hebdomadaires sans saisie manuelle.' },
      { title: 'Superviseur & validation', text: 'Contrôle des tournées et coaching.' },
      { title: 'Application délégué', text: 'Tout le terrain géré depuis le smartphone.' },
    ],
    trust: [
      { title: 'Conçu pour le terrain marocain', text: 'Zones, spécialités et contraintes du marché pharmaceutique marocain intégrées nativement.' },
      { title: 'Zéro rapport papier', text: 'Tous les comptes-rendus saisis sur mobile, disponibles en temps réel pour la direction.' },
      { title: 'Objectifs toujours visibles', text: 'Chaque délégué connaît son avancement en temps réel — plus d\'attente du bilan de fin de mois.' },
    ],
    faqs: [
      {
        q: 'Medikara fonctionne-t-il pour des délégués externalisés ?',
        a: 'Oui, vous pouvez créer des comptes délégués pour des forces de vente externalisées avec des droits limités à leur propre zone et leurs propres médecins cibles.',
      },
      {
        q: 'Comment se valide une visite médicale ?',
        a: 'Le délégué saisit son compte-rendu directement depuis l\'application mobile en fin de visite. La géolocalisation est enregistrée automatiquement pour valider la présence sur le terrain.',
      },
      {
        q: 'Peut-on suivre les objectifs par produit et par zone simultanément ?',
        a: 'Oui, les objectifs sont configurables par produit, par zone géographique et par délégué, avec un tableau de bord croisé pour la direction des ventes.',
      },
      {
        q: 'Comment fonctionne la gestion des échantillons ?',
        a: 'Chaque délégué dispose d\'un stock alloué visible depuis son application. Chaque remise d\'échantillon est tracée par visite et par médecin, avec alerte de rupture automatique.',
      },
      {
        q: 'Les données terrain sont-elles disponibles immédiatement pour la direction ?',
        a: 'Oui, dès que le délégué soumet son compte-rendu depuis le terrain, les données sont disponibles en temps réel sur le tableau de bord de la direction et des superviseurs.',
      },
    ],
    audience: 'Directeurs des ventes et superviseurs de laboratoires pharmaceutiques',
  },

  {
    slug: 'restara',
    name: 'Restara',
    badgeSet: 'restauration',
    related: ['skolara', 'batira'],
    sector: 'Cafés, restaurants & restauration collective',
    tagline: 'De la caisse à la cuisine, gérez toute votre salle depuis un seul écran.',
    seoTitle: 'Restara — Logiciel de gestion pour restaurant et café au Maroc',
    seoDescription:
      'Restara est le logiciel de gestion pour restaurants et cafés au Maroc : caisse tactile, commandes en salle, gestion des tables, stock cuisine, fiches techniques, fidélité client et reporting journalier.',
    pitch:
      'Vos serveurs prennent les commandes sur papier, votre caisse ne parle pas à la cuisine et votre stock se fait à l\'œil ? Restara connecte la salle, la cuisine et la caisse dans un seul outil — pour que vous passiez moins de temps à gérer et plus de temps avec vos clients.',
    longDescription:
      'Conçu pour les restaurants, cafés et établissements de restauration collective marocains, Restara couvre le cycle complet du service : prise de commande en salle sur tablette, transmission instantanée en cuisine, gestion des tables et du plan de salle, caisse tactile avec paiement fractionné, stock et fiches techniques par plat, programme de fidélité et reporting journalier. Le logiciel s\'adapte aussi bien à un café de quartier qu\'à un restaurant gastronomique ou une chaîne multi-établissements.',
    stats: [
      { value: '9', label: 'modules métier' },
      { value: '< 30s', label: 'commande transmise en cuisine' },
      { value: '100%', label: 'caisse digitalisée' },
    ],
    modules: [
      {
        title: 'Tableau de bord',
        text: 'Le chiffre d\'affaires du jour, les tables occupées, les commandes en cours et les plats les plus vendus — visibles en un coup d\'œil dès l\'ouverture du service.',
        points: ['CA du jour et comparaison J-1', 'Tables occupées et taux de remplissage', 'Top plats et alertes stock cuisine'],
        image: '/screenshots/restara/tableau-de-bord.png',
      },
      {
        title: 'Plan de salle & tables',
        text: 'Un plan de salle interactif : voyez en temps réel quelles tables sont libres, occupées ou en attente d\'addition. Affectez les serveurs et suivez la durée de chaque service.',
        points: ['Plan de salle configurable', 'Statut des tables en temps réel', 'Affectation des serveurs par zone'],
        image: '/screenshots/restara/plan-de-salle.png',
      },
      {
        title: 'Prise de commande en salle',
        text: 'Le serveur prend la commande sur tablette ou smartphone : la commande part instantanément en cuisine avec les modifications et les allergènes signalés, sans passer par la caisse.',
        points: ['Commande sur tablette ou mobile', 'Transmission instantanée en cuisine', 'Modifications et allergènes signalés'],
        image: '/screenshots/restara/prise-de-commande.png',
      },
      {
        title: 'Gestion cuisine (KDS)',
        text: 'Un écran dédié en cuisine affiche les commandes par ordre d\'arrivée, avec la priorité des plats et le temps écoulé — pour que chaque table soit servie dans les temps.',
        points: ['Écran cuisine (KDS) dédié', 'Priorité et temps par commande', 'Synchronisation automatique avec la salle'],
        image: '/screenshots/restara/ecran-cuisine-kds.png',
      },
      {
        title: 'Caisse & paiements',
        text: 'Caisse tactile rapide avec paiement fractionné entre convives, gestion des additions partielles, espèces, carte et virement — et clôture de caisse automatique en fin de service.',
        points: ['Paiement fractionné entre convives', 'Espèces, carte, virement', 'Clôture de caisse automatique'],
        image: '/screenshots/restara/caisse-paiements.png',
      },
      {
        title: 'Carte & fiches techniques',
        text: 'Chaque plat dispose d\'une fiche technique avec ses ingrédients et leurs coûts. Restara calcule automatiquement votre marge par plat et vous alerte si un prix de revient dépasse votre seuil.',
        points: ['Fiches techniques par plat', 'Coût de revient calculé automatiquement', 'Alerte si marge insuffisante'],
        image: '/screenshots/restara/carte-fiches-techniques.png',
      },
      {
        title: 'Stock & approvisionnements',
        text: 'Les ingrédients se déduisent automatiquement du stock à chaque commande. Vous recevez une alerte quand un article atteint le seuil minimum — sans avoir à compter manuellement.',
        points: ['Déduction automatique à chaque commande', 'Alertes de seuil minimum', 'Bons de commande fournisseur générés'],
        image: '/screenshots/restara/stock-approvisionnements.png',
      },
      {
        title: 'Fidélité & clients',
        text: 'Un programme de fidélité simple : le client cumule des points à chaque visite et les convertit en avantages. Identifiez vos meilleurs clients et leurs habitudes de consommation.',
        points: ['Cumul de points par visite', 'Conversion en réductions ou cadeaux', 'Historique des visites par client'],
        image: '/screenshots/restara/fidelite-clients.png',
      },
      {
        title: 'Reporting & analyses',
        text: 'CA par période, performance par serveur, plats les plus et les moins vendus, heures de pointe et taux de remplissage — pour prendre les bonnes décisions sur votre carte et votre équipe.',
        points: ['CA par période et par serveur', 'Analyse des plats et des heures de pointe', 'Export pour votre comptable'],
        image: '/screenshots/restara/reporting-analyses.png',
      },
    ],
    patientApp: {
      title: 'Menu digital & commande en ligne',
      text: 'Vos clients scannent un QR code sur la table pour consulter la carte, passer leur commande et appeler le serveur — depuis leur propre téléphone. Idéal pour réduire l\'attente aux heures de pointe et proposer une expérience moderne.',
      points: [
        'QR code par table, aucune application à installer',
        'Commande depuis le téléphone du client',
        'Appel serveur intégré',
        'Menu mis à jour en temps réel depuis le back-office',
        'Disponible en français, arabe et anglais',
      ],
        image: '/screenshots/restara/menu-digital-qr.png',
      stats: [
        { value: '-40%', label: 'd\'attente pour la prise de commande' },
        { value: '0', label: 'application à installer pour le client' },
        { value: '3', label: 'langues disponibles sur le menu digital' },
      ],
    },
    features: [
      { title: 'Tableau de bord', text: 'CA du jour, tables et top plats en un coup d\'œil.' },
      { title: 'Plan de salle', text: 'Statut des tables en temps réel.' },
      { title: 'Prise de commande', text: 'Sur tablette, transmise instantanément en cuisine.' },
      { title: 'Écran cuisine (KDS)', text: 'Commandes affichées par priorité et par temps.' },
      { title: 'Caisse & paiements', text: 'Fractionné, espèces, carte, clôture automatique.' },
      { title: 'Carte & fiches techniques', text: 'Coût de revient et marge par plat.' },
      { title: 'Stock & approvisionnements', text: 'Déduction automatique, alertes de seuil.' },
      { title: 'Fidélité clients', text: 'Points, réductions et historique des visites.' },
      { title: 'Reporting', text: 'CA, performance serveurs et analyse des plats.' },
      { title: 'Menu digital QR', text: 'Commande depuis le téléphone du client.' },
    ],
    trust: [
      { title: 'Salle et cuisine connectées', text: 'La commande part en cuisine en moins de 30 secondes, sans erreur de transmission entre le serveur et le cuisinier.' },
      { title: 'Stock piloté automatiquement', text: 'Chaque plat vendu déduit ses ingrédients du stock — vous savez toujours ce qu\'il vous reste avant le service.' },
      { title: 'Adapté à toutes les tailles', text: 'Du café de quartier à la chaîne multi-établissements, Restara s\'adapte à votre configuration.' },
    ],
    faqs: [
      {
        q: 'Restara fonctionne-t-il sans connexion internet ?',
        a: 'Oui, Restara dispose d\'un mode hors-ligne pour la prise de commande et la caisse. Les données se synchronisent automatiquement dès que la connexion est rétablie.',
      },
      {
        q: 'Peut-on gérer plusieurs établissements avec un seul compte ?',
        a: 'Oui, chaque établissement a son propre espace avec sa carte, son stock et ses rapports — et la direction dispose d\'une vue consolidée sur l\'ensemble du réseau.',
      },
      {
        q: 'Le menu digital QR nécessite-t-il une application pour le client ?',
        a: 'Non, le client scanne simplement le QR code avec l\'appareil photo de son téléphone et accède au menu dans son navigateur — aucune installation n\'est requise.',
      },
      {
        q: 'Les fiches techniques sont-elles obligatoires pour utiliser le stock ?',
        a: 'Non, vous pouvez utiliser la caisse et le stock sans configurer les fiches techniques. Elles sont optionnelles mais très utiles pour suivre vos marges par plat.',
      },
      {
        q: 'Comment fonctionne la clôture de caisse ?',
        a: 'En fin de service, Restara génère automatiquement le rapport de caisse avec le détail des paiements par mode (espèces, carte, virement) et l\'écart éventuel avec le fond de caisse.',
      },
    ],
    audience: 'Gérants de restaurants, cafés et établissements de restauration',
  },

  {
    slug: 'batira',
    name: 'Batira',
    badgeSet: 'btp',
    related: ['restara', 'skolara'],
    sector: 'BTP & promotion immobilière',
    tagline: 'Pilotez vos chantiers, vos sous-traitants et vos programmes immobiliers depuis un seul outil.',
    seoTitle: 'Batira — Logiciel de gestion pour entreprises BTP et promoteurs immobiliers au Maroc',
    seoDescription:
      'Batira est le logiciel de gestion pour le BTP et la promotion immobilière au Maroc : suivi de chantier, planification, sous-traitants, états d\'avancement, facturation travaux et portail acquéreur.',
    pitch:
      'Vos chantiers sont suivis sur des fichiers Excel, vos sous-traitants relancés par WhatsApp et vos états d\'avancement préparés manuellement chaque fin de mois ? Batira centralise tout — planification, terrain, sous-traitants et facturation — pour que vous piloiez en temps réel sans réunion de coordination interminable.',
    longDescription:
      'Conçu pour les entreprises BTP et les promoteurs immobiliers marocains, Batira couvre le cycle complet d\'un projet de construction : de la planification initiale au suivi d\'avancement sur le terrain, en passant par la gestion des sous-traitants, le contrôle des coûts, la facturation des travaux et le portail acquéreur pour les programmes résidentiels. Le logiciel s\'adresse aussi bien aux PME du BTP qu\'aux promoteurs gérant plusieurs programmes simultanément.',
    stats: [
      { value: '10', label: 'modules métier' },
      { value: 'LIVE', label: 'avancement chantier en temps réel' },
      { value: '100%', label: 'sous-traitants digitalisés' },
    ],
    modules: [
      {
        title: 'Tableau de bord',
        text: 'Une vue d\'ensemble de tous vos projets actifs : avancement global, coûts engagés vs budget, jalons à venir et alertes de retard — sans attendre le rapport de fin de mois.',
        points: ['Avancement global par projet', 'Coûts engagés vs budget alloué', 'Alertes de retard et jalons critiques'],
        image: '/screenshots/batira/tableau-de-bord.png',
      },
      {
        title: 'Planification des travaux',
        text: 'Un planning Gantt par projet avec les phases, les lots de travaux et les jalons clés. Visualisez les dépendances entre tâches et identifiez immédiatement les risques de retard.',
        points: ['Planning Gantt par phase et par lot', 'Dépendances entre tâches', 'Chemin critique identifié automatiquement'],
        image: '/screenshots/batira/planification-travaux.png',
      },
      {
        title: 'Suivi d\'avancement terrain',
        text: 'Le chef de chantier saisit l\'avancement directement depuis le terrain via l\'application mobile : pourcentage d\'avancement par tâche, photos horodatées et incidents signalés.',
        points: ['Saisie mobile sur le terrain', 'Photos horodatées par lot de travaux', 'Incidents et réserves signalés'],
        image: '/screenshots/batira/suivi-avancement-terrain.png',
      },
      {
        title: 'Gestion des sous-traitants',
        text: 'Un registre complet de vos sous-traitants avec leurs marchés, leurs situations de travaux mensuelles et le suivi de leurs paiements — pour ne jamais perdre le fil d\'un contrat.',
        points: ['Marchés et avenants par sous-traitant', 'Situations de travaux mensuelles', 'Suivi des paiements et retenues de garantie'],
        image: '/screenshots/batira/gestion-sous-traitants.png',
      },
      {
        title: 'Contrôle des coûts',
        text: 'Chaque dépense est rattachée à un lot de travaux et comparée au budget initial. Les écarts sont signalés en temps réel avant qu\'ils ne deviennent incontrôlables.',
        points: ['Dépenses rattachées par lot', 'Comparaison budget vs réalisé en temps réel', 'Alertes de dépassement par lot'],
        image: '/screenshots/batira/controle-des-couts.png',
      },
      {
        title: 'Facturation travaux',
        text: 'Situations de travaux, décomptes mensuels et factures générés automatiquement selon l\'avancement réel — avec retenues de garantie et délais de règlement conformes aux pratiques marocaines.',
        points: ['Décomptes mensuels automatiques', 'Retenues de garantie intégrées', 'Délais de règlement par maître d\'ouvrage'],
        image: '/screenshots/batira/facturation-travaux.png',
      },
      {
        title: 'Documents & plans',
        text: 'Centralisez tous les documents de chantier — plans, CCTP, PV de réception, DOE — par projet et par lot, accessibles à toute l\'équipe depuis le bureau ou le terrain.',
        points: ['Documents centralisés par projet', 'Versionnement des plans', 'Accès mobile sur le terrain'],
        image: '/screenshots/batira/documents-plans.png',
      },
      {
        title: 'Appels d\'offres & marchés',
        text: 'Consultations, remise des offres, comparatifs de prix et attribution des marchés — tout le processus d\'appel d\'offres dans un seul outil, avec traçabilité complète.',
        points: ['Consultation des sous-traitants', 'Comparatif d\'offres par lot', 'Attribution et notification automatique'],
        image: '/screenshots/batira/appels-offres.png',
      },
      {
        title: 'Portail acquéreur',
        text: 'Pour les promoteurs immobiliers : vos acquéreurs suivent l\'avancement de leur logement, consultent le planning prévisionnel de livraison et reçoivent les appels de fonds directement depuis leur espace personnel.',
        points: ['Avancement du logement visible par l\'acquéreur', 'Appels de fonds notifiés automatiquement', 'Documents de vente accessibles en ligne'],
        image: '/screenshots/batira/portail-acquereur.png',
      },
      {
        title: 'Reporting & analyses',
        text: 'Rentabilité par programme, performance par chantier et tableau de bord multi-projets — pour piloter votre portefeuille de chantiers avec des chiffres à jour.',
        points: ['Rentabilité par programme', 'Performance par chantier et par chef de projet', 'Export pour vos partenaires bancaires'],
        image: '/screenshots/batira/reporting-analyses.png',
      },
    ],
    patientApp: {
      title: 'Application terrain — le chantier dans la poche',
      text: 'Le chef de chantier ou le conducteur de travaux gère son projet depuis le terrain : saisie de l\'avancement, photos horodatées, signalement d\'incidents et consultation des plans — sans retour au bureau.',
      points: [
        'Avancement saisi par lot depuis le mobile',
        'Photos horodatées et géolocalisées',
        'Plans consultables hors connexion',
        'Incidents et réserves signalés en temps réel',
        'Synchronisation automatique avec le back-office',
      ],
      stats: [
        { value: '0', label: 'déplacement bureau pour signaler un incident' },
        { value: 'LIVE', label: 'avancement visible par la direction' },
        { value: '-50%', label: 'de temps de reporting mensuel' },
      ],
    },
    features: [
      { title: 'Tableau de bord', text: 'Avancement, coûts et alertes de tous vos projets.' },
      { title: 'Planning Gantt', text: 'Phases, lots et chemin critique identifiés.' },
      { title: 'Suivi terrain mobile', text: 'Avancement et photos horodatées depuis le chantier.' },
      { title: 'Sous-traitants', text: 'Marchés, situations et paiements centralisés.' },
      { title: 'Contrôle des coûts', text: 'Budget vs réalisé en temps réel, alertes de dépassement.' },
      { title: 'Facturation travaux', text: 'Décomptes automatiques, retenues de garantie.' },
      { title: 'Documents & plans', text: 'Centralisés par projet, accessibles sur le terrain.' },
      { title: 'Appels d\'offres', text: 'Consultation, comparatif et attribution des marchés.' },
      { title: 'Portail acquéreur', text: 'Avancement et appels de fonds pour vos acheteurs.' },
      { title: 'Reporting', text: 'Rentabilité par programme et performance par chantier.' },
    ],
    trust: [
      { title: 'Construit pour le BTP marocain', text: 'Retenues de garantie, délais de règlement et pratiques contractuelles du marché marocain intégrés nativement.' },
      { title: 'Terrain et bureau connectés', text: 'L\'avancement saisi sur le terrain est visible en temps réel par la direction — sans attendre le rapport hebdomadaire.' },
      { title: 'Coûts toujours sous contrôle', text: 'Chaque dépense est comparée au budget en temps réel — les dépassements sont signalés avant qu\'il ne soit trop tard.' },
    ],
    faqs: [
      {
        q: 'Batira convient-il aux petites entreprises BTP comme aux grands promoteurs ?',
        a: 'Oui, Batira s\'adapte à votre taille : une PME du BTP utilisera le suivi de chantier et les sous-traitants, un promoteur activera en plus le portail acquéreur et le suivi multi-programmes.',
      },
      {
        q: 'Comment fonctionne le suivi d\'avancement terrain ?',
        a: 'Le chef de chantier saisit le pourcentage d\'avancement par tâche ou par lot depuis son smartphone, avec des photos horodatées. Les données sont visibles immédiatement par la direction.',
      },
      {
        q: 'Le portail acquéreur nécessite-t-il un compte pour chaque acheteur ?',
        a: 'Oui, chaque acquéreur reçoit un accès personnel à son espace, où il voit uniquement son logement, son planning prévisionnel et ses appels de fonds.',
      },
      {
        q: 'Peut-on gérer plusieurs programmes simultanément ?',
        a: 'Oui, Batira est conçu pour la gestion multi-projets : chaque programme a son propre planning, son budget et ses sous-traitants, avec une vue consolidée pour la direction.',
      },
      {
        q: 'Les documents de chantier sont-ils accessibles hors connexion ?',
        a: 'Oui, les plans et les documents téléchargés sur l\'application mobile restent accessibles même sans connexion internet sur le chantier.',
      },
    ],
    audience: 'Dirigeants d\'entreprises BTP et promoteurs immobiliers',
  },

  {
    slug: 'skolara',
    name: 'Skolara',
    badgeSet: 'education',
    related: ['restara', 'batira'],
    sector: 'Écoles, lycées & établissements préscolaires',
    tagline: 'Gérez votre établissement, vos élèves et vos parents depuis une seule plateforme.',
    seoTitle: 'Skolara — Logiciel de gestion pour écoles, lycées et crèches au Maroc',
    seoDescription:
      'Skolara est le logiciel de gestion scolaire pour établissements privés au Maroc : inscriptions, emplois du temps, absences, notes, communication parents, paiements et application famille incluse.',
    pitch:
      'Vos inscriptions se font encore sur papier, les absences sont notées dans un registre et les parents appellent pour savoir si leur enfant est présent ? Skolara connecte votre administration, vos enseignants et vos parents dans une seule plateforme — pour que votre équipe passe moins de temps à gérer et plus de temps à enseigner.',
    longDescription:
      'Conçu pour les établissements scolaires privés marocains — écoles primaires, collèges, lycées et crèches — Skolara couvre le cycle complet de la vie scolaire : inscriptions et dossiers élèves, emplois du temps et gestion des salles, saisie des absences et retards, notes et bulletins, communication avec les parents, paiements des frais de scolarité et application famille. Le logiciel s\'adresse aussi bien aux petites structures qu\'aux réseaux d\'établissements multi-sites.',
    stats: [
      { value: '10', label: 'modules métier' },
      { value: 'LIVE', label: 'absences notifiées aux parents' },
      { value: '100%', label: 'bulletins générés automatiquement' },
    ],
    modules: [
      {
        title: 'Tableau de bord direction',
        text: 'Effectifs par niveau, taux de présence du jour, paiements en retard et alertes prioritaires — tout ce que la direction a besoin de voir dès le matin, sans ouvrir plusieurs fichiers.',
        points: ['Effectifs et taux de présence en temps réel', 'Paiements en retard centralisés', 'Alertes administratives prioritaires'],
        image: '/screenshots/skolara/tableau-de-bord.png',
      },
      {
        title: 'Inscriptions & dossiers élèves',
        text: 'Le dossier complet de chaque élève : informations personnelles, contacts des parents, documents administratifs, historique scolaire et allergies ou besoins particuliers.',
        points: ['Dossier élève complet et centralisé', 'Documents administratifs attachés', 'Historique scolaire sur plusieurs années'],
        image: '/screenshots/skolara/inscriptions-eleves.png',
      },
      {
        title: 'Emplois du temps',
        text: 'Construisez les emplois du temps de chaque classe en évitant automatiquement les conflits de salles et d\'enseignants. Modifiez en quelques clics en cas de changement.',
        points: ['Détection automatique des conflits', 'Vue par classe, par enseignant et par salle', 'Modification rapide en cas d\'imprévu'],
        image: '/screenshots/skolara/emplois-du-temps.png',
      },
      {
        title: 'Absences & retards',
        text: 'L\'enseignant saisit les absences depuis son téléphone ou la tablette de classe : les parents reçoivent une notification immédiate, et l\'administration voit les absences de toute l\'école en temps réel.',
        points: ['Saisie mobile par l\'enseignant', 'Notification immédiate aux parents', 'Vue globale des absences par classe'],
        image: '/screenshots/skolara/absences-retards.png',
      },
      {
        title: 'Notes & évaluations',
        text: 'Saisie des notes par matière et par enseignant, calcul automatique des moyennes et génération des bulletins scolaires — personnalisables selon votre maquette d\'établissement.',
        points: ['Saisie des notes par matière', 'Calcul automatique des moyennes', 'Bulletins générés en un clic'],
        image: '/screenshots/skolara/notes-evaluations.png',
      },
      {
        title: 'Communication parents',
        text: 'Envoyez des messages, des circulaires et des convocations aux parents directement depuis Skolara — par notification push, SMS ou email — sans passer par WhatsApp ou des imprimés.',
        points: ['Messages individuels ou groupes par classe', 'Circulaires et convocations envoyées depuis l\'appli', 'Accusé de lecture par parent'],
        image: '/screenshots/skolara/communication-parents.png',
      },
      {
        title: 'Paiements & scolarité',
        text: 'Suivez les paiements des frais de scolarité par élève : échéancier personnalisé, alertes de retard et reçus générés automatiquement — pour ne plus perdre de temps à relancer manuellement.',
        points: ['Échéancier personnalisé par famille', 'Alertes automatiques de retard de paiement', 'Reçus générés et envoyés automatiquement'],
        image: '/screenshots/skolara/paiements-scolarite.png',
      },
      {
        title: 'Gestion des enseignants',
        text: 'Fiches enseignants, contrats, planning de cours et suivi des heures effectuées — pour piloter votre équipe pédagogique sans jongler entre plusieurs tableaux Excel.',
        points: ['Fiche enseignant avec planning', 'Suivi des heures effectuées', 'Contrats et documents centralisés'],
        image: '/screenshots/skolara/gestion-enseignants.png',
      },
      {
        title: 'Cantine & activités',
        text: 'Gestion des inscriptions à la cantine, au transport scolaire et aux activités parascolaires, avec suivi des paiements et des présences pour chaque service.',
        points: ['Inscriptions cantine, transport, activités', 'Présences suivies par service', 'Facturation par service souscrit'],
        image: '/screenshots/skolara/cantine-activites.png',
      },
      {
        title: 'Rapports & statistiques',
        text: 'Taux de présence par classe, résultats scolaires par niveau et situation des paiements — des rapports clairs pour piloter votre établissement et préparer vos conseils de classe.',
        points: ['Taux de présence par classe et par matière', 'Résultats scolaires par niveau', 'Situation financière de l\'établissement'],
        image: '/screenshots/skolara/reporting-statistiques.png',
      },
    ],
    patientApp: {
      title: 'Application famille — l\'école dans la poche des parents',
      text: 'Les parents suivent la vie scolaire de leur enfant depuis leur smartphone : absences en temps réel, notes et bulletins dès leur publication, messages de l\'école et paiements des frais — sans appeler le secrétariat.',
      points: [
        'Absences notifiées immédiatement sur le téléphone',
        'Notes et bulletins disponibles dès publication',
        'Messages de l\'école reçus et envoyés depuis l\'appli',
        'Paiements des frais de scolarité depuis le mobile',
        'Planning de l\'enfant visible à tout moment',
      ],
      stats: [
        { value: '0', label: 'appel au secrétariat pour une absence' },
        { value: 'LIVE', label: 'notification dès que l\'enfant est absent' },
        { value: '100%', label: 'bulletins accessibles en ligne' },
      ],
    },
    features: [
      { title: 'Tableau de bord', text: 'Effectifs, présences et alertes de la direction.' },
      { title: 'Dossiers élèves', text: 'Complets, centralisés, accessibles en un clic.' },
      { title: 'Emplois du temps', text: 'Sans conflit, modifiables en quelques clics.' },
      { title: 'Absences & retards', text: 'Saisie mobile, notification immédiate aux parents.' },
      { title: 'Notes & bulletins', text: 'Moyennes calculées et bulletins générés automatiquement.' },
      { title: 'Communication parents', text: 'Messages, circulaires et convocations depuis l\'appli.' },
      { title: 'Paiements scolarité', text: 'Échéanciers, alertes et reçus automatiques.' },
      { title: 'Gestion enseignants', text: 'Planning, heures et contrats centralisés.' },
      { title: 'Cantine & activités', text: 'Inscriptions et paiements par service.' },
      { title: 'Application famille', text: 'L\'école dans la poche des parents.' },
    ],
    trust: [
      { title: 'Parents toujours informés', text: 'Chaque absence, chaque note et chaque message de l\'école est notifié immédiatement aux parents — sans intermédiaire.' },
      { title: 'Administration allégée', text: 'Bulletins, reçus et circulaires générés automatiquement — votre secrétariat gagne des heures chaque semaine.' },
      { title: 'Adapté aux établissements marocains', text: 'Calendrier scolaire, maquette de bulletin et langues (français/arabe) conformes aux pratiques des établissements privés marocains.' },
    ],
    faqs: [
      {
        q: 'Skolara convient-il aux crèches et aux établissements préscolaires ?',
        a: 'Oui, Skolara dispose d\'un mode préscolaire adapté : suivi des activités, communication avec les parents et gestion des repas et des siestes pour les plus jeunes.',
      },
      {
        q: 'Les parents ont-ils besoin d\'installer une application ?',
        a: 'L\'application famille est disponible sur iOS et Android et s\'installe facilement. Une version web est également accessible depuis un navigateur pour les parents qui préfèrent.',
      },
      {
        q: 'Peut-on gérer plusieurs établissements avec un seul compte ?',
        a: 'Oui, les réseaux d\'écoles peuvent gérer plusieurs établissements depuis une même interface avec une vue consolidée pour la direction du réseau.',
      },
      {
        q: 'Les bulletins sont-ils personnalisables selon notre maquette ?',
        a: 'Oui, la maquette du bulletin (logo, matières, coefficients, mentions) est entièrement configurable selon les standards de votre établissement.',
      },
      {
        q: 'Comment fonctionne le suivi des paiements de scolarité ?',
        a: 'Chaque famille dispose d\'un échéancier personnalisé. Skolara envoie des rappels automatiques avant chaque échéance et génère les reçus dès réception du paiement.',
      },
    ],
    audience: 'Directeurs et gestionnaires d\'établissements scolaires privés',
  },
];

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}