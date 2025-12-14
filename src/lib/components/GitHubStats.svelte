<script lang="ts">
  import { onMount } from 'svelte';
  import { github, githubStats, githubLoading } from '$lib/stores/github';

  export let showStars = false;

  onMount(() => {
    github.fetchStats();
  });
</script>

<div class="stats-container">
  <div class="stat-item">
    {#if $githubLoading && !$githubStats}
      <div class="stat-value">
        <span class="loading-placeholder"></span>
      </div>
    {:else}
      <div class="stat-value">
        {$githubStats?.publicRepos ?? '—'}
      </div>
    {/if}
    <div class="stat-label">Repositories</div>
  </div>

  <div class="stat-item">
    {#if $githubLoading && !$githubStats}
      <div class="stat-value">
        <span class="loading-placeholder"></span>
      </div>
    {:else}
      <div class="stat-value">
        {$githubStats?.followers ?? '—'}
      </div>
    {/if}
    <div class="stat-label">Followers</div>
  </div>

  {#if showStars}
    <div class="stat-item">
      {#if $githubLoading && !$githubStats}
        <div class="stat-value">
          <span class="loading-placeholder"></span>
        </div>
      {:else}
        <div class="stat-value">
          {$githubStats?.totalStars ?? '—'}
        </div>
      {/if}
      <div class="stat-label">Stars</div>
    </div>
  {:else}
    <div class="stat-item">
      <div class="stat-value">6+</div>
      <div class="stat-label">Years Coding</div>
    </div>
  {/if}
</div>

<style>
  .stats-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 3rem;
    font-size: 0.875rem;
    color: var(--color-text-muted);
  }

  @media (min-width: 1024px) {
    .stats-container {
      justify-content: flex-start;
    }
  }

  .stat-item {
    text-align: center;
  }

  .stat-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-text-primary);
    font-family: var(--font-heading);
  }

  .stat-label {
    color: var(--color-text-muted);
  }

  .loading-placeholder {
    display: inline-block;
    width: 2rem;
    height: 1.5rem;
    background: var(--color-background-secondary);
    border-radius: 0.25rem;
    animation: pulse 1.5s ease-in-out infinite;
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
    .loading-placeholder {
      animation: none;
    }
  }
</style>
