import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { GA_MEASUREMENT_ID, CONSENT_DEFAULT_SCRIPT } from '@/lib/consent';
import { content } from '@/lib/content';
import { asset } from '@/lib/asset';

// ═══════════════════════════════════════════════════════════════════════════
// FONT — Archivo (explicit weights; the "expanded" display look comes from
// weight 900 + tracking + uppercase, not the width axis, which breaks the build)
// ═══════════════════════════════════════════════════════════════════════════
const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const SITE_URL = 'https://www.transporteordones.com.ar';
const { site } = content;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Transporte Ordoñes — Cargas generales y granos a todo el país',
  description:
    'Empresa familiar de transporte de cargas de Tío Pujío, Córdoba. Flota propia Mercedes-Benz para cargas generales y granos, con cobertura nacional. Pedí tu cotización por WhatsApp.',
  keywords:
    'transporte de cargas, camiones, fletes, cargas generales, transporte de granos, Tío Pujío, Córdoba, transporte nacional, logística, Transporte Ordoñes',
  authors: [{ name: 'Transporte Ordoñes' }],
  creator: 'Transporte Ordoñes',
  publisher: 'Transporte Ordoñes',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Transporte Ordoñes — Cargas generales y granos a todo el país',
    description:
      'Empresa familiar de transporte de cargas de Tío Pujío, Córdoba. Flota propia, cobertura nacional. Cotizá por WhatsApp.',
    url: SITE_URL,
    siteName: 'Transporte Ordoñes',
    type: 'website',
    locale: 'es_AR',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Camión de Transporte Ordoñes en la ruta' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transporte Ordoñes — Cargas generales y granos a todo el país',
    description: 'Empresa familiar de transporte de cargas de Tío Pujío, Córdoba. Flota propia, cobertura nacional.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: SITE_URL },
  verification: process.env.GSC_VERIFICATION ? { google: process.env.GSC_VERIFICATION } : undefined,
  category: 'transportation',
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  name: site.name,
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  description:
    'Empresa familiar de transporte de cargas generales y granos, con flota propia y cobertura nacional. Base en Tío Pujío, Córdoba.',
  telephone: site.phoneDisplay,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Pasco 226',
    addressLocality: 'Tío Pujío',
    addressRegion: 'Córdoba',
    postalCode: '5990',
    addressCountry: 'AR',
  },
  areaServed: { '@type': 'Country', name: 'Argentina' },
  sameAs: [site.facebook],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={archivo.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href={asset('/brand/icon.svg')} type="image/svg+xml" />
        <meta name="theme-color" content="#10aeef" />

        {/* Apply theme class before paint to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=document.documentElement,s=localStorage.getItem('darkMode');d.classList.add(s==='false'?'light':'dark')}catch(e){document.documentElement.classList.add('dark')}})()`,
          }}
        />

        {GA_MEASUREMENT_ID && <script dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULT_SCRIPT }} />}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
      {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
    </html>
  );
}
