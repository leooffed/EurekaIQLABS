import { fadeInUp, staggerContainer } from "@/hooks/animation";
import { colors } from "@/hooks/color";
import { motion } from "framer-motion";
import { ArrowRightLeft, Check, Layout, Server } from "lucide-react";
import Link from "next/link";

const Services = () => {
  return (
    <section className="py-28 px-6 ">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Pourquoi les entreprises <span>perdent de l'argent</span> chaque fois.
        </h1>

        <p className="text-xl text-gray-300 mb-16 mx-auto">
          Et comment{" "}
          <span className="font-bold text-green-400">
            EurekaIQ<span className="text-[#106103]">.Agency</span>
          </span>{" "}
          répare ça en 48h.
        </p>

        {/* Le PROBLEME  */}
        <div className="bg-gray-800 border-red-500/30 rounded-2xl p-8 text-left mb-12">
          <h2 className="text-2xl font-bold text-red-400 mb-4">
            Le problème de 9 entreprises sur 10:
          </h2>
          <ul className="space-y-3 text-lg text-gray-300">
            <li className="flex gap-3">
              <span className="text-red-500">X</span> Un client veut réserver ou
              connaitre à 23h. Votre Assistant dort. Client perdu.
            </li>
            <li className="flex gap-3">
              <span className="text-red-500">X</span> Il appelle le lendemain.
              Votre ligne est occupèe. Client perdu.
            </li>
            <li className="flex gap-3">
              <span className="text-red-500">X</span> Il va sur autre site. Vous
              perder jusqu'a 100%. Fin de mois compliquer.
            </li>
            <li className="flex gap-3">
              <span className="text-red-500">X</span>{" "}
              <span>Resultat: 60 000 à 100 000€ perdus chaque mois.</span>.
            </li>
          </ul>
        </div>

        {/* LA SOLUTION */}
        <div className="bg-gray-800 border-green-500/30 rounded-2xl p-8 text-left mb-12">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Notre solution: Le systéme "Réservation 24/7"
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            On construire votre site et on install 1 bouton sur votre nouveau
            site. C'est tout.
          </p>
          <ul className="space-y-3 text-lg text-gray-300">
            <li className="flex gap-3">
              <span className="text-green-500">✅</span> Le client clique - il
              arrive direct sur Votre WhatsApp.
            </li>
            <li className="flex gap-3">
              <span className="text-green-500">✅</span> Message auto 24/7:
              <br />
              <span className="font-mono">
                "Bonjour, merci de votre intérêt pour notre entreprise. Nous
                sommes actuellement fermés, mais nous avons bien reçu votre
                message. Un membre de notre équipe vous répondra dès que
                possible pendant nos heures d'ouverture. En attendant, n'hésitez
                pas à consulter notre site web pour plus d'informations sur nos
                produits et services. Merci de votre compréhension et à bientôt
                !"
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-500">✅</span> Vous ne payez plus de
              commission ou des abonnement. 100% pour vous.
            </li>
            <li className="flex gap-3">
              <span className="text-green-500">✅</span>{" "}
              <span>Installé en 48h. Garanti ou remboursé 100K</span>.
            </li>
          </ul>
        </div>

        {/* QUI Sommes nous */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Qui est EUREKAIQ<span className="text-[#106103]">.Agency</span> ?
          </h2>
          <p className="text-lg text-gray-300">
            Basé à Douala, et France PARIS Cameroun, EUREKAIQ
            <span className="text-[#106103]">.Agency</span> est une agence
            digitale spécialisée
          </p>
        </div>

        {/* CTA */}
        <Link
          href={
            "https://wa.me/237671809395?text=Bonjour%EurekaIQ,%20je%20viens%de%20lire%20la%20page%20Propos.%20Je%20voudrais%20avoir%20plus%20d'informations."
          }
          className="flex gap-4 w-full sm:w-auto items-center justify-center bg-green-500 hover:bg-green-600 text-gray-900 font-bold text-xl px-10 py-5 rounded-lg shadow-lg shadow-green-900/30"
        >
          Je Stoppe les pertes Maintenant
          <ArrowRightLeft />
        </Link>
      </div>
    </section>

    // <section id="services" className={`py-24 ${colors.bg} relative`}>
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <motion.div
    //       initial={{ opacity: 0, y: 20 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       viewport={{ once: true }}
    //       className="text-center mb-16"
    //     >
    //       <h2 className="text-3xl text-green-500 font-bold mb-4">
    //         Notre Expertise
    //       </h2>
    //       <p className={`${colors.muted}`}>
    //         Des solutions techniques robustes pour une croissance exponentielle.
    //       </p>
    //     </motion.div>

    //     <motion.div
    //       variants={staggerContainer}
    //       initial="hidden"
    //       whileInView="visible"
    //       viewport={{ once: true, margin: "-100px" }}
    //       className="grid grid-cols-1 md:grid-cols-2 gap-8"
    //     >
    //       {/* Card SaaS */}
    //       <motion.div
    //         variants={fadeInUp}
    //         whileHover={{ y: -10, borderColor: "rgba(124,58,237, 0.5)" }}
    //         className={`p-8 rounded-2xl border ${colors.surface} ${colors.border} hover:border-[#106103]/50 transition-all duration-300 group relative overflow-hidden`}
    //       >
    //         <div className="absolute top-0 right-0 w-32 h-32 bg-[#106103]/10 rounded-full blur-[50px] -mr-16 -mt-16 transition-all group-hover:bg-[#106103]/20"></div>

    //         <div className="w-14 h-14 bg-[#106103]/20 rounded-xl flex items-center justify-center text-[#106103] mb-6 group-hover:scale-110 transition-transform">
    //           <Server size={28} />
    //         </div>
    //         <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
    //           Développement SaaS
    //         </h3>
    //         <p className={`${colors.muted} mb-6`}>
    //           Nous transformons vos processus métier complexes en applications
    //           web évolutives, sécurisées et automatisées. De la conception à la
    //           mise en production.
    //         </p>
    //         <ul className="space-y-3 text-sm text-gray-300">
    //           {[
    //             "Architecture Cloud (AWS/Supabase)",
    //             "Dashboard Admin & Analytics",
    //             "Intégration API & Paiements",
    //           ].map((item, i) => (
    //             <li key={i} className="flex items-center gap-2">
    //               <Check size={16} className="text-[#106103]" /> {item}
    //             </li>
    //           ))}
    //         </ul>
    //       </motion.div>

    //       {/* Card Web */}
    //       <motion.div
    //         variants={fadeInUp}
    //         whileHover={{ y: -10, borderColor: "rgba(34,211,238, 0.5)" }}
    //         className={`p-8 rounded-2xl border ${colors.surface} ${colors.border} hover:border-[#22d3ee]/50 transition-all duration-300 group relative overflow-hidden`}
    //       >
    //         <div className="absolute top-0 right-0 w-32 h-32 bg-[#22d3ee]/10 rounded-full blur-[50px] -mr-16 -mt-16 transition-all group-hover:bg-[#22d3ee]/20"></div>

    //         <div className="w-14 h-14 bg-[#22d3ee]/20 rounded-xl flex items-center justify-center text-[#0d8708] mb-6 group-hover:scale-110 transition-transform">
    //           <Layout size={28} />
    //         </div>
    //         <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
    //           Création Web
    //         </h3>
    //         <p className={`${colors.muted} mb-6`}>
    //           Des sites vitrines, landing pages ou e-commerce qui convertissent.
    //           Design UI/UX moderne, optimisé pour le SEO et ultra-rapide.
    //         </p>
    //         <ul className="space-y-3 text-sm text-gray-300">
    //           {[
    //             "Design Responsive & Accessible",
    //             "Performance Core Web Vitals",
    //             "CMS Headless (Strapi/Sanity)",
    //           ].map((item, i) => (
    //             <li key={i} className="flex items-center gap-2">
    //               <Check size={16} className="text-[#068611]" /> {item}
    //             </li>
    //           ))}
    //         </ul>
    //       </motion.div>
    //     </motion.div>
    //   </div>
    // </section>
  );
};

export default Services;
