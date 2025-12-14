<script>
  export let data;

  $: post = data.post;
</script>

<svelte:head>
  <title>{post.title} - Moshe Deitsch</title>
  <meta name="description" content={post.title} />
</svelte:head>

<section class="hero-section">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <nav class="breadcrumb">
        <a href="/blog" class="back-link">
          Back to Blog
        </a>
      </nav>

      <h1 class="page-title">{post.title}</h1>
      <p class="post-date">
        {new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <article class="prose">
        {@html post.html}
      </article>
    </div>
  </div>
</section>

<style>
  .hero-section {
    padding: 6rem 0 3rem;
    background: var(--color-background);
  }

  .breadcrumb {
    margin-bottom: 2rem;
  }

  .back-link {
    color: var(--color-accent);
    text-decoration: none;
    font-weight: 500;
    transition: color 150ms ease;
  }

  .back-link:hover {
    color: var(--color-accent-hover);
  }

  .page-title {
    font-family: var(--font-heading);
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .post-date {
    color: var(--color-text-muted);
    font-size: 1rem;
  }

  .section {
    padding: 3rem 0 5rem;
    background: var(--color-background);
  }

  .prose {
    color: var(--color-text-secondary);
    line-height: 1.8;
    font-size: 1.125rem;
  }

  .prose :global(h2) {
    font-family: var(--font-heading);
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }

  .prose :global(h3) {
    font-family: var(--font-heading);
    font-size: 1.375rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-top: 2rem;
    margin-bottom: 0.75rem;
  }

  .prose :global(p) {
    margin-bottom: 1.5rem;
  }

  .prose :global(a) {
    color: var(--color-accent);
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .prose :global(a:hover) {
    color: var(--color-accent-hover);
  }

  .prose :global(code) {
    font-family: var(--font-mono);
    font-size: 0.875em;
    background: var(--color-background-secondary);
    padding: 0.2em 0.4em;
    border-radius: 0.25rem;
    color: var(--color-text-primary);
  }

  .prose :global(pre) {
    background: var(--color-background-secondary);
    padding: 1.5rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin-bottom: 1.5rem;
  }

  .prose :global(pre code) {
    background: transparent;
    padding: 0;
  }

  .prose :global(ul),
  .prose :global(ol) {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }

  .prose :global(li) {
    margin-bottom: 0.5rem;
  }

  .prose :global(blockquote) {
    border-left: 4px solid var(--color-accent);
    padding-left: 1.5rem;
    margin: 1.5rem 0;
    color: var(--color-text-muted);
    font-style: italic;
  }

  .prose :global(img) {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin: 1.5rem 0;
  }

  .prose :global(hr) {
    border: none;
    border-top: 1px solid var(--color-border);
    margin: 2rem 0;
  }
</style>
