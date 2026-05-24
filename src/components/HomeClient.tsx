"use client"

import dynamic from "next/dynamic";
import BookingSystem from '@/components/contacts/Booking';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Headers from '@/components/Headers';
import Service from '@/components/Service';
import { Paperclip } from 'lucide-react';
import React, { useRef, useState, useEffect } from 'react'

// Chargement dynamique pour alléger le rendu initial
const HeroCanvas = dynamic(() => import("@/components/HeroText"), {
  ssr: false,
  loading: () => <div className="h-screen w-full bg-slate-950" />, 
});

const BackgroundCanvas = dynamic(
  () => import("@/components/BackgroundCanvas"),
  { ssr: false }
);

const HomeClient = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  const [isProcessing, setIsProcessing] = useState(false);
  const [toasts, setToasts] = useState<{ id: number; message: string }[]>([]);
  const [amount, setAmount] = useState("Système de réservation automatique");
  const [dashboardOffset, setDashboardOffset] = useState(0);

  // Animation au scroll
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

  // Animation de flottaison du dashboard
  useEffect(() => {
    let frameId: number;
    let direction = 1;

    const animateDashboard = () => {
      setDashboardOffset((prev) => {
        const next = prev + 0.15 * direction;
        if (next > 10 || next < -10) {
          direction *= -1;
        }
        return next;
      });
      frameId = requestAnimationFrame(animateDashboard);
    };

    frameId = requestAnimationFrame(animateDashboard);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Gestion des notifications
  const addToast = (message: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  // Gestion du clic vers WhatsApp avec animation simulée
  const handleWhatsAppRedirect = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isProcessing) {
      e.preventDefault();
      return;
    }
    setIsProcessing(true);
    addToast("Préparation de votre demande...");
    
    // Le délai permet de voir le toast avant la redirection vers WhatsApp
    setTimeout(() => {
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <>
      <BackgroundCanvas />
      <div ref={canvasRef} id="canvas-container"></div>

      {/* Toasts */}
      <div
        id="toast-container"
        className="fixed top-24 right-5 z-50 flex flex-col gap-2 pointer-events-none"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto rounded-2xl border border-white/10 bg-black/80 px-4 py-3 text-sm text-white shadow-lg shadow-black/30 backdrop-blur-xl"
          >
            {toast.message}
          </div>
        ))}
      </div>

      <Headers addToast={addToast} />

      {/* Hero Section */}
      <main className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <HeroCanvas addToast={addToast} />

            {/* Hero Dashboard Visual */}
            <div
              className="relative lg:h-150 w-full flex items-center justify-center reveal delay-200"
              style={{ transform: `translateY(${dashboardOffset}px)` }}
            >
              <div className="absolute inset-0 bg-brand-500/20 blur-[100px] rounded-full"></div>

              <div className="relative -mr-4 w-full max-w-md">
                {/* Carte Projet livré */}
                <div className="absolute -left-40 top-4 w-72 glass-panel p-2 mr-20 rounded-2xl border-l-4 border-l-green-500 animate-float z-20 hidden lg:block">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-xs text-gray-400">Projet livré</p>
                      <h3 className="font-semibold text-white">E-commerce Luxe</h3>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                      <i className="fas fa-laptop-code text-gray-300 text-xs"></i>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-white">+ 143%</p>
                    <p className="text-xs text-green-400">hausse du CA en 3 mois</p>
                  </div>
                </div>

                {/* Interface principale */}
                <div className="glass-panel rounded-3xl p-6 relative z-10 w-full mx-auto border border-white/10">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-semibold text-lg">Votre site sur mesure</h3>
                  </div>

                  <div className="mb-6 relative">
                    <label className="text-xs text-gray-400 block mb-2">Service requis</label>
                    <input
                      type="text"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-sm font-bold text-white focus:outline-none focus:border-brand-500 transition-all"
                    />
                  </div>

                  {/* Correction du lien WhatsApp */}
                  <a
                    href="https://wa.me/237671809395?text=Bonjour%20EurekaIQ,%20je%20veux%20mon%20AUDIT%20GRATUIT%20pour%20mon%20Entreprise."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsAppRedirect}
                    className={`w-full ${isProcessing ? 'bg-green-700 opacity-60' : 'bg-green-600 hover:bg-green-500'} text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2`}
                  >
                    <span>{isProcessing ? "Redirection..." : "Demander mon audit gratuit"}</span>
                    <Paperclip size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Service addToast={addToast} />
      <BookingSystem />
      <CTA addToast={addToast} />
      <Footer />
    </>
  );
};

export default HomeClient;