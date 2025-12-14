<script>
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import KeyboardHints from '$lib/components/KeyboardHints.svelte';
  import KonamiCode from '$lib/components/KonamiCode.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import PageTransition from '$lib/components/PageTransition.svelte';
  import BackToTop from '$lib/components/BackToTop.svelte';
  import { onMount } from 'svelte';
  import { initAudio } from '$lib/stores/sound.js';

  onMount(() => {
    // Initialize audio on first user interaction
    const handleInteraction = () => {
      initAudio();
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
    document.addEventListener('click', handleInteraction, { once: true });
    document.addEventListener('keydown', handleInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  });
</script>

<!-- SEO -->
<SEO />

<div class="min-h-screen flex flex-col bg-background">
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <Header />
  <main id="main-content" class="flex-1">
    <PageTransition>
      <slot />
    </PageTransition>
  </main>
  <Footer />
  <KeyboardHints />
  <KonamiCode />
  <BackToTop />
</div>
