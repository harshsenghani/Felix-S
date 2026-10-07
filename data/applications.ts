export interface ApplicationItem {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  badgeLabel: string;
  keyRequirements: string[];
  suitableProducts: string[];
  supportedIndustries: string[];
}

export const applicationsData: ApplicationItem[] = [
  {
    id: "date-batch-coding",
    slug: "date-batch-coding",
    name: "Date & Batch Coding",
    shortDescription:
      "High-speed continuous non-contact printing of manufacture dates, expiry dates, and lot numbers on moving products.",
    fullDescription:
      "Date & Batch Coding is fundamental to consumer safety and supply chain traceability. Felix Solutions provides industrial inkjet coders capable of printing clear, smudge-proof manufacture dates, use-by dates, and batch codes on pouches, bottles, cartons, and plastic containers at full production speed.",
    image: "/images/applications/date-batch-coding.webp",
    badgeLabel: "EXPIRY & LOT CODING",
    keyRequirements: [
      "High-speed non-contact printing",
      "Fast-drying, non-smudge inks",
      "Variable time & date auto-calculation",
      "Compact printhead mounting for conveyors",
    ],
    suitableProducts: ["citronix-ci5500", "citronix-ci5650", "anser-x1", "anser-u2-pros"],
    supportedIndustries: ["FOOD", "BEVERAGES", "PHARMACEUTICALS", "DAIRY", "LIQUOR", "COSMETICS & TOILETRIES"],
  },
  {
    id: "mrp-printing",
    slug: "mrp-printing",
    name: "MRP Printing",
    shortDescription:
      "Crisp retail Maximum Retail Price (MRP), net weight, and manufacture details printed directly on primary & secondary packaging.",
    fullDescription:
      "Printing clear, legal Maximum Retail Price (MRP) markings is mandatory across consumer goods in India and global markets. Our TIJ and CIJ coders deliver sharp fonts that remain perfectly legible on glossy films, cartons, and pouches.",
    image: "/images/applications/mrp-printing.webp",
    badgeLabel: "RETAIL PRICE PRINTING",
    keyRequirements: [
      "Sharp text legibility down to small font sizes",
      "Support for Indian Rupee symbol (₹) and regional text",
      "High adhesion on laminated foils and films",
    ],
    suitableProducts: ["citronix-ci5500", "anser-x1", "anser-u2-smartone"],
    supportedIndustries: ["FOOD", "BEVERAGES", "PHARMACEUTICALS", "DAIRY", "COSMETICS & TOILETRIES"],
  },
  {
    id: "barcode-qr-code-printing",
    slug: "barcode-qr-code-printing",
    name: "Barcode & QR Code Printing",
    shortDescription:
      "High-resolution 1D linear barcodes and 2D QR codes printed in real time for POS and inventory tracking.",
    fullDescription:
      "Modern manufacturing requires machine-readable 1D barcodes and 2D QR codes on every package for automated warehouse sorting and retail checkout. Felix Solutions TIJ and Laser systems print high-contrast, grade-A barcodes.",
    image: "/images/applications/barcode-qr-printing.webp",
    badgeLabel: "2D & 1D BARCODES",
    keyRequirements: [
      "Grade A/B barcode scan legibility",
      "High resolution up to 600 DPI",
      "Real-time variable data barcode generation",
    ],
    suitableProducts: ["anser-x1", "laser-marking-machine", "anser-u2-pros"],
    supportedIndustries: ["FOOD", "BEVERAGES", "PHARMACEUTICALS", "AUTOMOTIVE & LUBRICANTS", "AGROCHEMICALS"],
  },
  {
    id: "serialization-traceability",
    slug: "serialization-traceability",
    name: "Serialization & Traceability",
    shortDescription:
      "Unique serialized unit-level identification for pharmaceutical compliance and brand protection against counterfeiting.",
    fullDescription:
      "Serialization assigns a unique serial number to every individual product package. Used extensively in pharmaceuticals and liquor, our high-speed coders seamlessly integrate with track-and-trace databases and vision camera systems.",
    image: "/images/applications/serialization-traceability.webp",
    badgeLabel: "TRACK & TRACE",
    keyRequirements: [
      "Unique serial number generation at line speeds",
      "Integration with Ethernet PLC / Vision systems",
      "Indelible anti-tamper marking",
    ],
    suitableProducts: ["anser-x1", "laser-marking-machine", "citronix-ci5650"],
    supportedIndustries: ["PHARMACEUTICALS", "LIQUOR", "COSMETICS & TOILETRIES"],
  },
  {
    id: "pipe-cable-marking",
    slug: "pipe-cable-marking",
    name: "Pipe & Cable Marking",
    shortDescription:
      "Continuous non-stop meter marking and specification printing on PVC, HDPE pipes, and electrical cables.",
    fullDescription:
      "Extruded pipe and cable lines run non-stop 24 hours a day. Felix Solutions CIJ coders provide continuous meter marking, brand logos, dimensions, and pressure ratings with high-contrast pigmented inks.",
    image: "/images/applications/pipe-cable-marking.webp",
    badgeLabel: "EXTRUSION MARKING",
    keyRequirements: [
      "High-speed continuous extrusion printing",
      "High contrast pigmented white and yellow inks",
      "Automatic meter counter synchronization",
    ],
    suitableProducts: ["citronix-ci5650", "high-speed-inkjet-system", "anser-u2-mobile"],
    supportedIndustries: ["CABLE & PIPES", "AUTOMOTIVE & LUBRICANTS"],
  },
  {
    id: "bottle-glass-marking",
    slug: "bottle-glass-marking",
    name: "Bottle & Glass Marking",
    shortDescription:
      "Fast-drying ink and laser marking directly on glass beverage bottles, PET containers, and aluminum caps.",
    fullDescription:
      "Marking on cold, wet glass bottles or PET containers requires specialized moisture-penetrating inks or precise laser engraving. Our bottling coders deliver permanent, crisp batch numbers on moving lines.",
    image: "/images/applications/bottle-glass-marking.webp",
    badgeLabel: "BOTTLING LINES",
    keyRequirements: [
      "Adhesion on cold or moist glass/PET surfaces",
      "High speed line compatibility",
      "Precise front/back sticker labelling",
    ],
    suitableProducts: ["citronix-ci5650", "automated-front-back-labelling", "laser-marking-machine"],
    supportedIndustries: ["BEVERAGES", "LIQUOR", "PHARMACEUTICALS", "COSMETICS & TOILETRIES"],
  },
  {
    id: "carton-case-coding",
    slug: "carton-case-coding",
    name: "Carton & Case Coding",
    shortDescription:
      "Large-character thermal inkjet and bulk printing on outer corrugated cases and shipping boxes.",
    fullDescription:
      "Outer case coding eliminates the need for expensive pre-printed boxes. Our large character TIJ coders print crisp product descriptions, shipping barcodes, and batch numbers directly onto corrugated master cartons.",
    image: "/images/applications/carton-case-coding.webp",
    badgeLabel: "OUTER CASE CODING",
    keyRequirements: [
      "Large character print heights (12.7mm to 50mm)",
      "High contrast on brown/white corrugated board",
      "Low cost per print bulk ink delivery",
    ],
    suitableProducts: ["anser-u2-diesel", "anser-x1", "anser-u2-smartone"],
    supportedIndustries: ["FOOD", "BEVERAGES", "PHARMACEUTICALS", "AUTOMOTIVE & LUBRICANTS", "AGROCHEMICALS"],
  },
  {
    id: "pouch-flexible-packaging",
    slug: "pouch-flexible-packaging",
    name: "Pouch & Flexible Packaging",
    shortDescription:
      "High-speed date and lot coding on laminated pouches, flow wraps, stand-up pouches, and foil sachets.",
    fullDescription:
      "Flexible packaging is widely used for snacks, spices, milk, and condiments. Our CIJ and TIJ printers deliver non-contact date coding directly on horizontal or vertical form-fill-seal (FFS) machines.",
    image: "/images/applications/pouch-packaging-coding.webp",
    badgeLabel: "FLEXIBLE FILM & FOIL",
    keyRequirements: [
      "Fast dry time under 1 second",
      "Non-contact printing on flexible film",
      "Integration with FFS flow wrapping machines",
    ],
    suitableProducts: ["citronix-ci5500", "anser-u2-pros", "anser-x1"],
    supportedIndustries: ["FOOD", "DAIRY", "AGROCHEMICALS", "COSMETICS & TOILETRIES"],
  },
  {
    id: "component-part-marking",
    slug: "component-part-marking",
    name: "Component & Part Marking",
    shortDescription:
      "Durable part identification, serial numbers, and 2D DataMatrix codes on metal, plastic, and rubber components.",
    fullDescription:
      "Automotive parts, electrical fittings, and industrial hardware require indelible part identification numbers for assembly line tracking and warranty verification.",
    image: "/images/applications/component-part-marking.webp",
    badgeLabel: "INDUSTRIAL PARTS",
    keyRequirements: [
      "Oil and heat resistant ink adhesion",
      "Indelible laser etching on metals",
      "Handheld cordless mobility for large components",
    ],
    suitableProducts: ["laser-marking-machine", "anser-u2-mobile", "citronix-ci5650"],
    supportedIndustries: ["AUTOMOTIVE & LUBRICANTS", "CABLE & PIPES"],
  },
];

