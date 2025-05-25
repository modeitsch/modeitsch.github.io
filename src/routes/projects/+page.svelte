<script>
	import { ExternalLink, Github, Calendar, Tag } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Projects - Moshe Deitsch</title>
	<meta name="description" content="A showcase of my development projects and contributions" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900">
	<!-- Hero Section -->
	<section class="relative py-20 lg:py-32">
		<div class="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-blue-400/5 dark:to-purple-400/5"></div>
		<div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
			<div class="text-center max-w-4xl mx-auto">
				<h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
					My <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
				</h1>
				<p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
					A collection of web applications, tools, and experiments I've built with passion and precision.
				</p>
				<div class="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
					<span class="flex items-center space-x-2 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full">
						<Tag size={16} />
						<span>Web Development</span>
					</span>
					<span class="flex items-center space-x-2 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full">
						<Tag size={16} />
						<span>Open Source</span>
					</span>
					<span class="flex items-center space-x-2 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full">
						<Tag size={16} />
						<span>Full Stack</span>
					</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Projects Grid -->
	<section class="py-20">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				
				<!-- Featured Project -->
				<div class="md:col-span-2 lg:col-span-3 group">
					<div class="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/50 dark:border-gray-700/50">
						<div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
						<div class="relative p-8 lg:p-12">
							<div class="flex items-start justify-between mb-6">
								<div>
									<span class="inline-block px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 rounded-full mb-4">
										✨ Featured Project
									</span>
									<h3 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3">
										Modern Portfolio Website
									</h3>
									<p class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
										A fully responsive, modern portfolio website built with SvelteKit and TailwindCSS. Features dark/light mode, smooth animations, and optimized performance. Deployed on GitHub Pages with automated CI/CD pipeline.
									</p>
								</div>
							</div>
							
							<div class="flex flex-wrap gap-2 mb-6">
								<span class="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">SvelteKit</span>
								<span class="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full">TailwindCSS</span>
								<span class="px-3 py-1 text-sm bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full">GitHub Pages</span>
								<span class="px-3 py-1 text-sm bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full">Responsive</span>
							</div>
							
							<div class="flex items-center space-x-4">
								<a href="https://github.com/modeitsch/sveltekit-blog" class="inline-flex items-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 group/btn">
									<Github size={20} />
									<span class="font-medium">View Code</span>
									<ExternalLink size={16} class="group-hover/btn:translate-x-0.5 transition-transform" />
								</a>
								<a href="https://modeitsch.github.io/sveltekit-blog" class="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group/btn">
									<span class="font-medium">Live Demo</span>
									<ExternalLink size={16} class="group-hover/btn:translate-x-0.5 transition-transform" />
								</a>
							</div>
						</div>
					</div>
				</div>

				<!-- Project Cards -->
				<div class="group">
					<div class="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/50 dark:border-gray-700/50 h-full">
						<div class="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
						<div class="relative p-6">
							<div class="flex items-center space-x-3 mb-4">
								<div class="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
									R
								</div>
								<div>
									<h3 class="text-xl font-bold text-gray-900 dark:text-white">React Hebrew Docs</h3>
									<p class="text-sm text-gray-500 dark:text-gray-400">Open Source Contribution</p>
								</div>
							</div>
							
							<p class="text-gray-600 dark:text-gray-300 mb-6">
								Contributing to the Hebrew translation of React.js documentation, making React more accessible to Hebrew-speaking developers.
							</p>
							
							<div class="flex flex-wrap gap-2 mb-6">
								<span class="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded">React</span>
								<span class="px-2 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded">i18n</span>
								<span class="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded">Documentation</span>
							</div>
							
							<div class="flex items-center justify-between">
								<a href="https://github.com/modeitsch/he.reactjs.org" class="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
									<Github size={16} />
									<span class="text-sm font-medium">View on GitHub</span>
								</a>
								<span class="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
									<Calendar size={12} />
									<span>2023</span>
								</span>
							</div>
						</div>
					</div>
				</div>

				<div class="group">
					<div class="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/50 dark:border-gray-700/50 h-full">
						<div class="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
						<div class="relative p-6">
							<div class="flex items-center space-x-3 mb-4">
								<div class="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
									W
								</div>
								<div>
									<h3 class="text-xl font-bold text-gray-900 dark:text-white">Web Components</h3>
									<p class="text-sm text-gray-500 dark:text-gray-400">Frontend Library</p>
								</div>
							</div>
							
							<p class="text-gray-600 dark:text-gray-300 mb-6">
								A collection of reusable web components built with modern JavaScript, focusing on accessibility and performance.
							</p>
							
							<div class="flex flex-wrap gap-2 mb-6">
								<span class="px-2 py-1 text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded">JavaScript</span>
								<span class="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded">Web Components</span>
								<span class="px-2 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded">A11y</span>
							</div>
									<div class="flex items-center justify-between">
								<span class="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300">
									<Github size={16} />
									<span class="text-sm font-medium">Coming Soon</span>
								</span>
								<span class="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
									<Calendar size={12} />
									<span>2024</span>
								</span>
							</div>
						</div>
					</div>
				</div>

				<div class="group">
					<div class="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/50 dark:border-gray-700/50 h-full">
						<div class="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
						<div class="relative p-6">
							<div class="flex items-center space-x-3 mb-4">
								<div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
									A
								</div>
								<div>
									<h3 class="text-xl font-bold text-gray-900 dark:text-white">API Dashboard</h3>
									<p class="text-sm text-gray-500 dark:text-gray-400">Full Stack App</p>
								</div>
							</div>
							
							<p class="text-gray-600 dark:text-gray-300 mb-6">
								A comprehensive dashboard for monitoring and managing APIs with real-time analytics and performance metrics.
							</p>
							
							<div class="flex flex-wrap gap-2 mb-6">
								<span class="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded">Node.js</span>
								<span class="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded">Express</span>
								<span class="px-2 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded">MongoDB</span>
							</div>
									<div class="flex items-center justify-between">
								<span class="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300">
									<Github size={16} />
									<span class="text-sm font-medium">Private Repo</span>
								</span>
								<span class="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
									<Calendar size={12} />
									<span>2024</span>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Call to Action -->
	<section class="py-20">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-center text-white">
				<h2 class="text-3xl md:text-4xl font-bold mb-4">
					Let's Build Something Amazing Together
				</h2>
				<p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
					Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
				</p>
				<a href="/contact" class="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all duration-300 font-medium group">
					<span>Get In Touch</span>
					<ExternalLink size={16} class="group-hover:translate-x-0.5 transition-transform" />
				</a>
			</div>
		</div>
	</section>
</div>
