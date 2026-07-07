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
    sector: 'Laboratoires d\u2019analyses médicales',
    tagline: 'Le logiciel de gestion complet pour laboratoires d\u2019analyses médicales.',
    seoTitle: 'Labya — Logiciel de gestion pour laboratoire d\u2019analyses médicales au Maroc',
    seoDescription:
      'Labya digitalise votre laboratoire : réception patients, suivi des échantillons, validation biologique, facturation AMO / CNOPS / CNSS et portail patient en ligne.',
    pitch:
      'De la réception du patient à la remise des résultats, Labya couvre tout le parcours de votre laboratoire. Fini les registres papier et les fichiers Excel dispersés : chaque tube est tracé, chaque résultat est validé, chaque facture est conforme.',
    stats: [
      { value: '6', label: 'modules métier' },
      { value: '100%', label: 'traçabilité des échantillons' },
      { value: 'AMO', label: 'CNOPS · CNSS intégrés' },
    ],
    modules: [
      {
        title: 'Réception & prescriptions',
        text: 'Enregistrement patient rapide, scan de l\u2019ordonnance et sélection des analyses depuis votre catalogue.',
        points: ['Recherche patient instantanée', 'Import de l\u2019ordonnance scannée', 'Catalogue d\u2019analyses paramétrable'],
      },
      {
        title: 'Suivi des échantillons',
        text: 'Chaque tube suit un statut clair — prélevé, en cours, validé — visible par toute l\u2019équipe en temps réel.',
        points: ['Codes-barres et étiquetage', 'Statuts en temps réel', 'Historique complet du tube'],
      },
      {
        title: 'Validation biologique',
        text: 'Saisie des résultats avec valeurs de référence et alertes automatiques sur les valeurs critiques.',
        points: ['Valeurs de référence par âge/sexe', 'Alertes sur valeurs critiques', 'Double validation biologiste'],
      },
      {
        title: 'Facturation AMO / CNOPS / CNSS',
        text: 'Tiers payant, mutuelles et encaissements gérés nativement, conformes aux organismes marocains.',
        points: ['Tiers payant automatisé', 'Bordereaux organismes', 'Rapprochement des règlements'],
      },
      {
        title: 'Portail patient',
        text: 'Vos patients consultent leurs résultats en ligne et reçoivent une notification dès validation.',
        points: ['Accès sécurisé par lien/SMS', 'Notification à la validation', 'Historique des résultats'],
      },
      {
        title: 'Comptes rendus PDF',
        text: 'Des comptes rendus professionnels à l\u2019image de votre laboratoire, générés en un clic.',
        points: ['Modèle à votre en-tête', 'Génération en un clic', 'Envoi direct par email'],
      },
    ],
    features: [
      { title: 'Réception & prescriptions', text: 'Enregistrement patient et sélection des analyses en quelques secondes.' },
      { title: 'Suivi des échantillons', text: 'Statuts en temps réel, visibles par toute l\u2019équipe.' },
      { title: 'Validation biologique', text: 'Valeurs de référence et alertes automatiques.' },
      { title: 'Facturation AMO/CNOPS/CNSS', text: 'Tiers payant et mutuelles gérés nativement.' },
      { title: 'Portail patient', text: 'Résultats en ligne, notifiés automatiquement.' },
      { title: 'Comptes rendus PDF', text: 'Générés en un clic, à votre en-tête.' },
    ],
    trust: [
      { title: 'Conforme aux organismes marocains', text: 'AMO, CNOPS et CNSS gérés nativement, sans module tiers.' },
      { title: 'Données sécurisées', text: 'Hébergement cloud chiffré, sauvegardes automatiques quotidiennes.' },
      { title: 'Accessible partout', text: 'Depuis le laboratoire, un poste secondaire ou un smartphone.' },
    ],
    faqs: [
      {
        q: 'Labya gère-t-il plusieurs sites de prélèvement ?',
        a: 'Oui. Vous pouvez gérer un laboratoire central et plusieurs points de prélèvement, avec une visibilité centralisée sur tous les dossiers.',
      },
      {
        q: 'Peut-on reprendre nos données existantes ?',
        a: 'Oui, nous reprenons votre historique patients et vos tarifs existants lors de la mise en service, à partir de vos fichiers Excel ou de votre logiciel actuel.',
      },
      {
        q: 'Le portail patient est-il obligatoire ?',
        a: 'Non, il est activable à votre rythme. Beaucoup de laboratoires l\u2019activent après quelques semaines d\u2019utilisation du cœur du logiciel.',
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
    stats: [
      { value: '6', label: 'modules métier' },
      { value: 'GPS', label: 'suivi en temps réel' },
      { value: '100%', label: 'contrats digitalisés' },
    ],
    modules: [
      {
        title: 'Planning de flotte visuel',
        text: 'Un calendrier clair de toutes vos réservations : disponibilités, départs et retours en un coup d\u2019œil.',
        points: ['Vue calendrier par véhicule', 'Alertes de conflit de réservation', 'Multi-agences'],
      },
      {
        title: 'Contrats & états des lieux',
        text: 'Contrat de location PDF généré automatiquement, état des lieux avec photos horodatées, gestion des cautions.',
        points: ['Génération automatique du contrat', 'Photos horodatées', 'Suivi des cautions'],
      },
      {
        title: 'Suivi GPS temps réel',
        text: 'Localisez vos véhicules en direct et sécurisez votre flotte pendant chaque location.',
        points: ['Position en direct', 'Historique de trajets', 'Alerte sortie de zone'],
      },
      {
        title: 'Entretien & échéances',
        text: 'Vidanges, assurances, vignettes, visites techniques : Rentara vous alerte avant qu\u2019il ne soit trop tard.',
        points: ['Alertes automatiques', 'Historique d\u2019entretien par véhicule', 'Documents centralisés'],
      },
      {
        title: 'Caisse & facturation',
        text: 'Avances, paiements et factures suivis véhicule par véhicule, client par client.',
        points: ['Suivi des avances', 'Factures automatiques', 'Historique client'],
      },
      {
        title: 'Multi-agences',
        text: 'Gérez plusieurs points de location avec des accès séparés pour chaque équipe.',
        points: ['Accès par agence', 'Transferts inter-agences', 'Vue consolidée pour le gérant'],
      },
    ],
    features: [
      { title: 'Planning de flotte visuel', text: 'Toutes vos réservations en un coup d\u2019œil.' },
      { title: 'Contrats & états des lieux', text: 'Contrat PDF automatique, photos horodatées.' },
      { title: 'Suivi GPS temps réel', text: 'Localisez vos véhicules en direct.' },
      { title: 'Entretien & échéances', text: 'Alertes avant chaque échéance.' },
      { title: 'Caisse & facturation', text: 'Avances et factures suivies par véhicule.' },
      { title: 'Multi-agences', text: 'Plusieurs points de location, un seul outil.' },
    ],
    trust: [
      { title: 'Zéro papier perdu', text: 'Contrats et états des lieux archivés numériquement, retrouvables en un clic.' },
      { title: 'Flotte sécurisée', text: 'Suivi GPS pour protéger vos véhicules pendant toute la location.' },
      { title: 'Accessible partout', text: 'Sur ordinateur à l\u2019agence ou sur smartphone sur le parking.' },
    ],
    faqs: [
      {
        q: 'Faut-il installer un boîtier GPS sur chaque véhicule ?',
        a: 'Oui, un petit boîtier GPS est nécessaire par véhicule. Nous vous orientons vers des solutions compatibles adaptées au marché marocain.',
      },
      {
        q: 'Rentara fonctionne-t-il pour la location longue durée ?',
        a: 'Oui, le planning et la facturation s\u2019adaptent aussi bien à la location courte durée (jour/semaine) qu\u2019à la longue durée (mois/année).',
      },
      {
        q: 'Peut-on gérer plusieurs agences avec un seul compte ?',
        a: 'Oui, chaque agence a ses propres accès et son propre planning, avec une vue consolidée pour le gérant sur l\u2019ensemble du réseau.',
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
    stats: [
      { value: '6', label: 'modules métier' },
      { value: '3', label: 'modes : mer, air, route' },
      { value: '100%', label: 'dossiers centralisés' },
    ],
    modules: [
      {
        title: 'Dossiers d\u2019expédition',
        text: 'Toutes vos expéditions structurées : maritime, aérien, routier — avec statuts et responsables clairs.',
        points: ['Un dossier par expédition', 'Statuts personnalisables', 'Responsable assigné'],
      },
      {
        title: 'Suivi en temps réel',
        text: 'Un tracking vivant de chaque dossier, visible par vos équipes et partageable avec vos clients.',
        points: ['Historique d\u2019étapes', 'Notifications automatiques', 'Partage client en un lien'],
      },
      {
        title: 'Documents centralisés',
        text: 'BL, factures, packing lists, documents douaniers : tout est rattaché au bon dossier.',
        points: ['Stockage par dossier', 'Modèles réutilisables', 'Recherche instantanée'],
      },
      {
        title: 'Import / Export Excel & PDF',
        text: 'Vos données entrent et sortent librement — reprises d\u2019historique et reporting sans friction.',
        points: ['Import Excel en masse', 'Export PDF/Excel', 'Reprise d\u2019historique'],
      },
      {
        title: 'Portail client',
        text: 'Vos clients consultent l\u2019avancement de leurs expéditions sans vous appeler dix fois par jour.',
        points: ['Accès sécurisé par client', 'Suivi en autonomie', 'Documents partagés'],
      },
      {
        title: 'Facturation des dossiers',
        text: 'Débours, honoraires et marges suivis dossier par dossier.',
        points: ['Débours détaillés', 'Marge par dossier', 'Facture client automatique'],
      },
    ],
    features: [
      { title: 'Dossiers d\u2019expédition', text: 'Maritime, aérien, routier — statuts clairs.' },
      { title: 'Suivi en temps réel', text: 'Tracking vivant, partageable avec vos clients.' },
      { title: 'Documents centralisés', text: 'BL, factures, douane rattachés au dossier.' },
      { title: 'Import/Export Excel & PDF', text: 'Vos données entrent et sortent librement.' },
      { title: 'Portail client', text: 'Vos clients suivent leurs expéditions seuls.' },
      { title: 'Facturation des dossiers', text: 'Débours, honoraires et marges suivis.' },
    ],
    trust: [
      { title: 'Construit avec des professionnels du transit', text: 'Le vocabulaire et les statuts collent à votre réalité opérationnelle.' },
      { title: 'Moins d\u2019appels clients', text: 'Le portail client réduit les demandes de statut par téléphone.' },
      { title: 'Données centralisées', text: 'Un seul endroit pour tous vos dossiers, quel que soit le mode de transport.' },
    ],
    faqs: [
      {
        q: 'Logistara gère-t-il le maritime, l\u2019aérien et le routier ?',
        a: 'Oui, les trois modes de transport sont pris en charge dans le même outil, avec des statuts adaptés à chacun.',
      },
      {
        q: 'Peut-on reprendre nos dossiers en cours ?',
        a: 'Oui, nous reprenons vos dossiers actifs et votre historique récent lors de la mise en service, à partir de vos fichiers existants.',
      },
      {
        q: 'Le portail client est-il personnalisable par client ?',
        a: 'Oui, chaque client ne voit que ses propres dossiers, avec un accès sécurisé et indépendant.',
      },
    ],
    audience: 'Transitaires, commissionnaires de transport et freight forwarders',
  },

  {
    slug: 'dialya',
    name: 'Dialya',
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
    sector: 'Distribution d\u2019équipements médicaux',
    tagline: 'Catalogue, devis, stock et SAV pour les distributeurs médicaux.',
    seoTitle: 'Medira — Logiciel de gestion pour distributeur d\u2019équipements médicaux',
    seoDescription:
      'Medira gère votre activité de distribution médicale : catalogue produits, devis et appels d\u2019offres, stock, livraisons, installations et SAV.',
    pitch:
      'Du devis à l\u2019installation chez le client, Medira structure votre activité de distribution d\u2019équipements médicaux : catalogue précis, stock fiable, appels d\u2019offres suivis et SAV qui ne perd plus aucune demande.',
    stats: [
      { value: '6', label: 'modules métier' },
      { value: '100%', label: 'traçabilité stock' },
      { value: 'SAV', label: 'tickets & maintenance suivis' },
    ],
    modules: [
      {
        title: 'Catalogue produits',
        text: 'Références, fournisseurs, marquages et documentations techniques organisés proprement.',
        points: ['Fiches produit détaillées', 'Documentation technique jointe', 'Fournisseurs rattachés'],
      },
      {
        title: 'Devis & appels d\u2019offres',
        text: 'Devis professionnels générés en quelques minutes, suivi des soumissions et des relances.',
        points: ['Devis PDF en quelques minutes', 'Suivi des appels d\u2019offres', 'Relances automatiques'],
      },
      {
        title: 'Stock & livraisons',
        text: 'Entrées, sorties, numéros de série et péremptions suivis en temps réel.',
        points: ['Numéros de série suivis', 'Alertes de péremption', 'Mouvements en temps réel'],
      },
      {
        title: 'Installations & mises en service',
        text: 'Chaque équipement installé est documenté : date, technicien, PV de réception.',
        points: ['PV de réception numérique', 'Historique par équipement', 'Technicien assigné'],
      },
      {
        title: 'SAV & maintenance',
        text: 'Tickets, interventions et contrats de maintenance rattachés à chaque équipement vendu.',
        points: ['Tickets SAV centralisés', 'Contrats de maintenance', 'Historique d\u2019intervention'],
      },
      {
        title: 'Pilotage commercial',
        text: 'Marges, encours clients et performance par gamme, visibles en un tableau de bord.',
        points: ['Marges par gamme', 'Encours clients', 'Tableau de bord commercial'],
      },
    ],
    features: [
      { title: 'Catalogue produits', text: 'Références et documentation organisées.' },
      { title: 'Devis & appels d\u2019offres', text: 'Générés en quelques minutes, relances suivies.' },
      { title: 'Stock & livraisons', text: 'Numéros de série et péremptions en temps réel.' },
      { title: 'Installations', text: 'PV de réception documenté par équipement.' },
      { title: 'SAV & maintenance', text: 'Tickets et contrats rattachés à chaque équipement.' },
      { title: 'Pilotage commercial', text: 'Marges et encours en un tableau de bord.' },
    ],
    trust: [
      { title: 'Traçabilité totale', text: 'Chaque équipement suivi du stock jusqu\u2019à l\u2019installation chez le client.' },
      { title: 'SAV qui ne perd rien', text: 'Chaque ticket est rattaché à l\u2019équipement et à son historique complet.' },
      { title: 'Pilotage clair', text: 'Marges et encours visibles en un coup d\u2019œil pour la direction commerciale.' },
    ],
    faqs: [
      {
        q: 'Medira gère-t-il les appels d\u2019offres publics ?',
        a: 'Oui, vous pouvez suivre vos soumissions aux appels d\u2019offres, leurs statuts et leurs échéances aux côtés de vos devis classiques.',
      },
      {
        q: 'Peut-on suivre le SAV par équipement précis, avec son numéro de série ?',
        a: 'Oui, chaque ticket SAV se rattache à l\u2019équipement exact vendu, avec son numéro de série et son historique d\u2019intervention.',
      },
      {
        q: 'Medira convient-il aussi aux petites structures de distribution ?',
        a: 'Oui, le logiciel s\u2019adapte aussi bien à une petite équipe commerciale qu\u2019à une structure avec plusieurs techniciens SAV.',
      },
    ],
    audience: 'Distributeurs et importateurs de dispositifs médicaux',
  },
];

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}
