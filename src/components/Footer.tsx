// import { Facemesh } from '@react-three/drei';
'use client'
import { WholeWord, X } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-lg pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/contact-for-site-web"
                  className="hover:text-brand-400 transition-colors"
                >
                  Systeme de reservation
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-for-site-web"
                  className="hover:text-brand-400 transition-colors"
                >
                  Sites Vitrine
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-for-site-web"
                  className="hover:text-brand-400 transition-colors"
                >
                  E-commerce
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-for-site-web"
                  className="hover:text-brand-400 transition-colors"
                >
                  Marketing digital
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Agence</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-brand-400 transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/teams-eurekaiq"
                  className="hover:text-brand-400 transition-colors"
                >
                  Teams
                </Link>
              </li>

              {/* Featu */}
              {/* <li>
                <a
                  href="membres"
                  className="hover:text-brand-400 transition-colors"
                >
                  Recrutement
                </a>
              </li> */}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Ressources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="blog"
                  className="hover:text-brand-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="avis"
                  className="hover:text-brand-400 transition-colors"
                >
                  Études de cas
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Légal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="faq"
                  className="hover:text-brand-400 transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="police"
                  className="hover:text-brand-400 transition-colors"
                >
                  CGV
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 EurekaIQ LAB's. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="https://web.facebook.com/profile.php?id=61578862343684&locale=fr_FR"
              className="text-gray-400 hover:text-white transition-colors flex"
            >
              <WholeWord />
              Facebook
            </Link>
            <Link
              href="https://www.linkedin.com/in/leonel-teens-081ab7378/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Linkedin
            </Link>
            <Link
              href="https://github.com/leooffed"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Github
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
