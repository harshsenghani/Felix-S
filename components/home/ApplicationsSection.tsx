"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Zap } from "lucide-react";
import { applicationsData } from "@/data/applications";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import IndustrialFrameCard from "@/components/ui/IndustrialFrameCard";
import MagneticButton from "@/components/ui/MagneticButton";

import AnimatedSectionHeader from "@/components/ui/AnimatedSectionHeader";

interface ApplicationsSectionProps {
  hideHeader?: boolean;
  isHomepage?: boolean;
}

export default function ApplicationsSection({
  hideHeader = false,
  isHomepage: isHomepageProp,
}: ApplicationsSectionProps) {
  const pathname = usePathname();
  const isHomepage = isHomepageProp ?? (pathname === "/");
  const isApplicationsPage = pathname === "/applications";

  // Display 6 applications on homepage, all applications on /applications page
  const displayApplications = isHomepage
    ? applicationsData.slice(0, 6)
    : applicationsData;

  return (
    <section className={`bg-[#F4F4F4] border-b border-gray-200/80 ${isHomepage ? "py-12 lg:py-14" : "pb-12 lg:pb-14"}`} id="applications-grid">
      <div className={`max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 ${!isHomepage ? "pt-8 sm:pt-10" : ""}`}>
        
        {/* ANIMATED SECTION HEADER */}
        {!hideHeader && (
          <AnimatedSectionHeader
            badge="INDUSTRIAL APPLICATION CAPABILITIES"
            icon={Zap}
            title="Precision Across Every Application"
            variant="blueprint-line"
          />
        )}

        {/* IMAGE-LED APPLICATION GRID */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayApplications.map((app, idx) => (
            <StaggerItem key={app.id}>
              <IndustrialFrameCard
                title={app.name}
                category="APPLICATION SOLUTION"
                description={app.shortDescription}
                image={app.image}
                href={`/applications/${app.slug}`}
                badge={app.badgeLabel || "LINE READY"}
                index={idx}
                aspectRatio="video"
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CENTERED VIEW ALL APPLICATIONS BUTTON */}
        {isHomepage && !isApplicationsPage && (
          <ScrollReveal variant="fade-up" delay={0.2}>
            <div className="mt-14 sm:mt-16 text-center">
              <MagneticButton strength={0.2}>
                <Link
                  href="/applications"
                  className="inline-flex items-center justify-center px-9 py-4 text-xs sm:text-sm font-extrabold text-white bg-felix-blue hover:bg-felix-dark rounded-xl transition-all duration-300 shadow-md hover:shadow-xl group uppercase tracking-wider"
                >
                  <span>VIEW ALL APPLICATIONS</span>
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

