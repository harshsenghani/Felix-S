"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroImageSlideshow from "./HeroImageSlideshow";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 min-h-[500px] lg:min-h-[540px] flex items-center py-9 lg:py-11">
      {/* 100% VIEWPORT WIDTH CINEMATIC INDUSTRIAL IMAGE SLIDESHOW BACKGROUND (Sharp Edges, No Blurred Corners) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <HeroImageSlideshow
          externalIndex={activeSlide}
          onSlideChange={(newIdx) => setActiveSlide(newIdx)}
        />
      </div>

      {/* NATURAL SUBTLE GRADIENT OVERLAY BEHIND TEXT FOR OPTIMAL LEGIBILITY (No Boxes, Cards, or Frosted Glass) */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/40 to-transparent pointer-events-none z-10" />

      {/* FOREGROUND HERO CONTENT LAYER — TEXT & BUTTONS LAYERED DIRECTLY OVER SLIDESHOW */}
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-xl lg:max-w-2xl">
          
          {/* Eyebrow with middle dots */}
          <div className="text-[11px] font-extrabold tracking-widest text-blue-400 uppercase mb-4 drop-shadow-sm">
            CODING &nbsp;·&nbsp; MARKING &nbsp;·&nbsp; LABELLING &nbsp;·&nbsp; PACKAGING
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.06] mb-4 drop-shadow-md">
            Precision <br />
            for a <span className="text-blue-400">Smarter</span> <br />
            Tomorrow
          </h1>

          {/* Supporting Subheading */}
          <h2 className="text-xs font-bold text-gray-200 tracking-wider uppercase mb-4 drop-shadow-sm">
            PRECISION APPLIED TO THE MOVING LINE
          </h2>

          {/* Paragraph Copy */}
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-8 max-w-lg font-medium drop-shadow-sm">
            Reliable coding, marking, labelling and packaging solutions designed
            to keep your business moving forward.
          </p>

          {/* Action Buttons: EXPLORE OUR PRODUCTS & CONTACT US */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <MagneticButton strength={0.3}>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-7 py-4 text-xs font-bold text-white bg-felix-blue hover:bg-blue-600 rounded-xl transition-all shadow-lg hover:shadow-xl group"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-4 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm rounded-xl transition-all shadow-sm"
              >
                <span>Contact Us</span>
              </Link>
            </MagneticButton>
          </div>

          {/* 6-Slide Indicators matching 6 industrial images */}
          <div className="flex items-center space-x-3 pt-4 border-t border-white/20">
            {["01", "02", "03", "04", "05", "06"].map((num, idx) => (
              <button
                key={num}
                onClick={() => setActiveSlide(idx)}
                className={`flex items-center space-x-1.5 text-xs font-bold transition-all ${
                  activeSlide === idx
                    ? "text-blue-400 scale-105"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <span className={`h-0.5 transition-all ${activeSlide === idx ? "w-5 bg-blue-400" : "w-2.5 bg-gray-500"}`} />
                <span>{num}</span>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
