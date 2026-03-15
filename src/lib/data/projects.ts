import type { Project } from '$lib/types';

// Featured projects for home page
export const featuredProjects: Project[] = [
  {
    title: "Modern Portfolio Website",
    description: "A responsive portfolio built with SvelteKit, Tailwind CSS, and modern web technologies. Features multi-theme support, GitHub integration, and markdown blog.",
    tech: ["SvelteKit", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/modeitsch/modeitsch.github.io",
    demo: "https://modeitsch.github.io"
  },
  {
    title: "React Hebrew Docs",
    description: "Contributing to the Hebrew translation of React.js documentation, making React more accessible to Hebrew-speaking developers.",
    tech: ["React", "i18n", "Documentation"],
    github: "https://github.com/modeitsch/he.reactjs.org",
    demo: "https://github.com/modeitsch/he.reactjs.org"
  }
];

// All projects for projects page
export const allProjects: Project[] = [
  {
    title: "Modern Portfolio Website",
    description: "A fully responsive, modern portfolio website built with SvelteKit and TailwindCSS. Features multi-theme system with 4 selectable themes, GitHub activity feed, markdown blog, and smooth animations.",
    tech: ["SvelteKit", "TailwindCSS", "GitHub Pages"],
    github: "https://github.com/modeitsch/modeitsch.github.io",
    demo: "https://modeitsch.github.io"
  },
  {
    title: "React Hebrew Docs",
    description: "Contributing to the Hebrew translation of React.js documentation, making React more accessible to Hebrew-speaking developers.",
    tech: ["React", "i18n", "Documentation"],
    github: "https://github.com/modeitsch/he.reactjs.org",
    demo: "https://github.com/modeitsch/he.reactjs.org"
  }
];
