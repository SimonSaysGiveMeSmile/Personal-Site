"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Calendar } from "lucide-react";
import Image from "next/image";
import InteractiveCard from "@/components/InteractiveCard";

export default function Education() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const education = [
    {
      school: "Cornell University",
      degree: "Master of Science",
      field: "Systems Engineering and Data Science",
      period: "Aug 2023 - Dec 2024",
      logo: "/cornell.png",
      highlight: "Completed in 1 year (half the typical time) with highest GPA while managing startups and research",
      achievements: [
        "Master's thesis on VR and LLM-backed autonomous driving",
        "Research team management",
        "Full course load while founding multiple startups",
      ],
    },
    {
      school: "Carleton University",
      degree: "Bachelor of Arts",
      field: "Electrical Engineering",
      period: "Sep 2018 - May 2023",
      logo: "/carleton.png",
      achievements: [
        "Multiple co-op positions at Bombardier Aerospace",
        "Published facial recognition research",
        "Active in engineering clubs and maker spaces",
      ],
    },
    {
      school: "Luther College High School",
      degree: "High School Diploma",
      field: "Engineering Focus",
      period: "Sep 2014 - May 2018",
      logo: "/luther.png",
      achievements: [
        "Early focus on engineering and technology",
        "Foundation for future technical pursuits",
      ],
    },
  ];

  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="lux-pill mx-auto mb-6">Education</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-4">Education</h2>
          <p className="text-lg text-[var(--text-muted)]">
            Academic excellence and continuous learning
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <InteractiveCard
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-[var(--surface)] backdrop-blur-[var(--card-blur)] -webkit-backdrop-blur-[var(--card-blur)] flex items-center justify-center p-2 overflow-hidden">
                    <Image
                      src={edu.logo}
                      alt={`${edu.school} logo`}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 text-[var(--text-primary)]">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{edu.period}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-1">{edu.school}</h3>
                  <p className="text-lg font-semibold text-[var(--text-muted)] mb-2">
                    {edu.degree} - {edu.field}
                  </p>
                  {edu.highlight && (
                    <p className="text-[var(--text-primary)] font-medium mb-4 italic">{edu.highlight}</p>
                  )}
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 text-[var(--text-muted)]">
                        <span className="text-[var(--text-primary)] mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </InteractiveCard>
          ))}
        </div>
      </div>
    </section>
  );
}

