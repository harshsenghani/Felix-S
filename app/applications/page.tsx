import React from "react";
import ApplicationsHeader from "@/components/headers/ApplicationsHeader";
import ApplicationsSection from "@/components/home/ApplicationsSection";

export const metadata = {
  title: "Applications | Date & Batch Coding, Barcode & Serialization | Felix Solutions",
  description: "Browse image-led industrial applications: Date & Batch Coding, MRP Printing, Barcode & QR Code Printing, Serialization, Pipe & Cable Marking, and Case Coding.",
};

export default function ApplicationsPage() {
  return (
    <div className="bg-[#F4F4F4]">
      <ApplicationsHeader />
      <ApplicationsSection isHomepage={false} hideHeader={true} />
    </div>
  );
}
