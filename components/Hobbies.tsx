"use client";

import { useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Music, Dumbbell, Play, PawPrint } from "lucide-react";
import Image from "next/image";
import InteractiveCard from "@/components/InteractiveCard";
import ImageLightbox, { LightboxImage, LightboxOrigin } from "@/components/ImageLightbox";
import HoverVideo from "@/components/HoverVideo";

interface HobbyItem {
  name: string;
  description: string;
  mediaType: "image" | "video" | "placeholder";
  media?: string;
  video?: string;
  gallery?: string[];
}

interface GalleryState {
  title: string;
  images: LightboxImage[];
  index: number;
  origin?: LightboxOrigin | null;
  isOpen: boolean;
}

export default function Hobbies() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [selectedGallery, setSelectedGallery] = useState<GalleryState | null>(null);

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

  const normalizeImages = (title: string, gallery: (string | LightboxImage)[]) =>
    gallery.map((img, idx) =>
      typeof img === "string" ? { src: img, alt: `${title} image ${idx + 1}` } : img
    );

  const openGallery = (
    title: string,
    gallery?: (string | LightboxImage)[],
    origin?: LightboxOrigin | null
  ) => {
    if (!gallery || gallery.length === 0) return;
    setSelectedGallery({
      title,
      images: normalizeImages(title, gallery),
      index: 0,
      origin: origin ?? null,
      isOpen: true,
    });
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

  const renderPlaceholder = (label: string) => (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
      <span className="text-xs uppercase tracking-[0.25em] opacity-80 mb-2">Media coming soon</span>
      <span className="text-2xl font-semibold opacity-95">{label}</span>
    </div>
  );

  const musicalHobbies: HobbyItem[] = [
    {
      name: "Violin",
      description: "Concertmaster energy with solo runs across classical stages and community galas.",
      mediaType: "video",
      media: "/Violin-1.jpeg",
      video: "/Violin-2.mov",
      gallery: ["/Violin-1.jpeg", "/Violin-2.mov"],
    },
    {
      name: "Piano",
      description: "Improvising jazz progressions and arranging cinematic themes.",
      mediaType: "video",
      video: "/Piano-1.MOV",
      gallery: ["/Piano-1.MOV"],
    },
    {
      name: "Guitar",
      description: "Acoustic storytelling blending singer-songwriter and fingerstyle.",
      mediaType: "video",
      video: "/Guitar-1.mov",
      gallery: ["/Guitar-1.mov"],
    },
    {
      name: "DJ / Mixing",
      description: "Curating uplifting house and future bass sets for community events.",
      mediaType: "image",
      media: "/DJ-1.jpeg",
      gallery: ["/DJ-1.jpeg"],
    },
  ];

  const sportHobbies: HobbyItem[] = [
    {
      name: "Tennis",
      description: "Baseline-heavy rallies and league play to sharpen agility.",
      mediaType: "video",
      media: "/Tennis-1.png",
      video: "/Tennis-2.MOV",
      gallery: ["/Tennis-1.png", "/Tennis-2.MOV"],
    },
    {
      name: "Golf",
      description: "Early-morning rounds focused on tempo, swing planes, and patience.",
      mediaType: "video",
      video: "/Golf-1.mov",
      gallery: ["/Golf-1.mov"],
    },
    {
      name: "Gym",
      description: "Strength programming that mixes hypertrophy blocks with mobility work.",
      mediaType: "image",
      media: "/Gym-1.jpeg",
      gallery: ["/Gym-1.jpeg"],
    },
    {
      name: "Hiking",
      description: "Summiting Bay Area ridgelines and capturing panoramic vistas.",
      mediaType: "image",
      media: "/Hiking-1.JPEG",
      gallery: ["/Hiking-1.JPEG"],
    },
  ];

  const animalCompanions: HobbyItem[] = [
    {
      name: "Kenu the Puppy",
      description: "Road-trip buddy who reminds me to pause between product sprints.",
      mediaType: "image",
      media: "/Kenu-Puppy.jpeg",
      gallery: ["/Kenu-Puppy.jpeg"],
    },
    {
      name: "Dodo the Bunny",
      description: "Co-owned Holland lop whose birthday parties keep the team smiling.",
      mediaType: "image",
      media: "/Dodo-Bunny.jpeg",
      gallery: ["/Dodo-Bunny.jpeg", "/Dodo-Bunny-2.jpeg", "/Dodo-Bunny-3.jpeg"],
    },
    {
      name: "Tuntun the Guinea Pig",
      description: "Tiny CEO of balcony summits—thrives on organic greens and sunshine.",
      mediaType: "image",
      media: "/Tuntun-Guinea-Pig.JPG",
      gallery: ["/Tuntun-Guinea-Pig.JPG"],
    },
    {
      name: "Bay Area Horses",
      description: "Weekend farm visits to reset, ride, and stay close to nature.",
      mediaType: "image",
      media: "/Horse.jpeg",
      gallery: ["/Horse.jpeg"],
    },
  ];

  return (
    <section id="hobbies" className="py-16 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="lux-pill mx-auto mb-6">Lifestyle</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-4">Hobbies & Interests</h2>
          <p className="text-lg text-[var(--text-muted)] max-w-3xl mx-auto">
            Beyond coding and innovation, I find balance through music and sports. These passions fuel my creativity and keep me energised.
          </p>
        </motion.div>

        {/* Musical Hobbies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
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
                {(hobby.media || hobby.video) && (
                  <div
                    className={`relative h-64 overflow-hidden rounded-2xl bg-gradient-to-br from-white/30 via-[#c9a76d]/30 to-[#d5d9e7]/40 cursor-pointer`}
                    role="button"
                    tabIndex={0}
                    onClick={(e: MouseEvent<HTMLDivElement>) =>
                      openGallery(
                        hobby.name,
                        hobby.gallery ?? (hobby.media || hobby.video ? [hobby.media || hobby.video!] : undefined),
                        createOriginFromElement(e.currentTarget)
                      )
                    }
                  >
                    {hobby.video ? (
                      <>
                        <HoverVideo
                          src={hobby.video}
                          alt={`${hobby.name} showcase`}
                          className="absolute inset-0 w-full h-full object-cover"
                          poster={hobby.media}
                        />
                        {!hobby.media && (
                          <div className="absolute inset-0 bg-black/20" />
                        )}
                      </>
                    ) : hobby.media ? (
                      <Image
                        src={hobby.media}
                        alt={`${hobby.name} showcase`}
                        fill
                        sizes="(min-width: 1024px) 250px, (min-width: 768px) 45vw, 90vw"
                        className="object-cover"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/5" />
                    {hobby.mediaType === "video" && !hobby.video && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/50 transition-all duration-300 group-hover:scale-110">
                          <Play className="text-white ml-1" size={28} />
                        </div>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                      {hobby.video ? "Video" : hobby.media ? "Image" : "Placeholder"}
                    </div>
                  </div>
                )}

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
                {(hobby.media || hobby.video) && (
                  <div
                    className={`relative h-56 overflow-hidden rounded-2xl bg-gradient-to-br from-[#fdf2d2]/40 via-[#d9dfe8]/35 to-[#babfcd]/40 cursor-pointer`}
                    role="button"
                    tabIndex={0}
                    onClick={(e: MouseEvent<HTMLDivElement>) =>
                      openGallery(
                        hobby.name,
                        hobby.gallery ?? (hobby.media || hobby.video ? [hobby.media || hobby.video!] : undefined),
                        createOriginFromElement(e.currentTarget)
                      )
                    }
                  >
                    {hobby.video ? (
                      <>
                        <HoverVideo
                          src={hobby.video}
                          alt={`${hobby.name} showcase`}
                          className="absolute inset-0 w-full h-full object-cover"
                          poster={hobby.media}
                        />
                        {!hobby.media && (
                          <div className="absolute inset-0 bg-black/20" />
                        )}
                      </>
                    ) : hobby.media ? (
                      <Image
                        src={hobby.media}
                        alt={`${hobby.name} showcase`}
                        fill
                        sizes="(min-width: 1024px) 220px, (min-width: 768px) 45vw, 90vw"
                        className="object-cover"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5" />
                    {hobby.mediaType === "video" && !hobby.video && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/50 transition-all duration-300 group-hover:scale-110">
                          <Play className="text-white ml-1" size={24} />
                        </div>
                      </div>
                    )}
                    <div className="absolute top-3 right-3 px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                      {hobby.video ? "Video" : hobby.media ? "Image" : "Placeholder"}
                    </div>
                  </div>
                )}

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
          className="mt-12"
        >
          <div className="flex items-center justify-center gap-3 mb-8 text-[var(--text-primary)]">
            <PawPrint size={32} />
            <h3 className="text-3xl font-semibold">Animal Companions</h3>
          </div>
          <p className="text-center text-[var(--text-muted)] max-w-3xl mx-auto mb-8">
            I recharge with animals as much as athletics—raising a guinea pig, co-owning Dodo the bunny and visiting Bay Area farms keeps my empathy sharp.
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
                  onClick={(e: MouseEvent<HTMLDivElement>) =>
                    openGallery(hobby.name, hobby.gallery, createOriginFromElement(e.currentTarget))
                  }
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
          className="mt-12 p-8 text-center"
        >
          <p className="text-xl text-[var(--text-primary)] italic">
            “Creative balance isn’t optional—it comes from music, movement, and the animals & communities that ground me.”
          </p>
        </InteractiveCard>
      </div>

      <ImageLightbox
        isOpen={!!selectedGallery?.isOpen}
        title={selectedGallery?.title ?? ""}
        images={selectedGallery?.images ?? []}
        index={selectedGallery?.index ?? 0}
        onClose={() =>
          setSelectedGallery((prev) => (prev ? { ...prev, isOpen: false } : prev))
        }
        onNavigate={navigateGallery}
        onSelect={jumpToImage}
        origin={selectedGallery?.origin}
      />
    </section>
  );
}

