"use client";

import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 320);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-6 z-40 surface-panel flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 backdrop-blur-2xl shadow-[0_20px_45px_rgba(12,12,14,0.35)]"
    >
      <ArrowUp size={18} className="text-[var(--text-primary)]" />
    </motion.button>
  );
}


