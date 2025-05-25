<script>
	import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, MessageSquare } from 'lucide-svelte';
	
	let formData = {
		name: '',
		email: '',
		subject: '',
		message: ''
	};
	
	let isSubmitting = false;
	let submitStatus = '';
	
	async function handleSubmit(event) {
		event.preventDefault();
		isSubmitting = true;
		
		// Simulate form submission
		setTimeout(() => {
			isSubmitting = false;
			submitStatus = 'success';
			formData = { name: '', email: '', subject: '', message: '' };
			
			setTimeout(() => {
				submitStatus = '';
			}, 5000);
		}, 2000);
	}
</script>

<svelte:head>
	<title>Contact - Moshe Deitsch</title>
	<meta name="description" content="Get in touch with me for collaborations, opportunities, or just to say hello" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900">
	<!-- Hero Section -->
	<section class="relative py-20 lg:py-32">
		<div class="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 dark:from-purple-400/5 dark:to-blue-400/5"></div>
		<div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
			<div class="text-center max-w-4xl mx-auto">
				<h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
					Let's <span class="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Connect</span>
				</h1>
				<p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
					I'm always open to discussing new opportunities, collaborations, or just having a friendly chat about technology and development.
				</p>
				<div class="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
					<span class="flex items-center space-x-2 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full">
						<MessageSquare size={16} />
						<span>Quick Response</span>
					</span>
					<span class="flex items-center space-x-2 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full">
						<Mail size={16} />
						<span>Professional</span>
					</span>
					<span class="flex items-center space-x-2 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full">
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
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
				
				<!-- Contact Information -->
				<div class="space-y-8">
					<div>
						<h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
							Get In Touch
						</h2>
						<p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
							Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you. I typically respond within 24 hours.
						</p>
					</div>

					<!-- Contact Methods -->
					<div class="space-y-6">
						<a href="mailto:moshedeitsch@outlook.com" class="flex items-center space-x-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200/50 dark:border-gray-700/50">
							<div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
								<Mail size={20} />
							</div>
							<div>
								<h3 class="font-semibold text-gray-900 dark:text-white">Email</h3>
								<p class="text-gray-600 dark:text-gray-300">moshedeitsch@outlook.com</p>
							</div>
						</a>

						<a href="https://linkedin.com/in/moshe-deitsch" class="flex items-center space-x-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200/50 dark:border-gray-700/50">
							<div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
								<Linkedin size={20} />
							</div>
							<div>
								<h3 class="font-semibold text-gray-900 dark:text-white">LinkedIn</h3>
								<p class="text-gray-600 dark:text-gray-300">Connect professionally</p>
							</div>
						</a>

						<a href="https://github.com/modeitsch" class="flex items-center space-x-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200/50 dark:border-gray-700/50">
							<div class="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
								<Github size={20} />
							</div>
							<div>
								<h3 class="font-semibold text-gray-900 dark:text-white">GitHub</h3>
								<p class="text-gray-600 dark:text-gray-300">Check out my code</p>
							</div>
						</a>

						<a href="https://twitter.com/modeitsch" class="flex items-center space-x-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200/50 dark:border-gray-700/50">
							<div class="w-12 h-12 bg-gradient-to-r from-sky-400 to-sky-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
								<Twitter size={20} />
							</div>
							<div>
								<h3 class="font-semibold text-gray-900 dark:text-white">Twitter</h3>
								<p class="text-gray-600 dark:text-gray-300">Follow my journey</p>
							</div>
						</a>

						<div class="flex items-center space-x-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
							<div class="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white">
								<MapPin size={20} />
							</div>
							<div>
								<h3 class="font-semibold text-gray-900 dark:text-white">Location</h3>
								<p class="text-gray-600 dark:text-gray-300">Israel (UTC+3)</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Contact Form -->
				<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200/50 dark:border-gray-700/50">
					<h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send me a message</h3>
					
					{#if submitStatus === 'success'}
						<div class="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
							<p class="text-green-800 dark:text-green-300 font-medium">Thank you! Your message has been sent successfully.</p>
						</div>
					{/if}

					<form on:submit={handleSubmit} class="space-y-6">
						<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
							<div>
								<label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
								<input
									type="text"
									id="name"
									bind:value={formData.name}
									required
									class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
									placeholder="Your name"
								/>
							</div>
							<div>
								<label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
								<input
									type="email"
									id="email"
									bind:value={formData.email}
									required
									class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
									placeholder="your@email.com"
								/>
							</div>
						</div>
						
						<div>
							<label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
							<input
								type="text"
								id="subject"
								bind:value={formData.subject}
								required
								class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
								placeholder="What's this about?"
							/>
						</div>
						
						<div>
							<label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
							<textarea
								id="message"
								bind:value={formData.message}
								required
								rows="5"
								class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 resize-vertical"
								placeholder="Tell me about your project or just say hello..."
							></textarea>
						</div>
						
						<button
							type="submit"
							disabled={isSubmitting}
							class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed group"
						>
							{#if isSubmitting}
								<div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
								<span>Sending...</span>
							{:else}
								<Send size={18} class="group-hover:translate-x-0.5 transition-transform" />
								<span>Send Message</span>
							{/if}
						</button>
					</form>
				</div>
			</div>
		</div>
	</section>

	<!-- FAQ Section -->
	<section class="py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center max-w-3xl mx-auto">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
					Frequently Asked Questions
				</h2>
				
				<div class="space-y-6 text-left">
					<div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
						<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">What kind of projects do you work on?</h3>
						<p class="text-gray-600 dark:text-gray-300">I specialize in modern web development, including frontend applications, full-stack solutions, and API development. I work with technologies like SvelteKit, React, Node.js, and more.</p>
					</div>
					
					<div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
						<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do you prefer to communicate?</h3>
						<p class="text-gray-600 dark:text-gray-300">Email is usually the best way to reach me initially. For ongoing projects, I'm flexible with communication methods including video calls, Slack, or other platforms you prefer.</p>
					</div>
					
					<div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
						<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Are you available for freelance work?</h3>
						<p class="text-gray-600 dark:text-gray-300">Yes! I'm always interested in exciting projects. Feel free to reach out with details about your project, timeline, and requirements.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
