import Script from 'next/script';

export default function DallasStructuredData() {
  return (
    <Script
      id="dallas-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "James Kenyon Magic",
          "description": "James Kenyon is a professional magician specializing in trade shows and corporate events in Dallas, Texas.",
          "url": "https://www.jameskenyonmagic.com/cities/dallas-magician",
          "telephone": "+1-737-235-4182",
          "email": "info@jameskenyonmagic.com",
          "openingHours": "Mo-Su 00:00-23:59",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dallas",
            "addressRegion": "TX",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "32.7767",
            "longitude": "-96.7970"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Dallas"
          },
          "sameAs": [
            "https://www.facebook.com/JamesKenyonMagic",
            "https://www.instagram.com/jameskenyonmagic"
          ]
        })
      }}
    />
  );
} 