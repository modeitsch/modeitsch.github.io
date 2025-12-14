<script>
  import { Mail, Github, Linkedin, Download } from 'lucide-svelte';
  import SkillCard from '$lib/components/SkillCard.svelte';
  import { experiences, allTechnologies, aboutSkills } from '$lib/data';

  const technologies = allTechnologies;
  const skills = aboutSkills;
</script>

<svelte:head>
  <title>About - Moshe Deitsch</title>
  <meta name="description" content="Learn more about me, my experience, and my passion for web development." />
</svelte:head>

<!-- Hero Section -->
<section class="hero-section">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <div class="hero-grid">
        <div class="hero-text">
          <h1 class="page-title">
            About <span class="text-accent">Me</span>
          </h1>
          <p class="hero-description">
            I'm a passionate full-stack developer with over 4 years of experience creating
            modern web applications and user experiences.
          </p>
          <p class="hero-secondary">
            I love working with cutting-edge technologies and turning complex problems
            into simple, beautiful solutions. When I'm not coding, you can find me
            exploring new technologies, contributing to open source, or sharing knowledge
            with the developer community.
          </p>

          <div class="hero-buttons">
            <a href="mailto:moshe.deitsch@gmail.com" class="btn-primary">
              <Mail size={20} />
              <span>Get In Touch</span>
            </a>
            <button class="btn-secondary">
              <Download size={20} />
              <span>Download CV</span>
            </button>
          </div>
        </div>

        <div class="hero-image">
          <div class="profile-container">
            <img
              src="https://avatars.githubusercontent.com/u/41856538?v=4"
              alt="Moshe Deitsch"
              class="profile-image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Skills Section -->
<section class="section">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <div class="section-header">
        <h2 class="section-title">
          My <span class="text-accent">Skills</span>
        </h2>
        <p class="section-subtitle">What I bring to every project</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {#each skills as skill}
          <SkillCard {skill} />
        {/each}
      </div>

      <div class="tech-section">
        <h3 class="tech-title">Technologies & Tools</h3>
        <p class="tech-subtitle">Technologies I work with regularly</p>
        <div class="tech-tags">
          {#each technologies as tech}
            <span class="tech-tag">{tech}</span>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Experience Section -->
<section class="section section-alt">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <div class="section-header">
        <h2 class="section-title">
          Professional <span class="text-accent">Experience</span>
        </h2>
        <p class="section-subtitle">My journey in web development</p>
      </div>

      <div class="experience-list">
        {#each experiences as experience}
          <article class="experience-card">
            <div class="experience-header">
              <div>
                <h3 class="experience-title">{experience.title}</h3>
                <p class="experience-company">{experience.company}</p>
              </div>
              <span class="experience-period">{experience.period}</span>
            </div>
            <p class="experience-description">{experience.description}</p>
          </article>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Connect Section -->
<section class="section">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="section-title mb-4">
        Let's <span class="text-accent">Connect</span>
      </h2>
      <p class="section-subtitle mb-8">Find me on social media or send me a message</p>

      <div class="social-links">
        <a
          href="https://github.com/modeitsch"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>

        <a
          href="https://linkedin.com/in/moshe-deitsch"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>

        <a
          href="mailto:moshe.deitsch@gmail.com"
          class="social-link"
          aria-label="Email"
        >
          <Mail size={24} />
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .hero-section {
    padding: 6rem 0;
    background: var(--color-background);
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
  }

  @media (min-width: 1024px) {
    .hero-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .hero-text {
    text-align: center;
  }

  @media (min-width: 1024px) {
    .hero-text {
      text-align: left;
    }
  }

  .page-title {
    font-family: var(--font-heading);
    font-size: clamp(2.5rem, 6vw, 3.5rem);
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: 1.5rem;
  }

  .hero-description {
    font-size: 1.25rem;
    color: var(--color-text-secondary);
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  .hero-secondary {
    font-size: 1.125rem;
    color: var(--color-text-muted);
    line-height: 1.7;
    margin-bottom: 2rem;
  }

  .hero-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    .hero-buttons {
      justify-content: flex-start;
    }
  }

  .hero-image {
    display: flex;
    justify-content: center;
  }

  .profile-container {
    width: 280px;
    height: 280px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid var(--color-surface);
    box-shadow: 0 25px 50px rgba(var(--color-shadow, 0, 0, 0), 0.15);
  }

  @media (min-width: 768px) {
    .profile-container {
      width: 320px;
      height: 320px;
    }
  }

  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    margin-bottom: 3rem;
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
  }

  .text-accent {
    color: var(--color-accent);
  }

  .tech-section {
    margin-top: 4rem;
    text-align: center;
  }

  .tech-title {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: 0.5rem;
  }

  .tech-subtitle {
    font-size: 1rem;
    color: var(--color-text-secondary);
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

  .experience-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .experience-card {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 1rem;
    padding: 1.5rem;
    transition: box-shadow 250ms ease, border-color 250ms ease;
  }

  .experience-card:hover {
    box-shadow: 0 8px 30px rgba(var(--color-shadow, 0, 0, 0), 0.08);
    border-color: var(--color-border-hover);
  }

  .experience-header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    .experience-header {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  .experience-title {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-text-primary);
  }

  .experience-company {
    color: var(--color-accent);
    font-weight: 500;
  }

  .experience-period {
    color: var(--color-text-muted);
    font-size: 0.875rem;
  }

  .experience-description {
    color: var(--color-text-secondary);
    line-height: 1.6;
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .social-link {
    padding: 1rem;
    border-radius: 0.75rem;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    color: var(--color-text-secondary);
    transition: all 150ms ease;
  }

  .social-link:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
  }
</style>
