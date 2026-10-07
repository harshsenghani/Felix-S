"use client";

export function downloadProductBrochure() {
  const fileUrl = "/downloads/felix-solutions-product-brochure.pdf";
  const fileName = "felix-solutions-product-brochure.pdf";

  // Create temporary link to trigger native browser download
  const link = document.createElement("a");
  link.href = fileUrl;
  link.setAttribute("download", fileName);
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
