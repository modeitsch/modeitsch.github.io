<script>
  import { Mail, Github, Twitter, Linkedin, Download } from 'lucide-svelte';
  
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
</script>

<svelte:head>
  <title>About - DevBlog</title>
  <meta name="description" content="Learn more about me, my experience, and my passion for web development." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span class="gradient-text">Me</span>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            I'm a passionate full-stack developer with over 4 years of experience creating 
            modern web applications and user experiences.
          </p>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            I love working with cutting-edge technologies and turning complex problems 
            into simple, beautiful solutions. When I'm not coding, you can find me 
            exploring new technologies, contributing to open source, or sharing knowledge 
            with the developer community.
          </p>
          
          <div class="flex flex-wrap gap-4">
            <a href="mailto:contact@devblog.com" class="btn-primary inline-flex items-center space-x-2">
              <Mail size={20} />
              <span>Get In Touch</span>
            </a>
            <button class="btn-secondary inline-flex items-center space-x-2">
              <Download size={20} />
              <span>Download CV</span>
            </button>
          </div>
        </div>
        
        <div class="relative">
          <div class="w-80 h-80 mx-auto bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
            <div class="w-72 h-72 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <span class="text-6xl font-bold text-gray-600 dark:text-gray-400">👨‍💻</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Skills Section -->
<section class="py-16">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Technologies & Skills
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Tools and technologies I work with regularly
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-3">
        {#each technologies as tech}
          <span class="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 font-medium hover:border-primary-300 dark:hover:border-primary-600 transition-colors">
            {tech}
          </span>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Experience Section -->
<section class="bg-gray-50 dark:bg-gray-800 py-16">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Experience
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          My professional journey in web development
        </p>
      </div>

      <div class="space-y-8">
        {#each experiences as experience}
          <div class="card p-6">
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
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Let's Connect
      </h2>
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Find me on social media or send me a message
      </p>
      
      <div class="flex justify-center space-x-6">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          class="p-4 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group"
          aria-label="GitHub"
        >
          <Github size={24} class="text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
        </a>
        
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          class="p-4 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group"
          aria-label="Twitter"
        >
          <Twitter size={24} class="text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
        </a>
        
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          class="p-4 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} class="text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
        </a>
        
        <a 
          href="mailto:contact@devblog.com"
          class="p-4 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group"
          aria-label="Email"
        >
          <Mail size={24} class="text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
        </a>
      </div>
    </div>
  </div>
</section>
