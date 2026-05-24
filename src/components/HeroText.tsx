import { ArrowRightToLine } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

interface Props {
  addToast: any;
}

const HeroText = ({ addToast }: Props) => {
  return (
    <div className="reveal active">
      <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-brand-500/5 border border-brand-500/10 text-brand-400 text-xs font-semibold mb-6">
        <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
        Nouveau : Audit de conversion offert
      </div>
      <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
        Votre Entreprise perd{" "}
        <span className="text-blue-500">+2 Millions/mois </span>
        en appels manqués.
        <span>On récupère ça en 48h.</span>
      </h1>
      {/* <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
        Votre Entreprise{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-400 to-blue-600">
          {" "}
          boostent vos ventes
        </span>
        .
      </h1> */}
      <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
        <span className="font-bold text-white">
          EurekaIQ<span className="text-[#106103]">.TECH</span>
        </span>
        installe le systéme de reservation WhatsApp{" "}
        <span className="font-bold text-green-500">24/7</span> pour les
        Entreprise. Vos clients réservent même à 2h du matin. Vous répondez
        quand vous voulez ou vous laissez a votre Assistant IA.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        {/* <button
          onClick={() => addToast("Demande de l'audit envoyée.")}
          className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-brand-600/30 flex items-center justify-center gap-2"
        >
          Audit Gratuit sur WhatsApp {" "}
          <i className="fas fa-arrow-right text-sm"></i>
        </button> */}

        <Link
          href={
            "https://we.me/237671809395?text=Bonjour%EurekaIQ,%20je%20veux%20mon%20AUDIT%20GRATUIT%20pour%20mon%20Entreprise."
          }
          target="_blank"
          className="flex gap-3 w-full sm:w-auto bg-green-500 hover:bg-green-600 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg shadow-lg shadow-green-500/30 transition-all duration-300 transform hover:scale-105"
        >
          Audit Gratuit sur WhatsApp
          <ArrowRightToLine />
        </Link>
      </div>

      <div className="mt-10 flex items-center gap-4 text-sm text-gray-500">
        <div className="flex -space-x-2">
          <img
            className="w-8 h-8 rounded-full border-2 border-dark-bg"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
            alt="Client"
          />
          <img
            className="w-8 h-8 rounded-full border-2 border-dark-bg"
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100"
            alt="Client"
          />
          <img
            className="w-8 h-8 rounded-full border-2 border-dark-bg"
            src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100"
            alt="Client"
          />
        </div>
        <p>+50 entreprises nous font déjà confiance</p>
      </div>
    </div>
  );
};

export default HeroText
