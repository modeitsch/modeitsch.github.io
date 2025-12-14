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
    // Use theme-aware colors
    const colors = ['var(--color-accent)', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];
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
  <div class="confetti-container">
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
    class="modal-overlay"
    on:click={closeEasterEgg}
    on:keydown={(e) => e.key === 'Escape' && closeEasterEgg()}
    role="dialog"
    aria-modal="true"
    tabindex="-1"
  >
    <div
      class="easter-egg-card"
      on:click|stopPropagation
      on:keydown|stopPropagation
      role="document"
    >
      <div class="card-inner">
        <div class="emoji animate-wiggle">
          🎮
        </div>
        <h2 class="title">Achievement Unlocked!</h2>
        <p class="subtitle">You found the secret Konami code!</p>
        <div class="code-display">
          <p class="code-label">The code:</p>
          <div class="code-keys">
            {#each ['↑', '↑', '↓', '↓', '←', '→', '←', '→', 'B', 'A'] as key}
              <span class="kbd">{key}</span>
            {/each}
          </div>
        </div>
        <p class="fun-fact">
          Fun fact: I really do code while eating breakfast!
        </p>
        <button class="btn-primary" on:click={closeEasterEgg}>
          Awesome!
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  .confetti-container {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 50;
    overflow: hidden;
  }

  .confetti {
    position: absolute;
    top: -20px;
    border-radius: 2px;
    animation: fall linear forwards;
  }

  .modal-overlay {
    position: fixed;
    inset: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
    animation: fade-in 0.3s ease-out;
  }

  .easter-egg-card {
    background: var(--color-accent);
    padding: 3px;
    border-radius: 1.5rem;
    box-shadow: 0 25px 50px rgba(var(--color-shadow, 0, 0, 0), 0.25);
    max-width: 24rem;
    margin: 1rem;
    animation: bounce-in 0.6s ease-out;
  }

  .card-inner {
    background: var(--color-surface);
    border-radius: 1.375rem;
    padding: 2rem;
    text-align: center;
  }

  .emoji {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-text-primary);
    font-family: var(--font-heading);
    margin-bottom: 0.5rem;
  }

  .subtitle {
    color: var(--color-text-secondary);
    margin-bottom: 1.5rem;
  }

  .code-display {
    background: var(--color-background-secondary);
    border-radius: 0.75rem;
    padding: 1rem;
    margin-bottom: 1.5rem;
  }

  .code-label {
    font-size: 0.875rem;
    color: var(--color-text-muted);
    margin-bottom: 0.75rem;
  }

  .code-keys {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.25rem;
  }

  .kbd {
    padding: 0.25rem 0.5rem;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 0.25rem;
    font-size: 0.875rem;
    font-family: var(--font-mono);
    color: var(--color-text-secondary);
  }

  .fun-fact {
    font-size: 0.875rem;
    color: var(--color-text-muted);
    margin-bottom: 1.5rem;
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
    from { opacity: 0; }
    to { opacity: 1; }
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
