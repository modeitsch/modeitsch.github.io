import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Store for sound enabled state
export const soundEnabled = writable(true);

// Audio context for Web Audio API (more efficient than loading files)
let audioContext = null;

function getAudioContext() {
  if (browser && !audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
}

// Generate a subtle click sound using Web Audio API
export function playHoverSound() {
  if (!browser) return;

  let enabled = true;
  soundEnabled.subscribe(v => enabled = v)();

  if (!enabled) return;

  try {
    const ctx = getAudioContext();
    if (!ctx || ctx.state === 'suspended') return;

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    // Subtle, soft click sound
    oscillator.frequency.setValueAtTime(1200, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.03);
    oscillator.type = 'sine';

    // Very quiet - subtle polish
    gainNode.gain.setValueAtTime(0.03, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.05);
  } catch (e) {
    // Silently fail - sound is optional polish
  }
}

// Play a slightly different sound for clicks
export function playClickSound() {
  if (!browser) return;

  let enabled = true;
  soundEnabled.subscribe(v => enabled = v)();

  if (!enabled) return;

  try {
    const ctx = getAudioContext();
    if (!ctx || ctx.state === 'suspended') return;

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    // Slightly lower, more satisfying click
    oscillator.frequency.setValueAtTime(800, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.05);
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.05, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.08);
  } catch (e) {
    // Silently fail
  }
}

// Initialize audio context on first user interaction
export function initAudio() {
  if (!browser) return;

  const ctx = getAudioContext();
  if (ctx && ctx.state === 'suspended') {
    ctx.resume();
  }
}
