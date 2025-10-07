"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { ExternalLink, Github, FileText, Video } from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState("all");

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
      category: "startup",
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
      category: "startup",
    },
    {
      title: "VR-Enhanced Autonomous Vehicle Testing",
      period: "Sep 2023 - Dec 2024",
      description:
        "Research project implementing VR into Carla simulator for immersive autonomous driving system testing. First-of-its-kind integration enabling real-time VR interaction with simulated vehicles.",
      tags: ["VR", "Python", "Autonomous Driving", "Research"],
      links: [
        { type: "video", url: "https://www.youtube.com/watch?v=Tmoptph4ix0", icon: <Video size={16} /> },
        { type: "github", url: "https://github.com/SimonSaysGiveMeSmile/VR-Carla-Integration", icon: <Github size={16} /> },
      ],
      image: "/placeholder-vr.jpg",
      category: "research",
    },
    {
      title: "Immersive VR Research Platform",
      period: "Jan 2024 - Present",
      description:
        "Developing advanced VR research methodologies for human-computer interaction studies. Focus on spatial computing, haptic feedback, and cognitive load assessment in virtual environments.",
      tags: ["VR", "Research", "HCI", "Spatial Computing"],
      links: [
        { type: "report", url: "https://cornell.box.com/s/vr-research-methodology", icon: <FileText size={16} /> },
      ],
      image: "/placeholder-vr-research.jpg",
      category: "research",
    },
    {
      title: "AuthenTEZ - Blockchain NFC Authentication",
      period: "Mar 2024",
      description:
        "NFC-based blockchain authentication system to eliminate counterfeit products. Won 2nd place in hackathon, demonstrating practical Web3 applications.",
      tags: ["Blockchain", "NFC", "Hardware", "Web3"],
      links: [
        { type: "github", url: "https://github.com/SimonSaysGiveMeSmile/AuthenTEZ-Project-Demo", icon: <Github size={16} /> },
      ],
      image: "/placeholder-authentez.jpg",
      category: "personal",
    },
    {
      title: "AI-Powered Personal Assistant",
      period: "Jun 2024 - Aug 2024",
      description:
        "Built a custom AI assistant using fine-tuned language models for personal productivity. Features include natural language task management and intelligent scheduling.",
      tags: ["AI", "NLP", "Productivity", "Personal"],
      links: [
        { type: "github", url: "https://github.com/SimonSaysGiveMeSmile/Personal-AI-Assistant", icon: <Github size={16} /> },
      ],
      image: "/placeholder-ai-assistant.jpg",
      category: "personal",
    },
    {
      title: "Smart Home IoT Network",
      period: "Jan 2023 - May 2023",
      description:
        "Designed and implemented a comprehensive smart home system with custom sensors, automated controls, and energy optimization algorithms.",
      tags: ["IoT", "Smart Home", "Automation", "Energy"],
      links: [
        { type: "github", url: "https://github.com/SimonSaysGiveMeSmile/SmartHome-IoT", icon: <Github size={16} /> },
      ],
      image: "/placeholder-smart-home.jpg",
      category: "personal",
    },
    {
      title: "Computer Vision Security System",
      period: "Sep 2022 - Apr 2023",
      description:
        "Cloud-based facial recognition system with SHA-256 encryption and real-time processing. Demonstrates practical applications of computer vision in security.",
      tags: ["Computer Vision", "Cloud Computing", "Security", "IoT"],
      links: [
        { type: "report", url: "https://cornell.box.com/s/m6wu3fb3qwln2jwe6jpsjbywx9ktld0k", icon: <FileText size={16} /> },
      ],
      image: "/placeholder-facial.jpg",
      category: "academic",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "startup", label: "Startups" },
    { id: "research", label: "Research" },
    { id: "personal", label: "Personal" },
    { id: "academic", label: "Academic" },
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
          <p className="text-lg text-gray-600 mb-8">
            Innovation through code, hardware, and AI
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden hover-lift group"
            >
              {/* Enhanced Project Image Display */}
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-blue-600 opacity-90"></div>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl font-bold mb-2 opacity-90">
                      {project.title.substring(0, 2)}
                    </div>
                    <div className="text-sm opacity-75 capitalize">
                      {project.category}
                    </div>
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-center">
                      <div className="text-lg font-semibold mb-1">View Project</div>
                      <div className="text-sm opacity-90">Click to explore</div>
                    </div>
                  </div>
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

