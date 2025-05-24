export default function ChicagoStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "James Kenyon - Chicago Corporate Magician",
    "description": "Professional corporate magician and entertainer in Chicago, specializing in corporate events, trade shows, and private parties.",
    "image": "https://jameskenyonmagic.com/images/edit.png",
    "url": "https://jameskenyonmagic.com/cities/chicago-magician",
    "telephone": "+1-512-555-0123",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.8781",
      "longitude": "-87.6298"
    },
    "priceRange": "$$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/jameskenyonmagic",
      "https://www.instagram.com/jameskenyonmagic",
      "https://www.linkedin.com/in/jameskenyonmagic"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 