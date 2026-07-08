import { Space_Grotesk, Inter, IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google';
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

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Errendis — Éditeur de logiciels métiers au Maroc',
    template: '%s | Errendis',
  },
  description:
    'Errendis conçoit des logiciels de gestion spécialisés par métier : laboratoires d\u2019analyses médicales, location de voitures, transit, hémodialyse et distribution médicale.',
  keywords: [
    'logiciel de gestion Maroc',
    'éditeur logiciel Maroc',
    'logiciel laboratoire analyses médicales',
    'logiciel location voiture',
    'logiciel transitaire',
    'logiciel hémodialyse',
    'SaaS Maroc',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    url: SITE_URL,
    siteName: 'Errendis',
    title: 'Errendis — Éditeur de logiciels métiers au Maroc',
    description:
      'Des logiciels de gestion spécialisés par métier, conçus au Maroc : Labya, Rentara, Logistara, Dialya, Medira.',
    images: [{ url: '/og/errendis-og.png', width: 1200, height: 630, alt: 'Errendis — Éditeur de logiciels métiers au Maroc' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Errendis — Éditeur de logiciels métiers au Maroc',
    description:
      'Des logiciels de gestion spécialisés par métier, conçus au Maroc : Labya, Rentara, Logistara, Dialya, Medira.',
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
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Errendis',
  url: SITE_URL,
  logo: `${SITE_URL}/favicons/errendis-apple.png`,
  description:
    'Éditeur marocain de logiciels de gestion métiers (vertical SaaS) : santé, location automobile, transit et distribution médicale.',
  address: {
    '@type': 'PostalAddress',
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

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} ${plexSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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
      </body>
    </html>
  );
}
