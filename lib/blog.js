// ────────────────────────────────────────────────────────────
// ERRENDIS — Articles de blog
// Contenu éducatif de fond, sans statistique client inventée.
// Alimente /blog (liste) et /blog/<slug> (article).
//
// Mise à jour juillet 2026 :
//   + 6 nouveaux articles ciblés (Priorité 2 stratégie SEO)
//   couvrant les 4 nouveaux verticaux + opportunités longue traîne
// ────────────────────────────────────────────────────────────

export const posts = [
  // ── ARTICLES EXISTANTS ──────────────────────────────────

  {
    slug: 'signes-remplacer-excel-logiciel-metier',
    title: '5 signes qu\u2019il est temps de remplacer votre tableur Excel par un logiciel métier',
    excerpt:
      'Excel est un excellent outil de calcul, mais un mauvais outil de gestion d\u2019activité. Voici les signaux qui ne trompent pas.',
    date: '2026-06-15',
    category: 'Gestion d\u2019entreprise',
    readingTime: '5 min',
    seoTitle: '5 signes qu\u2019il faut remplacer Excel par un logiciel de gestion métier',
    seoDescription:
      'Fichiers Excel dupliqués, erreurs de saisie, aucune traçabilité : découvrez les signes qui indiquent qu\u2019il est temps de passer à un logiciel de gestion métier spécialisé.',
    content: [
      {
        type: 'p',
        text: 'Excel a longtemps été le premier réflexe de toute entreprise qui démarre : gratuit (ou presque), familier, flexible. Le problème n\u2019est pas Excel en lui-même — c\u2019est excellent pour du calcul ponctuel — mais son usage comme système de gestion d\u2019une activité entière : patients, stock, commandes, dossiers clients. Voici cinq signaux qui indiquent qu\u2019il est temps de passer à autre chose.',
      },
      { type: 'h2', text: '1. Plusieurs versions du même fichier circulent' },
      {
        type: 'p',
        text: '« Planning_final_v3_DEF.xlsx » envoyé par email à toute l\u2019équipe : si cette situation vous est familière, c\u2019est le symptôme le plus courant. Sans base de données centralisée, chaque copie devient une source de vérité concurrente, et personne ne sait laquelle est la bonne.',
      },
      { type: 'h2', text: '2. La saisie prend plus de temps que le travail lui-même' },
      {
        type: 'p',
        text: 'Ressaisir une même information dans trois fichiers différents (un pour le stock, un pour la facturation, un pour le suivi client) est un signal clair qu\u2019un système unique et connecté ferait gagner un temps considérable à vos équipes.',
      },
      { type: 'h2', text: '3. Aucune traçabilité de qui a modifié quoi' },
      {
        type: 'p',
        text: 'Dans un secteur réglementé — santé, distribution médicale, transport — savoir qui a modifié une donnée, et quand, n\u2019est pas un confort mais souvent une obligation. Excel ne conserve pas nativement d\u2019historique fiable des modifications.',
      },
      { type: 'h2', text: '4. Les formules cassent à chaque modification' },
      {
        type: 'p',
        text: 'Un fichier Excel devenu trop complexe finit toujours par se fissurer : une ligne insérée casse une formule, une colonne supprimée décale tout un calcul. Ces fichiers deviennent fragiles et dépendent souvent d\u2019une seule personne qui « sait comment il marche ».',
      },
      { type: 'h2', text: '5. Vous ne pouvez pas répondre en temps réel à une question simple' },
      {
        type: 'p',
        text: '« Combien de dossiers sont en cours aujourd\u2019hui ? » devrait avoir une réponse immédiate. Si la réponse nécessite d\u2019ouvrir plusieurs fichiers et de faire des totaux manuels, c\u2019est le signe qu\u2019un tableau de bord en temps réel manque cruellement à votre activité.',
      },
      {
        type: 'p',
        text: 'Chez Errendis, nous construisons des logiciels de gestion spécialisés par métier — laboratoires d\u2019analyses, centres d\u2019hémodialyse, distribution médicale, location de véhicules, transit — précisément pour remplacer ces usages fragiles d\u2019Excel par un système pensé pour votre activité réelle.',
      },
    ],
    relatedProducts: ['dialya', 'medira', 'logistara'],
  },

  {
    slug: 'fefo-fifo-gestion-stock-medical',
    title: 'FEFO vs FIFO : quelle méthode pour la gestion de stock médical ?',
    excerpt:
      'Deux méthodes de rotation de stock se ressemblent mais ne répondent pas au même besoin. Pour le médical, le choix ne se discute pas vraiment.',
    date: '2026-06-22',
    category: 'Distribution médicale',
    readingTime: '4 min',
    seoTitle: 'FEFO vs FIFO : quelle méthode de gestion de stock pour le secteur médical ?',
    seoDescription:
      'FEFO (First Expired, First Out) et FIFO (First In, First Out) : comprendre la différence et pourquoi le secteur médical doit privilégier le FEFO pour éviter la péremption de stock.',
    content: [
      {
        type: 'p',
        text: 'Dans la distribution d\u2019équipements et de consommables médicaux, la gestion de stock ne se résume pas à savoir combien d\u2019unités sont disponibles — elle doit aussi savoir lesquelles sortir en premier. C\u2019est là que la méthode choisie fait toute la différence.',
      },
      { type: 'h2', text: 'FIFO : premier entré, premier sorti' },
      {
        type: 'p',
        text: 'Le FIFO (First In, First Out) fait sortir en priorité les produits arrivés en premier en stock. C\u2019est la méthode la plus intuitive et la plus répandue, adaptée à une grande partie des secteurs — mais elle suppose que la date d\u2019arrivée reflète correctement l\u2019urgence de sortie.',
      },
      { type: 'h2', text: 'FEFO : premier périmé, premier sorti' },
      {
        type: 'p',
        text: 'Le FEFO (First Expired, First Out) fait sortir en priorité les produits dont la date de péremption est la plus proche, indépendamment de leur date d\u2019arrivée en stock. Un lot arrivé plus récemment mais dont la péremption est plus proche sortira avant un lot plus ancien mais encore loin de sa date limite.',
      },
      { type: 'h2', text: 'Pourquoi le FEFO s\u2019impose dans le médical' },
      {
        type: 'p',
        text: 'Consommables médicaux, réactifs de laboratoire, dispositifs avec date de péremption stricte : dans ces contextes, la date d\u2019arrivée en stock est secondaire. Ce qui compte, c\u2019est d\u2019éviter qu\u2019un produit périme avant d\u2019être utilisé — un risque à la fois financier (perte sèche) et réglementaire (utilisation de produits périmés).',
      },
      {
        type: 'p',
        text: 'Un logiciel de gestion qui applique automatiquement la règle FEFO, avec une justification affichée à l\u2019équipe logistique, élimine ce risque sans dépendre de la vigilance individuelle d\u2019un magasinier. C\u2019est l\u2019un des principes au cœur de la gestion de stock de Medira, notre logiciel pour distributeurs d\u2019équipements médicaux.',
      },
    ],
    relatedProducts: ['medira', 'dialya'],
  },

  {
    slug: 'digitaliser-centre-hemodialyse-maroc',
    title: 'Digitaliser un centre d\u2019hémodialyse au Maroc : par où commencer ?',
    excerpt:
      'Entre dossier patient, planning des séances et facturation AMO, la digitalisation d\u2019un centre de dialyse peut sembler complexe. Voici comment la structurer.',
    date: '2026-06-29',
    category: 'Santé',
    readingTime: '6 min',
    seoTitle: 'Digitaliser un centre d\u2019hémodialyse au Maroc : guide et bonnes pratiques',
    seoDescription:
      'Dossier patient, planning des séances, facturation AMO/CNOPS/CNSS : les étapes clés pour digitaliser la gestion d\u2019un centre d\u2019hémodialyse au Maroc sans perturber les soins.',
    content: [
      {
        type: 'p',
        text: 'La gestion d\u2019un centre d\u2019hémodialyse combine des exigences cliniques strictes et une charge administrative lourde : dossiers patients, planning des postes et générateurs, facturation auprès des organismes de prise en charge. Beaucoup de centres marocains gèrent encore cela avec des registres papier et des fichiers Excel séparés. Voici comment structurer une digitalisation sans perturber les soins.',
      },
      { type: 'h2', text: 'Commencer par le dossier patient, pas par la facturation' },
      {
        type: 'p',
        text: 'La tentation est souvent de digitaliser d\u2019abord ce qui est le plus visible administrativement — la facturation. En réalité, le dossier patient (antécédents, accès vasculaire, historique de séances) est la fondation : toutes les autres briques (planning, biologie, facturation) s\u2019appuient dessus.',
      },
      { type: 'h2', text: 'Le planning des séances : le vrai casse-tête quotidien' },
      {
        type: 'p',
        text: 'Organiser postes, générateurs et créneaux à la main, sur un tableau papier ou un fichier partagé, devient vite ingérable au-delà d\u2019une dizaine de patients. Un planning visuel numérique, avec réaffectation rapide en cas d\u2019imprévu (patient absent, générateur en panne), fait gagner un temps considérable au cadre de santé.',
      },
      { type: 'h2', text: 'La biologie : automatiser sans perdre le contrôle médical' },
      {
        type: 'p',
        text: 'Une intégration avec le laboratoire d\u2019analyses (par HL7 ou API) permet de faire remonter automatiquement les résultats dans le dossier patient, avec des règles d\u2019alerte sur les valeurs critiques. L\u2019objectif n\u2019est pas de remplacer le jugement médical, mais d\u2019éliminer le risque qu\u2019une valeur critique passe inaperçue dans une pile de résultats papier.',
      },
      { type: 'h2', text: 'La facturation AMO, CNOPS, CNSS : le nerf de la trésorerie' },
      {
        type: 'p',
        text: 'La gestion des bordereaux et des rejets auprès des organismes de prise en charge marocains est chronophage et source d\u2019erreurs quand elle est faite manuellement. Un logiciel qui gère nativement ces flux, avec suivi des rejets et rapprochement bancaire, réduit fortement les délais de recouvrement.',
      },
      {
        type: 'p',
        text: 'C\u2019est exactement la logique derrière Dialya, notre logiciel conçu pour les centres d\u2019hémodialyse marocains — du dossier patient jusqu\u2019à la facturation, en passant par le suivi en direct de chaque séance.',
      },
    ],
    relatedProducts: ['dialya'],
  },

  // ── NOUVEAUX ARTICLES — PRIORITÉ 2 ─────────────────────

  {
    slug: 'logiciel-gestion-laboratoire-analyses-medicales-maroc-2026',
    title: 'Logiciel de gestion pour laboratoire d\u2019analyses médicales au Maroc : guide 2026',
    excerpt:
      'Réception, automates, validation biologique, facturation AMO : ce que doit couvrir un logiciel pour laboratoire de biologie médicale au Maroc en 2026.',
    date: '2026-07-07',
    category: 'Santé',
    readingTime: '8 min',
    seoTitle: 'Logiciel gestion laboratoire analyses médicales Maroc 2026 — Guide complet',
    seoDescription:
      'Que doit couvrir un logiciel pour laboratoire d\u2019analyses médicales au Maroc : connexion automates, ISO 15189, GBEA, facturation AMO/CNOPS/CNSS. Guide pratique 2026.',
    content: [
      {
        type: 'p',
        text: 'Un laboratoire de biologie médicale au Maroc gère simultanément un flux de patients, des automates d\u2019analyse, des contraintes réglementaires (ISO 15189, GBEA) et une facturation multi-organisme (AMO, CNOPS, CNSS, mutuelles privées). Choisir le bon logiciel de gestion est une décision structurante pour la qualité et la rentabilité du laboratoire.',
      },
      { type: 'h2', text: 'Le module réception : première brique critique' },
      {
        type: 'p',
        text: 'La réception est le point d\u2019entrée de toute la chaîne analytique. Un bon logiciel pour laboratoire doit permettre de créer le dossier patient en quelques secondes, idéalement par scan de l\u2019ordonnance ou de la carte d\u2019identité nationale, avec détection automatique des analyses prescrites et identification de l\u2019organisme payeur.',
      },
      { type: 'h2', text: 'Connexion aux automates : éliminer la ressaisie' },
      {
        type: 'p',
        text: 'La connexion bidirectionnelle avec les automates (Cobas Roche, Sysmex, Abbott Architect, BioMérieux VIDAS) est aujourd\u2019hui indispensable dans tout laboratoire marocain de taille moyenne. Elle supprime la ressaisie manuelle des résultats — principale source d\u2019erreurs de transcription — et accélère le rendu des résultats.',
      },
      { type: 'h2', text: 'Validation biologique : le rôle du biologiste' },
      {
        type: 'p',
        text: 'Le logiciel doit présenter les résultats bruts avec leurs valeurs usuelles par tranche d\u2019âge et sexe, signaler automatiquement les valeurs critiques, et permettre au biologiste de valider ou de commenter avant la remise au patient. La conformité GBEA exige une traçabilité complète de ces validations.',
      },
      { type: 'h2', text: 'Conformité ISO 15189 et GBEA' },
      {
        type: 'p',
        text: 'Un laboratoire marocain accrédité ou en cours d\u2019accréditation ISO 15189 a besoin que son logiciel gère : le suivi des étalonnages et de la métrologie, les contrôles qualité internes (CQI) et externes (EEQ), la traçabilité documentaire et les indicateurs de performance (TAT, taux de rejet). Ces fonctions ne doivent pas être des modules optionnels coûteux.',
      },
      { type: 'h2', text: 'Facturation AMO, CNOPS, CNSS : le nerf de la trésorerie' },
      {
        type: 'p',
        text: 'La facturation organismes représente une part importante du chiffre d\u2019affaires de tout laboratoire conventionné. Le logiciel doit gérer nativement les bordereaux CNOPS, CNSS et AMO Tadamon, avec suivi des rejets, correction assistée et rapprochement des virements. Un logiciel qui force à exporter vers Excel pour faire les bordereaux n\u2019est plus acceptable.',
      },
      { type: 'h2', text: 'Portail médecin prescripteur et application patient' },
      {
        type: 'p',
        text: 'Les laboratoires qui se distinguent aujourd\u2019hui proposent à leurs médecins prescripteurs un accès direct aux résultats de leurs patients, et à leurs patients une application mobile pour consulter leurs résultats dès leur validation. Ces fonctions améliorent la fidélisation et réduisent les appels entrants.',
      },
      {
        type: 'p',
        text: 'Labya, le logiciel Errendis pour laboratoires d\u2019analyses médicales, couvre l\u2019ensemble de ces fonctions — de la réception à la facturation, en passant par la connexion aux automates et la conformité ISO 15189 — dans un système unique pensé pour les laboratoires marocains.',
      },
    ],
    relatedProducts: ['labya'],
  },

  {
    slug: 'logiciel-location-voiture-maroc-comparatif',
    title: 'Logiciel de gestion pour agence de location de voiture au Maroc : guide 2026',
    excerpt:
      'Planning flotte, contrats, caisse, suivi GPS, entretien : ce que doit faire un logiciel pour agence de location de voitures au Maroc.',
    date: '2026-07-08',
    category: 'Location automobile',
    readingTime: '7 min',
    seoTitle: 'Logiciel location voiture Maroc 2026 — Guide et fonctionnalités clés',
    seoDescription:
      'Planning flotte, contrats de location, caisse, suivi GPS, entretien et alertes : les fonctionnalités essentielles d\u2019un logiciel pour agence de location de voiture au Maroc.',
    content: [
      {
        type: 'p',
        text: 'Une agence de location de voitures au Maroc jongle chaque jour avec un planning flotte dynamique, des contrats à émettre rapidement, une caisse à équilibrer et une flotte à maintenir en état. Un logiciel de gestion adapté doit couvrir ces réalités — pas simplement afficher un calendrier de réservations.',
      },
      { type: 'h2', text: 'Le planning flotte : la colonne vertébrale du logiciel' },
      {
        type: 'p',
        text: 'La disponibilité en temps réel de chaque véhicule, visible par tout le personnel de l\u2019agence, est la fonction la plus critique. Le planning doit permettre de créer une réservation, de visualiser les conflits, et de gérer les imprévus (retards, pannes, nettoyage) sans ressaisie.',
      },
      { type: 'h2', text: 'Contrats et états des lieux dématérialisés' },
      {
        type: 'p',
        text: 'Un contrat de location bien fait documente l\u2019état du véhicule à la prise et à la restitution. Un logiciel moderne permet de remplir cet état des lieux sur tablette ou téléphone, avec photos associées, et de faire signer le client électroniquement — ce qui supprime les litiges à la restitution et protège l\u2019agence.',
      },
      { type: 'h2', text: 'Vérification CIN et permis de conduire' },
      {
        type: 'p',
        text: 'Au Maroc, la vérification de la CIN et du permis de conduire est une obligation légale avant toute location. Un bon logiciel permet de scanner ces documents et d\u2019associer les images au dossier client, avec alertes si la validité est proche de l\u2019expiration.',
      },
      { type: 'h2', text: 'Suivi GPS et gestion des sinistres' },
      {
        type: 'p',
        text: 'Pour les flottes importantes, l\u2019intégration avec un système de suivi GPS permet de savoir en temps réel où se trouve chaque véhicule, de détecter les usages hors zone et de faciliter la gestion des sinistres avec des données objectives sur la position et la vitesse au moment d\u2019un incident.',
      },
      { type: 'h2', text: 'Entretien et alertes kilométriques' },
      {
        type: 'p',
        text: 'Un véhicule mal entretenu est une flotte qui rapporte moins et coûte plus. Le logiciel doit suivre le kilométrage de chaque véhicule, déclencher des alertes avant les échéances de vidange, de contrôle technique et de renouvellement d\u2019assurance, et garder l\u2019historique d\u2019entretien complet.',
      },
      { type: 'h2', text: 'Gestion multi-agences' },
      {
        type: 'p',
        text: 'Les enseignes marocaines qui opèrent sur plusieurs villes (Casablanca, Rabat, Marrakech, Agadir, Tanger) ont besoin d\u2019un logiciel cloud qui centralise la flotte et les réservations de toutes les agences, avec des droits d\u2019accès par site. Une vue unifiée sur plusieurs agences est impossible à obtenir avec des fichiers Excel distincts.',
      },
      {
        type: 'p',
        text: 'Rentara, le logiciel Errendis pour agences de location de voitures, couvre l\u2019ensemble de ces besoins — du planning flotte à la caisse, en passant par les contrats dématérialisés et les alertes entretien — dans un système pensé pour les réalités du marché marocain.',
      },
    ],
    relatedProducts: ['rentara'],
  },

  {
    slug: 'logiciel-gestion-restaurant-maroc-guide-2026',
    title: 'Logiciel de gestion restaurant au Maroc : guide complet 2026',
    excerpt:
      'Caisse, plan de salle, menu QR, écran cuisine, stocks : ce que doit faire un logiciel de gestion pour restaurant ou café au Maroc.',
    date: '2026-07-09',
    category: 'Restauration',
    readingTime: '7 min',
    seoTitle: 'Logiciel gestion restaurant Maroc 2026 — Guide complet et fonctionnalités',
    seoDescription:
      'Caisse, plan de salle, menu digital QR, écran cuisine KDS, gestion stocks et fiches techniques : le guide du logiciel de gestion restaurant au Maroc en 2026.',
    content: [
      {
        type: 'p',
        text: 'La restauration marocaine connaît une professionnalisation rapide : les clients s\u2019attendent à payer par carte, à voir le menu sur leur téléphone et à recevoir leur commande sans erreur. Un logiciel de gestion restaurant adapté n\u2019est plus un luxe pour les établissements qui veulent être compétitifs — c\u2019est une nécessité opérationnelle.',
      },
      { type: 'h2', text: 'La caisse et la prise de commande : le cœur du système' },
      {
        type: 'p',
        text: 'Une caisse restaurant moderne doit permettre au serveur de prendre la commande sur tablette ou téléphone, de l\u2019envoyer automatiquement en cuisine, et d\u2019encaisser par multiple moyens de paiement (espèces, carte, virement). La vitesse de prise de commande et la fiabilité de la transmission cuisine font la différence en heure de rush.',
      },
      { type: 'h2', text: 'Le plan de salle interactif' },
      {
        type: 'p',
        text: 'Un plan de salle numérique permet de visualiser d\u2019un coup d\u2019œil les tables occupées, libres et réservées. Le serveur assigné à chaque table, l\u2019heure d\u2019arrivée et le statut de la commande sont visibles par tous — ce qui évite les erreurs de service et les oublis en salle.',
      },
      { type: 'h2', text: 'Le menu digital QR : l\u2019attente du client moderne' },
      {
        type: 'p',
        text: 'Le menu digital accessible par QR code — popularisé après 2020 — est maintenant une attente standard, particulièrement dans les établissements qui reçoivent une clientèle touristique. L\u2019avantage pour le gérant : modifier les prix ou retirer un plat épuisé en temps réel, sans imprimer de nouveaux menus.',
      },
      { type: 'h2', text: 'L\u2019écran cuisine KDS : supprimer les bons papier' },
      {
        type: 'p',
        text: 'L\u2019écran cuisine (KDS, Kitchen Display System) affiche les commandes en temps réel, dans l\u2019ordre de priorité, avec un indicateur visuel du temps d\u2019attente. Le chef valide chaque plat prêt d\u2019un toucher, et le serveur est alerté. Résultat : moins d\u2019erreurs, plus de fluidité, et une traçabilité complète de chaque plat.',
      },
      { type: 'h2', text: 'Fiches techniques et coût matières' },
      {
        type: 'p',
        text: 'Un restaurant rentable connaît son coût de revient par plat. Les fiches techniques — ingrédients, quantités, coût unitaire — permettent de calculer automatiquement la marge brute de chaque plat et d\u2019identifier ceux qui érodent la rentabilité. C\u2019est une fonction souvent absente des logiciels généralistes.',
      },
      { type: 'h2', text: 'Gestion des stocks et approvisionnements' },
      {
        type: 'p',
        text: 'Chaque plat vendu consomme des ingrédients. Un logiciel de gestion restaurant qui soustrait automatiquement les consommations du stock — avec alertes de seuil et historique des entrées fournisseurs — évite les ruptures en service et réduit le gaspillage.',
      },
      {
        type: 'p',
        text: 'Restara, le logiciel Errendis pour restaurants et cafés, intègre l\u2019ensemble de ces fonctions dans un système pensé pour les établissements marocains — de la prise de commande à la clôture de caisse, en passant par les fiches techniques et la fidélité clients.',
      },
    ],
    relatedProducts: ['restara'],
  },

  {
    slug: 'logiciel-gestion-ecole-privee-maroc-massar',
    title: 'Logiciel de gestion école privée au Maroc : ce que Massar ne fait pas',
    excerpt:
      'Massar gère les établissements publics. Les écoles privées marocaines ont des besoins spécifiques — paiements, communication parents, cantine — que Massar ne couvre pas.',
    date: '2026-07-10',
    category: 'Éducation',
    readingTime: '6 min',
    seoTitle: 'Logiciel gestion école privée Maroc — Ce que Massar ne fait pas',
    seoDescription:
      'Massar est conçu pour le public. Les écoles privées marocaines ont besoin d\u2019un logiciel qui couvre les inscriptions, paiements de scolarité, bulletins, communication parents et cantine.',
    content: [
      {
        type: 'p',
        text: 'Massar est la plateforme numérique du ministère de l\u2019Éducation nationale marocain. Elle gère les notes et les absences pour les établissements publics — mais elle n\u2019est pas conçue pour les besoins spécifiques des écoles privées, des groupes scolaires et des crèches qui opèrent selon un modèle commercial et des exigences différentes.',
      },
      { type: 'h2', text: 'Ce que Massar ne couvre pas pour les privés' },
      {
        type: 'p',
        text: 'Un établissement privé marocain gère des flux financiers (paiements de scolarité, suivi des impayés, échéanciers), une communication directe avec les parents (messagerie, notifications), une cantine avec gestion des présences et facturation, des activités périscolaires, et une comptabilité propre. Massar ne propose aucune de ces fonctions.',
      },
      { type: 'h2', text: 'Les inscriptions et dossiers élèves' },
      {
        type: 'p',
        text: 'La gestion des inscriptions — dossier complet, pièces justificatives, niveau et classe — est la première brique d\u2019un logiciel scolaire efficace. Elle doit permettre de suivre le statut de chaque dossier (en cours, validé, en attente de paiement) et de générer automatiquement les documents d\u2019accueil.',
      },
      { type: 'h2', text: 'Les paiements de scolarité : le nerf de la gestion' },
      {
        type: 'p',
        text: 'Pour un groupe scolaire privé, le suivi des frais de scolarité — avec les retards de paiement, les plans d\u2019échéancement et les relances — est une tâche chronophage si elle est faite manuellement. Un logiciel adapté centralise ces données, génère les quittances automatiquement et produit des rapports d\u2019impayés par classe et par niveau.',
      },
      { type: 'h2', text: 'La communication avec les parents' },
      {
        type: 'p',
        text: 'Les parents d\u2019élèves dans les écoles privées marocaines s\u2019attendent à recevoir des notifications rapides (absences, résultats, événements). Une application parent — accessible sur smartphone — qui permet de consulter les bulletins, de justifier une absence et de recevoir des messages de la direction est aujourd\u2019hui un critère de choix d\u2019établissement.',
      },
      { type: 'h2', text: 'Les emplois du temps et la gestion des enseignants' },
      {
        type: 'p',
        text: 'Construire un emploi du temps équilibré — sans conflits de salle ou de professeur — est une tâche complexe qui peut prendre des jours si elle est faite à la main. Un logiciel scolaire avec gestion automatique des contraintes réduit cette charge et s\u2019adapte aux modifications en cours d\u2019année.',
      },
      {
        type: 'p',
        text: 'Skolara, le logiciel Errendis pour écoles privées et crèches marocaines, couvre l\u2019ensemble de ces besoins — des inscriptions aux paiements de scolarité, en passant par les bulletins, la communication parents et la cantine — dans un système qui complète ce que Massar ne fait pas.',
      },
    ],
    relatedProducts: ['skolara'],
  },

  {
    slug: 'logiciel-btp-maroc-suivi-chantier-retenues-garantie',
    title: 'Logiciel BTP au Maroc : suivi chantier, retenues de garantie et CNSS',
    excerpt:
      'Les entreprises de construction marocaines ont des besoins réglementaires spécifiques : TVA multi-taux, retenues de garantie, CNSS chantier. Ce que doit couvrir un logiciel BTP.',
    date: '2026-07-11',
    category: 'BTP',
    readingTime: '7 min',
    seoTitle: 'Logiciel BTP Maroc — Suivi chantier, retenues de garantie et CNSS natifs',
    seoDescription:
      'Suivi de chantier par phases, retenues de garantie, TVA multi-taux natif et déclarations CNSS intégrées : ce que doit couvrir un logiciel de gestion BTP au Maroc.',
    content: [
      {
        type: 'p',
        text: 'Le secteur du BTP au Maroc est l\u2019un des plus actifs de l\u2019économie nationale, porté par les grands chantiers d\u2019infrastructure et la demande en logements. Pourtant, beaucoup d\u2019entreprises de construction marocaines gèrent encore leurs chantiers avec des fichiers Excel et des tableaux papier — une situation qui génère des retards de facturation, des oublis de retenues et des problèmes de conformité CNSS.',
      },
      { type: 'h2', text: 'Le suivi de chantier par phases et lots' },
      {
        type: 'p',
        text: 'Un chantier de construction se déroule en phases (terrassement, gros œuvre, second œuvre, finitions) avec des lots attribués à différents corps de métier. Un logiciel BTP doit permettre de suivre l\u2019avancement réel de chaque phase, de comparer avec le planning initial et d\u2019identifier les causes de retard — avec des rapports d\u2019avancement que le maître d\u2019ouvrage peut consulter.',
      },
      { type: 'h2', text: 'Les retenues de garantie : une spécificité critique' },
      {
        type: 'p',
        text: 'En droit marocain des marchés de construction, le maître d\u2019ouvrage peut retenir un pourcentage (généralement 5 à 10%) sur chaque décompte pour garantir la bonne exécution des travaux. Ces retenues sont libérées à la réception provisoire ou définitive. Un logiciel qui ne gère pas nativement ce mécanisme force à des calculs manuels sur chaque facture — source d\u2019erreurs fréquentes.',
      },
      { type: 'h2', text: 'La TVA multi-taux dans le BTP marocain' },
      {
        type: 'p',
        text: 'Le BTP marocain applique des taux de TVA différents selon la nature des travaux et des matériaux. Un logiciel de facturation qui ne gère que le taux standard de 20% n\u2019est pas utilisable en BTP marocain. La gestion des taux réduits, des exonérations et des autoliquidations doit être intégrée nativement.',
      },
      { type: 'h2', text: 'Les déclarations CNSS pour le personnel de chantier' },
      {
        type: 'p',
        text: 'Le personnel de chantier BTP est soumis à des règles CNSS spécifiques — avec des coefficients horaires variables et une gestion par chantier. Un logiciel BTP qui intègre la déclaration CNSS mensuelle directement à partir des pointages de présence élimine une source majeure d\u2019erreurs et de sanctions.',
      },
      { type: 'h2', text: 'La gestion des sous-traitants' },
      {
        type: 'p',
        text: 'Un chantier implique souvent plusieurs sous-traitants spécialisés (électricité, plomberie, menuiserie). Le logiciel doit permettre de suivre les engagements par sous-traitant, les avances versées et les soldes restant à payer — avec une vue consolidée sur l\u2019ensemble du projet.',
      },
      {
        type: 'p',
        text: 'Batira, le logiciel Errendis pour les entreprises de construction et promoteurs immobiliers marocains, intègre nativement le suivi de chantier, les retenues de garantie, la TVA multi-taux et les déclarations CNSS — sans module optionnel à acheter séparément.',
      },
    ],
    relatedProducts: ['batira'],
  },

  {
    slug: 'logiciel-delegues-medicaux-maroc-force-vente-pharma',
    title: 'Logiciel pour délégués médicaux au Maroc : gérer sa force de vente pharma',
    excerpt:
      'CRM médecins, comptes-rendus de visite, gestion des échantillons, objectifs et reporting : pourquoi les laboratoires pharma marocains ont besoin d\u2019un outil dédié.',
    date: '2026-07-12',
    category: 'Pharmacie',
    readingTime: '6 min',
    seoTitle: 'Logiciel délégués médicaux Maroc — Gérer sa force de vente pharma',
    seoDescription:
      'CRM médecins prescripteurs, comptes-rendus de visite, gestion des échantillons et incentives : comment digitaliser la force de vente de délégués médicaux au Maroc.',
    content: [
      {
        type: 'p',
        text: 'La visite médicale au Maroc est l\u2019un des leviers de prescription les plus importants pour les laboratoires pharmaceutiques. Pourtant, beaucoup de forces de vente marocaines fonctionnent encore avec des rapports Excel, des carnets papier et des communications WhatsApp — ce qui rend le pilotage des équipes terrain quasiment impossible en temps réel.',
      },
      { type: 'h2', text: 'Le CRM médecins prescripteurs : la base de tout' },
      {
        type: 'p',
        text: 'Un logiciel pour délégués médicaux doit centraliser la base de données des médecins et pharmaciens visités : spécialité, zone géographique, fréquence de visite souhaitée, potentiel de prescription et historique des interactions. Sans cette base structurée, il est impossible de prioriser les visites ou d\u2019évaluer l\u2019efficacité de la force de vente.',
      },
      { type: 'h2', text: 'Les comptes-rendus de visite dématérialisés' },
      {
        type: 'p',
        text: 'Le délégué médical qui saisit son compte-rendu sur tablette ou téléphone, directement après la visite, fournit à son superviseur une information fraîche et exploitable. Un compte-rendu papier rempli le soir au bureau — ou pire, en fin de semaine — perd en précision et en utilité pour le management.',
      },
      { type: 'h2', text: 'Le planning des tournées' },
      {
        type: 'p',
        text: 'Organiser les tournées de visite de façon optimale — en respectant les fréquences cibles par catégorie de médecin et en minimisant les trajets — est une tâche complexe que les délégués ne peuvent pas gérer efficacement à la main. Un logiciel qui propose une tournée optimisée, avec carte intégrée, améliore sensiblement la productivité terrain.',
      },
      { type: 'h2', text: 'La gestion des échantillons et gadgets promotionnels' },
      {
        type: 'p',
        text: 'Les dotations en échantillons et matériel promotionnel font l\u2019objet d\u2019une réglementation marocaine stricte. Un logiciel dédié suit les stocks d\u2019échantillons par délégué, les remises par médecin et les soldes, avec traçabilité complète pour les contrôles de conformité.',
      },
      { type: 'h2', text: 'Les objectifs et incentives' },
      {
        type: 'p',
        text: 'Définir des objectifs par délégué — nombre de visites, taux de couverture, ratio médecins actifs — et calculer les primes automatiquement en fonction des résultats terrain est une fonction clé pour motiver et retenir une force de vente performante.',
      },
      { type: 'h2', text: 'Le reporting superviseur en temps réel' },
      {
        type: 'p',
        text: 'Le responsable régional ou national doit pouvoir voir en temps réel l\u2019activité de son équipe : nombre de visites du jour, taux de couverture par zone, respect des fréquences cibles. Un tableau de bord superviseur remplace des dizaines d\u2019emails de reporting hebdomadaire.',
      },
      {
        type: 'p',
        text: 'Medikara, le logiciel Errendis pour délégués médicaux et laboratoires pharmaceutiques, est aujourd\u2019hui le seul outil francophone dédié à ce créneau au Maroc — une opportunité pour les laboratoires qui veulent professionnaliser leur force de vente terrain.',
      },
    ],
    relatedProducts: ['medikara'],
  },
];

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs() {
  return posts.map((p) => p.slug);
}