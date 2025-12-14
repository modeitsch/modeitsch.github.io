<script>
  export let size = 'medium'; // 'small', 'medium', 'large'
  export let message = 'Loading...';
</script>

<div class="loading-container" aria-live="polite" role="status">
  <div class="spinner {size}">
    <div class="spinner-ring"></div>
    <div class="spinner-ring"></div>
    <div class="spinner-ring"></div>
  </div>
  {#if message}
    <p class="loading-message">{message}</p>
  {/if}
</div>

<style>
  .loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .spinner {
    position: relative;
    display: inline-block;
  }

  .spinner.small {
    width: 24px;
    height: 24px;
  }

  .spinner.medium {
    width: 40px;
    height: 40px;
  }

  .spinner.large {
    width: 64px;
    height: 64px;
  }

  .spinner-ring {
    position: absolute;
    inset: 0;
    border: 2px solid transparent;
    border-top: 2px solid var(--color-accent);
    border-radius: 50%;
    animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }

  .spinner-ring:nth-child(1) {
    animation-delay: -0.45s;
  }

  .spinner-ring:nth-child(2) {
    animation-delay: -0.3s;
  }

  .spinner-ring:nth-child(3) {
    animation-delay: -0.15s;
  }

  .loading-message {
    font-size: 0.875rem;
    color: var(--color-text-muted);
    text-align: center;
    margin: 0;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .spinner-ring {
      animation: none !important;
      border: 2px solid var(--color-accent);
      border-radius: 50%;
    }
  }
</style>
