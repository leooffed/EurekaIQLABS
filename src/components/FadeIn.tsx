"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function FadeIn({ 
  children, 
  delay = 0, 
  direction = "up" 
}: { 
  children: ReactNode; 
  delay?: number;
  direction?: "up" | "left" | "right"
}) {
  const yOffset = direction === "up" ? 30 : 0;
  const xOffset = direction === "left" ? 30 : direction === "right" ? -30 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}