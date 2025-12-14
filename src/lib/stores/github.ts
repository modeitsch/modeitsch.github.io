import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

const GITHUB_USERNAME = 'modeitsch';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
}

export interface GitHubEvent {
  id: string;
  type: string;
  repo: {
    name: string;
    url: string;
  };
  payload: {
    commits?: Array<{
      sha: string;
      message: string;
    }>;
    action?: string;
    ref?: string;
    ref_type?: string;
  };
  created_at: string;
}

interface GitHubState {
  stats: GitHubStats | null;
  events: GitHubEvent[];
  loading: boolean;
  error: string | null;
  lastFetched: number | null;
}

const initialState: GitHubState = {
  stats: null,
  events: [],
  loading: false,
  error: null,
  lastFetched: null
};

function createGitHubStore() {
  const { subscribe, set, update } = writable<GitHubState>(initialState);

  return {
    subscribe,

    async fetchStats() {
      if (!browser) return;

      update(state => {
        // Check cache
        if (state.stats && state.lastFetched && Date.now() - state.lastFetched < CACHE_DURATION) {
          return state;
        }
        return { ...state, loading: true, error: null };
      });

      try {
        // Fetch user stats
        const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!userResponse.ok) throw new Error('Failed to fetch user data');
        const userData = await userResponse.json();

        // Fetch repos to calculate total stars
        const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`);
        if (!reposResponse.ok) throw new Error('Failed to fetch repos');
        const reposData = await reposResponse.json();

        const totalStars = reposData.reduce((acc: number, repo: { stargazers_count: number }) =>
          acc + repo.stargazers_count, 0
        );

        const stats: GitHubStats = {
          publicRepos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          totalStars
        };

        update(state => ({
          ...state,
          stats,
          loading: false,
          lastFetched: Date.now()
        }));
      } catch (error) {
        update(state => ({
          ...state,
          loading: false,
          error: error instanceof Error ? error.message : 'Failed to fetch GitHub stats'
        }));
      }
    },

    async fetchEvents() {
      if (!browser) return;

      update(state => ({ ...state, loading: true, error: null }));

      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=10`);
        if (!response.ok) throw new Error('Failed to fetch events');
        const events = await response.json();

        update(state => ({
          ...state,
          events,
          loading: false
        }));
      } catch (error) {
        update(state => ({
          ...state,
          loading: false,
          error: error instanceof Error ? error.message : 'Failed to fetch events'
        }));
      }
    },

    reset() {
      set(initialState);
    }
  };
}

export const github = createGitHubStore();

// Derived stores for easy access
export const githubStats = derived(github, $github => $github.stats);
export const githubEvents = derived(github, $github => $github.events);
export const githubLoading = derived(github, $github => $github.loading);
export const githubError = derived(github, $github => $github.error);
