"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { ArrowRight, PackageCheck, Download } from "lucide-react";
import { products, productCategories } from "@/data/products";
import { downloadProductBrochure } from "@/utils/downloadBrochure";
import ScrollReveal from "@/components/ui/ScrollReveal";
import IndustrialFrameCard from "@/components/ui/IndustrialFrameCard";
import AnimatedSectionHeader from "@/components/ui/AnimatedSectionHeader";
import { motion, AnimatePresence } from "framer-motion";

import ProductsHeader from "@/components/headers/ProductsHeader";

interface ProductsSectionProps {
  isHomepage?: boolean;
}

export default function ProductsSection({ isHomepage: isHomepageProp }: ProductsSectionProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isHomepage = isHomepageProp ?? (pathname === "/");

  const [selectedCategory, setSelectedCategory] = useState("all");

  // Search query from navbar's ?search= param
  const searchQuery = searchParams.get("search")?.toLowerCase().trim() || "";

  // Category filter logic — uses Felix Solutions' product.category match
  const filteredProducts = useMemo(() => {
    let result =
      selectedCategory === "all"
        ? products
        : products.filter((p) => p.category === selectedCategory);

    // Apply search filter if present
    if (searchQuery) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery) ||
          p.shortDescription.toLowerCase().includes(searchQuery) ||
          p.categoryLabel.toLowerCase().includes(searchQuery) ||
          (p.brand && p.brand.toLowerCase().includes(searchQuery))
      );
    }

    return result;
  }, [selectedCategory, searchQuery]);

  // On homepage, limit to EXACTLY 8 featured products
  const displayProducts = isHomepage
    ? filteredProducts.slice(0, 8)
    : filteredProducts;

  return (
    <section className={`bg-[#FEFEFE] border-b border-gray-200/80 ${isHomepage ? "py-12 lg:py-14" : "pb-12 lg:pb-14"}`} id="products">

      {/* APPROVED HEADER 01 — PRODUCTS PAGE (ONLY on /products page, NOT homepage) */}
      {!isHomepage && <ProductsHeader />}

      <div className={`max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 ${!isHomepage ? "pt-8 sm:pt-10" : ""}`}>
        
        {/* ANIMATED SECTION HEADER (Homepage only — /products page uses the hero banner above instead) */}
        {isHomepage && (
          <AnimatedSectionHeader
            badge="INDUSTRIAL MACHINERY CATALOGUE"
            icon={PackageCheck}
            title="Featured Machinery Range"
            variant="stagger-editorial"
            className="mb-8"
          />
        )}

        {/* SINGLE-SELECT TECHNOLOGY CATEGORY FILTERS (PILLS) */}
        <ScrollReveal variant="fade-up" delay={0.1}>
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto sm:overflow-visible overflow-y-hidden no-scrollbar pb-3 sm:pb-0 mb-10">
            <div
              role="tablist"
              aria-label="Product categories"
              className="flex items-center gap-2.5 sm:gap-3 flex-nowrap sm:flex-wrap px-1 py-1"
            >
              {productCategories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    tabIndex={0}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex-shrink-0 px-4 sm:px-5 py-2 text-xs font-extrabold tracking-wider uppercase rounded-full transition-all duration-300 shadow-sm border focus-visible:ring-2 focus-visible:ring-felix-blue focus-visible:ring-offset-2 focus-visible:outline-none ${
                      isActive
                        ? "bg-felix-blue text-white border-felix-blue shadow-md scale-102"
                        : "bg-white text-gray-700 border-gray-200 hover:border-felix-blue hover:text-felix-blue"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* MACHINERY CARDS GRID (4 COLUMNS) WITH ANIMATEPRESENCE FLIP LAYOUT */}
        {displayProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-gray-100">
            <p className="text-gray-500 font-medium">No products found in this category.</p>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[300px]">
            <AnimatePresence mode="popLayout">
              {displayProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="h-full"
                >
                  <IndustrialFrameCard
                    title={product.name}
                    category={product.categoryLabel}
                    description={product.shortDescription}
                    image={product.image}
                    href={`/products/${product.slug}`}
                    badge={product.brand ? `${product.brand}` : "OEM SYSTEM"}
                    features={product.keyBenefits ? product.keyBenefits.slice(0, 2) : []}
                    index={idx}
                    aspectRatio="square"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* BOTTOM ACTION - VIEW ALL PRODUCTS BUTTON ON HOMEPAGE */}
        {isHomepage && (
          <ScrollReveal variant="fade-up" delay={0.15}>
            <div className="mt-12 text-center">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-9 py-4 text-xs sm:text-sm font-extrabold text-white bg-felix-blue hover:bg-felix-dark rounded-xl transition-all duration-300 shadow-md hover:shadow-xl group uppercase tracking-wider"
              >
                <span>VIEW ALL PRODUCTS</span>
                <ArrowRight className="w-4 h-4 ml-2.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        )}

        {/* BOTTOM ACTION — REQUEST CATALOGUE & DOWNLOAD BROCHURE (Products page only) */}
        {!isHomepage && (
          <div className="mt-16 sm:mt-20 flex flex-wrap items-center justify-center gap-4 text-center">
            <Link
              href="/products/catalogue"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-white bg-felix-blue hover:bg-felix-dark rounded-full transition-all duration-300 shadow-xl shadow-felix-blue/20 hover:shadow-2xl hover:shadow-felix-blue/30 hover:-translate-y-0.5 group uppercase tracking-wider"
            >
              <span>REQUEST A FULL CATALOGUE</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>

            <button
              onClick={() => downloadProductBrochure()}
              className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-felix-black bg-white hover:bg-slate-100 border border-slate-300 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer uppercase tracking-wider group"
            >
              <Download className="w-4 h-4 mr-2 text-felix-blue" />
              <span>DOWNLOAD PRODUCT BROCHURE</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
