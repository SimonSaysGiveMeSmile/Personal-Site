"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const experiences = [
    {
      company: "Skyris Corp.",
      role: "CTO",
      period: "Jan 2025 - Jun 2025",
      description:
        "At SkyrisAI, I designed the world's flying AI pet that senses and responds to user emotions using multimodal input. I led product strategy, combining emotion recognition, natural language processing, and expressive physical movement. Our prototype incorporated real-time affective computing, computer vision, and GPT-powered dialogue. SkyrisAI redefines emotional companionship through embodied intelligence, blending robotics and personality in a deeply interactive experience.",
      link: "https://skyrisai.com/",
    },
    {
      company: "FreeRange Drones",
      role: "CTO",
      period: "Sep 2024 - Dec 2024",
      description:
        "I co-founded FreeRange to build an autonomous delivery drone network powered by LLMs. I led development of drone flight control systems, integrating real-time language input with spatial planning to optimize routes. We designed battery-swapping base stations on vehicles, enabling 24/7 drone operation. I worked across hardware integration, regulatory compliance, and investor engagement, pushing the boundaries of AI-driven logistics in suburban environments.",
      link: "https://github.com/SimonSaysGiveMeSmile/FreeRange",
    },
    {
      company: "ByteDance",
      role: "Project Manager",
      period: "Mar 2023 - Jun 2023",
      description:
        "As a Project Manager intern at ByteDance, I worked at the intersection of strategy, product, and research. I led in-depth competitor analysis and market research to identify trends, gaps, and emerging opportunities across the AI and productivity software sectors. My insights directly informed the roadmap for key development initiatives. I coordinated across product and engineering teams to streamline communication, ensure project alignment, and deliver timely reports to stakeholders.",
    },
    {
      company: "UC San Diego",
      role: "Computer Vision Research Assistant",
      period: "Feb 2023 - Feb 2024",
      description:
        "At UC San Diego, I contributed to cutting-edge computer vision research, focusing on real-world applications of machine learning. I designed and trained convolutional (CNN) and fully convolutional networks (FCN) to enhance object detection accuracy, playing a pivotal role in the pipeline from model architecture to performance optimization. Leveraging Python, OpenCV, and PyTorch, I developed algorithms capable of handling complex visual data, while collaborating closely with faculty and fellow researchers to document findings and iterate on experimental results.",
    },
    {
      company: "Bombardier Aerospace",
      role: "Aircraft Infotainment Full Stack Developer",
      period: "Jan 2022 - Apr 2022",
      description:
        "At Bombardier, I engineered core features for the Cabin Management System aboard the Global series jets. I developed and integrated full-stack solutions for lighting control, media systems, and device connectivity, ensuring seamless interaction between in-flight hardware and software interfaces. My work spanned embedded software, network configuration, and UI design—balancing performance, safety, and passenger experience.",
    },
    {
      company: "engineering.com",
      role: "Technical Writer",
      period: "Oct 2021 - May 2022",
      description:
        "At engineering.com, I translated complex technical concepts into accessible and engaging content, focusing on 3D printing, DIY hardware projects, and engineering innovations. Drawing from hands-on experience and deep research, I authored articles that educated and inspired a global audience of engineers, hobbyists, and tech enthusiasts.",
      link: "https://www.engineering.com/author/simon-tian/",
    },
    {
      company: "Bombardier Aerospace",
      role: "Airworthiness Compliance Engineer",
      period: "Sep 2021 - Dec 2021",
      description:
        "In this compliance-focused engineering role, I ensured that next-generation avionics systems on the Bombardier Global 7500 adhered to EASA and TSO certification standards. I performed cross-functional analysis of system documentation and technical schematics, verifying integration compatibility and regulatory compliance for the latest avionic components.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Experience</h2>
          <p className="text-lg text-gray-600">
            A journey through AI, aerospace, and entrepreneurship
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1"></div>

                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center glass border-4 border-white shadow-lg z-10">
                    <Briefcase size={24} className="text-white" />
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <div className="glass rounded-2xl p-6 hover-lift">
                    <div className="flex items-center gap-2 mb-2 text-blue-600">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{exp.role}</h3>
                    <h4 className="text-lg font-semibold text-blue-600 mb-3">{exp.company}</h4>
                    <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      >
                        Learn more →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

