<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  let progressBar;

  onMount(async () => {
    if (!browser) return;
    
    const { gsap } = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(progressBar, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  });
</script>

<div bind:this={progressBar} class="scroll-progress" style="transform: scaleX(0);"></div>