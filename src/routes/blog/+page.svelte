<script>
  import BlogSearch from '$lib/components/BlogSearch.svelte';

  export let data;

  let filteredPosts = data.posts;
  let searchQuery = '';

  function handleFilter(event) {
    filteredPosts = event.detail.filteredPosts;
    searchQuery = event.detail.searchQuery;
  }
</script>

<svelte:head>
  <title>Blog - Moshe Deitsch</title>
  <meta name="description" content="Blog posts and articles about web development" />
</svelte:head>

<section class="hero-section">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <h1 class="page-title">
        <span class="text-accent">Blog</span>
      </h1>
      <p class="hero-description">
        Thoughts, tutorials, and insights about web development
      </p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <div class="search-container">
        <BlogSearch posts={data.posts} bind:searchQuery on:filter={handleFilter} />
      </div>

      <div class="posts-list">
        {#each filteredPosts as post}
          <article class="post-card">
            <h2 class="post-title">
              <a href="/blog/{post.slug}">
                {post.title}
              </a>
            </h2>
            <p class="post-date">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            <p class="post-preview">
              {post.preview}
            </p>
            <a href="/blog/{post.slug}" class="read-more">
              Read more
            </a>
          </article>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .hero-section {
    padding: 6rem 0 3rem;
    background: var(--color-background);
  }

  .page-title {
    font-family: var(--font-heading);
    font-size: clamp(2.5rem, 6vw, 3.5rem);
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: 1rem;
  }

  .text-accent {
    color: var(--color-accent);
  }

  .hero-description {
    font-size: 1.25rem;
    color: var(--color-text-secondary);
  }

  .section {
    padding: 3rem 0 5rem;
    background: var(--color-background);
  }

  .search-container {
    margin-bottom: 3rem;
  }

  .posts-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .post-card {
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--color-border);
  }

  .post-card:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  .post-title {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }

  .post-title a {
    color: var(--color-text-primary);
    text-decoration: none;
    transition: color 150ms ease;
  }

  .post-title a:hover {
    color: var(--color-accent);
  }

  .post-date {
    font-size: 0.875rem;
    color: var(--color-text-muted);
    margin-bottom: 1rem;
  }

  .post-preview {
    color: var(--color-text-secondary);
    line-height: 1.7;
    margin-bottom: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .read-more {
    color: var(--color-accent);
    font-weight: 500;
    text-decoration: none;
    transition: color 150ms ease;
  }

  .read-more:hover {
    color: var(--color-accent-hover);
  }
</style>
