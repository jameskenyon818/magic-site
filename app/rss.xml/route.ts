import { blogPosts } from '../blog/_manifest';

export const runtime = 'nodejs';

export async function GET(): Promise<Response> {
  const baseUrl = 'https://www.jameskenyonmagic.com';
  
  const rssItems = blogPosts.map(post => {
    const postUrl = `${baseUrl}/blog/${post.slug}`;
    const pubDate = post.date ? new Date(post.date).toUTCString() : new Date().toUTCString();
    
    return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      ${post.tags ? post.tags.map(tag => `<category><![CDATA[${tag}]]></category>`).join('') : ''}
    </item>`;
  }).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>James Kenyon Magic Blog</title>
    <description>Insights on trade shows, corporate events, and using magic to create engagement.</description>
    <link>${baseUrl}/blog</link>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>info@jameskenyonmagic.com (James Kenyon)</managingEditor>
    <webMaster>info@jameskenyonmagic.com (James Kenyon)</webMaster>
    <copyright>Copyright ${new Date().getFullYear()} James Kenyon Magic. All rights reserved.</copyright>
    <image>
      <url>${baseUrl}/images/logo.webp</url>
      <title>James Kenyon Magic Blog</title>
      <link>${baseUrl}/blog</link>
      <width>144</width>
      <height>144</height>
    </image>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
