<script>
  import { ArrowRight, Github, ExternalLink, Guitar, MapPin } from 'lucide-svelte';
  import SkillCard3D from '$lib/components/SkillCard3D.svelte';
  import ProjectCard3D from '$lib/components/ProjectCard3D.svelte';
  import ScrollIndicator from '$lib/components/ScrollIndicator.svelte';
  import GitHubStats from '$lib/components/GitHubStats.svelte';
  import GitHubActivity from '$lib/components/GitHubActivity.svelte';
  import { homeSkills, featuredProjects, techStackPreview } from '$lib/data';

  // Use imported data
  const skills = homeSkills;
  const projects = featuredProjects;
</script>

<svelte:head>
  <title>Moshe Deitsch - Developer & Guitarist</title>
  <meta name="description" content="Moshe Deitsch - Coding for breakfast, coding for lunch... playing guitar for brunch. Full-stack developer passionate about modern web technologies." />
</svelte:head>

<!-- Hero Section -->
<section class="hero-section relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900 overflow-hidden" role="banner" aria-label="Hero section with introduction">
  <!-- Background Elements -->
  <div class="absolute inset-0">
    <div class="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
    <div class="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
    <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
  </div>

  <div class="container mx-auto px-4 relative z-10 hero-bg">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
        
        <!-- Content -->
        <div class="flex-1 text-center lg:text-left">
          <div class="mb-6">
            <p class="text-primary-600 dark:text-primary-400 font-medium mb-2 flex items-center justify-center lg:justify-start space-x-2 hero-subtitle">
              <MapPin size={16} />
              <span>Localhost</span>
            </p>
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              <span class="hero-title">Hi, I'm</span> <br />
              <span class="hero-title bg-gradient-to-r from-primary-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Moshe Deitsch
              </span>
            </h1>
          </div>
          
          <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl hero-subtitle">
            Coding for breakfast, coding for lunch... 
            <span class="inline-flex items-center space-x-2">
              <Guitar size={20} class="text-primary-600 dark:text-primary-400" />
              <span>playing guitar for brunch</span>
            </span>
          </p>

          <p class="text-lg text-gray-500 dark:text-gray-400 mb-8 hero-subtitle reveal-text">
            Full-stack developer passionate about creating beautiful, modern web experiences with cutting-edge technologies.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start hero-buttons">
            <a href="/projects" class="btn-primary inline-flex items-center justify-center space-x-2 group" aria-label="View my portfolio projects">
              <span>View My Work</span>
              <ArrowRight size={20} class="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <a href="/contact" class="btn-secondary inline-flex items-center justify-center space-x-2 group" aria-label="Contact me for opportunities">
              <span>Get In Touch</span>
              <ArrowRight size={20} class="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
          </div>

          <!-- Quick Stats (Dynamic from GitHub API) -->
          <GitHubStats />
        </div>

        <!-- Profile Image -->
        <div class="flex-shrink-0">
          <div class="relative profile-image profile-glow">
            <div class="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl image-hover">
              <img
                src="https://avatars.githubusercontent.com/u/41856538?v=4"
                alt="Moshe Deitsch"
                class="w-full h-full object-cover"
              />
            </div>
            <!-- Decorative rings -->
            <div class="absolute inset-0 rounded-full border-2 border-primary-200 dark:border-primary-800 scale-110 animate-pulse"></div>
            <div class="absolute inset-0 rounded-full border border-primary-100 dark:border-primary-900 scale-125 animate-pulse" style="animation-delay: 1s;"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Scroll indicator -->
  <ScrollIndicator />
</section>

<!-- Skills Section -->
<section class="py-20 bg-white dark:bg-gray-900" aria-labelledby="skills-heading">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 id="skills-heading" class="section-title text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          What I <span class="gradient-text">Specialize</span> In
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto reveal-text">
          Combining technical expertise with creative problem-solving to build exceptional digital experiences
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each skills as skill, index}
          <SkillCard3D {skill} {index} />
        {/each}
      </div>

      <!-- Tech Stack Preview -->
      <div class="mt-16 text-center">
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">Technologies I work with</p>
        <div class="flex flex-wrap justify-center gap-4">
          {#each techStackPreview as tech}
            <span class="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors">
              {tech}
            </span>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Projects Section -->
<section id="projects" class="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="section-title text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Featured <span class="gradient-text">Projects</span>
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto reveal-text">
          A collection of projects that showcase my passion for creating innovative web solutions
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each projects as project, index}
          <ProjectCard3D {project} {index} />
        {/each}
      </div>

      <!-- View All Projects Button -->
      <div class="text-center mt-12">
        <a href="/projects" class="btn-primary inline-flex items-center space-x-2 group">
          <span>View All Projects</span>
          <ArrowRight size={20} class="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </div>
</section>

<!-- GitHub Activity Section -->
<section class="py-20 bg-white dark:bg-gray-900">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="section-title text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Latest <span class="gradient-text">Activity</span>
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto reveal-text">
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
<section class="py-20 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-800 dark:to-purple-900/20">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Let's Create Something Amazing
      </h2>
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Have a project in mind? Let's discuss how we can bring your ideas to life with modern web technologies.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/contact" class="btn-primary inline-flex items-center justify-center space-x-2 group">
          <span>Get In Touch</span>
          <ArrowRight size={20} class="group-hover:translate-x-1 transition-transform" />
        </a>
        <a href="https://github.com/modeitsch" target="_blank" rel="noopener noreferrer" class="btn-secondary inline-flex items-center justify-center space-x-2 group">
          <Github size={20} />
          <span>View GitHub</span>
          <ExternalLink size={16} class="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </div>
</section>