// components/BackgroundCanvas.tsx
"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function BackgroundCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cette partie ne s'exécute QUE dans le navigateur
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // ... (Ton code particles, geometry, etc. reste identique ici)

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
}
