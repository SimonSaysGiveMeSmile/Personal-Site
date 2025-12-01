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
      description:
        "Completed an accelerated Cornell M.S. ahead of the typical two-year schedule while balancing startups and research; achieved a high GPA. Scored 133 (~98th percentile) on Mensa’s online IQ challenge.",
    },
  ];

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
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
          className="mt-12 p-10 md:p-14 text-left"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)] mb-6">Background</h3>
          <div className="space-y-4 text-[var(--text-muted)] leading-relaxed">
            <p>
              Currently serving as CEO with 80% equity in my latest venture, I&apos;m building at the intersection of AI
              and physical products. My journey includes founding SkyrisAI (YC top 10%), where I designed a novel flying
              AI pet concept with emotional intelligence, and FreeRange Drones (YC interviewee), an autonomous delivery
              network powered by large language models. These experiences taught me to blend robotics, AI, and product
              design into emotionally engaging systems.
            </p>
            <p>
              I completed my Master&apos;s in Systems Engineering and Data Science at Cornell on an accelerated timeline,
              ahead of the program&apos;s usual two-year duration, while managing research teams, startups, and
              maintaining a high GPA. My technical foundation also includes hands-on experience at ByteDance, Bombardier
              Aerospace, and UC San Diego&apos;s computer vision lab.
            </p>
            <p>
              Beyond startups, I&apos;ve won hackathons, published research on semantic segmentation and autonomous
              driving, and contributed to open-source innovations like integrating virtual reality into the CARLA
              autonomous-vehicle simulator—one of the early VR implementations for that platform.
            </p>
          </div>
        </InteractiveCard>
      </div>
    </section>
  );
}

