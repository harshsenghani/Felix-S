"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface ClipRevealImageProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  delay?: number;
}

export default function ClipRevealImage({
  children,
  className = "",
  direction = "up",
  duration = 0.7,
  delay = 0,
}: ClipRevealImageProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const clipMap = {
    up: {
      hidden: { clipPath: "inset(100% 0 0 0)" },
      visible: { clipPath: "inset(0% 0 0 0)" },
    },
    down: {
      hidden: { clipPath: "inset(0 0 100% 0)" },
      visible: { clipPath: "inset(0 0 0% 0)" },
    },
    left: {
      hidden: { clipPath: "inset(0 100% 0 0)" },
      visible: { clipPath: "inset(0 0% 0 0)" },
    },
    right: {
      hidden: { clipPath: "inset(0 0 0 100%)" },
      visible: { clipPath: "inset(0 0 0 0%)" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 1, 0.5, 1],
      }}
      variants={clipMap[direction]}
      className={className}
    >
      {children}
    </motion.div>
  );
}
