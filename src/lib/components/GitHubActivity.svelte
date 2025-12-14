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
  <div class="activity-header">
    <h3 class="activity-title">
      <Github size={20} />
      Recent Activity
    </h3>
    <a
      href="https://github.com/modeitsch"
      target="_blank"
      rel="noopener noreferrer"
      class="profile-link"
    >
      View Profile
      <ExternalLink size={14} />
    </a>
  </div>

  {#if $githubLoading && !$githubEvents.length}
    <div class="loading-list">
      {#each Array(5) as _}
        <div class="loading-item">
          <div class="loading-avatar"></div>
          <div class="loading-content">
            <div class="loading-line long"></div>
            <div class="loading-line short"></div>
          </div>
        </div>
      {/each}
    </div>
  {:else if $githubError}
    <div class="error-state">
      <Github size={40} />
      <p>Unable to load activity</p>
      <button on:click={() => github.fetchEvents()} class="retry-button">
        Try again
      </button>
    </div>
  {:else if $githubEvents.length > 0}
    <div class="activity-list">
      {#each $githubEvents.slice(0, 6) as event (event.id)}
        <a
          href={getRepoUrl(event)}
          target="_blank"
          rel="noopener noreferrer"
          class="activity-item"
        >
          <div class="event-icon">
            <svelte:component this={getEventIcon(event.type)} size={16} />
          </div>
          <div class="event-content">
            <p class="event-description">
              {getEventDescription(event)}
            </p>
            <p class="event-time">
              {formatTime(event.created_at)}
            </p>
          </div>
          <ExternalLink size={14} class="external-icon" />
        </a>
      {/each}
    </div>
  {:else}
    <div class="empty-state">
      <p>No recent activity</p>
    </div>
  {/if}
</div>

<style>
  .github-activity {
    width: 100%;
  }

  .activity-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }

  .activity-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--color-text-primary);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .profile-link {
    font-size: 0.875rem;
    color: var(--color-accent);
    display: flex;
    align-items: center;
    gap: 0.25rem;
    text-decoration: none;
    transition: color 150ms ease;
  }

  .profile-link:hover {
    color: var(--color-accent-hover);
    text-decoration: underline;
  }

  .activity-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .activity-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0.75rem;
    border-radius: 0.5rem;
    background: var(--color-background-secondary);
    text-decoration: none;
    transition: all 150ms ease;
  }

  .activity-item:hover {
    background: var(--color-surface);
    transform: translateX(4px);
  }

  .event-icon {
    flex-shrink: 0;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--color-surface);
    color: var(--color-accent);
  }

  .event-content {
    flex: 1;
    min-width: 0;
  }

  .event-description {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
    transition: color 150ms ease;
  }

  .activity-item:hover .event-description {
    color: var(--color-accent);
  }

  .event-time {
    font-size: 0.75rem;
    color: var(--color-text-muted);
    margin: 0.25rem 0 0;
  }

  .activity-item :global(.external-icon) {
    flex-shrink: 0;
    color: var(--color-text-muted);
    opacity: 0;
    transition: opacity 150ms ease;
  }

  .activity-item:hover :global(.external-icon) {
    opacity: 1;
  }

  .loading-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .loading-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0.75rem;
    background: var(--color-background-secondary);
    border-radius: 0.5rem;
  }

  .loading-avatar {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: var(--color-surface);
    animation: pulse 1.5s ease-in-out infinite;
  }

  .loading-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .loading-line {
    height: 0.875rem;
    background: var(--color-surface);
    border-radius: 0.25rem;
    animation: pulse 1.5s ease-in-out infinite;
  }

  .loading-line.long {
    width: 75%;
  }

  .loading-line.short {
    width: 25%;
    height: 0.75rem;
  }

  .error-state,
  .empty-state {
    text-align: center;
    padding: 2rem 1rem;
    color: var(--color-text-muted);
  }

  .error-state :global(svg) {
    margin: 0 auto 0.75rem;
    opacity: 0.5;
  }

  .retry-button {
    margin-top: 0.5rem;
    background: none;
    border: none;
    font-size: 0.875rem;
    color: var(--color-accent);
    cursor: pointer;
    text-decoration: underline;
  }

  .retry-button:hover {
    text-decoration: none;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .loading-avatar,
    .loading-line {
      animation: none;
    }
    .activity-item:hover {
      transform: none;
    }
  }
</style>
