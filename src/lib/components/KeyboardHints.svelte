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
    class="fixed bottom-4 right-4 z-40 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-mono opacity-50 hover:opacity-100 transition-opacity duration-300 border border-gray-200 dark:border-gray-700"
    on:click={() => showHints = !showHints}
    aria-label="Toggle keyboard shortcuts"
  >
    <span class="kbd">?</span> shortcuts
  </button>

  <!-- Initial hint popup -->
  {#if visible && !showHints}
    <div
      class="fixed bottom-16 right-4 z-40 px-4 py-2 rounded-lg bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm shadow-lg animate-fade-in"
      role="tooltip"
    >
      Press <span class="kbd kbd-dark">?</span> for keyboard shortcuts
    </div>
  {/if}

  <!-- Full shortcuts panel -->
  {#if showHints}
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in"
      on:click={() => showHints = false}
      on:keydown={(e) => e.key === 'Escape' && (showHints = false)}
      role="dialog"
      aria-modal="true"
      aria-label="Keyboard shortcuts"
      tabindex="-1"
    >
      <div
        class="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 max-w-md mx-4 border border-gray-200 dark:border-gray-700"
        on:click|stopPropagation
        on:keydown|stopPropagation
        role="document"
      >
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Keyboard Shortcuts</h2>
          <button
            class="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            on:click={() => showHints = false}
            aria-label="Close"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="space-y-3">
          <div class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Navigation</div>
          {#each shortcuts as shortcut}
            <div class="flex items-center justify-between py-1">
              <span class="text-gray-600 dark:text-gray-300">{shortcut.description}</span>
              <span class="kbd">{shortcut.key}</span>
            </div>
          {/each}
          <div class="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3">
            <div class="flex items-center justify-between py-1">
              <span class="text-gray-600 dark:text-gray-300">Close this panel</span>
              <span class="kbd">Esc</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
{/if}

<style>
  .kbd {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 1.5rem;
    padding: 0.125rem 0.375rem;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.75rem;
    font-weight: 500;
    background: linear-gradient(180deg, #f3f4f6 0%, #e5e7eb 100%);
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5);
    color: #374151;
  }

  :global(html.dark) .kbd {
    background: linear-gradient(180deg, #374151 0%, #1f2937 100%);
    border-color: #4b5563;
    color: #e5e7eb;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  .kbd-dark {
    background: linear-gradient(180deg, #374151 0%, #1f2937 100%);
    border-color: #4b5563;
    color: #e5e7eb;
  }

  :global(html.dark) .kbd-dark {
    background: linear-gradient(180deg, #f3f4f6 0%, #e5e7eb 100%);
    border-color: #d1d5db;
    color: #374151;
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

  .animate-fade-in {
    animation: fade-in 0.2s ease-out;
  }
</style>
