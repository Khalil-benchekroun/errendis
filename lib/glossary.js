// ────────────────────────────────────────────────────────────
// ERRENDIS — Glossaire métier
// v2 juillet 2026 : 45 termes + slugs pour pages individuelles
// ────────────────────────────────────────────────────────────

export const glossaryTerms = [

  // ── SANTÉ ────────────────────────────────────────────────

  {
    slug: 'amo',
    term: 'AMO',
    category: 'Santé',
    definition: 'Assurance Maladie Obligatoire. Régime de couverture médicale de base au Maroc, applicable aux salariés du secteur privé et public.',
    longDefinition: `L'Assurance Maladie Obligatoire (AMO) est le régime de base de couverture médicale au Maroc, instauré par la loi 65-00. Elle couvre les salariés du secteur privé (gérés par la CNSS) et les fonctionnaires du secteur public (gérés par la CNOPS). L'AMO prend en charge les frais de consultation, d'hospitalisation, d'analyses médicales et de médicaments selon des taux de remboursement définis par décret.

Pour les laboratoires d'analyses médicales, centres de dialyse et distributeurs de dispositifs médicaux, la facturation AMO représente une part importante du chiffre d'affaires. Un logiciel de gestion doit gérer nativement les règles de facturation AMO, les bordereaux mensuels et le suivi des rejets pour optimiser le recouvrement.`,
    relatedTerms: ['cnops', 'cnss', 'amo-tadamon'],
    relatedProducts: ['labya', 'dialya', 'medira'],
  },

  {
    slug: 'amo-tadamon',
    term: 'AMO Tadamon',
    category: 'Santé',
    definition: 'Extension de l\u2019AMO destinée aux populations vulnérables et non-salariées au Maroc, dans le cadre de la généralisation de la couverture sociale.',
    longDefinition: `L'AMO Tadamon (anciennement RAMED) est le volet de l'Assurance Maladie Obligatoire destiné aux personnes économiquement vulnérables et aux travailleurs non-salariés (indépendants, artisans, commerçants) au Maroc. Elle s'inscrit dans le programme de généralisation de la protection sociale lancé en 2021.

Pour les prestataires de soins, AMO Tadamon implique des règles de facturation et des taux de remboursement spécifiques, distincts de l'AMO classique CNSS/CNOPS. Les logiciels de facturation médicale doivent gérer ces différences pour éviter les rejets.`,
    relatedTerms: ['amo', 'cnss', 'cnops'],
    relatedProducts: ['labya', 'dialya'],
  },

  {
    slug: 'cnops',
    term: 'CNOPS',
    category: 'Santé',
    definition: 'Caisse Nationale des Organismes de Prévoyance Sociale. Organisme gérant l\u2019AMO pour les fonctionnaires et agents du secteur public marocain.',
    longDefinition: `La CNOPS (Caisse Nationale des Organismes de Prévoyance Sociale) est l'organisme gestionnaire de l'AMO pour les fonctionnaires de l'État, les collectivités territoriales et les établissements publics marocains. Elle regroupe plusieurs mutuelles sectorielles (MFP, MGPAP, MFPMA...).

La facturation CNOPS impose des formats de bordereaux spécifiques, des délais de dépôt stricts et des règles de prise en charge qui varient selon la mutuelle affiliée. Un laboratoire ou un centre de dialyse qui traite des patients CNOPS doit maîtriser ces règles pour minimiser les rejets et optimiser ses délais de remboursement.`,
    relatedTerms: ['amo', 'cnss', 'amo-tadamon'],
    relatedProducts: ['labya', 'dialya'],
  },

  {
    slug: 'cnss',
    term: 'CNSS',
    category: 'Santé',
    definition: 'Caisse Nationale de Sécurité Sociale. Organisme gérant la couverture sociale, dont l\u2019AMO, pour les salariés du secteur privé au Maroc.',
    longDefinition: `La CNSS (Caisse Nationale de Sécurité Sociale) est l'organisme gestionnaire de la sécurité sociale pour les salariés du secteur privé marocain. Elle couvre à la fois la branche maladie (AMO), la branche retraite et la branche accidents du travail.

Pour les prestataires de soins (laboratoires, centres de dialyse, médecins), la CNSS est un organisme payeur majeur. La facturation CNSS se fait via des bordereaux mensuels soumis dans des délais stricts. Dans le secteur BTP, la CNSS joue également un rôle important avec des cotisations spécifiques pour le personnel de chantier.`,
    relatedTerms: ['amo', 'cnops', 'amo-tadamon'],
    relatedProducts: ['labya', 'dialya', 'batira'],
  },

  {
    slug: 'iso-15189',
    term: 'ISO 15189',
    category: 'Santé',
    definition: 'Norme internationale définissant les exigences de qualité et de compétence pour les laboratoires de biologie médicale.',
    longDefinition: `L'ISO 15189 est la norme internationale de référence pour les laboratoires de biologie médicale. Elle définit les exigences de management de la qualité et de compétence technique que doit satisfaire un laboratoire pour être accrédité. Au Maroc, l'accréditation ISO 15189 est délivrée par le COMAC (Comité Marocain d'Accréditation).

La norme couvre : la maîtrise des équipements et de leur métrologie, les contrôles qualité internes (CQI) et externes (EEQ), la traçabilité de chaque dossier analytique, la gestion des non-conformités, et la formation continue du personnel. Un logiciel de laboratoire conçu pour la conformité ISO 15189 automatise la documentation requise et facilite grandement la préparation aux audits d'accréditation.`,
    relatedTerms: ['gbea', 'cqi', 'hl7'],
    relatedProducts: ['labya'],
  },

  {
    slug: 'gbea',
    term: 'GBEA',
    category: 'Santé',
    definition: 'Guide de Bonne Exécution des Analyses. Référentiel qualité marocain encadrant les pratiques des laboratoires de biologie médicale.',
    longDefinition: `Le GBEA (Guide de Bonne Exécution des Analyses) est le référentiel réglementaire marocain qui encadre les pratiques des laboratoires de biologie médicale privés et publics. Il définit les obligations en matière de personnel, d'équipements, de locaux, de procédures analytiques et de gestion des résultats.

Le GBEA est complémentaire à l'ISO 15189 : là où l'ISO 15189 est une norme volontaire d'accréditation internationale, le GBEA est une obligation réglementaire imposée par le ministère de la Santé marocain à tous les laboratoires autorisés à exercer.`,
    relatedTerms: ['iso-15189', 'cqi'],
    relatedProducts: ['labya'],
  },

  {
    slug: 'hl7',
    term: 'HL7',
    category: 'Santé',
    definition: 'Health Level Seven. Norme internationale d\u2019échange de données de santé entre systèmes informatiques.',
    longDefinition: `HL7 (Health Level Seven) est une norme internationale qui définit les formats et protocoles d'échange de données entre systèmes d'information de santé. Elle permet à des systèmes différents (logiciel de laboratoire, automate d'analyse, dossier patient) de communiquer de façon standardisée.

Dans un laboratoire d'analyses médicales, HL7 est utilisé pour transférer les résultats d'analyses depuis les automates vers le Système de Gestion de Laboratoire (SGL/LIS), et depuis le SGL vers les dossiers patients des médecins prescripteurs. Cette connexion automatique élimine la ressaisie manuelle des résultats et réduit les erreurs de transcription.`,
    relatedTerms: ['iso-15189', 'gbea'],
    relatedProducts: ['labya', 'dialya'],
  },

  {
    slug: 'kt-v',
    term: 'Kt/V',
    category: 'Santé',
    definition: 'Indicateur mesurant l\u2019efficacité d\u2019une séance de dialyse, comparant la clairance de l\u2019urée à son volume de distribution.',
    longDefinition: `Le Kt/V est l'indicateur de référence pour mesurer l'adéquation dialytique — c'est-à-dire l'efficacité d'une séance d'hémodialyse à épurer le sang du patient de ses déchets. K représente la clairance du dialyseur (sa capacité à filtrer l'urée), t la durée de la séance, et V le volume de distribution de l'urée dans l'organisme.

Un Kt/V ≥ 1,2 est généralement considéré comme suffisant pour une dialyse tri-hebdomadaire standard. Les sociétés savantes de néphrologie recommandent de cibler 1,4 pour une marge de sécurité. Le suivi mensuel du Kt/V de chaque patient dialysé est une obligation de qualité des soins et doit être traçable dans le dossier du patient.`,
    relatedTerms: ['fav', 'amo', 'cnops'],
    relatedProducts: ['dialya'],
  },

  {
    slug: 'fav',
    term: 'FAV (Fistule artério-veineuse)',
    category: 'Santé',
    definition: 'Accès vasculaire créé chirurgicalement entre une artère et une veine, utilisé pour les séances d\u2019hémodialyse répétées.',
    longDefinition: `La fistule artério-veineuse (FAV) est l'accès vasculaire de choix pour les patients en hémodialyse chronique. Elle est créée chirurgicalement en connectant une artère et une veine, généralement au niveau de l'avant-bras. La paroi veineuse s'épaissit progressivement sous la pression artérielle, permettant des ponctions répétées pour connecter le patient au générateur de dialyse.

La FAV est préférable au cathéter central car elle présente moins de risques infectieux et une meilleure longévité. Le suivi de l'accès vasculaire (type, date de création, complications) est une information clinique clé dans le dossier du patient dialysé.`,
    relatedTerms: ['kt-v'],
    relatedProducts: ['dialya'],
  },

  // ── DISTRIBUTION ─────────────────────────────────────────

  {
    slug: 'fefo',
    term: 'FEFO',
    category: 'Distribution',
    definition: 'First Expired, First Out. Méthode de gestion de stock qui fait sortir en priorité les produits dont la date de péremption est la plus proche.',
    longDefinition: `Le FEFO (First Expired, First Out) est la méthode de rotation des stocks recommandée pour les produits à date de péremption, notamment les dispositifs médicaux, les réactifs de laboratoire et les médicaments. Contrairement au FIFO qui se base sur la date d'entrée en stock, le FEFO se base sur la date de péremption pour déterminer l'ordre de sortie.

Un lot arrivé récemment mais avec une péremption proche sortira avant un lot plus ancien mais avec une péremption plus éloignée. Cette méthode est imposée par les référentiels qualité du secteur médical (ISO 13485, GDP) et recommandée par l'OMS pour tous les produits de santé. Son application manuelle est impossible au-delà de quelques centaines de références — un logiciel de gestion qui applique le FEFO automatiquement est indispensable.`,
    relatedTerms: ['fifo', 'iso-13485', 'capa'],
    relatedProducts: ['medira'],
  },

  {
    slug: 'fifo',
    term: 'FIFO',
    category: 'Distribution',
    definition: 'First In, First Out. Méthode de gestion de stock qui fait sortir en priorité les produits arrivés en premier.',
    longDefinition: `Le FIFO (First In, First Out) est la méthode de rotation des stocks la plus répandue dans la grande distribution et l'industrie. Elle fait sortir en priorité les produits arrivés en premier en stock, quelle que soit leur date de péremption. C'est une méthode simple à appliquer manuellement et intuitive pour le personnel logistique.

Dans le secteur médical, le FIFO est insuffisant car il ne tient pas compte des dates de péremption. Un lot arrivé récemment avec une péremption très proche peut rester en stock trop longtemps si des lots plus anciens avec des péremptions éloignées sont prioritairement sortis. C'est pourquoi le secteur médical privilégie le FEFO.`,
    relatedTerms: ['fefo', 'iso-13485'],
    relatedProducts: ['medira'],
  },

  {
    slug: 'iso-13485',
    term: 'ISO 13485',
    category: 'Distribution',
    definition: 'Norme internationale de système de management de la qualité spécifique aux dispositifs médicaux.',
    longDefinition: `L'ISO 13485 est la norme internationale de référence pour le management de la qualité dans le secteur des dispositifs médicaux. Elle s'applique aux fabricants, distributeurs et prestataires de services liés aux dispositifs médicaux, et couvre l'ensemble du cycle de vie du produit.

Pour les distributeurs de dispositifs médicaux au Maroc, la certification ISO 13485 est un avantage concurrentiel important pour accéder aux marchés hospitaliers publics et aux appels d'offres. Elle impose notamment une gestion rigoureuse des stocks avec traçabilité des lots, un système de gestion des non-conformités et des procédures documentées pour chaque processus.`,
    relatedTerms: ['fefo', 'capa', 'rma'],
    relatedProducts: ['medira'],
  },

  {
    slug: 'capa',
    term: 'CAPA',
    category: 'Distribution',
    definition: 'Corrective Action, Preventive Action. Démarche qualité consistant à corriger une non-conformité et à prévenir sa récurrence.',
    longDefinition: `Le CAPA (Corrective Action, Preventive Action) est un processus qualité fondamental dans les secteurs régulés comme les dispositifs médicaux. Il se compose de deux volets : l'action corrective qui traite une non-conformité détectée (défaut produit, réclamation client, résultat hors norme), et l'action préventive qui vise à prévenir l'apparition de non-conformités potentielles identifiées par analyse de risque.

Dans un système de gestion de la qualité conforme à l'ISO 13485, chaque non-conformité doit faire l'objet d'une fiche CAPA documentée avec : description du problème, analyse des causes racines, actions correctives mises en place, délais et responsables, et vérification de l'efficacité des actions.`,
    relatedTerms: ['iso-13485', 'rma'],
    relatedProducts: ['medira'],
  },

  {
    slug: 'rma',
    term: 'RMA',
    category: 'Distribution',
    definition: 'Return Merchandise Authorization. Autorisation de retour marchandise encadrant le renvoi d\u2019un produit par un client.',
    longDefinition: `Le RMA (Return Merchandise Authorization) est le processus par lequel un client obtient l'autorisation de retourner un produit à son fournisseur pour remboursement, échange, réparation ou destruction. Dans le secteur des dispositifs médicaux, le processus RMA est particulièrement réglementé car il implique la traçabilité des produits retournés et la vérification de leur conformité avant toute réintégration en stock.

Un logiciel de gestion pour distributeurs médicaux doit gérer les RMA avec numéros de référence uniques, motifs documentés, traçabilité des lots concernés et liens avec les fiches CAPA si le retour révèle un problème de qualité.`,
    relatedTerms: ['capa', 'iso-13485'],
    relatedProducts: ['medira'],
  },

  {
    slug: 'consignation',
    term: 'Consignation (stock)',
    category: 'Distribution',
    definition: 'Stock déposé chez le client restant la propriété du fournisseur jusqu\u2019à sa consommation effective.',
    longDefinition: `La consignation est un modèle commercial où un fournisseur dépose un stock de produits chez un client (hôpital, clinique, cabinet médical) sans facturation immédiate. La propriété des produits reste au fournisseur jusqu'à leur consommation par le client, moment auquel ils sont facturés. Ce modèle est très courant dans la distribution de dispositifs médicaux implantables (prothèses, sutures) et de consommables spécialisés.

La gestion des stocks en consignation est complexe car elle implique un suivi précis des quantités déposées chez chaque client, des mouvements de consommation (qui déclenchent la facturation), des renouvellements automatiques et des inventaires périodiques chez le client.`,
    relatedTerms: ['fefo', 'rma'],
    relatedProducts: ['medira'],
  },

  // ── LOGISTIQUE ───────────────────────────────────────────

  {
    slug: 'fcl',
    term: 'FCL',
    category: 'Logistique',
    definition: 'Full Container Load. Expédition maritime où un conteneur complet est réservé pour un seul client.',
    longDefinition: `Le FCL (Full Container Load) désigne une expédition maritime où l'intégralité d'un conteneur standard (20 pieds ou 40 pieds) est utilisée par un seul expéditeur. Le FCL est adapté aux volumes importants qui remplissent ou presque un conteneur entier. Le conteneur est chargé directement chez l'exportateur ou dans un entrepôt, scellé, et livré tel quel au destinataire.

Au Maroc, les exportateurs industriels (textile, agroalimentaire, automobile) utilisent principalement le FCL pour leurs expéditions vers l'Europe et l'Asie. Le transitaire gère pour son client l'ensemble de la chaîne : booking de l'espace, formalités douanières à l'export, connaissement, et coordination avec le port de Tanger Med ou Casablanca.`,
    relatedTerms: ['lcl', 'transitaire', 'connaissement'],
    relatedProducts: ['logistara'],
  },

  {
    slug: 'lcl',
    term: 'LCL',
    category: 'Logistique',
    definition: 'Less than Container Load. Expédition maritime en groupage où plusieurs clients partagent un même conteneur.',
    longDefinition: `Le LCL (Less than Container Load) désigne une expédition maritime en groupage, où la marchandise d'un expéditeur est consolidée avec celle d'autres expéditeurs dans un même conteneur. Le LCL est adapté aux petits volumes qui ne justifient pas la location d'un conteneur complet.

Le transitaire ou le groupeur assemble les colis de différents clients en un conteneur FCL, gère les formalités douanières globales, et organise la déconsolidation à l'arrivée. Le LCL est généralement plus économique que le FCL pour les petits volumes, mais implique des délais plus longs (dépendants du remplissage du conteneur) et un risque plus élevé d'avaries au transbordement.`,
    relatedTerms: ['fcl', 'transitaire'],
    relatedProducts: ['logistara'],
  },

  {
    slug: 'transitaire',
    term: 'Transitaire',
    category: 'Logistique',
    definition: 'Professionnel organisant le transport de marchandises pour le compte d\u2019un client, en coordonnant tous les intervenants.',
    longDefinition: `Le transitaire (ou commissionnaire en douane, freight forwarder en anglais) est l'intermédiaire logistique qui organise le transport international de marchandises pour le compte d'un importateur ou exportateur. Il coordonne l'ensemble des intervenants : transporteurs terrestres, compagnies maritimes ou aériennes, manutentionnaires portuaires, services douaniers, assureurs et entrepôts.

Au Maroc, l'exercice de la profession de transitaire agréé en douane est soumis à un agrément de l'Administration des Douanes et Impôts Indirects (ADII). Le transitaire représente son client devant la douane et engage sa responsabilité professionnelle sur la conformité des déclarations.`,
    relatedTerms: ['fcl', 'lcl', 'dedouanement', 'connaissement'],
    relatedProducts: ['logistara'],
  },

  {
    slug: 'connaissement',
    term: 'Connaissement (Bill of Lading)',
    category: 'Logistique',
    definition: 'Document de transport maritime faisant office de contrat, de preuve de propriété et de reçu de prise en charge.',
    longDefinition: `Le connaissement (Bill of Lading ou B/L en anglais) est le document central du transport maritime. Il remplit trois fonctions essentielles : c'est un contrat de transport entre l'armateur et l'expéditeur, une preuve de prise en charge de la marchandise par le transporteur, et un titre de propriété négociable qui permet le transfert de propriété de la marchandise.

Pour le dédouanement au Maroc, le connaissement original est un document obligatoire : sans lui, la marchandise ne peut pas être retirée du port. Les délais de réception du connaissement original depuis le pays exportateur sont souvent critiques — des retards peuvent engendrer des frais de surestaries (pénalités de retard) importants.`,
    relatedTerms: ['transitaire', 'fcl', 'lcl', 'dedouanement'],
    relatedProducts: ['logistara'],
  },

  {
    slug: 'dedouanement',
    term: 'Dédouanement',
    category: 'Logistique',
    definition: 'Ensemble des formalités administratives permettant à une marchandise de franchir légalement la douane.',
    longDefinition: `Le dédouanement est l'ensemble des opérations administratives et fiscales permettant à une marchandise d'entrer ou de sortir légalement du territoire douanier marocain. À l'import, il comprend : la déclaration en douane (DAU), le paiement des droits de douane et de la TVA à l'import, les contrôles documentaires et physiques, et l'obtention du bon à délivrer.

L'ADII (Administration des Douanes et Impôts Indirects) classe les déclarations en circuits de contrôle : circuit vert (déclaration acceptée sans vérification), circuit jaune (contrôle documentaire) et circuit rouge (visite physique de la marchandise). L'objectif affiché de l'ADII est de traiter les déclarations en circuit vert en 24 à 48 heures.`,
    relatedTerms: ['transitaire', 'connaissement'],
    relatedProducts: ['logistara'],
  },

  {
    slug: 'surestarie',
    term: 'Surestarie',
    category: 'Logistique',
    definition: 'Pénalité financière due à la compagnie maritime pour tout retard dans le retrait d\u2019un conteneur au-delà de la franchise accordée.',
    longDefinition: `Les surestaries (detention and demurrage en anglais) sont des pénalités financières facturées par les compagnies maritimes lorsqu'un conteneur n'est pas restitué dans les délais convenus après sa livraison au port. La franchise gratuite (free time) est généralement de 7 à 14 jours selon les compagnies et les ports. Au-delà, des frais journaliers s'accumulent rapidement.

Au port de Tanger Med et à Casablanca, les surestaries peuvent atteindre plusieurs centaines de dirhams par jour et par conteneur. Pour un transitaire, anticiper et éviter les surestaries est un enjeu économique majeur — ce qui implique un suivi rigoureux des délais de chaque dossier avec des alertes automatiques avant les échéances.`,
    relatedTerms: ['transitaire', 'fcl', 'lcl'],
    relatedProducts: ['logistara'],
  },

  // ── LOCATION / AUTOMOBILE ────────────────────────────────

  {
    slug: 'etat-des-lieux',
    term: 'État des lieux',
    category: 'Location',
    definition: 'Document constatant l\u2019état d\u2019un véhicule à la prise et à la restitution d\u2019une location.',
    longDefinition: `L'état des lieux est le document qui constate l'état précis d'un véhicule avant sa remise au locataire et après sa restitution. Il est signé par le locataire et le représentant de l'agence, et engage la responsabilité des deux parties sur les dommages constatés ou non constatés.

Un état des lieux papier présente plusieurs limites : les descriptions textuelles des dommages peuvent être ambiguës, les photos sont rarement bien organisées et associées au dossier, et la signature du client peut être contestée. Un état des lieux dématérialisé réalisé sur tablette avec photos horodatées, géolocalisées et signature électronique du client constitue une preuve solide en cas de litige — et réduit quasiment à zéro les contestations à la restitution.`,
    relatedTerms: ['contrat-location'],
    relatedProducts: ['rentara'],
  },

  {
    slug: 'contrat-location',
    term: 'Contrat de location',
    category: 'Location',
    definition: 'Document contractuel encadrant les conditions de mise à disposition d\u2019un véhicule entre une agence et un locataire.',
    longDefinition: `Le contrat de location de voiture est le document juridique qui formalise la mise à disposition d'un véhicule par une agence à un locataire, en définissant les conditions : durée, tarif, kilométrage inclus, franchise de responsabilité, obligations d'entretien et procédures en cas d'accident.

Au Maroc, le contrat de location doit mentionner les informations d'identité du locataire (CIN ou passeport), le numéro de permis de conduire, les caractéristiques du véhicule, le tarif journalier et les conditions d'assurance. La vérification et l'archivage de ces documents sont des obligations légales pour les agences de location marocaines.`,
    relatedTerms: ['etat-des-lieux'],
    relatedProducts: ['rentara'],
  },

  {
    slug: 'taux-utilisation-flotte',
    term: 'Taux d\u2019utilisation de flotte',
    category: 'Location',
    definition: 'Indicateur clé de rentabilité d\u2019une agence de location, mesurant le ratio entre les jours loués et les jours disponibles.',
    longDefinition: `Le taux d'utilisation de la flotte est l'indicateur de performance principal d'une agence de location de voitures. Il se calcule en divisant le nombre de jours effectivement loués par le nombre de jours disponibles (jours totaux moins les jours d'entretien, de réparation ou hors service) sur une période donnée.

Un taux d'utilisation de 70 à 80% est généralement considéré comme bon dans le secteur. En dessous de 60%, l'agence a probablement trop de véhicules par rapport à sa demande, ou des problèmes d'organisation des réservations. Au-dessus de 90%, le risque de rupture de disponibilité pour les clients est élevé. Le suivi en temps réel de ce taux par véhicule et par agence est impossible sans logiciel de gestion.`,
    relatedTerms: ['etat-des-lieux', 'contrat-location'],
    relatedProducts: ['rentara'],
  },

  // ── RESTAURATION ─────────────────────────────────────────

  {
    slug: 'kds',
    term: 'KDS (Kitchen Display System)',
    category: 'Restauration',
    definition: 'Écran numérique en cuisine affichant les commandes en temps réel pour remplacer les bons papier.',
    longDefinition: `Le KDS (Kitchen Display System) est un écran tactile installé en cuisine qui affiche en temps réel les commandes transmises par les serveurs depuis la salle. Il remplace les bons de commande papier imprimés ou transmis oralement, qui sont sources de confusion et d'erreurs en heure de pointe.

Le KDS affiche les commandes par ordre chronologique avec un code couleur selon le temps d'attente (vert → orange → rouge au fur et à mesure que le temps passe). Le chef ou la cuisinière valide chaque plat prêt d'un toucher, ce qui notifie automatiquement le serveur en salle. Cette communication en temps réel améliore la fluidité du service, réduit les erreurs et permet de mesurer précisément les temps de préparation par plat.`,
    relatedTerms: ['fiche-technique', 'menu-qr'],
    relatedProducts: ['restara'],
  },

  {
    slug: 'fiche-technique',
    term: 'Fiche technique (restauration)',
    category: 'Restauration',
    definition: 'Document détaillant les ingrédients, quantités et coûts de chaque plat, permettant de calculer la marge brute.',
    longDefinition: `La fiche technique est le document de référence de chaque plat dans un restaurant. Elle liste tous les ingrédients avec leurs quantités précises (en grammes ou en unités), leurs coûts unitaires actuels, et calcule le coût de revient total du plat. En rapportant ce coût au prix de vente, on obtient le taux de marge brute (food cost ratio).

Le food cost ratio idéal varie selon le type de restauration : 25 à 35% pour la restauration traditionnelle, jusqu'à 40% pour la gastronomie. Un plat dont le food cost dépasse ces seuils érode la rentabilité globale du restaurant. Un logiciel de gestion restaurant qui met à jour automatiquement les fiches techniques quand les prix d'achat fournisseurs changent permet de détecter ces dérives en temps réel.`,
    relatedTerms: ['kds', 'menu-qr'],
    relatedProducts: ['restara'],
  },

  {
    slug: 'menu-qr',
    term: 'Menu digital QR',
    category: 'Restauration',
    definition: 'Menu de restaurant accessible via QR code sur smartphone, modifiable en temps réel depuis le back-office.',
    longDefinition: `Le menu digital QR est une version dématérialisée de la carte d'un restaurant, accessible en scannant un QR code affiché sur la table ou à l'entrée de l'établissement. Il s'affiche directement dans le navigateur du smartphone du client, sans application à télécharger.

Pour le restaurateur, l'avantage principal est la flexibilité : modifier un prix, retirer un plat épuisé ou ajouter une spéciale du jour se fait en quelques secondes depuis le back-office, sans imprimer de nouveaux menus. Pour le client, le menu digital offre des photos des plats, des descriptions détaillées et potentiellement une traduction en plusieurs langues — particulièrement utile dans les villes touristiques comme Marrakech, Agadir et Tanger.`,
    relatedTerms: ['kds', 'fiche-technique'],
    relatedProducts: ['restara'],
  },

  // ── BTP ──────────────────────────────────────────────────

  {
    slug: 'retenue-garantie',
    term: 'Retenue de garantie',
    category: 'BTP',
    definition: 'Fraction retenue sur chaque décompte par le maître d\u2019ouvrage pour garantir la bonne exécution des travaux.',
    longDefinition: `La retenue de garantie est un mécanisme contractuel prévu dans les marchés de construction marocains, permettant au maître d'ouvrage de retenir un pourcentage (généralement 5 à 10%) sur chaque décompte de travaux versé à l'entreprise. Ces retenues s'accumulent dans un compte bloqué et sont libérées en deux temps : à la réception provisoire des travaux (généralement 50% des retenues cumulées), puis à la réception définitive (12 mois après la réception provisoire) sous réserve de la levée de toutes les réserves.

Pour une PME du BTP, les retenues de garantie peuvent représenter plusieurs centaines de milliers de dirhams immobilisés sur un chantier important. Un logiciel qui calcule automatiquement les retenues sur chaque décompte, suit le cumul par chantier et alerte à l'approche des dates de libération permet d'optimiser le recouvrement et la trésorerie.`,
    relatedTerms: ['decompte-travaux', 'sous-traitant'],
    relatedProducts: ['batira'],
  },

  {
    slug: 'decompte-travaux',
    term: 'Décompte de travaux',
    category: 'BTP',
    definition: 'Document de facturation périodique établi par l\u2019entreprise de construction selon l\u2019avancement réel des travaux.',
    longDefinition: `Le décompte de travaux (ou situation de travaux) est le document de facturation établi périodiquement (généralement mensuel) par l'entreprise de construction pour facturer les travaux réalisés à date. Il détaille les quantités d'ouvrages exécutés par poste de prix, les applique aux prix unitaires du marché et calcule le montant à payer, déduction faite des retenues de garantie et des avances remboursées.

Le décompte est soumis à l'approbation du maître d'œuvre (architecte ou bureau de contrôle) avant paiement. La précision du décompte et la rapidité de sa soumission ont un impact direct sur la trésorerie de l'entreprise — chaque jour de retard dans la soumission est un jour de retard dans le paiement.`,
    relatedTerms: ['retenue-garantie', 'sous-traitant'],
    relatedProducts: ['batira'],
  },

  {
    slug: 'sous-traitant',
    term: 'Sous-traitant (BTP)',
    category: 'BTP',
    definition: 'Entreprise spécialisée exécutant une partie des travaux pour le compte de l\u2019entreprise principale (titulaire du marché).',
    longDefinition: `Dans le BTP marocain, le sous-traitant est une entreprise à laquelle l'entreprise principale (titulaire du marché) confie l'exécution d'une partie des travaux. La sous-traitance est courante pour les lots techniques spécialisés : électricité, plomberie, menuiserie aluminium, peinture, climatisation.

Le Code marocain des marchés publics encadre la sous-traitance et impose notamment l'agrément préalable du maître d'ouvrage pour chaque sous-traitant. L'entreprise principale reste responsable devant le maître d'ouvrage de la qualité des travaux de ses sous-traitants. Gérer les marchés de sous-traitance, les situations mensuelles et les paiements sans système de suivi dédié expose l'entreprise à des litiges et des dépassements de budget.`,
    relatedTerms: ['retenue-garantie', 'decompte-travaux'],
    relatedProducts: ['batira'],
  },

  // ── ÉDUCATION ────────────────────────────────────────────

  {
    slug: 'massar',
    term: 'Massar',
    category: 'Éducation',
    definition: 'Plateforme numérique du ministère de l\u2019Éducation nationale marocain pour la gestion des établissements publics.',
    longDefinition: `Massar est le système d'information scolaire développé par le ministère de l'Éducation nationale du Maroc. Il couvre les fonctions officielles des établissements publics : saisie et validation des notes, gestion des absences et retards, génération des bulletins scolaires officiels, suivi des effectifs et communication avec les parents via l'application Massar Parents.

Pour les établissements privés, Massar est accessible mais ne couvre pas les besoins spécifiques au modèle commercial de l'enseignement privé : paiements de scolarité, gestion de la cantine, activités périscolaires, comptabilité de l'établissement et communication directe en dehors du cadre officiel. C'est ce vide que comblent les logiciels de gestion scolaire dédiés aux établissements privés.`,
    relatedTerms: ['bulletin-scolaire'],
    relatedProducts: ['skolara'],
  },

  {
    slug: 'bulletin-scolaire',
    term: 'Bulletin scolaire',
    category: 'Éducation',
    definition: 'Document périodique récapitulant les notes, appréciations et absences d\u2019un élève, remis aux parents.',
    longDefinition: `Le bulletin scolaire est le document officiel remis aux parents à chaque période (trimestre ou semestre) récapitulant les résultats d'un élève : notes par matière, moyennes, appréciations des enseignants, absences et retards, et rang dans la classe. Dans les établissements publics marocains, le bulletin est généré via Massar. Dans les établissements privés, il doit être généré par le logiciel de gestion interne selon un format propre à l'établissement.

La génération automatique des bulletins depuis les notes saisies par les enseignants est l'une des fonctions les plus valorisées par les directeurs d'établissements privés — elle représente un gain de temps considérable par rapport à la génération manuelle sur Excel.`,
    relatedTerms: ['massar'],
    relatedProducts: ['skolara'],
  },

  // ── ENTREPRISE / GÉNÉRAL ─────────────────────────────────

  {
    slug: 'rc',
    term: 'RC (Registre du Commerce)',
    category: 'Entreprise',
    definition: 'Registre officiel marocain recensant les entreprises et commerçants, attribuant un numéro unique d\u2019immatriculation.',
    longDefinition: `Le Registre du Commerce (RC) est le registre officiel marocain tenu par les tribunaux de commerce, dans lequel toute entreprise ou commerçant est tenu de s'immatriculer avant de commencer son activité. L'immatriculation au RC attribue un numéro unique qui identifie l'entreprise dans ses relations commerciales et administratives.

Pour les prestataires de services B2B comme Errendis, le numéro RC de chaque client est une information obligatoire dans les contrats et factures. Il permet de vérifier l'existence légale d'une entreprise et de consulter ses informations officielles (capital, siège social, dirigeants) via le portail des tribunaux de commerce marocains.`,
    relatedTerms: ['ice', 'saas'],
    relatedProducts: [],
  },

  {
    slug: 'ice',
    term: 'ICE',
    category: 'Entreprise',
    definition: 'Identifiant Commun de l\u2019Entreprise. Numéro unique attribué à chaque entreprise marocaine pour ses relations avec l\u2019administration.',
    longDefinition: `L'ICE (Identifiant Commun de l'Entreprise) est un numéro d'identification unique à 15 chiffres attribué à chaque entreprise marocaine, introduit dans le cadre de la réforme fiscale et administrative pour simplifier les échanges entre les entreprises et l'administration (DGI, CNSS, douanes, tribunaux de commerce).

L'ICE est obligatoire sur toutes les factures émises au Maroc depuis 2013. Il permet aux administrations de croiser les données déclarées par une même entreprise auprès de différents organismes. Pour un logiciel de facturation, la gestion de l'ICE client et la mention obligatoire de l'ICE propre de l'entreprise sur chaque facture sont des fonctions de conformité fiscale essentielles.`,
    relatedTerms: ['rc', 'saas'],
    relatedProducts: [],
  },

  {
    slug: 'saas',
    term: 'SaaS',
    category: 'Entreprise',
    definition: 'Software as a Service. Modèle de logiciel accessible en ligne par abonnement, sans installation locale.',
    longDefinition: `Le SaaS (Software as a Service) est un modèle de distribution de logiciels où l'application est hébergée dans le cloud par l'éditeur et accessible par les utilisateurs via un navigateur web ou une application mobile, sans installation locale sur les ordinateurs de l'entreprise. L'abonnement mensuel ou annuel couvre l'hébergement, la maintenance, les mises à jour et le support.

Pour les entreprises marocaines, le SaaS présente plusieurs avantages par rapport aux logiciels traditionnels installés : pas d'investissement matériel initial (serveur, licences), mises à jour automatiques, accessibilité depuis n'importe quel appareil et lieu, et sauvegardes automatiques des données. Errendis édite des logiciels SaaS verticaux spécialisés pour neuf secteurs d'activité au Maroc.`,
    relatedTerms: ['rc', 'ice'],
    relatedProducts: [],
  },

  {
    slug: 'loi-09-08',
    term: 'Loi 09-08',
    category: 'Entreprise',
    definition: 'Loi marocaine relative à la protection des données personnelles, encadrée par la CNDP.',
    longDefinition: `La loi 09-08 est la loi marocaine relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel. Elle encadre la collecte, le traitement, le stockage et le transfert des données personnelles par les organisations publiques et privées. La CNDP (Commission Nationale de contrôle de la Protection des Données à caractère Personnel) est l'autorité de régulation chargée de son application.

Pour les entreprises qui utilisent des logiciels de gestion (laboratoires, cliniques, écoles, agences de location), la loi 09-08 impose des obligations : déclaration des traitements auprès de la CNDP, information des personnes concernées, sécurisation des données et limitation de leur durée de conservation. Les logiciels Errendis sont conçus pour aider leurs clients à respecter ces obligations.`,
    relatedTerms: ['saas', 'ice'],
    relatedProducts: [],
  },
];

// ── HELPERS ──────────────────────────────────────────────────

export function getGlossaryByCategory() {
  const categories = {};
  glossaryTerms.forEach((t) => {
    if (!categories[t.category]) categories[t.category] = [];
    categories[t.category].push(t);
  });
  return categories;
}

export function getTerm(slug) {
  return glossaryTerms.find((t) => t.slug === slug);
}

export function getAllSlugs() {
  return glossaryTerms.map((t) => t.slug);
}

export function getRelatedTerms(term) {
  if (!term.relatedTerms?.length) return [];
  return term.relatedTerms
    .map((slug) => glossaryTerms.find((t) => t.slug === slug))
    .filter(Boolean);
}
