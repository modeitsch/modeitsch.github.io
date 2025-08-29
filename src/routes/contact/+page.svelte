<script>
	import { Mail, MapPin, Github, Linkedin, Twitter, Send, MessageSquare } from 'lucide-svelte';
	import ThreeBackground from '$lib/components/ThreeBackground.svelte';
	import ScrollAnimations from '$lib/components/ScrollAnimations.svelte';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';

	const contactMethods = [
		{
			href: "mailto:moshedeitsch@outlook.com",
			icon: Mail,
			title: "Email",
			description: "moshedeitsch [at] outlook [dot] com",
			gradient: "from-blue-500 to-blue-600"
		},
		{
			href: "https://linkedin.com/in/moshe-deitsch",
			icon: Linkedin,
			title: "LinkedIn",
			description: "Connect professionally",
			gradient: "from-blue-600 to-blue-700"
		},
		{
			href: "https://github.com/modeitsch",
			icon: Github,
			title: "GitHub",
			description: "Check out my code",
			gradient: "from-gray-700 to-gray-900"
		},
		{
			href: "https://twitter.com/modeitsch",
			icon: Twitter,
			title: "Twitter",
			description: "Follow my journey",
			gradient: "from-sky-400 to-sky-500"
		}
	];

	const faqs = [
		{
			question: "What kind of projects do you work on?",
			answer: "I specialize in modern web development, including frontend applications, full-stack solutions, and API development. I work with technologies like SvelteKit, React, Node.js, and more."
		},
		{
			question: "How do you prefer to communicate?",
			answer: "Email is usually the best way to reach me initially. For ongoing projects, I'm flexible with communication methods including video calls, Slack, or other platforms you prefer."
		},
		{
			question: "Are you available for freelance work?",
			answer: "Yes! I'm always interested in exciting projects. Feel free to reach out with details about your project, timeline, and requirements."
		}
	];
</script>

<svelte:head>
	<title>Contact - Moshe Deitsch</title>
	<meta name="description" content="Get in touch with me for collaborations, opportunities, or just to say hello" />
</svelte:head>

<!-- Scroll Progress -->
<ScrollProgress />

<!-- 3D Background -->
<ThreeBackground />

<!-- Scroll Animations -->
<ScrollAnimations />

<div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900">
	<!-- Hero Section -->
	<section class="hero-section relative py-20 lg:py-32">
		<div class="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 dark:from-purple-400/5 dark:to-blue-400/5"></div>
		<div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
			<div class="text-center max-w-4xl mx-auto">
				<h1 class="section-title text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
					<span class="hero-title">Let's</span> <span class="hero-title bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Connect</span>
				</h1>
				<p class="hero-subtitle text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed reveal-text">
					I'm always open to discussing new opportunities, collaborations, or just having a friendly chat about technology and development.
				</p>
				<div class="hero-buttons flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
					<span class="stat-item flex items-center space-x-2 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
						<MessageSquare size={16} />
						<span>Quick Response</span>
					</span>
					<span class="stat-item flex items-center space-x-2 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
						<Mail size={16} />
						<span>Professional</span>
					</span>
					<span class="stat-item flex items-center space-x-2 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
						<Send size={16} />
						<span>Open to Opportunities</span>
					</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Contact Content -->
	<section class="py-20">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="max-w-4xl mx-auto">
				
				<!-- Contact Information -->
				<div class="space-y-8">
					<div class="text-center">
						<h2 class="section-title text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
							Get In Touch
						</h2>
						<p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12 reveal-text">
							Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you. Choose your preferred way to connect below.
						</p>
					</div>

					<!-- Contact Methods -->
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						{#each contactMethods as method, index}
							<a 
								href={method.href} 
								class="animate-card flex items-center space-x-4 p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm card-hover interactive-glow"
								style="animation-delay: {index * 150}ms;"
							>
								<div class="w-16 h-16 bg-gradient-to-r {method.gradient} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
									<svelte:component this={method.icon} size={24} />
								</div>
								<div>
									<h3 class="font-semibold text-gray-900 dark:text-white text-lg">{method.title}</h3>
									<p class="text-gray-600 dark:text-gray-300">{method.description}</p>
								</div>
							</a>
						{/each}
					</div>

					<!-- Location Card -->
					<div class="mt-8">
						<div class="animate-card flex items-center justify-center space-x-4 p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 shadow-lg border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm max-w-md mx-auto" style="animation-delay: 600ms;">
							<div class="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white">
								<MapPin size={24} />
							</div>
							<div class="text-center">
								<h3 class="font-semibold text-gray-900 dark:text-white text-lg">Location</h3>
								<p class="text-gray-600 dark:text-gray-300">Israel (UTC+3)</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- FAQ Section -->
	<section class="py-20 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 backdrop-blur-sm">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center max-w-3xl mx-auto">
				<h2 class="section-title text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
					Frequently Asked <span class="gradient-text">Questions</span>
				</h2>
				
				<div class="space-y-6 text-left">
					{#each faqs as faq, index}
						<div class="animate-card bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm card-hover" style="animation-delay: {index * 150}ms;">
							<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{faq.question}</h3>
							<p class="text-gray-600 dark:text-gray-300">{faq.answer}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
</div>