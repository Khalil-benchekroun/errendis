import Link from 'next/link';

export const metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site errendis.com, édité par Errendis.',
  alternates: { canonical: '/mentions-legales' },
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Mentions légales</h1>
          <p>Dernière mise à jour : juillet 2026.</p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">

          <h2>Éditeur du site</h2>
          <p>
            Le site errendis.com est édité par <strong>Errendis</strong>{' '}
            {/* ⚠️ À COMPLÉTER dès la constitution de la structure juridique */}
            <em>(forme juridique en cours de constitution — SARL à Mohammedia, Maroc)</em>.
          </p>
          <p>
            Responsable de la publication : Khalil Benchekroun.
            <br />
            Adresse : Mohammedia, Maroc <em>(adresse complète du siège à préciser)</em>.
            <br />
            Registre du commerce (RC) : <em>à compléter</em>
            <br />
            Identifiant commun de l’entreprise (ICE) : <em>à compléter</em>
            <br />
            Email : <a href="mailto:contact@errendis.com">contact@errendis.com</a>
          </p>

          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par <strong>Vercel Inc.</strong>, 340 S Lemon
            Ave #4133, Walnut, CA 91789, États-Unis.
            <br />
            Le nom de domaine est enregistré chez <strong>OVH SAS</strong>,
            2 rue Kellermann, 59100 Roubaix, France.
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L’ensemble des contenus présents sur ce site (textes, logos,
            visuels, captures d’écran, marques Errendis, Dialya, Medira,
            Logistara, Labya et Rentara) sont la propriété exclusive
            d’Errendis, sauf mention contraire. Toute reproduction,
            représentation ou diffusion, totale ou partielle, sans
            autorisation préalable est interdite.
          </p>

          <h2>Responsabilité</h2>
          <p>
            Errendis s’efforce d’assurer l’exactitude des informations
            diffusées sur ce site, sans garantir l’absence d’erreur ou
            d’omission. Errendis ne saurait être tenue responsable des
            dommages directs ou indirects résultant de l’accès ou de
            l’utilisation de ce site.
          </p>

          <h2>Liens externes</h2>
          <p>
            Le site peut contenir des liens vers des sites tiers. Errendis
            n’exerce aucun contrôle sur ces sites et décline toute
            responsabilité quant à leur contenu.
          </p>

          <h2>Droit applicable</h2>
          <p>
            Les présentes mentions légales sont soumises au droit
            marocain. Tout litige relatif à l’utilisation du site relève
            de la compétence exclusive des tribunaux compétents du Maroc.
          </p>

          <h2>Contact</h2>
          <p>
            Pour toute question relative à ces mentions légales,
            contactez-nous à{' '}
            <a href="mailto:contact@errendis.com">contact@errendis.com</a> ou
            consultez notre{' '}
            <Link href="/confidentialite">politique de confidentialité</Link>.
          </p>

        </div>
      </section>
    </>
  );
}