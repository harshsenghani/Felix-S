"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X, Package, Layers, Factory, FileText, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import { applicationsData } from "@/data/applications";
import { industries } from "@/data/industries";

export interface SearchResultItem {
  id: string;
  type: "PRODUCT" | "APPLICATION" | "INDUSTRY" | "PAGE";
  title: string;
  subtitle: string;
  href: string;
  score: number;
}

const sitePages: { title: string; href: string; keywords: string[] }[] = [
  { title: "Home", href: "/", keywords: ["home", "main", "felix", "landing"] },
  { title: "Products", href: "/products", keywords: ["products", "machinery", "catalogue", "equipment", "printers"] },
  { title: "Full Product Catalogue", href: "/products/catalogue", keywords: ["catalogue", "full catalogue", "all products", "brochure", "listing"] },
  { title: "Industries We Serve", href: "/industries", keywords: ["industries", "sectors", "food", "beverages", "pharma"] },
  { title: "Applications", href: "/applications", keywords: ["applications", "coding", "marking", "mrp", "batch"] },
  { title: "About Felix Solutions", href: "/about", keywords: ["about", "company", "felix", "mumbai", "ahmedabad", "pawane"] },
  { title: "Contact Us", href: "/contact", keywords: ["contact", "email", "phone", "helpline", "address", "location", "enquiry"] },
  { title: "Career Opportunities", href: "/career", keywords: ["career", "jobs", "hiring", "employment"] },
  { title: "Request a Quote", href: "/quote", keywords: ["quote", "price", "demo", "cost", "inquiry"] },
];

export default function NavbarSearch({
  isMobile = false,
  onResultSelect,
}: {
  isMobile?: boolean;
  onResultSelect?: () => void;
}) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Search Index Construction & Matching Logic
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const searchList: SearchResultItem[] = [];

    // 1. Search Products & Product Variants
    products.forEach((p) => {
      let pScore = 0;
      const pTitle = p.name.toLowerCase();
      const pBrand = (p.brand || "").toLowerCase();
      const pCat = p.categoryLabel.toLowerCase();
      const pDesc = p.shortDescription.toLowerCase();

      if (pTitle === q) pScore = 100;
      else if (pTitle.startsWith(q)) pScore = 85;
      else if (pTitle.includes(q)) pScore = 70;
      else if (pBrand.includes(q) || pCat.includes(q)) pScore = 50;
      else if (pDesc.includes(q)) pScore = 30;

      if (pScore > 0) {
        searchList.push({
          id: `prod-${p.id}`,
          type: "PRODUCT",
          title: p.name,
          subtitle: `${p.categoryLabel}${p.brand ? ` · ${p.brand}` : ""}`,
          href: `/products/${p.slug}`,
          score: pScore,
        });
      }

      // Check Model Variants
      if (p.variants) {
        p.variants.forEach((v) => {
          let vScore = 0;
          const vTitle = v.name.toLowerCase();
          const vDesc = v.shortDescription.toLowerCase();

          if (vTitle === q || v.id.toLowerCase() === q) vScore = 100;
          else if (vTitle.startsWith(q) || v.id.toLowerCase().startsWith(q)) vScore = 90;
          else if (vTitle.includes(q) || v.id.toLowerCase().includes(q)) vScore = 75;
          else if (vDesc.includes(q)) vScore = 35;

          if (vScore > 0) {
            searchList.push({
              id: `variant-${v.id}`,
              type: "PRODUCT",
              title: v.name,
              subtitle: `Model under ${p.name}`,
              href: `/products/${p.slug}`,
              score: vScore,
            });
          }
        });
      }
    });

    // 2. Search Applications
    applicationsData.forEach((app) => {
      let aScore = 0;
      const aTitle = app.name.toLowerCase();
      const aDesc = app.shortDescription.toLowerCase();

      if (aTitle === q || app.slug.toLowerCase() === q) aScore = 100;
      else if (aTitle.startsWith(q)) aScore = 85;
      else if (aTitle.includes(q)) aScore = 70;
      else if (aDesc.includes(q)) aScore = 35;

      if (aScore > 0) {
        searchList.push({
          id: `app-${app.id}`,
          type: "APPLICATION",
          title: app.name,
          subtitle: app.badgeLabel || "Application Capability",
          href: `/applications/${app.slug}`,
          score: aScore,
        });
      }
    });

    // 3. Search Industries
    industries.forEach((ind) => {
      let iScore = 0;
      const iTitle = ind.name.toLowerCase();
      const iDesc = ind.shortDescription.toLowerCase();

      if (iTitle === q || ind.slug.toLowerCase() === q) iScore = 100;
      else if (iTitle.startsWith(q)) iScore = 85;
      else if (iTitle.includes(q)) iScore = 70;
      else if (iDesc.includes(q)) iScore = 35;

      if (iScore > 0) {
        searchList.push({
          id: `ind-${ind.id}`,
          type: "INDUSTRY",
          title: `${ind.name} Industry`,
          subtitle: ind.shortDescription,
          href: `/industries/${ind.slug}`,
          score: iScore,
        });
      }
    });

    // 4. Search Pages
    sitePages.forEach((pg) => {
      let pgScore = 0;
      const pgTitle = pg.title.toLowerCase();

      if (pgTitle === q) pgScore = 95;
      else if (pgTitle.startsWith(q)) pgScore = 80;
      else if (pgTitle.includes(q)) pgScore = 65;
      else if (pg.keywords.some((k) => k.includes(q))) pgScore = 55;

      if (pgScore > 0) {
        searchList.push({
          id: `page-${pg.href}`,
          type: "PAGE",
          title: pg.title,
          subtitle: `Felix Solutions ${pg.title} Page`,
          href: pg.href,
          score: pgScore,
        });
      }
    });

    // Deduplicate by href/title and sort by highest score first
    const uniqueMap = new Map<string, SearchResultItem>();
    searchList.forEach((item) => {
      const existing = uniqueMap.get(item.title);
      if (!existing || existing.score < item.score) {
        uniqueMap.set(item.title, item);
      }
    });

    return Array.from(uniqueMap.values())
      .sort((a, b) => b.score - a.score)
      .slice(0, 7);
  }, [query]);

  // Click Outside & Escape listener
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSelectResult = (href: string) => {
    setIsOpen(false);
    setQuery("");
    if (onResultSelect) onResultSelect();
    router.push(href);
  };

  const handleKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (results.length > 0) {
        handleSelectResult(results[0].href);
      }
    }
  };

  const getTypeBadge = (type: SearchResultItem["type"]) => {
    switch (type) {
      case "PRODUCT":
        return { label: "PRODUCT", bg: "bg-blue-50 text-felix-blue border-blue-200", Icon: Package };
      case "APPLICATION":
        return { label: "APPLICATION", bg: "bg-emerald-50 text-emerald-700 border-emerald-200", Icon: Layers };
      case "INDUSTRY":
        return { label: "INDUSTRY", bg: "bg-purple-50 text-purple-700 border-purple-200", Icon: Factory };
      case "PAGE":
        return { label: "PAGE", bg: "bg-slate-100 text-slate-700 border-slate-300", Icon: FileText };
    }
  };

  return (
    <div ref={containerRef} className={`relative ${isMobile ? "w-full" : "w-36 xl:w-52 2xl:w-64"}`}>
      <div className="relative flex items-center">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search machines, models..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDownInput}
          className={`w-full pl-8 ${query ? "pr-7" : "pr-3"} py-1.5 text-xs bg-gray-100 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-felix-blue focus:bg-white transition-all`}
        />
        <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
        
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
            className="absolute right-2 top-2 p-0.5 text-gray-400 hover:text-gray-600 rounded-full"
          >
            <X className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* DROPDOWN RESULTS PANEL */}
      {isOpen && query.trim().length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-gray-200 shadow-2xl overflow-hidden z-50 min-w-[280px] sm:min-w-[340px] max-h-[380px] overflow-y-auto animate-fadeIn">
          
          <div className="px-3.5 py-2 bg-slate-50 border-b border-gray-100 text-[10px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center justify-between">
            <span>SITE-WIDE SEARCH RESULTS</span>
            <span>{results.length} FOUND</span>
          </div>

          {results.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-500 font-medium">
              No similar data found.
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {results.map((res) => {
                const badge = getTypeBadge(res.type);
                const BadgeIcon = badge.Icon;

                return (
                  <button
                    key={res.id}
                    type="button"
                    onClick={() => handleSelectResult(res.href)}
                    className="w-full p-3 text-left hover:bg-slate-50 transition-colors flex items-center justify-between group cursor-pointer"
                  >
                    <div className="pr-2 min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className={`inline-flex items-center gap-1 text-[9px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded border ${badge.bg}`}>
                          <BadgeIcon className="w-2.5 h-2.5" />
                          <span>{badge.label}</span>
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-slate-900 group-hover:text-felix-blue transition-colors truncate">
                        {res.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 truncate mt-0.5 font-normal">
                        {res.subtitle}
                      </p>
                    </div>

                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-felix-blue group-hover:translate-x-0.5 transition-all shrink-0" />
                  </button>
                );
              })}
            </div>
          )}

          <div className="p-2.5 bg-slate-50 border-t border-gray-100 text-center">
            <span className="text-[10px] font-semibold text-slate-400">
              Press Enter to open top result • ESC to close
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
