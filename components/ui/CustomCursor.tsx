"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("interactive-hover")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (shouldReduceMotion || !isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-50 top-0 left-0 hidden md:block"
      animate={{
        x: position.x - (isHovered ? 20 : 12),
        y: position.y - (isHovered ? 20 : 12),
        scale: isHovered ? 1.4 : 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.1 }}
    >
      <div
        className={`w-6 h-6 rounded-full border transition-colors duration-300 ${
          isHovered
            ? "border-felix-cyan bg-felix-cyan/15 shadow-[0_0_12px_rgba(139,195,221,0.5)]"
            : "border-felix-blue/60 bg-transparent"
        }`}
      />
    </motion.div>
  );
}
