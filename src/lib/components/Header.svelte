<script>
  import { page } from '$app/stores';
  import ThemePicker from './ThemePicker.svelte';
  import { playHoverSound, playClickSound } from '../stores/sound.js';
  import { Menu, X, Home, User, Briefcase, Mail, BookOpen } from 'lucide-svelte';

  let mobileMenuOpen = false;
  $: currentPath = $page.url.pathname;

  function toggleMobileMenu() {
    playClickSound();
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
  }
</script>

<header class="header">
  <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-20">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <a href="/" class="logo">
          MD
        </a>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:block">
        <div class="ml-10 flex items-center space-x-10">
          <a
            href="/"
            on:mouseenter={playHoverSound}
            class="nav-link"
            class:active={currentPath === '/'}
          >
            <Home size={16} />
            <span>Home</span>
          </a>
          <a
            href="/about"
            on:mouseenter={playHoverSound}
            class="nav-link"
            class:active={currentPath === '/about'}
          >
            <User size={16} />
            <span>About</span>
          </a>
          <a
            href="/projects"
            on:mouseenter={playHoverSound}
            class="nav-link"
            class:active={currentPath === '/projects'}
          >
            <Briefcase size={16} />
            <span>Projects</span>
          </a>
          <a
            href="/blog"
            on:mouseenter={playHoverSound}
            class="nav-link"
            class:active={currentPath.startsWith('/blog')}
          >
            <BookOpen size={16} />
            <span>Blog</span>
          </a>
          <a
            href="/contact"
            on:mouseenter={playHoverSound}
            class="nav-link"
            class:active={currentPath === '/contact'}
          >
            <Mail size={16} />
            <span>Contact</span>
          </a>
        </div>
      </div>

      <!-- Theme picker and mobile menu button -->
      <div class="flex items-center space-x-3">
        <ThemePicker />

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            on:click={toggleMobileMenu}
            on:mouseenter={playHoverSound}
            class="mobile-menu-btn"
            aria-label="Toggle mobile menu"
          >
            {#if mobileMenuOpen}
              <X size={20} />
            {:else}
              <Menu size={20} />
            {/if}
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    {#if mobileMenuOpen}
      <div class="md:hidden mobile-nav">
        <a
          href="/"
          class="mobile-link"
          class:active={currentPath === '/'}
          on:click={closeMobileMenu}
        >
          <Home size={18} />
          <span>Home</span>
        </a>
        <a
          href="/about"
          class="mobile-link"
          class:active={currentPath === '/about'}
          on:click={closeMobileMenu}
        >
          <User size={18} />
          <span>About</span>
        </a>
        <a
          href="/projects"
          class="mobile-link"
          class:active={currentPath === '/projects'}
          on:click={closeMobileMenu}
        >
          <Briefcase size={18} />
          <span>Projects</span>
        </a>
        <a
          href="/blog"
          class="mobile-link"
          class:active={currentPath.startsWith('/blog')}
          on:click={closeMobileMenu}
        >
          <BookOpen size={18} />
          <span>Blog</span>
        </a>
        <a
          href="/contact"
          class="mobile-link"
          class:active={currentPath === '/contact'}
          on:click={closeMobileMenu}
        >
          <Mail size={18} />
          <span>Contact</span>
        </a>
      </div>
    {/if}
  </nav>
</header>

<style>
  .header {
    position: sticky;
    top: 0;
    z-index: 50;
    background-color: var(--color-surface);
    border-bottom: 1px solid var(--color-border);
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-accent);
    text-decoration: none;
    font-family: var(--font-heading);
    letter-spacing: -0.025em;
  }

  .logo:hover {
    color: var(--color-accent-hover);
  }

  .nav-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-text-secondary);
    text-decoration: none;
    padding: 0.5rem 0;
    border-bottom: 2px solid transparent;
    transition: color 150ms ease, border-color 150ms ease;
  }

  .nav-link:hover {
    color: var(--color-accent);
  }

  .nav-link.active {
    color: var(--color-accent);
    border-bottom-color: var(--color-accent);
  }

  .mobile-menu-btn {
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

  .mobile-menu-btn:hover {
    border-color: var(--color-border-hover);
    background: var(--color-background-secondary);
  }

  .mobile-nav {
    padding: 1rem 0;
    border-top: 1px solid var(--color-border);
  }

  .mobile-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.875rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-text-secondary);
    text-decoration: none;
    border-radius: 0.5rem;
    transition: all 150ms ease;
  }

  .mobile-link:hover {
    background-color: var(--color-background-secondary);
    color: var(--color-accent);
  }

  .mobile-link.active {
    background-color: var(--color-background-secondary);
    color: var(--color-accent);
  }
</style>
