"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown, ArrowLeft, Check, ArrowUpRight, Send } from "lucide-react";
import { Product } from "@/data/products";
import { applicationsData } from "@/data/applications";
import RelatedProducts from "@/components/products/RelatedProducts";
import ProductFAQ from "@/components/products/ProductFAQ";

export default function ProductDetailClient({ product, relatedProducts }: { product: Product, relatedProducts?: Product[] }) {
  const hasVariants = product.variants && product.variants.length > 0;
  const [selectedVariantId, setSelectedVariantId] = useState(
    hasVariants ? product.variants![0].id : product.id
  );

  const activeVariant = hasVariants
    ? product.variants!.find((v) => v.id === selectedVariantId) || product.variants![0]
    : product;

  const displayName = hasVariants ? activeVariant.name : product.name;
  const displayShortDesc = activeVariant.shortDescription || product.shortDescription;
  const displayFullDesc = activeVariant.fullDescription || product.fullDescription;
  const displayImage = activeVariant.image || product.image;
  const displayBenefits = activeVariant.keyBenefits?.length ? activeVariant.keyBenefits : product.keyBenefits;
  const displaySpecs = activeVariant.specifications?.length ? activeVariant.specifications : product.specifications;
  const displayApps = activeVariant.applications?.length ? activeVariant.applications : product.applications;

  return (
    <div className="bg-white text-slate-800 font-sans antialiased w-full overflow-hidden">

      {/* ═══════════════════════════════════════════════ */}
      {/* HERO SECTION                                    */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 pt-8 sm:pt-10 pb-16 lg:pb-20">
        
        {/* Back to Products Button */}
        <div className="mb-6">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-felix-blue transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Products</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT — Product Image */}
          <div className="space-y-5">
            <div className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm group">
              <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                <Image
                  alt={displayName}
                  className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-[1.02]"
                  src={displayImage}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Variant Selector */}
            {hasVariants && (
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 block mb-3">Select Model</span>
                <div className="grid grid-cols-2 gap-2.5">
                  {product.variants!.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariantId(variant.id)}
                      className={`text-left border rounded-xl px-4 py-3 text-xs font-medium transition-all ${
                        selectedVariantId === variant.id
                          ? "bg-felix-blue border-felix-blue text-white"
                          : "bg-white border-gray-200 text-slate-700 hover:border-felix-blue"
                      }`}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT — Product Details */}
          <div className="space-y-6">
            {/* Eyebrow: — CATEGORY · BRAND */}
            <div className="flex items-center gap-3">
              <span className="w-7 h-[2.5px] bg-felix-blue rounded-full shrink-0" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-felix-blue">
                {product.categoryLabel}{product.brand ? ` · ${product.brand}` : ""}
              </span>
            </div>

            {/* Product Name */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-slate-900 tracking-tight leading-[1.08]">
              {displayName}
            </h1>

            {/* Short Description */}
            <p className="text-base lg:text-[17px] text-slate-500 leading-relaxed max-w-lg">
              {displayShortDesc}
            </p>

            {/* Key Benefits — clean checkmarks */}
            <div className="space-y-3.5 pt-1">
              {displayBenefits.slice(0, 3).map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-felix-blue mt-0.5 shrink-0" strokeWidth={3} />
                  <span className="text-[15px] text-slate-600 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Link
                href="#request-quote"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-felix-blue hover:bg-felix-navy text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
              >
                <span>Request a quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#specs"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-gray-50 text-slate-700 text-sm font-semibold rounded-xl border border-gray-200 transition-colors"
              >
                <span>Explore specifications</span>
                <ArrowDown className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════ */}
      {/* KEY SPECIFICATIONS — lavender tinted section     */}
      {/* ═══════════════════════════════════════════════ */}
      {displaySpecs && displaySpecs.length > 0 && (
        <section id="specs" className="bg-[#f7f5fc] py-14 sm:py-16">
          <div className="max-w-7xl mx-auto px-6">
            {/* Eyebrow: — AT A GLANCE */}
            <div className="flex items-center gap-3 mb-2">
              <span className="w-7 h-[2.5px] bg-felix-blue rounded-full shrink-0" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-felix-blue">
                AT A GLANCE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-8">
              Key specifications
            </h2>

            {/* Specs Grid — 2 cols mobile, 3 cols desktop, each spec its own tile */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {displaySpecs.map((spec, i) => (
                <div
                  key={`${spec.label}-${i}`}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm px-5 py-5"
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 block mb-2">
                    {spec.label}
                  </span>
                  <span className="text-base font-semibold text-slate-900 leading-snug">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* ═══════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════ */}
      {/* PRODUCT OVERVIEW                                 */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Text */}
            <div className="space-y-6">
              {/* Eyebrow: — PRODUCT OVERVIEW */}
              <div className="flex items-center gap-3">
                <span className="w-7 h-[2.5px] bg-felix-blue rounded-full shrink-0" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-felix-blue">
                  PRODUCT OVERVIEW
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-snug">
                Engineered for reliability<br className="hidden sm:block" /> and performance.
              </h2>

              <p className="text-base text-slate-500 leading-relaxed whitespace-pre-line">
                {displayFullDesc}
              </p>

              {/* KEY APPLICATIONS HEADING & LIST */}
              <div className="pt-4">
                <h3 className="text-xs font-black uppercase tracking-[0.15em] text-slate-400 mb-3">
                  KEY APPLICATIONS
                </h3>
                <div className="border-t border-gray-200">
                  {displayApps.slice(0, 5).map((app, i) => {
                    const matchedApp = applicationsData.find(
                      (a) =>
                        a.name.toLowerCase() === app.toLowerCase() ||
                        a.slug.toLowerCase() === app.toLowerCase().replace(/[^a-z0-9]+/g, "-") ||
                        app.toLowerCase().includes(a.name.toLowerCase()) ||
                        a.name.toLowerCase().includes(app.toLowerCase())
                    );
                    const href = matchedApp ? `/applications/${matchedApp.slug}` : `/applications`;

                    return (
                      <Link
                        key={i}
                        href={href}
                        className="flex items-center justify-between py-4 border-b border-gray-200 group hover:bg-slate-50/80 px-2 rounded-lg transition-colors cursor-pointer"
                      >
                        <span className="text-sm font-medium text-slate-800 group-hover:text-felix-blue transition-colors">{app}</span>
                        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-felix-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right — Image */}
            <div>
              <div className="relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    alt={`${displayName} overview`}
                    className="object-cover"
                    src={displayImage}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Supported Industries — pill chips */}
          <div className="mt-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 block mb-5">
              SUPPORTED INDUSTRIES
            </span>
            <div className="flex flex-wrap gap-2.5">
              {product.industriesServed.map((ind, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-slate-700 hover:border-felix-blue hover:text-felix-blue transition-colors cursor-default"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════ */}
      {/* PRODUCT FAQ                                      */}
      {/* ═══════════════════════════════════════════════ */}
      <ProductFAQ faqs={product.faqs} />

      {/* ═══════════════════════════════════════════════ */}
      {/* RELATED PRODUCTS                                 */}
      {/* ═══════════════════════════════════════════════ */}
      <RelatedProducts currentProduct={product} />


      {/* ═══════════════════════════════════════════════ */}
      {/* REQUEST A QUOTE CTA                              */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="bg-slate-900 text-white py-20" id="request-quote">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Eyebrow: — DIRECT ENGAGEMENT */}
          <div className="flex items-center gap-3 justify-center mb-5">
            <span className="w-7 h-[2.5px] bg-felix-cyan rounded-full shrink-0" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-felix-cyan">
              DIRECT ENGAGEMENT
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Need the right coding solution for your production line?
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            Tell us about your substrate, line speed, and coding requirement, and our team will help you choose the right configuration.
          </p>
          
          <form
            className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-xl max-w-2xl mx-auto text-left space-y-4"
            onSubmit={(e) => { e.preventDefault(); alert("Request submitted. A Felix Solutions representative will contact you shortly."); }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-1.5">Full Name</label>
                <input className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-gray-200 focus:border-felix-blue focus:ring-1 focus:ring-felix-blue outline-none" placeholder="Jane Fernandes" required type="text" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-1.5">Work Email</label>
                <input className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-gray-200 focus:border-felix-blue focus:ring-1 focus:ring-felix-blue outline-none" placeholder="name@company.com" required type="email" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-1.5">Company / Facility</label>
                <input className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-gray-200 focus:border-felix-blue focus:ring-1 focus:ring-felix-blue outline-none" placeholder="Company name" type="text" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-1.5">Line / Substrate</label>
                <input className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-gray-200 focus:border-felix-blue focus:ring-1 focus:ring-felix-blue outline-none" placeholder="e.g., Corrugated carton line" type="text" defaultValue={displayName} />
              </div>
            </div>
            <button className="w-full bg-felix-blue hover:bg-felix-navy text-white font-semibold py-3 rounded-lg text-sm transition-colors shadow-sm flex items-center justify-center gap-2 mt-2" type="submit">
              <span>Submit Request</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
          
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-500 mt-8">
            <Link href="#request-quote" className="hover:text-white transition-colors">Request a Quote</Link>
            <span className="hidden sm:inline text-slate-600">•</span>
            <Link href="/contact" className="hover:text-white transition-colors">Schedule a Demo</Link>
            <span className="hidden sm:inline text-slate-600">•</span>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
