<script>
  import { page } from '$app/stores';
  import { fade, fly } from 'svelte/transition';

  let { duration = 300, children } = $props();
</script>

{#key $page.url.pathname}
  <div
    in:fly={{ y: 20, duration, delay: duration }}
    out:fade={{ duration }}
  >
    {@render children()}
  </div>
{/key}

<style>
  div {
    display: contents;
  }
</style>
