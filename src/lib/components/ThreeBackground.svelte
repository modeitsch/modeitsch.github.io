<script>
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';

  let canvas;
  let scene, camera, renderer;
  let geometry, material, mesh;
  let particles, particleGeometry, particleMaterial;
  let animationId;
  let mouseX = 0, mouseY = 0;

  onMount(async () => {
    if (!browser) return;
    
    const THREE = await import('three');
    initThree(THREE);
    animate();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
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
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

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

    // Add particles
    particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    particleMaterial = new THREE.PointsMaterial({
      color: 0x3b82f6,
      size: 0.02,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    
    particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

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

<canvas bind:this={canvas} class="three-canvas"></canvas>

<style>
  .three-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
  }
</style>