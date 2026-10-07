"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PhoneCall } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative py-12 lg:py-14 bg-gradient-to-r from-[#282F5A] via-[#394285] to-[#2E366C] text-white border-b border-white/10 overflow-hidden">
      {/* Background Diagonal Polygon Geometry */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT CTA CONTENT (7 COLS) */}
          <div className="lg:col-span-7">
            <ScrollReveal variant="fade-up">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-felix-cyan text-[11px] font-extrabold uppercase tracking-widest mb-4">
                <span>EXPLORE CUSTOM SOLUTIONS</span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.1}>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-4 text-white">
                FIND THE RIGHT SOLUTION <br />
                FOR YOUR PRODUCTION LINE
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.2}>
              <p className="text-xs sm:text-base text-gray-200 max-w-xl mb-8 leading-relaxed">
                Schedule a product demo at your doorstep or consult with our packaging line experts today to find the exact continuous inkjet, thermal inkjet, laser, or labelling system for your industry.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.3}>
              <div className="flex flex-wrap items-center gap-4">
                <MagneticButton strength={0.2}>
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center px-8 py-4 text-xs font-bold text-felix-dark bg-white hover:bg-felix-cyan rounded-xl transition-all shadow-xl group"
                  >
                    <span>REQUEST A QUOTE</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MagneticButton>

                <MagneticButton strength={0.2}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all"
                  >
                    <PhoneCall className="w-4 h-4 mr-2" />
                    <span>CONTACT US</span>
                  </Link>
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT PHOTOREALISTIC MACHINERY IMAGE (5 COLS) */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal variant="fade-left" delay={0.2}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl"
              >
                <Image
                  src="/images/hero/hero-machinery.webp"
                  alt="Felix Solutions Industrial Machine"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-felix-dark/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="text-[11px] font-bold text-felix-cyan uppercase tracking-widest">
                    24/7 Sales Helpline: {siteConfig.phones[0]}
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
