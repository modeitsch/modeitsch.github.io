<script>
  import { page } from '$app/stores';
  import { Home, ArrowLeft, RefreshCw } from 'lucide-svelte';
</script>

<svelte:head>
  <title>{$page.status} - Page Not Found | Moshe Deitsch</title>
  <meta name="description" content="The page you're looking for doesn't exist or has been moved." />
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900 px-4">
  <div class="text-center max-w-2xl mx-auto">
    <!-- Animated 404 number -->
    <div class="relative mb-8">
      <h1 class="text-[12rem] md:text-[16rem] font-bold text-gray-100 dark:text-gray-800 select-none leading-none">
        {$page.status}
      </h1>
      <div class="absolute inset-0 flex items-center justify-center">
        <span class="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
          {$page.status}
        </span>
      </div>
    </div>

    <!-- Error message -->
    <div class="space-y-4 mb-12">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
        {#if $page.status === 404}
          Oops! Page Not Found
        {:else}
          Something Went Wrong
        {/if}
      </h2>
      <p class="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
        {#if $page.status === 404}
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        {:else}
          {$page.error?.message || "An unexpected error occurred. Please try again."}
        {/if}
      </p>
    </div>

    <!-- Decorative elements -->
    <div class="flex justify-center gap-2 mb-12">
      {#each Array(5) as _, i}
        <div
          class="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-bounce"
          style="animation-delay: {i * 0.1}s"
        ></div>
      {/each}
    </div>

    <!-- Action buttons -->
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="/"
        class="btn-primary inline-flex items-center justify-center space-x-2 group"
      >
        <Home size={20} />
        <span>Go Home</span>
      </a>
      <button
        on:click={() => history.back()}
        class="btn-secondary inline-flex items-center justify-center space-x-2 group"
      >
        <ArrowLeft size={20} class="group-hover:-translate-x-1 transition-transform" />
        <span>Go Back</span>
      </button>
      <button
        on:click={() => location.reload()}
        class="btn-secondary inline-flex items-center justify-center space-x-2 group"
      >
        <RefreshCw size={20} class="group-hover:rotate-180 transition-transform duration-500" />
        <span>Try Again</span>
      </button>
    </div>

    <!-- Lost in code joke -->
    <div class="mt-16 p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
      <code class="text-sm text-gray-600 dark:text-gray-400 font-mono">
        <span class="text-blue-600 dark:text-blue-400">if</span> (lost) {"{"}<br />
        &nbsp;&nbsp;<span class="text-purple-600 dark:text-purple-400">return</span> <span class="text-green-600 dark:text-green-400">"/"</span>;<br />
        {"}"}
      </code>
    </div>

    <!-- Quick links -->
    <div class="mt-12">
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Or check out these pages:</p>
      <div class="flex flex-wrap justify-center gap-3">
        {#each ['About', 'Projects', 'Blog', 'Contact'] as link}
          <a
            href="/{link.toLowerCase()}"
            class="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
          >
            {link}
          </a>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes gradient {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
  }
</style>
