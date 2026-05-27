"use client";

import { Check, Globe, Search, TimerIcon } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";

interface Props {
  addToast: any;
}

const Service = ({ addToast }: Props) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  // --- Logique Three.js Pure ---
  useEffect(() => {
    if (!canvasRef.current) return;

    const container = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particules
    const geometry = new THREE.BufferGeometry();
    const particlesCount = 700;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

    const material = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x0ea5e9, // Brand Sky 500
      transparent: true,
      opacity: 0.8,
    });

    const particlesMesh = new THREE.Points(geometry, material);
    scene.add(particlesMesh);
    camera.position.z = 3;

    // Interaction souris
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth - 0.5;
      mouseY = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Redimensionnement
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", handleResize);

    // Boucle d'animation sécurisée
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.001;
      particlesMesh.rotation.y +=
        0.05 * (mouseX - particlesMesh.rotation.y) * 0.1;
      particlesMesh.rotation.x +=
        0.05 * (mouseY - particlesMesh.rotation.x) * 0.1;
      renderer.render(scene, camera);
    };
    animate();

    // Nettoyage strict au démontage
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  // --- Scroll Reveal (Intersection Observer) ---
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-8 px-6 relative overflow-hidden">
      <div
        ref={canvasRef}
        className="absolute inset-0 -z-10 pointer-events-none"
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Gauche */}
        <div className="bg-blue-900/30 border border-blue-700 rounded-2xl p-8 relative">
          <p className="text-blue-400 font-bold mb-2">
            Résultat client réel : Des entreprises satisfaites
          </p>
          <h3 className="text-2xl font-bold mb-4 text-white">
            +12 Réservations obtenues
          </h3>
          <p className="text-gray-300 mb-8">
            En 7 jours après l'intégration du système de réservation WhatsApp
            par ScribelLab's.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-3xl font-bold text-green-400">48H</p>
              <p className="text-sm text-gray-400">Délai de livraison</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-3xl font-bold text-green-400">24/7</p>
              <p className="text-sm text-gray-400">Réservation automatique</p>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 bg-green-600 text-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-600 font-bold">
              SSL
            </div>
            <div>
              <p className="text-xs opacity-80">Sécurité maximale</p>
              <p className="font-mono font-bold">HTTPS / RGPD</p>
            </div>
          </div>
        </div>

        {/* Droit */}
        <div className="reveal">
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
            On ne fait pas des{" "}
            <span className="text-green-500">"sites web"</span>.
            <span> On remplit votre entreprise.</span>
          </h2>
          <p className="text-gray-300 mt-6 mb-8 text-lg">
            Le problème n'est pas votre site. Le problème c'est que vos clients
            ne peuvent pas vous joindre à 1h du matin ou réserver un appel en 2
            clics. ScribelLab's installe un système de réservation WhatsApp 24/7.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-green-500 rounded-full h-8 w-8 flex-shrink-0 flex items-center justify-center font-bold text-gray-900">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Bouton WhatsApp Direct
                </h3>
                <p className="text-gray-400">
                  Le client clique et arrive directement sur votre WhatsApp.
                  Zéro friction.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-green-500 rounded-full h-8 w-8 flex-shrink-0 flex items-center justify-center font-bold text-gray-900">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Réponse Automatique 24/7
                </h3>
                <p className="text-gray-400">
                  Vos clients reçoivent une réponse instantanée, avec photos et
                  tarifs, même en plein milieu de la nuit.
                </p>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/237671809395?text=Bonjour%20ScribelLab's,%20je%20veux%20la%20preuve%20que%20ça%20marche."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-lg text-center transition-colors"
          >
            Obtenir la preuve sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Service;
