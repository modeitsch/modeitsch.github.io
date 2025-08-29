<script>
	import { page } from '$app/stores';
	import { theme, toggleTheme } from '../stores/theme.js';
	import { Moon, Sun, Menu, X, Home, User, Briefcase, Mail, BookOpen } from 'lucide-svelte';
	
	let mobileMenuOpen = false;
	$: currentPath = $page.url.pathname;
	
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<header class="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200/20 dark:border-gray-700/20">
	<nav class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-20">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<a href="/" class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
					MD
				</a>
			</div>
			
			<!-- Desktop Navigation -->
			<div class="hidden md:block">
				<div class="ml-10 flex items-center space-x-12">
					<a href="/" class="relative group flex items-center space-x-2 text-sm font-medium transition-all duration-300 {currentPath === '/' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}">
						<Home size={16} />
						<span>Home</span>
						<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300 {currentPath === '/' ? 'w-full' : ''}"></span>
					</a>
					<a href="/about" class="relative group flex items-center space-x-2 text-sm font-medium transition-all duration-300 {currentPath === '/about' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}">
						<User size={16} />
						<span>About</span>
						<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300 {currentPath === '/about' ? 'w-full' : ''}"></span>
					</a>
					<a href="/projects" class="relative group flex items-center space-x-2 text-sm font-medium transition-all duration-300 {currentPath === '/projects' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}">
						<Briefcase size={16} />
						<span>Projects</span>
						<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300 {currentPath === '/projects' ? 'w-full' : ''}"></span>
					</a>
					<a href="/blog" class="relative group flex items-center space-x-2 text-sm font-medium transition-all duration-300 {currentPath.startsWith('/blog') ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}">
						<BookOpen size={16} />
						<span>Blog</span>
						<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300 {currentPath.startsWith('/blog') ? 'w-full' : ''}"></span>
					</a>
					<a href="/contact" class="relative group flex items-center space-x-2 text-sm font-medium transition-all duration-300 {currentPath === '/contact' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}">
						<Mail size={16} />
						<span>Contact</span>
						<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300 {currentPath === '/contact' ? 'w-full' : ''}"></span>
					</a>
				</div>
			</div>
			
			<!-- Theme toggle and mobile menu button -->
			<div class="flex items-center space-x-4">
				<button
					on:click={toggleTheme}
					class="p-3 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 group"
					aria-label="Toggle theme"
				>
					{#if $theme === 'dark'}
						<Sun size={20} class="group-hover:text-yellow-500 transition-colors" />
					{:else}
						<Moon size={20} class="group-hover:text-blue-500 transition-colors" />
					{/if}
				</button>
				
				<!-- Mobile menu button -->
				<div class="md:hidden">
					<button
						on:click={toggleMobileMenu}
						class="p-3 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
						aria-label="Toggle mobile menu"
					>
						{#if mobileMenuOpen}
							<X size={20} />
						{:else}
							<Menu size={20} />
						{/if}
					</button>
				</div>
			</div>
		</div>
		
		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<div class="md:hidden transition-all duration-300">
				<div class="px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200/20 dark:border-gray-700/20">
					<a
						href="/"
						class="flex items-center space-x-3 px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 {currentPath === '/' ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}"
						on:click={() => mobileMenuOpen = false}
					>
						<Home size={18} />
						<span>Home</span>
					</a>
					<a
						href="/about"
						class="flex items-center space-x-3 px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 {currentPath === '/about' ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}"
						on:click={() => mobileMenuOpen = false}
					>
						<User size={18} />
						<span>About</span>
					</a>
					<a
						href="/projects"
						class="flex items-center space-x-3 px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 {currentPath === '/projects' ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}"
						on:click={() => mobileMenuOpen = false}
					>
						<Briefcase size={18} />
						<span>Projects</span>
					</a>
					<a
						href="/blog"
						class="flex items-center space-x-3 px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 {currentPath.startsWith('/blog') ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}"
						on:click={() => mobileMenuOpen = false}
					>
						<BookOpen size={18} />
						<span>Blog</span>
					</a>
					<a
						href="/contact"
						class="flex items-center space-x-3 px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 {currentPath === '/contact' ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}"
						on:click={() => mobileMenuOpen = false}
					>
						<Mail size={18} />
						<span>Contact</span>
					</a>
				</div>
			</div>
		{/if}
	</nav>
</header>
