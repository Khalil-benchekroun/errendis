import { Space_Grotesk, Inter, IBM_Plex_Mono } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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

const SITE_URL = 'https://errendis.com';

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
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Errendis',
  url: SITE_URL,
  description:
    'Éditeur marocain de logiciels de gestion métiers (vertical SaaS) : santé, location automobile, transit et distribution médicale.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mohammedia',
    addressCountry: 'MA',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}