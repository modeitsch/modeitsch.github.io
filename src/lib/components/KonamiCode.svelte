<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  // Konami Code: Up, Up, Down, Down, Left, Right, Left, Right, B, A
  const KONAMI_CODE = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ];

  let inputSequence = [];
  let showEasterEgg = false;
  let confetti = [];

  onMount(() => {
    if (!browser) return;

    function handleKeyDown(e) {
      inputSequence.push(e.code);

      // Keep only the last N keys (where N is the Konami code length)
      if (inputSequence.length > KONAMI_CODE.length) {
        inputSequence.shift();
      }

      // Check if the sequence matches
      if (inputSequence.length === KONAMI_CODE.length &&
          inputSequence.every((key, i) => key === KONAMI_CODE[i])) {
        triggerEasterEgg();
        inputSequence = [];
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  function triggerEasterEgg() {
    showEasterEgg = true;
    createConfetti();

    // Auto-hide after animation
    setTimeout(() => {
      showEasterEgg = false;
      confetti = [];
    }, 5000);
  }

  function createConfetti() {
    const colors = ['#2563eb', '#7c3aed', '#ec4899', '#10b981', '#f59e0b', '#ef4444'];
    confetti = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 8 + Math.random() * 8,
      rotation: Math.random() * 360
    }));
  }

  function closeEasterEgg() {
    showEasterEgg = false;
    confetti = [];
  }
</script>

{#if showEasterEgg}
  <!-- Confetti -->
  <div class="fixed inset-0 pointer-events-none z-50 overflow-hidden">
    {#each confetti as particle (particle.id)}
      <div
        class="confetti"
        style="
          left: {particle.x}%;
          animation-delay: {particle.delay}s;
          animation-duration: {particle.duration}s;
          background-color: {particle.color};
          width: {particle.size}px;
          height: {particle.size}px;
          transform: rotate({particle.rotation}deg);
        "
      ></div>
    {/each}
  </div>

  <!-- Easter Egg Modal -->
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in"
    on:click={closeEasterEgg}
    on:keydown={(e) => e.key === 'Escape' && closeEasterEgg()}
    role="dialog"
    aria-modal="true"
    tabindex="-1"
  >
    <div
      class="easter-egg-card bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600 p-1 rounded-3xl shadow-2xl max-w-md mx-4 animate-bounce-in"
      on:click|stopPropagation
      on:keydown|stopPropagation
      role="document"
    >
      <div class="bg-white dark:bg-gray-900 rounded-3xl p-8 text-center">
        <div class="text-6xl mb-4 animate-wiggle">
          🎮
        </div>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Achievement Unlocked!
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          You found the secret Konami code!
        </p>
        <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 mb-6">
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">The code:</p>
          <div class="flex flex-wrap justify-center gap-1">
            {#each ['↑', '↑', '↓', '↓', '←', '→', '←', '→', 'B', 'A'] as key}
              <span class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm font-mono text-gray-700 dark:text-gray-300">
                {key}
              </span>
            {/each}
          </div>
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Fun fact: I really do code while eating breakfast! ☕️💻
        </p>
        <button
          class="btn-primary"
          on:click={closeEasterEgg}
        >
          Awesome!
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  .confetti {
    position: absolute;
    top: -20px;
    border-radius: 2px;
    animation: fall linear forwards;
  }

  @keyframes fall {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(100vh) rotate(720deg);
      opacity: 0;
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .animate-fade-in {
    animation: fade-in 0.3s ease-out;
  }

  @keyframes bounce-in {
    0% {
      opacity: 0;
      transform: scale(0.3);
    }
    50% {
      transform: scale(1.05);
    }
    70% {
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .animate-bounce-in {
    animation: bounce-in 0.6s ease-out;
  }

  @keyframes wiggle {
    0%, 100% {
      transform: rotate(-3deg);
    }
    50% {
      transform: rotate(3deg);
    }
  }

  .animate-wiggle {
    animation: wiggle 0.5s ease-in-out infinite;
  }
</style>
