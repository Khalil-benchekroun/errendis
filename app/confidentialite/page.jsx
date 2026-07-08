import Link from 'next/link';

export const metadata = {
  title: 'Politique de confidentialité',
  description:
    'Politique de confidentialité d\u2019Errendis : comment nous collectons, utilisons et protégeons vos données personnelles, conformément à la loi 09-08.',
  alternates: { canonical: '/confidentialite' },
  robots: { index: true, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Politique de confidentialité</h1>
          <p>Dernière mise à jour : juillet 2026.</p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">

          <h2>1. Qui collecte vos données ?</h2>
          <p>
            Errendis, éditeur du site errendis.com, est responsable du
            traitement des données personnelles collectées via ce site.
            Pour toute question, contactez-nous à{' '}
            <a href="mailto:contact@errendis.com">contact@errendis.com</a>.
          </p>

          <h2>2. Quelles données sont collectées ?</h2>
          <p>
            Lorsque vous utilisez notre formulaire de contact, nous
            collectons uniquement les informations que vous nous
            transmettez volontairement :
          </p>
          <ul style={{ marginBottom: 20, color: 'var(--slate)' }}>
            <li>Nom complet</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone (facultatif)</li>
            <li>Produit concerné (facultatif)</li>
            <li>Contenu de votre message</li>
          </ul>
          <p>
            Nous ne collectons aucune donnée bancaire ou sensible via ce
            site. Si vous acceptez les cookies analytiques, des données
            de navigation anonymisées sont collectées via Google Analytics
            (voir section 8).
          </p>

          <h2>3. Pourquoi collectons-nous ces données ?</h2>
          <p>
            Ces données sont utilisées exclusivement pour répondre à
            votre demande (démonstration, question, devis) et pour vous
            recontacter dans ce cadre. Elles ne sont ni vendues, ni
            louées, ni partagées avec des tiers à des fins commerciales.
          </p>

          <h2>4. Comment vos données sont-elles traitées ?</h2>
          <p>
            Les messages envoyés via notre formulaire de contact sont
            transmis directement à notre messagerie professionnelle
            (contact@errendis.com), hébergée par OVH SAS. Ils ne sont pas
            stockés dans une base de données sur notre site.
          </p>

          <h2>5. Combien de temps conservons-nous vos données ?</h2>
          <p>
            Vos données sont conservées le temps nécessaire au traitement
            de votre demande, puis archivées selon nos obligations
            légales et commerciales usuelles, dans la limite de 3 ans en
            l'absence de relation contractuelle ultérieure.
          </p>

          <h2>6. Vos droits</h2>
          <p>
            Conformément à la loi marocaine n° 09-08 relative à la
            protection des personnes physiques à l'égard du traitement
            des données à caractère personnel, vous disposez d'un droit
            d'accès, de rectification, d'opposition et de suppression de
            vos données. Pour exercer ces droits, contactez-nous à{' '}
            <a href="mailto:contact@errendis.com">contact@errendis.com</a>.
          </p>

          <h2>7. Hébergement et sécurité</h2>
          <p>
            Le site errendis.com est hébergé par Vercel Inc. Les échanges
            entre votre navigateur et notre site sont chiffrés (HTTPS).
            Nos logiciels de gestion (Dialya, Medira, Logistara, Labya,
            Rentara) disposent de leurs propres conditions et mesures de
            sécurité, communiquées séparément lors de leur mise en
            service.
          </p>

          <h2>8. Cookies et mesure d'audience</h2>
          <p>
            Ce site utilise les outils suivants pour mesurer son audience
            et améliorer son contenu :
          </p>
          <ul style={{ marginBottom: 16, color: 'var(--slate)' }}>
            <li>
              <strong>Google Analytics 4</strong> — collecte des données
              de navigation anonymisées (pages visitées, durée de session,
              source du trafic). Activé uniquement si vous acceptez les
              cookies via le bandeau affiché lors de votre première visite.
              Géré via Google Tag Manager (GTM-5ZW7NF4F).
            </li>
            <li>
              <strong>Vercel Analytics & Speed Insights</strong> — mesure
              des performances techniques du site (temps de chargement,
              Core Web Vitals). Ne collecte aucune donnée personnelle
              identifiable et ne nécessite pas de consentement.
            </li>
          </ul>
          <p>
            Vous pouvez à tout moment modifier votre choix en effaçant
            les données de votre navigateur (localStorage) ou en nous
            contactant à{' '}
            <a href="mailto:contact@errendis.com">contact@errendis.com</a>.
            Aucun cookie publicitaire ou de remarketing n'est utilisé.
          </p>

          <h2>9. Modifications de cette politique</h2>
          <p>
            Cette politique de confidentialité peut être mise à jour
            périodiquement. La date de dernière mise à jour est indiquée
            en haut de cette page.
          </p>

          <h2>10. Contact</h2>
          <p>
            Pour toute question relative à vos données personnelles,
            écrivez-nous à{' '}
            <a href="mailto:contact@errendis.com">contact@errendis.com</a>{' '}
            ou consultez nos{' '}
            <Link href="/mentions-legales">mentions légales</Link>.
          </p>

        </div>
      </section>
    </>
  );
}