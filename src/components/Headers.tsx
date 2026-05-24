import { Menu } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

interface Props {
  addToast: any;
}

const Headers = ({ addToast }: Props) => {
  return (
    <nav
      className="fixed w-full z-40 glass-nav transition-all duration-300"
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href={"/"}>
            <div
              className="shrink-0 flex items-center gap-2 cursor-pointer"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">
                EK
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                EurekaIQ<span className="text-[#106103]">.TECH</span>
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Accueil
            </Link>
            <Link
              href="/about-us"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              A propos
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => addToast("Demande de démo envoyée.")}
              className="bg-green-600 text-white hover:text-black px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg shadow-brand-500/20"
            >
              Réserver sur WhatSApp
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-btn"
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <Menu className="text-white" size={25} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className="hidden md:hidden glass-panel border-t-0 border-x-0 absolute w-full"
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          <Link
            href="/"
            className="block px-3 py-3 rounded-md text-base font-medium text-white hover:bg-white/10"
          >
            Accueil
          </Link>
          <Link
            href="/creation-site-web"
            className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
          >
            A propos
          </Link>

          <button className="w-full mt-4 bg-green-600 text-white px-3 py-3 rounded-md font-bold hover:bg-green-500">
            Reservation sur WhatsApp
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Headers
