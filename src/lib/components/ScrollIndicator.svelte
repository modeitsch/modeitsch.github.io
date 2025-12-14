<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  let visible = true;
  let attention = true;
  let hasScrolled = false;

  onMount(() => {
    if (!browser) return;

    // Remove attention-grabbing animation after 5 seconds regardless
    const attentionTimeout = setTimeout(() => {
      attention = false;
    }, 5000);

    // Handle scroll - fade out on first scroll
    function handleScroll() {
      if (!hasScrolled && window.scrollY > 50) {
        hasScrolled = true;
        attention = false;

        // Fade out after first scroll
        setTimeout(() => {
          visible = false;
        }, 300);
      } else if (window.scrollY <= 50 && hasScrolled) {
        // Show again when back at top
        visible = true;
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(attentionTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

{#if visible}
  <div
    class="scroll-indicator"
    class:attention
    class:fading={hasScrolled}
    aria-hidden="true"
  >
    <div class="scroll-mouse">
      <div class="scroll-wheel"></div>
    </div>
    <div class="scroll-arrows">
      <span class="arrow"></span>
      <span class="arrow"></span>
      <span class="arrow"></span>
    </div>
    {#if attention}
      <span class="scroll-text">Scroll to explore</span>
    {/if}
  </div>
{/if}

<style>
  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    transition: opacity 0.3s ease, transform 0.3s ease;
    z-index: 10;
  }

  .scroll-indicator.fading {
    opacity: 0;
    transform: translateX(-50%) translateY(10px);
  }

  .scroll-mouse {
    width: 1.75rem;
    height: 2.75rem;
    border: 2px solid currentColor;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    color: #9ca3af;
    transition: all 0.3s ease;
  }

  :global(html.dark) .scroll-mouse {
    color: #6b7280;
  }

  .attention .scroll-mouse {
    color: #3b82f6;
    border-color: #3b82f6;
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(59, 130, 246, 0.2);
    animation: pulse-glow 2s ease-in-out infinite;
  }

  :global(html.dark) .attention .scroll-mouse {
    color: #60a5fa;
    border-color: #60a5fa;
    box-shadow: 0 0 20px rgba(96, 165, 250, 0.4), 0 0 40px rgba(96, 165, 250, 0.2);
  }

  .scroll-wheel {
    width: 0.25rem;
    height: 0.625rem;
    background: currentColor;
    border-radius: 0.25rem;
    margin-top: 0.5rem;
    animation: scroll-wheel 1.5s ease-in-out infinite;
  }

  .attention .scroll-wheel {
    background: #3b82f6;
  }

  :global(html.dark) .attention .scroll-wheel {
    background: #60a5fa;
  }

  .scroll-arrows {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.125rem;
  }

  .arrow {
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    border-right: 2px solid #9ca3af;
    border-bottom: 2px solid #9ca3af;
    transform: rotate(45deg);
    animation: scroll-arrows 1.5s ease-in-out infinite;
  }

  :global(html.dark) .arrow {
    border-color: #6b7280;
  }

  .attention .arrow {
    border-color: #3b82f6;
  }

  :global(html.dark) .attention .arrow {
    border-color: #60a5fa;
  }

  .arrow:nth-child(2) {
    animation-delay: 0.15s;
    opacity: 0.7;
  }

  .arrow:nth-child(3) {
    animation-delay: 0.3s;
    opacity: 0.4;
  }

  .scroll-text {
    font-size: 0.75rem;
    color: #3b82f6;
    font-weight: 500;
    margin-top: 0.5rem;
    animation: fade-pulse 2s ease-in-out infinite;
    white-space: nowrap;
  }

  :global(html.dark) .scroll-text {
    color: #60a5fa;
  }

  @keyframes scroll-wheel {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    50% {
      opacity: 0.5;
      transform: translateY(0.375rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes scroll-arrows {
    0% {
      opacity: 0;
      transform: rotate(45deg) translateY(-0.25rem);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) translateY(0.25rem);
    }
  }

  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(59, 130, 246, 0.2);
    }
    50% {
      box-shadow: 0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.3);
    }
  }

  @keyframes fade-pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.6;
    }
  }

  /* Respect reduced motion preference */
  @media (prefers-reduced-motion: reduce) {
    .scroll-wheel,
    .arrow,
    .scroll-text,
    .scroll-mouse {
      animation: none;
    }

    .scroll-indicator {
      transition: none;
    }
  }
</style>
