"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    src: "/assets/hero-slideshow/slide-1.webp",
    alt: "Industrial continuous inkjet coding and marking production line",
    label: "CODING & MARKING",
  },
  {
    id: 2,
    src: "/assets/hero-slideshow/slide-2.webp",
    alt: "Automatic high-speed bottle labelling machinery",
    label: "AUTOMATIC LABELLING",
  },
  {
    id: 3,
    src: "/assets/hero-slideshow/slide-3.webp",
    alt: "Automated carton packaging and sealing line",
    label: "PACKAGING AUTOMATION",
  },
  {
    id: 4,
    src: "/assets/hero-slideshow/slide-4.webp",
    alt: "Close-up macro of precision industrial printhead",
    label: "PRECISION PRINTHEAD",
  },
  {
    id: 5,
    src: "/assets/hero-slideshow/slide-5.webp",
    alt: "Industrial laser marking and serialization system",
    label: "LASER MARKING",
  },
  {
    id: 6,
    src: "/assets/hero-slideshow/slide-6.webp",
    alt: "State-of-the-art automated factory production line floor",
    label: "PRODUCTION LINE",
  },
];

interface HeroImageSlideshowProps {
  onSlideChange?: (index: number) => void;
  externalIndex?: number;
}

export default function HeroImageSlideshow({
  onSlideChange,
  externalIndex,
}: HeroImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sync if external index is specified manually by user click
  useEffect(() => {
    if (externalIndex !== undefined && externalIndex !== currentIndex) {
      setCurrentIndex(externalIndex % slides.length);
    }
  }, [externalIndex]);

  // AUTOMATIC 3-SECOND TIMER (3000ms) FOR CONTINUOUS 6-IMAGE SLIDESHOW
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % slides.length;
        if (onSlideChange) onSlideChange(next);
        return next;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [onSlideChange]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-950">
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              quality={90}
              sizes="100vw"
              className={`object-cover object-center transform transition-transform duration-[3000ms] ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        );
      })}

    </div>
  );
}
