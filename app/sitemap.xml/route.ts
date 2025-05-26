export async function GET() {
  const baseUrl = 'https://www.jameskenyonmagic.com';

  const routes = [
    '/',
    '/about',
    '/thank-you',
    '/cities/austin-magician',
    '/cities/austin-magician/close-up',
    '/cities/austin-magician/stage',
    '/cities/austin-magician/trade-show',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
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