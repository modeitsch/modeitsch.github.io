<script>
  import { page } from '$app/stores';
  import { fade, fly } from 'svelte/transition';

  export let duration = 300;
</script>

{#key $page.url.pathname}
  <div
    in:fly={{ y: 20, duration, delay: duration }}
    out:fade={{ duration }}
  >
    <slot />
  </div>
{/key}

<style>
  div {
    display: contents;
  }
</style>
