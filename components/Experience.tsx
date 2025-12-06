"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { ChevronDown, ExternalLink, Github, Award, Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, MouseEvent, useRef } from "react";
import Image from "next/image";
import InteractiveCard from "@/components/InteractiveCard";
import ImageLightbox, { LightboxImage, LightboxOrigin } from "@/components/ImageLightbox";

interface LightboxState {
  title: string;
  images: LightboxImage[];
  index: number;
  origin?: LightboxOrigin | null;
  isOpen: boolean;
}

export default function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const galleryRefs = useRef<(HTMLDivElement | null)[]>([]);

  const createOriginFromElement = (el: HTMLElement): LightboxOrigin | null => {
    if (typeof window === "undefined") return null;
    const rect = el.getBoundingClientRect();
    return {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
    };
  };

  const experiences = [
    {
      company: "Hireal Inc.",
      role: "Founder & CEO",
      period: "Aug 2025 - Present",
      description:
        "Founded Hireal, an HR agent that helps startups and enterprises evaluate candidates using open-internet information. Built the product from a hackathon prototype to a working solution in three weeks, onboarding three pilot customers. The platform generates evidence-linked scorecards powered by GitHub and LinkedIn signals, with Google login and Stripe payment integration. Revenue model includes subscription fees and pay-per-use assessments, with a goal of securing enterprise partnerships.",
      website: "https://hireal.pro",
      github: "",
      logo: "/hireal.png",
      highlights: [
        "Built MVP in 3 weeks",
        "3 pilot customers onboarded",
        "Scaling toward enterprise partnerships",
      ],
      images: 1,
      gallery: [
        { src: "/Hireal-1.jpeg", alt: "Hireal founder visit at MiraclePlus" },
      ],
    },
    {
      company: "JobHatch Inc.",
      role: "Founder & CEO",
      period: "May 2025 - Aug 2025",
      description:
        "Founded JobHatch Inc. (Delaware C-Corp) to create an AI-driven career platform for job seekers and employers. Launched an MVP in under two weeks, built a 300-person waitlist organically, and conducted extensive user research and interviews. Accepted into Beta University Cohort 9. Relocated from Ithaca to the Bay Area to be closer to customers and investors.",
      website: "https://jobhatch.com",
      github: "",
      logo: "/jobhatch.jpg",
      highlights: [
        "300+ waitlist users organically",
        "283 survey responses",
        "Beta University Cohort 9 participant",
      ],
      images: 5,
      gallery: [
        { src: "/JobHatch-1.jpeg", alt: "JobHatch founder demoing at a booth" },
        { src: "/JobHatch-2.jpeg", alt: "JobHatch brochure close-up" },
        { src: "/JobHatch-3.JPG", alt: "JobHatch presentation banner" },
        { src: "/JobHatch-4.JPG", alt: "JobHatch networking conversation" },
        { src: "/JobHatch-5.jpeg", alt: "JobHatch exhibit hall session" },
      ],
    },
    {
      company: "SkyrisAI Corp.",
      role: "Co-Founder & CTO",
      period: "Jan 2025 - Jun 2025",
      description:
        "At SkyrisAI, I designed a novel flying AI pet concept that senses and responds to user emotions using multimodal input. I led product strategy, combining emotion recognition, natural language processing, and expressive physical movement. Our prototype incorporated real-time affective computing, computer vision, and GPT-powered dialogue to explore how embodied intelligence could foster emotional companionship.",
      website: "https://skyrisai.com/",
      github: "",
      logo: "/skyris.jpeg",
      highlights: [
        "Developed a flying AI pet concept with emotional AI",
        "Integrated multimodal emotion recognition",
        "Implemented real-time affective computing and GPT-powered dialogue",
      ],
      images: 4,
      gallery: [
        { src: "/Skyris-1.jpeg", alt: "Skyris outside Bombardier campus" },
        { src: "/Skyris-2.png", alt: "Skyris badge and workspace" },
        { src: "/Skyris-3.jpeg", alt: "Skyris prototype indoors" },
        { src: "/Skyris-4.jpeg", alt: "Skyris product demonstration" },
      ],
    },
    {
      company: "FreeRange Drones",
      role: "Co-Founder & CTO",
      period: "Sep 2024 - Jan 2025",
      description:
        "Co-founded FreeRange to build an autonomous delivery drone network powered by large language models. Led development of drone flight-control systems, integrating natural-language input with spatial planning to optimize routes. Designed battery-swapping base stations on vehicles for 24/7 operation and worked across hardware integration, regulatory compliance, and investor engagement.",
      website: "",
      github: "https://github.com/SimonSaysGiveMeSmile/FreeRange",
      logo: "/freerange.png",
      highlights: [
        "Language-driven flight control for drones",
        "24/7 autonomous operation via battery-swapping stations",
        "Oversaw hardware, regulatory, and investor relations",
      ],
      images: 3,
      gallery: [
        { src: "/FreeRange-1.jpeg", alt: "FreeRange drone prototype" },
        { src: "/FreeRange-2.jpeg", alt: "FreeRange drone testing lab" },
        { src: "/FreeRange-3.jpeg", alt: "FreeRange auto-charging concept" },
      ],
    },
    {
      company: "ByteDance",
      role: "Project Manager",
      period: "Mar 2023 - Jun 2023",
      description:
        "As a Project Manager intern at ByteDance, I worked at the intersection of strategy, product, and research. I led in-depth competitor analysis and market research to identify trends, gaps, and emerging opportunities across the AI and productivity software sectors. My insights directly informed the roadmap for key development initiatives. I coordinated across product and engineering teams to streamline communication, ensure project alignment, and deliver timely reports to stakeholders.",
      website: "",
      github: "",
      logo: "/bytedance.png",
      highlights: [
        "Strategic market analysis",
        "Cross-team coordination",
        "Product roadmap insights"
      ],
      images: 3,
    },
    {
      company: "UC San Diego",
      role: "Computer Vision Research Assistant",
      period: "Feb 2023 - Feb 2024",
      description:
        "At UC San Diego, I contributed to cutting-edge computer vision research, focusing on real-world applications of machine learning. I designed and trained convolutional (CNN) and fully convolutional networks (FCN) to enhance object detection accuracy, playing a pivotal role in the pipeline from model architecture to performance optimization. Leveraging Python, OpenCV, and PyTorch, I developed algorithms capable of handling complex visual data, while collaborating closely with faculty and fellow researchers to document findings and iterate on experimental results.",
      website: "",
      github: "",
      logo: "/ucsd.png",
      highlights: [
        "CNN/FCN architecture design",
        "Object detection optimization",
        "PyTorch & OpenCV development"
      ],
      images: 3,
    },
    {
      company: "Bombardier Aerospace",
      role: "Aircraft Infotainment Full Stack Developer",
      period: "Jan 2022 - Apr 2022",
      description:
        "At Bombardier, I engineered core features for the Cabin Management System aboard the Global series jets. I developed and integrated full-stack solutions for lighting control, media systems, and device connectivity, ensuring seamless interaction between in-flight hardware and software interfaces. My work spanned embedded software, network configuration, and UI design—balancing performance, safety, and passenger experience.",
      website: "",
      github: "",
      logo: "/bombardier.png",
      highlights: [
        "Global series jets CMS",
        "Full-stack development",
        "Embedded systems integration"
      ],
      images: 3,
      gallery: [
        { src: "/BA-Cabin-1.jpeg", alt: "Bombardier aircraft cabin walkthrough" },
        { src: "/BA-Cabin-2.jpeg", alt: "Bombardier conference event" },
        { src: "/BA-Cabin-3.jpeg", alt: "Bombardier cabin systems showcase" },
      ],
    },
    {
      company: "engineering.com",
      role: "Technical Writer",
      period: "Oct 2021 - May 2022",
      description:
        "At engineering.com, I translated complex technical concepts into accessible and engaging content, focusing on 3D printing, DIY hardware projects, and engineering innovations. Drawing from hands-on experience and deep research, I authored articles that educated and inspired a global audience of engineers, hobbyists, and tech enthusiasts.",
      website: "https://www.engineering.com/author/simon-tian/",
      github: "",
      logo: "/engineering-com.jpeg",
      highlights: [
        "Technical content creation",
        "3D printing & hardware focus",
        "Global audience reach"
      ],
      images: 3,
      gallery: [
        {
          src: "/Eng.com-1.png",
          alt: "Incus and ESA Partner to Bring 3D Printing Technology to Outer Space article thumbnail",
        },
        {
          src: "/Eng.com-2.png",
          alt: "Why This 3D Printer is Slanted and Why It Matters article thumbnail",
        },
        {
          src: "/Eng.com-3.png",
          alt: "JET Smashes Nuclear Fusion Energy Record article thumbnail",
        },
      ],
    },
    {
      company: "Bombardier Aerospace",
      role: "Airworthiness Compliance Engineer",
      period: "Sep 2021 - Dec 2021",
      description:
        "In this compliance-focused engineering role, I ensured that next-generation avionics systems on the Bombardier Global 7500 adhered to EASA and TSO certification standards. I performed cross-functional analysis of system documentation and technical schematics, verifying integration compatibility and regulatory compliance for the latest avionic components.",
      website: "",
      github: "",
      logo: "/bombardier.png",
      highlights: [
        "EASA & TSO compliance",
        "Global 7500 avionics",
        "Regulatory certification"
      ],
      images: 3,
      gallery: [
        { src: "/BA-Avionics-1.jpeg", alt: "Bombardier avionics department tour" },
        { src: "/BA-Avionics-2.jpeg", alt: "Bombardier ID badge" },
        { src: "/BA-Avoinics-3.jpeg", alt: "Bombardier Laurent Beaudoin center" },
      ],
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const openLightbox = (
    title: string,
    gallery?: LightboxImage[],
    startIndex = 0,
    origin?: LightboxOrigin | null
  ) => {
    if (!gallery || gallery.length === 0) return;
    setLightbox({ title, images: gallery, index: startIndex, origin: origin ?? null, isOpen: true });
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (!lightbox) return;
    const { images, index } = lightbox;
    const nextIndex = direction === "next" ? (index + 1) % images.length : (index - 1 + images.length) % images.length;
    setLightbox({ ...lightbox, index: nextIndex });
  };

  const selectLightboxImage = (idx: number) => {
    if (!lightbox) return;
    setLightbox({ ...lightbox, index: idx });
  };

  const scrollGallery = (expIndex: number, direction: "prev" | "next") => {
    const container = galleryRefs.current[expIndex];
    if (!container) return;

    const firstCard = container.querySelector<HTMLElement>("[data-gallery-card]");
    if (!firstCard) return;

    const style = window.getComputedStyle(container);
    const gap = parseFloat(style.columnGap || style.gap || "0");
    const cardWidth = firstCard.offsetWidth + gap;
    const scrollBy = cardWidth * 3; // show up to 3 images per view

    const nextLeft =
      direction === "next" ? container.scrollLeft + scrollBy : container.scrollLeft - scrollBy;

    container.scrollTo({
      left: nextLeft,
      behavior: "smooth",
    });
  };

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="lux-pill mx-auto mb-6">Experience</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-4">
            Work experience
          </h2>
          <p className="text-lg text-[var(--text-muted)]">
            A journey through AI, aerospace, and entrepreneurship
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-7 top-0 bottom-0 hidden md:block pointer-events-none">
            <div className="relative h-full w-[2px] rounded-full bg-gradient-to-b from-white/70 via-white/55 to-white/15">
              <div className="absolute inset-x-[-5px] top-0 bottom-0 bg-gradient-to-b from-[#f9f0dd]/40 via-transparent to-[#d7cec0]/30 blur-md" />
            </div>
          </div>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative"
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-[17px] top-8 hidden h-6 w-6 items-center justify-center rounded-full bg-white/10 shadow-[0_8px_18px_rgba(9,9,11,0.25)] backdrop-blur-sm md:flex"
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="inline-block h-3 w-3 rounded-full bg-gradient-to-br from-[#f6d399] via-[#f7f1e4] to-[#d9dde8] shadow-[0_0_12px_rgba(255,255,255,0.65)]" />
                </motion.div>
                
                <InteractiveCard className="md:ml-16 overflow-hidden">
                  {/* Compact Top Level */}
                  <div
                    className="flex items-center gap-5 p-5 cursor-pointer"
                    onClick={() => toggleExpand(index)}
                  >
                    {/* Company Logo/Profile */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-[var(--surface)] backdrop-blur-[var(--card-blur)] -webkit-backdrop-blur-[var(--card-blur)] flex items-center justify-center text-[var(--text-primary)] font-bold text-lg overflow-hidden shadow-inner">
                        {exp.logo ? (
                          <Image src={exp.logo} alt={exp.company} width={56} height={56} className="w-full h-full object-cover" />
                        ) : (
                          exp.company.charAt(0)
                        )}
                      </div>
                    </div>

                    {/* Company & Role Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-[var(--text-primary)] truncate">{exp.company}</h3>
                      <p className="text-sm text-[var(--text-muted)] truncate mt-1">{exp.role}</p>
                    </div>

                    {/* Period & Toggle */}
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <span className="text-sm text-[var(--text-muted)] hidden sm:block font-medium">{exp.period}</span>
                      <button
                        className="p-2 rounded-full transition-colors text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(index);
                        }}
                      >
                        <motion.div
                          animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={20} />
                        </motion.div>
                      </button>
                    </div>
                  </div>

                  {/* Expandable Details */}
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 pt-2">
                          {/* Mobile Period */}
                          <p className="text-sm text-[var(--text-muted)] mb-4 sm:hidden font-medium">{exp.period}</p>

                          {/* Description */}
                          <p className="text-[var(--text-muted)] leading-relaxed mb-5">{exp.description}</p>

                          {/* Key Highlights */}
                          <div className="mb-5">
                            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                              <Award size={16} />
                              Key Highlights
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                              {exp.highlights.map((highlight, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-center gap-2 text-sm text-[var(--text-muted)] rounded-2xl px-3 py-2 bg-[var(--surface-alt)] backdrop-blur-[var(--card-blur)] -webkit-backdrop-blur-[var(--card-blur)]"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0" />
                                  <span>{highlight}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Photo Wall */}
                          {exp.gallery && exp.gallery.length > 0 && (
                            <div className="mb-5">
                              <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">Gallery</h4>
                              <div className="relative">
                                <div
                                  ref={(el) => {
                                    galleryRefs.current[index] = el;
                                  }}
                                  className="flex flex-nowrap gap-3 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory"
                                >
                                  {exp.gallery.map((image, i) => (
                                    <motion.div
                                      key={image.src}
                                      initial={{ opacity: 0, scale: 0.9 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: i * 0.08 }}
                                      whileHover={{ scale: 1.05, rotate: 0.5 }}
                                      data-gallery-card
                                      className="relative aspect-[16/9] flex-none w-full sm:w-[70%] md:w-1/3 rounded-2xl overflow-hidden bg-[var(--surface-alt)] backdrop-blur-[var(--card-blur)] -webkit-backdrop-blur-[var(--card-blur)] shadow-inner cursor-pointer group snap-center"
                                      role="button"
                                      tabIndex={0}
                                      onClick={(e: MouseEvent<HTMLDivElement>) =>
                                        openLightbox(
                                          exp.company,
                                          exp.gallery,
                                          i,
                                          createOriginFromElement(e.currentTarget)
                                        )
                                      }
                                    >
                                      <div className="relative w-full h-full">
                                        <Image
                                          src={image.src}
                                          alt={image.alt}
                                          fill
                                          sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 90vw"
                                          className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/5" />
                                        <div className="absolute bottom-2 left-2 text-[10px] font-medium text-white bg-black/50 backdrop-blur px-2 py-1 rounded-full">
                                          {image.alt}
                                        </div>
                                      </div>
                                    </motion.div>
                                  ))}
                                </div>

                                {exp.gallery.length > 3 && (
                                  <>
                                    <button
                                      type="button"
                                      className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[var(--surface)]/80 p-2 text-[var(--text-primary)] shadow-lg backdrop-blur hover:bg-[var(--surface)]"
                                      onClick={() => scrollGallery(index, "prev")}
                                      aria-label="Scroll previous images"
                                    >
                                      <ChevronLeft size={18} />
                                    </button>
                                    <button
                                      type="button"
                                      className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[var(--surface)]/80 p-2 text-[var(--text-primary)] shadow-lg backdrop-blur hover:bg-[var(--surface)]"
                                      onClick={() => scrollGallery(index, "next")}
                                      aria-label="Scroll next images"
                                    >
                                      <ChevronRight size={18} />
                                    </button>
                                  </>
                                )}
                              </div>
                            </div>
                          )}

                          {/* Links */}
                          <div className="flex flex-wrap gap-3">
                            {exp.website && (
                              <motion.a
                                href={exp.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-white/80 to-[#f5d08a] text-[#0f0f10] text-sm font-semibold shadow-lg"
                                onClick={(e) => e.stopPropagation()}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <ExternalLink size={16} />
                                Visit Website
                              </motion.a>
                            )}
                            {exp.github && (
                              <motion.a
                                href={exp.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--surface)] backdrop-blur-[var(--card-blur)] -webkit-backdrop-blur-[var(--card-blur)] text-[var(--text-primary)] text-sm font-semibold"
                                onClick={(e) => e.stopPropagation()}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <Github size={16} />
                                View GitHub
                              </motion.a>
                            )}
                            {exp.company === "engineering.com" && (
                              <>
                                <motion.a
                                  href="https://www.engineering.com/incus-and-esa-partner-to-bring-3d-printing-technology-to-outer-space/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[var(--surface-alt)] backdrop-blur-[var(--card-blur)] -webkit-backdrop-blur-[var(--card-blur)] text-[var(--text-primary)] text-xs sm:text-sm font-semibold"
                                  onClick={(e) => e.stopPropagation()}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <ExternalLink size={14} />
                                  Incus & ESA 3D Printing Article
                                </motion.a>
                                <motion.a
                                  href="https://www.engineering.com/why-this-3d-printer-is-slanted-and-why-it-matters/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[var(--surface-alt)] backdrop-blur-[var(--card-blur)] -webkit-backdrop-blur-[var(--card-blur)] text-[var(--text-primary)] text-xs sm:text-sm font-semibold"
                                  onClick={(e) => e.stopPropagation()}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <ExternalLink size={14} />
                                  Slanted 3D Printer Article
                                </motion.a>
                                <motion.a
                                  href="https://www.engineering.com/jet-smashes-nuclear-fusion-energy-record/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[var(--surface-alt)] backdrop-blur-[var(--card-blur)] -webkit-backdrop-blur-[var(--card-blur)] text-[var(--text-primary)] text-xs sm:text-sm font-semibold"
                                  onClick={(e) => e.stopPropagation()}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <ExternalLink size={14} />
                                  JET Fusion Energy Record Article
                                </motion.a>
                              </>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </InteractiveCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <ImageLightbox
        isOpen={!!lightbox?.isOpen}
        title={lightbox?.title ?? ""}
        images={lightbox?.images ?? []}
        index={lightbox?.index ?? 0}
        onClose={() =>
          setLightbox((prev) => (prev ? { ...prev, isOpen: false } : prev))
        }
        onNavigate={navigateLightbox}
        onSelect={selectLightboxImage}
        origin={lightbox?.origin}
      />
    </section>
  );
}

