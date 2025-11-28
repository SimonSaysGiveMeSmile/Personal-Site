"use client";

import { useState, useEffect } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

interface NavigationProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function Navigation({ theme, toggleTheme }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4 backdrop-saturate-150" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a
            href="#"
            className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
          >
            Simon Tian
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-200 hover:text-accent transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              aria-label="Toggle color mode"
              className="w-11 h-11 flex items-center justify-center rounded-full glass hover:bg-white/30 dark:hover:bg-white/5 transition-colors"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle color mode"
              className="p-2 rounded-full glass hover:bg-white/40 dark:hover:bg-white/10 transition-colors"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="p-2 rounded-full glass hover:bg-white/50 dark:hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-2xl p-4 animate-slide-down">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 dark:text-gray-200 hover:text-accent transition-colors"
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

