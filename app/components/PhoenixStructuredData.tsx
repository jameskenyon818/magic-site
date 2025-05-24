export default function PhoenixStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "James Kenyon Magic",
          "description": "James Kenyon is a professional magician specializing in trade shows and corporate events in Phoenix, Arizona.",
          "url": "https://www.jameskenyonmagic.com/cities/phoenix-magician",
          "telephone": "+1-737-235-4182",
          "email": "info@jameskenyonmagic.com",
          "openingHours": "Mo-Su 00:00-23:59",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Phoenix",
            "addressRegion": "AZ",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "33.4484",
            "longitude": "-112.0740"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Phoenix"
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