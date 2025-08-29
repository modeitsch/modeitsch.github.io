<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { Github, ExternalLink, ArrowRight, Code } from 'lucide-svelte';
  
  export let project;
  export let index = 0;

  let cardElement;

  onMount(() => {
    if (!browser || !cardElement) return;
    
    if (typeof window !== 'undefined' && cardElement) {
      import('vanilla-tilt').then((VanillaTilt) => {
        VanillaTilt.default.init(cardElement, {
          max: 15,
          speed: 400,
          glare: true,
          'max-glare': 0.3,
          perspective: 1000,
          scale: 1.05,
          'gyroscope-min-angle-x': -45,
          'gyroscope-max-angle-x': 45,
          'gyroscope-min-angle-y': -45,
          'gyroscope-max-angle-y': 45
        });
      });
    }

    return () => {
      if (cardElement && cardElement.vanillaTilt) {
        cardElement.vanillaTilt.destroy();
      }
    };
  });
</script>

<div 
  bind:this={cardElement}
  class="project-card-3d animate-card group"
  style="animation-delay: {index * 150}ms;"
  data-tilt
>
  <div class="card-inner">
    <div class="project-image">
      <div class="image-overlay"></div>
      <div class="project-icon">
        <Code size={48} />
      </div>
      <div class="gradient-overlay"></div>
    </div>
    
    <div class="card-content">
      <h3 class="project-title">{project.title}</h3>
      <p class="project-description">{project.description}</p>

      <div class="tech-stack">
        {#each project.tech as tech}
          <span class="tech-tag">{tech}</span>
        {/each}
      </div>

      <div class="project-links">
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          class="project-link group/link"
        >
          <Github size={16} />
          <span>Code</span>
          <ExternalLink size={12} class="link-arrow" />
        </a>
        <a 
          href={project.demo} 
          target="_blank" 
          rel="noopener noreferrer"
          class="project-link group/link"
        >
          <ExternalLink size={16} />
          <span>Demo</span>
          <ArrowRight size={12} class="link-arrow" />
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  .project-card-3d {
    position: relative;
    transform-style: preserve-3d;
    transition: all 0.3s ease;
    animation: cardSlideIn 0.8s ease forwards;
    opacity: 0;
  }

  .card-inner {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    overflow: hidden;
    height: 100%;
    transform-style: preserve-3d;
    box-shadow: 
      0 10px 30px rgba(0, 0, 0, 0.1),
      0 1px 8px rgba(0, 0, 0, 0.05);
  }

  :global(html.dark) .card-inner {
    background: rgba(31, 41, 55, 0.9);
    border: 1px solid rgba(55, 65, 81, 0.5);
    box-shadow: 
      0 10px 30px rgba(0, 0, 0, 0.3),
      0 1px 8px rgba(0, 0, 0, 0.2);
  }

  .project-image {
    height: 200px;
    background: linear-gradient(135deg, rgb(37, 99, 235), rgb(147, 51, 234));
    position: relative;
    overflow: hidden;
    transform: translateZ(30px);
  }

  .image-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.2);
    transition: background 0.3s ease;
  }

  .project-card-3d:hover .image-overlay {
    background: rgba(0, 0, 0, 0.1);
  }

  .project-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) translateZ(20px);
    color: rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease;
  }

  .project-card-3d:hover .project-icon {
    transform: translate(-50%, -50%) translateZ(20px) scale(1.1);
    color: rgba(255, 255, 255, 1);
  }

  .gradient-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }

  .card-content {
    padding: 1.5rem;
    transform: translateZ(20px);
  }

  .project-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: rgb(17, 24, 39);
    margin-bottom: 1rem;
    transition: color 0.3s ease;
  }

  :global(html.dark) .project-title {
    color: rgb(243, 244, 246);
  }

  .project-card-3d:hover .project-title {
    color: rgb(37, 99, 235);
  }

  :global(html.dark) .project-card-3d:hover .project-title {
    color: rgb(96, 165, 250);
  }

  .project-description {
    color: rgb(107, 114, 128);
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  :global(html.dark) .project-description {
    color: rgb(156, 163, 175);
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .tech-tag {
    padding: 0.25rem 0.75rem;
    background: rgba(37, 99, 235, 0.1);
    border: 1px solid rgba(37, 99, 235, 0.2);
    color: rgb(37, 99, 235);
    font-size: 0.75rem;
    font-weight: 500;
    border-radius: 50px;
    transition: all 0.3s ease;
    transform: translateZ(10px);
  }

  :global(html.dark) .tech-tag {
    background: rgba(59, 130, 246, 0.1);
    border: 1px solid rgba(59, 130, 246, 0.2);
    color: rgb(96, 165, 250);
  }

  .project-card-3d:hover .tech-tag {
    background: rgba(37, 99, 235, 0.2);
    border-color: rgba(37, 99, 235, 0.4);
    transform: translateZ(15px);
  }

  :global(html.dark) .project-card-3d:hover .tech-tag {
    background: rgba(59, 130, 246, 0.2);
    border-color: rgba(59, 130, 246, 0.4);
  }

  .project-links {
    display: flex;
    gap: 1rem;
  }

  .project-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: rgb(107, 114, 128);
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.3s ease;
    transform: translateZ(10px);
  }

  :global(html.dark) .project-link {
    color: rgb(156, 163, 175);
  }

  .project-link:hover {
    color: rgb(37, 99, 235);
    transform: translateZ(15px);
  }

  :global(html.dark) .project-link:hover {
    color: rgb(96, 165, 250);
  }

  :global(.link-arrow) {
    transition: transform 0.2s ease;
  }

  .project-link:hover :global(.link-arrow) {
    transform: translateX(2px);
  }

  @keyframes cardSlideIn {
    from {
      opacity: 0;
      transform: translateY(50px) rotateX(-10deg);
    }
    to {
      opacity: 1;
      transform: translateY(0) rotateX(0deg);
    }
  }
</style>