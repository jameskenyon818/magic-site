import Link from "next/link";
import { blogPosts, BlogPost } from "../app/blog/_manifest";

interface RelatedPostsProps {
  currentSlug: string;
  limit?: number;
}

export default function RelatedPosts({ currentSlug, limit = 3 }: RelatedPostsProps) {
  // Filter out current post and take the requested number of posts
  const relatedPosts = blogPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, limit);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-8 border-t border-zinc-700">
      <h3 className="text-2xl font-bold text-white mb-6">Related Posts</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <article key={post.slug} className="bg-zinc-900 rounded-xl p-6 hover:bg-zinc-800 transition-colors">
            <h4 className="text-lg font-semibold text-white mb-3">
              <Link 
                href={`/blog/${post.slug}`}
                className="hover:text-[#b0c4de] transition-colors"
              >
                {post.title}
              </Link>
            </h4>
            {post.description && (
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.description}</p>
            )}
            <div className="flex items-center justify-between">
              <Link 
                href={`/blog/${post.slug}`}
                className="text-[#b0c4de] hover:text-white transition-colors text-sm font-medium"
              >
                Read more →
              </Link>
              {post.date && (
                <span className="text-gray-400 text-xs">
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
