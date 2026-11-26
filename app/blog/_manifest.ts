import fs from 'fs';
import path from 'path';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date?: string;
  tags?: string[];
  lastModified?: string;
  draft?: boolean;
}

// This function reads all blog posts at build time
export function getBlogPosts(): BlogPost[] {
  const blogDir = path.join(process.cwd(), 'app', 'blog');
  const posts: BlogPost[] = [];
  
  try {
    const entries = fs.readdirSync(blogDir, { withFileTypes: true })
      .filter((d) => d.isDirectory());

    for (const dir of entries) {
      const slug = dir.name;
      const postPath = path.join(blogDir, slug, 'page.tsx');
      
      if (fs.existsSync(postPath)) {
        try {
          // Read the MDX file content to extract metadata
          const content = fs.readFileSync(postPath, 'utf-8');
          
          // Extract metadata from the export const metadata = {...} block
          const metadataMatch = content.match(/export const metadata = \{([\s\S]*?)\};/);
          if (metadataMatch) {
            const metadataString = metadataMatch[1];
            
            // Parse the metadata object (simple parsing for our use case)
            const titleMatch = metadataString.match(/title:\s*['"`]([^'"`]+)['"`]/);
            const descriptionMatch = metadataString.match(/description:\s*['"`]([^'"`]+)['"`]/);
            const dateMatch = metadataString.match(/date:\s*['"`]([^'"`]+)['"`]/);
            const keywordsMatch = metadataString.match(/keywords:\s*\[([^\]]+)\]/);
            const draftMatch = metadataString.match(/draft:\s*(true|false)/);
            
            const title = titleMatch ? titleMatch[1] : slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            const description = descriptionMatch ? descriptionMatch[1] : '';
            const date = dateMatch ? dateMatch[1] : undefined;
            const draft = draftMatch ? draftMatch[1] === 'true' : false;
            
            // Parse keywords as tags
            let tags: string[] = [];
            if (keywordsMatch) {
              const keywordsString = keywordsMatch[1];
              tags = keywordsString.split(',').map(tag => tag.trim().replace(/['"`]/g, ''));
            }
            
            // Get file modification time as lastModified
            const stats = fs.statSync(postPath);
            const lastModified = stats.mtime.toISOString();
            
            posts.push({
              slug,
              title,
              description,
              date,
              tags,
              lastModified,
              draft,
            });
          } else {
            // Fallback if metadata block not found
            const stats = fs.statSync(postPath);
            posts.push({
              slug,
              title: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
              description: '',
              lastModified: stats.mtime.toISOString(),
              draft: false,
            });
          }
        } catch (error) {
          console.error(`Error reading post ${slug}:`, error);
          // Fallback for posts that can't be read
          posts.push({
            slug,
            title: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            description: '',
            draft: false,
          });
        }
      }
    }
  } catch (error) {
    console.error('Error reading blog directory:', error);
  }

  // Sort by date if available, otherwise alphabetically by title
  posts.sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return a.title.localeCompare(b.title);
  });

  return posts;
}

// Get all posts (including drafts)
export const allBlogPosts = getBlogPosts();

// Get only published posts (excluding drafts)
export const blogPosts = allBlogPosts.filter(post => !post.draft);
