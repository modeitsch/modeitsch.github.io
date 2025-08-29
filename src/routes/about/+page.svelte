<script>
  import { Mail, Github, Twitter, Linkedin, Download } from 'lucide-svelte';
  import ThreeBackground from '$lib/components/ThreeBackground.svelte';
  import ScrollAnimations from '$lib/components/ScrollAnimations.svelte';
  import SkillCard3D from '$lib/components/SkillCard3D.svelte';
  import ScrollProgress from '$lib/components/ScrollProgress.svelte';
  
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2023 - Present",
      description: "Leading development of modern web applications using React, Node.js, and cloud technologies."
    },
    {
      title: "Frontend Developer",
      company: "Creative Solutions Ltd.",
      period: "2021 - 2023",
      description: "Built responsive user interfaces and improved user experience for various client projects."
    },
    {
      title: "Junior Developer",
      company: "StartUp Co.",
      period: "2020 - 2021",
      description: "Developed and maintained web applications while learning modern development practices."
    }
  ];

  const technologies = [
    "JavaScript", "TypeScript", "React", "Svelte", "Vue.js",
    "Node.js", "Python", "HTML5", "CSS3", "Tailwind CSS",
    "MongoDB", "PostgreSQL", "Git", "Docker", "AWS"
  ];

  const skills = [
    {
      icon: () => '🎨',
      title: "Frontend Development",
      description: "Creating beautiful, responsive user interfaces with modern frameworks and libraries."
    },
    {
      icon: () => '⚙️',
      title: "Backend Development", 
      description: "Building robust APIs and server-side applications with scalable architecture."
    },
    {
      icon: () => '🚀',
      title: "DevOps & Deployment",
      description: "Implementing CI/CD pipelines and managing cloud infrastructure for optimal performance."
    }
  ];
</script>

<svelte:head>
  <title>About - Moshe Deitsch</title>
  <meta name="description" content="Learn more about me, my experience, and my passion for web development." />
</svelte:head>

<!-- Scroll Progress -->
<ScrollProgress />

<!-- 3D Background -->
<ThreeBackground />

<!-- Scroll Animations -->
<ScrollAnimations />

<!-- Hero Section -->
<section class="hero-section bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="section-title text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span class="hero-title">About</span> <span class="hero-title gradient-text">Me</span>
          </h1>
          <p class="hero-subtitle text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed reveal-text">
            I'm a passionate full-stack developer with over 4 years of experience creating 
            modern web applications and user experiences.
          </p>
          <p class="hero-subtitle text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed reveal-text">
            I love working with cutting-edge technologies and turning complex problems 
            into simple, beautiful solutions. When I'm not coding, you can find me 
            exploring new technologies, contributing to open source, or sharing knowledge 
            with the developer community.
          </p>
          
          <div class="hero-buttons flex flex-wrap gap-4">
            <a href="mailto:contact@modeitsch.com" class="btn-primary inline-flex items-center space-x-2 interactive-glow">
              <Mail size={20} />
              <span>Get In Touch</span>
            </a>
            <button class="btn-secondary inline-flex items-center space-x-2 interactive-glow">
              <Download size={20} />
              <span>Download CV</span>
            </button>
          </div>
        </div>
        
        <div class="relative">
          <div class="profile-image w-80 h-80 mx-auto bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center float">
            <div class="w-72 h-72 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <img 
                src="https://avatars.githubusercontent.com/u/41856538?v=4" 
                alt="Moshe Deitsch"
                class="w-64 h-64 rounded-full object-cover"
              />
            </div>
          </div>
          <!-- Decorative rings -->
          <div class="absolute inset-0 rounded-full border-2 border-primary-200 dark:border-primary-800 scale-110 animate-pulse"></div>
          <div class="absolute inset-0 rounded-full border border-primary-100 dark:border-primary-900 scale-125 animate-pulse float-delay-1"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Skills Section -->
<section class="py-16">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="section-title text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          My <span class="gradient-text">Skills</span>
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 reveal-text">
          What I bring to every project
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {#each skills as skill, index}
          <div class="skill-card-3d animate-card text-center p-8" style="animation-delay: {index * 200}ms;">
            <div class="text-6xl mb-6">{skill.icon()}</div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">{skill.title}</h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">{skill.description}</p>
          </div>
        {/each}
      </div>

      <div class="text-center mb-12">
        <h3 class="section-title text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Technologies & Tools
        </h3>
        <p class="text-lg text-gray-600 dark:text-gray-300 reveal-text">
          Technologies I work with regularly
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-3">
        {#each technologies as tech, index}
          <span class="animate-card px-4 py-2 bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 font-medium hover:border-primary-300 dark:hover:border-primary-600 transition-colors backdrop-blur-sm" style="animation-delay: {index * 50}ms;">
            {tech}
          </span>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Experience Section -->
<section class="bg-gray-50/50 dark:bg-gray-800/50 py-16 backdrop-blur-sm">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="section-title text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Professional <span class="gradient-text">Experience</span>
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 reveal-text">
          My journey in web development
        </p>
      </div>

      <div class="space-y-8">
        {#each experiences as experience, index}
          <div class="card animate-card p-6 card-hover glass" style="animation-delay: {index * 200}ms;">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                  {experience.title}
                </h3>
                <p class="text-primary-600 dark:text-primary-400 font-medium">
                  {experience.company}
                </p>
              </div>
              <span class="text-gray-500 dark:text-gray-400 font-medium mt-2 md:mt-0">
                {experience.period}
              </span>
            </div>
            <p class="text-gray-600 dark:text-gray-300">
              {experience.description}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Connect Section -->
<section class="py-16">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="section-title text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Let's <span class="gradient-text">Connect</span>
      </h2>
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 reveal-text">
        Find me on social media or send me a message
      </p>
      
      <div class="flex justify-center space-x-6">
        <a 
          href="https://github.com/modeitsch" 
          target="_blank" 
          rel="noopener noreferrer"
          class="animate-card p-4 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group backdrop-blur-sm interactive-glow"
          aria-label="GitHub"
          style="animation-delay: 100ms;"
        >
          <Github size={24} class="text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
        </a>
        
        <a 
          href="https://twitter.com/modeitsch" 
          target="_blank" 
          rel="noopener noreferrer"
          class="animate-card p-4 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group backdrop-blur-sm interactive-glow"
          aria-label="Twitter"
          style="animation-delay: 200ms;"
        >
          <Twitter size={24} class="text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
        </a>
        
        <a 
          href="https://linkedin.com/in/modeitsch" 
          target="_blank" 
          rel="noopener noreferrer"
          class="animate-card p-4 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group backdrop-blur-sm interactive-glow"
          aria-label="LinkedIn"
          style="animation-delay: 300ms;"
        >
          <Linkedin size={24} class="text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
        </a>
        
        <a 
          href="mailto:contact@modeitsch.com"
          class="animate-card p-4 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group backdrop-blur-sm interactive-glow"
          aria-label="Email"
          style="animation-delay: 400ms;"
        >
          <Mail size={24} class="text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
        </a>
      </div>
    </div>
  </div>
</section>