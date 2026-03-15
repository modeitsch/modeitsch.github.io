import { marked } from 'marked';
import { error } from '@sveltejs/kit';
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

export async function entries() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames
    .filter(name => name.endsWith('.md'))
    .map(name => ({
      slug: name.replace('.md', '')
    }));
}

export async function load({ params }) {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    throw error(404, 'Post not found');
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const { metadata, body } = parseFrontmatter(content);
  const html = marked(body);

  const titleMatch = body.match(/^#\s+(.+)$/m);
  const title = metadata.title || (titleMatch ? titleMatch[1] : params.slug);

  const date = metadata.date
    ? new Date(metadata.date).toISOString()
    : fs.statSync(filePath).mtime.toISOString();

  return {
    post: {
      slug: params.slug,
      title,
      date,
      content: body,
      html
    }
  };
}