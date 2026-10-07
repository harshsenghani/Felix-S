import React, { Suspense } from "react";
import ProductsSection from "@/components/home/ProductsSection";

export const metadata = {
  title: "Products | Continuous Inkjet, Thermal Inkjet & Laser Coding Systems | Felix Solutions",
  description: "Browse our complete range of Citronix CIJ printers, Anser TIJ coders, Laser marking systems, and automated front & back labelling machines.",
};

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsSection />
    </Suspense>
  );
}
