import Script from 'next/script';

interface ArticleSchemaProps {
  title: string;
  description: string;
  slug: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
  author?: {
    name: string;
    url?: string;
  };
}

export default function ArticleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  image = "/images/hero.webp",
  author = {
    name: "James Kenyon",
    url: "https://www.jameskenyonmagic.com/about"
  }
}: ArticleSchemaProps) {
  const baseUrl = "https://www.jameskenyonmagic.com";
  const articleUrl = `${baseUrl}/blog/${slug}`;
  const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": imageUrl,
    "author": {
      "@type": "Person",
      "name": author.name,
      "url": author.url
    },
    "publisher": {
      "@type": "Organization",
      "name": "James Kenyon Magic",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/images/logo.webp`
      }
    },
    "datePublished": datePublished || new Date().toISOString(),
    "dateModified": dateModified || datePublished || new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    },
    "url": articleUrl
  };

  return (
    <Script
      id={`article-schema-${slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
}
