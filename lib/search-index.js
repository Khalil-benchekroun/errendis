import { products } from './products';
import { posts } from './blog';
import { glossaryTerms } from './glossary';
import { FAQS } from './faq';

/**
 * Construit un index plat de tout le contenu cherchable du site.
 * Utilisé côté client par la page /recherche (filtrage simple,
 * sans dépendance externe — le volume de contenu reste faible).
 */
export function buildSearchIndex() {
  const index = [];

  products.forEach((p) => {
    index.push({
      type: 'Produit',
      title: p.name,
      description: p.tagline,
      url: `/produits/${p.slug}`,
    });
  });

  posts.forEach((p) => {
    index.push({
      type: 'Article',
      title: p.title,
      description: p.excerpt,
      url: `/blog/${p.slug}`,
    });
  });

  glossaryTerms.forEach((t) => {
    index.push({
      type: 'Glossaire',
      title: t.term,
      description: t.definition,
      url: `/glossaire#${t.category}`,
    });
  });

  FAQS.forEach((f) => {
    index.push({
      type: 'FAQ',
      title: f.q,
      description: f.a,
      url: '/faq',
    });
  });

  index.push(
    { type: 'Page', title: 'À propos', description: 'Notre histoire, notre méthode, nos engagements.', url: '/a-propos' },
    { type: 'Page', title: 'Contact', description: 'Demander une démonstration ou nous écrire.', url: '/contact' },
    { type: 'Page', title: 'Questions fréquentes', description: 'Mise en service, essai, support, sécurité.', url: '/faq' },
    { type: 'Page', title: 'Comparer nos produits', description: 'Nos 5 logiciels côte à côte.', url: '/comparer-produits' },
    { type: 'Page', title: 'Pourquoi Errendis', description: 'Excel, ERP générique ou logiciel métier.', url: '/pourquoi-errendis' },
    { type: 'Page', title: 'Vos difficultés par secteur', description: 'Les blocages typiques par métier.', url: '/secteurs' },
  );

  return index;
}

/**
 * Recherche simple par score de correspondance de mots — aucune IA,
 * juste un comptage de mots de la requête retrouvés dans le titre
 * (poids fort) et la description (poids faible) de chaque entrée.
 * Utilisée par la page /recherche et par le chatbot du site.
 */
export function searchIndex(index, query, limit = 5) {
  const words = query
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => w.length > 2);
  if (!words.length) return [];

  const scored = index
    .map((item) => {
      const title = item.title.toLowerCase();
      const desc = item.description.toLowerCase();
      let score = 0;
      words.forEach((w) => {
        if (title.includes(w)) score += 3;
        if (desc.includes(w)) score += 1;
      });
      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit);
}
