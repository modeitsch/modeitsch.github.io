<script>
	import { ExternalLink, Github, Calendar, Tag } from 'lucide-svelte';
	import ThreeBackground from '$lib/components/ThreeBackground.svelte';
	import ScrollAnimations from '$lib/components/ScrollAnimations.svelte';
	import ProjectCard3D from '$lib/components/ProjectCard3D.svelte';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';

	const projects = [
		{
			title: "Modern Portfolio Website",
			description: "A fully responsive, modern portfolio website built with SvelteKit and TailwindCSS. Features dark/light mode, smooth animations, and optimized performance.",
			tech: ["SvelteKit", "TailwindCSS", "GitHub Pages"],
			github: "https://github.com/modeitsch/sveltekit-blog",
			demo: "https://modeitsch.github.io/sveltekit-blog"
		},
		{
			title: "React Hebrew Docs",
			description: "Contributing to the Hebrew translation of React.js documentation, making React more accessible to Hebrew-speaking developers.",
			tech: ["React", "i18n", "Documentation"],
			github: "https://github.com/modeitsch/he.reactjs.org",
			demo: "https://github.com/modeitsch/he.reactjs.org"
		},
		{
			title: "Web Components Library",
			description: "A collection of reusable web components built with modern JavaScript, focusing on accessibility and performance.",
			tech: ["JavaScript", "Web Components", "A11y"],
			github: "https://github.com/modeitsch",
			demo: "https://github.com/modeitsch"
		},
		{
			title: "API Dashboard",
			description: "A comprehensive dashboard for monitoring and managing APIs with real-time analytics and performance metrics.",
			tech: ["Node.js", "Express", "MongoDB"],
			github: "https://github.com/modeitsch",
			demo: "https://github.com/modeitsch"
		},
		{
			title: "E-commerce Platform",
			description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
			tech: ["React", "Node.js", "Stripe"],
			github: "https://github.com/modeitsch",
			demo: "https://github.com/modeitsch"
		},
		{
			title: "DevTools Extension",
			description: "Browser extension for developers with productivity tools, code snippets, and debugging utilities.",
			tech: ["JavaScript", "Chrome API", "CSS"],
			github: "https://github.com/modeitsch",
			demo: "https://github.com/modeitsch"
		}
	];
</script>

<svelte:head>
	<title>Projects - Moshe Deitsch</title>
	<meta name="description" content="A showcase of my development projects and contributions" />
</svelte:head>

<!-- Scroll Progress -->
<ScrollProgress />

<!-- 3D Background -->
<ThreeBackground />

<!-- Scroll Animations -->
<ScrollAnimations />

<div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900">
	<!-- Hero Section -->
	<section class="hero-section relative py-20 lg:py-32">
		<div class="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-blue-400/5 dark:to-purple-400/5"></div>
		<div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
			<div class="text-center max-w-4xl mx-auto">
				<h1 class="section-title text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
					<span class="hero-title">My</span> <span class="hero-title bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
				</h1>
				<p class="hero-subtitle text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed reveal-text">
					A collection of web applications, tools, and experiments I've built with passion and precision.
				</p>
				<div class="hero-buttons flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
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
				{#each projects as project, index}
					<ProjectCard3D {project} {index} />
				{/each}
			</div>
		</div>
	</section>

	<!-- Call to Action -->
	<section class="py-20">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="animate-card bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-center text-white card-hover glass">
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