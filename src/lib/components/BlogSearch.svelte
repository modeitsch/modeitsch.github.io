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
    background: var(--color-background-secondary);
    border: 2px solid transparent;
    border-radius: 0.75rem;
    transition: all 150ms ease;
  }

  .blog-search.focused {
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px rgba(var(--color-shadow, 0, 0, 0), 0.1);
  }

  .search-icon {
    position: absolute;
    left: 1rem;
    color: var(--color-text-muted);
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .search-input {
    width: 100%;
    padding: 0.875rem 2.5rem 0.875rem 3rem;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1rem;
    font-family: var(--font-body);
    color: var(--color-text-primary);
  }

  .search-input::placeholder {
    color: var(--color-text-muted);
  }

  .clear-button {
    position: absolute;
    right: 0.75rem;
    padding: 0.25rem;
    background: transparent;
    border: none;
    border-radius: 50%;
    color: var(--color-text-muted);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 150ms ease;
  }

  .clear-button:hover {
    background: var(--color-surface);
    color: var(--color-text-primary);
  }

  .no-results {
    text-align: center;
    padding: 3rem 1rem;
    color: var(--color-text-muted);
  }

  .no-results strong {
    color: var(--color-text-primary);
  }

  .clear-link {
    margin-top: 1rem;
    background: transparent;
    border: none;
    color: var(--color-accent);
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
    color: var(--color-text-muted);
  }
</style>
