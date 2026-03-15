import fs from 'fs';
import path from 'path';

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { metadata: {}, body: content };

  const metadata = {};
  match[1].split('\n').forEach(line => {
    const [key, ...rest] = line.split(':');
    if (key && rest.length) {
      metadata[key.trim()] = rest.join(':').trim();
    }
  });

  return { metadata, body: match[2] };
}

export async function load() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter(name => name.endsWith('.md'))
    .map((name) => {
      const filePath = path.join(postsDirectory, name);
      const content = fs.readFileSync(filePath, 'utf8');
      const { metadata, body } = parseFrontmatter(content);

      // Use frontmatter title, fall back to first heading, then filename
      const titleMatch = body.match(/^#\s+(.+)$/m);
      const title = metadata.title || (titleMatch ? titleMatch[1] : name.replace('.md', ''));

      // Use frontmatter date, fall back to file mtime
      const date = metadata.date
        ? new Date(metadata.date).toISOString()
        : fs.statSync(filePath).mtime.toISOString();

      const slug = name.replace('.md', '');

      // Extract preview (first paragraph after title in body)
      const lines = body.split('\n');
      const titleLineIndex = lines.findIndex(line => line.startsWith('# '));
      let preview = '';

      for (let i = (titleLineIndex >= 0 ? titleLineIndex + 1 : 0); i < lines.length; i++) {
        const line = lines[i].trim();
        if (line && !line.startsWith('#')) {
          preview = line;
          break;
        }
      }

      return {
        slug,
        title,
        date,
        preview: preview || 'No preview available'
      };
    });

  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    posts: sortedPosts
  };
}