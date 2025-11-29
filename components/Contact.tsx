"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Globe } from "lucide-react";
import InteractiveCard from "@/components/InteractiveCard";

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
      color: "from-[#f2f4fb] to-[#dfe3ef]",
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      url: "https://github.com/SimonSaysGiveMeSmile",
      color: "from-[#2f2f32] to-[#0f0f11]",
    },
    {
      icon: <Twitter size={24} />,
      label: "Twitter",
      url: "https://x.com/realsimontian",
      color: "from-[#fef9f1] to-[#e3d2b9]",
    },
    {
      icon: <Globe size={24} />,
      label: "Portfolio",
      url: "https://hihello.me/p/f46de5b3-4780-4872-9347-93a39fd4d82b",
      color: "from-[#fff7eb] to-[#f5d08a]",
    },
  ];

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="lux-pill mx-auto mb-6">Contact</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-4">Get In Touch</h2>
          <p className="text-lg text-[var(--text-muted)]">
            Let&apos;s build something amazing together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <InteractiveCard
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-[var(--text-primary)]">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/70 to-[#f5d08a]/80 flex items-center justify-center text-[#0f0f10] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-muted)] font-medium">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[var(--text-primary)] font-semibold"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[var(--text-primary)] font-semibold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8">
              <h4 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">Current Role</h4>
              <p className="text-[var(--text-muted)]">
                <span className="font-semibold">CEO</span> with 79% equity, committed to building
                innovative AI and robotics solutions. Open to collaborations, investments, and
                exciting opportunities.
              </p>
            </div>
          </InteractiveCard>

          {/* Social Links */}
          <InteractiveCard
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-[var(--text-primary)]">Connect With Me</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className={`h-full rounded-2xl bg-gradient-to-br ${link.color} p-6 transition-transform duration-300 group-hover:scale-[1.02]`}>
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
          </InteractiveCard>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <InteractiveCard className="p-6">
            <p className="text-[var(--text-muted)]">
              © 2025 Simon Tian. Built with Next.js, React, Tailwind CSS, and Framer Motion.
            </p>
            <p className="text-sm text-[var(--text-muted)] mt-2">
              Technical Founder | AI Engineer | Cornell MS Graduate
            </p>
          </InteractiveCard>
        </motion.div>
      </div>
    </section>
  );
}

