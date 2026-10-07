import React from "react";
import IndustriesHeader from "@/components/headers/IndustriesHeader";
import IndustriesSection from "@/components/home/IndustriesSection";

export const metadata = {
  title: "Industries We Serve | Food, Beverage, Pharma, Cable & Pipes | Felix Solutions",
  description: "Explore industrial coding, marking, labelling, and packaging solutions tailored for Food, Beverage, Pharmaceutical, Dairy, Liquor, Agrochemicals, and Extrusion industries.",
};

export default function IndustriesPage() {
  return (
    <div>
      <IndustriesHeader />
      <IndustriesSection isHomepage={false} showViewAllButton={false} />
    </div>
  );
}
