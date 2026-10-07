"use client";

import React from "react";
import Image from "next/image";

export default function ProductsHeader() {
  return (
    <div className="relative w-full h-[210px] sm:h-[230px] lg:h-[250px] overflow-hidden bg-[#EBF2FA] border-b border-slate-200 select-none">
      
      {/* 1. BACKGROUND GEOMETRIC TEXTURED BASE (Light Felix Blue Facets) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E6EEF8] via-[#EFF5FC] to-[#E3ECF6]" />
      
      {/* Subtle diagonal background polygon accent */}
      <div 
        className="absolute top-0 left-0 w-[45%] h-full bg-[#DFE9F5]/60"
        style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)" }}
      />
      
      {/* 2. RIGHT PHOTOGRAPHY CONTAINER (Substantial 60% width, crisp natural colors) */}
      <div 
        className="absolute top-0 right-0 w-full lg:w-[60%] h-full z-0 overflow-hidden"
        style={{ clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)" }}
      >
        <Image
          src="/images/headers/header-products.png"
          alt="Industrial Coding & Marking Solutions"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
        
        {/* Soft edge shadow on the diagonal border line for depth */}
        <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
      </div>

      {/* 3. DYNAMIC ANGLED TRANSLUCENT BLUE POLYGON SHARDS */}
      <div 
        className="absolute top-0 left-[34%] xl:left-[36%] w-[12%] h-full z-10 hidden lg:block bg-gradient-to-r from-[#394285]/20 to-[#394285]/40 backdrop-blur-[1px]"
        style={{ clipPath: "polygon(60% 0, 100% 0, 40% 100%, 0% 100%)" }}
      />
      <div 
        className="absolute top-0 left-[29%] xl:left-[31%] w-[8%] h-full z-10 hidden lg:block bg-white/70"
        style={{ clipPath: "polygon(70% 0, 100% 0, 30% 100%, 0% 100%)" }}
      />
      <div 
        className="absolute top-0 left-[33%] xl:left-[35%] w-[2px] h-full z-15 hidden lg:block bg-[#394285]/50"
        style={{ transform: "skewX(-18deg)" }}
      />

      {/* 4. MAIN CONTENT LAYER */}
      <div className="relative z-20 max-w-[1400px] h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* LEFT EDITORIAL TEXT BLOCK */}
        <div className="w-full lg:w-[48%] xl:w-[44%] py-3 sm:py-4 pr-4">
          
          {/* Tagline Indicator Header (No Numbers) */}
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#394285]">
              PRODUCTS
            </span>
            <span className="w-7 h-[2px] bg-[#394285]" />
          </div>

          {/* Main Title (Integrated Page Title) */}
          <h1 className="text-xl sm:text-2xl lg:text-[1.85rem] font-black text-[#0F172A] tracking-tight leading-[1.15] mb-2">
            Industrial Coding &amp; Marking Solutions
          </h1>

          {/* Supporting Text */}
          <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed max-w-md">
            Explore our range of coding, marking, labelling, packaging and material handling solutions.
          </p>

        </div>

        {/* FAR-RIGHT CATEGORY LIST (Subtle integrated labels) */}
        <div className="hidden xl:flex flex-col space-y-2 z-20 py-2 pr-6 shrink-0 text-right">
          {[
            "CODING & MARKING",
            "LABELLING",
            "PACKAGING & SEALING",
            "MATERIAL HANDLING",
          ].map((item) => (
            <div key={item} className="flex items-center justify-end space-x-2.5">
              <span className="w-5 h-[1.5px] bg-[#394285]/70" />
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0F172A] bg-white/80 backdrop-blur-md px-2.5 py-0.5 rounded shadow-sm border border-white/60">
                {item}
              </span>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
