"use client";

import React from "react";
import Image from "next/image";

export default function ApplicationsHeader() {
  return (
    <div className="relative w-full h-[210px] sm:h-[230px] lg:h-[250px] overflow-hidden bg-[#EBF2FA] border-b border-slate-200 select-none">
      
      {/* 1. BACKGROUND GEOMETRIC TEXTURED BASE (Light Felix Blue Facets) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E6EEF8] via-[#EFF5FC] to-[#E3ECF6]" />
      
      {/* Subtle diagonal background polygon accents */}
      <div 
        className="absolute top-0 left-0 w-[45%] h-full bg-[#DFE9F5]/60"
        style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)" }}
      />
      
      {/* 2. RIGHT PHOTOGRAPHY CONTAINER (Substantial 60% width, coded substrates photo) */}
      <div 
        className="absolute top-0 right-0 w-full lg:w-[60%] h-full z-0 overflow-hidden"
        style={{ clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)" }}
      >
        <Image
          src="/images/headers/header-applications.png"
          alt="Practical Applications for Real Production Lines"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
        
        {/* Soft edge shadow on the diagonal border line for depth */}
        <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />

        {/* 3. SUBTLE APPLICATION PATH TIMELINE OVERLAY AT BOTTOM OF PHOTO */}
        <div className="absolute bottom-0 left-0 right-0 z-20 hidden md:block bg-gradient-to-t from-[#0B132B]/85 via-[#0B132B]/60 to-transparent pt-4 pb-2.5 px-6 sm:px-8">
          <div className="relative flex items-center justify-between max-w-xl ml-auto pr-2">
            
            {/* Horizontal Timeline Hairline */}
            <div className="absolute top-[4px] left-2 right-2 h-[1px] bg-white/40" />

            {[
              { label: "CARTON CODING" },
              { label: "BOTTLE & GLASS MARKING" },
              { label: "MRP PRINTING" },
              { label: "PIPE & CABLE MARKING" },
            ].map((node) => (
              <div key={node.label} className="relative z-10 flex flex-col items-center">
                <span className="w-2 h-2 rounded-full bg-white ring-2 ring-[#394285] shadow-sm mb-1" />
                <span className="text-[9px] font-black uppercase tracking-wider text-white drop-shadow-sm text-center">
                  {node.label}
                </span>
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* 4. DYNAMIC ANGLED TRANSLUCENT BLUE POLYGON SHARDS */}
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

      {/* 5. MAIN CONTENT LAYER */}
      <div className="relative z-20 max-w-[1400px] h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* LEFT EDITORIAL TEXT BLOCK */}
        <div className="w-full lg:w-[48%] xl:w-[44%] py-3 sm:py-4 pr-4">
          
          {/* Tagline Indicator Header (No Numbers) */}
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#394285]">
              APPLICATIONS
            </span>
            <span className="w-7 h-[2px] bg-[#394285]" />
          </div>

          {/* Main Title (Integrated Page Title) */}
          <h1 className="text-xl sm:text-2xl lg:text-[1.85rem] font-black text-[#0F172A] tracking-tight leading-[1.15] mb-2">
            Practical Applications for Real Production Lines
          </h1>

          {/* Supporting Text */}
          <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed max-w-md">
            Browse image-led industrial applications: Date &amp; Batch Coding, MRP Printing, Barcode &amp; QR Code Printing, Serialization, Pipe &amp; Cable Marking, and Case Coding.
          </p>

        </div>

      </div>

    </div>
  );
}
