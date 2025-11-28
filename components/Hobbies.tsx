"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Music, Dumbbell, Play, ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import InteractiveCard from "@/components/InteractiveCard";

interface HobbyItem {
  name: string;
  description: string;
  icon: string;
  mediaType: "image" | "video" | "placeholder";
  media?: string;
  gallery?: string[];
}

interface GalleryState {
  title: string;
  images: string[];
  index: number;
}

export default function Hobbies() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [selectedGallery, setSelectedGallery] = useState<GalleryState | null>(null);

  const openGallery = (title: string, gallery?: string[]) => {
    if (!gallery || gallery.length === 0) return;
    setSelectedGallery({ title, images: gallery, index: 0 });
  };

  const navigateGallery = (direction: "prev" | "next") => {
    if (!selectedGallery) return;
    const { images, index } = selectedGallery;
    const newIndex = direction === "next" ? (index + 1) % images.length : (index - 1 + images.length) % images.length;
    setSelectedGallery({ ...selectedGallery, index: newIndex });
  };

  const jumpToImage = (idx: number) => {
    if (!selectedGallery) return;
    setSelectedGallery({ ...selectedGallery, index: idx });
  };

  const musicalHobbies: HobbyItem[] = [
    {
      name: "Violin",
      description: "Concertmaster energy with solo runs across classical stages and community galas.",
      icon: "🎻",
      mediaType: "image",
      media: "/Violin-1.jpeg",
      gallery: ["/Violin-1.jpeg"],
    },
    {
      name: "Piano",
      description: "Improvising jazz progressions and arranging cinematic themes.",
      icon: "🎹",
      mediaType: "placeholder",
    },
    {
      name: "Guitar",
      description: "Acoustic storytelling blending singer-songwriter and fingerstyle.",
      icon: "🎸",
      mediaType: "image",
      media: "/Guitar-1.jpeg",
      gallery: ["/Guitar-1.jpeg"],
    },
    {
      name: "DJ / Mixing",
      description: "Curating uplifting house and future bass sets for community events.",
      icon: "🎧",
      mediaType: "image",
      media: "/DJ-1.jpeg",
      gallery: ["/DJ-1.jpeg"],
    },
  ];

  const sportHobbies: HobbyItem[] = [
    {
      name: "Tennis",
      description: "Baseline-heavy rallies and league play to sharpen agility.",
      icon: "🎾",
      mediaType: "image",
      media: "/Tennis-1.png",
      gallery: ["/Tennis-1.png"],
    },
    {
      name: "Golf",
      description: "Early-morning rounds focused on tempo, swing planes, and patience.",
      icon: "⛳",
      mediaType: "placeholder",
    },
    {
      name: "Gym",
      description: "Strength programming that mixes hypertrophy blocks with mobility work.",
      icon: "💪",
      mediaType: "image",
      media: "/Gym-1.jpeg",
      gallery: ["/Gym-1.jpeg"],
    },
    {
      name: "Hiking",
      description: "Summiting Bay Area ridgelines and capturing panoramic vistas.",
      icon: "🥾",
      mediaType: "image",
      media: "/Hiking-1.JPEG",
      gallery: ["/Hiking-1.JPEG"],
    },
  ];

  const animalCompanions: HobbyItem[] = [
    {
      name: "Kenu the Puppy",
      description: "Road-trip buddy who reminds me to pause between product sprints.",
      icon: "🐶",
      mediaType: "image",
      media: "/Kenu-Puppy.jpeg",
      gallery: ["/Kenu-Puppy.jpeg"],
    },
    {
      name: "Dodo the Bunny",
      description: "Co-owned Holland lop whose birthday parties keep the team smiling.",
      icon: "🫶",
      mediaType: "image",
      media: "/Dodo-Bunny.jpeg",
      gallery: ["/Dodo-Bunny.jpeg", "/Dodo-Bunny-2.jpeg", "/Dodo-Bunny-3.jpeg"],
    },
    {
      name: "Tuntun the Guinea Pig",
      description: "Tiny CEO of balcony summits—thrives on organic greens and sunshine.",
      icon: "🐹",
      mediaType: "image",
      media: "/Tuntun-Guinea-Pig.JPG",
      gallery: ["/Tuntun-Guinea-Pig.JPG"],
    },
    {
      name: "Bay Area Horses",
      description: "Weekend farm visits to reset, ride, and stay close to nature.",
      icon: "🐴",
      mediaType: "image",
      media: "/Horse.jpeg",
      gallery: ["/Horse.jpeg"],
    },
  ];

  const emceeHighlights: HobbyItem[] = [
    {
      name: "Cornell Spring Festival 2024",
      description: "Hosted the flagship gala, directing 60+ performers and live audiences.",
      icon: "🎤",
      mediaType: "image",
      media: "/Emcee-1.JPG",
      gallery: ["/Emcee-1.JPG", "/Emcee-2.JPG", "/Emcee-3.jpeg"],
    },
  ];

  return (
    <section id="hobbies" className="py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="lux-pill mx-auto mb-6">Lifestyle</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-4">Hobbies & Interests</h2>
          <p className="text-lg text-[var(--text-muted)] max-w-3xl mx-auto">
            Beyond coding and innovation, I find balance through music and sports. These passions fuel my creativity and keep me energized.
          </p>
        </motion.div>

        {/* Musical Hobbies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8 text-[var(--text-primary)]">
            <Music size={32} />
            <h3 className="text-3xl font-semibold">Musical Pursuits</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {musicalHobbies.map((hobby, index) => (
              <InteractiveCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="overflow-hidden group"
              >
                {/* Media Display */}
                <div
                  className={`relative h-64 overflow-hidden rounded-2xl bg-gradient-to-br from-white/30 via-[#c9a76d]/30 to-[#d5d9e7]/40 ${hobby.media ? "cursor-pointer" : ""}`}
                  role={hobby.media ? "button" : undefined}
                  tabIndex={hobby.media ? 0 : undefined}
                  onClick={() => openGallery(hobby.name, hobby.gallery ?? (hobby.media ? [hobby.media] : undefined))}
                >
                  {hobby.media && (
                    <Image
                      src={hobby.media}
                      alt={`${hobby.name} showcase`}
                      fill
                      sizes="(min-width: 1024px) 250px, (min-width: 768px) 45vw, 90vw"
                      className="object-cover"
                    />
                  )}
                  {!hobby.media && (
                    <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-40 group-hover:opacity-60 transition-opacity duration-300">
                      {hobby.icon}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/5" />
                  {hobby.mediaType === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/50 transition-all duration-300 group-hover:scale-110">
                        <Play className="text-white ml-1" size={28} />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                    {hobby.mediaType === "video" ? "Video" : hobby.media ? "Image" : "Placeholder"}
                  </div>
                  <div className="absolute bottom-4 left-4 text-4xl text-white drop-shadow-lg">
                    {hobby.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-2xl font-semibold text-[var(--text-primary)] mb-2">
                    {hobby.name}
                  </h4>
                  <p className="text-[var(--text-muted)]">{hobby.description}</p>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </motion.div>

        {/* Sports Hobbies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8 text-[var(--text-primary)]">
            <Dumbbell size={32} />
            <h3 className="text-3xl font-semibold">Athletic Activities</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sportHobbies.map((hobby, index) => (
              <InteractiveCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="overflow-hidden group"
              >
                {/* Media Display */}
                <div
                  className={`relative h-56 overflow-hidden rounded-2xl bg-gradient-to-br from-[#fdf2d2]/40 via-[#d9dfe8]/35 to-[#babfcd]/40 ${hobby.media ? "cursor-pointer" : ""}`}
                  role={hobby.media ? "button" : undefined}
                  tabIndex={hobby.media ? 0 : undefined}
                  onClick={() => openGallery(hobby.name, hobby.gallery ?? (hobby.media ? [hobby.media] : undefined))}
                >
                  {hobby.media && (
                    <Image
                      src={hobby.media}
                      alt={`${hobby.name} showcase`}
                      fill
                      sizes="(min-width: 1024px) 220px, (min-width: 768px) 45vw, 90vw"
                      className="object-cover"
                    />
                  )}
                  {!hobby.media && (
                    <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-40 group-hover:opacity-60 transition-opacity duration-300">
                      {hobby.icon}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5" />
                  {hobby.mediaType === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/50 transition-all duration-300 group-hover:scale-110">
                        <Play className="text-white ml-1" size={24} />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-3 right-3 px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                    {hobby.mediaType === "video" ? "Video" : hobby.media ? "Image" : "Placeholder"}
                  </div>
                  <div className="absolute bottom-3 left-3 text-3xl text-white drop-shadow-lg">
                    {hobby.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h4 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                    {hobby.name}
                  </h4>
                  <p className="text-[var(--text-muted)] text-sm">{hobby.description}</p>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </motion.div>

        {/* Animal Companions Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8 text-[var(--text-primary)]">
            <span className="text-3xl">🐾</span>
            <h3 className="text-3xl font-semibold">Animal Companions</h3>
          </div>
          <p className="text-center text-[var(--text-muted)] max-w-3xl mx-auto mb-8">
            I recharge with animals as much as athletics—raising a guinea pig, co-owning Dodo the bunny, and visiting Bay Area farms keeps my empathy sharp.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {animalCompanions.map((hobby, index) => (
              <InteractiveCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="overflow-hidden group"
              >
                <div
                  className="relative h-56 overflow-hidden rounded-2xl bg-gradient-to-br from-white/20 via-[#ffe8d2]/40 to-[#d4e4ff]/30 cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onClick={() => openGallery(hobby.name, hobby.gallery)}
                >
                  {hobby.media && (
                    <Image
                      src={hobby.media}
                      alt={`${hobby.name} showcase`}
                      fill
                      sizes="(min-width: 1024px) 220px, (min-width: 768px) 45vw, 90vw"
                      className="object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5" />
                  <div className="absolute top-3 right-3 px-2 py-1 bg-white/30 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                    Gallery
                  </div>
                  <div className="absolute bottom-3 left-3 text-3xl text-white drop-shadow-lg">
                    {hobby.icon}
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{hobby.name}</h4>
                  <p className="text-[var(--text-muted)] text-sm">{hobby.description}</p>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </motion.div>

        {/* Emcee Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8 text-[var(--text-primary)]">
            <span className="text-3xl">🎙️</span>
            <h3 className="text-3xl font-semibold">Emcee Experience</h3>
          </div>
          <p className="text-center text-[var(--text-muted)] max-w-3xl mx-auto mb-8">
            Hosting large-scale events trains the same stage presence I bring to pitching founders, including the 2024 Cornell Spring Festival gala.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emceeHighlights.map((hobby, index) => (
              <InteractiveCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                className="overflow-hidden group"
              >
                <div
                  className="relative h-64 overflow-hidden rounded-2xl bg-gradient-to-br from-[#fdf2d2]/40 via-[#ffe0f4]/40 to-[#c9d4ff]/40 cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onClick={() => openGallery(hobby.name, hobby.gallery ?? (hobby.media ? [hobby.media] : undefined))}
                >
                  {hobby.media && (
                    <Image
                      src={hobby.media}
                      alt={`${hobby.name} showcase`}
                      fill
                      sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 90vw"
                      className="object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/5" />
                  <div className="absolute top-3 right-3 px-2 py-1 bg-white/30 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                    Gallery
                  </div>
                  <div className="absolute bottom-3 left-3 text-3xl text-white drop-shadow-lg">
                    {hobby.icon}
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{hobby.name}</h4>
                  <p className="text-[var(--text-muted)] text-sm">{hobby.description}</p>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </motion.div>

        {/* Optional: Add a quote or personal note */}
        <InteractiveCard
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-16 p-8 text-center"
        >
          <p className="text-xl text-[var(--text-primary)] italic">
            “Creative balance isn’t optional—it comes from music, movement, and the animals & communities that ground me.”
          </p>
        </InteractiveCard>
      </div>

      {selectedGallery && (
        <div className="fixed inset-0 z-50 bg-black/80 px-4 py-10 flex flex-col items-center">
          <div className="w-full max-w-5xl">
            <div className="flex items-center justify-between text-white mb-4">
              <h4 className="text-lg font-semibold">{selectedGallery.title}</h4>
              <button
                className="rounded-full border border-white/40 p-2 hover:bg-white/20 transition"
                onClick={() => setSelectedGallery(null)}
                aria-label="Close gallery"
              >
                <X size={20} />
              </button>
            </div>
            <div className="relative h-[60vh] w-full rounded-3xl overflow-hidden bg-black/40">
              <Image
                src={selectedGallery.images[selectedGallery.index]}
                alt={`${selectedGallery.title} gallery image`}
                fill
                sizes="(min-width: 1024px) 800px, 90vw"
                className="object-contain"
                priority
              />
              {selectedGallery.images.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 backdrop-blur px-3 py-3 text-white"
                    onClick={() => navigateGallery("prev")}
                    aria-label="Previous image"
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 backdrop-blur px-3 py-3 text-white"
                    onClick={() => navigateGallery("next")}
                    aria-label="Next image"
                  >
                    <ChevronRight />
                  </button>
                </>
              )}
            </div>
            {selectedGallery.images.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                {selectedGallery.images.map((img, idx) => (
                  <button
                    key={`${selectedGallery.title}-${idx}`}
                    className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-2xl border ${
                      idx === selectedGallery.index ? "border-white" : "border-white/30"
                    }`}
                    onClick={() => jumpToImage(idx)}
                    aria-label={`View ${selectedGallery.title} image ${idx + 1}`}
                  >
                    <Image src={img} alt="" fill sizes="96px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

