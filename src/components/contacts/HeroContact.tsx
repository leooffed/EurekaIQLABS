'use client'
import { fadeInUp } from "@/hooks/animation";
import { colors } from "@/hooks/color";
import { easeOut, motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

const Hero = () => {
  return (
    <section
      className={`relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden ${colors.bg}`}
    >
      {/* Ambiances de fond animées */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-1/2 w-[600px] h-[600px] bg-[#106103]/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, 50, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-[#106103]/20 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#106103]/30 bg-[#106103]/10 text-[#106103] text-sm font-mono mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#106103] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#106103]"></span>
          </span>
          Open to new projects
        </motion.div>

        {/* Titre avec Dégradé */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl text-white font-bold tracking-tight mb-6"
        >
          Increase 80% <br />
          <span className="bg-gradient-to-r from-[#106103] via-green-500 to-[#106103] bg-clip-text text-transparent">
            of your business.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className={`mt-4 max-w-2xl mx-auto text-xl ${colors.muted} mb-10`}
        >
          Scribel<span className="text-[#106103]">.Lab's</span>{" "}
          <strong className={`${colors.text}`}>Your company</strong> is losing{" "}
          <strong className={`${colors.text}`}>more money +2M/month</strong>{" "}
          We help businesses get more customers and retain them{" "}
          <strong className={`${colors.text}`}>all your traffic </strong> is
          online, we help you convert it into{" "}
          <strong className={`${colors.text}`}>real revenue</strong>.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-[#106103] to-green-600 text-white font-bold rounded-full overflow-hidden shadow-[0_0_20px_rgba(16,97,3,0.5)] transition-all"
            onClick={() => {
              const phoneNumber = "237671809395"; // ⚠️ ton numéro WhatsApp Business

              const message = encodeURIComponent(
                "Hello, I would like to schedule a strategic call.",
              );

              window.open(
                `https://wa.me/${phoneNumber}?text=${message}`,
                "_blank",
              );
            }}
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative flex items-center justify-center gap-2 cursor-pointer">
              Schedule a Call
              <PhoneCall size={18} />
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-white/10 bg-green-300 text-black font-bold rounded-full hover:bg-green-400 hover:text-white transition-colors backdrop-blur-md"
          >
            View Our Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
