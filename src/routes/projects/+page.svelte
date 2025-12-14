<script>
  import { ExternalLink, Tag } from 'lucide-svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { allProjects } from '$lib/data';

  const projects = allProjects;
</script>

<svelte:head>
  <title>Projects - Moshe Deitsch</title>
  <meta name="description" content="A showcase of my development projects and contributions" />
</svelte:head>

<!-- Hero Section -->
<section class="hero-section">
  <div class="container mx-auto px-4">
    <div class="text-center max-w-4xl mx-auto">
      <h1 class="page-title">
        My <span class="text-accent">Projects</span>
      </h1>
      <p class="hero-description">
        A collection of web applications, tools, and experiments I've built with passion and precision.
      </p>
      <div class="tag-list">
        <span class="hero-tag">
          <Tag size={16} />
          <span>Web Development</span>
        </span>
        <span class="hero-tag">
          <Tag size={16} />
          <span>Open Source</span>
        </span>
        <span class="hero-tag">
          <Tag size={16} />
          <span>Full Stack</span>
        </span>
      </div>
    </div>
  </div>
</section>

<!-- Projects Grid -->
<section class="section">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each projects as project}
        <ProjectCard {project} />
      {/each}
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="section section-alt">
  <div class="container mx-auto px-4">
    <div class="cta-card">
      <h2 class="cta-title">Let's Build Something Amazing Together</h2>
      <p class="cta-description">
        Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
      </p>
      <a href="/contact" class="cta-button">
        <span>Get In Touch</span>
        <ExternalLink size={16} />
      </a>
    </div>
  </div>
</section>

<style>
  .hero-section {
    padding: 6rem 0 4rem;
    background: var(--color-background);
  }

  .page-title {
    font-family: var(--font-heading);
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: 1.5rem;
  }

  .text-accent {
    color: var(--color-accent);
  }

  .hero-description {
    font-size: 1.25rem;
    color: var(--color-text-secondary);
    line-height: 1.7;
    margin-bottom: 2rem;
  }

  .tag-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
  }

  .hero-tag {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 9999px;
    font-size: 0.875rem;
    color: var(--color-text-muted);
  }

  .section {
    padding: 5rem 0;
    background: var(--color-background);
  }

  .section-alt {
    background: var(--color-background-secondary);
  }

  .cta-card {
    max-width: 48rem;
    margin: 0 auto;
    background: var(--color-accent);
    border-radius: 1.5rem;
    padding: 3rem 2rem;
    text-align: center;
  }

  .cta-title {
    font-family: var(--font-heading);
    font-size: clamp(1.5rem, 4vw, 2rem);
    font-weight: 700;
    color: white;
    margin-bottom: 1rem;
  }

  .cta-description {
    font-size: 1.125rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 2rem;
    max-width: 36rem;
    margin-left: auto;
    margin-right: auto;
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 1.5rem;
    background: white;
    color: var(--color-accent);
    font-weight: 600;
    border-radius: 0.75rem;
    transition: all 150ms ease;
  }

  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }
</style>
