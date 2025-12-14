<script>
  import { onMount } from 'svelte';

  export let src;
  export let alt = '';
  export let className = '';

  let loaded = false;
  let error = false;
  let imgElement;

  onMount(() => {
    if (imgElement && imgElement.complete) {
      loaded = true;
    }
  });

  function handleLoad() {
    loaded = true;
  }

  function handleError() {
    error = true;
  }
</script>

<div class="lazy-image-wrapper {className}">
  {#if !loaded && !error}
    <div class="loading-placeholder">
      <div class="loading-spinner"></div>
    </div>
  {/if}

  {#if error}
    <div class="error-placeholder">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
        <polyline points="21 15 16 10 5 21"></polyline>
      </svg>
      <span>Image unavailable</span>
    </div>
  {:else}
    <img
      bind:this={imgElement}
      {src}
      {alt}
      class:loaded
      on:load={handleLoad}
      on:error={handleError}
      loading="lazy"
    />
  {/if}
</div>

<style>
  .lazy-image-wrapper {
    position: relative;
    overflow: hidden;
  }

  .loading-placeholder,
  .error-placeholder {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--color-background-secondary);
    gap: 0.5rem;
  }

  .loading-spinner {
    width: 32px;
    height: 32px;
    border: 3px solid var(--color-border);
    border-top-color: var(--color-accent);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .error-placeholder {
    color: var(--color-text-muted);
    font-size: 0.875rem;
  }

  .error-placeholder svg {
    opacity: 0.5;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  img.loaded {
    opacity: 1;
  }

  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .loading-spinner {
      animation: none;
    }
    img {
      transition: none;
    }
  }
</style>
