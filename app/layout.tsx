import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ClientLogo from "./components/ClientLogo";
import SchemaMarkup from './components/SchemaMarkup';
import Navbar from './components/Navigation';

const inter = Inter({ subsets: ["latin"] });

import { SITE_URL } from '@/lib/site';

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  title: "James Kenyon Magic | Magician Near Me | Corporate Magician & Entertainment",
  description: "Looking for a magician near me? James Kenyon Magic is your top choice for corporate events, trade shows, and private parties. Professional magician available for hire specializing in close-up magic, stage shows, and trade show entertainment.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'James Kenyon Magic | Magician Near Me | Corporate Magician & Entertainment',
    description: 'Looking for a magician near me? James Kenyon Magic is your top choice for corporate events, trade shows, and private parties. Professional magician available for hire specializing in close-up magic, stage shows, and trade show entertainment.',
    url: './',
    siteName: 'James Kenyon Magic',
    images: [
      {
        url: 'https://www.jameskenyonmagic.com/images/hero.webp',
        width: 1200,
        height: 630,
        alt: 'James Kenyon Magic - Professional Corporate Magician',
      },
      {
        url: 'https://www.jameskenyonmagic.com/images/logo.webp',
        width: 512,
        height: 512,
        alt: 'James Kenyon Magic Logo',
      },
      {
        url: 'https://www.jameskenyonmagic.com/images/Untitled Project.jpg',
        width: 1200,
        height: 800,
        alt: 'James Kenyon performing stage magic',
      },
      {
        url: 'https://www.jameskenyonmagic.com/images/IMG_5400.JPG',
        width: 1200,
        height: 800,
        alt: 'James Kenyon close-up magic performance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'James Kenyon Magic | Magician Near Me | Corporate Magician & Entertainment',
    description: 'Looking for a magician near me? James Kenyon Magic is your top choice for corporate events, trade shows, and private parties.',
    images: [
      'https://www.jameskenyonmagic.com/images/hero.webp',
      'https://www.jameskenyonmagic.com/images/logo.webp'
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "James Kenyon Magic",
              "description": "Professional corporate magician James Kenyon specializes in trade shows, corporate events, and private parties. Offering close-up magic, stage shows, and trade show entertainment across major US cities.",
              "url": "https://www.jameskenyonmagic.com/",
              "logo": "https://www.jameskenyonmagic.com/images/logo.webp",
              "image": "https://www.jameskenyonmagic.com/images/hero.webp",
              "telephone": "+1-737-235-4182",
              "email": "info@jameskenyonmagic.com",
              "openingHours": "Mo-Su 00:00-23:59",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Austin",
                "addressRegion": "TX",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "30.2672",
                "longitude": "-97.7431"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Austin"
                },
                {
                  "@type": "City",
                  "name": "Dallas"
                },
                {
                  "@type": "City",
                  "name": "Houston"
                },
                {
                  "@type": "City",
                  "name": "San Antonio"
                },
                {
                  "@type": "City",
                  "name": "Phoenix"
                },
                {
                  "@type": "City",
                  "name": "Orlando"
                },
                {
                  "@type": "City",
                  "name": "Miami"
                },
                {
                  "@type": "City",
                  "name": "Tampa"
                },
                {
                  "@type": "City",
                  "name": "Chicago"
                },
                {
                  "@type": "City",
                  "name": "New York"
                },
                {
                  "@type": "City",
                  "name": "Denver"
                }
              ],
              "priceRange": "$$$",
              "sameAs": [
                "https://www.facebook.com/JamesKenyonMagic",
                "https://www.instagram.com/jameskenyonmagic",
                "https://www.linkedin.com/in/jameskenyonmagic",
                "https://www.youtube.com/@jameskenyonmagic"
              ],
              "offers": {
                "@type": "Offer",
                "itemOffered": [
                  {
                    "@type": "Service",
                    "name": "Corporate Event Magic",
                    "description": "Professional magic entertainment for corporate events, meetings, and conferences"
                  },
                  {
                    "@type": "Service",
                    "name": "Trade Show Magic",
                    "description": "Interactive magic performances to attract and engage trade show attendees"
                  },
                  {
                    "@type": "Service",
                    "name": "Private Party Magic",
                    "description": "Customized magic entertainment for private parties and special occasions"
                  }
                ]
              }
            })
          }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "James Kenyon Magic",
              "url": "https://www.jameskenyonmagic.com/",
              "logo": "https://www.jameskenyonmagic.com/images/logo.webp",
              "image": [
                "https://www.jameskenyonmagic.com/images/hero.webp",
                "https://www.jameskenyonmagic.com/images/Untitled Project.jpg",
                "https://www.jameskenyonmagic.com/images/IMG_5400.JPG"
              ],
              "description": "Professional corporate magician James Kenyon specializes in trade shows, corporate events, and private parties.",
              "sameAs": [
                "https://www.facebook.com/JamesKenyonMagic",
                "https://www.instagram.com/jameskenyonmagic",
                "https://www.linkedin.com/in/jameskenyonmagic",
                "https://www.youtube.com/@jameskenyonmagic"
              ]
            })
          }}
        />
        <Script
          id="gtm-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id=GTM-T5K35DC8'+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T5K35DC8');`,
          }}
        />
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T5K35DC8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        <SchemaMarkup />
        <ClientLogo />
        <main>{children}</main>
      </body>
    </html>
  );
}
