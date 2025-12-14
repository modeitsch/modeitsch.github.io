<script>
  import { ExternalLink as ExternalLinkIcon } from 'lucide-svelte';

  export let href;
  export let className = '';

  let isLoading = false;

  function handleClick() {
    isLoading = true;
    // Reset after navigation starts
    setTimeout(() => {
      isLoading = false;
    }, 2000);
  }
</script>

<a
  {href}
  target="_blank"
  rel="noopener noreferrer"
  class="external-link {className}"
  class:loading={isLoading}
  on:click={handleClick}
>
  <slot />
  <span class="link-icon" aria-hidden="true">
    {#if isLoading}
      <span class="loading-spinner"></span>
    {:else}
      <ExternalLinkIcon size={14} />
    {/if}
  </span>
</a>

<style>
  .external-link {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    transition: opacity 0.2s ease;
  }

  .external-link.loading {
    opacity: 0.7;
    pointer-events: none;
  }

  .link-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    opacity: 0.7;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  .external-link:hover .link-icon {
    opacity: 1;
    transform: translateX(2px) translateY(-2px);
  }

  .loading-spinner {
    display: inline-block;
    width: 14px;
    height: 14px;
    border: 2px solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .loading-spinner {
      animation: none;
    }
    .external-link:hover .link-icon {
      transform: none;
    }
  }
</style>
