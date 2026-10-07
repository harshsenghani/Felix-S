"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Factory } from "lucide-react";
import { industries } from "@/data/industries";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import IndustrialFrameCard from "@/components/ui/IndustrialFrameCard";
import MagneticButton from "@/components/ui/MagneticButton";

import AnimatedSectionHeader from "@/components/ui/AnimatedSectionHeader";

interface IndustriesSectionProps {
  showViewAllButton?: boolean;
  isHomepage?: boolean;
}

export default function IndustriesSection({
  showViewAllButton = true,
  isHomepage: isHomepageProp,
}: IndustriesSectionProps) {
  const pathname = usePathname();
  const isHomepage = isHomepageProp ?? (pathname === "/");
  const isIndustriesPage = pathname === "/industries";

  // Display 6 featured industries on homepage, all 9 on full industries page
  const displayIndustries = isHomepage ? industries.slice(0, 6) : industries;

  return (
    <section className={`bg-[#F4F4F4] border-b border-gray-200/80 ${isHomepage ? "py-12 lg:py-14" : "pb-12 lg:pb-14"}`}>
      <div className={`max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 ${!isHomepage ? "pt-8 sm:pt-10" : ""}`}>
        
        {/* ANIMATED SECTION HEADER (Homepage only — /industries page uses IndustriesHeader above) */}
        {isHomepage && (
          <AnimatedSectionHeader
            badge="POWERING INDUSTRIAL PACKAGING LINES"
            icon={Factory}
            title="Industries We Serve"
            variant="mask-slide"
          />
        )}

        {/* CENTERED INDUSTRY CARDS GRID */}
        <StaggerContainer className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayIndustries.map((ind, idx) => (
            <StaggerItem key={ind.id}>
              <IndustrialFrameCard
                title={ind.name}
                category="SECTOR SOLUTION"
                description={ind.shortDescription}
                image={ind.image}
                href={`/industries/${ind.slug}`}
                badge="SECTOR AUDITED"
                index={idx}
                aspectRatio="video"
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CENTERED VIEW ALL INDUSTRIES BUTTON */}
        {showViewAllButton && !isIndustriesPage && (
          <ScrollReveal variant="fade-up" delay={0.2}>
            <div className="mt-14 sm:mt-16 text-center">
              <MagneticButton strength={0.2}>
                <Link
                  href="/industries"
                  className="inline-flex items-center justify-center px-9 py-4 text-xs sm:text-sm font-extrabold text-white bg-felix-blue hover:bg-felix-dark rounded-xl transition-all duration-300 shadow-md hover:shadow-xl group uppercase tracking-wider"
                >
                  <span>VIEW ALL INDUSTRIES</span>
                  <ArrowRight className="w-4 h-4 ml-2.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
            </div>
          </ScrollReveal>
        )}

      </div>
    </section>
  );
}


