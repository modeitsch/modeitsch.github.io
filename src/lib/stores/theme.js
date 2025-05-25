import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Initialize theme from localStorage or default to 'light'
const defaultTheme = 'light';
const initialTheme = browser ? localStorage.getItem('theme') ?? defaultTheme : defaultTheme;

export const theme = writable(initialTheme);

// Subscribe to theme changes and update localStorage and document class
theme.subscribe((value) => {
  if (browser) {
    localStorage.setItem('theme', value);
    if (value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
});

export function toggleTheme() {
  theme.update(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
}
