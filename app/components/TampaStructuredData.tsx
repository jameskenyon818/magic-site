export default function TampaStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "James Kenyon | Corporate Magician in Tampa",
    "image": "https://jameskenyonmagic.com/images/edit.png",
    "description": "Hire James Kenyon, Tampa's premier corporate magician for corporate events, trade shows, and private parties. World-class entertainment that leaves lasting impressions.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tampa",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "27.9506",
      "longitude": "-82.4572"
    },
    "url": "https://jameskenyonmagic.com/cities/tampa-magician",
    "telephone": "737-235-4182",
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
      "https://www.instagram.com/jameskenyonmagic/",
      "https://www.linkedin.com/in/jameskenyonmagic/",
      "https://www.youtube.com/@jameskenyonmagic"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 