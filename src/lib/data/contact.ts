import { Mail, Github, Linkedin, Twitter } from 'lucide-svelte';
import type { ContactMethod, FAQ } from '$lib/types';

export const contactMethods: ContactMethod[] = [
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

export const faqs: FAQ[] = [
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
