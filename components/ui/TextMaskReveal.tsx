"use client";

import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

interface TextMaskRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export default function TextMaskReveal({
  text,
  as: Component = "h2",
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
}: TextMaskRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Component className={className}>{text}</Component>;
  }

  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: "100%",
      rotateX: -20,
    },
    visible: {
      opacity: 1,
      y: "0%",
      rotateX: 0,
      transition: {
        duration,
        ease: "easeOut",
      },
    },
  };

  return (
    <Component className={`inline-flex flex-wrap gap-x-[0.25em] overflow-hidden ${className}`}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.3 }}
        variants={containerVariants}
        className="inline-flex flex-wrap gap-x-[0.25em]"
      >
        {words.map((word, idx) => (
          <span key={idx} className="inline-block overflow-hidden py-0.5">
            <motion.span variants={wordVariants} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
