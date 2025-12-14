<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';

  let visible = false;
  let showHints = false;
  let isMobile = false;

  const shortcuts = [
    { key: 'H', description: 'Home', action: () => goto('/') },
    { key: 'A', description: 'About', action: () => goto('/about') },
    { key: 'P', description: 'Projects', action: () => goto('/projects') },
    { key: 'B', description: 'Blog', action: () => goto('/blog') },
    { key: 'C', description: 'Contact', action: () => goto('/contact') },
    { key: '?', description: 'Toggle hints', action: () => showHints = !showHints }
  ];

  onMount(() => {
    if (!browser) return;

    // Check if mobile
    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) return;

    // Show hints briefly on first visit
    const hasSeenHints = localStorage.getItem('keyboard-hints-seen');
    if (!hasSeenHints) {
      setTimeout(() => {
        visible = true;
        setTimeout(() => {
          visible = false;
          localStorage.setItem('keyboard-hints-seen', 'true');
        }, 5000);
      }, 3000);
    }

    // Handle keyboard shortcuts
    function handleKeydown(e) {
      // Don't trigger if typing in input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      const key = e.key.toUpperCase();

      // Toggle hints with ?
      if (e.key === '?') {
        e.preventDefault();
        showHints = !showHints;
        return;
      }

      // Navigation shortcuts (only when not holding modifier keys)
      if (!e.ctrlKey && !e.metaKey && !e.altKey) {
        const shortcut = shortcuts.find(s => s.key === key);
        if (shortcut && shortcut.key !== '?') {
          e.preventDefault();
          shortcut.action();
        }
      }
    }

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  });
</script>

{#if !isMobile}
  <!-- Hint indicator (bottom right) -->
  <button
    class="hint-button"
    on:click={() => showHints = !showHints}
    aria-label="Toggle keyboard shortcuts"
  >
    <span class="kbd">?</span> shortcuts
  </button>

  <!-- Initial hint popup -->
  {#if visible && !showHints}
    <div class="hint-popup" role="tooltip">
      Press <span class="kbd">?</span> for keyboard shortcuts
    </div>
  {/if}

  <!-- Full shortcuts panel -->
  {#if showHints}
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div
      class="modal-overlay"
      on:click={() => showHints = false}
      on:keydown={(e) => e.key === 'Escape' && (showHints = false)}
      role="dialog"
      aria-modal="true"
      aria-label="Keyboard shortcuts"
      tabindex="-1"
    >
      <div
        class="modal-content"
        on:click|stopPropagation
        on:keydown|stopPropagation
        role="document"
      >
        <div class="modal-header">
          <h2 class="modal-title">Keyboard Shortcuts</h2>
          <button
            class="close-button"
            on:click={() => showHints = false}
            aria-label="Close"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="shortcuts-list">
          <div class="shortcuts-label">Navigation</div>
          {#each shortcuts as shortcut}
            <div class="shortcut-item">
              <span class="shortcut-desc">{shortcut.description}</span>
              <span class="kbd">{shortcut.key}</span>
            </div>
          {/each}
          <div class="shortcuts-divider"></div>
          <div class="shortcut-item">
            <span class="shortcut-desc">Close this panel</span>
            <span class="kbd">Esc</span>
          </div>
        </div>
      </div>
    </div>
  {/if}
{/if}

<style>
  .hint-button {
    position: fixed;
    bottom: 1rem;
    right: 5rem;
    z-index: 40;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    color: var(--color-text-muted);
    font-size: 0.75rem;
    font-family: var(--font-mono);
    opacity: 0.6;
    cursor: pointer;
    transition: opacity 150ms ease, border-color 150ms ease;
  }

  .hint-button:hover {
    opacity: 1;
    border-color: var(--color-border-hover);
  }

  .hint-popup {
    position: fixed;
    bottom: 4rem;
    right: 1rem;
    z-index: 40;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    background: var(--color-surface-elevated);
    border: 1px solid var(--color-border);
    color: var(--color-text-primary);
    font-size: 0.875rem;
    box-shadow: 0 4px 20px rgba(var(--color-shadow, 0, 0, 0), 0.15);
    animation: fade-in 0.2s ease-out;
  }

  .modal-overlay {
    position: fixed;
    inset: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    animation: fade-in 0.2s ease-out;
  }

  .modal-content {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 1rem;
    padding: 1.5rem;
    max-width: 24rem;
    margin: 1rem;
    box-shadow: 0 25px 50px rgba(var(--color-shadow, 0, 0, 0), 0.25);
  }

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .modal-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--color-text-primary);
    font-family: var(--font-heading);
  }

  .close-button {
    padding: 0.25rem;
    color: var(--color-text-muted);
    background: none;
    border: none;
    cursor: pointer;
    transition: color 150ms ease;
  }

  .close-button:hover {
    color: var(--color-text-primary);
  }

  .shortcuts-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .shortcuts-label {
    font-size: 0.75rem;
    color: var(--color-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.5rem;
  }

  .shortcut-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.25rem 0;
  }

  .shortcut-desc {
    color: var(--color-text-secondary);
    font-size: 0.875rem;
  }

  .shortcuts-divider {
    height: 1px;
    background: var(--color-border);
    margin: 0.75rem 0;
  }

  .kbd {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 1.5rem;
    padding: 0.125rem 0.5rem;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 500;
    background: var(--color-background-secondary);
    border: 1px solid var(--color-border);
    border-radius: 0.25rem;
    color: var(--color-text-secondary);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
