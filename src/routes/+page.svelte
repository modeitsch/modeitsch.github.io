<script>
  import { ArrowRight, Code, Palette, Zap, Github, ExternalLink, Guitar, Coffee, MapPin } from 'lucide-svelte';
  
  const skills = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Building modern web applications with cutting-edge technologies and best practices."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive user interfaces that provide exceptional user experiences."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, scalability, and exceptional performance."
    }
  ];

  const projects = [
    {
      title: "Modern Portfolio Website",
      description: "A responsive portfolio built with SvelteKit, Tailwind CSS, and modern web technologies.",
      tech: ["SvelteKit", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/modeitsch",
      demo: "https://modeitsch.com"
    },
    {
      title: "Open Source Contributions",
      description: "Various contributions to open source projects and personal coding experiments.",
      tech: ["JavaScript", "Python", "Git"],
      github: "https://github.com/modeitsch",
      demo: "https://github.com/modeitsch"
    },
    {
      title: "Web Development Projects",
      description: "Collection of web applications and tools built with modern frameworks and libraries.",
      tech: ["React", "Vue.js", "Node.js"],
      github: "https://github.com/modeitsch",
      demo: "https://modeitsch.com"
    }
  ];
</script>

<svelte:head>
  <title>Moshe Deitsch - Developer & Guitarist</title>
  <meta name="description" content="Moshe Deitsch - Coding for breakfast, coding for lunch... playing guitar for brunch. Full-stack developer passionate about modern web technologies." />
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900 overflow-hidden">
  <!-- Background Elements -->
  <div class="absolute inset-0">
    <div class="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
    <div class="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
    <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
  </div>

  <div class="container mx-auto px-4 relative z-10">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
        
        <!-- Content -->
        <div class="flex-1 text-center lg:text-left">
          <div class="mb-6">
            <p class="text-primary-600 dark:text-primary-400 font-medium mb-2 flex items-center justify-center lg:justify-start space-x-2">
              <MapPin size={16} />
              <span>Localhost</span>
            </p>
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Hi, I'm <br />
              <span class="bg-gradient-to-r from-primary-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Moshe Deitsch
              </span>
            </h1>
          </div>
          
          <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl">
            Coding for breakfast, coding for lunch... 
            <span class="inline-flex items-center space-x-2">
              <Guitar size={20} class="text-primary-600 dark:text-primary-400" />
              <span>playing guitar for brunch</span>
            </span>
          </p>

          <p class="text-lg text-gray-500 dark:text-gray-400 mb-8">
            Full-stack developer passionate about creating beautiful, modern web experiences with cutting-edge technologies.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="/projects" class="btn-primary inline-flex items-center justify-center space-x-2 group">
              <span>View My Work</span>
              <ArrowRight size={20} class="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/contact" class="btn-secondary inline-flex items-center justify-center space-x-2 group">
              <span>Get In Touch</span>
              <ArrowRight size={20} class="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <!-- Quick Stats -->
          <div class="flex items-center justify-center lg:justify-start space-x-8 mt-12 text-sm text-gray-500 dark:text-gray-400">
            <div class="text-center">
              <div class="text-2xl font-bold text-gray-900 dark:text-white">24</div>
              <div>Repositories</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-gray-900 dark:text-white">16</div>
              <div>Followers</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-gray-900 dark:text-white">6+</div>
              <div>Years Coding</div>
            </div>
          </div>
        </div>

        <!-- Profile Image -->
        <div class="flex-shrink-0">
          <div class="relative">
            <div class="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
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
  <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div class="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
      <div class="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
    </div>
  </div>
</section>

<!-- Skills Section -->
<section class="py-20 bg-white dark:bg-gray-900">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          What I <span class="gradient-text">Specialize</span> In
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Combining technical expertise with creative problem-solving to build exceptional digital experiences
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each skills as skill, index}
          <div class="card card-hover text-center p-8 group" style="animation-delay: {index * 200}ms;">
            <div class="relative mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <svelte:component this={skill.icon} size={32} class="text-primary-600 dark:text-primary-400" />
              </div>
              <!-- Floating icon background -->
              <div class="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-purple-400/20 rounded-2xl scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {skill.title}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              {skill.description}
            </p>
          </div>
        {/each}
      </div>

      <!-- Tech Stack Preview -->
      <div class="mt-16 text-center">
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">Technologies I work with</p>
        <div class="flex flex-wrap justify-center gap-4">
          {#each ['JavaScript', 'TypeScript', 'Svelte', 'React', 'Vue.js', 'Node.js', 'Python', 'Tailwind CSS'] as tech}
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
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Featured <span class="gradient-text">Projects</span>
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A collection of projects that showcase my passion for creating innovative web solutions
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each projects as project, index}
          <div class="card card-hover group overflow-hidden" style="animation-delay: {index * 150}ms;">
            <!-- Project Image Placeholder -->
            <div class="h-48 bg-gradient-to-br from-primary-400 to-purple-600 relative overflow-hidden">
              <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <Code size={48} class="text-white/80" />
              </div>
              <!-- Overlay gradient -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
            
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              
              <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <!-- Tech Stack -->
              <div class="flex flex-wrap gap-2 mb-6">
                {#each project.tech as tech}
                  <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-600">
                    {tech}
                  </span>
                {/each}
              </div>

              <!-- Links -->
              <div class="flex space-x-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group/link"
                >
                  <Github size={16} />
                  <span class="text-sm font-medium">Code</span>
                  <ExternalLink size={12} class="group-hover/link:translate-x-1 transition-transform" />
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group/link"
                >
                  <ExternalLink size={16} />
                  <span class="text-sm font-medium">Demo</span>
                  <ArrowRight size={12} class="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
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