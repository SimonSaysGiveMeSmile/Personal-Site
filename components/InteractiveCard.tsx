"use client";

import { HTMLMotionProps, motion, TransformProperties, useSpring } from "framer-motion";
import React, { useCallback, useMemo } from "react";

type InteractiveCardProps = HTMLMotionProps<"div"> & {
  className?: string;
};

export default function InteractiveCard({
  className = "",
  children,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  style,
  transformTemplate,
  ...motionProps
}: InteractiveCardProps) {
  const tiltXSpring = useSpring(0, { stiffness: 150, damping: 20, mass: 0.4 });
  const tiltYSpring = useSpring(0, { stiffness: 150, damping: 20, mass: 0.4 });

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const card = event.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      card.style.setProperty("--pointer-x", `${x}px`);
      card.style.setProperty("--pointer-y", `${y}px`);

      // Smaller tilt range to reduce text aliasing/flicker while preserving depth
      const tiltX = ((y - rect.height / 2) / rect.height) * -4;
      const tiltY = ((x - rect.width / 2) / rect.width) * 4;

      tiltXSpring.set(tiltX);
      tiltYSpring.set(tiltY);
    },
    [tiltXSpring, tiltYSpring],
  );

  const resetCard = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    card.style.removeProperty("--pointer-x");
    card.style.removeProperty("--pointer-y");

    tiltXSpring.set(0);
    tiltYSpring.set(0);
  }, [tiltXSpring, tiltYSpring]);

  const composedTransformTemplate = useMemo(
    () =>
      (transform: TransformProperties, generated: string) => {
        const base = transformTemplate ? transformTemplate(transform, generated) : generated;
        return `perspective(900px) ${base}`;
      },
    [transformTemplate],
  );

  return (
    <motion.div
      {...motionProps}
      className={`interactive-card surface-panel ${className}`}
      style={{
        ...style,
        rotateX: tiltXSpring,
        rotateY: tiltYSpring,
      }}
      transformTemplate={composedTransformTemplate}
      onMouseEnter={(event) => {
        event.currentTarget.classList.add("interactive-card--active");
        onMouseEnter?.(event);
      }}
      onMouseMove={(event) => {
        handleMouseMove(event);
        onMouseMove?.(event);
      }}
      onMouseLeave={(event) => {
        event.currentTarget.classList.remove("interactive-card--active");
        resetCard(event);
        onMouseLeave?.(event);
      }}
    >
      {children}
    </motion.div>
  );
}


