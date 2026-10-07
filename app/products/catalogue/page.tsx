"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download, CheckCircle2, ChevronRight, PackageCheck, Layers } from "lucide-react";
import { products, productCategories } from "@/data/products";
import { downloadProductBrochure } from "@/utils/downloadBrochure";

export default function FullCataloguePage() {
  return (
    <div className="bg-[#FEFEFE] min-h-screen pb-20 text-slate-800">
      
      {/* HEADER HERO BANNER — NATURAL MACHINERY PHOTOGRAPHY HEADER */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-14 sm:py-20 border-b border-gray-800">
        {/* Photorealistic Industrial Machinery Background Image (Natural Colors, No Blue Wash) */}
        <Image
          src="/images/hero/catalogue-header-natural.png"
          alt="Felix Solutions Industrial Machinery Catalogue Background"
          fill
          priority
          className="object-cover object-center opacity-85"
          sizes="100vw"
        />
        {/* Subtle Neutral Gradient for Pristine Text Readability (NO Blue Tint/Overlay) */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/40 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Indicator */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-xs font-semibold text-gray-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-felix-cyan font-bold">Full Catalogue</span>
          </nav>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                FULL PRODUCT CATALOGUE
              </h1>
              
              <p className="text-sm sm:text-lg text-gray-200 leading-relaxed font-medium max-w-2xl">
                Explore our range of coding, marking, labelling and packaging solutions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => downloadProductBrochure()}
                className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-extrabold text-slate-900 bg-white hover:bg-felix-cyan transition-all rounded-xl shadow-xl hover:shadow-2xl cursor-pointer uppercase tracking-wider group"
              >
                <Download className="w-4 h-4 mr-2 text-felix-blue group-hover:scale-110 transition-transform" />
                <span>DOWNLOAD PRODUCT BROCHURE (PDF)</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* CATALOGUE CONTENT */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* CATALOGUE INDEX STRIP */}
        <div className="mb-12 p-6 bg-slate-50 border border-gray-200 rounded-2xl">
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-felix-blue" />
            <span>CATALOGUE SECTIONS INDEX</span>
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {productCategories.filter(c => c.id !== "all").map((cat) => (
              <a
                key={cat.id}
                href={`#cat-${cat.id}`}
                className="px-4 py-2 bg-white text-xs font-bold text-slate-700 hover:text-felix-blue border border-gray-200 rounded-xl hover:border-felix-blue transition-all shadow-sm"
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>

        {/* CATEGORY SECTIONS */}
        <div className="space-y-16">
          {productCategories.filter(c => c.id !== "all").map((category) => {
            const catProducts = products.filter(p => p.category === category.id);
            if (catProducts.length === 0) return null;

            return (
              <section key={category.id} id={`cat-${category.id}`} className="scroll-mt-24">
                
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-4">
                  <span className="w-2 h-7 bg-felix-blue rounded-full shrink-0" />
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-felix-blue block">
                      MACHINERY SPECTRUM
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {category.label}
                    </h2>
                  </div>
                </div>

                {/* Products List Grid */}
                <div className="space-y-8">
                  {catProducts.map((prod) => (
                    <div
                      key={prod.id}
                      className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col lg:flex-row gap-8 items-start"
                    >
                      {/* Product Image */}
                      <div className="relative w-full lg:w-64 h-56 bg-slate-50 border border-gray-100 rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-4">
                        <Image
                          src={prod.image}
                          alt={prod.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>

                      {/* Details Content */}
                      <div className="flex-1 space-y-4 w-full">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-felix-blue bg-felix-blue/10 px-2.5 py-1 rounded-md mb-2 inline-block">
                              {prod.categoryLabel}{prod.brand ? ` · ${prod.brand}` : ""}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                              {prod.name}
                            </h3>
                          </div>
                          <Link
                            href={`/products/${prod.slug}`}
                            className="inline-flex items-center text-xs font-bold text-felix-blue hover:text-felix-dark uppercase tracking-wider"
                          >
                            <span>VIEW DETAILS</span>
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                          {prod.fullDescription || prod.shortDescription}
                        </p>

                        {/* Model Variants if available */}
                        {prod.variants && prod.variants.length > 0 && (
                          <div className="pt-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                              AVAILABLE MODELS & VARIANTS ({prod.variants.length}):
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                              {prod.variants.map((v) => (
                                <div key={v.id} className="p-3 bg-slate-50 border border-gray-200/90 rounded-xl text-xs">
                                  <span className="font-bold text-slate-900 block mb-0.5">{v.name}</span>
                                  <span className="text-[11px] text-slate-500 line-clamp-2">{v.shortDescription}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Relevant Applications & Industries */}
                        <div className="pt-3 border-t border-gray-100 flex flex-wrap gap-4 text-xs">
                          {prod.applications && prod.applications.length > 0 && (
                            <div>
                              <strong className="text-slate-900 block mb-1">Relevant Applications:</strong>
                              <div className="flex flex-wrap gap-1.5">
                                {prod.applications.map((app, idx) => (
                                  <span key={idx} className="bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded text-[11px] font-medium">
                                    {app}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {prod.industriesServed && prod.industriesServed.length > 0 && (
                            <div>
                              <strong className="text-slate-900 block mb-1">Industries Served:</strong>
                              <div className="flex flex-wrap gap-1.5">
                                {prod.industriesServed.map((ind, idx) => (
                                  <span key={idx} className="bg-blue-50 text-felix-blue px-2.5 py-0.5 rounded text-[11px] font-medium">
                                    {ind}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                      </div>
                    </div>
                  ))}
                </div>

              </section>
            );
          })}
        </div>

      </div>
    </div>
  );
}
