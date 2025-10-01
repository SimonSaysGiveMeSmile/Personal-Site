"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { ExternalLink, Github, FileText, Video } from "lucide-react";

export default function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const projects = [
    {
      title: "Skyris - Flying AI Pet",
      period: "Jan 2025 - Jun 2025",
      description:
        "YC applicant for the X25 batch, top 10%. Created a functional prototype and invented a new model architecture to improve the emotional response of generative models.",
      tags: ["AI", "Robotics", "Computer Vision", "NLP"],
      links: [
        { type: "website", url: "https://skyrisai.com/", icon: <ExternalLink size={16} /> },
      ],
      image: "/placeholder-skyris.jpg",
    },
    {
      title: "FreeRange - Autonomous Drone Delivery",
      period: "Sep 2024 - Dec 2024",
      description:
        "YC interviewee for the W25 batch. Invented a distributed drone delivery system with mobile basestation and automatic battery swapping.",
      tags: ["Autonomous Systems", "LLM", "Hardware", "Logistics"],
      links: [
        { type: "github", url: "https://github.com/SimonSaysGiveMeSmile/FreeRange", icon: <Github size={16} /> },
        { type: "demo", url: "https://cornell.box.com/s/czzblhzs7kq8mblfdvei9tt6ip4z7xkz", icon: <FileText size={16} /> },
      ],
      image: "/placeholder-freerange.jpg",
    },
    {
      title: "IDS Lab VR Testbed",
      period: "Sep 2023 - Dec 2024",
      description:
        "Single-handedly implemented VR into Carla simulator using Python for the first time on the internet. Enables immersive testing of autonomous driving systems.",
      tags: ["VR", "Python", "Autonomous Driving", "Simulation"],
      links: [
        { type: "video", url: "https://www.youtube.com/watch?v=Tmoptph4ix0", icon: <Video size={16} /> },
      ],
      image: "/placeholder-vr.jpg",
    },
    {
      title: "AuthenTEZ - Blockchain NFC Authentication",
      period: "Mar 2024",
      description:
        "A NFC-based blockchain access point to eliminate counterfeit products and medications. Built during a hackathon and won 2nd place.",
      tags: ["Blockchain", "NFC", "Hardware", "Web3"],
      links: [
        { type: "github", url: "https://github.com/SimonSaysGiveMeSmile/AuthenTEZ-Project-Demo", icon: <Github size={16} /> },
      ],
      image: "/placeholder-authentez.jpg",
    },
    {
      title: "Facial Recognition in Clouds",
      period: "Sep 2022 - Apr 2023",
      description:
        "Designed and built a facial recognition solution that is executed remotely, utilizing computer vision, SHA-256 encryption, server communication and internet protocol.",
      tags: ["Computer Vision", "Cloud Computing", "Security", "IoT"],
      links: [
        { type: "report", url: "https://cornell.box.com/s/m6wu3fb3qwln2jwe6jpsjbywx9ktld0k", icon: <FileText size={16} /> },
      ],
      image: "/placeholder-facial.jpg",
    },
    {
      title: "Global 7500 Cabin Infotainment System",
      period: "Jan 2021 - Apr 2022",
      description:
        "Full-stack development, rebuilt a previously dysfunctional system that involves phone application, Raspberry Pi server, and Arduino controller for Bombardier aircraft.",
      tags: ["Full-Stack", "IoT", "Mobile", "Embedded Systems"],
      links: [],
      image: "/placeholder-bombardier.jpg",
    },
    {
      title: "Open Sesame - Smart Door Lock",
      period: "Jan 2021 - Apr 2021",
      description:
        "Designed and built a smart door lock that alleviates the pain point of the need to re-install the original lock, utilizing Arduino, C++ coding, mechanical design, and 3D printing.",
      tags: ["IoT", "3D Printing", "Arduino", "Hardware"],
      links: [
        { type: "report", url: "https://cornell.box.com/s/a1fvisqj594x5av9kpbgjz1emkz61eqw", icon: <FileText size={16} /> },
      ],
      image: "/placeholder-opensesame.jpg",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Projects</h2>
          <p className="text-lg text-gray-600">
            Innovation through code, hardware, and AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden hover-lift group"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                  {project.title.substring(0, 2)}
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">{project.period}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.links.length > 0 && (
                  <div className="flex gap-3 flex-wrap">
                    {project.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm"
                      >
                        {link.icon}
                        <span className="capitalize">{link.type}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

