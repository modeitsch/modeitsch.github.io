<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  onMount(async () => {
    if (!browser) return;
    
    const { gsap } = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    
    gsap.registerPlugin(ScrollTrigger);

    // Wait for DOM to be fully rendered
    await new Promise(resolve => setTimeout(resolve, 100));

    // Animate hero text (with existence check)
    const heroTitles = document.querySelectorAll('.hero-title');
    if (heroTitles.length > 0) {
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.2
      });
    }

    const heroSubtitles = document.querySelectorAll('.hero-subtitle');
    if (heroSubtitles.length > 0) {
      gsap.from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
      });
    }

    const heroButtons = document.querySelectorAll('.hero-buttons');
    if (heroButtons.length > 0) {
      gsap.from('.hero-buttons', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: 'power3.out'
      });
    }

    // Animate stats (with existence check)
    const statItems = document.querySelectorAll('.stat-item');
    if (statItems.length > 0) {
      gsap.from('.stat-item', {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: 1,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      });
    }

    // Scroll-triggered animations for sections
    gsap.utils.toArray('.section-title').forEach(title => {
      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    });

    // Animate cards on scroll
    gsap.utils.toArray('.animate-card').forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse'
        },
        y: 80,
        opacity: 0,
        rotation: 5,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out'
      });
    });

    // Parallax effect for hero section (with existence check)
    const heroBg = document.querySelector('.hero-bg');
    const heroSection = document.querySelector('.hero-section');
    if (heroBg && heroSection) {
      gsap.to('.hero-bg', {
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        },
        y: 150,
        ease: 'none'
      });
    }

    // Text reveal animation
    const splitText = document.querySelectorAll('.reveal-text');
    splitText.forEach(text => {
      const chars = text.textContent.split('');
      text.innerHTML = chars.map(char => 
        `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`
      ).join('');
      
      gsap.from(text.querySelectorAll('.char'), {
        scrollTrigger: {
          trigger: text,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 20,
        rotationX: -90,
        stagger: 0.02,
        duration: 0.5,
        ease: 'power2.out'
      });
    });

    // Floating animation for profile image
    gsap.to('.profile-image', {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    // Skill bars animation
    gsap.utils.toArray('.skill-bar').forEach(bar => {
      gsap.from(bar, {
        scrollTrigger: {
          trigger: bar,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        width: 0,
        duration: 1.5,
        ease: 'power3.out'
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  });
</script>

<!-- This component only contains JavaScript logic, no template or styles needed -->