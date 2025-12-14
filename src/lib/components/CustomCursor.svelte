<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  let cursorX = 0;
  let cursorY = 0;
  let cursorDotX = 0;
  let cursorDotY = 0;
  let isHovering = false;
  let isClicking = false;
  let isVisible = false;
  let isMobile = true;

  onMount(() => {
    if (!browser) return;

    // Check if mobile/touch device
    isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isMobile) return;

    function handleMouseMove(e) {
      cursorX = e.clientX;
      cursorY = e.clientY;

      if (!isVisible) isVisible = true;
    }

    function handleMouseEnter(e) {
      const target = e.target;
      if (target.matches('a, button, [role="button"], input, textarea, select, .cursor-hover')) {
        isHovering = true;
      }
    }

    function handleMouseLeave(e) {
      const target = e.target;
      if (target.matches('a, button, [role="button"], input, textarea, select, .cursor-hover')) {
        isHovering = false;
      }
    }

    function handleMouseDown() {
      isClicking = true;
    }

    function handleMouseUp() {
      isClicking = false;
    }

    function handleMouseOut(e) {
      if (!e.relatedTarget) {
        isVisible = false;
      }
    }

    // Smooth cursor following with lerp
    function animate() {
      cursorDotX += (cursorX - cursorDotX) * 0.15;
      cursorDotY += (cursorY - cursorDotY) * 0.15;
      requestAnimationFrame(animate);
    }

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseout', handleMouseOut);

    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  });
</script>

<svelte:head>
  {#if !isMobile}
    <style>
      body {
        cursor: none !important;
      }
      a, button, [role="button"], input, textarea, select {
        cursor: none !important;
      }
    </style>
  {/if}
</svelte:head>

{#if !isMobile && isVisible}
  <!-- Outer ring (follows with delay) -->
  <div
    class="cursor-ring"
    class:hovering={isHovering}
    class:clicking={isClicking}
    style="transform: translate({cursorDotX - 20}px, {cursorDotY - 20}px)"
  ></div>

  <!-- Inner dot (follows cursor exactly) -->
  <div
    class="cursor-dot"
    class:hovering={isHovering}
    class:clicking={isClicking}
    style="transform: translate({cursorX - 4}px, {cursorY - 4}px)"
  ></div>
{/if}

<style>
  .cursor-ring {
    position: fixed;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    border: 2px solid rgba(37, 99, 235, 0.5);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: width 0.2s ease, height 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
    mix-blend-mode: difference;
  }

  .cursor-ring.hovering {
    width: 60px;
    height: 60px;
    transform: translate(-30px, -30px) !important;
    border-color: rgba(147, 51, 234, 0.8);
    background-color: rgba(147, 51, 234, 0.1);
  }

  .cursor-ring.clicking {
    width: 30px;
    height: 30px;
    border-color: rgba(236, 72, 153, 0.8);
  }

  .cursor-dot {
    position: fixed;
    top: 0;
    left: 0;
    width: 8px;
    height: 8px;
    background: linear-gradient(135deg, #2563eb, #7c3aed);
    border-radius: 50%;
    pointer-events: none;
    z-index: 10000;
    transition: width 0.15s ease, height 0.15s ease, opacity 0.15s ease;
  }

  .cursor-dot.hovering {
    width: 12px;
    height: 12px;
    transform: translate(-6px, -6px) !important;
    opacity: 0.8;
  }

  .cursor-dot.clicking {
    width: 6px;
    height: 6px;
    opacity: 1;
  }

  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .cursor-ring,
    .cursor-dot {
      display: none;
    }
  }
</style>
