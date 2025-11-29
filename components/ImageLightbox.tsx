"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface LightboxOrigin {
  top: number;
  left: number;
  width: number;
  height: number;
  viewportWidth: number;
  viewportHeight: number;
}

export interface LightboxImage {
  src: string;
  alt?: string;
}

interface ImageLightboxProps {
  isOpen: boolean;
  title: string;
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onNavigate: (direction: "prev" | "next") => void;
  onSelect?: (index: number) => void;
  origin?: LightboxOrigin | null;
}

export default function ImageLightbox({
  isOpen,
  title,
  images,
  index,
  onClose,
  onNavigate,
  onSelect,
  origin,
}: ImageLightboxProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const initialTransform = useMemo(() => {
    if (!origin) {
      return { opacity: 0, scale: 0.92 };
    }

    const { top, left, width, height, viewportWidth, viewportHeight } = origin;
    const originCenterX = left + width / 2;
    const originCenterY = top + height / 2;
    const viewportCenterX = viewportWidth / 2;
    const viewportCenterY = viewportHeight / 2;

    const x = originCenterX - viewportCenterX;
    const y = originCenterY - viewportCenterY;

    const targetWidth = Math.min(viewportWidth - 32, 1280);
    const targetHeight = viewportHeight * 0.6;

    const scaleX = width / targetWidth;
    const scaleY = height / targetHeight;
    const scale = Math.max(scaleX, scaleY, 0.4);

    return { opacity: 0, x, y, scale };
  }, [origin]);

  if (images.length === 0) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 px-4 py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.3, 1] }}
        >
          <div className="w-full max-w-5xl">
            <div className="mb-4 flex items-center justify-between text-white">
              <h4 className="text-lg font-semibold">{title}</h4>
              <button
                className="rounded-full bg-[var(--surface)] backdrop-blur-[var(--card-blur)] -webkit-backdrop-blur-[var(--card-blur)] p-2 hover:bg-white/15 transition"
                onClick={onClose}
                aria-label="Close gallery"
              >
                <X size={20} />
              </button>
            </div>

            <motion.div
              className="relative h-[60vh] w-full overflow-hidden rounded-3xl bg-black/40"
              initial={initialTransform}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              exit={initialTransform}
              transition={{ duration: 1, ease: [0.25, 1, 0.3, 1] }}
            >
              <Image
                src={images[index].src}
                alt={images[index].alt ?? `${title} gallery image`}
                fill
                sizes="(min-width: 1024px) 800px, 90vw"
                className="object-contain"
                priority
              />

              {images.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/15 px-3 py-3 text-white backdrop-blur hover:bg-white/25 transition"
                    onClick={() => onNavigate("prev")}
                    aria-label="Previous image"
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/15 px-3 py-3 text-white backdrop-blur hover:bg-white/25 transition"
                    onClick={() => onNavigate("next")}
                    aria-label="Next image"
                  >
                    <ChevronRight />
                  </button>
                </>
              )}
            </motion.div>

            {images.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={`${title}-${idx}`}
                    className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-2xl bg-[var(--surface)] backdrop-blur-[var(--card-blur)] -webkit-backdrop-blur-[var(--card-blur)] ${
                      idx === index ? "ring-2 ring-white/50" : ""
                    }`}
                    onClick={() => onSelect?.(idx)}
                    aria-label={`View ${title} image ${idx + 1}`}
                  >
                    <Image src={img.src} alt={img.alt ?? ""} fill sizes="96px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

