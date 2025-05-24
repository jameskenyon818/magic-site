export default function NYStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "James Kenyon - New York Corporate Magician",
    "description": "Professional corporate magician and entertainer in New York, specializing in corporate events, trade shows, and private parties.",
    "image": "https://jameskenyonmagic.com/images/edit.png",
    "url": "https://jameskenyonmagic.com/cities/new-york-magician",
    "telephone": "+1-512-555-0123",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7128",
      "longitude": "-74.0060"
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