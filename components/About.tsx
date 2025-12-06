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
        "Completed an accelerated Cornell M.S. ahead of the typical two-year schedule while balancing startups and research.",
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
            I’m a builder at the intersection of AI and physical products, focused on turning emerging technologies into things people can actually touch, play with, and feel connected to. Over the past few years I’ve founded and led several AI-driven hardware projects, including a flying AI companion with emotional intelligence and an autonomous drone network for on-demand services. Those experiences taught me how to blend robotics, AI, and product design into systems that feel intuitive, emotionally engaging, and genuinely useful in the real world.            </p>
            <p>
            Before and alongside my startups, I worked across large consumer tech, aerospace systems, and university research labs, where I gained hands-on experience with software, embedded systems, and computer vision. On the technical side, I’ve won hackathons, published work on semantic segmentation and autonomous driving, and contributed to early efforts that brought virtual reality into open-source autonomous-vehicle simulators so researchers could run more realistic human-in-the-loop experiments.
            </p>
            <p>
            Outside of work, a lot of my energy goes into music, movement, and being around people and animals. I’ve played violin for 20 years and picked up piano and guitar along the way; composing, improvising, or just finding a good acoustic corner to play in is one of my favorite ways to reset. I stay active with regular gym sessions, tennis and golf when I can find a partner, and long walks or hikes to think through problems away from a screen. I love traveling to new places—especially where I can combine nature, local food, and quiet time to reflect—and I have a soft spot for animals, whether it is friends’ pets or the random cats and dogs I meet on the street.
            </p>
          </div>
        </InteractiveCard>
      </div>
    </section>
  );
}

