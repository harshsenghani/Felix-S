"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface KineticMarqueeProps {
  items: string[];
  speed?: number;
  className?: string;
}

export default function KineticMarquee({
  items,
  speed = 25,
  className = "",
}: KineticMarqueeProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={`flex flex-wrap gap-4 justify-center ${className}`}>
        {items.map((item, idx) => (
          <span key={idx} className="text-xs font-bold text-gray-700 px-3 py-1 bg-gray-100 rounded-full">
            {item}
          </span>
        ))}
      </div>
    );
  }

  // Duplicate items array to ensure seamless infinite looping
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`relative w-full overflow-hidden select-none py-3 ${className}`}>
      {/* GRADIENT WIPE MARGINS */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center space-x-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <div key={idx} className="inline-flex items-center space-x-8">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-felix-dark/80 uppercase font-mono">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-felix-blue/40" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
