<script>
  import { ArrowRight, Github, ExternalLink, Guitar, MapPin } from 'lucide-svelte';
  import SkillCard from '$lib/components/SkillCard.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import GitHubStats from '$lib/components/GitHubStats.svelte';
  import GitHubActivity from '$lib/components/GitHubActivity.svelte';
  import LazyImage from '$lib/components/LazyImage.svelte';
  import { homeSkills, featuredProjects, techStackPreview } from '$lib/data';

  const skills = homeSkills;
  const projects = featuredProjects;
</script>

<svelte:head>
  <title>Moshe Deitsch - Developer & Guitarist</title>
  <meta name="description" content="Moshe Deitsch - Coding for breakfast, coding for lunch... playing guitar for brunch. Full-stack developer passionate about modern web technologies." />
</svelte:head>

<!-- Hero Section -->
<section class="hero-section" role="banner" aria-label="Hero section with introduction">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <div class="hero-content">
        <!-- Content -->
        <div class="hero-text">
          <p class="hero-location">
            <MapPin size={16} />
            <span>Localhost</span>
          </p>

          <h1 class="hero-title">
            Hi, I'm<br />
            <span class="text-accent">Moshe Deitsch</span>
          </h1>

          <p class="hero-tagline">
            Coding for breakfast, coding for lunch...
            <span class="inline-flex items-center gap-2">
              <Guitar size={20} class="text-accent" />
              <span>playing guitar for brunch</span>
            </span>
          </p>

          <p class="hero-description">
            Full-stack developer passionate about creating beautiful, modern web experiences with cutting-edge technologies.
          </p>

          <div class="hero-buttons">
            <a href="/projects" class="btn-primary">
              <span>View My Work</span>
              <ArrowRight size={20} />
            </a>
            <a href="/contact" class="btn-secondary">
              <span>Get In Touch</span>
              <ArrowRight size={20} />
            </a>
          </div>

          <GitHubStats />
        </div>

        <!-- Profile Image -->
        <div class="hero-image">
          <div class="profile-container">
            <LazyImage
              src="https://avatars.githubusercontent.com/u/41856538?v=4"
              alt="Moshe Deitsch"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Skills Section -->
<section class="section" aria-labelledby="skills-heading">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <div class="section-header">
        <h2 id="skills-heading" class="section-title">
          What I <span class="text-accent">Specialize</span> In
        </h2>
        <p class="section-subtitle">
          Combining technical expertise with creative problem-solving to build exceptional digital experiences
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each skills as skill}
          <SkillCard {skill} />
        {/each}
      </div>

      <!-- Tech Stack Preview -->
      <div class="tech-stack">
        <p class="tech-label">Technologies I work with</p>
        <div class="tech-tags">
          {#each techStackPreview as tech}
            <span class="tech-tag">{tech}</span>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Projects Section -->
<section id="projects" class="section section-alt">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <div class="section-header">
        <h2 class="section-title">
          Featured <span class="text-accent">Projects</span>
        </h2>
        <p class="section-subtitle">
          A collection of projects that showcase my passion for creating innovative web solutions
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each projects as project}
          <ProjectCard {project} />
        {/each}
      </div>

      <div class="text-center mt-12">
        <a href="/projects" class="btn-primary">
          <span>View All Projects</span>
          <ArrowRight size={20} />
        </a>
      </div>
    </div>
  </div>
</section>

<!-- GitHub Activity Section -->
<section class="section">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <div class="section-header">
        <h2 class="section-title">
          Latest <span class="text-accent">Activity</span>
        </h2>
        <p class="section-subtitle">
          See what I've been working on lately
        </p>
      </div>

      <div class="card p-6 rounded-2xl">
        <GitHubActivity />
      </div>
    </div>
  </div>
</section>

<!-- Contact Section -->
<section class="section section-alt">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="section-title mb-4">
        Let's Create Something Amazing
      </h2>
      <p class="section-subtitle mb-8">
        Have a project in mind? Let's discuss how we can bring your ideas to life with modern web technologies.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/contact" class="btn-primary">
          <span>Get In Touch</span>
          <ArrowRight size={20} />
        </a>
        <a href="https://github.com/modeitsch" target="_blank" rel="noopener noreferrer" class="btn-secondary">
          <Github size={20} />
          <span>View GitHub</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 6rem 0;
    background: var(--color-background);
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  @media (min-width: 1024px) {
    .hero-content {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .hero-text {
    flex: 1;
    text-align: center;
  }

  @media (min-width: 1024px) {
    .hero-text {
      text-align: left;
    }
  }

  .hero-location {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-accent);
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .hero-title {
    font-family: var(--font-heading);
    font-size: clamp(2.5rem, 8vw, 4.5rem);
    font-weight: 700;
    line-height: 1.1;
    color: var(--color-text-primary);
    margin-bottom: 1.5rem;
  }

  .hero-tagline {
    font-size: 1.25rem;
    color: var(--color-text-secondary);
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  .hero-description {
    font-size: 1.125rem;
    color: var(--color-text-muted);
    margin-bottom: 2rem;
    max-width: 36rem;
  }

  @media (min-width: 1024px) {
    .hero-description {
      margin-left: 0;
      margin-right: auto;
    }
  }

  .hero-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 640px) {
    .hero-buttons {
      flex-direction: row;
      justify-content: center;
    }
  }

  @media (min-width: 1024px) {
    .hero-buttons {
      justify-content: flex-start;
    }
  }

  .hero-image {
    flex-shrink: 0;
  }

  .profile-container {
    width: 280px;
    height: 280px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid var(--color-surface);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 768px) {
    .profile-container {
      width: 360px;
      height: 360px;
    }
  }

  .section {
    padding: 5rem 0;
    background: var(--color-background);
  }

  .section-alt {
    background: var(--color-background-secondary);
  }

  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .section-title {
    font-family: var(--font-heading);
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: 1rem;
  }

  .section-subtitle {
    font-size: 1.125rem;
    color: var(--color-text-secondary);
    max-width: 40rem;
    margin: 0 auto;
  }

  .tech-stack {
    margin-top: 4rem;
    text-align: center;
  }

  .tech-label {
    font-size: 0.875rem;
    color: var(--color-text-muted);
    margin-bottom: 1.5rem;
  }

  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
  }

  .tech-tag {
    padding: 0.5rem 1rem;
    background: var(--color-surface);
    color: var(--color-text-secondary);
    font-size: 0.875rem;
    font-weight: 500;
    border-radius: 9999px;
    border: 1px solid var(--color-border);
    transition: border-color 150ms ease;
  }

  .tech-tag:hover {
    border-color: var(--color-accent);
  }

  .text-accent {
    color: var(--color-accent);
  }
</style>
