export default function AtlantaStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "James Kenyon - Atlanta Corporate Magician",
    "image": "https://www.jameskenyonmagic.com/images/edit.png",
    "description": "James Kenyon is Atlanta's premier corporate magician, specializing in corporate events, trade shows, and private parties. With over 10 years of experience, he creates unforgettable magical experiences that leave lasting impressions.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Atlanta",
      "addressRegion": "GA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.7490",
      "longitude": "-84.3880"
    },
    "url": "https://www.jameskenyonmagic.com/atlanta-magician",
    "telephone": "+1-555-555-5555",
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