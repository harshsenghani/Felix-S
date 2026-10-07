"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion, useReducedMotion } from "framer-motion";

interface IndustrialFrameCardProps {
  title: string;
  category?: string;
  description: string;
  image: string;
  href: string;
  badge?: string;
  features?: string[];
  index?: number;
  className?: string;
  aspectRatio?: "square" | "video" | "tall";
}

export default function IndustrialFrameCard({
  title,
  category,
  description,
  image,
  href,
  badge,
  features,
  index = 0,
  className = "",
  aspectRatio = "video",
}: IndustrialFrameCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-[16/10]",
    tall: "aspect-[4/5]",
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex flex-col h-full bg-white rounded-2xl border border-gray-200/90 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* CARD IMAGE CONTAINER WITH CLIP-PATH & PAN EFFECT */}
      <div className={`relative w-full ${aspectClasses[aspectRatio]} overflow-hidden bg-gray-900`}>
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-all duration-700 ease-out ${
            isHovered ? "scale-108 filter contrast-[1.05]" : "scale-100 opacity-95"
          }`}
        />
        
        {/* ATMOSPHERIC GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-felix-dark/90 via-felix-dark/30 to-transparent transition-opacity duration-500" />
        
        {/* BRAND BLUE ACCENT SWEEP ON HOVER */}
        <div 
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-felix-blue via-felix-cyan to-felix-blue transition-transform duration-500 origin-left ${
            isHovered ? "scale-x-100" : "scale-x-0"
          }`} 
        />


        {/* IN-IMAGE TITLE OVERLAY FOR IMAGE-FIRST CARDS */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <h3 className="text-base sm:text-lg font-black text-white tracking-tight leading-snug drop-shadow-md group-hover:text-felix-cyan transition-colors">
            {title}
          </h3>
        </div>
      </div>

      {/* CARD BODY CONTENT */}
      <div className="p-5 flex flex-col justify-between flex-1 bg-white">
        <div>
          <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed mb-4 font-normal">
            {description}
          </p>
        </div>

        {/* FOOTER LINK BUTTON */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
          <Link
            href={href}
            className="inline-flex items-center text-xs font-bold text-felix-blue group-hover:text-felix-dark transition-colors tracking-wide uppercase"
          >
            <span>DISCOVER DETAILS</span>
            <span className="ml-1.5 text-lg leading-none transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
