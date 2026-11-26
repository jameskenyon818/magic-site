#!/usr/bin/env tsx

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

interface PostOptions {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  date?: string;
  draft?: boolean;
  author?: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function generatePostTemplate(options: PostOptions): string {
  const {
    slug,
    title,
    description,
    keywords,
    date = new Date().toISOString().split('T')[0],
    draft = false,
    author = 'James Kenyon'
  } = options;

  const keywordsString = keywords.map(k => `"${k}"`).join(', ');
  const canonicalUrl = `/blog/${slug}`;
  const imageUrl = '/images/hero.webp';

  return `export const metadata = {
  title: "${title}",
  description: "${description}",
  keywords: [${keywordsString}],
  alternates: {
    canonical: "${canonicalUrl}",
  },
  openGraph: {
    title: "${title}",
    description: "${description}",
    type: "article",
    images: [
      {
        url: "${imageUrl}",
        width: 1200,
        height: 630,
        alt: "James Kenyon Magic - ${title}",
      },
    ],
  },
  date: "${date}",
  draft: ${draft},
  author: "${author}",
};

import Prose from "@/components/Prose";
import Link from 'next/link';
import CityFooter from '../../components/CityFooter';
import RelatedPosts from '../../../components/RelatedPosts';
import ArticleSchema from '../../../components/ArticleSchema';
import BreadcrumbSchema from '../../../components/BreadcrumbSchema';

export default function ${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}() {
  return (
    <>
      <ArticleSchema
        title="${title}"
        description="${description}"
        slug="${slug}"
        datePublished="${date}"
        dateModified="${date}"
        image="${imageUrl}"
      />
      <BreadcrumbSchema
        title="${title}"
        slug="${slug}"
      />
      <main className="min-h-screen bg-black text-white">
        <section className="relative py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link href="/blog" className="text-[#b0c4de] hover:text-white transition-colors">
                ← Back to Blog
              </Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ${title}
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              ${description}
            </p>
            <div className="flex items-center text-sm text-gray-400">
              <span>5 min read</span>
              <span className="mx-2">•</span>
              <span>${keywords[0] || 'Blog'}</span>
              <span className="mx-2">•</span>
              <span>${new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 pb-20">
          <Prose>
            <p className="text-xl text-gray-300 mb-8">
              Your content goes here...
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">Introduction</h2>
            <p className="text-gray-300 mb-6">
              Start your blog post with an engaging introduction that hooks the reader and clearly states what they'll learn.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">Main Content</h2>
            <p className="text-gray-300 mb-6">
              Develop your main points here. Use subheadings to break up the content and make it easy to scan.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">Conclusion</h2>
            <p className="text-gray-300 mb-8">
              Wrap up your post with a strong conclusion that reinforces your main points and provides a clear call-to-action.
            </p>

            <div className="bg-[#b0c4de] text-black rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-lg mb-6">
                Looking for professional magic entertainment for your next event? Let's discuss how James Kenyon Magic can help you create an unforgettable experience.
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-black text-white font-semibold px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Contact James Kenyon Magic
              </Link>
            </div>
          </Prose>
          
          <RelatedPosts currentSlug="${slug}" />
        </article>

        <CityFooter city="blog" />
      </main>
    </>
  );
}
`;
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('Usage: npm run new-post "Your Post Title"');
    console.log('Example: npm run new-post "10 Tips for Trade Show Success"');
    process.exit(1);
  }

  const title = args.join(' ');
  const slug = slugify(title);
  const description = `Learn about ${title.toLowerCase()} and how it can benefit your business.`;
  const keywords = title.toLowerCase().split(' ').filter(word => word.length > 3);

  const postOptions: PostOptions = {
    slug,
    title,
    description,
    keywords,
  };

  const blogDir = path.join(process.cwd(), 'app', 'blog');
  const postDir = path.join(blogDir, slug);
  const postFile = path.join(postDir, 'page.tsx');

  // Check if post already exists
  if (fs.existsSync(postFile)) {
    console.error(`❌ Post with slug "${slug}" already exists!`);
    process.exit(1);
  }

  // Create directory
  fs.mkdirSync(postDir, { recursive: true });

  // Generate and write the post
  const postContent = generatePostTemplate(postOptions);
  fs.writeFileSync(postFile, postContent);

  console.log(`✅ Created new blog post: ${title}`);
  console.log(`📁 Location: ${postFile}`);
  console.log(`🔗 URL: /blog/${slug}`);
  console.log(`📝 Edit the file to add your content!`);
}

if (require.main === module) {
  main();
}
