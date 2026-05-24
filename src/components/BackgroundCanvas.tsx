"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function BackgroundCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Initialisation de la Scène, Caméra et Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Optimisation pour les écrans haute densité (Retina, 4K) sans sacrifier les performances
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // ==========================================
    // EXEMPLE DE GÉOMÉTRIE (À remplacer par votre code de particules)
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    for (let i = 0; i < 500; i++) {
      vertices.push((Math.random() - 0.5) * 10); // X
      vertices.push((Math.random() - 0.5) * 10); // Y
      vertices.push((Math.random() - 0.5) * 10); // Z
    }
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3),
    );

    const material = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x0ea5e9, // Couleur brand-500 (Sky blue)
      transparent: true,
      opacity: 0.4,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);
    // ==========================================

    // 2. Gestion dynamique du redimensionnement de l'écran
    const handleResize = () => {
      if (!container) return;

      // Mise à jour de la caméra
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      // Mise à jour du renderer
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // 3. Boucle d'animation sécurisée
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Animation subtile de vos éléments
      points.rotation.y += 0.001;
      points.rotation.x += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    // 4. Nettoyage complet (Anti-fuite de mémoire)
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Libération de la mémoire GPU
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={mountRef} className="fixed inset-0 -z-10 pointer-events-none" />
  );
}
