export default function DenverStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "James Kenyon - Denver Corporate Magician",
    "image": "https://www.jameskenyonmagic.com/images/edit.png",
    "description": "Denver's premier corporate magician, James Kenyon, specializes in close-up magic, stage shows, and trade show entertainment for corporate events, private parties, and special occasions.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Denver",
      "addressRegion": "CO",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.7392",
      "longitude": "-104.9903"
    },
    "url": "https://www.jameskenyonmagic.com/cities/denver-magician",
    "telephone": "+1-312-555-0123",
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