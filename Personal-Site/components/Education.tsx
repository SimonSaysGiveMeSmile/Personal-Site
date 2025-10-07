"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const education = [
    {
      school: "Cornell University",
      degree: "Master of Science",
      field: "Systems Engineering and Data Science",
      period: "Aug 2023 - Dec 2024",
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
      achievements: [
        "Early focus on engineering and technology",
        "Foundation for future technical pursuits",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Education</h2>
          <p className="text-lg text-gray-600">
            Academic excellence and continuous learning
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-8 hover-lift"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <GraduationCap size={40} className="text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 text-blue-600">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{edu.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">{edu.school}</h3>
                  <p className="text-lg font-semibold text-blue-600 mb-2">
                    {edu.degree} - {edu.field}
                  </p>
                  {edu.highlight && (
                    <p className="text-gray-700 font-medium mb-4 italic">{edu.highlight}</p>
                  )}
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 text-gray-600">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

