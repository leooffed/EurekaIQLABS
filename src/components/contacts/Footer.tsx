'use client'
import { colors } from "@/hooks/color";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className={`border-t border-white/5 ${colors.bg} pt-16 pb-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#106103] to-green-500 rounded-lg flex items-center justify-center text-white">
            {/* <Zap size={18} /> */}
            EK
          </div>
          <span className="font-bold text-white font-mono text-xl tracking-tighter">
            EUREKAIQ<span className="text-[#106103]">.</span>
          </span>
        </div>

        <div
          className={`${colors.muted} text-sm text-white text-center md:text-left`}
        >
          &copy; 2025 EurekaIQ Agency. All rights reserved.{" "}
          <br />
          <span className="text-xs opacity-50">
            Designed to help businesses grow.
          </span>
        </div>

        <div className="flex gap-6">
          {["LinkedIn", "Threads"].map((social) => (
            <motion.a
              key={social}
              href={
                [
                  "https://www.linkedin.com/in/leonel-teens-081ab7378/",
                  "https://www.threads.com/@leooffed6",
                ][social === "LinkedIn" ? 0 : 1]
              }
              whileHover={{ y: -2, color: "#fff" }}
              className="text-gray-400 transition-colors text-sm font-medium"
            >
              {social}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
