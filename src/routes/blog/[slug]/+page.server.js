import { marked } from 'marked';
import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export async function load({ params }) {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${params.slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    throw error(404, 'Post not found');
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  const html = marked(content);
  
  // Extract title from first # heading or filename
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1] : params.slug;
  
  // Get file stats for date
  const stats = fs.statSync(filePath);
  
  return {
    post: {
      slug: params.slug,
      title,
      date: stats.mtime,
      content,
      html
    }
  };
}