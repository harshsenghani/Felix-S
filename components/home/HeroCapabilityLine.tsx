"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";

const capabilities = [
  {
    title: "High-Speed Inkjet",
    subtitle: "Citronix CIJ & Anser TIJ Coders",
  },
  {
    title: "Laser Serialization",
    subtitle: "CO2 & Fiber Permanent Marking",
  },
  {
    title: "Sticker Labelling",
    subtitle: "Automatic Front & Back Lines",
  },
  {
    title: "Direct Factory Support",
    subtitle: "Navi Mumbai & Ahmedabad Hubs",
  },
];

export default function HeroCapabilityHighlight() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [ambientIdx, setAmbientIdx] = useState<number>(0);
  const shouldReduceMotion = useReducedMotion();

  // AUTOMATIC AMBIENT MOTION — GENTLE SEQUENTIAL HIGHLIGHT CYCLE EVERY 3.5 SECONDS
  useEffect(() => {
    if (shouldReduceMotion || hoveredIdx !== null) return;
    const interval = setInterval(() => {
      setAmbientIdx((prev) => (prev + 1) % capabilities.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [hoveredIdx, shouldReduceMotion]);

  return (
    <section className="bg-gradient-to-r from-[#EBF3FB] via-[#F4F8FC] to-[#EBF3FB] border-y border-[#394285]/20 py-4 sm:py-5 relative overflow-hidden text-[#1D1D1D]">
      {/* Top Subtle French Blue Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#394285]/40 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-6"
        >
          {/* COMPACT HORIZONTAL CAPABILITY HIGHLIGHT STRIP WITH CLEAN DIVISION */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-2 flex-grow sm:divide-x divide-[#394285]/15">
            {capabilities.map((item, idx) => {
              const isHovered = hoveredIdx === idx;
              const isAmbientActive = hoveredIdx === null && ambientIdx === idx;
              const isActive = isHovered || isAmbientActive;

              return (
                <div
                  key={item.title}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`relative p-2.5 rounded-lg transition-all duration-500 cursor-default group ${
                    idx > 0 ? "sm:pl-5" : ""
                  } ${isActive ? "bg-white/80 shadow-sm" : "hover:bg-white/50"}`}
                >
                  {/* Subtle Underline Sweep on Hover / Ambient Cycle */}
                  <div
                    className={`absolute bottom-0 left-2 right-2 h-[2px] bg-[#394285] transition-transform duration-500 origin-left ${
                      isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                    }`}
                  />

                  <div className="flex items-center space-x-2">
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-[#394285] scale-125 shadow-[0_0_6px_rgba(57,66,133,0.6)]"
                          : "bg-[#394285]/40"
                      }`}
                    />
                    <h4
                      className={`text-xs font-black tracking-tight transition-colors duration-300 ${
                        isActive ? "text-[#394285]" : "text-[#1D1D1D] group-hover:text-[#394285]"
                      }`}
                    >
                      {item.title}
                    </h4>
                  </div>

                  <p className="text-[11px] text-gray-600 font-semibold pl-3.5 mt-0.5 tracking-tight leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* RIGHT ACCENT LOCATION FOOTPRINT */}
          <div className="hidden lg:flex items-center space-x-2.5 border-l border-[#394285]/20 pl-6 flex-shrink-0 text-right">
            <div className="w-7 h-7 rounded-lg bg-[#394285]/10 text-[#394285] flex items-center justify-center flex-shrink-0">
              <MapPin className="w-3.5 h-3.5 text-[#394285]" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold text-[#394285] uppercase tracking-widest block leading-none">
                PAN-INDIA SERVICE
              </span>
              <span className="text-xs font-black text-[#1D1D1D] uppercase tracking-tight block mt-0.5">
                NAVI MUMBAI & AHMEDABAD
              </span>
            </div>
          </div>

        </motion.div>
      </div>

      {/* Bottom Subtle Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#394285]/25 to-transparent" />
    </section>
  );
}
