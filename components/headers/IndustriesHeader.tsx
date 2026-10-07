"use client";

import React from "react";
import Image from "next/image";

export default function IndustriesHeader() {
  return (
    <div className="relative w-full h-[210px] sm:h-[230px] lg:h-[250px] overflow-hidden bg-[#EBF2FA] border-b border-slate-200 select-none">
      
      {/* 1. BACKGROUND GEOMETRIC TEXTURED BASE (Light Felix Blue Facets) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E3ECF6] via-[#EFF5FC] to-[#E6EEF8]" />
      
      {/* Subtle diagonal background polygon accent on right */}
      <div 
        className="absolute top-0 right-0 w-[45%] h-full bg-[#DFE9F5]/60"
        style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)" }}
      />
      
      {/* 2. LEFT PHOTOGRAPHY CONTAINER (Substantial 60% width, crisp natural juice bottle photography) */}
      <div 
        className="absolute top-0 left-0 w-full lg:w-[60%] h-full z-0 overflow-hidden"
        style={{ clipPath: "polygon(0 0, 100% 0, 88% 100%, 0% 100%)" }}
      >
        <Image
          src="/images/headers/header-industries.png"
          alt="Industries We Serve"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
        
        {/* Soft edge shadow on the diagonal border line for depth */}
        <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />
      </div>

      {/* 3. DYNAMIC ANGLED TRANSLUCENT BLUE POLYGON SHARDS */}
      <div 
        className="absolute top-0 right-[35%] xl:right-[38%] w-[12%] h-full z-10 hidden lg:block bg-gradient-to-l from-[#394285]/20 to-[#394285]/40 backdrop-blur-[1px]"
        style={{ clipPath: "polygon(40% 0, 0 0, 60% 100%, 100% 100%)" }}
      />
      <div 
        className="absolute top-0 right-[30%] xl:right-[33%] w-[8%] h-full z-10 hidden lg:block bg-white/70"
        style={{ clipPath: "polygon(30% 0, 0 0, 70% 100%, 100% 100%)" }}
      />
      <div 
        className="absolute top-0 right-[34%] xl:right-[37%] w-[2px] h-full z-15 hidden lg:block bg-[#394285]/50"
        style={{ transform: "skewX(18deg)" }}
      />

      {/* 4. MAIN CONTENT LAYER (Right-aligned text block) */}
      <div className="relative z-20 max-w-[1400px] h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end">
        
        {/* RIGHT EDITORIAL TEXT BLOCK */}
        <div className="w-full lg:w-[42%] xl:w-[38%] py-3 sm:py-4 pl-8 lg:pl-12">
          
          {/* Tagline Indicator Header (No Numbers) */}
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#394285]">
              INDUSTRIES
            </span>
            <span className="w-7 h-[2px] bg-[#394285]" />
          </div>

          {/* Main Title (Integrated Page Title) */}
          <h1 className="text-xl sm:text-2xl lg:text-[1.85rem] font-black text-[#0F172A] tracking-tight leading-[1.15] mb-2">
            Industries We Serve
          </h1>

          {/* Supporting Text */}
          <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed max-w-md">
            Delivering reliable coding, marking, labelling, and packaging solutions engineered for high-speed production lines across diverse industrial sectors.
          </p>

        </div>

      </div>

    </div>
  );
}
