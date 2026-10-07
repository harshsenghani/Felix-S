"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Product, products as allSiteProducts } from "@/data/products";

interface RelatedProductsProps {
  currentProduct: Product;
  allProducts?: Product[];
  limit?: number;
}

export function getRelatedProducts(
  currentProduct: Product,
  allProducts: Product[] = allSiteProducts,
  limit = 4
): Product[] {
  const result: Product[] = [];
  const addedIds = new Set<string>([currentProduct.id]);

  // 1. Explicit relatedProductIds if present
  if (currentProduct.relatedProductIds && currentProduct.relatedProductIds.length > 0) {
    for (const relId of currentProduct.relatedProductIds) {
      const found = allProducts.find((p) => p.id === relId && !addedIds.has(p.id));
      if (found) {
        result.push(found);
        addedIds.add(found.id);
        if (result.length >= limit) break;
      }
    }
  }

  // 2. Products from the same category
  if (result.length < limit) {
    const sameCategory = allProducts.filter(
      (p) => p.category === currentProduct.category && !addedIds.has(p.id)
    );
    for (const p of sameCategory) {
      result.push(p);
      addedIds.add(p.id);
      if (result.length >= limit) break;
    }
  }

  // 3. Products that cross-reference this product
  if (result.length < limit) {
    const reverseRelated = allProducts.filter(
      (p) => p.relatedProductIds?.includes(currentProduct.id) && !addedIds.has(p.id)
    );
    for (const p of reverseRelated) {
      result.push(p);
      addedIds.add(p.id);
      if (result.length >= limit) break;
    }
  }

  // 4. Fallback to other catalog products
  if (result.length < limit) {
    const others = allProducts.filter((p) => !addedIds.has(p.id));
    for (const p of others) {
      result.push(p);
      addedIds.add(p.id);
      if (result.length >= limit) break;
    }
  }

  return result.slice(0, limit);
}

export default function RelatedProducts({
  currentProduct,
  allProducts = allSiteProducts,
  limit = 4,
}: RelatedProductsProps) {
  const relatedList = getRelatedProducts(currentProduct, allProducts, limit);

  if (!relatedList || relatedList.length === 0) {
    return null;
  }

  const gridColsClass =
    relatedList.length === 3
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section className="bg-white border-t border-gray-100 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-7 h-[2.5px] bg-felix-blue rounded-full shrink-0" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-felix-blue">
              EXPLORE MORE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Related products
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2.5 leading-relaxed">
            Other coding options from the Felix range.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className={`grid ${gridColsClass} gap-6 sm:gap-7`}>
          {relatedList.map((rel) => (
            <Link
              key={rel.id}
              href={`/products/${rel.slug}`}
              className="group bg-white border border-slate-200/90 rounded-2xl p-5 flex flex-col justify-between hover:border-felix-blue hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Product Image */}
                <div className="relative w-full aspect-[4/3] rounded-xl bg-slate-50 border border-slate-100 overflow-hidden mb-4 flex items-center justify-center">
                  <Image
                    src={rel.image}
                    alt={rel.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Category Label */}
                {rel.categoryLabel && (
                  <span className="text-[11px] font-mono uppercase tracking-wider text-felix-blue font-semibold block mb-1.5">
                    {rel.categoryLabel}
                  </span>
                )}

                {/* Product Name */}
                <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-felix-blue transition-colors line-clamp-2 mb-2">
                  {rel.name}
                </h3>

                {/* Short Description */}
                {rel.shortDescription && (
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                    {rel.shortDescription}
                  </p>
                )}
              </div>

              {/* View Product CTA Link */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-felix-blue transition-colors mt-auto">
                <span>View Product</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
