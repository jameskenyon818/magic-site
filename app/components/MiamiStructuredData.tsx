export default function MiamiStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "James Kenyon - Miami Corporate Magician",
    "image": "https://www.jameskenyonmagic.com/images/edit.png",
    "description": "James Kenyon is Miami's premier corporate magician, specializing in corporate events, trade shows, and private parties. With over 10 years of experience, he creates unforgettable magical experiences that leave lasting impressions.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Miami",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.7617",
      "longitude": "-80.1918"
    },
    "url": "https://www.jameskenyonmagic.com/cities/miami-magician",
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