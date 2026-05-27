import { ArrowRightToLine } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  addToast: any;
}

const HeroText = ({ addToast }: Props) => {
  return (
    <div className="reveal active">
      <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-brand-500/5 border border-brand-500/10 text-brand-400 text-xs font-semibold mb-6">
        <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
        New: Free Conversion Audit
      </div>

      <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
        Your Business is Losing{" "}
        <span className="text-blue-500 ">+2 Million/Month </span>
        in Missed Calls.
        <span> We Recover It in 48 Hours.</span>
      </h1>

      <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
        <span className="font-bold text-white">
          Scribel<span className="text-[#106103] ">.Lab's</span>
        </span>{" "}
        installs the WhatsApp booking system{" "}
        <span className="font-bold text-green-500">24/7</span> for businesses. Your customers book even at 2 AM. You respond when you want or let your AI assistant handle it.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* Lien WhatsApp corrigé avec wa.me et encodage propre */}
        <Link
          href="https://wa.me/237671809395?text=Bonjour%20ScribelLabs,%20je%20veux%20mon%20AUDIT%20GRATUIT%20pour%20mon%20Entreprise."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full sm:w-auto bg-green-500 hover:bg-green-600 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg shadow-lg shadow-green-500/30 transition-all duration-300 transform hover:scale-105"
        >
          <span>Free Conversion Audit on WhatsApp</span>
          <ArrowRightToLine size={20} />
        </Link>
      </div>

      <div className="mt-10 flex items-center gap-4 text-sm text-gray-500">
        <div className="flex -space-x-2">
          <img
            className="w-8 h-8 rounded-full border-2 border-slate-900 object-cover"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
            alt="Client ScribelLabs"
          />
          <img
            className="w-8 h-8 rounded-full border-2 border-slate-900 object-cover"
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100"
            alt="Client ScribelLabs"
          />
          <img
            className="w-8 h-8 rounded-full border-2 border-slate-900 object-cover"
            src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100"
            alt="Client ScribelLabs"
          />
        </div>
        <p>+50 businesses already trust us</p>
      </div>
    </div>
  );
};

export default HeroText;
