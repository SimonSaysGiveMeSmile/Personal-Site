"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface HoverVideoProps {
  src: string;
  alt?: string;
  className?: string;
  poster?: string;
}

export default function HoverVideo({ src, alt, className = "", poster }: HoverVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPoster, setShowPoster] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovered) {
      video.play().catch(() => {
        // Handle autoplay restrictions gracefully
      });
      setShowPoster(false);
    } else {
      video.pause();
      video.currentTime = 0;
      setShowPoster(true);
    }
  }, [isHovered]);

  return (
    <>
      {poster && showPoster && (
        <Image
          src={poster}
          alt={alt || "Video poster"}
          fill
          className={className}
          sizes="(min-width: 1024px) 250px, (min-width: 768px) 45vw, 90vw"
        />
      )}
      <video
        ref={videoRef}
        src={src}
        className={className}
        loop
        muted
        playsInline
        preload="metadata"
        onLoadedData={() => setIsLoaded(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ display: isLoaded || !poster ? "block" : "none" }}
      />
    </>
  );
}

