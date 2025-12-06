"use client";

import Image from "next/image";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  scrollY: number;
}

export default function Hero({ scrollY }: HeroProps) {
  const parallaxOffset = scrollY * 0.5;

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-32"
      id="hero"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/Background.JPG)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Overlay for light mode - lighter overlay to maintain brightness */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/40 via-white/30 to-white/50 hero-overlay-light" />
      
      {/* Overlay for dark mode - darker overlay for better contrast */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-black/40 to-black/60 hero-overlay-dark" />
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[2]"
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
            <div className="w-32 h-32 mx-auto rounded-3xl overflow-hidden hover:scale-110 transition-transform duration-1000">
              <Image
                src="/Simon.JPG"
                alt="Portrait of Simon Tian"
                width={128}
                height={128}
                className="h-full w-full object-cover"
                priority
              />
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
            {[{ href: "https://github.com/SimonSaysGiveMeSmile", icon: <Github size={24} /> },
              { href: "https://www.linkedin.com/in/simon-ji%C4%81h%C3%A9-tian-1333a3156", icon: <Linkedin size={24} /> },
              { href: "https://x.com/realsimontian", icon: <Twitter size={24} /> }].map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-full p-4 hover-lift hover:bg-white/50 transition-all"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>

          <motion.a
            href="#about"
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="animate-bounce">
              <ArrowDown size={32} className="text-black-600" />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

