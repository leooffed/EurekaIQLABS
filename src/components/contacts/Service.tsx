'use client'
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
          Why do companies <span>lose money</span> each time.
        </h1>

        <p className="text-xl text-gray-300 mb-16 mx-auto">
          And how{" "}
          <span className="font-bold text-green-400">
            EurekaIQ<span className="text-[#106103]">.Agency</span>
          </span>{" "}
          fixes it in 48h.
        </p>

        {/* Le PROBLEME  */}
        <div className="bg-gray-800 border-red-500/30 rounded-2xl p-8 text-left mb-12">
          <h2 className="text-2xl font-bold text-red-400 mb-4">
            The problem of 9 companies out of 10:
          </h2>
          <ul className="space-y-3 text-lg text-gray-300">
            <li className="flex gap-3">
              <span className="text-red-500">X</span> A customer wants to book
              or Know at 11 PM. Your assistant is asleep. Client lost.
            </li>
            <li className="flex gap-3">
              <span className="text-red-500">X</span> He calls the next day.
              Your line is busy. Client lost.
            </li>
            <li className="flex gap-3">
              <span className="text-red-500">X</span> He goes to another site.
              You lose up to 100%. End of month complicated.
            </li>
            <li className="flex gap-3">
              <span className="text-red-500">X</span>{" "}
              <span>Result: €60,000 to €100,000 lost each month.</span>.
            </li>
          </ul>
        </div>

        {/* LA SOLUTION */}
        <div className="bg-gray-800 border-green-500/30 rounded-2xl p-8 text-left mb-12">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Our solution: The "24/7 Booking" system
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            We'll build your website and install one button on your new site.
            That's all.
          </p>
          <ul className="space-y-3 text-lg text-gray-300">
            <li className="flex gap-3">
              <span className="text-green-500">✅</span> The client clicks - he
              arrives directly on your WhatsApp.
            </li>
            <li className="flex gap-3">
              <span className="text-green-500">✅</span> Auto message 24/7:
              <br />
              <span className="font-mono">
                "Hello, thank you for your interest in our company. We are
                currently closed, but we have received your message. A member of
                our team will get back to you as soon as possible during our
                business hours. In the meantime, please feel free to visit our
                website for more information about our products and services.
                Thank you for your understanding and see you soon!"
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-500">✅</span> You no longer pay
              commissions or subscriptions. 100% for you..
            </li>
            <li className="flex gap-3">
              <span className="text-green-500">✅</span>{" "}
              <span>
                Installed in 48 hours. Guaranteed or your money back 100K
              </span>
              .
            </li>
          </ul>
        </div>

        {/* QUI Sommes nous */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Who is EUREKAIQ<span className="text-[#106103]">.Agency</span> ?
          </h2>
          <p className="text-lg text-gray-300">
            Based in Douala and Paris, Cameroon, EUREKAIQ
            <span className="text-[#106103]">.Agency</span> is a specialized digital agency
          </p>
        </div>

        {/* CTA */}
        <Link
          href={
            "https://wa.me/237671809395?text=Bonjour%EurekaIQ,%20je%20viens%de%20lire%20la%20page%20Propos.%20Je%20voudrais%20avoir%20plus%20d'informations."
          }
          className="flex gap-4 w-full sm:w-auto items-center justify-center bg-green-500 hover:bg-green-600 text-gray-900 font-bold text-xl px-10 py-5 rounded-lg shadow-lg shadow-green-900/30"
        >
          I Stop the Losses Now
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
