import { Code, Palette, Zap } from 'lucide-svelte';
import type { Skill } from '$lib/types';

// Skills for home page
export const homeSkills: Skill[] = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Building modern web applications with cutting-edge technologies and best practices."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful, intuitive user interfaces that provide exceptional user experiences."
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimizing applications for speed, scalability, and exceptional performance."
  }
];

// Skills for about page (using emoji icons)
export const aboutSkills: Skill[] = [
  {
    icon: () => '🎨',
    title: "Frontend Development",
    description: "Creating beautiful, responsive user interfaces with modern frameworks and libraries."
  },
  {
    icon: () => '⚙️',
    title: "Backend Development",
    description: "Building robust APIs and server-side applications with scalable architecture."
  },
  {
    icon: () => '🚀',
    title: "DevOps & Deployment",
    description: "Implementing CI/CD pipelines and managing cloud infrastructure for optimal performance."
  }
];
