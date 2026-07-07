// ────────────────────────────────────────────────────────────
// ERRENDIS — Articles de blog
// Contenu éducatif de fond, sans statistique client inventée.
// Alimente /blog (liste) et /blog/<slug> (article).
// ────────────────────────────────────────────────────────────

export const posts = [
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
];

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs() {
  return posts.map((p) => p.slug);
}