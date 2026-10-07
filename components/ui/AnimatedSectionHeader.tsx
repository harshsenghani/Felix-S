"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AnimatedSectionHeaderProps {
  badge?: string;
  icon?: LucideIcon;
  title: string;
  subtitle?: string;
  variant?: "mask-slide" | "stagger-editorial" | "blueprint-line" | "split-accent";
  align?: "center" | "left";
  className?: string;
}

export default function AnimatedSectionHeader({
  badge,
  icon: Icon,
  title,
  subtitle,
  variant = "mask-slide",
  align = "center",
  className = "",
}: AnimatedSectionHeaderProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={`${align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl"} mb-10 sm:mb-12 ${className}`}>
        <h2 className="text-3xl sm:text-5xl font-black text-felix-black tracking-tight leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs sm:text-base text-gray-600 leading-relaxed mt-3">
            {subtitle}
          </p>
        )}
      </div>
    );
  }

  const words = title.split(" ");
  const isCentered = align === "center";

  if (variant === "stagger-editorial") {
    return (
      <div className={`${isCentered ? "text-center max-w-3xl mx-auto" : "max-w-2xl"} mb-10 sm:mb-12 ${className}`}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
          className={`text-3xl sm:text-5xl font-black text-felix-black tracking-tight leading-tight flex flex-wrap gap-x-3 gap-y-1 ${
            isCentered ? "justify-center" : "justify-start"
          }`}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-xs sm:text-base text-gray-600 leading-relaxed mt-3 font-normal"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    );
  }

  if (variant === "blueprint-line") {
    return (
      <div className={`${isCentered ? "text-center max-w-3xl mx-auto" : "max-w-2xl"} mb-10 sm:mb-12 ${className}`}>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative inline-block"
        >
          <h2 className="text-3xl sm:text-5xl font-black text-felix-black tracking-tight leading-tight">
            {title}
          </h2>
          {/* Sweeping Blueprint Hairline Accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="h-[2.5px] bg-gradient-to-r from-felix-blue via-felix-cyan to-felix-blue mt-2.5 origin-left rounded-full"
          />
        </motion.div>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-xs sm:text-base text-gray-600 leading-relaxed mt-3.5 font-normal"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    );
  }

  // DEFAULT VARIANT: mask-slide (Clean clip-path mask reveal)
  return (
    <div className={`${isCentered ? "text-center max-w-3xl mx-auto" : "max-w-2xl"} mb-10 sm:mb-12 ${className}`}>
      <div className="overflow-hidden py-1">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-5xl font-black text-felix-black tracking-tight leading-tight"
        >
          {title}
        </motion.h2>
      </div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-xs sm:text-base text-gray-600 leading-relaxed mt-3 font-normal"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
