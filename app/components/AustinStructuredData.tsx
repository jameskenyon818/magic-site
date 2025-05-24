export default function AustinStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "James Kenyon Magic",
          "description": "James Kenyon is a professional magician specializing in trade shows and corporate events in Austin, Texas.",
          "url": "https://www.jameskenyonmagic.com/cities/austin-magician",
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
            "@type": "Place",
            "name": "Austin"
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