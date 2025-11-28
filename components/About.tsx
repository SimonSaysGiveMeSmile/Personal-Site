"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Brain, Rocket, Code, Award } from "lucide-react";
import InteractiveCard from "@/components/InteractiveCard";

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
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="lux-pill mx-auto mb-6">About Me</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-6">Precision-built intelligence</h2>
          <p className="text-lg text-[var(--text-muted)] max-w-3xl mx-auto">
            A technical founder crafting AI systems that feel tangible—combining emotional intelligence, robotics, and full-stack execution with the clarity of modern industrial design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <InteractiveCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6"
            >
              <div className="text-[var(--text-primary)] mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{item.title}</h3>
              <p className="text-[var(--text-muted)]">{item.description}</p>
            </InteractiveCard>
          ))}
        </div>

        <InteractiveCard
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-10 md:p-14 text-left"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)] mb-6">Background</h3>
          <div className="space-y-4 text-[var(--text-muted)] leading-relaxed">
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
        </InteractiveCard>
      </div>
    </section>
  );
}

