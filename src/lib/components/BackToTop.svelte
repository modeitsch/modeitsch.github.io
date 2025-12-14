<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { ArrowUp } from 'lucide-svelte';

  let isVisible = false;
  let scrollProgress = 0;

  onMount(() => {
    if (!browser) return;

    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      isVisible = scrollTop > 400;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
</script>

{#if isVisible}
  <button
    on:click={scrollToTop}
    class="back-to-top"
    aria-label="Scroll to top"
    title="Back to top"
  >
    <svg class="progress-ring" viewBox="0 0 36 36">
      <circle
        class="progress-ring-bg"
        cx="18"
        cy="18"
        r="16"
        fill="none"
        stroke-width="2"
      />
      <circle
        class="progress-ring-circle"
        cx="18"
        cy="18"
        r="16"
        fill="none"
        stroke-width="2"
        stroke-dasharray="100"
        stroke-dashoffset={100 - scrollProgress}
        transform="rotate(-90 18 18)"
      />
    </svg>
    <span class="arrow-icon">
      <ArrowUp size={20} />
    </span>
  </button>
{/if}

<style>
  .back-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, #2563eb, #7c3aed);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
    box-shadow: 0 4px 20px rgba(37, 99, 235, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    animation: slideUp 0.3s ease-out;
  }

  .back-to-top:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(37, 99, 235, 0.4);
  }

  .back-to-top:active {
    transform: translateY(-1px);
  }

  .progress-ring {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .progress-ring-bg {
    stroke: rgba(255, 255, 255, 0.2);
  }

  .progress-ring-circle {
    stroke: white;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.1s ease;
  }

  .arrow-icon {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .back-to-top {
      animation: none;
    }
    .back-to-top:hover {
      transform: none;
    }
  }
</style>
