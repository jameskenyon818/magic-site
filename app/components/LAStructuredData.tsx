import Script from 'next/script';

export default function LAStructuredData() {
  return (
    <Script
      id="la-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "James Kenyon Magic",
          "description": "James Kenyon is a professional magician specializing in trade shows and corporate events in Los Angeles, California.",
          "url": "https://www.jameskenyonmagic.com/cities/los-angeles-magician",
          "telephone": "+1-737-235-4182",
          "email": "info@jameskenyonmagic.com",
          "openingHours": "Mo-Su 00:00-23:59",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Los Angeles",
            "addressRegion": "CA",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "34.0522",
            "longitude": "-118.2437"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Los Angeles"
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