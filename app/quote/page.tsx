"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, ShieldCheck, Clock, Headphones } from "lucide-react";
import { products } from "@/data/products";
import { industries } from "@/data/industries";
import { applicationsData } from "@/data/applications";
import GeometricBackground from "@/components/ui/GeometricBackground";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MagneticButton from "@/components/ui/MagneticButton";

function QuoteForm() {
  const searchParams = useSearchParams();
  const prefilledProduct = searchParams.get("product") || "";
  const prefilledIndustry = searchParams.get("industry") || "";
  const prefilledApplication = searchParams.get("application") || "";

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 shadow-md relative z-10">
      {submitted ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-100">
            <CheckCircle2 className="w-10 h-10 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-black text-felix-black mb-2">
            Quote Request Received!
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto mb-6 leading-relaxed">
            Thank you for contacting Felix Solutions. Our technical application engineer will review your packaging line requirements and get in touch within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-3 text-xs font-bold text-white bg-felix-blue hover:bg-felix-dark rounded-xl transition-all shadow-md uppercase tracking-wider"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* PERSONAL & COMPANY INFO */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-3 text-xs bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-felix-blue focus:bg-white transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase">
                Company Name *
              </label>
              <input
                type="text"
                required
                placeholder="Enter company name"
                className="w-full px-4 py-3 text-xs bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-felix-blue focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* CONTACT DETAILS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                className="w-full px-4 py-3 text-xs bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-felix-blue focus:bg-white transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 9876543210"
                className="w-full px-4 py-3 text-xs bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-felix-blue focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* INDUSTRY, PRODUCT & APPLICATION DROPDOWNS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase">
                Industry
              </label>
              <select
                defaultValue={prefilledIndustry}
                className="w-full px-4 py-3 text-xs bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-felix-blue focus:bg-white transition-all"
              >
                <option value="">Select Industry...</option>
                {industries.map((ind) => (
                  <option key={ind.id} value={ind.name}>
                    {ind.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase">
                Interested Product
              </label>
              <select
                defaultValue={prefilledProduct}
                className="w-full px-4 py-3 text-xs bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-felix-blue focus:bg-white transition-all"
              >
                <option value="">Select Product...</option>
                {products.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase">
                Application
              </label>
              <select
                defaultValue={prefilledApplication}
                className="w-full px-4 py-3 text-xs bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-felix-blue focus:bg-white transition-all"
              >
                <option value="">Select Application...</option>
                {applicationsData.map((a) => (
                  <option key={a.id} value={a.name}>
                    {a.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* DETAILS TEXTAREA */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase">
              Production Line & Coding Details
            </label>
            <textarea
              rows={4}
              placeholder="Provide production line speed, substrate material (e.g. glass, PET, carton), daily output volume, or specific coding requirements..."
              className="w-full px-4 py-3 text-xs bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-felix-blue focus:bg-white transition-all"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <MagneticButton strength={0.15}>
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full py-3.5 px-6 text-[13px] sm:text-[14px] font-bold text-white bg-felix-blue hover:bg-felix-dark rounded-xl transition-all shadow-md hover:shadow-lg group uppercase tracking-normal whitespace-nowrap"
            >
              <span>SUBMIT QUOTE REQUEST</span>
              <Send className="w-4 h-4 ml-2.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </button>
          </MagneticButton>
        </form>
      )}
    </div>
  );
}

export default function QuotePage() {
  return (
    <GeometricBackground>
      <div className="py-12 sm:py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* HERO / TOP SECTION */}
          <ScrollReveal variant="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <div className="text-xs font-extrabold text-felix-blue uppercase tracking-widest mb-2">
                OFFICIAL CONSULTATION
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-felix-black tracking-tight mb-4">
                Request a Machine Quote
              </h1>

              <p className="text-sm text-gray-600 leading-relaxed">
                Fill out the form below to receive a custom quote and technical solution proposal for your packaging line.
              </p>
            </div>
          </ScrollReveal>

          {/* CENTRAL FORM CARD */}
          <ScrollReveal variant="scale-up" delay={0.1}>
            <Suspense fallback={<div className="text-center py-10 text-xs font-bold text-gray-500">Loading form...</div>}>
              <QuoteForm />
            </Suspense>
          </ScrollReveal>

          {/* TRUST BADGES STRIP BELOW FORM */}
          <ScrollReveal variant="fade-up" delay={0.2}>
            <div className="max-w-3xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center space-x-2 text-gray-500 text-xs font-semibold">
                <Clock className="w-4 h-4 text-felix-blue" />
                <span>Response Within 24 Hours</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-500 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-felix-blue" />
                <span>OEM Guaranteed Quality</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-500 text-xs font-semibold">
                <Headphones className="w-4 h-4 text-felix-blue" />
                <span>24/7 Technical Support</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </GeometricBackground>
  );
}

