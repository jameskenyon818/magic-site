'use client';

import { usePathname } from 'next/navigation';

export default function LocalBusinessSchema() {
  const pathname = usePathname();
  
  // Extract city name from path
  const cityMatch = pathname.match(/\/cities\/([a-z-]+)-magician/);
  const cityName = cityMatch 
    ? cityMatch[1]
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    : '';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'James Kenyon Magic',
    url: `https://www.jameskenyonmagic.com${pathname}`,
    description: `Looking to hire a magician in ${cityName}? James Kenyon Magic offers professional magic entertainment for all occasions. Find a magician near me for your next birthday party or special event.`,
    keywords: ['hire a magician', 'magician near me', 'magician for birthday party'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: cityName,
      addressRegion: 'TX',
      addressCountry: 'US'
    },
    areaServed: {
      '@type': 'City',
      name: cityName
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
} 