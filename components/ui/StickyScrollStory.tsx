"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface StepItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  stat?: string;
  statLabel?: string;
  badge?: string;
}

interface StickyScrollStoryProps {
  steps: StepItem[];
  title?: string;
  sectionBadge?: string;
  className?: string;
}

export default function StickyScrollStory({
  steps,
  title = "WHY FELIX SOLUTIONS",
  sectionBadge = "ENGINEERING EXCELLENCE",
  className = "",
}: StickyScrollStoryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  if (shouldReduceMotion) {
    return (
      <section className={`py-16 bg-gradient-to-b from-[#21222C] to-felix-dark text-white ${className}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] font-extrabold text-felix-cyan tracking-widest uppercase">{sectionBadge}</span>
            <h2 className="text-3xl font-black text-white mt-2">{title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.id} className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <span className="text-xs font-bold text-felix-cyan">{step.badge}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">{step.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className={`relative bg-gradient-to-b from-[#21222C] via-felix-dark to-[#181920] text-white ${className}`} style={{ height: `${steps.length * 80}vh` }}>
      {/* STICKY CONTAINER */}
      <div className="sticky top-0 h-screen flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto overflow-hidden">
        
        {/* HEADER */}
        <div className="pt-4 z-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-felix-cyan text-[11px] font-extrabold uppercase tracking-widest mb-3 border border-white/10">
            <span>{sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {title}
          </h2>
        </div>

        {/* DYNAMIC PROGRESSIVE CONTENT AREA */}
        <div className="relative flex-1 flex items-center justify-center my-8">
          {steps.map((step, index) => {
            const stepStart = index / steps.length;
            const stepEnd = (index + 1) / steps.length;
            
            // Transform opacity and Y scale based on current scroll position
            const opacity = useTransform(
              scrollYProgress,
              [stepStart, stepStart + 0.08, stepEnd - 0.08, stepEnd],
              [0, 1, 1, 0]
            );

            const scale = useTransform(
              scrollYProgress,
              [stepStart, stepStart + 0.1, stepEnd],
              [0.95, 1, 1.03]
            );

            const y = useTransform(
              scrollYProgress,
              [stepStart, stepStart + 0.1, stepEnd - 0.1, stepEnd],
              [30, 0, 0, -30]
            );

            return (
              <motion.div
                key={step.id}
                style={{ opacity, scale, y }}
                className="absolute inset-x-0 max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/15 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-8">
                  {step.badge && (
                    <span className="inline-block px-3 py-1 rounded-full bg-felix-blue text-white text-[10px] font-black uppercase tracking-wider mb-4">
                      {step.badge}
                    </span>
                  )}
                  <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4 leading-tight">
                    {step.title}
                  </h3>
                  {step.subtitle && (
                    <h4 className="text-sm font-bold text-felix-cyan mb-3 uppercase tracking-wider">
                      {step.subtitle}
                    </h4>
                  )}
                  <p className="text-xs sm:text-base text-gray-200 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {step.stat && (
                  <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-felix-blue/40 to-white/5 rounded-2xl border border-white/10 text-center">
                    <span className="text-4xl sm:text-6xl font-black text-white tracking-tight drop-shadow-md">
                      {step.stat}
                    </span>
                    <span className="text-xs font-bold text-felix-cyan uppercase tracking-widest mt-2">
                      {step.statLabel}
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* STEP INDICATORS */}
        <div className="flex items-center justify-between border-t border-white/10 pt-4 z-20">
          <div className="flex items-center space-x-3">
            {steps.map((_, idx) => {
              const start = idx / steps.length;
              const end = (idx + 1) / steps.length;
              const isActive = useTransform(
                scrollYProgress,
                [start, end],
                [1, 1]
              );
              return (
                <div
                  key={idx}
                  className="w-12 sm:w-20 h-1.5 rounded-full bg-white/20 overflow-hidden relative"
                >
                  <motion.div
                    style={{
                      scaleX: useTransform(scrollYProgress, [start, end], [0, 1]),
                    }}
                    className="absolute inset-0 bg-felix-cyan origin-left"
                  />
                </div>
              );
            })}
          </div>
          <span className="text-xs font-mono font-bold text-gray-400">
            SCROLL TO EXPLORE
          </span>
        </div>

      </div>
    </section>
  );
}
