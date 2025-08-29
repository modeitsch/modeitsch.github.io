<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  
  export let skill;
  export let index = 0;

  let cardElement;

  onMount(() => {
    if (!browser || !cardElement) return;
    
    if (cardElement) {
      const card = cardElement;
      
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
      card.addEventListener('mouseenter', handleMouseEnter);
    }

    return () => {
      if (cardElement) {
        cardElement.removeEventListener('mousemove', handleMouseMove);
        cardElement.removeEventListener('mouseleave', handleMouseLeave);
        cardElement.removeEventListener('mouseenter', handleMouseEnter);
      }
    };
  });

  function handleMouseMove(e) {
    const rect = cardElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    cardElement.style.transform = `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      translateZ(50px)
      scale3d(1.05, 1.05, 1.05)
    `;
    
    // Update shine effect
    const shine = cardElement.querySelector('.shine');
    if (shine) {
      const shineX = (x / rect.width) * 100;
      const shineY = (y / rect.height) * 100;
      shine.style.background = `
        radial-gradient(circle at ${shineX}% ${shineY}%, 
        rgba(255,255,255,0.3) 0%, 
        rgba(255,255,255,0.1) 50%, 
        transparent 70%)
      `;
    }
  }

  function handleMouseLeave() {
    cardElement.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)';
    cardElement.style.transition = 'transform 0.5s ease';
    
    const shine = cardElement.querySelector('.shine');
    if (shine) {
      shine.style.background = 'transparent';
    }
  }

  function handleMouseEnter() {
    cardElement.style.transition = 'none';
  }
</script>

<div 
  bind:this={cardElement}
  class="skill-card-3d animate-card group"
  style="animation-delay: {index * 200}ms;"
>
  <div class="shine"></div>
  <div class="card-content">
    <div class="icon-container">
      <div class="icon-bg"></div>
      <svelte:component this={skill.icon} size={32} class="skill-icon" />
    </div>
    <h3 class="skill-title">{skill.title}</h3>
    <p class="skill-description">{skill.description}</p>
  </div>
</div>

<style>
  .skill-card-3d {
    position: relative;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 2rem;
    text-align: center;
    transform-style: preserve-3d;
    transition: transform 0.1s ease;
    overflow: hidden;
    cursor: pointer;
  }

  :global(html.dark) .skill-card-3d {
    background: rgba(31, 41, 55, 0.8);
    border: 1px solid rgba(55, 65, 81, 0.5);
  }

  .shine {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    border-radius: 20px;
    transition: background 0.3s ease;
  }

  .card-content {
    position: relative;
    z-index: 1;
  }

  .icon-container {
    position: relative;
    margin-bottom: 1.5rem;
  }

  .icon-bg {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, rgb(37, 99, 235), rgb(147, 51, 234));
    border-radius: 20px;
    margin: 0 auto 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    transform: translateZ(30px);
  }

  .icon-bg::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  .skill-card-3d:hover .icon-bg::before {
    transform: translateX(100%);
  }

  :global(.skill-icon) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) translateZ(10px);
    color: white;
    z-index: 2;
  }

  .skill-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: rgb(17, 24, 39);
    margin-bottom: 1rem;
    transform: translateZ(20px);
    transition: color 0.3s ease;
  }

  :global(html.dark) .skill-title {
    color: rgb(243, 244, 246);
  }

  .skill-card-3d:hover .skill-title {
    color: rgb(37, 99, 235);
  }

  :global(html.dark) .skill-card-3d:hover .skill-title {
    color: rgb(96, 165, 250);
  }

  .skill-description {
    color: rgb(107, 114, 128);
    line-height: 1.6;
    transform: translateZ(10px);
  }

  :global(html.dark) .skill-description {
    color: rgb(156, 163, 175);
  }

  @keyframes cardEnter {
    from {
      opacity: 0;
      transform: translateY(50px) rotateX(-15deg);
    }
    to {
      opacity: 1;
      transform: translateY(0) rotateX(0deg);
    }
  }

  .skill-card-3d {
    animation: cardEnter 0.8s ease forwards;
    opacity: 0;
  }
</style>