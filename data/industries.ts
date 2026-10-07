export interface Industry {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  iconName: string;
  codingRequirements: string[];
  keySolutions: string[];
  featuredProducts: string[];
  recommendedProductIds: string[];
  applicableApplications: string[];
}

export const industries: Industry[] = [
  {
    id: "food",
    slug: "food",
    name: "Food",
    shortDescription:
      "Precision batch, expiry, and lot coding on flexible packaging, cartons, pouches, and tin containers.",
    fullDescription:
      "In the fast-paced food manufacturing sector, clear batch numbers, manufacture dates, and expiry date codes are vital for food safety, compliance, and consumer trust. Felix Solutions delivers reliable coding systems engineered for high-speed food packaging lines.",
    image: "/images/industries/food-packaging.webp",
    iconName: "Utensils",
    codingRequirements: [
      "Fast drying food-safe inks",
      "High-speed line synchronization",
      "Printing on flexible films, pouches, and foils",
      "Moisture and condensation resistance",
    ],
    keySolutions: [
      "Non-contact CIJ date and batch coding",
      "Thermal inkjet printing for pouches and cartons",
      "High-speed sticker labelling systems",
    ],
    featuredProducts: ["citronix-ci5500", "anser-x1", "anser-u2-pros"],
    recommendedProductIds: ["citronix-ci-series","citronix-ct-series","anser-u2-series","anser-industrial-tij","laser-marking-systems"],
    applicableApplications: [
      "Date & Batch Coding",
      "MRP Printing",
      "Pouch & Flexible Packaging",
      "Carton & Case Coding",
    ],
  },
  {
    id: "beverages",
    slug: "beverages",
    name: "Beverages",
    shortDescription:
      "High-speed non-contact coding and labelling for glass bottles, PET containers, aluminium cans, and crates.",
    fullDescription:
      "Beverage bottling lines operate at high linear speeds in wet, humid environments. Felix Solutions provides waterproof Continuous Inkjet (CIJ) and laser marking systems capable of applying crisp codes onto cold, moist PET bottles and glass containers.",
    image: "/images/industries/beverage-bottling.webp",
    iconName: "Wine",
    codingRequirements: [
      "Condensation-penetrating ink formulations",
      "IP65 washdown-rated machinery",
      "Speeds up to 2000 bottles/minute",
      "Permanent laser marking on glass and PET caps",
    ],
    keySolutions: [
      "Citronix Ci5650 IP65 Continuous Inkjet Printer",
      "Automated Front and Back Bottle Labelling System",
      "Industrial CO2 Laser Marking System",
    ],
    featuredProducts: ["citronix-ci5650", "automated-front-back-labelling", "laser-marking-machine"],
    recommendedProductIds: ["citronix-ci-series","citronix-ct-series","anser-u2-series","anser-industrial-tij","laser-marking-systems"],
    applicableApplications: [
      "Bottle & Glass Marking",
      "Date & Batch Coding",
      "Barcode & QR Code Printing",
    ],
  },
  {
    id: "pharmaceuticals",
    slug: "pharmaceuticals",
    name: "Pharmaceuticals",
    shortDescription:
      "100% compliant serialization, GS1 DataMatrix 2D codes, and blister card marking.",
    fullDescription:
      "Pharmaceutical coding requires 100% legibility, GS1 DataMatrix compliance, and strict serialization for anti-counterfeiting. Our thermal inkjet and laser systems ensure razor-sharp 600 DPI printing on medicine cartons, ampoules, and blisters.",
    image: "/images/industries/pharmaceutical-serialization.webp",
    iconName: "Pill",
    codingRequirements: [
      "GS1 2D DataMatrix and QR code accuracy",
      "High contrast 600 DPI resolution",
      "Zero smudge, fast-curing solvent inks",
      "Integration with vision inspection systems",
    ],
    keySolutions: [
      "Anser X1 High Resolution Dual Head TIJ Coder",
      "Indelible CO2 Laser Blister Marking",
      "Automatic Vial & Bottle Labelling Systems",
    ],
    featuredProducts: ["anser-x1", "laser-marking-machine", "automated-front-back-labelling"],
    recommendedProductIds: ["citronix-ci-series","citronix-ct-series","anser-u2-series","anser-industrial-tij","laser-marking-systems"],
    applicableApplications: [
      "Serialization & Traceability",
      "Barcode & QR Code Printing",
      "Date & Batch Coding",
      "Carton & Case Coding",
    ],
  },
  {
    id: "dairy",
    slug: "dairy",
    name: "Dairy",
    shortDescription:
      "Hygiene-focused date and lot coding on milk pouches, cheese tubs, butter cartons, and ice cream tubs.",
    fullDescription:
      "Dairy processing plants require sanitary, food-safe coding equipment built to withstand cold storage temperatures and frequent washdown cycles. Our CIJ and TIJ printers deliver clean date and time stamps on milk pouches, tetra packs, and tubs.",
    image: "/images/industries/dairy-packaging.webp",
    iconName: "Milk",
    codingRequirements: [
      "Food-grade compliant inks",
      "Low-temperature operation stability",
      "Continuous pouch line speed matching",
    ],
    keySolutions: [
      "Citronix Ci5500 CIJ Printer",
      "Anser U2 Pros Solvent TIJ Coder",
    ],
    featuredProducts: ["citronix-ci5500", "anser-u2-pros"],
    recommendedProductIds: ["citronix-ci-series","citronix-ct-series","anser-u2-series","anser-industrial-tij","automatic-labelling-machines"],
    applicableApplications: [
      "Date & Batch Coding",
      "MRP Printing",
      "Pouch & Flexible Packaging",
    ],
  },
  {
    id: "liquor",
    slug: "liquor",
    name: "Liquor",
    shortDescription:
      "Anti-counterfeit bottle serialization, duty excise coding, and high-speed bottle labelling.",
    fullDescription:
      "The liquor industry requires high-security bottle serialization, clear excise barcode printing, and elegant front/back label placement on premium glass bottles and metal caps.",
    image: "/images/industries/liquor-bottling.webp",
    iconName: "Beer",
    codingRequirements: [
      "Excise QR code and serial code precision",
      "Indelible glass bottle marking",
      "High speed label application",
    ],
    keySolutions: [
      "Automated Front and Back Labelling System",
      "Laser Glass Marking System",
      "Citronix Ci5500 CIJ Coder",
    ],
    featuredProducts: ["automated-front-back-labelling", "laser-marking-machine", "citronix-ci5500"],
    recommendedProductIds: ["citronix-ci-series","laser-marking-systems","automatic-labelling-machines","automated-front-back-labelling","laser-marking-machine"],
    applicableApplications: [
      "Bottle & Glass Marking",
      "Serialization & Traceability",
      "Barcode & QR Code Printing",
    ],
  },
  {
    id: "automotive-lubricants",
    slug: "automotive-lubricants",
    name: "Automotive & Lubricants",
    shortDescription:
      "Heavy-duty part marking, oil canister batch coding, and outer drum identification.",
    fullDescription:
      "Engineered for heavy industrial applications, our coders print durable batch numbers, part specifications, and barcodes onto plastic oil canisters, metal drums, automotive hoses, and metal components.",
    image: "/images/industries/lubricant-bottles.webp",
    iconName: "Cog",
    codingRequirements: [
      "Oil and chemical resistant inks",
      "Heavy-duty rugged equipment design",
      "High contrast printing on dark plastics",
    ],
    keySolutions: [
      "Citronix Ci5650 Heavy-Duty CIJ Printer",
      "Anser U2 Mobile Handheld Coder for Drums",
      "Automated Container Labelling Machine",
    ],
    featuredProducts: ["citronix-ci5650", "anser-u2-mobile", "automated-front-back-labelling"],
    recommendedProductIds: ["citronix-ci-series","citronix-ct-series","anser-u2-series","laser-marking-systems","automatic-labelling-machines"],
    applicableApplications: [
      "Component & Part Marking",
      "Date & Batch Coding",
      "Bottle & Glass Marking",
      "Carton & Case Coding",
    ],
  },
  {
    id: "cosmetics-toiletries",
    slug: "cosmetics-toiletries",
    name: "Cosmetics & Toiletries",
    shortDescription:
      "High-aesthetic lot coding and precision labelling for personal care containers, tubes, and bottles.",
    fullDescription:
      "Personal care packaging demands discreet, clean, high-resolution date and batch printing that preserves brand aesthetics on cosmetic tubes, perfume bottles, and shampoo containers.",
    image: "/images/industries/cosmetics-packaging.webp",
    iconName: "Sparkles",
    codingRequirements: [
      "Micro-font printing down to 0.8mm",
      "High aesthetic clarity on transparent PET & glass",
      "Precise front/back sticker labelling",
    ],
    keySolutions: [
      "Anser X1 High Resolution TIJ Coder",
      "Automated Front and Back Labelling System",
    ],
    featuredProducts: ["anser-x1", "automated-front-back-labelling", "citronix-ci5500"],
    recommendedProductIds: ["citronix-ci-series","citronix-ct-series","anser-u2-series","anser-industrial-tij","laser-marking-systems"],
    applicableApplications: [
      "Bottle & Glass Marking",
      "Date & Batch Coding",
      "Barcode & QR Code Printing",
    ],
  },
  {
    id: "agrochemicals",
    slug: "agrochemicals",
    name: "Agrochemicals",
    shortDescription:
      "Chemical-resistant batch coding and barcode identification on pesticide bottles and fertilizer bags.",
    fullDescription:
      "Agrochemical containers are exposed to aggressive chemical vapors and outdoor weather. Felix Solutions provides robust coding and labelling equipment that ensures 100% barcode readability and regulatory compliance.",
    image: "/images/industries/agrochemical-containers.webp",
    iconName: "Leaf",
    codingRequirements: [
      "Solvent and chemical fume resistance",
      "Durable weather-proof barcode printing",
      "Heavy pouch and HDPE container coding",
    ],
    keySolutions: [
      "Citronix Ci5650 IP65 CIJ Coder",
      "Anser U2 Pros Heavy Duty TIJ Coder",
    ],
    featuredProducts: ["citronix-ci5650", "anser-u2-pros"],
    recommendedProductIds: ["citronix-ci-series","anser-u2-series","anser-industrial-tij","automatic-labelling-machines","carton-taping-machines"],
    applicableApplications: [
      "Date & Batch Coding",
      "Pouch & Flexible Packaging",
      "Carton & Case Coding",
    ],
  },
  {
    id: "cable-pipes",
    slug: "cable-pipes",
    name: "Cable & Pipes",
    shortDescription:
      "Continuous non-stop meter marking and identification printing on moving pipe and cable extrusions.",
    fullDescription:
      "Extrusion production lines move continuously at high linear speeds. Our specialized continuous inkjet printers deliver non-stop sequential meter marking, brand logos, and specifications onto PVC pipes, HDPE conduits, and electrical cables.",
    image: "/images/industries/cable-pipe-extrusion.webp",
    iconName: "Activity",
    codingRequirements: [
      "Continuous non-stop extrusion printing",
      "High adhesion pigmented white and yellow inks",
      "Sequential meter counting & automatic calculation",
    ],
    keySolutions: [
      "Citronix Ci5650 CIJ Cable & Pipe Marking Printer",
      "High-speed Pigmented Ink Jet Coder",
    ],
    featuredProducts: ["citronix-ci5650", "high-speed-inkjet-system"],
    recommendedProductIds: ["citronix-ci-series","citronix-ct-series","anser-u2-series","laser-marking-systems","conveyor-systems"],
    applicableApplications: [
      "Pipe & Cable Marking",
      "Serialization & Traceability",
    ],
  },
];
