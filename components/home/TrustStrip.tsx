"use client";

import React, { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const capabilities = [
  {
    code: "01",
    label: "HIGH-SPEED CIJ & TIJ",
    detail: "Citronix & Anser Inkjet Systems",
    metric: "UPTIME 99.8%",
  },
  {
    code: "02",
    label: "LASER SERIALIZATION",
    detail: "CO2 & Fiber Barcode Marking",
    metric: "ZERO CONSUMABLES",
  },
  {
    code: "03",
    label: "AUTOMATED LABELLING",
    detail: "Front, Back & Wrap Sticker Lines",
    metric: "PRECISION ±0.5MM",
  },
  {
    code: "04",
    label: "DIRECT FACTORY SUPPORT",
    detail: "Navi Mumbai HO & Gujarat Hub",
    metric: "RAPID DISPATCH",
  },
];

export default function TrustStrip() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  return (
    <section className="bg-slate-900 text-white border-y border-slate-800 py-5 sm:py-6 relative overflow-hidden">
      {/* Precision Micro Blueprint Hairlines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#39428515_1px,transparent_1px)] bg-[size:4rem_100%] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-felix-blue/60 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal variant="fade-up" duration={0.4}>
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
            
            {/* LEFT SYSTEM IDENTIFIER */}
            <div className="flex items-center space-x-3 flex-shrink-0">
              <span className="w-2 h-2 rounded-full bg-felix-blue animate-ping" />
              <span className="text-[10px] font-black tracking-widest text-felix-cyan uppercase font-mono">
                ENGINEERING CAPABILITY MATRIX
              </span>
            </div>

            {/* CENTER INTEGRATED PRECISION CAPABILITY LINE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6 flex-grow">
              {capabilities.map((item, idx) => {
                const isHovered = activeItem === idx;
                return (
                  <div
                    key={item.code}
                    onMouseEnter={() => setActiveItem(idx)}
                    onMouseLeave={() => setActiveItem(null)}
                    className="relative group cursor-default p-3 rounded-lg bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/50 hover:border-felix-blue/60 transition-all duration-300"
                  >
                    {/* Top Micro-Line Sweep Accent */}
                    <div
                      className={`absolute top-0 left-3 right-3 h-[2px] bg-gradient-to-r from-felix-blue to-felix-cyan transition-transform duration-300 origin-left ${
                        isHovered ? "scale-x-100" : "scale-x-0"
                      }`}
                    />

                    <div className="flex items-start justify-between mb-1">
                      <span className="text-[10px] font-bold text-felix-cyan/80 font-mono tracking-wider">
                        [{item.code}]
                      </span>
                      <span className="text-[9px] font-extrabold text-slate-400 font-mono tracking-widest uppercase">
                        {item.metric}
                      </span>
                    </div>

                    <h4 className="text-xs font-black text-white tracking-tight leading-tight group-hover:text-felix-cyan transition-colors mb-0.5">
                      {item.label}
                    </h4>
                    <p className="text-[11px] text-gray-400 font-medium tracking-tight">
                      {item.detail}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* RIGHT LOCATION FOOTPRINT STAMP */}
            <div className="hidden xl:flex flex-col items-end flex-shrink-0 pl-4 border-l border-slate-800">
              <span className="text-[9px] font-extrabold tracking-widest text-felix-cyan uppercase font-mono">
                OPERATIONAL HUBS
              </span>
              <span className="text-xs font-black text-white tracking-tight uppercase">
                NAVI MUMBAI & AHMEDABAD
              </span>
            </div>

          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-slate-800" />
    </section>
  );
}
