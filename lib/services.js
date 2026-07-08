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
    tagline: 'Gestion des réseaux sociaux, publicité en ligne et référencement pour développer votre visibilité.',
    seoTitle: 'Marketing digital — Réseaux sociaux, publicité, SEO — Errendis',
    seoDescription:
      'Errendis accompagne votre visibilité en ligne : gestion des réseaux sociaux, campagnes publicitaires (Meta, Google Ads) et référencement naturel (SEO).',
    includes: [
      'Gestion et animation de vos réseaux sociaux',
      'Création de contenus (visuels, textes, calendrier éditorial)',
      'Campagnes publicitaires (Meta Ads, Google Ads)',
      'Référencement naturel (SEO) de votre site',
      'Suivi des performances et rapports réguliers',
      'Stratégie adaptée à votre secteur et votre budget',
    ],
    forWho: 'Entreprises qui veulent développer leur visibilité en ligne et attirer des clients via les réseaux sociaux, la publicité ou les moteurs de recherche.',
  },
];

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}