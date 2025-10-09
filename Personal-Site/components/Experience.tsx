"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { ChevronDown, ExternalLink, Github, Award, Users, TrendingUp } from "lucide-react";
import { useState } from "react";

export default function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences = [
    {
      company: "Hireal Inc.",
      role: "Founder",
      period: "Aug 2025 - Present",
      description:
        "Founded Hireal, an HR agent that helps startups and enterprises evaluate candidates using open internet information. Built the product from a hackathon prototype to a working solution in three weeks, onboarding three pilot customers. The platform generates evidence-linked 'Integrity Strip' scorecards powered by GitHub/LinkedIn signals, with Google login and Stripe payment integration. Revenue model includes $200 per user seat subscriptions and $3-$30 pay-per-use assessment fees, targeting 50 enterprise partnerships in the upcoming year.",
      website: "https://hireal.pro",
      github: "",
      logo: "/hireal.png",
      highlights: [
        "Built MVP in 3 weeks",
        "3 pilot customers onboarded",
        "Targeting 50 enterprise partnerships"
      ],
      images: 4,
    },
    {
      company: "JobHatch Inc.",
      role: "Founder",
      period: "May 2025 - Aug 2025",
      description:
        "Founded JobHatch Inc. (Delaware C-Corp) to create the next-generation, AI-driven career platform for both job seekers and employers. Launched MVP in under 2 weeks, built 300+ organic waitlist users, and conducted 283 survey responses with 8 user interviews. Accepted into Beta University Cohort 9. Relocated from Ithaca to Palo Alto to be closer to customers and investors, living out of hotels for a month to focus on the business.",
      website: "https://jobhatch.com",
      github: "",
      logo: "/jobhatch.jpg",
      highlights: [
        "300+ waitlist users organically",
        "283 survey responses",
        "Beta University Cohort 9"
      ],
      images: 4,
    },
    {
      company: "Skyris Corp.",
      role: "CTO",
      period: "Jan 2025 - Jun 2025",
      description:
        "At SkyrisAI, I designed the world's flying AI pet that senses and responds to user emotions using multimodal input. I led product strategy, combining emotion recognition, natural language processing, and expressive physical movement. Our prototype incorporated real-time affective computing, computer vision, and GPT-powered dialogue. SkyrisAI redefines emotional companionship through embodied intelligence, blending robotics and personality in a deeply interactive experience.",
      website: "https://skyrisai.com/",
      github: "",
      logo: "/skyris.jpeg",
      highlights: [
        "World's first flying AI pet",
        "Multimodal emotion recognition",
        "Real-time affective computing"
      ],
      images: 3,
    },
    {
      company: "FreeRange Drones",
      role: "CTO",
      period: "Sep 2024 - Dec 2024",
      description:
        "I co-founded FreeRange to build an autonomous delivery drone network powered by LLMs. I led development of drone flight control systems, integrating real-time language input with spatial planning to optimize routes. We designed battery-swapping base stations on vehicles, enabling 24/7 drone operation. I worked across hardware integration, regulatory compliance, and investor engagement, pushing the boundaries of AI-driven logistics in suburban environments.",
      website: "",
      github: "https://github.com/SimonSaysGiveMeSmile/FreeRange",
      logo: "/freerange.png",
      highlights: [
        "LLM-powered flight control",
        "24/7 autonomous operation",
        "Battery-swapping stations"
      ],
      images: 4,
    },
    {
      company: "ByteDance",
      role: "Project Manager",
      period: "Mar 2023 - Jun 2023",
      description:
        "As a Project Manager intern at ByteDance, I worked at the intersection of strategy, product, and research. I led in-depth competitor analysis and market research to identify trends, gaps, and emerging opportunities across the AI and productivity software sectors. My insights directly informed the roadmap for key development initiatives. I coordinated across product and engineering teams to streamline communication, ensure project alignment, and deliver timely reports to stakeholders.",
      website: "",
      github: "",
      logo: "/bytedance.png",
      highlights: [
        "Strategic market analysis",
        "Cross-team coordination",
        "Product roadmap insights"
      ],
      images: 3,
    },
    {
      company: "UC San Diego",
      role: "Computer Vision Research Assistant",
      period: "Feb 2023 - Feb 2024",
      description:
        "At UC San Diego, I contributed to cutting-edge computer vision research, focusing on real-world applications of machine learning. I designed and trained convolutional (CNN) and fully convolutional networks (FCN) to enhance object detection accuracy, playing a pivotal role in the pipeline from model architecture to performance optimization. Leveraging Python, OpenCV, and PyTorch, I developed algorithms capable of handling complex visual data, while collaborating closely with faculty and fellow researchers to document findings and iterate on experimental results.",
      website: "",
      github: "",
      logo: "/ucsd.png",
      highlights: [
        "CNN/FCN architecture design",
        "Object detection optimization",
        "PyTorch & OpenCV development"
      ],
      images: 3,
    },
    {
      company: "Bombardier Aerospace",
      role: "Aircraft Infotainment Full Stack Developer",
      period: "Jan 2022 - Apr 2022",
      description:
        "At Bombardier, I engineered core features for the Cabin Management System aboard the Global series jets. I developed and integrated full-stack solutions for lighting control, media systems, and device connectivity, ensuring seamless interaction between in-flight hardware and software interfaces. My work spanned embedded software, network configuration, and UI design—balancing performance, safety, and passenger experience.",
      website: "",
      github: "",
      logo: "/bombardier.png",
      highlights: [
        "Global series jets CMS",
        "Full-stack development",
        "Embedded systems integration"
      ],
      images: 3,
    },
    {
      company: "engineering.com",
      role: "Technical Writer",
      period: "Oct 2021 - May 2022",
      description:
        "At engineering.com, I translated complex technical concepts into accessible and engaging content, focusing on 3D printing, DIY hardware projects, and engineering innovations. Drawing from hands-on experience and deep research, I authored articles that educated and inspired a global audience of engineers, hobbyists, and tech enthusiasts.",
      website: "https://www.engineering.com/author/simon-tian/",
      github: "",
      logo: "/engineering-com.jpeg",
      highlights: [
        "Technical content creation",
        "3D printing & hardware focus",
        "Global audience reach"
      ],
      images: 3,
    },
    {
      company: "Bombardier Aerospace",
      role: "Airworthiness Compliance Engineer",
      period: "Sep 2021 - Dec 2021",
      description:
        "In this compliance-focused engineering role, I ensured that next-generation avionics systems on the Bombardier Global 7500 adhered to EASA and TSO certification standards. I performed cross-functional analysis of system documentation and technical schematics, verifying integration compatibility and regulatory compliance for the latest avionic components.",
      website: "",
      github: "",
      logo: "/bombardier.png",
      highlights: [
        "EASA & TSO compliance",
        "Global 7500 avionics",
        "Regulatory certification"
      ],
      images: 3,
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-white/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Work Experience</h2>
          <p className="text-lg text-gray-600">
            A journey through AI, aerospace, and entrepreneurship
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block" />
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative"
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-3.5 top-8 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-4 border-white shadow-lg hidden md:block z-10"
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                
                <div className="md:ml-16 glass rounded-2xl overflow-hidden hover-lift">
                  {/* Compact Top Level */}
                  <div
                    className="flex items-center gap-5 p-5 cursor-pointer"
                    onClick={() => toggleExpand(index)}
                  >
                    {/* Company Logo/Profile */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center text-gray-800 font-bold text-lg overflow-hidden border border-gray-200 shadow-sm">
                        {exp.logo ? (
                          <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                        ) : (
                          exp.company.charAt(0)
                        )}
                      </div>
                    </div>

                    {/* Company & Role Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-800 truncate">{exp.company}</h3>
                      <p className="text-sm text-gray-600 truncate mt-1">{exp.role}</p>
                    </div>

                    {/* Period & Toggle */}
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <span className="text-sm text-gray-500 hidden sm:block font-medium">{exp.period}</span>
                      <button
                        className="p-2 hover:bg-blue-50 rounded-full transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(index);
                        }}
                      >
                        <motion.div
                          animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={20} className="text-gray-600" />
                        </motion.div>
                      </button>
                    </div>
                  </div>

                  {/* Expandable Details */}
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 pt-2 border-t border-gray-200">
                          {/* Mobile Period */}
                          <p className="text-sm text-gray-500 mb-4 sm:hidden font-medium">{exp.period}</p>

                          {/* Description */}
                          <p className="text-gray-600 leading-relaxed mb-5">{exp.description}</p>

                          {/* Key Highlights */}
                          <div className="mb-5">
                            <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                              <Award size={16} className="text-blue-500" />
                              Key Highlights
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                              {exp.highlights.map((highlight, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-center gap-2 text-sm text-gray-600 bg-blue-50/50 rounded-lg px-3 py-2"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                  <span>{highlight}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Photo Wall */}
                          <div className="mb-5">
                            <h4 className="text-sm font-semibold text-gray-700 mb-3">Gallery</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                              {Array.from({ length: exp.images }).map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: i * 0.1 }}
                                  whileHover={{ scale: 1.05, rotate: 1 }}
                                  className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden border border-gray-300 shadow-sm cursor-pointer group"
                                >
                                  <div className="w-full h-full flex items-center justify-center text-gray-400 group-hover:text-gray-500 transition-colors">
                                    <div className="text-center">
                                      <div className="text-3xl mb-1">📷</div>
                                      <div className="text-xs font-medium">Image {i + 1}</div>
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Links */}
                          <div className="flex flex-wrap gap-3">
                            {exp.website && (
                              <motion.a
                                href={exp.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all text-sm font-medium shadow-sm"
                                onClick={(e) => e.stopPropagation()}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <ExternalLink size={16} />
                                Visit Website
                              </motion.a>
                            )}
                            {exp.github && (
                              <motion.a
                                href={exp.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm font-medium shadow-sm"
                                onClick={(e) => e.stopPropagation()}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <Github size={16} />
                                View GitHub
                              </motion.a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

