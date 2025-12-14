<script>
  import { Search, X } from 'lucide-svelte';
  import { createEventDispatcher } from 'svelte';

  export let posts = [];
  export let searchQuery = '';

  const dispatch = createEventDispatcher();

  let inputElement;
  let isFocused = false;

  $: filteredPosts = searchQuery.trim()
    ? posts.filter(post => {
        const query = searchQuery.toLowerCase();
        return (
          post.title.toLowerCase().includes(query) ||
          post.preview.toLowerCase().includes(query) ||
          (post.tags && post.tags.some(tag => tag.toLowerCase().includes(query)))
        );
      })
    : posts;

  $: {
    dispatch('filter', { filteredPosts, searchQuery });
  }

  function clearSearch() {
    searchQuery = '';
    inputElement?.focus();
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      clearSearch();
    }
  }
</script>

<div class="blog-search" class:focused={isFocused}>
  <div class="search-icon" aria-hidden="true">
    <Search size={20} />
  </div>
  <input
    bind:this={inputElement}
    bind:value={searchQuery}
    on:focus={() => isFocused = true}
    on:blur={() => isFocused = false}
    on:keydown={handleKeydown}
    type="text"
    placeholder="Search posts..."
    aria-label="Search blog posts"
    class="search-input"
  />
  {#if searchQuery}
    <button
      class="clear-button"
      on:click={clearSearch}
      aria-label="Clear search"
    >
      <X size={18} />
    </button>
  {/if}
</div>

{#if searchQuery && filteredPosts.length === 0}
  <div class="no-results">
    <p>No posts found matching "<strong>{searchQuery}</strong>"</p>
    <button on:click={clearSearch} class="clear-link">Clear search</button>
  </div>
{:else if searchQuery}
  <p class="results-count">
    Found {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
  </p>
{/if}

<style>
  .blog-search {
    position: relative;
    display: flex;
    align-items: center;
    background: #f3f4f6;
    border: 2px solid transparent;
    border-radius: 12px;
    transition: all 0.2s ease;
  }

  :global(html.dark) .blog-search {
    background: #374151;
  }

  .blog-search.focused {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  :global(html.dark) .blog-search.focused {
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
  }

  .search-icon {
    position: absolute;
    left: 1rem;
    color: #6b7280;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  :global(html.dark) .search-icon {
    color: #9ca3af;
  }

  .search-input {
    width: 100%;
    padding: 0.875rem 2.5rem 0.875rem 3rem;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1rem;
    color: #1f2937;
  }

  :global(html.dark) .search-input {
    color: #f9fafb;
  }

  .search-input::placeholder {
    color: #9ca3af;
  }

  :global(html.dark) .search-input::placeholder {
    color: #6b7280;
  }

  .clear-button {
    position: absolute;
    right: 0.75rem;
    padding: 0.25rem;
    background: transparent;
    border: none;
    border-radius: 50%;
    color: #6b7280;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  }

  .clear-button:hover {
    background: rgba(0, 0, 0, 0.05);
    color: #374151;
  }

  :global(html.dark) .clear-button:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #e5e7eb;
  }

  .no-results {
    text-align: center;
    padding: 3rem 1rem;
    color: #6b7280;
  }

  :global(html.dark) .no-results {
    color: #9ca3af;
  }

  .no-results strong {
    color: #374151;
  }

  :global(html.dark) .no-results strong {
    color: #e5e7eb;
  }

  .clear-link {
    margin-top: 1rem;
    background: transparent;
    border: none;
    color: #2563eb;
    cursor: pointer;
    font-size: 0.875rem;
    text-decoration: underline;
  }

  .clear-link:hover {
    text-decoration: none;
  }

  .results-count {
    margin-top: 0.75rem;
    font-size: 0.875rem;
    color: #6b7280;
  }

  :global(html.dark) .results-count {
    color: #9ca3af;
  }
</style>
