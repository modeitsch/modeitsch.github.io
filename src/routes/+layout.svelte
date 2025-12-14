<script>
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import KeyboardHints from '$lib/components/KeyboardHints.svelte';
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/theme.js';
  import { initAudio } from '$lib/stores/sound.js';

  onMount(() => {
    // Initialize theme on mount
    const unsubscribe = theme.subscribe((value) => {
      if (value === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    });

    // Initialize audio on first user interaction
    const handleInteraction = () => {
      initAudio();
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
    document.addEventListener('click', handleInteraction, { once: true });
    document.addEventListener('keydown', handleInteraction, { once: true });

    return () => {
      unsubscribe();
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  });
</script>

<div class="min-h-screen flex flex-col">
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <Header />
  <main id="main-content" class="flex-1">
    <slot />
  </main>
  <Footer />
  <KeyboardHints />
</div>