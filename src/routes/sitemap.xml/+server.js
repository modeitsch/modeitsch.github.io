export const prerender = true;

const site = 'https://modeitsch.github.io';

// Static pages
const staticPages = [
  '',
  '/about',
  '/projects',
  '/contact',
  '/blog'
];

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  // Get blog posts dynamically
  const blogModules = import.meta.glob('/src/posts/*.md');
  const blogSlugs = Object.keys(blogModules).map(path => {
    const slug = path.replace('/src/posts/', '').replace('.md', '');
    return `/blog/${slug}`;
  });

  const allPages = [...staticPages, ...blogSlugs];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    page => `  <url>
    <loc>${site}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : page === '/blog' ? '0.9' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  });
}
