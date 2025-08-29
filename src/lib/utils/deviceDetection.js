/**
 * Device detection and performance optimization utilities
 */

export function getDeviceInfo() {
  if (typeof window === 'undefined') return null;

  const userAgent = navigator.userAgent;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  const isTablet = /iPad|Android(?!.*Mobile)/i.test(userAgent);
  const isLowEnd = detectLowEndDevice();

  return {
    isMobile,
    isTablet,
    isDesktop: !isMobile && !isTablet,
    isLowEnd,
    supportsWebGL: checkWebGLSupport(),
    memoryInfo: getMemoryInfo(),
    connection: getConnectionInfo(),
    batterySaving: isBatterySaving(),
  };
}

function detectLowEndDevice() {
  if (typeof window === 'undefined') return false;

  // Check for low-end indicators
  const hardwareConcurrency = navigator.hardwareConcurrency || 1;
  const memory = navigator.deviceMemory || 1;
  
  // Consider device low-end if:
  // - Less than 2 CPU cores
  // - Less than 2GB RAM
  // - Specific low-end user agents
  const isLowEndUA = /Android.*(?:SM-J|SM-A1|SM-G3|Nokia|HUAWEI Y)/i.test(navigator.userAgent);
  
  return hardwareConcurrency < 2 || memory < 2 || isLowEndUA;
}

function checkWebGLSupport() {
  if (typeof window === 'undefined') return false;

  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) return false;

    // Check for additional WebGL capabilities
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    if (debugInfo) {
      const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      // Blacklist known problematic renderers
      if (/SwiftShader|Microsoft Basic Render Driver/i.test(renderer)) {
        return false;
      }
    }

    return true;
  } catch (e) {
    return false;
  }
}

function getMemoryInfo() {
  if (typeof window === 'undefined') return null;
  
  return {
    deviceMemory: navigator.deviceMemory || null,
    // Get memory pressure if available (Chrome only)
    memoryPressure: navigator.memory ? {
      usedJSHeapSize: navigator.memory.usedJSHeapSize,
      totalJSHeapSize: navigator.memory.totalJSHeapSize,
      jsHeapSizeLimit: navigator.memory.jsHeapSizeLimit,
    } : null
  };
}

function getConnectionInfo() {
  if (typeof window === 'undefined') return null;
  
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  
  if (!connection) return null;

  return {
    effectiveType: connection.effectiveType, // '4g', '3g', '2g', 'slow-2g'
    downlink: connection.downlink, // Mbps
    rtt: connection.rtt, // milliseconds
    saveData: connection.saveData, // boolean
  };
}

function isBatterySaving() {
  if (typeof window === 'undefined') return false;
  
  // Check for battery API (deprecated but still useful)
  return new Promise((resolve) => {
    if ('getBattery' in navigator) {
      navigator.getBattery().then(battery => {
        resolve(battery.level < 0.2); // Low battery
      });
    } else {
      resolve(false);
    }
  });
}

export function getPerformanceRecommendations(deviceInfo) {
  if (!deviceInfo) return { quality: 'high', particles: 1000 };

  const recommendations = {
    quality: 'high',
    particles: 1000,
    enableAnimations: true,
    enableParticles: true,
    frameRate: 60,
  };

  // Reduce quality for mobile devices
  if (deviceInfo.isMobile) {
    recommendations.quality = 'medium';
    recommendations.particles = 500;
    recommendations.frameRate = 30;
  }

  // Further reduce for low-end devices
  if (deviceInfo.isLowEnd) {
    recommendations.quality = 'low';
    recommendations.particles = 200;
    recommendations.enableAnimations = false;
    recommendations.frameRate = 24;
  }

  // Reduce based on connection
  if (deviceInfo.connection) {
    if (deviceInfo.connection.saveData || deviceInfo.connection.effectiveType === 'slow-2g') {
      recommendations.quality = 'low';
      recommendations.enableParticles = false;
    }
  }

  return recommendations;
}