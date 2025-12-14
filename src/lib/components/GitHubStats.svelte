<script lang="ts">
  import { onMount } from 'svelte';
  import { github, githubStats, githubLoading } from '$lib/stores/github';

  export let showStars = false;

  onMount(() => {
    github.fetchStats();
  });
</script>

<div class="flex items-center justify-center lg:justify-start space-x-8 mt-12 text-sm text-gray-500 dark:text-gray-400">
  <div class="text-center stat-item">
    {#if $githubLoading && !$githubStats}
      <div class="text-2xl font-bold text-gray-900 dark:text-white">
        <span class="inline-block w-8 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></span>
      </div>
    {:else}
      <div class="text-2xl font-bold text-gray-900 dark:text-white">
        {$githubStats?.publicRepos ?? '—'}
      </div>
    {/if}
    <div>Repositories</div>
  </div>

  <div class="text-center stat-item">
    {#if $githubLoading && !$githubStats}
      <div class="text-2xl font-bold text-gray-900 dark:text-white">
        <span class="inline-block w-8 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></span>
      </div>
    {:else}
      <div class="text-2xl font-bold text-gray-900 dark:text-white">
        {$githubStats?.followers ?? '—'}
      </div>
    {/if}
    <div>Followers</div>
  </div>

  {#if showStars}
    <div class="text-center stat-item">
      {#if $githubLoading && !$githubStats}
        <div class="text-2xl font-bold text-gray-900 dark:text-white">
          <span class="inline-block w-8 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></span>
        </div>
      {:else}
        <div class="text-2xl font-bold text-gray-900 dark:text-white">
          {$githubStats?.totalStars ?? '—'}
        </div>
      {/if}
      <div>Stars</div>
    </div>
  {:else}
    <div class="text-center stat-item">
      <div class="text-2xl font-bold text-gray-900 dark:text-white">6+</div>
      <div>Years Coding</div>
    </div>
  {/if}
</div>
