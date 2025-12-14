<script lang="ts">
  import { onMount } from 'svelte';
  import { Github, GitCommit, GitPullRequest, Star, GitBranch, ExternalLink } from 'lucide-svelte';
  import { github, githubEvents, githubLoading, githubError } from '$lib/stores/github';
  import type { GitHubEvent } from '$lib/stores/github';

  let mounted = false;

  onMount(() => {
    mounted = true;
    github.fetchEvents();
  });

  function getEventIcon(type: string) {
    switch (type) {
      case 'PushEvent':
        return GitCommit;
      case 'PullRequestEvent':
        return GitPullRequest;
      case 'WatchEvent':
        return Star;
      case 'CreateEvent':
        return GitBranch;
      default:
        return Github;
    }
  }

  function getEventDescription(event: GitHubEvent): string {
    const repoName = event.repo.name.split('/')[1] || event.repo.name;

    switch (event.type) {
      case 'PushEvent':
        const commits = event.payload.commits?.length || 0;
        return `Pushed ${commits} commit${commits !== 1 ? 's' : ''} to ${repoName}`;
      case 'PullRequestEvent':
        return `${event.payload.action} a PR in ${repoName}`;
      case 'WatchEvent':
        return `Starred ${repoName}`;
      case 'CreateEvent':
        return `Created ${event.payload.ref_type} in ${repoName}`;
      case 'ForkEvent':
        return `Forked ${repoName}`;
      case 'IssuesEvent':
        return `${event.payload.action} an issue in ${repoName}`;
      default:
        return `Activity in ${repoName}`;
    }
  }

  function formatTime(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();

    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString();
  }

  function getRepoUrl(event: GitHubEvent): string {
    return `https://github.com/${event.repo.name}`;
  }
</script>

<div class="github-activity">
  <div class="flex items-center justify-between mb-6">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
      <Github size={20} class="text-gray-700 dark:text-gray-300" />
      Recent Activity
    </h3>
    <a
      href="https://github.com/modeitsch"
      target="_blank"
      rel="noopener noreferrer"
      class="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
    >
      View Profile
      <ExternalLink size={14} />
    </a>
  </div>

  {#if $githubLoading && !$githubEvents.length}
    <div class="space-y-3">
      {#each Array(5) as _}
        <div class="animate-pulse flex items-start gap-3 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <div class="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          <div class="flex-1 space-y-2">
            <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
          </div>
        </div>
      {/each}
    </div>
  {:else if $githubError}
    <div class="text-center py-8 text-gray-500 dark:text-gray-400">
      <Github size={40} class="mx-auto mb-3 opacity-50" />
      <p>Unable to load activity</p>
      <button
        on:click={() => github.fetchEvents()}
        class="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
      >
        Try again
      </button>
    </div>
  {:else if $githubEvents.length > 0}
    <div class="space-y-2">
      {#each $githubEvents.slice(0, 6) as event (event.id)}
        <a
          href={getRepoUrl(event)}
          target="_blank"
          rel="noopener noreferrer"
          class="activity-item flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
        >
          <div class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
            <svelte:component this={getEventIcon(event.type)} size={16} />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm text-gray-700 dark:text-gray-300 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {getEventDescription(event)}
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {formatTime(event.created_at)}
            </p>
          </div>
          <ExternalLink size={14} class="flex-shrink-0 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      {/each}
    </div>
  {:else}
    <div class="text-center py-8 text-gray-500 dark:text-gray-400">
      <p>No recent activity</p>
    </div>
  {/if}
</div>

<style>
  .activity-item:hover {
    transform: translateX(4px);
    transition: transform 0.2s ease;
  }
</style>
