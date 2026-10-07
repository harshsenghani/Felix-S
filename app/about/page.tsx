"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck, Cpu, Wrench, Zap, CheckCircle2, Building2, Tag, Factory, Download } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import HeroCapabilityLine from "@/components/home/HeroCapabilityLine";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import AnimatedSectionHeader from "@/components/ui/AnimatedSectionHeader";
import LocationMap from "@/components/ui/LocationMap";
import { downloadProductBrochure } from "@/utils/downloadBrochure";

export default function AboutPage() {
  return (
    <div className="bg-[#F4F8FC] text-felix-black">
      
      {/* 1. HERO — WHO FELIX IS (MID-LIGHT INDUSTRIAL EDITORIAL INTRO) */}
      <section className="py-14 lg:py-20 bg-gradient-to-b from-[#EBF3FB] via-[#F4F8FC] to-white border-b border-gray-200/90">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Narrative Block */}
            <ScrollReveal variant="fade-right" duration={0.6} className="lg:col-span-6">
              <h1 className="text-3xl sm:text-5xl font-black text-felix-black tracking-tight leading-[1.08] mb-5">
                Engineering Line Reliability on India&apos;s High-Speed Packaging Lines
              </h1>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-6 font-medium">
                {siteConfig.description} Headquartered at Gami Industrial Park (Navi Mumbai Pawane MIDC) with regional operations in Ahmedabad, we bring direct technical support, custom bracket engineering, and turnkey line integration to manufacturing plants nationwide.
              </p>

              {/* Verified Capability Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Citronix (USA) CIJ & Anser TIJ Integration",
                  "Navi Mumbai HO & Gujarat Regional Office",
                  "Automated Front & Back Sticker Labelling",
                  "Doorstep Product Demos & Substrate Audits",
                  "Bespoke Conveyor Bracket Fabrication",
                  "Guaranteed Genuine Inks & Spares Supply",
                ].map((item) => (
                  <div key={item} className="flex items-start space-x-2 text-xs text-gray-800 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-felix-blue flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <MagneticButton strength={0.2}>
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold text-white bg-felix-blue hover:bg-felix-dark rounded-xl transition-all shadow-md hover:shadow-xl uppercase tracking-wider group"
                  >
                    <span>Request a Machine Quote</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MagneticButton>

                <MagneticButton strength={0.2}>
                  <button
                    onClick={() => downloadProductBrochure()}
                    className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-bold text-felix-black bg-white hover:bg-gray-100 rounded-xl transition-all border border-gray-300 uppercase tracking-wider cursor-pointer shadow-sm group"
                  >
                    <Download className="w-4 h-4 mr-2 text-felix-blue" />
                    <span>DOWNLOAD PRODUCT BROCHURE</span>
                  </button>
                </MagneticButton>
              </div>
            </ScrollReveal>

            {/* Right Industrial Image Panel */}
            <ScrollReveal variant="fade-left" duration={0.6} className="lg:col-span-6">
              <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 group">
                <Image
                  src="/images/hero/hero-machinery.webp"
                  alt="Felix Solutions Industrial Integration"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 p-4 bg-white/95 backdrop-blur-md rounded-xl border border-white/50 shadow-md flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-felix-blue block mb-0.5">
                      DIRECT ON-SITE SUPPORT
                    </span>
                    <span className="text-xs sm:text-sm font-black text-felix-black">
                      Navi Mumbai HO (Pawane MIDC) & Gujarat Branch (Ahmedabad)
                    </span>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-felix-blue text-white flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* BRAND CAPABILITY HIGHLIGHT STRIP */}
      <HeroCapabilityLine />

      {/* 2. WHAT FELIX DOES — 4-QUADRANT ENGINEERING FOCUS */}
      <section className="py-14 lg:py-18 bg-white border-b border-gray-200/90">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimatedSectionHeader
            badge="CORE CAPABILITY ECOSYSTEM"
            title="PACK • CODE • MARK — Advanced Line Engineering"
            variant="blueprint-line"
            align="left"
            className="mb-10"
          />

          {/* 4 Quadrants */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <StaggerItem>
              <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-200 shadow-sm border-t-4 border-t-felix-blue hover:shadow-md transition-all">
                <h3 className="text-base font-black text-felix-black mb-2 tracking-tight">
                  CIJ Systems (Citronix)
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">
                  High-speed non-contact date & batch coding up to 5 lines with IP65 washdown protection.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-200 shadow-sm border-t-4 border-t-felix-blue hover:shadow-md transition-all">
                <h3 className="text-base font-black text-felix-black mb-2 tracking-tight">
                  TIJ Technology (Anser)
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">
                  Maintenance-free 600 DPI thermal inkjet printing for 2D barcodes and flexible films.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-200 shadow-sm border-t-4 border-t-felix-blue hover:shadow-md transition-all">
                <h3 className="text-base font-black text-felix-black mb-2 tracking-tight">
                  Laser Marking Systems
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">
                  Indelible CO2 & Fiber laser coding for zero-consumable glass, PET, and metal marking.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-200 shadow-sm border-t-4 border-t-felix-blue hover:shadow-md transition-all">
                <h3 className="text-base font-black text-felix-black mb-2 tracking-tight">
                  Sticker Labelling Systems
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">
                  Automatic double-sided front & back sticker labelling for round & flat containers.
                </p>
              </div>
            </StaggerItem>

          </StaggerContainer>

        </div>
      </section>

      {/* 3. WHAT FELIX STANDS FOR — MISSION & VISION EDITORIAL SPLIT */}
      <section className="py-14 lg:py-18 bg-gradient-to-b from-[#EEF4FA] to-[#F4F8FC] border-b border-gray-200/90">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* MISSION */}
            <ScrollReveal variant="fade-right" duration={0.5}>
              <div className="p-8 sm:p-10 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between border-l-4 border-l-felix-blue h-full">
                <div>
                  <span className="text-xs font-bold text-felix-blue uppercase tracking-widest block mb-3">
                    OUR MISSION
                  </span>
                  <h3 className="text-2xl font-black text-felix-black leading-tight mb-4">
                    Maximizing Line Uptime & Regulatory Compliance
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    To provide dependable industrial coding and labelling machinery supported by prompt doorstep technical service, custom bracket engineering, and 100% genuine consumables — ensuring continuous production uptime across Indian factories.
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 text-xs font-extrabold text-felix-blue uppercase tracking-wider">
                  LINE RELIABILITY FIRST
                </div>
              </div>
            </ScrollReveal>

            {/* VISION */}
            <ScrollReveal variant="fade-left" duration={0.5}>
              <div className="p-8 sm:p-10 bg-felix-dark text-white rounded-2xl shadow-xl flex flex-col justify-between border border-slate-800 h-full">
                <div>
                  <span className="text-xs font-bold text-felix-cyan uppercase tracking-widest block mb-3">
                    OUR VISION
                  </span>
                  <h3 className="text-2xl font-black text-white leading-tight mb-4">
                    India&apos;s Most Trusted Packaging Technology Partner
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                    To stand as the premier choice for intelligent coding, marking, product serialization, and automated sticker labelling solutions across Food, Beverage, Pharmaceutical, and Industrial sectors nationwide.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/20 text-xs font-extrabold text-felix-cyan uppercase tracking-wider">
                  PREMIER PACKAGING PARTNER
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* 4. WHERE FELIX OPERATES — PAN-INDIA FOOTPRINT */}
      <section className="py-14 lg:py-18 bg-white border-b border-gray-200/90">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimatedSectionHeader
            badge="STRATEGIC LOCATIONS"
            icon={Factory}
            title="Pan-India Industrial Presence"
            variant="mask-slide"
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.offices.map((office) => (
              <StaggerItem key={office.city}>
                <div className="p-8 bg-[#F8FAFC] rounded-2xl border border-gray-200 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-t-felix-blue h-full">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 bg-felix-blue text-white rounded-xl shadow-md">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-felix-blue bg-white px-3 py-1 rounded-md border border-gray-200">
                        {office.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-felix-black mb-3">
                      Felix Solutions — {office.city}
                    </h3>

                    <div className="text-xs text-gray-600 leading-relaxed mb-6 space-y-1">
                      {office.addressLines.map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200/80 flex flex-wrap items-center justify-between gap-2 text-xs font-bold">
                    <span className="text-felix-blue">
                      Helpline: {siteConfig.phones[0]}
                    </span>
                    <span className="text-gray-500">
                      Email: {siteConfig.email}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* LOCATION MAP EMBED */}
          <div className="mt-12">
            <ScrollReveal variant="fade-up">
              <LocationMap />
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 5. FINAL INDUSTRIAL CTA */}
      <section className="py-14 lg:py-18 bg-gradient-to-b from-[#EBF3FB] via-[#F4F8FC] to-[#EBF3FB] border-t border-b border-gray-200/90 text-felix-black">
        <ScrollReveal variant="scale-up" duration={0.5}>
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <span className="text-[11px] font-extrabold tracking-widest text-felix-blue uppercase mb-3 block">
              READY TO TALK WITH OUR ENGINEERS?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-felix-black mb-5 leading-tight">
              Schedule a Doorstep Demo or Line Audit
            </h2>
            <p className="text-xs sm:text-base text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto font-normal">
              Contact our engineering team in Navi Mumbai or Ahmedabad for an instant consultation, doorstep product demonstration, or customized quotation.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold text-white bg-felix-blue hover:bg-felix-dark rounded-xl transition-all shadow-md hover:shadow-xl group uppercase tracking-wider"
              >
                <span>REQUEST MACHINE QUOTE</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-bold text-felix-black bg-white hover:bg-gray-100 rounded-xl transition-all border border-gray-300 uppercase tracking-wider shadow-sm"
              >
                <span>CONTACT TECHNICAL TEAM</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
