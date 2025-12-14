import type { ComponentType, SvelteComponent } from 'svelte';

// Skill type for skill cards
export interface Skill {
  icon: ComponentType<SvelteComponent> | (() => string);
  title: string;
  description: string;
}

// Project type for project cards
export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
}

// Experience type for about page
export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

// Contact method type for contact page
export interface ContactMethod {
  href: string;
  icon: ComponentType<SvelteComponent>;
  title: string;
  description: string;
  gradient: string;
}

// FAQ type for contact page
export interface FAQ {
  question: string;
  answer: string;
}
