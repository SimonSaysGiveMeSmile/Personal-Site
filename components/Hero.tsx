"use client";

import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  scrollY: number;
}

export default function Hero({ scrollY }: HeroProps) {
  const parallaxOffset = scrollY * 0.5;

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      id="hero"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-32 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ transform: `translateY(-${parallaxOffset}px)` }}
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full glass-dark p-1 hover:scale-110 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-5xl font-bold">
                ST
              </div>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Simon Tian
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            AI Engineer & Technical Founder
          </motion.p>

          <motion.p
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Building the future with AI, robotics, and autonomous systems. Cornell MS graduate,
            YC applicant, and passionate innovator in emotional AI and drone technology.
          </motion.p>

          <motion.div
            className="flex justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="https://github.com/SimonSaysGiveMeSmile"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full p-4 hover-lift hover:bg-white/50 transition-all"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/simon-ji%C4%81h%C3%A9-tian-1333a3156"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full p-4 hover-lift hover:bg-white/50 transition-all"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://x.com/realsimontian"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full p-4 hover-lift hover:bg-white/50 transition-all"
            >
              <Twitter size={24} />
            </a>
          </motion.div>

          <motion.a
            href="#about"
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="animate-bounce">
              <ArrowDown size={32} className="text-blue-600" />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

