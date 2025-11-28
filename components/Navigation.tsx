"use client";

import { useState, useEffect } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Accomplishments", href: "#accomplishments" },
    { name: "Hobbies", href: "#hobbies" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 backdrop-blur-2xl border-b border-white/15 bg-white/70 dark:bg-black/40 ${
        isScrolled ? "shadow-[0_18px_65px_rgba(0,0,0,0.35)]" : "shadow-[0_6px_25px_rgba(0,0,0,0.15)]"
      }`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isScrolled ? "py-4" : "py-5"}`}>
        <div className="flex items-center justify-between gap-6">
          <a
            href="#hero"
            className="text-2xl font-semibold tracking-tight gradient-text hover:opacity-90 transition-opacity"
          >
            Simon Tian
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold tracking-wide uppercase text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              aria-label="Toggle theme"
              className="relative inline-flex h-11 w-24 items-center rounded-full border border-white/25 bg-white/20 px-4 text-[var(--text-primary)] shadow-inner transition-all duration-300 hover:border-white/40"
              onClick={toggleTheme}
            >
              <span
                className="absolute top-1 left-1 h-9 w-9 rounded-full bg-gradient-to-br from-white to-[#d9dce3] shadow-lg transition-transform duration-300"
                style={{ transform: `translateX(${isDark ? 52 : 0}px)` }}
              />
              <div className="relative z-10 flex w-full items-center justify-between">
                <Sun size={16} className="text-[#f5c16c]" />
                <Moon size={16} className="text-[#d7dae4]" />
              </div>
            </button>

            <button
              className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[var(--text-primary)] shadow-lg"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 rounded-3xl border border-white/10 bg-[var(--surface)] p-4 shadow-2xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-2xl px-4 py-3 text-[var(--text-primary)] hover:bg-white/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

