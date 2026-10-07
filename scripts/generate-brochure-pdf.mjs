import { jsPDF } from "jspdf";
import fs from "fs";
import path from "path";

const doc = new jsPDF({
  orientation: "portrait",
  unit: "mm",
  format: "a4",
});

const pageWidth = 210;
const pageHeight = 297;
const margin = 15;
const contentWidth = pageWidth - margin * 2;

// Brand Color Palette — Felix Solutions Identity
const FELIX_BLUE = [57, 66, 133];   // French Blue #394285
const FELIX_CYAN = [0, 168, 232];   // Cyan #00A8E8
const FELIX_DARK = [15, 23, 42];    // Slate 900 #0F172A
const TEXT_DARK = [30, 41, 59];     // Slate 800
const TEXT_MUTED = [100, 116, 139]; // Slate 500
const BG_LIGHT = [244, 246, 249];   // Platinum Light

let y = margin;

function checkPageBreak(neededHeight = 25) {
  if (y + neededHeight > pageHeight - margin - 15) {
    doc.addPage();
    y = 20;
    renderPageHeader();
  }
}

function renderPageHeader() {
  doc.setFillColor(...FELIX_BLUE);
  doc.rect(0, 0, pageWidth, 8, "F");
  
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.setTextColor(255, 255, 255);
  doc.text("FELIX SOLUTIONS — INDUSTRIAL CODING, MARKING & LABELLING CATALOGUE", margin, 5.5);

  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.3);
  doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...TEXT_MUTED);
  doc.text("Mon to Sat: 10 a.m. to 6 p.m. | Helpline: +91 9870610432", margin, pageHeight - 7);
  doc.text(`Page ${doc.internal.getNumberOfPages()}`, pageWidth - margin - 12, pageHeight - 7);
}

// ═════════════════════════════════════════════════════════════
// 4A — OFFICIAL FELIX LOGO AT EXTREME TOP OF FIRST PAGE
// ═════════════════════════════════════════════════════════════
const logoPath = path.join(process.cwd(), "public", "assets", "felix-logo.png");
if (fs.existsSync(logoPath)) {
  const logoBase64 = fs.readFileSync(logoPath).toString("base64");
  const logoDataUri = `data:image/png;base64,${logoBase64}`;
  doc.addImage(logoDataUri, "PNG", margin, y, 48, 14);
} else {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(...FELIX_BLUE);
  doc.text("FELIX SOLUTIONS", margin, y + 10);
}

// Top Right Eyebrow Badging
doc.setFont("helvetica", "bold");
doc.setFontSize(8);
doc.setTextColor(...FELIX_BLUE);
doc.text("INDUSTRIAL MACHINERY CATALOGUE", pageWidth - margin - 60, y + 6);
doc.setFont("helvetica", "normal");
doc.setFontSize(7.5);
doc.setTextColor(...TEXT_MUTED);
doc.text("PACK • CODE • MARK — INDIA & GLOBAL", pageWidth - margin - 60, y + 11);

y += 20;

// Header Divider Accent Line
doc.setFillColor(...FELIX_BLUE);
doc.rect(margin, y, contentWidth, 2, "F");
y += 8;

// Title Block
doc.setFont("helvetica", "bold");
doc.setFontSize(18);
doc.setTextColor(...FELIX_DARK);
doc.text("Comprehensive Industrial Machinery Catalogue", margin, y);
y += 6;

doc.setFont("helvetica", "normal");
doc.setFontSize(9);
doc.setTextColor(...TEXT_MUTED);
doc.text("Continuous Inkjet (CIJ) • Thermal Inkjet (TIJ) • Laser Marking • Automatic Labelling • Packaging Systems", margin, y);
y += 10;

// ═════════════════════════════════════════════════════════════
// COMPANY OVERVIEW SECTION
// ═════════════════════════════════════════════════════════════
doc.setFillColor(...BG_LIGHT);
doc.roundedRect(margin, y, contentWidth, 34, 3, 3, "F");
doc.setDrawColor(203, 213, 225);
doc.roundedRect(margin, y, contentWidth, 34, 3, 3, "D");

doc.setFont("helvetica", "bold");
doc.setFontSize(10.5);
doc.setTextColor(...FELIX_BLUE);
doc.text("ABOUT FELIX SOLUTIONS", margin + 6, y + 8);

doc.setFont("helvetica", "normal");
doc.setFontSize(8.5);
doc.setTextColor(...TEXT_DARK);
const introText = "Felix Solutions brings global expertise, in-depth domain knowledge, and vast local industry experience to successfully cater to wide-ranging coding and packaging needs across various industry segments. Headquartered in Navi Mumbai (Pawane MIDC) with regional operations in Gujarat (Ahmedabad), we provide doorstep technical support, custom bracket engineering, and turnkey packaging line integration.";
const splitIntro = doc.splitTextToSize(introText, contentWidth - 12);
doc.text(splitIntro, margin + 6, y + 14);

doc.setFont("helvetica", "bold");
doc.setFontSize(8);
doc.setTextColor(...FELIX_BLUE);
doc.text("Operating Hours: Mon to Sat: 10 a.m. to 6 p.m. | Sales Helpline: +91 9870610432 / +91 9967554054", margin + 6, y + 29);

y += 42;

// ═════════════════════════════════════════════════════════════
// PRODUCT CATEGORIES SUMMARY
// ═════════════════════════════════════════════════════════════
doc.setFont("helvetica", "bold");
doc.setFontSize(11);
doc.setTextColor(...FELIX_DARK);
doc.text("PRODUCT CATEGORIES & MACHINERY SPECTRUM", margin, y);
y += 6;

const categories = [
  { name: "Continuous Inkjet (CIJ)", desc: "Citronix ciSeries high-speed non-contact date, lot & batch coders up to 5 lines." },
  { name: "Thermal Inkjet (TIJ)", desc: "ANSER U2 & X1 maintenance-free 600 DPI barcode, QR & MRP printing." },
  { name: "Laser Marking Systems", desc: "CO2, UV, and Fiber laser coders for zero-consumable permanent marking." },
  { name: "Automatic Labelling", desc: "High-speed front & back, wraparound & tamper-evident sticker labellers." },
  { name: "Packaging & Conveyors", desc: "Carton taping, cap sealers, conveyors, custom brackets & stretch wrappers." },
];

categories.forEach((cat) => {
  doc.setFillColor(241, 245, 249);
  doc.rect(margin, y, contentWidth, 7, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(...FELIX_BLUE);
  doc.text(`• ${cat.name}`, margin + 3, y + 5);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...TEXT_MUTED);
  doc.text(cat.desc, margin + 55, y + 5);

  y += 8;
});

y += 8;

// ═════════════════════════════════════════════════════════════
// AUTHORITATIVE PRODUCT DATASET LISTING
// ═════════════════════════════════════════════════════════════
const productsData = [
  {
    name: "Citronix ciSeries CIJ Printers (ci5150 / ci5500 / ci5650)",
    brand: "Citronix (USA)",
    category: "Continuous Inkjet / CIJ",
    desc: "Continuous non-contact inkjet printing of manufacture dates, expiry dates, batch numbers, and logos up to 5 lines of text on fast-moving packaging lines.",
    apps: ["Date & Batch Coding", "MRP Printing", "Pipe & Cable Marking", "Pouch Packaging", "Bottle & Glass Marking"],
    specs: "Line Speed: Up to 9.8 m/sec (1960 ft/min) | IP Rating: IP55 / IP65 Stainless Steel | Print Height: 1.5mm to 12mm",
  },
  {
    name: "Citronix ciTouch Series (CT2030 / CT2050 / CT2200Pro / CT2400Pro)",
    brand: "Citronix (USA)",
    category: "Continuous Inkjet / CIJ",
    desc: "Advanced touchscreen-operated CIJ printer family engineered for harsh washdown environments, heavy pigmented inks, and micro-print electronics.",
    apps: ["High Speed Bottling", "Micro Electronics", "Wire & Cable", "Food & Beverage Packaging"],
    specs: "Interface: 10.1\" Color Touchscreen | Ink Types: Dye-based, Pigmented (Yellow/White), Heavy Duty | Network: Ethernet / USB",
  },
  {
    name: "ANSER U2 Series (SmartOne / ProS / Mobile / Diesel)",
    brand: "ANSER (Taiwan)",
    category: "Thermal Inkjet / TIJ",
    desc: "Compact, maintenance-free Thermal Inkjet coders delivering crisp 600 DPI resolution MRP printing, 2D barcodes, and manufacture details.",
    apps: ["MRP Printing", "Barcode & QR Printing", "Carton Coding", "Handheld Mobile Marking"],
    specs: "Resolution: Up to 600 DPI | Throw Distance: Up to 6mm | Maintenance: Zero maintenance cartridge design",
  },
  {
    name: "ANSER X1 & Industrial TIJ Systems (A1 / SmartPrint)",
    brand: "ANSER (Taiwan)",
    category: "Thermal Inkjet / TIJ",
    desc: "Next-generation industrial TIJ system supporting dual-head independent line printing, high-speed 2D DataMatrix serialization, and Ethernet PLC automation.",
    apps: ["Serialization & Traceability", "High Speed Flexible Packaging", "Dual Production Lines", "QR Code Marking"],
    specs: "Print Height: Up to 2 inches (50.8mm) | Controller: Industrial X1 Controller | Line Speed: Up to 300 m/min",
  },
  {
    name: "Laser Marking Systems (CO2 / UV / Fiber)",
    brand: "Felix OEM / Laser Line",
    category: "Laser Marking Systems",
    desc: "Non-contact consumable-free laser coders for permanent high-contrast engraving on PET bottles, glass, metal parts, pharmaceutical foils, and PVC.",
    apps: ["Bottle & Glass Marking", "Component Part Marking", "Pharmaceutical Serialization", "Metal Etching"],
    specs: "Laser Sources: CO2 (10W/30W), Fiber (20W/50W), UV (3W/5W) | Cooling: Air Cooled | Lifetime: Up to 100,000 hours",
  },
  {
    name: "Automatic Sticker Labelling Machines",
    brand: "Felix Solutions",
    category: "Automatic Labelling Systems",
    desc: "Precision automatic sticker labelling machines including Front & Back, Wraparound, Top & Bottom, Tamper Evident, and Print & Apply labelling heads.",
    apps: ["Front & Back Bottle Labelling", "Round Vial Labelling", "Carton Tamper Evident Sealing", "Top Surface Labelling"],
    specs: "Labelling Speed: 80 - 250 containers/min | Accuracy: +/- 0.5mm | Container Compatibility: Round, Flat, Elliptical",
  },
  {
    name: "Carton Taping & Sealing Machines",
    brand: "Felix Solutions",
    category: "Packaging & Sealing",
    desc: "Automatic and semi-automatic uniform carton edge and top-and-bottom flap taping machines engineered for corrugated master carton packaging.",
    apps: ["Outer Case Packaging", "Secondary Packaging Sealing", "Warehouse Logistics"],
    specs: "Tape Width: 2\" or 3\" | Conveyor Speed: 20 meters/min | Power: 220V 50Hz",
  },
  {
    name: "Conveyor Systems & Custom Mounting Brackets",
    brand: "Felix Solutions",
    category: "Material Handling & Conveyors",
    desc: "Heavy-duty stainless steel slat chain, PVC belt, modular belt, and coding conveyors equipped with precision encoder bracket mounts for coders and labellers.",
    apps: ["Line Conveyance", "Coding Conveyors", "Truck Loading", "Bracket Mounting"],
    specs: "Material: SS304 / Mild Steel Powder Coated | Belt Speed: Variable VFD Controlled | Length: Customizable (1.5m to 6m)",
  },
  {
    name: "Induction Cap Sealer & Strapping Machinery",
    brand: "Felix Solutions",
    category: "Packaging & Sealing",
    desc: "Hermetic air-tight tamper-evident foil induction cap sealers and heavy-duty box strapping machinery for food, pharma, and chemical containers.",
    apps: ["Bottle Cap Foil Sealing", "Carton Strapping & Bundling", "Liquid Leak Prevention"],
    specs: "Sealing Diameter: 20mm - 120mm | Sealing Speed: Up to 120 bottles/min | Cooling: Air Cooled System",
  },
];

doc.setFont("helvetica", "bold");
doc.setFontSize(11);
doc.setTextColor(...FELIX_DARK);
doc.text("AUTHORITATIVE MACHINERY CATALOGUE & SPECIFICATIONS", margin, y);
y += 6;

productsData.forEach((p) => {
  checkPageBreak(36);

  doc.setFillColor(248, 250, 252);
  doc.roundedRect(margin, y, contentWidth, 32, 2, 2, "F");
  doc.setDrawColor(203, 213, 225);
  doc.roundedRect(margin, y, contentWidth, 32, 2, 2, "D");

  doc.setFillColor(...FELIX_BLUE);
  doc.rect(margin, y, 3, 32, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(...FELIX_BLUE);
  doc.text(p.name, margin + 6, y + 6);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...FELIX_CYAN);
  doc.text(`[${p.category.toUpperCase()}] — Brand: ${p.brand}`, margin + 6, y + 11);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...TEXT_DARK);
  const splitDesc = doc.splitTextToSize(p.desc, contentWidth - 12);
  doc.text(splitDesc, margin + 6, y + 16);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.setTextColor(...TEXT_MUTED);
  doc.text(`Applications: ${p.apps.join(" | ")}`, margin + 6, y + 24);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(51, 65, 85);
  doc.text(`Specs: ${p.specs}`, margin + 6, y + 28);

  y += 36;
});

// ═════════════════════════════════════════════════════════════
// CONTACT & OFFICE LOCATIONS FOOTER BLOCK
// ═════════════════════════════════════════════════════════════
checkPageBreak(45);

y += 4;
doc.setFillColor(...FELIX_DARK);
doc.roundedRect(margin, y, contentWidth, 42, 3, 3, "F");

doc.setFont("helvetica", "bold");
doc.setFontSize(10.5);
doc.setTextColor(...FELIX_CYAN);
doc.text("FELIX SOLUTIONS — CONTACT & OFFICE LOCATIONS", margin + 6, y + 8);

doc.setFont("helvetica", "bold");
doc.setFontSize(8.5);
doc.setTextColor(255, 255, 255);
doc.text("Mumbai Headquarters (HO):", margin + 6, y + 15);

doc.setFont("helvetica", "normal");
doc.setFontSize(7.5);
doc.setTextColor(226, 232, 240);
doc.text("Bldg A, Unit No. 2, 1st Floor, GAMI INDUSTRIAL PARK, Plot No. C-39A,", margin + 6, y + 20);
doc.text("TTC Industrial Area, Pawane MIDC, Navi Mumbai – 400705, Maharashtra, India.", margin + 6, y + 24);

doc.setFont("helvetica", "bold");
doc.setFontSize(8.5);
doc.setTextColor(255, 255, 255);
doc.text("Gujarat Regional Office:", margin + 110, y + 15);

doc.setFont("helvetica", "normal");
doc.setFontSize(7.5);
doc.setTextColor(226, 232, 240);
doc.text("F-405, HN SUMEL BUSINESS PARK-6, Dudheshwar Rd,", margin + 110, y + 20);
doc.text("Dudheshwar, Ahmedabad, Gujarat 380004.", margin + 110, y + 24);

doc.setDrawColor(51, 65, 85);
doc.line(margin + 6, y + 28, margin + contentWidth - 6, y + 28);

doc.setFont("helvetica", "bold");
doc.setFontSize(8);
doc.setTextColor(...FELIX_CYAN);
doc.text("Sales Helpline: +91 9870610432 / +91 9967554054 | Email: felixsolutions1@gmail.com", margin + 6, y + 33);

doc.setFont("helvetica", "normal");
doc.setFontSize(7.5);
doc.setTextColor(203, 213, 225);
doc.text("Timings: Mon to Sat: 10 a.m. to 6 p.m. | LinkedIn: https://in.linkedin.com/company/felixsolutions | IG: @felixsolutions1", margin + 6, y + 38);

// Page headers for pages 2+
const totalPages = doc.internal.getNumberOfPages();
for (let i = 1; i <= totalPages; i++) {
  doc.setPage(i);
  if (i > 1) renderPageHeader();
}

// Output directory
const outputDir = path.join(process.cwd(), "public", "downloads");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, "felix-solutions-product-brochure.pdf");
const pdfBuffer = Buffer.from(doc.output("arraybuffer"));
fs.writeFileSync(outputPath, pdfBuffer);

console.log(`PDF successfully generated at: ${outputPath}`);
