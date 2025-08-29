<script>
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';
  import ThreeBackgroundFallback from './ThreeBackgroundFallback.svelte';
  import LoadingSpinner from './LoadingSpinner.svelte';
  import { getDeviceInfo, getPerformanceRecommendations } from '../utils/deviceDetection.js';

  let canvas;
  let scene, camera, renderer;
  let geometry, material, mesh;
  let particles, particleGeometry, particleMaterial;
  let animationId;
  let mouseX = 0, mouseY = 0;
  let threeFailed = false;
  let showFallback = false;
  let isLoading = false;
  let isReady = false;
  let performanceSettings = {
    particles: 1000,
    quality: 'high',
    enableAnimations: true
  };

  onMount(async () => {
    if (!browser) return;
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      showFallback = true;
      return;
    }

    try {
      isLoading = true;
      
      // Get device info and performance recommendations
      const deviceInfo = getDeviceInfo();
      const recommendations = getPerformanceRecommendations(deviceInfo);
      performanceSettings = recommendations;
      
      // Skip 3D on very low-end devices
      if (deviceInfo.isLowEnd && !deviceInfo.supportsWebGL) {
        throw new Error('Device not suitable for 3D');
      }
      
      // Check for WebGL support
      if (!window.WebGLRenderingContext || !deviceInfo.supportsWebGL) {
        throw new Error('WebGL not supported');
      }

      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        throw new Error('WebGL context not available');
      }
      
      const THREE = await import('three');
      
      // Wait for canvas to be available in DOM
      await new Promise(resolve => setTimeout(resolve, 50));
      
      // Double-check canvas is available
      if (!canvas) {
        throw new Error('Canvas element not mounted');
      }
      
      initThree(THREE);
      animate();
      window.addEventListener('resize', handleResize);
      window.addEventListener('mousemove', handleMouseMove);
      
      // Add a small delay to ensure smooth loading
      setTimeout(() => {
        isLoading = false;
        isReady = true;
      }, 500);
    } catch (error) {
      console.warn('3D background failed to initialize, using fallback:', error);
      isLoading = false;
      threeFailed = true;
      showFallback = true;
    }
  });

  onDestroy(() => {
    if (animationId) cancelAnimationFrame(animationId);
    if (renderer) renderer.dispose();
    if (browser) {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    }
  });

  function initThree(THREE) {
    // Check if canvas is available
    if (!canvas) {
      throw new Error('Canvas element not available');
    }

    // Scene setup
    scene = new THREE.Scene();
    
    // Camera setup
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    renderer = new THREE.WebGLRenderer({ 
      canvas, 
      alpha: true,
      antialias: performanceSettings.quality === 'high'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, performanceSettings.quality === 'high' ? 2 : 1));

    // Create floating geometric shape
    geometry = new THREE.IcosahedronGeometry(1.5, 1);
    material = new THREE.MeshPhongMaterial({
      color: 0x3b82f6,
      wireframe: true,
      emissive: 0x3b82f6,
      emissiveIntensity: 0.2,
      shininess: 100
    });
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Add particles based on performance settings
    if (performanceSettings.enableAnimations) {
      particleGeometry = new THREE.BufferGeometry();
      const particleCount = performanceSettings.particles || 1000;
      const positions = new Float32Array(particleCount * 3);
      
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 10;
        positions[i + 1] = (Math.random() - 0.5) * 10;
        positions[i + 2] = (Math.random() - 0.5) * 10;
      }
      
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      particleMaterial = new THREE.PointsMaterial({
        color: 0x3b82f6,
        size: performanceSettings.quality === 'high' ? 0.02 : 0.01,
        transparent: true,
        opacity: performanceSettings.quality === 'low' ? 0.3 : 0.6,
        blending: THREE.AdditiveBlending
      });
      
      particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);
    }

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0x3b82f6, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
  }

  function animate() {
    animationId = requestAnimationFrame(animate);

    // Rotate main mesh
    if (mesh) {
      mesh.rotation.x += 0.005;
      mesh.rotation.y += 0.005;
      
      // Mouse interaction
      mesh.rotation.x += mouseY * 0.0001;
      mesh.rotation.y += mouseX * 0.0001;
    }

    // Rotate particles
    if (particles) {
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.001;
    }

    renderer.render(scene, camera);
  }

  function handleResize() {
    if (!browser || !camera || !renderer) return;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function handleMouseMove(event) {
    mouseX = (event.clientX - window.innerWidth / 2) / 100;
    mouseY = (event.clientY - window.innerHeight / 2) / 100;
  }
</script>

{#if showFallback}
  <ThreeBackgroundFallback />
{:else}
  {#if isLoading}
    <div class="three-loading">
      <LoadingSpinner size="medium" message="Initializing 3D background..." />
    </div>
  {/if}
  <canvas bind:this={canvas} class="three-canvas" aria-hidden="true" class:ready={isReady}></canvas>
{/if}

<style>
  .three-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .three-canvas.ready {
    opacity: 1;
  }

  .three-loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    z-index: 0;
    background: rgba(0, 0, 0, 0.02);
    backdrop-filter: blur(1px);
  }

  :global(html.dark) .three-loading {
    background: rgba(0, 0, 0, 0.1);
  }
</style>