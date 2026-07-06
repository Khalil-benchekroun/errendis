# Errendis — Site vitrine

Site officiel d'Errendis, éditeur marocain de logiciels métiers.
**Stack :** Next.js 15 (App Router) · Export 100% statique · Déploiement Vercel.

## 🚀 Démarrage local (VS Code)

```bash
npm install
npm run dev
```

Ouvre http://localhost:3000

## 📦 Build de production

```bash
npm run build
```

Le site statique est généré dans `out/` — chaque page est du HTML pur pré-rendu (SEO maximal).

## ☁️ Déploiement Vercel

1. Pousse le projet sur GitHub (`Khalil-benchekroun/errendis`)
2. Sur vercel.com → Add New Project → importe le repo
3. Framework détecté automatiquement (Next.js) — aucun réglage nécessaire
4. Ajoute le domaine **errendis.com** dans Settings → Domains, puis pointe le DNS OVH :
   - Type `A` → `76.76.21.21`
   - Type `CNAME` pour `www` → `cname.vercel-dns.com`

## ✏️ À personnaliser avant la mise en ligne

| Où | Quoi |
|---|---|
| `app/contact/page.jsx` | `WHATSAPP_NUMBER` (format `2126XXXXXXXX`) et `CONTACT_EMAIL` |
| `app/layout.jsx` | Rien d'obligatoire — vérifie juste la description si tu veux l'ajuster |
| `lib/products.js` | Tout le contenu produits est centralisé ici (textes, SEO, fonctionnalités) |

## 🧱 Structure

```
app/
  layout.jsx            → header/footer globaux, fonts, SEO global, JSON-LD Organization
  page.jsx              → page d'accueil
  a-propos/page.jsx     → à propos
  contact/page.jsx      → contact & démo
  produits/[slug]/      → 1 page SEO par produit (labya, rentara, logistara, dialya, medira)
  sitemap.js            → sitemap.xml auto-généré
  robots.js             → robots.txt auto-généré
components/             → Logo (SVG), Header, Footer
lib/products.js         → catalogue produits (source unique de vérité)
```

## 🔍 SEO intégré

- HTML statique pré-rendu pour chaque page (indexation parfaite)
- Métadonnées uniques par page (title, description, canonical, Open Graph)
- JSON-LD `Organization` (site) + `SoftwareApplication` (chaque produit)
- `sitemap.xml` et `robots.txt` générés automatiquement
- Fonts optimisées via `next/font` (zéro layout shift)

Après la mise en ligne : ajoute le site dans **Google Search Console** et soumets `https://errendis.com/sitemap.xml`.
