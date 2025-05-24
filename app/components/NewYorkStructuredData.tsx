export default function NewYorkStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "James Kenyon Magic",
          "image": "https://www.jameskenyonmagic.com/images/edit.png",
          "description": "James Kenyon is a professional magician specializing in trade shows and corporate events in New York City.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "New York",
            "addressLocality": "New York",
            "addressRegion": "NY",
            "postalCode": "10001",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "40.7128",
            "longitude": "-74.0060"
          },
          "url": "https://www.jameskenyonmagic.com/cities/new-york-magician",
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
            "https://www.instagram.com/jameskenyonmagic",
            "https://www.linkedin.com/in/jameskenyonmagic",
            "https://www.youtube.com/@jameskenyonmagic"
          ]
        })
      }}
    />
  );
} 