import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ClientLogo from "./components/ClientLogo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "James Kenyon | Corporate Illusionist",
  description: "Elite corporate entertainment and magic performances by James Kenyon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
              "description": "James Kenyon is a professional magician specializing in trade shows and corporate events across the U.S.",
              "url": "https://www.jameskenyonmagic.com",
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
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "sameAs": [
                "https://www.facebook.com/JamesKenyonMagic",
                "https://www.instagram.com/jameskenyonmagic"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ClientLogo />
        {children}
      </body>
    </html>
  );
}
