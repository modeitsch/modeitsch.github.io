<script>
  import { Github, ExternalLink } from 'lucide-svelte';

  export let project;
</script>

<article class="project-card">
  <div class="project-header">
    <h3 class="project-title">{project.title}</h3>
    <div class="project-links">
      {#if project.github}
        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View source on GitHub">
          <Github size={18} />
        </a>
      {/if}
      {#if project.demo}
        <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="View live demo">
          <ExternalLink size={18} />
        </a>
      {/if}
    </div>
  </div>

  <p class="project-description">{project.description}</p>

  <div class="project-tech">
    {#each project.tech as tech}
      <span class="tech-tag">{tech}</span>
    {/each}
  </div>
</article>

<style>
  .project-card {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 1rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: box-shadow 250ms ease, border-color 250ms ease;
  }

  .project-card:hover {
    box-shadow: 0 8px 30px rgba(var(--color-shadow, 0, 0, 0), 0.08);
    border-color: var(--color-border-hover);
  }

  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
  }

  .project-title {
    font-family: var(--font-heading);
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin: 0;
  }

  .project-links {
    display: flex;
    gap: 0.75rem;
  }

  .project-links a {
    color: var(--color-text-secondary);
    transition: color 150ms ease;
  }

  .project-links a:hover {
    color: var(--color-accent);
  }

  .project-description {
    color: var(--color-text-secondary);
    line-height: 1.6;
    font-size: 0.9375rem;
    flex: 1;
  }

  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tech-tag {
    padding: 0.25rem 0.75rem;
    background: var(--color-background-secondary);
    color: var(--color-text-secondary);
    font-size: 0.75rem;
    font-weight: 500;
    border-radius: 9999px;
    border: 1px solid var(--color-border);
  }
</style>
