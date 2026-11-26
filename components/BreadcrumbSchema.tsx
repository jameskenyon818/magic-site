import Script from 'next/script';

interface BreadcrumbSchemaProps {
  title: string;
  slug: string;
}

export default function BreadcrumbSchema({ title, slug }: BreadcrumbSchemaProps) {
  const baseUrl = "https://www.jameskenyonmagic.com";
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${baseUrl}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": `${baseUrl}/blog/${slug}`
      }
    ]
  };

  return (
    <Script
      id={`breadcrumb-schema-${slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
}
