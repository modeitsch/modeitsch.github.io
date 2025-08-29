<div class="three-fallback" aria-hidden="true">
  <!-- Static gradient background as fallback -->
  <div class="fallback-gradient"></div>
  <div class="fallback-shapes">
    <div class="shape shape-1"></div>
    <div class="shape shape-2"></div>
    <div class="shape shape-3"></div>
  </div>
</div>

<style>
  .three-fallback {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;
  }

  .fallback-gradient {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 25% 25%, rgba(37, 99, 235, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%);
    opacity: 0.6;
  }

  .shape {
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(147, 51, 234, 0.1));
    filter: blur(1px);
  }

  .shape-1 {
    width: 200px;
    height: 200px;
    top: 20%;
    left: 10%;
    animation: float-fallback 8s ease-in-out infinite;
  }

  .shape-2 {
    width: 150px;
    height: 150px;
    top: 60%;
    right: 15%;
    animation: float-fallback 6s ease-in-out infinite reverse;
  }

  .shape-3 {
    width: 100px;
    height: 100px;
    bottom: 20%;
    left: 60%;
    animation: float-fallback 10s ease-in-out infinite;
  }

  @keyframes float-fallback {
    0%, 100% {
      transform: translateY(0px) scale(1);
      opacity: 0.3;
    }
    50% {
      transform: translateY(-20px) scale(1.05);
      opacity: 0.5;
    }
  }

  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .shape {
      animation: none !important;
    }
  }
</style>