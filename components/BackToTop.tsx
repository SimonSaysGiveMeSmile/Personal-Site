"use client";

import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function BackToTop() {

  return (
    <motion.button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-40 surface-panel flex h-14 w-14 items-center justify-center rounded-2xl backdrop-blur-2xl shadow-[0_20px_45px_rgba(12,12,14,0.35)]"
    >
      <ArrowUp size={18} className="text-[var(--text-primary)]" />
    </motion.button>
  );
}


