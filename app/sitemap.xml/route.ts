export async function GET() {
  const baseUrl = 'https://www.jameskenyonmagic.com';

  const staticPages = [
    '',
    '/close-up-magic',
    '/stage-show-magic',
    '/trade-show-magic',
    '/thank-you',
    '/contact',
    '/austin-magician',
    '/dallas-magician',
    '/houston-magician',
    '/san-antonio-magician',
    '/chicago-magician',
    '/new-york-magician',
    '/los-angeles-magician',
    '/miami-magician',
    '/orlando-magician',
    '/phoenix-magician',
    '/denver-magician',
    '/san-diego-magician',
    '/tampa-magician',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
  </url>`
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 