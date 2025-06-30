import { marked } from 'marked';
import fs from 'fs';
import path from 'path';

export async function load() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  
  const posts = await Promise.all(
    filenames
      .filter(name => name.endsWith('.md'))
      .map(async (name) => {
        const filePath = path.join(postsDirectory, name);
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Extract title from first # heading or filename
        const titleMatch = content.match(/^#\s+(.+)$/m);
        const title = titleMatch ? titleMatch[1] : name.replace('.md', '');
        
        // Get file stats for date
        const stats = fs.statSync(filePath);
        
        // Create slug from filename
        const slug = name.replace('.md', '');
        
        // Extract preview (first paragraph after title)
        const lines = content.split('\n');
        const titleLineIndex = lines.findIndex(line => line.startsWith('# '));
        let preview = '';
        
        for (let i = titleLineIndex + 1; i < lines.length; i++) {
          const line = lines[i].trim();
          if (line && !line.startsWith('#')) {
            preview = line;
            break;
          }
        }
        
        return {
          slug,
          title,
          date: stats.mtime,
          preview: preview || 'No preview available'
        };
      })
  );
  
  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => b.date - a.date);
  
  return {
    posts: sortedPosts
  };
}