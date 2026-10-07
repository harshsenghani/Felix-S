"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Wrench, Headphones, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TiltContainer from "@/components/ui/TiltContainer";

import AnimatedSectionHeader from "@/components/ui/AnimatedSectionHeader";

export default function WhyFelixSection() {
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-[#EBF3FB] via-[#F4F8FC] to-[#EEF4FA] text-felix-black relative overflow-hidden border-b border-gray-200/90" id="why-felix">
      {/* Subtle Technical Blueprint Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#39428508_1px,transparent_1px),linear-gradient(to_bottom,#39428508_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ANIMATED SECTION HEADER */}
        <AnimatedSectionHeader
          badge="WHY FELIX SOLUTIONS"
          icon={ShieldCheck}
          title="Engineered for the Line. Built for the Business."
          variant="blueprint-line"
          align="left"
          className="mb-10"
        />

        {/* EDITORIAL COMPOSITION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-10">
          
          {/* LEFT COLUMN (5 COLS) — NUMERICAL METRICS & KEY CAPABILITIES */}
          <ScrollReveal variant="fade-right" duration={0.6} className="lg:col-span-5 flex flex-col justify-between space-y-5">
            
            {/* STAT BLOCK 1 */}
            <div className="p-6 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200/90 shadow-sm border-l-4 border-l-felix-blue relative overflow-hidden group hover:border-felix-blue/40 hover:shadow-md transition-all duration-300">
              <div className="flex items-baseline space-x-3 mb-1.5">
                <span className="text-3xl sm:text-4xl font-black text-felix-blue tracking-tight">
                  2
                </span>
                <span className="text-xs font-extrabold text-felix-black uppercase tracking-wider">
                  STRATEGIC ENGINEERING HUBS
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Direct technician dispatch from Navi Mumbai (HO) and Ahmedabad (Gujarat) ensuring rapid line intervention and minimal downtime.
              </p>
            </div>

            {/* STAT BLOCK 2 */}
            <div className="p-6 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200/90 shadow-sm border-l-4 border-l-felix-blue relative overflow-hidden group hover:border-felix-blue/40 hover:shadow-md transition-all duration-300">
              <div className="flex items-baseline space-x-3 mb-1.5">
                <span className="text-3xl sm:text-4xl font-black text-felix-blue tracking-tight">
                  100%
                </span>
                <span className="text-xs font-extrabold text-felix-black uppercase tracking-wider">
                  GENUINE INKS & SPARES
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Authorized supply of Citronix (USA) CIJ and Anser TIJ fluids engineered to prevent printhead clogging and maintain optical contrast.
              </p>
            </div>

            {/* STAT BLOCK 3 */}
            <div className="p-6 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200/90 shadow-sm border-l-4 border-l-felix-blue relative overflow-hidden group hover:border-felix-blue/40 hover:shadow-md transition-all duration-300">
              <div className="flex items-baseline space-x-3 mb-1.5">
                <span className="text-3xl sm:text-4xl font-black text-felix-blue tracking-tight">
                  9
                </span>
                <span className="text-xs font-extrabold text-felix-black uppercase tracking-wider">
                  INDUSTRIAL SECTORS SERVED
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Proven track record across Food, Beverage, Pharma, Dairy, Liquor, Automotive, Cosmetics, Agrochemicals, and Cable Extrusion lines.
              </p>
            </div>

          </ScrollReveal>

          {/* RIGHT COLUMN (7 COLS) — HERO INDUSTRIAL PHOTOGRAPHY & PANELS */}
          <ScrollReveal variant="fade-left" duration={0.6} className="lg:col-span-7 flex flex-col justify-between space-y-5">
            
            {/* HERO INDUSTRIAL MACHINERY PHOTO CONTAINER */}
            <TiltContainer maxTilt={4}>
              <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-gray-200 shadow-md group">
                <Image
                  src="/images/hero/hero-machinery.webp"
                  alt="Felix Solutions Line Integration"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                      Substrate Audits & Doorstep Product Demos
                    </h3>
                  </div>

                  <Link
                    href="/quote"
                    style={{ transform: "translateZ(30px)" }}
                    className="relative z-30 pointer-events-auto cursor-pointer inline-flex items-center justify-center px-6 py-3 bg-white text-felix-black hover:bg-felix-blue hover:text-white rounded-xl text-xs font-bold transition-all shadow-lg flex-shrink-0 group uppercase tracking-wider"
                  >
                    <span className="pointer-events-none">BOOK DEMO</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform pointer-events-none" />
                  </Link>
                </div>
              </div>
            </TiltContainer>

            {/* EDITORIAL REASON OVERVIEWS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              <div className="p-5 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200/90 shadow-sm hover:border-felix-blue/40 hover:shadow-md transition-all">
                <h4 className="text-sm font-black text-felix-black mb-1.5 tracking-tight">
                  Bespoke Bracket Fabrication
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">
                  Engineered mounting hardware tailored to your specific conveyor speeds, washdown ratings, and line geometries.
                </p>
              </div>

              <div className="p-5 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200/90 shadow-sm hover:border-felix-blue/40 hover:shadow-md transition-all">
                <h4 className="text-sm font-black text-felix-black mb-1.5 tracking-tight">
                  Line Uptime Commitment
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">
                  Dedicated field engineers, preventive maintenance schedules, and rapid spare parts dispatch to keep lines moving.
                </p>
              </div>

            </div>

          </ScrollReveal>

        </div>

        {/* BOTTOM ACTION STRIP — LIGHTENED FRENCH BLUE TINTED CTA BOX */}
        <ScrollReveal variant="fade-up" delay={0.15}>
          <div className="p-6 sm:p-7 bg-[#E8ECF8] text-[#1D1D1D] rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#CBD5E1]">
            <div>
              <h4 className="text-base sm:text-lg font-black text-[#1D1D1D] mb-1">
                Need a Customized Line Audit or Substrate Ink Test?
              </h4>
              <p className="text-xs text-slate-700 font-medium">
                Send sample substrates to our Navi Mumbai or Ahmedabad facilities for live legibility verification.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-bold text-white bg-felix-blue hover:bg-felix-dark rounded-xl transition-all shadow-md hover:shadow-lg flex-shrink-0 uppercase tracking-wider group"
            >
              <span>TALK WITH AN ENGINEER</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}




