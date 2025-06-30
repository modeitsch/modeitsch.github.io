<script>
  export let data;
  
  $: post = data.post;
</script>

<svelte:head>
  <title>{post.title}</title>
  <meta name="description" content={post.title} />
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <div class="max-w-4xl mx-auto">
    <nav class="mb-8">
      <a 
        href="/blog" 
        class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
      >
        ← Back to Blog
      </a>
    </nav>
    
    <article>
      <header class="mb-8">
        <h1 class="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          {post.title}
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </header>
      
      <div class="prose prose-lg dark:prose-invert max-w-none">
        {@html post.html}
      </div>
    </article>
  </div>
</div>