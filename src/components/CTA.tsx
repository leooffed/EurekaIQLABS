import React from 'react'

interface Props{
    addToast: any
}

const CTA = ({ addToast }: Props) => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-green-900/20 pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-4 text-center reveal">
        <h2 className="text-4xl font-bold mb-6">
          Prêt à faire décoller votre activité ?
        </h2>
        <p className="text-gray-400 mb-10 text-lg">
          Rejoignez plus de 50 entreprises qui ont transformé leur présence en
          ligne avec EUREKAIQ<span className="text-[#106103]">.Agency</span>
        </p>
        <div className="p-2 glass-panel rounded-2xl max-w-lg mx-auto flex">
          <input
            type="email"
            placeholder="Votre adresse email professionnelle"
            className="flex-1 bg-transparent border-none outline-none text-white px-4 py-3 placeholder-gray-500"
          />
          <button
            onClick={() => addToast("Merci ! Nous vous contacterons sous 24h.")}
            className="bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl transition-colors"
          >
            Commencer
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA
