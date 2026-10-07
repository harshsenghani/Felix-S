"use client";

import React, { useState } from "react";
import HeroImageSlideshow from "@/components/home/HeroImageSlideshow";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ApplicationsHero() {
  const [activePill, setActivePill] = useState<string | null>(null);

  const subCategories = [
    { label: "Packaging" },
    { label: "Materials" },
    { label: "Production Speeds" },
    { label: "Industry Solutions" },
  ];

  const handlePillClick = (label: string) => {
    setActivePill(activePill === label ? null : label);
    const gridEl = document.getElementById("applications-grid");
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#181A20] text-white py-16 sm:py-20 lg:py-24 mb-6">
      {/* BACKGROUND SLIDESHOW */}
      <HeroImageSlideshow />

      {/* OVERLAY FOR HIGH READABILITY */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-slate-950/20 pointer-events-none" />

      {/* HERO CONTENT AREA */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up" duration={0.6}>
          <div className="max-w-2xl">
            {/* MAIN HEADING */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
              Precision Across <br />
              Every Application
            </h1>

            {/* DESCRIPTION */}
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl mb-8">
              Industrial coding and marking solutions purpose-built for specific packaging substrates, materials, and production speeds.
            </p>

            {/* SUB-CATEGORY PILLS */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {subCategories.map((cat) => {
                const isActive = activePill === cat.label;
                return (
                  <button
                    key={cat.label}
                    onClick={() => handlePillClick(cat.label)}
                    className={`px-4 py-2 text-xs font-semibold rounded-full border backdrop-blur-md transition-all duration-300 ${
                      isActive
                        ? "bg-felix-blue border-blue-400 text-white shadow-lg shadow-blue-500/20 scale-105"
                        : "bg-white/10 hover:bg-white/20 border-white/25 text-white/90 hover:text-white hover:scale-102"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
