export default function SDStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "James Kenyon Magic",
          "description": "James Kenyon is a professional magician specializing in trade shows and corporate events in San Diego, California.",
          "url": "https://www.jameskenyonmagic.com/cities/san-diego-magician",
          "telephone": "+1-737-235-4182",
          "email": "info@jameskenyonmagic.com",
          "openingHours": "Mo-Su 00:00-23:59",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Diego",
            "addressRegion": "CA",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "32.7157",
            "longitude": "-117.1611"
          },
          "areaServed": {
            "@type": "Place",
            "name": "San Diego"
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