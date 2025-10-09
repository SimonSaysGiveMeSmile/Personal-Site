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
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      url: "https://github.com/SimonSaysGiveMeSmile",
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: <Twitter size={24} />,
      label: "Twitter",
      url: "https://x.com/realsimontian",
      color: "from-blue-400 to-blue-500",
    },
    {
      icon: <Globe size={24} />,
      label: "Portfolio",
      url: "https://hihello.me/p/f46de5b3-4780-4872-9347-93a39fd4d82b",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <p className="text-lg text-gray-600">
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
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-800 font-semibold hover:text-blue-600 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-800 font-semibold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-xl font-bold mb-4 text-gray-800">Current Role</h4>
              <p className="text-gray-600">
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
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Connect With Me</h3>
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
            <p className="text-gray-600">
              © 2025 Simon Tian. Built with Next.js, React, Tailwind CSS, and Framer Motion.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Technical Founder | AI Engineer | Cornell MS Graduate
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

