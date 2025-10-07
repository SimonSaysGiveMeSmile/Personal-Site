"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Brain, Rocket, Code, Award } from "lucide-react";

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const highlights = [
    {
      icon: <Brain size={32} />,
      title: "AI & Machine Learning",
      description: "Expertise in computer vision, NLP, and emotional AI with published research",
    },
    {
      icon: <Rocket size={32} />,
      title: "Entrepreneurship",
      description: "YC applicant (top 10%) and interviewee, founded multiple AI-driven startups",
    },
    {
      icon: <Code size={32} />,
      title: "Full-Stack Development",
      description: "From embedded systems to web apps, built products at Bombardier and ByteDance",
    },
    {
      icon: <Award size={32} />,
      title: "Academic Excellence",
      description: "Cornell MS in 1 year with highest GPA, Mensa member (99th percentile)",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I&apos;m a technical founder and AI engineer passionate about building intelligent systems
            that enhance human experiences. With a background spanning computer vision research,
            autonomous systems, and entrepreneurship, I bring ideas to life through cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover-lift"
            >
              <div className="text-blue-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Background</h3>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Currently serving as CEO with 79% equity in my latest venture, I&apos;m building at the intersection
              of AI and physical products. My journey includes founding SkyrisAI (YC top 10%), where I designed
              the world&apos;s flying AI pet with emotional intelligence, and FreeRange Drones (YC interviewee), an
              autonomous delivery network powered by LLMs.
            </p>
            <p>
              I completed my Master&apos;s in Systems Engineering and Data Science at Cornell in half the typical time
              while managing research, startups, and maintaining the highest GPA. My technical foundation comes
              from hands-on experience at companies like ByteDance, Bombardier Aerospace, and UC San Diego&apos;s
              Computer Vision lab.
            </p>
            <p>
              Beyond startups, I&apos;ve won hackathons, published research on semantic segmentation and autonomous
              driving, and contributed to open-source innovations like implementing VR in the Carla simulator
              for the first time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

