<script>
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/theme.js';

  onMount(() => {
    // Initialize theme on mount
    const unsubscribe = theme.subscribe((value) => {
      if (value === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    });

    return unsubscribe;
  });
</script>

<div class="min-h-screen flex flex-col">
  <Header />
  <main class="flex-1">
    <slot />
  </main>
  <Footer />
</div>