// ────────────────────────────────────────────────────────────
// ERRENDIS — Catalogue des services
// Différent des produits (lib/products.js) : ici il s'agit de
// prestations de développement / marketing, chacune alimentant
// sa propre page dans app/services/<slug>/page.jsx.
// ────────────────────────────────────────────────────────────

export const services = [
  {
    slug: 'creation-site-web',
    name: 'Création de site internet & e-commerce',
    shortName: 'Site internet & e-commerce',
    tagline: 'Un site vitrine ou une boutique en ligne pensés pour convertir vos visiteurs en clients.',
    seoTitle: 'Création de site internet & e-commerce — Errendis',
    seoDescription:
      'Errendis conçoit et développe votre site internet vitrine ou votre boutique e-commerce : design sur mesure, paiement en ligne, référencement et hébergement.',
    includes: [
      'Site vitrine ou boutique e-commerce sur mesure',
      'Design adapté à votre image de marque',
      'Paiement en ligne et gestion des commandes',
      'Optimisation vitesse et référencement (SEO)',
      'Version mobile et tablette',
      'Hébergement, nom de domaine et maintenance',
    ],
    forWho: 'Commerçants, marques et entreprises qui veulent vendre ou se présenter en ligne, sans dépendre de solutions génériques limitées.',
  },
  {
    slug: 'application-mobile',
    name: 'Création d\u2019application mobile iOS & Android',
    shortName: 'Application mobile iOS & Android',
    tagline: 'Une application mobile native ou multiplateforme pour vos clients ou vos équipes terrain.',
    seoTitle: 'Création d\u2019application mobile iOS & Android — Errendis',
    seoDescription:
      'Errendis développe votre application mobile iOS et Android : application client, application métier pour vos équipes terrain, publication sur l\u2019App Store et Google Play.',
    includes: [
      'Application disponible sur iOS et Android',
      'Conception UX/UI adaptée à votre usage',
      'Connexion à votre logiciel ou vos systèmes existants',
      'Notifications, géolocalisation, mode hors-ligne selon besoin',
      'Publication sur l\u2019App Store et Google Play',
      'Maintenance et évolutions après lancement',
    ],
    forWho: 'Entreprises qui veulent une application pour leurs clients (suivi, commande, fidélité) ou pour leurs équipes terrain (livreurs, techniciens, commerciaux).',
  },
  {
    slug: 'application-web',
    name: 'Création d\u2019application web',
    shortName: 'Application web',
    tagline: 'Une plateforme ou un portail web sur mesure, accessible depuis n\u2019importe quel navigateur.',
    seoTitle: 'Création d\u2019application web sur mesure — Errendis',
    seoDescription:
      'Errendis développe votre application web sur mesure : portail client, outil interne, plateforme métier, accessible sans installation depuis un navigateur.',
    includes: [
      'Application web sur mesure, accessible sans installation',
      'Portail client, fournisseur ou partenaire',
      'Outil interne pour vos équipes (gestion, suivi, reporting)',
      'Gestion des droits et des accès par utilisateur',
      'Interface responsive (ordinateur, tablette, mobile)',
      'Hébergement sécurisé et sauvegardes',
    ],
    forWho: 'Entreprises qui ont besoin d\u2019un outil ou d\u2019un portail accessible en ligne, sans que ce soit un logiciel de gestion complet ni une application mobile.',
  },
  {
    slug: 'creation-saas',
    name: 'Création de SaaS',
    shortName: 'Création de SaaS',
    tagline: 'De l\u2019idée au produit : nous construisons votre logiciel en mode abonnement, prêt à être vendu à vos clients.',
    seoTitle: 'Création de logiciel SaaS — Errendis',
    seoDescription:
      'Errendis conçoit et développe votre SaaS de A à Z : architecture multi-clients, abonnements et facturation récurrente, tableau de bord d\u2019administration.',
    includes: [
      'Cadrage du produit et de son modèle économique',
      'Architecture multi-clients (multi-tenant) sécurisée',
      'Gestion des abonnements et facturation récurrente',
      'Tableau de bord d\u2019administration',
      'Mise en ligne, hébergement et supervision',
      'Accompagnement sur les évolutions du produit',
    ],
    forWho: 'Porteurs de projet ou entreprises qui veulent transformer une idée, un service ou un savoir-faire en produit logiciel vendu par abonnement.',
  },
  {
    slug: 'marketing-digital',
    name: 'Marketing digital',
    shortName: 'Marketing digital',
    tagline: 'Réseaux sociaux, publicité en ligne et référencement : une seule équipe pour développer votre visibilité.',
    seoTitle: 'Agence Marketing Digital au Maroc — Réseaux sociaux, Publicité, SEO | Errendis',
    seoDescription:
      'Errendis accompagne votre visibilité en ligne au Maroc : gestion des réseaux sociaux, campagnes publicitaires Meta Ads et Google Ads, et référencement naturel (SEO). Stratégie sur mesure, rapports mensuels clairs.',
    pitch:
      'Vos clients cherchent, comparent et vous découvrent en ligne avant même de vous contacter. Un profil social inactif, une fiche Google mal tenue ou un site invisible sur les moteurs de recherche, c\u2019est autant d\u2019opportunités qui partent chez un concurrent mieux positionné. Errendis prend en charge votre visibilité digitale de bout en bout \u2014 réseaux sociaux, publicité en ligne et référencement \u2014 avec une seule équipe et un seul interlocuteur.',
    includes: [
      'Gestion et animation de vos réseaux sociaux',
      'Création de contenus (visuels, textes, calendrier éditorial)',
      'Campagnes publicitaires (Meta Ads, Google Ads)',
      'Référencement naturel (SEO) de votre site',
      'Suivi des performances et rapports réguliers',
      'Stratégie adaptée à votre secteur et votre budget',
    ],
    pillars: [
      {
        key: 'social',
        title: 'Réseaux sociaux',
        text: 'Une présence régulière et cohérente sur Instagram, Facebook, LinkedIn ou TikTok, pensée pour votre audience réelle.',
      },
      {
        key: 'ads',
        title: 'Publicité en ligne',
        text: 'Des campagnes Meta Ads et Google Ads pilotées et optimisées pour générer des demandes, pas seulement des vues.',
      },
      {
        key: 'seo',
        title: 'Référencement (SEO)',
        text: 'Un travail de fond sur votre site pour apparaître dans les recherches Google de vos futurs clients, durablement.',
      },
    ],
    modules: [
      {
        title: 'Community management',
        text: 'Nous prenons en charge l\u2019animation quotidienne de vos réseaux sociaux : publications régulières, réponses aux messages et commentaires, veille sur votre image de marque.',
        points: [
          'Calendrier éditorial mensuel validé avec vous',
          'Visuels et légendes adaptés à chaque plateforme',
          'Réponses aux commentaires et messages privés',
          'Veille e-réputation et alertes en cas de besoin',
        ],
        visualKey: 'social',
        image: '/screenshots/marketing-digital/community-management.png',
      },
      {
        title: 'Création de contenu',
        text: 'Photos, visuels graphiques, courtes vidéos ou textes : nous produisons des contenus adaptés à votre secteur d\u2019activité et à votre identité visuelle, pas des templates génériques.',
        points: [
          'Identité graphique cohérente sur tous les supports',
          'Formats adaptés à chaque réseau (story, carrousel, reel...)',
          'Mise en avant de vos produits, services ou réalisations',
        ],
        image: '/screenshots/marketing-digital/creation-contenu.png',
      },
      {
        title: 'Publicité Meta Ads & Google Ads',
        text: 'Nous concevons et pilotons vos campagnes publicitaires : ciblage précis de votre audience, choix des formats, suivi quotidien et optimisation du budget pour un meilleur retour.',
        points: [
          'Ciblage par zone, âge, centres d\u2019intérêt ou intention de recherche',
          'Campagnes Facebook, Instagram et Google Search / Display',
          'Optimisation continue selon les résultats réels',
          'Budget adapté à vos objectifs, sans engagement figé',
        ],
        visualKey: 'ads',
        image: '/screenshots/marketing-digital/ads.png',
      },
      {
        title: 'Référencement naturel (SEO)',
        text: 'Nous travaillons la structure, le contenu et la technique de votre site pour qu\u2019il remonte dans les résultats Google sur les recherches qui comptent pour votre activité.',
        points: [
          'Audit technique et sémantique de votre site',
          'Optimisation des pages existantes (titres, contenus, vitesse)',
          'Recommandations de contenu pour capter de nouvelles recherches',
          'Fiche Google Business Profile optimisée pour le référencement local',
        ],
        visualKey: 'seo',
        image: '/screenshots/marketing-digital/seo.png',
      },
      {
        title: 'Suivi & reporting',
        text: 'Chaque mois, vous recevez un rapport clair sur ce qui a été fait et les résultats obtenus \u2014 pas un tableau de chiffres bruts, mais une lecture compréhensible de votre visibilité.',
        points: [
          'Rapport mensuel simple et lisible',
          'Points d\u2019échange réguliers sur la stratégie',
          'Ajustements en continu selon les résultats',
        ],
        image: '/screenshots/marketing-digital/reporting.png',
      },
    ],
    trust: [
      {
        title: 'Un seul interlocuteur',
        text: 'Réseaux sociaux, publicité et SEO gérés par la même équipe, coordonnés entre eux au lieu d\u2019être éclatés entre plusieurs prestataires.',
      },
      {
        title: 'Stratégie sur mesure',
        text: 'Pas de pack standardisé : votre plan d\u2019action dépend de votre secteur, de votre budget et de vos objectifs réels.',
      },
      {
        title: 'Transparence sur les résultats',
        text: 'Vous savez toujours ce qui a été fait, ce qui fonctionne, et ce qui est ajusté \u2014 sans jargon technique inutile.',
      },
    ],
    faqs: [
      {
        q: 'Faut-il souscrire aux trois services (réseaux sociaux, publicité, SEO) en même temps ?',
        a: 'Non. Vous pouvez démarrer par un seul pilier \u2014 par exemple uniquement la gestion de vos réseaux sociaux \u2014 et ajouter la publicité ou le SEO plus tard selon vos priorités et votre budget.',
      },
      {
        q: 'En combien de temps peut-on voir des résultats ?',
        a: 'La publicité en ligne peut générer des premiers résultats en quelques jours. Les réseaux sociaux demandent généralement quelques semaines de régularité. Le référencement naturel (SEO) est un travail de fond dont les effets se construisent sur plusieurs mois, mais qui reste ensuite durable.',
      },
      {
        q: 'Gérez-vous aussi le budget publicitaire, ou juste la création des campagnes ?',
        a: 'Nous concevons, paramétrons et optimisons vos campagnes. Le budget publicitaire (versé directement à Meta ou Google) reste distinct de notre prestation et est défini ensemble selon vos objectifs.',
      },
      {
        q: 'Travaillez-vous avec toutes les tailles d\u2019entreprise ?',
        a: 'Oui, la stratégie est adaptée à votre taille et votre budget : une TPE et une entreprise plus structurée n\u2019ont pas le même plan d\u2019action, ni le même niveau d\u2019investissement.',
      },
      {
        q: 'Peut-on suivre l\u2019évolution sans compétences techniques ?',
        a: 'Oui, nos rapports sont conçus pour être compris sans expertise marketing : ce qui a été fait, ce que cela a produit, et les prochaines étapes.',
      },
    ],
    audience: 'Commerces, marques et entreprises qui veulent développer leur visibilité en ligne et attirer des clients via les réseaux sociaux, la publicité ou les moteurs de recherche.',
    forWho: 'Entreprises qui veulent développer leur visibilité en ligne et attirer des clients via les réseaux sociaux, la publicité ou les moteurs de recherche.',
  },
];

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}