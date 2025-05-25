<script>
  import { Github, Twitter, Linkedin, Mail } from 'lucide-svelte';
</script>

<footer class="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
  <div class="container mx-auto px-4 py-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- About Section -->
      <div class="space-y-4">
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-sm">DB</span>
          </div>
          <span class="text-xl font-bold text-gray-900 dark:text-white">DevBlog</span>
        </div>        <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          A modern developer portfolio built with SvelteKit and Tailwind CSS. 
          Showcasing skills, projects, and expertise in web development.
        </p>
      </div>

      <!-- Quick Links -->
      <div class="space-y-4">
        <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide">
          Quick Links
        </h3>        <ul class="space-y-2">
          <li>
            <a href="/" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="/about" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">
              About
            </a>
          </li>
        </ul>
      </div>

      <!-- Social Links -->
      <div class="space-y-4">
        <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide">
          Connect
        </h3>
        <div class="flex space-x-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            class="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} class="text-gray-600 dark:text-gray-400" />
          </a>
          
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            class="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={20} class="text-gray-600 dark:text-gray-400" />
          </a>
          
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            class="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} class="text-gray-600 dark:text-gray-400" />
          </a>
          
          <a 
            href="mailto:contact@devblog.com"
            class="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            aria-label="Email"
          >
            <Mail size={20} class="text-gray-600 dark:text-gray-400" />
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
      <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p class="text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} DevBlog. All rights reserved.
        </p>
        <p class="text-gray-600 dark:text-gray-400 text-sm">
          Built with ❤️ using SvelteKit & Tailwind CSS
        </p>
      </div>
    </div>
  </div>
</footer>
