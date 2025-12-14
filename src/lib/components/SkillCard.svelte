<script>
  export let skill;
</script>

<article class="skill-card">
  <div class="icon-container">
    <svelte:component this={skill.icon} size={28} />
  </div>
  <h3 class="skill-title">{skill.title}</h3>
  <p class="skill-description">{skill.description}</p>
</article>

<style>
  .skill-card {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    transition: box-shadow 250ms ease, border-color 250ms ease;
  }

  .skill-card:hover {
    box-shadow: 0 8px 30px rgba(var(--color-shadow, 0, 0, 0), 0.08);
    border-color: var(--color-border-hover);
  }

  .icon-container {
    width: 64px;
    height: 64px;
    margin: 0 auto 1.5rem;
    background: var(--color-accent);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .skill-title {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: 0.75rem;
  }

  .skill-description {
    color: var(--color-text-secondary);
    line-height: 1.6;
    font-size: 0.9375rem;
  }
</style>
