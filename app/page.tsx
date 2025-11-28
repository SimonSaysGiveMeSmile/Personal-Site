"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Accomplishments from "@/components/Accomplishments";
import Contact from "@/components/Contact";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("simon-theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      return;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    document.body.classList.toggle("dark", isDark);
    localStorage.setItem("simon-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-32 -left-10 w-96 h-96 rounded-full opacity-30 blur-[120px] bg-gradient-to-br from-[var(--accent)] via-[var(--accent-tertiary)] to-transparent" />
        <div className="absolute top-10 right-0 w-[28rem] h-[28rem] rounded-full opacity-20 blur-[140px] bg-gradient-to-br from-[var(--accent-secondary)] via-white/40 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full opacity-25 blur-[160px] bg-gradient-to-br from-white/40 via-[var(--accent-tertiary)] to-transparent" />
      </div>
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <Hero scrollY={scrollY} />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Accomplishments />
      <Contact />
    </main>
  );
}

