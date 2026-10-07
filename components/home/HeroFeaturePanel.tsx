"use client";

import React from "react";
import { Cpu, ShieldCheck, BarChart3, Users, ChevronLeft, ChevronRight } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "HIGH PERFORMANCE",
    desc: "Reliable production-line coding",
  },
  {
    icon: ShieldCheck,
    title: "RELIABLE & CONSISTENT",
    desc: "Industrial coding and marking solutions",
  },
  {
    icon: BarChart3,
    title: "INDUSTRY EXPERTISE",
    desc: "Solutions for diverse manufacturing sectors",
  },
  {
    icon: Users,
    title: "END-TO-END SUPPORT",
    desc: "Solution and technical assistance",
  },
];

export default function HeroFeaturePanel() {
  return (
    <div className="relative w-full h-full bg-gradient-to-b from-[#394285] to-[#21222C] text-white p-6 sm:p-8 flex flex-col justify-between rounded-xl lg:rounded-l-none border-l border-white/10 shadow-2xl">
      {/* HEADER AREA */}
      <div>
        <div className="text-[11px] font-bold tracking-widest text-felix-cyan uppercase mb-1">
          TRUSTED BY INDUSTRIES
        </div>
        <h3 className="text-lg font-bold tracking-tight text-white mb-6">
          BUILT FOR WHAT'S NEXT
        </h3>

        {/* 4 FEATURE ROWS */}
        <div className="space-y-5">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="group">
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-felix-cyan group-hover:text-felix-dark transition-all flex-shrink-0">
                    <Icon className="w-5 h-5 text-felix-cyan group-hover:text-felix-dark transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-wide uppercase">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-gray-300 mt-0.5 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
                {idx < features.length - 1 && (
                  <div className="mt-4 border-b border-white/10" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* FOOTER NAV ARROWS MATCHING APPROVED GUI */}
      <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-end space-x-2">
        <button
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
