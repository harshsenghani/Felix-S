import { Suspense } from "react";
import Hero from "@/components/home/Hero";
import HeroCapabilityLine from "@/components/home/HeroCapabilityLine";
import IndustriesSection from "@/components/home/IndustriesSection";
import ProductsSection from "@/components/home/ProductsSection";
import ApplicationsSection from "@/components/home/ApplicationsSection";
import WhyFelixSection from "@/components/home/WhyFelixSection";
import ProcessCapabilitiesSection from "@/components/home/ProcessCapabilitiesSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeroCapabilityLine />
      <IndustriesSection />
      <Suspense>
        <ProductsSection />
      </Suspense>
      <ApplicationsSection />
      <WhyFelixSection />
      <ProcessCapabilitiesSection />
      <FinalCTA />
    </>
  );
}

