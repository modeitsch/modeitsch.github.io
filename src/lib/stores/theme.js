import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

// Theme definitions with colors and fonts
export const THEMES = {
  'clean-modern': {
    name: 'Clean Modern',
    description: 'Light editorial elegance',
    isDark: false,
    colors: {
      background: '#FAF9F6',
      backgroundSecondary: '#F0EDE8',
      textPrimary: '#36454F',
      textSecondary: '#5A6A75',
      textMuted: '#8A9AA5',
      accent: '#E2725B',
      accentHover: '#D4614A',
      surface: '#FFFFFF',
      surfaceElevated: '#FFFFFF',
      border: 'rgba(54, 69, 79, 0.12)',
      borderHover: 'rgba(54, 69, 79, 0.25)',
      shadowColor: '54, 69, 79'
    },
    fonts: {
      heading: "'Playfair Display', Georgia, serif",
      body: "'Inter', system-ui, sans-serif",
      mono: "'JetBrains Mono', monospace"
    }
  },
  'clean-modern-dark': {
    name: 'Clean Modern Dark',
    description: 'Dark editorial elegance',
    isDark: true,
    colors: {
      background: '#1A1A1A',
      backgroundSecondary: '#242424',
      textPrimary: '#F5F5F5',
      textSecondary: '#B8B8B8',
      textMuted: '#808080',
      accent: '#E2725B',
      accentHover: '#F08A74',
      surface: '#242424',
      surfaceElevated: '#2E2E2E',
      border: 'rgba(255, 255, 255, 0.1)',
      borderHover: 'rgba(255, 255, 255, 0.2)',
      shadowColor: '0, 0, 0'
    },
    fonts: {
      heading: "'Playfair Display', Georgia, serif",
      body: "'Inter', system-ui, sans-serif",
      mono: "'JetBrains Mono', monospace"
    }
  },
  'retro-terminal': {
    name: 'Retro Terminal',
    description: '80s hacker aesthetic',
    isDark: true,
    colors: {
      background: '#0D0208',
      backgroundSecondary: '#1A0F12',
      textPrimary: '#33FF33',
      textSecondary: '#22CC22',
      textMuted: '#1A991A',
      accent: '#33FF33',
      accentHover: '#55FF55',
      surface: '#0D0208',
      surfaceElevated: '#1A0F12',
      border: 'rgba(51, 255, 51, 0.25)',
      borderHover: 'rgba(51, 255, 51, 0.5)',
      shadowColor: '51, 255, 51'
    },
    fonts: {
      heading: "'JetBrains Mono', monospace",
      body: "'JetBrains Mono', monospace",
      mono: "'JetBrains Mono', monospace"
    }
  },
  'midnight': {
    name: 'Midnight',
    description: 'Cozy night coding vibes',
    isDark: true,
    colors: {
      background: '#0F172A',
      backgroundSecondary: '#1E293B',
      textPrimary: '#E2E8F0',
      textSecondary: '#94A3B8',
      textMuted: '#64748B',
      accent: '#8B5CF6',
      accentHover: '#A78BFA',
      surface: '#1E293B',
      surfaceElevated: '#334155',
      border: 'rgba(139, 92, 246, 0.2)',
      borderHover: 'rgba(139, 92, 246, 0.4)',
      shadowColor: '139, 92, 246'
    },
    fonts: {
      heading: "'Inter', system-ui, sans-serif",
      body: "'Inter', system-ui, sans-serif",
      mono: "'JetBrains Mono', monospace"
    }
  }
};

const DEFAULT_THEME = 'clean-modern';
const STORAGE_KEY = 'portfolio-theme';

// Get initial theme from localStorage or system preference
function getInitialTheme() {
  if (!browser) return DEFAULT_THEME;

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && THEMES[stored]) {
    return stored;
  }

  // Check system preference for dark mode
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'clean-modern-dark';
  }

  return DEFAULT_THEME;
}

// Create the theme store
export const theme = writable(getInitialTheme());

// Derived store for current theme config
export const currentTheme = derived(theme, ($theme) => THEMES[$theme] || THEMES[DEFAULT_THEME]);

// Derived store for checking if current theme is dark
export const isDarkTheme = derived(theme, ($theme) => {
  const config = THEMES[$theme];
  return config ? config.isDark : false;
});

// Apply theme to document
function applyTheme(themeKey) {
  if (!browser) return;

  const config = THEMES[themeKey];
  if (!config) return;

  const root = document.documentElement;

  // Remove all theme classes
  Object.keys(THEMES).forEach(t => root.classList.remove(`theme-${t}`));
  root.classList.remove('dark', 'light');

  // Add current theme class
  root.classList.add(`theme-${themeKey}`);

  // Add dark/light class for compatibility
  root.classList.add(config.isDark ? 'dark' : 'light');

  // Set CSS custom properties for colors
  Object.entries(config.colors).forEach(([key, val]) => {
    // Convert camelCase to kebab-case for CSS variables
    const cssVar = `--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
    root.style.setProperty(cssVar, val);
  });

  // Set CSS custom properties for fonts
  Object.entries(config.fonts).forEach(([key, val]) => {
    root.style.setProperty(`--font-${key}`, val);
  });

  // Store preference
  localStorage.setItem(STORAGE_KEY, themeKey);
}

// Subscribe to theme changes
theme.subscribe((value) => {
  applyTheme(value);
});

// Set a specific theme
export function setTheme(newTheme) {
  if (THEMES[newTheme]) {
    theme.set(newTheme);
  }
}

// Cycle through themes
export function cycleTheme() {
  const themeKeys = Object.keys(THEMES);
  theme.update(current => {
    const currentIndex = themeKeys.indexOf(current);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    return themeKeys[nextIndex];
  });
}

// Toggle between light and dark (for Clean Modern theme pair)
export function toggleDarkMode() {
  theme.update(current => {
    if (current === 'clean-modern') {
      return 'clean-modern-dark';
    } else if (current === 'clean-modern-dark') {
      return 'clean-modern';
    }
    // For other themes, just return current (they're already dark)
    return current;
  });
}

// Legacy toggle function for compatibility
export function toggleTheme() {
  cycleTheme();
}
