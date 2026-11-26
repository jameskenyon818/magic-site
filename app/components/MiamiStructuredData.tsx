export default function MiamiStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "James Kenyon | Corporate Magician in Miami",
          "image": "https://www.jameskenyonmagic.com/images/edit.png",
          "description": "Hire James Kenyon, Miami's premier corporate magician, for unforgettable entertainment at your next event. Specializing in close-up magic, stage shows, and trade show performances.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Miami",
            "addressLocality": "Miami",
            "addressRegion": "FL",
            "postalCode": "33101",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "25.7617",
            "longitude": "-80.1918"
          },
          "url": "https://www.jameskenyonmagic.com/cities/miami-magician",
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
        })
      }}
    />
  );
} 