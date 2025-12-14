<script>
  import { theme, THEMES, setTheme, currentTheme } from '$lib/stores/theme.js';
  import { Sun, SunMoon, Terminal, Moon, Check } from 'lucide-svelte';

  let isOpen = false;
  let pickerRef;

  const themeIcons = {
    'clean-modern': Sun,
    'clean-modern-dark': SunMoon,
    'retro-terminal': Terminal,
    'midnight': Moon
  };

  function handleClickOutside(event) {
    if (pickerRef && !pickerRef.contains(event.target)) {
      isOpen = false;
    }
  }

  function selectTheme(themeKey) {
    setTheme(themeKey);
    isOpen = false;
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      isOpen = false;
    }
  }
</script>

<svelte:window on:click={handleClickOutside} on:keydown={handleKeydown} />

<div bind:this={pickerRef} class="theme-picker">
  <button
    on:click={() => isOpen = !isOpen}
    class="theme-trigger"
    aria-label="Choose theme"
    aria-expanded={isOpen}
    aria-haspopup="listbox"
  >
    <svelte:component this={themeIcons[$theme]} size={20} />
  </button>

  {#if isOpen}
    <div
      class="theme-dropdown"
      role="listbox"
      aria-label="Available themes"
    >
      {#each Object.entries(THEMES) as [key, config]}
        <button
          role="option"
          aria-selected={$theme === key}
          on:click={() => selectTheme(key)}
          class="theme-option"
          class:active={$theme === key}
        >
          <div
            class="theme-preview"
            style="--preview-bg: {config.colors.background}; --preview-accent: {config.colors.accent}; --preview-text: {config.colors.textPrimary}"
          >
            <svelte:component this={themeIcons[key]} size={16} style="color: {config.colors.textPrimary}" />
          </div>
          <div class="theme-info">
            <span class="theme-name">{config.name}</span>
            <span class="theme-desc">{config.description}</span>
          </div>
          {#if $theme === key}
            <Check size={16} class="check-icon" />
          {/if}
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  .theme-picker {
    position: relative;
  }

  .theme-trigger {
    padding: 0.625rem;
    border-radius: 0.5rem;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    color: var(--color-text-primary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 150ms ease;
  }

  .theme-trigger:hover {
    border-color: var(--color-border-hover);
    background: var(--color-background-secondary);
  }

  .theme-dropdown {
    position: absolute;
    top: calc(100% + 0.5rem);
    right: 0;
    width: 260px;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 0.75rem;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    z-index: 100;
  }

  .theme-option {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.875rem 1rem;
    background: transparent;
    border: none;
    cursor: pointer;
    text-align: left;
    transition: background 150ms ease;
    color: var(--color-text-primary);
  }

  .theme-option:hover {
    background: var(--color-background-secondary);
  }

  .theme-option.active {
    background: var(--color-background-secondary);
  }

  .theme-preview {
    width: 36px;
    height: 36px;
    border-radius: 0.5rem;
    background: var(--preview-bg);
    border: 2px solid var(--preview-accent);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .theme-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .theme-name {
    font-weight: 600;
    color: var(--color-text-primary);
    font-size: 0.875rem;
  }

  .theme-desc {
    color: var(--color-text-secondary);
    font-size: 0.75rem;
  }

</style>
