import Link from "next/link";
import { Metadata } from "next";
import CityFooter from "../components/CityFooter";
import { blogPosts } from "./_manifest";

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.jameskenyonmagic.com/blog' },
  title: "Blog | James Kenyon Magic",
  description: "Insights on trade shows, corporate events, and using magic to create engagement.",
  openGraph: {
    title: "Blog | James Kenyon Magic",
    description: "Insights on trade shows, corporate events, and using magic to create engagement.",
    type: "website",
  },
};

export default function BlogIndex() {
  const posts = blogPosts;

  return (
    <main className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/JamesKenyon_Magic_0092.jpg')",
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen bg-transparent text-white">
        <div className="mx-auto max-w-4xl p-6">
        <div className="mb-8">
          <Link href="/" className="text-[#b0c4de] hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Blog</h1>
        <p className="text-xl text-gray-300 mb-12">
          Insights on trade shows, corporate events, and using magic to create engagement.
        </p>
        
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-black/20 border border-zinc-700 rounded-xl p-6 hover:border-zinc-600 hover:bg-black/30 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-3">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-white hover:text-[#b0c4de] transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              {post.description && (
                <p className="text-gray-300 mb-4">{post.description}</p>
              )}
              <div className="flex items-center text-sm text-gray-400">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-[#b0c4de] hover:text-white transition-colors font-medium"
                >
                  Read more →
                </Link>
                {post.date && (
                  <>
                    <span className="mx-2">•</span>
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
        
        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No blog posts found.</p>
          </div>
        )}
        </div>
        
        <CityFooter city="blog" />
      </div>
    </main>
  );
}
