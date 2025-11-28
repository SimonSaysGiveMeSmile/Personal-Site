"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Globe } from "lucide-react";

export default function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "jt886@cornell.edu",
      href: "mailto:jt886@cornell.edu",
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+1 (607) 262-9704",
      href: "tel:+16072629704",
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "East Palo Alto, CA",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/simon-tian-1333a3156/",
      color: "from-[var(--accent)] to-[var(--accent-secondary)]",
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      url: "https://github.com/SimonSaysGiveMeSmile",
      color: "from-[#121212] to-[#2d2d2d]",
    },
    {
      icon: <Twitter size={24} />,
      label: "Twitter",
      url: "https://x.com/realsimontian",
      color: "from-[#79c6ff] to-[#8f9fff]",
    },
    {
      icon: <Globe size={24} />,
      label: "Portfolio",
      url: "https://hihello.me/p/f46de5b3-4780-4872-9347-93a39fd4d82b",
      color: "from-[#9f8bff] to-[#c3a5ff]",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Let&apos;s build something amazing together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent)] via-[var(--accent-secondary)] to-[var(--accent-tertiary)] flex items-center justify-center text-white flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-300 font-medium">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-800 dark:text-white font-semibold hover:text-accent transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-800 dark:text-white font-semibold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <h4 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Current Role</h4>
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">CEO</span> with 79% equity, committed to building
                innovative AI and robotics solutions. Open to collaborations, investments, and
                exciting opportunities.
              </p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass rounded-3xl p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Connect With Me</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className={`h-full rounded-2xl bg-gradient-to-br ${link.color} p-6 hover-lift transition-all duration-300 group-hover:shadow-2xl`}>
                      <div className="flex flex-col items-center justify-center h-full text-white">
                        <div className="mb-3 group-hover:scale-110 transition-transform">
                          {link.icon}
                        </div>
                        <p className="font-semibold">{link.label}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-6">
            <p className="text-gray-600 dark:text-gray-300">
              © 2025 Simon Tian. Built with Next.js, React, Tailwind CSS, and Framer Motion.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
              Technical Founder | AI Engineer | Cornell MS Graduate
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

