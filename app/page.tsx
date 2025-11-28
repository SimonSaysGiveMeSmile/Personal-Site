"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Hobbies from "@/components/Hobbies";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Accomplishments from "@/components/Accomplishments";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-32 -right-10 w-[40rem] h-[40rem] bg-gradient-to-br from-white/10 via-[#f5d08a]/20 to-transparent blur-[140px]" />
        <div className="absolute top-10 left-1/3 w-[35rem] h-[35rem] bg-gradient-to-br from-white/20 via-[#dcdfe8]/25 to-transparent blur-[160px]" />
        <div className="absolute bottom-[-25%] left-[-15%] w-[50rem] h-[50rem] bg-gradient-to-tl from-[#b39b67]/10 via-white/5 to-transparent blur-[200px]" />
      </div>
      <Navigation />
      <Hero scrollY={scrollY} />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Accomplishments />
      <Hobbies />
      <Contact />
      <BackToTop />
    </main>
  );
}

