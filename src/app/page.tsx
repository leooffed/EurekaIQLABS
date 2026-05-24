"use client"

import dynamic from "next/dynamic";

import BookingSystem from '@/components/contacts/Booking';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Headers from '@/components/Headers';
import HeroText from '@/components/HeroText';
import Service from '@/components/Service';
import { Paperclip } from 'lucide-react';
import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

const HeroCanvas = dynamic(() => import("@/components/HeroText"), {
  ssr: false,
  loading: () => <div className="h-screen w-full bg-slate-950" />, // Optionnel : un placeholder pour éviter les sauts de mise en page
});

const BackgroundCanvas = dynamic(
  () => import("@/components/BackgroundCanvas"),
  {
    ssr: false,
  },
);

// const BackgroundCanvas = dynamic(
//   () => import("@/components/BackgroundCanvas"),
//   {
//     ssr: false,
//   },
// );

const Page = () => {
  // --- Refs ---
  const canvasRef = useRef<HTMLDivElement>(null);

  // --- States ---
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [toasts, setToasts] = useState<{ id: number; message: string }[]>([]);
  const [amount, setAmount] = useState("Syteme de reservation automatique");
  const [dashboardOffset, setDashboardOffset] = useState(0);



  // --- 2. Scroll Reveal (Intersection Observer) ---
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

  // --- 3. UI Interactions (Toasts & Payment) ---
  const addToast = (message: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
      
    }, 3000);
  };

  const processPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSent(true);
      addToast(`Payment of $${amount} sent successfully!`);
      setTimeout(() => {
        setIsSent(false);
        setAmount("0.00");
      }, 2000);
    }, 1500);
  };

  return (
    <>
      <BackgroundCanvas />
      <div ref={canvasRef} id="canvas-container"></div>

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

      {/* Navigation */}
      <Headers addToast={addToast} />

      {/* Hero Section */}
      <main className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Hero Text */}
            <HeroCanvas addToast={addToast} />

            {/* Hero Dashboard Visual (adapté pour une agence web) */}
            <div
              className="relative lg:h-150 w-full flex items-center justify-center reveal delay-200"
              style={{ transform: `translateY(${dashboardOffset}px)` }}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-brand-500/20 blur-[100px] rounded-full"></div>

              <div className="relative -mr-4 w-full max-w-md">
                {/* Carte 1 : Projet livré (gauche flottante) */}
                <div className="absolute -left-40 top-4 w-72 glass-panel p-2 mr-20 rounded-2xl border-l-4 border-l-green-500 animate-float z-20 hidden lg:block">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-xs text-gray-400">Projet livré</p>
                      <h3 className="font-semibold text-white">
                        E-commerce Luxe
                      </h3>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                      <i className="fas fa-laptop-code text-gray-300 text-xs"></i>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-white">+ 143%</p>
                    <p className="text-xs text-green-400">
                      hausse du CA en 3 mois
                    </p>
                  </div>
                  <button className="w-full py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-medium transition-colors">
                    Voir l'étude de cas
                  </button>
                </div>

                {/* Alerte opportunité (milieu) */}
                <div className="absolute top-2/2 mt-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 glass-panel border border-orange-500/30 bg-orange-900/10 p-4 rounded-xl shadow-2xl z-30 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
                    <i className="fas fa-chart-line text-orange-500"></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-orange-100">
                      Optimisation SEO détectée
                    </h4>
                    <p className="text-xs text-orange-200/70 mt-1 leading-relaxed">
                      Votre site pourrait générer 2x plus de clients avec nos
                      améliorations.
                    </p>
                    <button className="mt-3 text-xs text-orange-400 hover:text-orange-300 font-medium underline">
                      Analyser mon site
                    </button>
                  </div>
                </div>

                {/* Interface principale - Création de site */}
                <div className="glass-panel rounded-3xl p-6 relative z-10 w-full mx-auto border border-white/10">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-semibold text-lg">
                      Votre site sur mesure
                    </h3>
                    <i className="fas fa-ellipsis-h text-gray-500 cursor-pointer"></i>
                  </div>

                  <div className="mb-6">
                    <label className="text-xs text-gray-400 block mb-2">
                      Type de projet
                    </label>
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                      <img
                        src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=100"
                        className="w-10 h-10 rounded-full object-cover"
                        alt="Site vitrine"
                      />
                      <div>
                        <p className="text-sm font-medium">
                          Site Vitrine Premium
                        </p>
                        <p className="text-xs text-gray-400">
                          Design responsive · SEO inclus
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6 relative">
                    <label className="text-xs text-gray-400 block mb-2">
                      Nous travaillons pour vous
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 font-bold text-xl">
                        +
                      </span>
                      <input
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-10 pr-4 text-sm font-bold text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-right"
                        id="amount-input"
                      />
                    </div>
                  </div>

                  <Link
                    href={
                      "https://we.me/237671809395?text=Bonjour%EurekaIQ,%20je%20veux%20mon%20AUDIT%20GRATUIT%20pour%20mon%20Entreprise."
                    }
                  >
                    <button
                      onClick={processPayment}
                      id="order-btn"
                      disabled={isProcessing}
                      className="w-full bg-green-600 hover:bg-green-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-600/20 transition-all flex items-center justify-center gap-2"
                    >
                      <span>
                        {isProcessing
                          ? "Envoi..."
                          : isSent
                            ? "Demande envoyée"
                            : "Je veux mon systeme de reservation"}
                      </span>
                      <Paperclip />
                    </button>
                  </Link>
                  {isSent && (
                    <p className="mt-3 text-sm text-green-300">
                      Nous vous répondons.
                    </p>
                  )}

                  {/* Projet récent en dessous */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                          <i className="fas fa-check-circle text-green-500 text-xs"></i>
                        </div>
                        <div>
                          <p className="text-xs font-medium">
                            Dernier projet livré
                          </p>
                          <p className="text-[10px] text-gray-400">
                            Il y a 2 jours
                          </p>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-green-400">
                        +92% de conversion
                      </span>
                    </div>
                  </div>
                </div>

                {/* Statistique flottante (droite) */}
                <div
                  className="absolute -right-40 bottom-20 w-64 glass-panel p-4 rounded-2xl hidden lg:block animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-400">
                      Croissance moyenne
                    </span>
                    <i className="fas fa-arrow-up text-green-400 text-xs"></i>
                  </div>
                  <div className="h-16 flex items-end justify-between gap-1">
                    <div className="w-1/6 bg-gray-700 rounded-t-sm h-[40%]"></div>
                    <div className="w-1/6 bg-gray-700 rounded-t-sm h-[60%]"></div>
                    <div className="w-1/6 bg-brand-600 rounded-t-sm h-[85%] shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
                    <div className="w-1/6 bg-gray-700 rounded-t-sm h-[50%]"></div>
                    <div className="w-1/6 bg-gray-700 rounded-t-sm h-[70%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Services / Features Section */}
      <Service addToast={addToast} />

      {/* Booking  */}
      <BookingSystem />

      {/* CTA Section */}
      <CTA addToast={addToast} />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Page
