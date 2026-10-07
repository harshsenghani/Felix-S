"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import AnimatedSectionHeader from "@/components/ui/AnimatedSectionHeader";
import { motion } from "framer-motion";

const processSteps = [
  {
    step: "01",
    name: "PRODUCT ENTRY",
    desc: "Uncoded raw container / package enters high-speed conveyor.",
    image: "/images/industries/food-packaging.webp",
  },
  {
    step: "02",
    name: "CODING",
    desc: "Non-contact CIJ / TIJ applies manufacture & expiry dates.",
    image: "/images/applications/date-batch-coding.webp",
  },
  {
    step: "03",
    name: "MARKING",
    desc: "Laser or high-res inkjet applies 2D DataMatrix / barcodes.",
    image: "/images/applications/barcode-qr-printing.webp",
  },
  {
    step: "04",
    name: "LABELLING",
    desc: "Automatic front/back sticker labelling system applies labels.",
    image: "/images/products/labelling-machine.webp",
  },
  {
    step: "05",
    name: "PACKAGING",
    desc: "Secondary packaging & bulk outer carton coding.",
    image: "/images/applications/carton-case-coding.webp",
  },
  {
    step: "06",
    name: "IDENTIFICATION",
    desc: "Final serialized track & trace verified product ready for market.",
    image: "/images/applications/serialization-traceability.webp",
  },
];

export default function ProcessCapabilitiesSection() {
  return (
    <section className="py-12 lg:py-14 bg-[#F4F4F4] border-t border-gray-200 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ANIMATED SECTION HEADER */}
        <AnimatedSectionHeader
          badge="PRODUCTION-LINE CAPABILITIES"
          title="Solutions Built for the Moving Line"
          variant="stagger-editorial"
        />

        {/* STEP BY STEP PROCESS CARDS */}
        <StaggerContainer staggerChildren={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {processSteps.map((item, idx) => (
            <StaggerItem key={item.step}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative bg-white rounded-xl p-3 border border-gray-200 shadow-sm flex flex-col justify-between group hover:border-felix-blue transition-all h-full"
              >
                <div>
                  {/* Step Number & Badge */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black text-felix-blue bg-felix-smoke px-2 py-0.5 rounded">
                      STEP {item.step}
                    </span>
                    {idx < processSteps.length - 1 && (
                      <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-gray-400 group-hover:text-felix-blue transition-colors" />
                    )}
                  </div>

                  {/* Step Image */}
                  <div className="relative w-full h-24 bg-gray-100 rounded-lg overflow-hidden mb-3">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Step Title & Desc */}
                  <h3 className="text-xs font-bold text-felix-black mb-1 line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-gray-500 line-clamp-3 leading-snug">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 mt-2 border-t border-gray-100 flex items-center space-x-1 text-[10px] font-bold text-felix-blue">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                  <span>Line Ready</span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}

