import type { Project } from '$lib/types';

// Featured projects for home page
export const featuredProjects: Project[] = [
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

// All projects for projects page
export const allProjects: Project[] = [
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
