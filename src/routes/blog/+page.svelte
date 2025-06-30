<script>
  export let data;
</script>

<svelte:head>
  <title>Blog</title>
  <meta name="description" content="Blog posts and articles" />
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Blog</h1>
    
    <div class="space-y-8">
      {#each data.posts as post}
        <article class="border-b border-gray-200 dark:border-gray-700 pb-8">
          <h2 class="text-2xl font-semibold mb-3">
            <a 
              href="/blog/{post.slug}" 
              class="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {post.title}
            </a>
          </h2>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
          <p class="text-gray-600 dark:text-gray-300 line-clamp-2">
            {post.preview}
          </p>
          <a 
            href="/blog/{post.slug}" 
            class="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline"
          >
            Read more →
          </a>
        </article>
      {/each}
    </div>
  </div>
</div>