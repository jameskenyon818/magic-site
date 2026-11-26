import type { MetadataRoute } from 'next';
import { blogPosts } from './blog/_manifest';
import { SITE_URL } from '../lib/site';

export const dynamic = 'force-static';

const landing = ['/', '/about', '/blog', '/clients', '/close-up', '/contact',
  '/corporate-magician', '/performances', '/stage-magic', '/testimonials', '/trade-show'];
const cities = ['atlanta', 'austin', 'chicago', 'dallas', 'denver', 'houston', 'los-angeles',
  'miami', 'new-york', 'orlando', 'phoenix', 'san-antonio', 'san-diego', 'tampa'];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...landing,
    ...cities.flatMap((city) => ['', '/close-up', '/stage-magic', '/trade-show']
      .map((suffix) => `/cities/${city}-magician${suffix}`))
  ];
  const entries: MetadataRoute.Sitemap = [...new Set(paths)].map((path) => ({ url: `${SITE_URL}${path}` }));
  for (const post of blogPosts) {
    const date = post.date;
    entries.push({ url: `${SITE_URL}/blog/${post.slug}`, ...(date && !Number.isNaN(Date.parse(date)) ? { lastModified: date } : {}) });
  }
  return [...new Map(entries.map((entry) => [entry.url, entry])).values()];
}
