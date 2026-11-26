import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { allBlogPosts } from "../_manifest";

export default async function BlogPostLayout({
  params,
  children,
}: { 
  params: Promise<{ slug: string }>, 
  children: ReactNode 
}) {
  const { slug } = await params;
  const post = allBlogPosts.find(p => p.slug === slug);
  if (post?.draft) {
    notFound();
  }
  return <>{children}</>;
}
