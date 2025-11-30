"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Trophy, Award, BookOpen, Lightbulb, FileText } from "lucide-react";
import InteractiveCard from "@/components/InteractiveCard";

export default function Accomplishments() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const accomplishments = [
    {
      icon: <Award size={32} />,
      category: "Publications & Research",
      items: [
        {
          title: "Master's Thesis: VR and LLM-backed Autonomous Driving",
          date: "Nov 2024",
          description: "Published research on autonomous driving systems using VR testbeds and large language models",
          links: [
            { label: "Website", url: "https://sites.google.com/cornell.edu/ids-vr-llm-pcad" },
            { label: "ProQuest", url: "https://www.proquest.com/docview/3153491518" },
            { label: "Full Text", url: "https://cornell.box.com/s/7w3a2l5o8w1a2hnucoo6q93nu58s5im7" },
          ],
        },
        {
          title: "Literature Review on Semantic Image Segmentation",
          date: "Nov 2023",
          description: "Published comprehensive review on Fully Convolutional Networks for Semantic Segmentation",
          links: [
            { label: "ResearchGate", url: "https://www.researchgate.net/publication/377220702_Literature_Review_on_Fully_Convolutional_Networks_for_Semantic_Segmentation_by_Jonathan_Long_Evan_Shelhamer_Trevor_Darrell" },
          ],
        },
      ],
    },
    {
      icon: <Trophy size={32} />,
      category: "Competitions & Awards",
      items: [
        {
          title: "2nd Place - Sia Partners H-W3B NYC World League Hackathon",
          date: "Mar 2024",
          description: "Won 2nd place with AuthenTEZ, a blockchain-based NFC authentication system",
          links: [
            { label: "LinkedIn Post", url: "https://www.linkedin.com/posts/maximegonnet_the-first-sia-partners-h-w3b-2024-new-york-activity-7170810307525746688-YzSX" },
          ],
        },
        {
          title: "YC Top 10% - Skyris AI (X25 Batch)",
          date: "2025",
          description: "Selected as top 10% applicant for Y Combinator with flying AI pet innovation",
        },
        {
          title: "YC Interview - FreeRange Drones (W25 Batch)",
          date: "2024",
          description: "Advanced to interview stage for autonomous drone delivery network",
        },
      ],
    },
    {
      icon: <BookOpen size={32} />,
      category: "Test Scores & Certifications",
      items: [
        {
          title: "Mensa IQ Test",
          date: "2023",
          description: "Score: 133 (99th percentile)",
          links: [
            { label: "Official Result", url: "https://www.mensa.org/mensa-iq-challenge/#test" },
          ],
        },
        {
          title: "GRE Quantitative",
          date: "Feb 2023",
          description: "Score: 169/170 (93rd percentile)",
        },
      ],
    },
    {
      icon: <Lightbulb size={32} />,
      category: "Entrepreneurship & Leadership",
      items: [
        {
          title: "Ventures Accelerated - Alumni",
          description: "Completed entrepreneurship accelerator program",
          date: "",
        },
        {
          title: "CVEC - Partner",
          description: "Active partner in Cornell Venture Capital ecosystem",
          date: "",
        },
        {
          title: "Cornell Maker Club & Chorale",
          description: "Member of Maker Club and 1st Violin in Cornell Chorale",
          date: "",
        },
      ],
    },
  ];

  return (
    <section id="accomplishments" className="py-16 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="lux-pill mx-auto mb-6">Accomplishments</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-4">Accomplishments</h2>
          <p className="text-lg text-[var(--text-muted)]">
            Recognition, awards, and notable achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {accomplishments.map((section, index) => (
            <InteractiveCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-[var(--text-primary)]">{section.icon}</div>
                <h3 className="text-2xl font-semibold text-[var(--text-primary)]">{section.category}</h3>
              </div>

              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="pl-4">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-[var(--text-primary)]">{item.title}</h4>
                      {item.date && (
                        <span className="text-sm text-[var(--text-muted)] font-medium">({item.date})</span>
                      )}
                    </div>
                    {item.description && (
                      <p className="text-[var(--text-muted)] text-sm mb-2">{item.description}</p>
                    )}
                    {item.links && item.links.length > 0 && (
                      <div className="flex gap-3 flex-wrap">
                        {item.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium flex items-center gap-1 text-[var(--text-primary)]"
                          >
                            <FileText size={14} />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </InteractiveCard>
          ))}
        </div>

      </div>
    </section>
  );
}

