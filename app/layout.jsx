import { Space_Grotesk, Inter, IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import CookieBanner from '@/components/CookieBanner';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ChatbotWidget from '@/components/ChatbotWidget';
import PageTransition from '@/components/PageTransition';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex',
  display: 'swap',
});

const SITE_URL = 'https://errendis.com';

const SOCIAL_LINKS = [
  'https://www.instagram.com/errendis.solution',
  'https://www.facebook.com/share/1EFLhoNuPt/',
  'https://www.linkedin.com/company/errendis/',
];

// ── MÉTADONNÉES GLOBALES ─────────────────────────────────────────────────────
// Title : 50 caractères (était 75 → corrigé)
// Description : 155 caractères, 9 verticaux présents (était 201 → corrigé)
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Errendis — Logiciels métiers SaaS au Maroc',
    template: '%s | Errendis',
  },
  description:
    'Éditeur SaaS marocain : Labya, Dialya, Medira, Rentara, Logistara, Medikara, Restara, Batira, Skolara — un logiciel de gestion spécialisé par secteur.',
  keywords: [
    'logiciel de gestion Maroc',
    'éditeur logiciel SaaS Maroc',
    'logiciel laboratoire analyses médicales',
    'logiciel hémodialyse Maroc',
    'logiciel location voiture Maroc',
    'logiciel transit freight Maroc',
    'logiciel distribution médicale',
    'logiciel délégués médicaux',
    'logiciel restaurant café Maroc',
    'logiciel BTP chantier Maroc',
    'logiciel gestion école crèche Maroc',
    'SaaS B2B Maroc',
    'Errendis',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    url: SITE_URL,
    siteName: 'Errendis',
    title: 'Errendis — Logiciels métiers SaaS au Maroc',
    description:
      'Éditeur SaaS marocain : Labya, Dialya, Medira, Rentara, Logistara, Medikara, Restara, Batira, Skolara — un logiciel de gestion spécialisé par secteur.',
    images: [{ url: '/og/errendis-og.png', width: 1200, height: 630, alt: 'Errendis — Logiciels métiers SaaS au Maroc' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Errendis — Logiciels métiers SaaS au Maroc',
    description:
      'Éditeur SaaS marocain : Labya, Dialya, Medira, Rentara, Logistara, Medikara, Restara, Batira, Skolara — un logiciel de gestion spécialisé par secteur.',
    images: ['/og/errendis-og.png'],
  },
  icons: {
    icon: [
      { url: '/favicons/errendis-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/errendis-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/favicons/errendis-apple.png',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: SITE_URL,
    languages: {
      'fr-MA': SITE_URL,
      'fr': SITE_URL,
    },
  },
};

// ── SCHEMA ORGANIZATION ──────────────────────────────────────────────────────
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Errendis',
  url: SITE_URL,
  logo: `${SITE_URL}/favicons/errendis-apple.png`,
  description:
    'Éditeur marocain de logiciels de gestion métiers (vertical SaaS) : santé, laboratoires, location automobile, transit, distribution médicale, restauration, BTP et éducation.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Casablanca',
    addressLocality: 'Casablanca',
    addressRegion: 'Grand Casablanca-Settat',
    addressCountry: 'MA',
  },
  sameAs: SOCIAL_LINKS,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'contact@errendis.com',
    telephone: '+212684637854',
    areaServed: 'MA',
    availableLanguage: ['French', 'Arabic'],
  },
};

// ── SCHEMA WEBSITE ───────────────────────────────────────────────────────────
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Errendis',
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/recherche?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

// ── SCHEMA LOCAL BUSINESS ────────────────────────────────────────────────────
// Ajouté : manquait selon l'audit SEOptimer (corrige le signal "LocalBusiness absent")
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#local-business`,
  name: 'Errendis',
  description:
    'Éditeur marocain de logiciels de gestion SaaS spécialisés par secteur : santé, location automobile, transit, restauration, BTP et éducation.',
  url: SITE_URL,
  telephone: '+212684637854',
  email: 'contact@errendis.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Casablanca',
    addressLocality: 'Casablanca',
    addressRegion: 'Grand Casablanca-Settat',
    postalCode: '20000',
    addressCountry: 'MA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.5731,
    longitude: -7.5898,
  },
  areaServed: {
    '@type': 'Country',
    name: 'Maroc',
  },
  priceRange: '$$',
  image: `${SITE_URL}/og/errendis-og.png`,
  sameAs: SOCIAL_LINKS,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
};

const GTM_ID = 'GTM-5ZW7NF4F';

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} ${plexSans.variable}`}>
      <head>
        {/* Google Tag Manager — script head */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager — noscript fallback (juste après <body>) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {/* LocalBusiness — ajouté pour corriger l'audit SEOptimer */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />

        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppFloat />
        <ChatbotWidget />
        <CookieBanner />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}