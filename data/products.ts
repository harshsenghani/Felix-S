export type ProductCategory =
  | "coding-marking"
  | "labelling"
  | "packaging-sealing"
  | "material-handling";

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  galleryImages: string[];
  applications: string[];
  keyBenefits: string[];
  specifications: ProductSpec[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand?: string;
  category: ProductCategory;
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  galleryImages?: string[];
  applications: string[];
  industriesServed: string[];
  keyBenefits: string[];
  specifications: ProductSpec[];
  faqs?: ProductFAQ[];
  relatedProductIds: string[];
  featured?: boolean;
  variants?: ProductVariant[];
}

export const productCategories: { id: string; label: string }[] = [
  { id: "all", label: "All Products" },
  { id: "coding-marking", label: "Coding & Marking" },
  { id: "labelling", label: "Labelling" },
  { id: "packaging-sealing", label: "Packaging & Sealing" },
  { id: "material-handling", label: "Material Handling" },
];

export const products: Product[] = [
  {
    "id": "citronix-ci-series",
    "slug": "citronix-ci-series",
    "name": "Citronix Ci Series CIJ Printers",
    "brand": "Citronix",
    "category": "coding-marking",
    "categoryLabel": "Continuous Inkjet (CIJ)",
    "shortDescription": "Comprehensive range of continuous inkjet printers for reliable, high-speed date and batch coding across all industrial environments.",
    "fullDescription": "The Citronix Ci Series includes the entry-level Ci5150, the high-speed Ci5500, and the heavy-duty washdown-rated Ci5650. Designed to deliver non-contact printing on almost any substrate, these printers offer ciPrecision Plus technology, smart flush systems, and robust IP-rated enclosures to meet the demands of modern production lines.",
    "image": "/images/products/citronix-ci5500.webp",
    "galleryImages": [
      "/images/products/citronix-ci5150.webp",
      "/images/products/citronix-ci5500.webp",
      "/images/products/citronix-ci5650.webp"
    ],
    "applications": [
      "Date & Batch Coding",
      "MRP Printing",
      "Bottle & Glass Marking",
      "Carton & Case Coding",
      "Pipe & Cable Marking",
      "Barcode & QR Code Printing",
      "Serialization & Traceability"
    ],
    "industriesServed": [
      "FOOD",
      "BEVERAGES",
      "PHARMACEUTICALS",
      "DAIRY",
      "AUTOMOTIVE & LUBRICANTS",
      "COSMETICS & TOILETRIES",
      "LIQUOR",
      "CABLE & PIPES",
      "AGROCHEMICALS"
    ],
    "keyBenefits": [
      "ciPrecision Plus technology for optimized speed and print quality",
      "10.1-inch capacitive touchscreen with WYSIWYG interface",
      "Single PCB design for simplified maintenance and lower total cost",
      "ciSafeFill & Smart Flush for automated fluid-type verification and printhead cleaning",
      "IP55-rated powder-coated steel cabinet, built in USA",
      "Support for 40+ languages and 1,000+ message storage"
    ],
    "specifications": [
      {
        "label": "Technology",
        "value": "Continuous Inkjet (CIJ)"
      },
      {
        "label": "Lines of Print",
        "value": "1 to 3 lines"
      },
      {
        "label": "Print Speed",
        "value": "Up to 6.9 m/sec"
      },
      {
        "label": "Character Height",
        "value": "3 mm to 12 mm"
      },
      {
        "label": "Display",
        "value": "10.1-inch capacitive color touchscreen"
      },
      {
        "label": "IP Rating",
        "value": "IP55"
      },
      {
        "label": "Weight",
        "value": "18 kg (including printhead)"
      },
      {
        "label": "Power Supply",
        "value": "100–240V, 3A auto-ranging; 50–60 Hz"
      },
      {
        "label": "Ink Types",
        "value": "MEK Black, Special Black"
      },
      {
        "label": "Connectivity",
        "value": "USB, SD Card, Photocell, Encoder, 3× Programmable Alarms"
      }
    ],
    "faqs": [
      {
            "question": "What is the Citronix Ci Series CIJ Printers primarily used for?",
            "answer": "The Citronix Ci Series CIJ Printers is primarily used for date & batch coding, mrp printing, bottle & glass marking and other industrial applications in the Continuous Inkjet (CIJ) category."
      },
      {
            "question": "Which industries are suitable for this product?",
            "answer": "This product is highly suitable for industries such as Food, Beverages, Pharmaceuticals, Dairy, Automotive & lubricants, Cosmetics & toiletries, Liquor, Cable & pipes, Agrochemicals."
      },
      {
            "question": "What is the technology of the Citronix Ci Series CIJ Printers?",
            "answer": "The technology is specified as Continuous Inkjet (CIJ)."
      },
      {
            "question": "What are the main benefits of choosing this model?",
            "answer": "Key benefits include: ciprecision plus technology for optimized speed and print quality, as well as 10.1-inch capacitive touchscreen with wysiwyg interface."
      },
      {
            "question": "Can it be used for carton & case coding?",
            "answer": "Yes, it is designed to support carton & case coding among its various applications."
      }
],
    "relatedProductIds": [],
    "variants": [
      {
        "id": "citronix-ci5150",
        "name": "Citronix Ci5150 Entry-Level CIJ Printer",
        "shortDescription": "Entry-level continuous inkjet printer built on the proven ci5000 Series platform, delivering reliable 3-line industrial coding at reduced capital cost.",
        "fullDescription": "The Citronix ci5150 is an entry-level industrial continuous inkjet (CIJ) printer designed for businesses seeking reliability and quality from a trusted brand while minimizing upfront capital costs. Built upon the proven ci5000 Series range, this 3-line industrial printer removes unnecessary hardware complexity by focusing on core coding features while maintaining the same IP55-rated stainless steel build. Featuring ciPrecision Plus technology, a 10.1-inch capacitive touchscreen, and ciSafeFill & Smart Flush technology, the ci5150 delivers production-grade CIJ performance. With support for 40+ languages and over 1,000 message storage slots, it's ideal for date, batch, and traceability coding across food, beverage, pharmaceutical, and industrial sectors.",
        "image": "/images/products/citronix-ci5150.webp",
        "galleryImages": [
          "/images/products/citronix-ci5150.webp"
        ],
        "applications": [
          "Date & Batch Coding",
          "MRP Printing",
          "Bottle & Glass Marking",
          "Carton & Case Coding",
          "Pipe & Cable Marking"
        ],
        "keyBenefits": [
          "ciPrecision Plus technology for optimized speed and print quality",
          "10.1-inch capacitive touchscreen with WYSIWYG interface",
          "Single PCB design for simplified maintenance and lower total cost",
          "ciSafeFill & Smart Flush for automated fluid-type verification and printhead cleaning",
          "IP55-rated powder-coated steel cabinet, built in USA",
          "Support for 40+ languages and 1,000+ message storage"
        ],
        "specifications": [
          {
            "label": "Technology",
            "value": "Continuous Inkjet (CIJ)"
          },
          {
            "label": "Lines of Print",
            "value": "1 to 3 lines"
          },
          {
            "label": "Print Speed",
            "value": "Up to 6.9 m/sec"
          },
          {
            "label": "Character Height",
            "value": "3 mm to 12 mm"
          },
          {
            "label": "Display",
            "value": "10.1-inch capacitive color touchscreen"
          },
          {
            "label": "IP Rating",
            "value": "IP55"
          },
          {
            "label": "Weight",
            "value": "18 kg (including printhead)"
          },
          {
            "label": "Power Supply",
            "value": "100–240V, 3A auto-ranging; 50–60 Hz"
          },
          {
            "label": "Ink Types",
            "value": "MEK Black, Special Black"
          },
          {
            "label": "Connectivity",
            "value": "USB, SD Card, Photocell, Encoder, 3× Programmable Alarms"
          }
        ]
      },
      {
        "id": "citronix-ci5500",
        "name": "Citronix Ci5500 Continuous Inkjet Printer",
        "shortDescription": "High-speed continuous inkjet printer delivering non-contact date, lot, and batch coding on fast production lines.",
        "fullDescription": "The Citronix Ci5500 is a state-of-the-art continuous inkjet (CIJ) printing system engineered for high-speed, non-contact printing on virtually any substrate including plastics, glass, metal, flexible films, and cardboard. Equipped with advanced CiOnline software and micro-pigmented ink capability.",
        "image": "/images/products/citronix-ci5500.webp",
        "galleryImages": [
          "/images/products/citronix-ci5500.webp",
          "/images/products/citronix-ci5650.webp"
        ],
        "applications": [
          "Date & Batch Coding",
          "MRP Printing",
          "Barcode & QR Code Printing",
          "Bottle & Glass Marking",
          "Carton & Case Coding"
        ],
        "keyBenefits": [
          "High-speed 1 to 5 line printing capability",
          "CiClean automatic printhead flush mechanism",
          "Fast drying MEK, Acetone, and Ethanol based inks",
          "Simple touch screen interface with multi-language support",
          "Low fluid consumption for economical operation"
        ],
        "specifications": [
          {
            "label": "Print Lines",
            "value": "Up to 5 lines of text, graphics, and barcodes"
          },
          {
            "label": "Print Speed",
            "value": "Up to 9.8 m/sec (1960 ft/min)"
          },
          {
            "label": "Substrates",
            "value": "Glass, Plastic, Metal, Cardboard, Extrusions"
          },
          {
            "label": "Enclosure Rating",
            "value": "Stainless Steel IP55"
          },
          {
            "label": "Ink Types",
            "value": "Fast Dry MEK, Dye & Pigmented Inks"
          },
          {
            "label": "Communication",
            "value": "Ethernet, RS232, USB"
          }
        ]
      },
      {
        "id": "citronix-ci5650",
        "name": "Citronix Ci5650 Heavy-Duty IP65 CIJ Printer",
        "shortDescription": "Rugged IP65-rated continuous inkjet printer designed for harsh industrial and washdown environments.",
        "fullDescription": "The Citronix Ci5650 is built specifically for harsh production environments subject to high humidity, dust, or heavy washdowns. Features positive air pressurized enclosure and printhead, ensuring zero ingress during wet or dusty operations.",
        "image": "/images/products/citronix-ci5650.webp",
        "galleryImages": [
          "/images/products/citronix-ci5650.webp",
          "/images/products/citronix-ci5500.webp"
        ],
        "applications": [
          "Date & Batch Coding",
          "Pipe & Cable Marking",
          "Bottle & Glass Marking",
          "Serialization & Traceability"
        ],
        "keyBenefits": [
          "IP65 washdown rated enclosure with positive air pressurization",
          "Heavy-duty continuous production reliability",
          "Micro-print capability down to 0.6mm font height",
          "Seamless integration with production lines and ERP systems"
        ],
        "specifications": [
          {
            "label": "Print Lines",
            "value": "Up to 5 lines"
          },
          {
            "label": "Protection Rating",
            "value": "IP65 Dust & Washdown Protected"
          },
          {
            "label": "Printhead Air Purge",
            "value": "Integrated Positive Air Pressurization"
          },
          {
            "label": "Operating Temperature",
            "value": "5°C - 45°C (41°F - 113°F)"
          },
          {
            "label": "Inks Available",
            "value": "High Contrast White, Yellow, Heavy Duty Inks"
          }
        ]
      }
    ],
    "featured": true
  },
  {
    "id": "citronix-ct-series",
    "slug": "citronix-ct-series",
    "name": "Citronix ct2000 Series TIJ Printers",
    "brand": "Citronix",
    "category": "coding-marking",
    "categoryLabel": "Thermal Inkjet (TIJ)",
    "shortDescription": "A complete range of maintenance-free thermal inkjet printers based on HP TIJ 2.5 technology, offering from 0.5-inch to 4-inch print heights.",
    "fullDescription": "The Citronix ct2000 Series offers scalable, high-resolution thermal inkjet coding solutions. From the entry-level ct2030 with integrated controls, to the mid-range ct2050 with built-in displays, up to the flagship ct2400 Pro with a 10-inch touchscreen and support for 4 stitched printheads, this family provides zero-maintenance, crisp coding for any packaging requirement.",
    "image": "/images/products/citronix-ct2200pro-model.webp",
    "galleryImages": [
      "/images/products/citronix-ct2030-s.webp",
      "/images/products/citronix-ct2030-h.webp",
      "/images/products/citronix-ct2050-s.webp",
      "/images/products/citronix-ct2050-h.webp",
      "/images/products/citronix-ct2200pro-model.webp",
      "/images/products/citronix-ct2400pro.webp"
    ],
    "applications": [
      "Date & Batch Coding",
      "MRP Printing",
      "Serialization & Traceability",
      "Carton & Case Coding",
      "Barcode & QR Code Printing",
      "Pouch & Flexible Packaging"
    ],
    "industriesServed": [
      "FOOD",
      "BEVERAGES",
      "PHARMACEUTICALS",
      "DAIRY",
      "COSMETICS & TOILETRIES",
      "AUTOMOTIVE & LUBRICANTS",
      "CABLE & PIPES"
    ],
    "keyBenefits": [
      "HP TIJ 2.5 technology for consistent, high-resolution output",
      "Maintenance-free design — only cartridge change needed",
      "Intelligent auto cartridge detection with auto parameter configuration",
      "Durable anodized aluminum body with stainless steel faceplate",
      "Ships with integrated photocell and mounting brackets",
      "Compatible with water-based and solvent-based inks"
    ],
    "specifications": [
      {
        "label": "Technology",
        "value": "HP Thermal Inkjet 2.5"
      },
      {
        "label": "Print Height",
        "value": "0.5 inch (12.7 mm) — S-Head"
      },
      {
        "label": "Print Resolution",
        "value": "Up to 300 dpi"
      },
      {
        "label": "Max Print Speed",
        "value": "Up to 60 m/min"
      },
      {
        "label": "Throw Distance",
        "value": "1 mm to 5 mm"
      },
      {
        "label": "Body Material",
        "value": "Anodized Aluminum, Stainless Steel Faceplate"
      },
      {
        "label": "Connectivity",
        "value": "USB, Ethernet"
      },
      {
        "label": "Ink Types",
        "value": "Water-based & Solvent-based"
      }
    ],
    "faqs": [
      {
            "question": "What is the Citronix ct2000 Series TIJ Printers primarily used for?",
            "answer": "The Citronix ct2000 Series TIJ Printers is primarily used for date & batch coding, mrp printing, serialization & traceability and other industrial applications in the Thermal Inkjet (TIJ) category."
      },
      {
            "question": "Which industries are suitable for this product?",
            "answer": "This product is highly suitable for industries such as Food, Beverages, Pharmaceuticals, Dairy, Cosmetics & toiletries, Automotive & lubricants, Cable & pipes."
      },
      {
            "question": "What is the technology of the Citronix ct2000 Series TIJ Printers?",
            "answer": "The technology is specified as HP Thermal Inkjet 2.5."
      },
      {
            "question": "What are the main benefits of choosing this model?",
            "answer": "Key benefits include: hp tij 2.5 technology for consistent, high-resolution output, as well as maintenance-free design — only cartridge change needed."
      },
      {
            "question": "Can it be used for carton & case coding?",
            "answer": "Yes, it is designed to support carton & case coding among its various applications."
      }
],
    "relatedProductIds": [],
    "variants": [
      {
        "id": "citronix-ct2030-s",
        "name": "Citronix ct2030-S Thermal Inkjet Printer",
        "shortDescription": "Entry-level integrated TIJ printer with 0.5-inch S-Head print height for maintenance-free date, batch, and traceability coding.",
        "fullDescription": "The Citronix ct2030-S is a fully integrated, entry-level TIJ printer from the ct2000 Series, designed for reliable industrial coding and marking on production lines. Built with a durable anodized aluminum body and stainless steel faceplate, it withstands demanding industrial environments. Using HP Thermal Inkjet 2.5 technology, it delivers high-resolution printing at up to 300 dpi with speeds reaching 60 m/min. The embedded chip in the printhead automatically recognizes the connected cartridge type and configures the appropriate print parameters, eliminating manual setup errors. Ships with an integrated photocell and all necessary mounting brackets for quick integration onto existing production lines.",
        "image": "/images/products/citronix-ct2030-s.webp",
        "galleryImages": [
          "/images/products/citronix-ct2030-s.webp"
        ],
        "applications": [
          "Date & Batch Coding",
          "MRP Printing",
          "Serialization & Traceability",
          "Carton & Case Coding"
        ],
        "keyBenefits": [
          "HP TIJ 2.5 technology for consistent, high-resolution output",
          "Maintenance-free design — only cartridge change needed",
          "Intelligent auto cartridge detection with auto parameter configuration",
          "Durable anodized aluminum body with stainless steel faceplate",
          "Ships with integrated photocell and mounting brackets",
          "Compatible with water-based and solvent-based inks"
        ],
        "specifications": [
          {
            "label": "Technology",
            "value": "HP Thermal Inkjet 2.5"
          },
          {
            "label": "Print Height",
            "value": "0.5 inch (12.7 mm) — S-Head"
          },
          {
            "label": "Print Resolution",
            "value": "Up to 300 dpi"
          },
          {
            "label": "Max Print Speed",
            "value": "Up to 60 m/min"
          },
          {
            "label": "Throw Distance",
            "value": "1 mm to 5 mm"
          },
          {
            "label": "Body Material",
            "value": "Anodized Aluminum, Stainless Steel Faceplate"
          },
          {
            "label": "Connectivity",
            "value": "USB, Ethernet"
          },
          {
            "label": "Ink Types",
            "value": "Water-based & Solvent-based"
          }
        ]
      },
      {
        "id": "citronix-ct2030-h",
        "name": "Citronix ct2030-H Thermal Inkjet Printer",
        "shortDescription": "Entry-level integrated TIJ printer with 1-inch H-Head print height for larger codes, multi-line messages, and enhanced logo printing.",
        "fullDescription": "The Citronix ct2030-H is identical in design to the ct2030-S but uses a 1-inch H-Head cartridge for double the vertical print area, enabling larger batch codes, enhanced logos, and multi-line messages without the need for printhead stitching. Built on the same anodized aluminum and stainless steel platform, it delivers reliable operation at up to 300 dpi and 60 m/min. The integrated photocell and plug-and-play cartridge detection mean setup is fast, and the maintenance-free nature of TIJ technology significantly reduces total cost of ownership versus CIJ systems. Can be controlled via PC, tablet, or mobile browser for remote operation and message management.",
        "image": "/images/products/citronix-ct2030-h.webp",
        "galleryImages": [
          "/images/products/citronix-ct2030-h.webp"
        ],
        "applications": [
          "Date & Batch Coding",
          "MRP Printing",
          "Barcode & QR Code Printing",
          "Carton & Case Coding"
        ],
        "keyBenefits": [
          "1-inch H-Head doubles vertical print area vs S-Head",
          "Larger fonts, multi-line codes, and detailed logos without stitching",
          "HP TIJ 2.5 technology — consistent, high-resolution output",
          "Maintenance-free — simply swap the cartridge",
          "Remote browser-based message management"
        ],
        "specifications": [
          {
            "label": "Technology",
            "value": "HP Thermal Inkjet 2.5"
          },
          {
            "label": "Print Height",
            "value": "1 inch (25.4 mm) — H-Head"
          },
          {
            "label": "Print Resolution",
            "value": "Up to 300 dpi"
          },
          {
            "label": "Max Print Speed",
            "value": "Up to 60 m/min"
          },
          {
            "label": "Throw Distance",
            "value": "1 mm to 5 mm"
          },
          {
            "label": "Body Material",
            "value": "Anodized Aluminum, Stainless Steel Faceplate"
          },
          {
            "label": "Connectivity",
            "value": "USB, Ethernet"
          },
          {
            "label": "Ink Types",
            "value": "Water-based & Solvent-based"
          }
        ]
      },
      {
        "id": "citronix-ct2050-s",
        "name": "Citronix ct2050-S TIJ Printer with Display",
        "shortDescription": "Mid-range integrated TIJ printer with built-in 3.5-inch LCD display and keyboard for on-machine message creation at 0.5-inch print height.",
        "fullDescription": "The Citronix ct2050-S bridges entry-level and advanced TIJ printing by incorporating a 3.5-inch LCD display and physical keyboard directly on the printer unit, allowing operators to create and edit messages without a PC or external controller. Built with the same anodized aluminum and stainless steel construction as the ct2030 series, it delivers up to 300 dpi resolution and print speeds up to 60 m/min on porous and non-porous substrates. The on-board WYSIWYG interface supports text, barcodes, 2D codes, and graphics. Like all ct2000 Series printers, it uses HP TIJ 2.5 technology for zero-maintenance operation, with smart cartridge detection automatically adjusting settings. Optional TCP/IP connectivity enables remote message management.",
        "image": "/images/products/citronix-ct2050-s.webp",
        "galleryImages": [
          "/images/products/citronix-ct2050-s.webp"
        ],
        "applications": [
          "Date & Batch Coding",
          "MRP Printing",
          "Barcode & QR Code Printing",
          "Serialization & Traceability"
        ],
        "keyBenefits": [
          "Built-in 3.5-inch LCD display and keyboard for stand-alone operation",
          "WYSIWYG on-device interface for text, barcodes, QR codes, and logos",
          "HP TIJ 2.5 technology — maintenance-free, high-resolution printing",
          "0.5-inch S-Head for compact coding on small label areas",
          "Smart cartridge management with auto ink-level tracking",
          "Optional TCP/IP for remote line integration"
        ],
        "specifications": [
          {
            "label": "Technology",
            "value": "HP Thermal Inkjet 2.5"
          },
          {
            "label": "Print Height",
            "value": "0.5 inch (12.7 mm) — S-Head"
          },
          {
            "label": "Print Resolution",
            "value": "Up to 300 dpi"
          },
          {
            "label": "Max Print Speed",
            "value": "Up to 60 m/min"
          },
          {
            "label": "Display",
            "value": "3.5-inch LCD screen with keyboard"
          },
          {
            "label": "Body Material",
            "value": "Anodized Aluminum, Stainless Steel Faceplate"
          },
          {
            "label": "Connectivity",
            "value": "RS485, USB, Optional TCP/IP"
          },
          {
            "label": "Ink Types",
            "value": "Water-based & Solvent-based"
          }
        ]
      },
      {
        "id": "citronix-ct2050-h",
        "name": "Citronix ct2050-H TIJ Printer with Display",
        "shortDescription": "Mid-range integrated TIJ printer with built-in display, keyboard, and 1-inch H-Head for larger codes, logos, and multi-line messages.",
        "fullDescription": "The Citronix ct2050-H delivers a balanced combination of on-device control and expanded print height, making it suitable for applications requiring larger codes or multi-line information at 1 inch without stitching. It features the same 3.5-inch LCD display and keyboard as the ct2050-S for self-contained message management, and uses HP TIJ 2.5 technology for maintenance-free, high-resolution printing. The H-Head cartridge prints at 1 inch height, suitable for larger fonts, regulatory compliance marks, and complex barcodes. Connectivity options include RS485, USB, and optional TCP/IP for remote data management.",
        "image": "/images/products/citronix-ct2050-h.webp",
        "galleryImages": [
          "/images/products/citronix-ct2050-h.webp"
        ],
        "applications": [
          "Date & Batch Coding",
          "MRP Printing",
          "Barcode & QR Code Printing",
          "Carton & Case Coding"
        ],
        "keyBenefits": [
          "1-inch H-Head for larger fonts, multi-line messages, and barcode-rich labels",
          "3.5-inch LCD display and keyboard for operator-friendly standalone operation",
          "HP TIJ 2.5 technology — zero maintenance, consistent output",
          "WYSIWYG message preview on-screen before printing",
          "Multiple connectivity options: RS485, USB, optional TCP/IP"
        ],
        "specifications": [
          {
            "label": "Technology",
            "value": "HP Thermal Inkjet 2.5"
          },
          {
            "label": "Print Height",
            "value": "1 inch (25.4 mm) — H-Head"
          },
          {
            "label": "Print Resolution",
            "value": "Up to 300 dpi"
          },
          {
            "label": "Max Print Speed",
            "value": "Up to 60 m/min"
          },
          {
            "label": "Display",
            "value": "3.5-inch LCD screen with keyboard"
          },
          {
            "label": "Body Material",
            "value": "Anodized Aluminum, Stainless Steel Faceplate"
          },
          {
            "label": "Connectivity",
            "value": "RS485, USB, Optional TCP/IP"
          },
          {
            "label": "Ink Types",
            "value": "Water-based & Solvent-based"
          }
        ]
      },
      {
        "id": "citronix-ct2200pro",
        "name": "Citronix ct2200Pro Advanced TIJ Printer",
        "shortDescription": "Advanced 7-inch touchscreen TIJ printer supporting 1–2 stitched printheads for up to 2-inch print height at 600 dpi and 180 m/min.",
        "fullDescription": "The Citronix ct2200 Pro elevates industrial TIJ printing with its 7-inch wide-angle capacitive touchscreen, delivering an intuitive WYSIWYG interface for creating complex messages including logos, 1D/2D barcodes, DataMatrix, and QR codes. Supporting one to two printheads simultaneously, it can stitch printheads to achieve print heights up to 2 inches without mechanical adjustments. Built on HP TIJ 2.5 technology, it achieves up to 600 dpi resolution and print speeds up to 180 m/min at 300×100 dpi, making it suitable for fast-moving production lines. The stainless steel rigid-build printheads incorporate embedded chips for automatic ink cartridge detection, parameter configuration, and ink-level monitoring. Its maintenance-free design with quick-swap cartridges ensures maximum production uptime.",
        "image": "/images/products/citronix-ct2200pro-model.webp",
        "galleryImages": [
          "/images/products/citronix-ct2200pro.webp"
        ],
        "applications": [
          "Date & Batch Coding",
          "Barcode & QR Code Printing",
          "Serialization & Traceability",
          "Carton & Case Coding",
          "Pouch & Flexible Packaging"
        ],
        "keyBenefits": [
          "7-inch capacitive touchscreen with WYSIWYG message editor",
          "1–2 printhead support with stitching for up to 2-inch print height",
          "Up to 600 dpi resolution for high-quality graphics and regulatory codes",
          "High-speed printing up to 180 m/min on fast production lines",
          "Zero maintenance with quick-change cartridges and auto detection",
          "Supports logos, DataMatrix, QR codes, and 1D/2D barcodes"
        ],
        "specifications": [
          {
            "label": "Technology",
            "value": "HP Thermal Inkjet 2.5"
          },
          {
            "label": "Display",
            "value": "7-inch capacitive touchscreen"
          },
          {
            "label": "Printheads Supported",
            "value": "1 to 2 (stitchable)"
          },
          {
            "label": "Max Print Height",
            "value": "Up to 2 inches (via stitched printheads)"
          },
          {
            "label": "Max Resolution",
            "value": "Up to 600 × 600 dpi"
          },
          {
            "label": "Max Print Speed",
            "value": "Up to 180 m/min"
          },
          {
            "label": "Throw Distance",
            "value": "Up to 12 mm"
          },
          {
            "label": "Connectivity",
            "value": "USB, Ethernet, Remote Browser-Based Access"
          },
          {
            "label": "Ink Types",
            "value": "Water-based & Solvent-based (Black & Colour)"
          }
        ]
      },
      {
        "id": "citronix-ct2400pro",
        "name": "Citronix ct2400Pro Flagship TIJ Printer",
        "shortDescription": "Flagship 10-inch touchscreen TIJ printer supporting 1–4 stitched printheads for up to 4-inch print height — the most capable model in the ct2000 Series.",
        "fullDescription": "The Citronix ct2400 Pro is the most capable model in the ct2000 Series, engineered for production environments that demand maximum print height, quality, and throughput. Its 10-inch capacitive touchscreen provides an expansive WYSIWYG interface for creating complex multi-line messages, high-resolution graphics, large 1D/2D barcodes, DataMatrix codes, and QR codes. By supporting up to four stitched printheads, the ct2400 Pro can print messages up to 4 inches tall in a single pass, ideal for large-format packaging, corrugated boxes, and secondary packaging lines. Built on HP TIJ 2.5 technology, it achieves up to 600 dpi resolution at speeds up to 180 m/min. External connectors for USB, photocell, encoder, and alarm beacon enable seamless integration with existing production-line control systems.",
        "image": "/images/products/citronix-ct2400pro.webp",
        "galleryImages": [
          "/images/products/citronix-ct2200pro.webp"
        ],
        "applications": [
          "Date & Batch Coding",
          "Barcode & QR Code Printing",
          "Serialization & Traceability",
          "Carton & Case Coding"
        ],
        "keyBenefits": [
          "10-inch capacitive touchscreen for large, premium WYSIWYG message creation",
          "1–4 printhead support with scalable stitching for up to 4-inch print height",
          "Up to 600 dpi high-resolution print for fine text, logos, and regulatory barcodes",
          "High-speed throughput up to 180 m/min for the fastest production lines",
          "Zero maintenance design with quick-change cartridges and auto detection",
          "Full I/O integration: USB, photocell, encoder, and alarm beacon connectors"
        ],
        "specifications": [
          {
            "label": "Technology",
            "value": "HP Thermal Inkjet 2.5"
          },
          {
            "label": "Display",
            "value": "10-inch capacitive touchscreen"
          },
          {
            "label": "Printheads Supported",
            "value": "1 to 4 (stitchable)"
          },
          {
            "label": "Max Print Height",
            "value": "Up to 4 inches (via 4 stitched printheads)"
          },
          {
            "label": "Max Resolution",
            "value": "Up to 600 × 600 dpi"
          },
          {
            "label": "Max Print Speed",
            "value": "Up to 180 m/min"
          },
          {
            "label": "Throw Distance",
            "value": "Up to 12 mm"
          },
          {
            "label": "Connectivity",
            "value": "USB, Photocell, Encoder, Alarm Beacon, Ethernet"
          },
          {
            "label": "Ink Types",
            "value": "Water-based & Solvent-based (Black & Colour)"
          }
        ]
      }
    ],
    "featured": true
  },
  {
    "id": "anser-u2-series",
    "slug": "anser-u2-series",
    "name": "Anser U2 Series TIJ Printers",
    "brand": "Anser",
    "category": "coding-marking",
    "categoryLabel": "Thermal Inkjet (TIJ)",
    "shortDescription": "Versatile and ultra-compact thermal inkjet coders including solvent-ink, mobile, and bulk-ink variants.",
    "fullDescription": "The Anser U2 Series represents the ultimate in compact, maintenance-free coding. The family includes the U2 Smartone for porous surfaces, the U2 Pros for non-porous plastics and foils, the U2 Mobile for handheld portable coding, and the U2 Diesel for high-volume bulk ink operations.",
    "image": "/images/products/anser-u2-smartone.webp",
    "galleryImages": [
      "/images/products/anser-u2-smartone.webp",
      "/images/products/anser-u2-pros.webp",
      "/images/products/anser-u2-mobile.webp",
      "/images/products/anser-u2-diesel.webp"
    ],
    "applications": [
      "Date & Batch Coding",
      "MRP Printing",
      "Carton & Case Coding",
      "Pouch & Flexible Packaging",
      "Bottle & Glass Marking",
      "Barcode & QR Code Printing",
      "Pipe & Cable Marking",
      "Component & Part Marking"
    ],
    "industriesServed": [
      "FOOD",
      "BEVERAGES",
      "AUTOMOTIVE & LUBRICANTS",
      "COSMETICS & TOILETRIES",
      "PHARMACEUTICALS",
      "DAIRY",
      "CABLE & PIPES",
      "AGROCHEMICALS"
    ],
    "keyBenefits": [
      "Ultra-compact footprint, easy 5-minute installation",
      "Maintenance-free design with quick-swap ink cartridge",
      "Remote control keyboard included"
    ],
    "specifications": [
      {
        "label": "Print Height",
        "value": "Up to 12.7 mm (0.5 inch)"
      },
      {
        "label": "Display",
        "value": "2.8 inch Color LCD with LED Backlight"
      },
      {
        "label": "Weight",
        "value": "0.49 kg (1.08 lbs)"
      },
      {
        "label": "Substrates",
        "value": "Corrugated Cartons, Paper, Porous Materials"
      }
    ],
    "faqs": [
      {
            "question": "What is the Anser U2 Series TIJ Printers primarily used for?",
            "answer": "The Anser U2 Series TIJ Printers is primarily used for date & batch coding, mrp printing, carton & case coding and other industrial applications in the Thermal Inkjet (TIJ) category."
      },
      {
            "question": "Which industries are suitable for this product?",
            "answer": "This product is highly suitable for industries such as Food, Beverages, Automotive & lubricants, Cosmetics & toiletries, Pharmaceuticals, Dairy, Cable & pipes, Agrochemicals."
      },
      {
            "question": "What is the print height of the Anser U2 Series TIJ Printers?",
            "answer": "The print height is specified as Up to 12.7 mm (0.5 inch)."
      },
      {
            "question": "What are the main benefits of choosing this model?",
            "answer": "Key benefits include: ultra-compact footprint, easy 5-minute installation, as well as maintenance-free design with quick-swap ink cartridge."
      },
      {
            "question": "Can it be used for pouch & flexible packaging?",
            "answer": "Yes, it is designed to support pouch & flexible packaging among its various applications."
      }
],
    "relatedProductIds": [],
    "variants": [
      {
        "id": "anser-u2-smartone",
        "name": "Anser U2 Smartone Compact TIJ Printer",
        "shortDescription": "Ultra-compact all-in-one thermal inkjet coder for clean, maintenance-free date and batch printing.",
        "fullDescription": "The Anser U2 Smartone is the world's most compact all-in-one coding solution. Designed for easy mounting on conveyors, carton sealers, and flow wrappers with zero maintenance requirements.",
        "image": "/images/products/anser-u2-smartone.webp",
        "galleryImages": [
      "/images/products/anser-u2-smartone.webp"
    ],
        "applications": [
          "Date & Batch Coding",
          "MRP Printing",
          "Carton & Case Coding"
        ],
        "keyBenefits": [
          "Ultra-compact footprint, easy 5-minute installation",
          "Maintenance-free design with quick-swap ink cartridge",
          "Remote control keyboard included"
        ],
        "specifications": [
          {
            "label": "Print Height",
            "value": "Up to 12.7 mm (0.5 inch)"
          },
          {
            "label": "Display",
            "value": "2.8 inch Color LCD with LED Backlight"
          },
          {
            "label": "Weight",
            "value": "0.49 kg (1.08 lbs)"
          },
          {
            "label": "Substrates",
            "value": "Corrugated Cartons, Paper, Porous Materials"
          }
        ]
      },
      {
        "id": "anser-u2-pros",
        "name": "Anser U2 Pros Solvent Ink TIJ Coder",
        "shortDescription": "Specialized thermal inkjet printer engineered for non-porous surfaces including plastics, foils, and metals.",
        "fullDescription": "The Anser U2 Pros utilizes exclusive solvent-based ink technology to print crisp, permanent batch codes, expiry dates, and barcodes directly onto glossy film, plastic bottles, metal cans, and blister packs.",
        "image": "/images/products/anser-u2-pros.webp",
        "galleryImages": [
      "/images/products/anser-u2-pros.webp"
    ],
        "applications": [
          "Date & Batch Coding",
          "Pouch & Flexible Packaging",
          "Bottle & Glass Marking",
          "Barcode & QR Code Printing"
        ],
        "keyBenefits": [
          "Prints on non-porous films, PET bottles, aluminium foils",
          "Fast drying times under 2 seconds",
          "High resolution barcode & QR code printing"
        ],
        "specifications": [
          {
            "label": "Print Height",
            "value": "Up to 12.7 mm (0.5 inch)"
          },
          {
            "label": "Substrates",
            "value": "Plastics, Foils, PET, Metal, Glass"
          },
          {
            "label": "Ink Capacity",
            "value": "42 cc Quick-Change Cartridge"
          }
        ]
      },
      {
        "id": "anser-u2-mobile",
        "name": "Anser U2 Mobile Handheld Portable Coder",
        "shortDescription": "Portable handheld thermal inkjet printer for flexible, mobile batch coding in warehouses and outer cases.",
        "fullDescription": "The Anser U2 Mobile is lightweight, cordless, and equipped with a long-lasting lithium battery, allowing operators to print batch numbers, dates, and barcodes anywhere on heavy cartons, wooden crates, and large pipes.",
        "image": "/images/products/anser-u2-mobile.webp",
        "galleryImages": [
      "/images/products/anser-u2-mobile.webp"
    ],
        "applications": [
          "Carton & Case Coding",
          "Pipe & Cable Marking",
          "Component & Part Marking"
        ],
        "keyBenefits": [
          "Ultra-portable ergonomic design with rechargeable battery",
          "Print anywhere on large bulky items or outer cases",
          "Includes protective carry case and full accessory kit"
        ],
        "specifications": [
          {
            "label": "Battery Life",
            "value": "Up to 7 hours continuous operation"
          },
          {
            "label": "Weight",
            "value": "1.0 kg including battery and cartridge"
          },
          {
            "label": "Substrates",
            "value": "Wood, Cardboard, PVC Pipes, Drums"
          }
        ]
      },
      {
        "id": "anser-u2-diesel",
        "name": "Anser U2 Diesel Heavy Duty Bulk Coder",
        "shortDescription": "High-capacity bulk ink thermal inkjet system designed for continuous high-volume carton coding.",
        "fullDescription": "The Anser U2 Diesel features a bulk ink delivery system that dramatically lowers cost-per-print for continuous high-volume outer case and carton coding operations.",
        "image": "/images/products/anser-u2-diesel.webp",
        "galleryImages": [
      "/images/products/anser-u2-diesel.webp"
    ],
        "applications": [
          "Carton & Case Coding",
          "MRP Printing",
          "Barcode & QR Code Printing"
        ],
        "keyBenefits": [
          "Bulk ink reservoir significantly reduces ink costs",
          "Designed for 24/7 continuous carton printing lines",
          "Crisp, clear text and large character capabilities"
        ],
        "specifications": [
          {
            "label": "Ink System",
            "value": "Bulk Reservoir System"
          },
          {
            "label": "Cost Savings",
            "value": "Up to 50% cost reduction per print"
          },
          {
            "label": "Substrates",
            "value": "Corrugated Boxes, Outer Packaging"
          }
        ]
      }
    ],
    "featured": true
  },
  {
    "id": "anser-industrial-tij",
    "slug": "anser-industrial-tij",
    "name": "Anser Industrial TIJ Printers",
    "brand": "Anser",
    "category": "coding-marking",
    "categoryLabel": "Thermal Inkjet (TIJ)",
    "shortDescription": "High-performance, single and dual-head thermal inkjet platforms for demanding production lines.",
    "fullDescription": "Anser's industrial TIJ lineup includes the ultra-compact Smartprint Head, the reliable A1 single-head controller, and the advanced X1 dual-head system. These systems are engineered for high-speed, high-resolution printing of barcodes, QR codes, and batch data on both porous and non-porous substrates.",
    "image": "/images/products/anser-x1.webp",
    "galleryImages": [
      "/images/products/anser-u2-smartprint-head.webp",
      "/images/products/anser-a1-single-head.webp",
      "/images/products/anser-x1.webp"
    ],
    "applications": [
      "Date & Batch Coding",
      "MRP Printing",
      "Carton & Case Coding",
      "Barcode & QR Code Printing",
      "Serialization & Traceability",
      "Pouch & Flexible Packaging"
    ],
    "industriesServed": [
      "FOOD",
      "BEVERAGES",
      "PHARMACEUTICALS",
      "COSMETICS & TOILETRIES",
      "DAIRY",
      "AGROCHEMICALS"
    ],
    "keyBenefits": [
      "All-in-one compact design: printhead, controller, and cartridge integrated",
      "Zero warm-up time, instant print-ready operation",
      "Maintenance-free with simple drop-in cartridge swap",
      "Easy retrofit onto existing packaging and conveyor machinery",
      "Low total cost of ownership with no daily cleaning required"
    ],
    "specifications": [
      {
        "label": "Technology",
        "value": "Thermal Inkjet (TIJ)"
      },
      {
        "label": "Print Height",
        "value": "Up to 12.7 mm (0.5 inch)"
      },
      {
        "label": "Substrates",
        "value": "Corrugated Cartons, Paper, Porous Materials"
      },
      {
        "label": "Maintenance",
        "value": "Maintenance-Free, Quick-Change Cartridge"
      }
    ],
    "faqs": [
      {
            "question": "What is the Anser Industrial TIJ Printers primarily used for?",
            "answer": "The Anser Industrial TIJ Printers is primarily used for date & batch coding, mrp printing, carton & case coding and other industrial applications in the Thermal Inkjet (TIJ) category."
      },
      {
            "question": "Which industries are suitable for this product?",
            "answer": "This product is highly suitable for industries such as Food, Beverages, Pharmaceuticals, Cosmetics & toiletries, Dairy, Agrochemicals."
      },
      {
            "question": "What is the technology of the Anser Industrial TIJ Printers?",
            "answer": "The technology is specified as Thermal Inkjet (TIJ)."
      },
      {
            "question": "What are the main benefits of choosing this model?",
            "answer": "Key benefits include: all-in-one compact design: printhead, controller, and cartridge integrated, as well as zero warm-up time, instant print-ready operation."
      },
      {
            "question": "Can it be used for barcode & qr code printing?",
            "answer": "Yes, it is designed to support barcode & qr code printing among its various applications."
      }
],
    "relatedProductIds": [],
    "variants": [
      {
        "id": "anser-smartprint-head",
        "name": "Anser U2 Smartprint Head TIJ Coder",
        "shortDescription": "Ultra-compact integrated thermal inkjet printhead for high-speed, maintenance-free date and batch coding on porous substrates.",
        "fullDescription": "The Anser Smartprint Head is a highly integrated, all-in-one thermal inkjet coder combining the printhead, controller, and ink cartridge into a single ultra-compact unit. Designed for easy retrofitting onto existing packaging machinery including conveyors, flow wrappers, and carton sealers, it delivers clean, maintenance-free date coding with zero warm-up time. The Smartprint Head is built for porous substrates such as corrugated cartons and paper packaging, making it the ideal solution for outer-case batch coding and MRP printing. Its ergonomic mounting design and simple cartridge swap system minimize operator intervention and eliminate daily cleaning requirements.",
        "image": "/images/products/anser-u2-smartprint-head.webp",
        "galleryImages": [
          "/images/products/anser-u2-smartone.webp"
        ],
        "applications": [
          "Date & Batch Coding",
          "MRP Printing",
          "Carton & Case Coding"
        ],
        "keyBenefits": [
          "All-in-one compact design: printhead, controller, and cartridge integrated",
          "Zero warm-up time, instant print-ready operation",
          "Maintenance-free with simple drop-in cartridge swap",
          "Easy retrofit onto existing packaging and conveyor machinery",
          "Low total cost of ownership with no daily cleaning required"
        ],
        "specifications": [
          {
            "label": "Technology",
            "value": "Thermal Inkjet (TIJ)"
          },
          {
            "label": "Print Height",
            "value": "Up to 12.7 mm (0.5 inch)"
          },
          {
            "label": "Substrates",
            "value": "Corrugated Cartons, Paper, Porous Materials"
          },
          {
            "label": "Maintenance",
            "value": "Maintenance-Free, Quick-Change Cartridge"
          }
        ]
      },
      {
        "id": "anser-a1",
        "name": "Anser A1 Single-Head TIJ Printer",
        "shortDescription": "Entry-level single-head thermal inkjet printer with a compact controller for reliable date, batch, and barcode coding on production lines.",
        "fullDescription": "The Anser A1 is a reliable, entry-level single-head thermal inkjet coding system designed for businesses requiring consistent, high-quality batch code printing without complex setup or maintenance. Housed in a rugged industrial controller with an intuitive interface, the A1 supports standard TIJ cartridges for printing on both porous and non-porous substrates. Ideal for small-to-medium production runs, the A1 delivers sharp text, barcodes, and date codes on cartons, pouches, bottles, and plastic containers. Its plug-and-play design ensures quick installation, while the zero-maintenance cartridge system keeps production uptime high and operating costs low.",
        "image": "/images/products/anser-a1-single-head.webp",
        "galleryImages": [
          "/images/products/anser-x1.webp"
        ],
        "applications": [
          "Date & Batch Coding",
          "MRP Printing",
          "Barcode & QR Code Printing",
          "Carton & Case Coding"
        ],
        "keyBenefits": [
          "Entry-level system with easy plug-and-play installation",
          "Single printhead design for reliable, compact footprint",
          "Zero maintenance — simple cartridge swap",
          "Prints on porous and non-porous substrates",
          "Cost-effective for small-to-medium volume production"
        ],
        "specifications": [
          {
            "label": "Technology",
            "value": "Thermal Inkjet (TIJ)"
          },
          {
            "label": "Printheads",
            "value": "1 Single Printhead"
          },
          {
            "label": "Print Height",
            "value": "Up to 12.7 mm (0.5 inch)"
          },
          {
            "label": "Substrates",
            "value": "Porous & Non-Porous Surfaces"
          },
          {
            "label": "Maintenance",
            "value": "Maintenance-Free"
          }
        ]
      },
      {
        "id": "anser-x1",
        "name": "Anser X1 High-Speed Industrial TIJ Printer",
        "shortDescription": "Next-generation dual-head thermal inkjet controller supporting high-speed non-porous and porous substrates.",
        "fullDescription": "The Anser X1 is an advanced thermal inkjet platform capable of driving two independent printheads simultaneously. Engineered for demanding packaging lines requiring high DPI barcode, QR code, and date coding on fast moving substrates.",
        "image": "/images/products/anser-x1.webp",
        "galleryImages": [
          "/images/products/anser-x1.webp"
        ],
        "applications": [
          "Date & Batch Coding",
          "Barcode & QR Code Printing",
          "Serialization & Traceability",
          "Carton & Case Coding",
          "Pouch & Flexible Packaging"
        ],
        "keyBenefits": [
          "Dual printhead control for double print height or dual lines",
          "Zero maintenance drop-in cartridge design",
          "High resolution up to 600 DPI",
          "NexJet fast-drying solvent inks for plastics & foils"
        ],
        "specifications": [
          {
            "label": "Print Technology",
            "value": "Thermal Inkjet (TIJ 2.5)"
          },
          {
            "label": "Max Resolution",
            "value": "600 x 600 DPI"
          },
          {
            "label": "Print Height",
            "value": "Up to 2 inches (50.8 mm) with dual heads"
          },
          {
            "label": "Display",
            "value": "7-inch Touchscreen Industrial Controller"
          },
          {
            "label": "Ink Types",
            "value": "Solvent & Water-based Quick Dry Cartridges"
          }
        ]
      }
    ],
    "featured": true
  },
  {
    "id": "laser-marking-systems",
    "slug": "laser-marking-systems",
    "name": "Laser Marking Systems",
    "category": "coding-marking",
    "categoryLabel": "Laser Marking Systems",
    "shortDescription": "Permanent, consumable-free coding systems including CO2, UV, and Fibre lasers for all substrate types.",
    "fullDescription": "Our laser marking family provides indelible, high-contrast coding without the need for ink or solvents. The CO2 laser is ideal for glass and PET, the UV laser offers cold-process marking for heat-sensitive plastics and films, and the Fibre laser delivers deep engraving on metals and hard plastics.",
    "image": "/images/products/laser-co2.webp",
    "galleryImages": [
      "/images/products/laser-co2.webp",
      "/images/products/laser-uv.webp",
      "/images/products/laser-fibre.webp"
    ],
    "applications": [
      "Date & Batch Coding",
      "Serialization & Traceability",
      "Bottle & Glass Marking",
      "Barcode & QR Code Printing",
      "Component & Part Marking"
    ],
    "industriesServed": [
      "BEVERAGES",
      "PHARMACEUTICALS",
      "LIQUOR",
      "FOOD",
      "COSMETICS & TOILETRIES",
      "AUTOMOTIVE & LUBRICANTS",
      "CABLE & PIPES"
    ],
    "keyBenefits": [
      "Zero consumable costs — no ink, solvent, or ribbons required",
      "Permanent, indelible coding that cannot be smudged or removed",
      "Ideal for glass, PET, paper, cardboard, and flexible films",
      "10.6 μm wavelength optimized for non-metallic substrates",
      "Fast startup — no warm-up time required",
      "Clean-room compatible with no airborne ink particles"
    ],
    "specifications": [
      {
        "label": "Laser Type",
        "value": "CO2 — 10.6 μm Wavelength"
      },
      {
        "label": "Laser Power",
        "value": "10W / 30W / 60W options"
      },
      {
        "label": "Substrates",
        "value": "Glass, PET Plastic, Paper, Cardboard, Flexible Film"
      },
      {
        "label": "Cooling",
        "value": "Air Cooled"
      },
      {
        "label": "Life Expectancy",
        "value": "40,000+ hours"
      },
      {
        "label": "Consumables",
        "value": "None"
      }
    ],
    "faqs": [
      {
            "question": "What is the Laser Marking Systems primarily used for?",
            "answer": "The Laser Marking Systems is primarily used for date & batch coding, serialization & traceability, bottle & glass marking and other industrial applications in the Laser Marking Systems category."
      },
      {
            "question": "Which industries are suitable for this product?",
            "answer": "This product is highly suitable for industries such as Beverages, Pharmaceuticals, Liquor, Food, Cosmetics & toiletries, Automotive & lubricants, Cable & pipes."
      },
      {
            "question": "What is the laser type of the Laser Marking Systems?",
            "answer": "The laser type is specified as CO2 — 10.6 μm Wavelength."
      },
      {
            "question": "What are the main benefits of choosing this model?",
            "answer": "Key benefits include: zero consumable costs — no ink, solvent, or ribbons required, as well as permanent, indelible coding that cannot be smudged or removed."
      },
      {
            "question": "Can it be used for barcode & qr code printing?",
            "answer": "Yes, it is designed to support barcode & qr code printing among its various applications."
      }
],
    "relatedProductIds": [],
    "variants": [
      {
        "id": "laser-marking-co2",
        "name": "CO2 Laser Marking System",
        "shortDescription": "CO2 laser marking system for permanent, high-contrast coding on glass, plastic, paper, and cardboard packaging without consumables.",
        "fullDescription": "CO2 laser marking systems provide permanent, indelible, high-contrast coding on non-metallic substrates including glass, PET plastic, HDPE, paper, cardboard, and flexible packaging films. Operating at a 10.6 μm wavelength, CO2 lasers are the preferred choice for food & beverage, pharmaceutical, and cosmetic packaging lines where chemical-free, smudge-proof coding is essential. The system delivers instant startup, requires zero consumables such as ink or solvent, and eliminates recurring ink costs. Ideal for coding on glass bottles, PET containers, paper sachets, and outer carton board, CO2 laser coders integrate seamlessly with high-speed production lines.",
        "image": "/images/products/laser-co2.webp",
        "galleryImages": [
          "/images/products/laser-marking-machine.webp"
        ],
        "applications": [
          "Date & Batch Coding",
          "Serialization & Traceability",
          "Bottle & Glass Marking",
          "Barcode & QR Code Printing"
        ],
        "keyBenefits": [
          "Zero consumable costs — no ink, solvent, or ribbons required",
          "Permanent, indelible coding that cannot be smudged or removed",
          "Ideal for glass, PET, paper, cardboard, and flexible films",
          "10.6 μm wavelength optimized for non-metallic substrates",
          "Fast startup — no warm-up time required",
          "Clean-room compatible with no airborne ink particles"
        ],
        "specifications": [
          {
            "label": "Laser Type",
            "value": "CO2 — 10.6 μm Wavelength"
          },
          {
            "label": "Laser Power",
            "value": "10W / 30W / 60W options"
          },
          {
            "label": "Substrates",
            "value": "Glass, PET Plastic, Paper, Cardboard, Flexible Film"
          },
          {
            "label": "Cooling",
            "value": "Air Cooled"
          },
          {
            "label": "Life Expectancy",
            "value": "40,000+ hours"
          },
          {
            "label": "Consumables",
            "value": "None"
          }
        ]
      },
      {
        "id": "laser-marking-uv",
        "name": "UV Laser Marking System",
        "shortDescription": "UV laser marking system for high-resolution, cold-process coding on heat-sensitive plastics, pharmaceutical blister packs, and clear packaging.",
        "fullDescription": "UV laser marking systems operate at a 355 nm wavelength, delivering cold-process laser marking that produces minimal heat, making them the ideal choice for heat-sensitive materials including BOPP films, PVC, ABS plastics, pharmaceutical blister packs, and clear glass. The cold-ablation process creates precise, high-contrast marks without burning, charring, or deforming delicate packaging materials. UV lasers achieve exceptionally fine detail with spot sizes down to 15 μm, enabling micro-text, complex 2D Data Matrix codes, and high-resolution logos. The result is clean, high-contrast permanent marks on transparent or translucent substrates where CO2 or fiber lasers cannot achieve the required quality.",
        "image": "/images/products/laser-uv.webp",
        "galleryImages": [
          "/images/products/laser-marking-machine.webp"
        ],
        "applications": [
          "Serialization & Traceability",
          "Barcode & QR Code Printing",
          "Bottle & Glass Marking",
          "Component & Part Marking"
        ],
        "keyBenefits": [
          "Cold-process UV laser — no heat damage to sensitive packaging",
          "355 nm wavelength for ultra-fine detail and micro-text",
          "High contrast on transparent, clear, and heat-sensitive substrates",
          "Precise 2D DataMatrix and QR code marking",
          "Zero consumables and permanent indelible marking",
          "Ideal for pharmaceutical blister packs and BOPP films"
        ],
        "specifications": [
          {
            "label": "Laser Type",
            "value": "UV — 355 nm Wavelength"
          },
          {
            "label": "Laser Power",
            "value": "3W / 5W / 10W options"
          },
          {
            "label": "Substrates",
            "value": "BOPP Film, PVC, ABS Plastic, Clear Glass, Blister Packs"
          },
          {
            "label": "Spot Size",
            "value": "Down to 15 μm"
          },
          {
            "label": "Cooling",
            "value": "Air Cooled"
          },
          {
            "label": "Life Expectancy",
            "value": "20,000+ hours"
          }
        ]
      },
      {
        "id": "laser-marking-fibre",
        "name": "Fibre Laser Marking System",
        "shortDescription": "High-power fibre laser marking system for permanent, deep engraving and marking on metals, aluminum cans, steel components, and hard plastics.",
        "fullDescription": "Fibre laser marking systems operate at a 1.06 μm wavelength, making them the superior choice for marking on metals, aluminum cans, anodized surfaces, steel components, engineered plastics, and PCBs. The high-energy beam delivers deep, permanent engraving marks, surface annealing, and high-contrast color changes on metallic surfaces without the need for any consumables. Fibre lasers are widely used in the automotive, electronics, and industrial manufacturing sectors for serial numbers, part identification, 2D DataMatrix codes, and brand logos on metal parts. With a laser life of 100,000+ hours and ultra-low maintenance, fibre lasers offer the lowest total cost of ownership for metal marking applications.",
        "image": "/images/products/laser-fibre.webp",
        "galleryImages": [
          "/images/products/laser-marking-machine.webp"
        ],
        "applications": [
          "Component & Part Marking",
          "Serialization & Traceability",
          "Barcode & QR Code Printing"
        ],
        "keyBenefits": [
          "1.06 μm wavelength optimized for metal, aluminum, and hard plastic marking",
          "Permanent deep engraving with no consumables required",
          "100,000+ hour laser source life for lowest total cost of ownership",
          "Annealing and color change marking on metals without surface damage",
          "High-speed marking for 2D DataMatrix and QR codes on metal parts",
          "Ideal for automotive, electronics, and industrial part marking"
        ],
        "specifications": [
          {
            "label": "Laser Type",
            "value": "Fibre — 1.06 μm Wavelength"
          },
          {
            "label": "Laser Power",
            "value": "20W / 30W / 50W / 100W options"
          },
          {
            "label": "Substrates",
            "value": "Metals, Aluminum, Anodized Surfaces, Steel, Hard Plastics"
          },
          {
            "label": "Cooling",
            "value": "Air Cooled"
          },
          {
            "label": "Life Expectancy",
            "value": "100,000+ hours"
          },
          {
            "label": "Consumables",
            "value": "None"
          }
        ]
      }
    ],
    "featured": true
  },
  {
    "id": "automatic-labelling-machines",
    "slug": "automatic-labelling-machines",
    "name": "Automatic Labelling Machines",
    "brand": "Worldpack",
    "category": "labelling",
    "categoryLabel": "Labelling Machines",
    "shortDescription": "A comprehensive range of high-speed automatic sticker labelling machines for all container profiles.",
    "fullDescription": "Our Worldpack automated labelling systems are extremely durable, efficient, and versatile. The family includes wraparound labellers for round bottles, front & back systems for oval containers, top & bottom labellers for flat packs, tamper-evident security labellers, high-speed non-stop systems, and integrated print & apply machines for variable logistics data.",
    "image": "/images/products/wraparound-labeller.webp",
    "galleryImages": [
      "/images/products/wraparound-labeller.webp",
      "/images/products/front-back-labelling-machine.webp",
      "/images/products/tamper-evident-labeller.webp",
      "/images/products/top-bottom-labeller.webp",
      "/images/products/hi-speed-labeller.webp",
      "/images/products/print-apply-labeller.webp"
    ],
    "applications": [
      "Bottle & Glass Marking",
      "Serialization & Traceability",
      "Date & Batch Coding",
      "Pouch & Flexible Packaging",
      "Barcode & QR Code Printing",
      "Carton & Case Coding"
    ],
    "industriesServed": [
      "FOOD",
      "BEVERAGES",
      "PHARMACEUTICALS",
      "DAIRY",
      "LIQUOR",
      "COSMETICS & TOILETRIES",
      "AUTOMOTIVE & LUBRICANTS",
      "AGROCHEMICALS"
    ],
    "keyBenefits": [
      "Full or partial wraparound label application on cylindrical containers",
      "Servo-motor driven for precise label placement and consistency",
      "Quick-change label roll system for fast product changeovers",
      "Stainless Steel 304 construction for wet and cleanroom environments",
      "Compatible with CIJ/TIJ/TTO printer integration for simultaneous coding",
      "Adjustable for different container diameters and label sizes"
    ],
    "specifications": [
      {
        "label": "Speed",
        "value": "Up to 200 containers per minute"
      },
      {
        "label": "Label Material",
        "value": "Paper / Film / PP / PE Self-Adhesive"
      },
      {
        "label": "Container Types",
        "value": "Round Bottles, Jars, Aerosol Cans, PET Containers"
      },
      {
        "label": "Label Roll O.D.",
        "value": "Up to 300 mm"
      },
      {
        "label": "MOC",
        "value": "SS 304 / SS 316 (as per customer requirement)"
      },
      {
        "label": "Power Supply",
        "value": "220VAC / 50Hz / Single Phase / 3.5KW"
      }
    ],
    "faqs": [
      {
            "question": "What is the Automatic Labelling Machines primarily used for?",
            "answer": "The Automatic Labelling Machines is primarily used for bottle & glass marking, serialization & traceability, date & batch coding and other industrial applications in the Labelling Machines category."
      },
      {
            "question": "Which industries are suitable for this product?",
            "answer": "This product is highly suitable for industries such as Food, Beverages, Pharmaceuticals, Dairy, Liquor, Cosmetics & toiletries, Automotive & lubricants, Agrochemicals."
      },
      {
            "question": "What is the speed of the Automatic Labelling Machines?",
            "answer": "The speed is specified as Up to 200 containers per minute."
      },
      {
            "question": "What are the main benefits of choosing this model?",
            "answer": "Key benefits include: full or partial wraparound label application on cylindrical containers, as well as servo-motor driven for precise label placement and consistency."
      },
      {
            "question": "Can it be used for pouch & flexible packaging?",
            "answer": "Yes, it is designed to support pouch & flexible packaging among its various applications."
      }
],
    "relatedProductIds": [],
    "variants": [
      {
        "id": "wraparound-labelling-machine",
        "name": "Wraparound Labelling Machine",
        "shortDescription": "Fully automatic wraparound labelling machine for applying full or partial circumferential labels on round bottles, jars, and cylindrical containers.",
        "fullDescription": "The Worldpack Wraparound Labelling Machine is designed to apply full or partial wraparound self-adhesive labels on cylindrical containers including glass bottles, PET bottles, aerosol cans, and jars at high production speeds. The machine uses servo-motor driven label dispensing combined with precision conveyor synchronization to ensure accurate, consistent label placement at every container. Its robust stainless steel 304 construction ensures durability in wet and cleanroom environments, while the quick-change label roll system minimizes downtime during product changeovers. The system can be integrated with TIJ/TTO/CIJ date coders for simultaneous coding and labelling in a single pass, making it a complete primary packaging solution.",
        "image": "/images/products/wraparound-labeller.webp",
        "galleryImages": [
          "/images/products/labelling-machine.webp"
        ],
        "applications": [
          "Bottle & Glass Marking",
          "Serialization & Traceability",
          "Date & Batch Coding"
        ],
        "keyBenefits": [
          "Full or partial wraparound label application on cylindrical containers",
          "Servo-motor driven for precise label placement and consistency",
          "Quick-change label roll system for fast product changeovers",
          "Stainless Steel 304 construction for wet and cleanroom environments",
          "Compatible with CIJ/TIJ/TTO printer integration for simultaneous coding",
          "Adjustable for different container diameters and label sizes"
        ],
        "specifications": [
          {
            "label": "Speed",
            "value": "Up to 200 containers per minute"
          },
          {
            "label": "Label Material",
            "value": "Paper / Film / PP / PE Self-Adhesive"
          },
          {
            "label": "Container Types",
            "value": "Round Bottles, Jars, Aerosol Cans, PET Containers"
          },
          {
            "label": "Label Roll O.D.",
            "value": "Up to 300 mm"
          },
          {
            "label": "MOC",
            "value": "SS 304 / SS 316 (as per customer requirement)"
          },
          {
            "label": "Power Supply",
            "value": "220VAC / 50Hz / Single Phase / 3.5KW"
          }
        ]
      },
      {
        "id": "automated-front-back-labelling",
        "name": "Automated Front and Back Labelling System",
        "shortDescription": "High-precision continuous automatic front and back sticker labelling machine for bottles, containers, and vials at up to 300 BPM.",
        "fullDescription": "The Worldpack Automated Front and Back Labelling System is a fully automatic production-line labelling machine engineered to apply precise front, back, or wrap-around self-adhesive labels on flat, oval, or cylindrical containers at high speeds. It features dual-sided label application in a single pass, perfect label alignment on both sides, and high-speed production capability — capable of labelling up to 300 bottles per minute. Built with SS 304/316 construction, it handles label materials including paper, film, PP, and PE, and supports container types across food, beverage, pharmaceutical, and cosmetic industries. Printer integration (TIJ/TTO/CIJ) is supported for simultaneous coding and labelling.",
        "image": "/images/products/front-back-labelling-machine.webp",
        "galleryImages": [
          "/images/products/front-back-labelling-machine.webp"
        ],
        "applications": [
          "Bottle & Glass Marking",
          "Pouch & Flexible Packaging",
          "Serialization & Traceability"
        ],
        "keyBenefits": [
          "Dual-sided front & back label application in a single pass",
          "High-speed production capability up to 300 bottles per minute",
          "Perfect label alignment on both sides with servo/stepper motor drive",
          "No change parts required — quick and easy installation",
          "Reduces manual labor costs with full automation",
          "TIJ/TTO/CIJ printer integration for simultaneous coding"
        ],
        "specifications": [
          {
            "label": "Labelling Speed",
            "value": "60 to 300 BPM"
          },
          {
            "label": "Label Material",
            "value": "Paper / Film / PP / PE Self-Adhesive"
          },
          {
            "label": "Label Dimensions",
            "value": "Min: 25×25mm — Max: 250×250mm"
          },
          {
            "label": "Roll O.D.",
            "value": "Up to 300 mm"
          },
          {
            "label": "MOC",
            "value": "SS 304 / SS 316 (as per requirement)"
          },
          {
            "label": "Power Supply",
            "value": "220VAC / 50Hz / Single Phase / 3.5KW"
          },
          {
            "label": "Machine Dimensions",
            "value": "2500mm × 2000mm × 1800mm (L×W×H)"
          },
          {
            "label": "Weight",
            "value": "350 KG"
          }
        ]
      },
      {
        "id": "tamper-evident-labelling",
        "name": "Tamper Evident Labelling Machine",
        "shortDescription": "High-performance automatic tamper evident labelling machine for precise sealing and security label application on pharmaceutical and FMCG containers.",
        "fullDescription": "The Worldpack Tamper Evident Labelling Machine is a high-performance automatic machine engineered to apply tamper evident security labels with precision on pharmaceutical bottles, FMCG containers, and food packaging. The system ensures every container receives a perfectly applied tamper seal that remains permanently bonded, providing product integrity assurance and consumer safety. Built with stainless steel construction and servo-motor label dispensing, it operates at high production speeds with consistent label placement accuracy. The machine handles a wide range of tamper evident label materials and is designed for quick product changeovers, minimizing downtime on busy production lines. Integration with online vision systems is supported for 100% quality verification.",
        "image": "/images/products/tamper-evident-labeller.webp",
        "galleryImages": [
          "/images/products/labelling-machine.webp"
        ],
        "applications": [
          "Serialization & Traceability",
          "Bottle & Glass Marking",
          "Date & Batch Coding"
        ],
        "keyBenefits": [
          "Precision tamper evident seal application for product integrity",
          "High-performance automatic operation at production line speeds",
          "Servo-motor driven for consistent, accurate label placement",
          "Compatible with wide range of tamper evident label materials",
          "Quick product changeover with minimal downtime",
          "Supports online vision system integration for 100% quality check"
        ],
        "specifications": [
          {
            "label": "Application Type",
            "value": "Tamper Evident / Security Labels"
          },
          {
            "label": "Speed",
            "value": "Up to 150 containers per minute"
          },
          {
            "label": "Label Material",
            "value": "Tamper Evident Film, Holographic, Paper"
          },
          {
            "label": "MOC",
            "value": "SS 304 / SS 316"
          },
          {
            "label": "Power Supply",
            "value": "220VAC / 50Hz / Single Phase"
          }
        ]
      },
      {
        "id": "top-bottom-labelling",
        "name": "Top and Bottom Labelling Machine",
        "shortDescription": "Automatic top and bottom labelling machine for simultaneous top and base label application on flat packs, trays, and cartons.",
        "fullDescription": "The Worldpack Top and Bottom Labelling Machine is designed to apply self-adhesive labels simultaneously on both the top and bottom surfaces of flat packs, trays, boxes, and cartons in a single pass. Ideal for FMCG, food, and pharmaceutical flat-pack products where top-face branding or regulatory labels and bottom barcodes need to be applied together, the machine eliminates two separate labelling steps, dramatically improving line efficiency. The machine handles 40 to 60 containers per minute and supports label sizes from 25×25mm up to 250×250mm. Its conveyor-synchronized label dispensing with stepper/servo PLC control ensures precise label placement accuracy with zero offset.",
        "image": "/images/products/top-bottom-labeller.webp",
        "galleryImages": [
          "/images/products/labelling-machine.webp"
        ],
        "applications": [
          "Date & Batch Coding",
          "Barcode & QR Code Printing",
          "Serialization & Traceability"
        ],
        "keyBenefits": [
          "Simultaneous top and bottom label application in a single pass",
          "Eliminates two separate labelling stations — improves line efficiency",
          "Stepper/Servo PLC control for precise label placement accuracy",
          "Handles flat packs, trays, cartons, and box containers",
          "Quick product changeover for multiple SKU flexibility",
          "Supports label sizes from 25×25mm up to 250×250mm"
        ],
        "specifications": [
          {
            "label": "Speed",
            "value": "40 to 60 containers per minute"
          },
          {
            "label": "Label Material",
            "value": "Paper / Film / PP / PE Self-Adhesive"
          },
          {
            "label": "Label Dimensions",
            "value": "Min: 25×25mm — Max: 250×250mm"
          },
          {
            "label": "Application",
            "value": "Top & Bottom Simultaneous"
          },
          {
            "label": "Control System",
            "value": "Stepper PLC or Servo PLC with Touchscreen"
          },
          {
            "label": "MOC",
            "value": "SS 304"
          },
          {
            "label": "Power Supply",
            "value": "220VAC / 50Hz / Single Phase"
          }
        ]
      },
      {
        "id": "hi-speed-non-stop-labelling",
        "name": "Hi-Speed Non-Stop Labelling Machine",
        "shortDescription": "High-speed non-stop automatic labelling machine with dual-spindle label roll changeover for uninterrupted 24/7 production.",
        "fullDescription": "The Worldpack Hi-Speed Non-Stop Labelling Machine is engineered for high-volume production environments that cannot afford labelling downtime during label roll changeovers. Featuring a dual-spindle automatic roll splicing system, the machine automatically transfers from an expiring label roll to a fresh roll without stopping the production line, enabling truly non-stop 24/7 labelling operations. Operating at industry-leading speeds, it delivers precise, consistent label application across round, flat, and oval containers. The advanced servo-motor drive system and PLC touchscreen control ensure perfect label placement at high line speeds, while the intuitive operator interface simplifies message and recipe management.",
        "image": "/images/products/hi-speed-labeller.webp",
        "galleryImages": [
          "/images/products/labelling-machine.webp"
        ],
        "applications": [
          "Date & Batch Coding",
          "Bottle & Glass Marking",
          "Serialization & Traceability",
          "Barcode & QR Code Printing"
        ],
        "keyBenefits": [
          "Dual-spindle automatic roll splicing for truly non-stop 24/7 operation",
          "No production downtime during label roll changeovers",
          "Industry-leading high-speed label application",
          "Advanced servo-motor drive with PLC touchscreen control",
          "Handles round, flat, and oval container profiles",
          "Intuitive recipe management for quick product changeovers"
        ],
        "specifications": [
          {
            "label": "Speed",
            "value": "Up to 400 containers per minute"
          },
          {
            "label": "Roll Change",
            "value": "Automatic Dual-Spindle Non-Stop Splicing"
          },
          {
            "label": "Container Types",
            "value": "Round, Flat, Oval Containers"
          },
          {
            "label": "Label Material",
            "value": "Paper / Film / PP / PE Self-Adhesive"
          },
          {
            "label": "Control System",
            "value": "Servo PLC with Touchscreen"
          },
          {
            "label": "MOC",
            "value": "SS 304 / SS 316"
          }
        ]
      },
      {
        "id": "print-and-apply-machine",
        "name": "Print and Apply Labelling Machine",
        "shortDescription": "Integrated print and apply labelling system combining on-demand variable data printing with automatic label application for real-time logistics and traceability labels.",
        "fullDescription": "The Worldpack Print and Apply Machine is an integrated system that combines an on-demand label printer (thermal transfer or direct thermal) with a precision label applicator to produce and apply variable data labels in real time. Each label is printed on-demand with unique variable data including barcodes, QR codes, product descriptions, batch numbers, and shipping addresses, then immediately applied to the product, carton, or pallet. This system is ideal for logistics, warehousing, and outer carton labelling where GS1 compliance, serialization, and unique variable-data traceability labels are required. The applicator supports multiple application modes including tamp, blow, swing-arm, and roller application, suitable for flat, curved, or corner-wrap application orientations.",
        "image": "/images/products/print-apply-labeller.webp",
        "galleryImages": [
          "/images/products/labelling-machine.webp"
        ],
        "applications": [
          "Barcode & QR Code Printing",
          "Serialization & Traceability",
          "Carton & Case Coding"
        ],
        "keyBenefits": [
          "On-demand variable data label printing and immediate application",
          "Prints unique barcodes, QR codes, and batch data per label",
          "Ideal for GS1 compliance, serialization, and traceability",
          "Multiple application modes: tamp, blow, swing-arm, roller",
          "Integrates with ERP/WMS systems for real-time label data",
          "Suitable for flat, curved, and corner-wrap label orientations"
        ],
        "specifications": [
          {
            "label": "Print Technology",
            "value": "Thermal Transfer (TTO) / Direct Thermal"
          },
          {
            "label": "Label Width",
            "value": "Up to 110 mm"
          },
          {
            "label": "Application Modes",
            "value": "Tamp, Blow, Swing-Arm, Roller"
          },
          {
            "label": "Print Resolution",
            "value": "203 dpi / 300 dpi"
          },
          {
            "label": "Data Integration",
            "value": "ERP / WMS / Database Connectivity"
          },
          {
            "label": "MOC",
            "value": "SS 304 / Powder-Coated Aluminium"
          }
        ]
      }
    ],
    "featured": true
  },
  {
    "id": "carton-taping-machines",
    "slug": "carton-taping-machines",
    "name": "Carton Taping Machines",
    "category": "packaging-sealing",
    "categoryLabel": "Carton Taping Machines",
    "shortDescription": "Semi-automatic and fully automatic carton sealing machines for reliable, secure outer case taping.",
    "fullDescription": "Our carton taping family offers solutions for every packaging volume. Choose from top & bottom drive for standard cartons, side drive for tall/unstable boxes, fully automatic systems for unmanned operation, edge taping for structural reinforcement, and mini tapers for small-format boxes.",
    "image": "/images/products/carton-taper-top-bottom.webp",
    "galleryImages": [
      "/images/products/carton-taper-top-bottom.webp",
      "/images/products/carton-taper-side-drive.webp",
      "/images/products/carton-taper-automatic.webp",
      "/images/products/carton-taper-edge.webp",
      "/images/products/carton-taper-mini.webp"
    ],
    "applications": [
      "Carton & Case Coding"
    ],
    "industriesServed": [
      "FOOD",
      "BEVERAGES",
      "PHARMACEUTICALS",
      "AUTOMOTIVE & LUBRICANTS",
      "AGROCHEMICALS",
      "COSMETICS & TOILETRIES"
    ],
    "keyBenefits": [
      "Top and bottom simultaneous tape application in a single pass",
      "Synchronized drive belts for reliable carton advancement",
      "Tool-free adjustable width and height for multiple carton sizes",
      "Heavy-duty construction for demanding production environments",
      "Compatible with standard BOPP and PP adhesive tapes"
    ],
    "specifications": [
      {
        "label": "Type",
        "value": "Semi-Automatic Top & Bottom Drive"
      },
      {
        "label": "Carton Size Range",
        "value": "Adjustable for standard carton sizes"
      },
      {
        "label": "Tape Width",
        "value": "48 mm / 60 mm"
      },
      {
        "label": "Drive",
        "value": "Top & Bottom Belt Drive"
      },
      {
        "label": "Power",
        "value": "220V / 50Hz"
      },
      {
        "label": "Frame",
        "value": "Heavy-Duty Steel Frame"
      }
    ],
    "faqs": [
      {
            "question": "What is the Carton Taping Machines primarily used for?",
            "answer": "The Carton Taping Machines is primarily used for carton & case coding and other industrial applications in the Carton Taping Machines category."
      },
      {
            "question": "Which industries are suitable for this product?",
            "answer": "This product is highly suitable for industries such as Food, Beverages, Pharmaceuticals, Automotive & lubricants, Agrochemicals, Cosmetics & toiletries."
      },
      {
            "question": "What is the type of the Carton Taping Machines?",
            "answer": "The type is specified as Semi-Automatic Top & Bottom Drive."
      },
      {
            "question": "What are the main benefits of choosing this model?",
            "answer": "Key benefits include: top and bottom simultaneous tape application in a single pass, as well as synchronized drive belts for reliable carton advancement."
      }
],
    "relatedProductIds": [],
    "variants": [
      {
        "id": "semi-auto-taping-top-bottom",
        "name": "Top & Bottom Drive Semi-Automatic Taping Machine",
        "shortDescription": "Heavy-duty top and bottom drive semi-automatic carton sealing machine for fast, reliable tape application on standard corrugated cartons.",
        "fullDescription": "The Top and Bottom Drive Semi-Automatic Taping Machine is designed for medium-to-high volume carton sealing operations where consistent, reliable tape application is essential. The machine uses synchronized top and bottom drive belts to grip and advance cartons through the taping head, applying adhesive tape to both the top and bottom flaps simultaneously in a single pass. Its adjustable height and width settings accommodate a wide range of carton sizes without tooling changes, while the heavy-duty stainless steel frame ensures long-term reliability in demanding production environments. Ideal for food, beverage, FMCG, and pharmaceutical outer case sealing operations.",
        "image": "/images/products/carton-taper-top-bottom.webp",
        "galleryImages": [
          "/images/products/labelling-machine.webp"
        ],
        "applications": [
          "Carton & Case Coding"
        ],
        "keyBenefits": [
          "Top and bottom simultaneous tape application in a single pass",
          "Synchronized drive belts for reliable carton advancement",
          "Tool-free adjustable width and height for multiple carton sizes",
          "Heavy-duty construction for demanding production environments",
          "Compatible with standard BOPP and PP adhesive tapes"
        ],
        "specifications": [
          {
            "label": "Type",
            "value": "Semi-Automatic Top & Bottom Drive"
          },
          {
            "label": "Carton Size Range",
            "value": "Adjustable for standard carton sizes"
          },
          {
            "label": "Tape Width",
            "value": "48 mm / 60 mm"
          },
          {
            "label": "Drive",
            "value": "Top & Bottom Belt Drive"
          },
          {
            "label": "Power",
            "value": "220V / 50Hz"
          },
          {
            "label": "Frame",
            "value": "Heavy-Duty Steel Frame"
          }
        ]
      },
      {
        "id": "semi-auto-taping-side-drive",
        "name": "Side Drive Semi-Automatic Taping Machine",
        "shortDescription": "Side drive semi-automatic carton taping machine for sealing tall or irregular cartons with lateral drive belt system.",
        "fullDescription": "The Side Drive Semi-Automatic Taping Machine uses lateral side-mounted drive belts to advance cartons through the sealing head, making it ideal for tall, narrow, or top-heavy cartons that are unsuitable for top/bottom drive systems. The side drive mechanism provides secure carton grip without applying vertical pressure on the carton's contents, protecting fragile or lightweight products during sealing. Its adjustable side guide rails and tape head height enable quick adaptation to different carton profiles. The machine is commonly used in FMCG, pharmaceutical, and electronics outer case sealing where carton integrity and content protection are priorities.",
        "image": "/images/products/carton-taper-side-drive.webp",
        "galleryImages": [
          "/images/products/labelling-machine.webp"
        ],
        "applications": [
          "Carton & Case Coding"
        ],
        "keyBenefits": [
          "Side drive system ideal for tall, narrow, or top-heavy cartons",
          "No vertical pressure on carton contents — ideal for fragile products",
          "Adjustable side rails and head height for multiple carton profiles",
          "Reliable consistent sealing with standard adhesive tapes",
          "Compact footprint suitable for space-constrained facilities"
        ],
        "specifications": [
          {
            "label": "Type",
            "value": "Semi-Automatic Side Drive"
          },
          {
            "label": "Drive System",
            "value": "Lateral Side Belt Drive"
          },
          {
            "label": "Tape Width",
            "value": "48 mm / 60 mm"
          },
          {
            "label": "Power",
            "value": "220V / 50Hz"
          },
          {
            "label": "Frame",
            "value": "Heavy-Duty Steel Frame"
          }
        ]
      },
      {
        "id": "auto-taping-machine",
        "name": "Automatic Carton Taping Machine",
        "shortDescription": "Fully automatic carton sealing machine with integrated conveyor system for high-speed, unmanned outer case tape sealing on production lines.",
        "fullDescription": "The Fully Automatic Carton Taping Machine is designed for high-speed, continuous unmanned carton sealing operations on production and packing lines. Featuring a random-height adjustment system, the machine automatically detects the carton height using sensors and adjusts the top tape head to the correct sealing position without operator intervention. Integrated with an inline conveyor system, it accepts folded cartons from an upstream erector or packer, applies tape to both top and bottom flaps simultaneously, and delivers sealed cartons to the downstream palletizer or conveyor. Operating at speeds up to 30 cartons per minute, it significantly reduces labor costs and sealing errors compared to semi-automatic alternatives.",
        "image": "/images/products/carton-taper-automatic.webp",
        "galleryImages": [
          "/images/products/labelling-machine.webp"
        ],
        "applications": [
          "Carton & Case Coding"
        ],
        "keyBenefits": [
          "Fully automatic unmanned operation — reduces labor costs",
          "Auto-sensing carton height adjustment without operator intervention",
          "Simultaneous top and bottom tape application at high speed",
          "Inline conveyor integration with upstream packers and erectors",
          "Up to 30 cartons per minute throughput",
          "Reduces sealing errors and tape waste"
        ],
        "specifications": [
          {
            "label": "Type",
            "value": "Fully Automatic"
          },
          {
            "label": "Speed",
            "value": "Up to 30 cartons per minute"
          },
          {
            "label": "Height Adjustment",
            "value": "Automatic Sensor-Based"
          },
          {
            "label": "Tape Width",
            "value": "48 mm / 60 mm"
          },
          {
            "label": "Power",
            "value": "220V / 50Hz / Single Phase"
          },
          {
            "label": "Conveyor",
            "value": "Integrated Inline Conveyor System"
          }
        ]
      },
      {
        "id": "edge-taping-machine",
        "name": "Edge Taping Machine",
        "shortDescription": "Specialized edge taping machine for applying reinforcement tape along carton edges and corners to enhance package strength and stability.",
        "fullDescription": "The Edge Taping Machine is a specialized carton sealing solution designed to apply adhesive reinforcement tape along the vertical edges and corners of corrugated cartons, significantly enhancing structural strength and stacking stability. Edge-taped cartons resist compression, moisture, and rough handling during logistics and warehousing operations. The machine applies tape to one or multiple edges simultaneously, with adjustable tape tension and placement guides for consistent coverage. It is widely used in heavy-duty export packaging, long-transit logistics, and high-stack warehousing where standard flap sealing alone is insufficient for carton integrity.",
        "image": "/images/products/carton-taper-edge.webp",
        "galleryImages": [
          "/images/products/labelling-machine.webp"
        ],
        "applications": [
          "Carton & Case Coding"
        ],
        "keyBenefits": [
          "Reinforces carton edges and corners for enhanced structural strength",
          "Improves stacking stability and resistance to compression",
          "Suitable for export and long-transit logistics packaging",
          "Applies tape to multiple edges simultaneously",
          "Adjustable tape tension and placement guides for consistency"
        ],
        "specifications": [
          {
            "label": "Type",
            "value": "Edge / Corner Tape Application"
          },
          {
            "label": "Tape Application",
            "value": "Single or Multiple Edges"
          },
          {
            "label": "Tape Width",
            "value": "48 mm / 60 mm"
          },
          {
            "label": "Power",
            "value": "220V / 50Hz"
          }
        ]
      },
      {
        "id": "mini-carton-taping",
        "name": "Mini Carton Taping Machine",
        "shortDescription": "Compact semi-automatic mini carton taping machine for small carton sealing in limited-space facilities and low-to-medium volume production.",
        "fullDescription": "The Mini Carton Taping Machine is a compact, lightweight semi-automatic taping solution designed for small carton sealing in facilities with limited floor space or for low-to-medium volume production runs. Despite its compact size, it delivers consistent, reliable tape sealing on small corrugated cartons, gift boxes, and courier packaging. The machine's easy-adjust width and height settings make it versatile for multiple small carton sizes, while its portable design allows it to be relocated easily between workstations. Ideal for e-commerce, pharmaceutical sample packaging, small food product packaging, and cosmetic carton sealing applications.",
        "image": "/images/products/carton-taper-mini.webp",
        "galleryImages": [
          "/images/products/labelling-machine.webp"
        ],
        "applications": [
          "Carton & Case Coding"
        ],
        "keyBenefits": [
          "Compact and lightweight design for limited-space facilities",
          "Versatile for multiple small carton sizes with easy adjustment",
          "Portable — can be relocated between workstations",
          "Ideal for e-commerce, pharma, and cosmetic small carton sealing",
          "Low maintenance cost and simple operation"
        ],
        "specifications": [
          {
            "label": "Type",
            "value": "Semi-Automatic Mini Carton Taper"
          },
          {
            "label": "Suitable For",
            "value": "Small Corrugated Cartons, Gift Boxes, Courier Boxes"
          },
          {
            "label": "Tape Width",
            "value": "48 mm"
          },
          {
            "label": "Power",
            "value": "220V / 50Hz"
          },
          {
            "label": "Design",
            "value": "Compact & Portable"
          }
        ]
      }
    ],
    "featured": false
  },
  {
    "id": "conveyor-systems",
    "slug": "conveyor-systems",
    "name": "Industrial Conveyor Systems",
    "category": "material-handling",
    "categoryLabel": "Conveyor Systems",
    "shortDescription": "Customizable material handling solutions including belt, roller, and specialized coding conveyors.",
    "fullDescription": "A complete range of product transport solutions. The family includes truck loading conveyors for logistics, feeding systems for regulated single-file infeed, modular belt and idle roller systems for general transport, flexible accordian rollers, and dedicated coding conveyors for vibration-free printer integration.",
    "image": "/images/products/truck-loading-conveyor.webp",
    "galleryImages": [
      "/images/products/truck-loading-conveyor.webp",
      "/images/products/feeding-system-conveyor.webp",
      "/images/products/modular-belt-conveyor.webp",
      "/images/products/flexible-roller-conveyor.webp",
      "/images/products/idle-roller-conveyor.webp",
      "/images/products/coding-conveyor.webp"
    ],
    "applications": [
      "Carton & Case Coding",
      "Date & Batch Coding",
      "Bottle & Glass Marking",
      "MRP Printing",
      "Barcode & QR Code Printing"
    ],
    "industriesServed": [
      "FOOD",
      "BEVERAGES",
      "PHARMACEUTICALS",
      "AGROCHEMICALS",
      "AUTOMOTIVE & LUBRICANTS",
      "DAIRY",
      "COSMETICS & TOILETRIES",
      "CABLE & PIPES"
    ],
    "keyBenefits": [
      "Extendable boom reaches deep into truck containers",
      "Eliminates manual in-truck carrying — reduces labor costs",
      "Dramatically reduces loading and unloading time",
      "Adjustable belt speed and inclination angle",
      "Available in fixed and portable configurations",
      "Emergency stop and overload protection for operator safety"
    ],
    "specifications": [
      {
        "label": "Type",
        "value": "Telescopic Extendable Belt Conveyor"
      },
      {
        "label": "Extension Length",
        "value": "Customizable per requirement"
      },
      {
        "label": "Belt Width",
        "value": "300 mm to 800 mm (customizable)"
      },
      {
        "label": "Drive",
        "value": "Motorized with Variable Speed Control"
      },
      {
        "label": "Power",
        "value": "220V / 440V (as per requirement)"
      }
    ],
    "faqs": [
      {
            "question": "What is the Industrial Conveyor Systems primarily used for?",
            "answer": "The Industrial Conveyor Systems is primarily used for carton & case coding, date & batch coding, bottle & glass marking and other industrial applications in the Conveyor Systems category."
      },
      {
            "question": "Which industries are suitable for this product?",
            "answer": "This product is highly suitable for industries such as Food, Beverages, Pharmaceuticals, Agrochemicals, Automotive & lubricants, Dairy, Cosmetics & toiletries, Cable & pipes."
      },
      {
            "question": "What is the type of the Industrial Conveyor Systems?",
            "answer": "The type is specified as Telescopic Extendable Belt Conveyor."
      },
      {
            "question": "What are the main benefits of choosing this model?",
            "answer": "Key benefits include: extendable boom reaches deep into truck containers, as well as eliminates manual in-truck carrying — reduces labor costs."
      },
      {
            "question": "Can it be used for mrp printing?",
            "answer": "Yes, it is designed to support mrp printing among its various applications."
      }
],
    "relatedProductIds": [],
    "variants": [
      {
        "id": "conveyor-truck-loading",
        "name": "Truck Loading Conveyor",
        "shortDescription": "Extendable truck loading conveyor for fast, ergonomic loading and unloading of cartons and packages directly into truck containers.",
        "fullDescription": "The Truck Loading Conveyor is a telescopic, extendable belt conveyor system designed to facilitate fast and ergonomic loading and unloading of cartons, bags, and packages directly into truck or shipping containers. The extendable boom can reach deep into the container, eliminating the need for manual in-truck product carrying and dramatically reducing loading time and labor costs. The system is customizable in belt width, extension length, and inclination angle. Motor-driven transport ensures continuous product flow at adjustable speeds, while safety features including emergency stops and overload protection ensure operator safety. Available in both fixed and portable configurations.",
        "image": "/images/products/truck-loading-conveyor.webp",
        "galleryImages": [
          "/images/products/high-speed-inkjet.webp"
        ],
        "applications": [
          "Carton & Case Coding"
        ],
        "keyBenefits": [
          "Extendable boom reaches deep into truck containers",
          "Eliminates manual in-truck carrying — reduces labor costs",
          "Dramatically reduces loading and unloading time",
          "Adjustable belt speed and inclination angle",
          "Available in fixed and portable configurations",
          "Emergency stop and overload protection for operator safety"
        ],
        "specifications": [
          {
            "label": "Type",
            "value": "Telescopic Extendable Belt Conveyor"
          },
          {
            "label": "Extension Length",
            "value": "Customizable per requirement"
          },
          {
            "label": "Belt Width",
            "value": "300 mm to 800 mm (customizable)"
          },
          {
            "label": "Drive",
            "value": "Motorized with Variable Speed Control"
          },
          {
            "label": "Power",
            "value": "220V / 440V (as per requirement)"
          }
        ]
      },
      {
        "id": "conveyor-feeding",
        "name": "Feeding System Conveyor",
        "shortDescription": "Precision product feeding conveyor for regulated, single-file delivery of bottles, containers, or cartons to downstream filling, capping, or labelling machines.",
        "fullDescription": "The Feeding System Conveyor is a purpose-built product infeed solution designed to deliver bottles, containers, pouches, or cartons in a regulated, single-file sequence to downstream process equipment including fillers, cappers, labellers, and coders. Using adjustable lane guides, timing screws, or starwheels, the system meters products at a controlled pace to match the throughput of downstream machines, preventing jamming, toppling, or double-feeding. The stainless steel construction and hygienic design make it suitable for food, beverage, pharmaceutical, and cosmetic applications. Variable-speed drives allow easy synchronization with upstream and downstream production equipment.",
        "image": "/images/products/feeding-system-conveyor.webp",
        "galleryImages": [
          "/images/products/high-speed-inkjet.webp"
        ],
        "applications": [
          "Date & Batch Coding",
          "Bottle & Glass Marking"
        ],
        "keyBenefits": [
          "Regulated single-file product infeed to downstream machines",
          "Adjustable lane guides and timing screws for all container types",
          "Variable-speed drive for synchronization with production line",
          "Hygienic stainless steel construction for food and pharma",
          "Prevents product jamming, toppling, and double-feeding"
        ],
        "specifications": [
          {
            "label": "Type",
            "value": "Product Feeding / Infeed Conveyor"
          },
          {
            "label": "Product Types",
            "value": "Bottles, Containers, Pouches, Cartons"
          },
          {
            "label": "Belt Material",
            "value": "SS 304 / Food-Grade Plastic"
          },
          {
            "label": "Drive",
            "value": "Variable-Speed Motorized"
          },
          {
            "label": "MOC",
            "value": "SS 304"
          }
        ]
      },
      {
        "id": "conveyor-modular-belt",
        "name": "Modular Belt Conveyor",
        "shortDescription": "Robust modular plastic belt conveyor for versatile product transport across packaging, filling, and sorting operations.",
        "fullDescription": "The Modular Belt Conveyor uses interlocking plastic or stainless steel modular belt segments to create a flexible, robust, and easily maintainable transport surface for a wide range of products including bottles, cartons, pouches, and heavy packages. Unlike traditional flat belts, modular belts can be configured in straight, curved, incline, or decline layouts, and individual belt segments can be replaced without removing the entire belt. The open-mesh variant allows water or debris to fall through, making it ideal for washdown environments in food, beverage, and pharmaceutical production. Belt widths, lengths, and materials are fully customizable to fit specific production requirements.",
        "image": "/images/products/modular-belt-conveyor.webp",
        "galleryImages": [
          "/images/products/high-speed-inkjet.webp"
        ],
        "applications": [
          "Date & Batch Coding",
          "Carton & Case Coding"
        ],
        "keyBenefits": [
          "Modular segment design — easy maintenance, no full belt replacement",
          "Configurable in straight, curved, incline, and decline layouts",
          "Open-mesh variants for washdown environments",
          "Heavy-duty construction handles wide range of product weights",
          "Fully customizable width, length, and belt material"
        ],
        "specifications": [
          {
            "label": "Type",
            "value": "Modular Belt Conveyor"
          },
          {
            "label": "Belt Material",
            "value": "Food-Grade Plastic / Stainless Steel Modular Belt"
          },
          {
            "label": "Layout",
            "value": "Straight / Curved / Incline / Decline"
          },
          {
            "label": "Belt Width",
            "value": "Customizable as per requirement"
          },
          {
            "label": "Drive",
            "value": "Motorized with VFD Speed Control"
          },
          {
            "label": "MOC Frame",
            "value": "SS 304 / Mild Steel Powder Coated"
          }
        ]
      },
      {
        "id": "conveyor-roller-flexible",
        "name": "Flexible Roller Conveyor (Motorised / Non-Motorised)",
        "shortDescription": "Flexible roller conveyor available in motorised and non-motorised versions for adaptable product flow in warehouses and production areas.",
        "fullDescription": "The Flexible Roller Conveyor is a manually extendable and configurable roller conveyor system available in both motorised and non-motorised versions. The flexible accordion design allows the conveyor to be stretched, curved, or compressed to adapt to changing workspace layouts, loading dock configurations, and temporary product flow needs. Non-motorised gravity versions rely on slight inclination for product flow, ideal for lightweight item handling in warehouses and dispatch areas. Motorised versions incorporate a drive system for powered product transport on flat surfaces. Both versions are constructed with galvanized steel or stainless steel rollers for durability and are suitable for carton, bag, and box handling in logistics, warehousing, and production environments.",
        "image": "/images/products/flexible-roller-conveyor.webp",
        "galleryImages": [
          "/images/products/high-speed-inkjet.webp"
        ],
        "applications": [
          "Carton & Case Coding"
        ],
        "keyBenefits": [
          "Flexible accordion design adapts to changing workspace layouts",
          "Available in motorised and non-motorised gravity versions",
          "Extendable, compressible, and curvable for versatile routing",
          "Ideal for warehouse, dispatch, and logistics carton handling",
          "Durable galvanized or stainless steel roller construction"
        ],
        "specifications": [
          {
            "label": "Type",
            "value": "Flexible Roller Conveyor"
          },
          {
            "label": "Versions",
            "value": "Motorised & Non-Motorised (Gravity)"
          },
          {
            "label": "Design",
            "value": "Flexible Accordion / Extendable"
          },
          {
            "label": "Roller Material",
            "value": "Galvanized Steel / Stainless Steel"
          },
          {
            "label": "Width",
            "value": "Customizable"
          },
          {
            "label": "Application",
            "value": "Cartons, Boxes, Bags — Warehouse & Dispatch"
          }
        ]
      },
      {
        "id": "conveyor-roller-idle",
        "name": "Idle Roller Conveyor",
        "shortDescription": "Gravity-driven idle roller conveyor for smooth, non-powered product accumulation and transport in assembly, packing, and warehouse areas.",
        "fullDescription": "The Idle Roller Conveyor is a gravity-driven, non-powered roller conveyor designed for smooth product accumulation, staging, and transport in assembly, packing, and warehouse environments where electricity-powered conveyors are not required. Products move across the free-rolling steel or PVC rollers under gravity — ideal for slight incline applications — or are pushed manually for flat surface use. The fixed-frame construction with evenly spaced idle rollers provides a stable, uniform transport surface for cartons, totes, trays, and boxes. Available in standard and heavy-duty roller variants for different load capacities, idle roller conveyors are a cost-effective solution for short-distance product transport in production and dispatch areas.",
        "image": "/images/products/idle-roller-conveyor.webp",
        "galleryImages": [
          "/images/products/high-speed-inkjet.webp"
        ],
        "applications": [
          "Carton & Case Coding"
        ],
        "keyBenefits": [
          "Gravity-driven — no electricity required, low operating cost",
          "Smooth product transport and accumulation on roller surface",
          "Available in standard and heavy-duty roller variants",
          "Durable steel or PVC roller construction",
          "Cost-effective short-distance product transport solution"
        ],
        "specifications": [
          {
            "label": "Type",
            "value": "Idle / Gravity Roller Conveyor"
          },
          {
            "label": "Drive",
            "value": "Non-Powered (Gravity / Manual Push)"
          },
          {
            "label": "Roller Material",
            "value": "Steel / PVC / Galvanized"
          },
          {
            "label": "Width",
            "value": "Customizable"
          },
          {
            "label": "Load Capacity",
            "value": "Standard & Heavy-Duty variants"
          }
        ]
      },
      {
        "id": "conveyor-coding",
        "name": "Coding Conveyor",
        "shortDescription": "Dedicated coding conveyor system designed for stable, consistent product transport past CIJ, TIJ, and laser coders for accurate date and batch marking.",
        "fullDescription": "The Coding Conveyor is a purpose-built product transport system designed specifically for integration with CIJ, TIJ, and laser marking systems. It provides stable, vibration-free product advancement past the coding printhead at a consistent, encoder-synchronized speed to ensure accurate, non-smear date and batch code printing. The conveyor features adjustable lane guides, photocell mounting brackets, encoder wheels, and printhead mounting frames pre-configured for seamless integration with Citronix, Anser, and laser coding equipment. Available in stainless steel for food and pharmaceutical applications, the coding conveyor eliminates the common causes of print smearing and misregistration caused by unstable product movement during coding.",
        "image": "/images/products/coding-conveyor.webp",
        "galleryImages": [
          "/images/products/high-speed-inkjet.webp"
        ],
        "applications": [
          "Date & Batch Coding",
          "MRP Printing",
          "Barcode & QR Code Printing"
        ],
        "keyBenefits": [
          "Purpose-built for CIJ, TIJ, and laser coder integration",
          "Stable, vibration-free product transport for accurate coding",
          "Encoder-synchronized speed control prevents smearing",
          "Pre-configured photocell and printhead mounting points",
          "Adjustable lane guides for different product sizes",
          "Stainless steel construction for food and pharmaceutical use"
        ],
        "specifications": [
          {
            "label": "Type",
            "value": "Coding / Print Station Conveyor"
          },
          {
            "label": "Compatible Coders",
            "value": "CIJ, TIJ, Laser (Citronix, Anser, others)"
          },
          {
            "label": "Speed Control",
            "value": "Variable VFD + Encoder Synchronization"
          },
          {
            "label": "Belt Material",
            "value": "PU / PVC / SS Mesh (food-grade)"
          },
          {
            "label": "Mounting Provision",
            "value": "Photocell, Encoder, Printhead Brackets"
          },
          {
            "label": "MOC",
            "value": "SS 304"
          }
        ]
      }
    ],
    "featured": false
  },
  {
    "id": "cap-sealing-machines",
    "slug": "cap-sealing-machines",
    "name": "Cap Sealing Machines",
    "category": "packaging-sealing",
    "categoryLabel": "Cap Sealers",
    "shortDescription": "Induction and conduction cap sealing systems for tamper-evident, hermetic foil seals.",
    "fullDescription": "Ensure product freshness and consumer safety with our cap sealing systems. We offer non-contact induction sealers for high-speed inline foil sealing of plastic and glass bottles, as well as conduction sealers for precise, direct-contact heat sealing.",
    "image": "/images/products/induction-cap-sealer.webp",
    "galleryImages": [
      "/images/products/induction-cap-sealer.webp",
      "/images/products/conduction-cap-sealer.webp"
    ],
    "applications": [
      "Bottle & Glass Marking",
      "Serialization & Traceability"
    ],
    "industriesServed": [
      "PHARMACEUTICALS",
      "FOOD",
      "BEVERAGES",
      "AGROCHEMICALS",
      "COSMETICS & TOILETRIES"
    ],
    "keyBenefits": [
      "Non-contact induction sealing — no heat or pressure on product",
      "Creates hermetic, airtight tamper-evident foil seal",
      "Preserves product freshness and extends shelf life",
      "Compatible with HDPE, PET, PP, and glass containers",
      "Inline automatic operation at high production speeds",
      "Available in standard and wide-mouth coil configurations"
    ],
    "specifications": [
      {
        "label": "Technology",
        "value": "Electromagnetic Induction Heating"
      },
      {
        "label": "Process",
        "value": "Non-Contact, No Heat on Product"
      },
      {
        "label": "Container Types",
        "value": "HDPE, PET, PP, Glass Bottles & Jars"
      },
      {
        "label": "Cap Diameter Range",
        "value": "20 mm to 120 mm (standard & wide coil)"
      },
      {
        "label": "Speed",
        "value": "Inline — matches production line speed"
      },
      {
        "label": "Power",
        "value": "Single Phase / Three Phase (as per model)"
      }
    ],
    "faqs": [
      {
            "question": "What is the Cap Sealing Machines primarily used for?",
            "answer": "The Cap Sealing Machines is primarily used for bottle & glass marking, serialization & traceability and other industrial applications in the Cap Sealers category."
      },
      {
            "question": "Which industries are suitable for this product?",
            "answer": "This product is highly suitable for industries such as Pharmaceuticals, Food, Beverages, Agrochemicals, Cosmetics & toiletries."
      },
      {
            "question": "What is the technology of the Cap Sealing Machines?",
            "answer": "The technology is specified as Electromagnetic Induction Heating."
      },
      {
            "question": "What are the main benefits of choosing this model?",
            "answer": "Key benefits include: non-contact induction sealing — no heat or pressure on product, as well as creates hermetic, airtight tamper-evident foil seal."
      }
],
    "relatedProductIds": [],
    "variants": [
      {
        "id": "induction-cap-sealer",
        "name": "Induction Cap Sealer",
        "shortDescription": "Automatic inline induction cap sealing system for tamper-evident, hermetic foil sealing of plastic and glass bottles without contact.",
        "fullDescription": "The Induction Cap Sealer uses electromagnetic induction heating to bond an aluminum foil seal to the inner lip of bottle caps in a completely non-contact process. As containers pass through the sealing coil on the conveyor, the foil laminate inside the cap is instantly bonded to the bottle neck, creating an airtight, tamper-evident hermetic seal without any heat, pressure, or mechanical contact with the product. This process preserves product freshness, extends shelf life, and provides consumer-visible tamper evidence. Compatible with HDPE, PET, PP, and glass containers, induction sealers are widely used across pharmaceutical, food, beverage, agrochemical, and cosmetic industries. Available in standard and wide-mouth coil variants to cover a broad range of container diameters.",
        "image": "/images/products/induction-cap-sealer.webp",
        "galleryImages": [
          "/images/products/labelling-machine.webp"
        ],
        "applications": [
          "Bottle & Glass Marking",
          "Serialization & Traceability"
        ],
        "keyBenefits": [
          "Non-contact induction sealing — no heat or pressure on product",
          "Creates hermetic, airtight tamper-evident foil seal",
          "Preserves product freshness and extends shelf life",
          "Compatible with HDPE, PET, PP, and glass containers",
          "Inline automatic operation at high production speeds",
          "Available in standard and wide-mouth coil configurations"
        ],
        "specifications": [
          {
            "label": "Technology",
            "value": "Electromagnetic Induction Heating"
          },
          {
            "label": "Process",
            "value": "Non-Contact, No Heat on Product"
          },
          {
            "label": "Container Types",
            "value": "HDPE, PET, PP, Glass Bottles & Jars"
          },
          {
            "label": "Cap Diameter Range",
            "value": "20 mm to 120 mm (standard & wide coil)"
          },
          {
            "label": "Speed",
            "value": "Inline — matches production line speed"
          },
          {
            "label": "Power",
            "value": "Single Phase / Three Phase (as per model)"
          }
        ]
      },
      {
        "id": "conduction-cap-sealer",
        "name": "Conduction Cap Sealing Machine",
        "shortDescription": "Conduction heat sealing machine for applying aluminum foil seals to bottles and jars using direct heated head contact for precise, controlled sealing.",
        "fullDescription": "The Conduction Cap Sealing Machine uses a heated sealing head that makes direct contact with the cap surface to apply aluminum foil inner seals through conduction heat transfer. Unlike induction sealers that use electromagnetic energy, conduction sealers are simpler in design and provide precise, controlled sealing temperatures suitable for heat-sensitive products and smaller production batches. The manually or semi-automatically operated sealing head is pressed onto the capped bottle for a preset dwell time, bonding the foil membrane to the container neck. Available in desktop and inline conveyor-integrated versions, conduction sealers are economical and widely used in pharmaceutical, food, and chemical industries for batch production and smaller-scale operations.",
        "image": "/images/products/conduction-cap-sealer.webp",
        "galleryImages": [
          "/images/products/labelling-machine.webp"
        ],
        "applications": [
          "Bottle & Glass Marking"
        ],
        "keyBenefits": [
          "Simple, reliable direct conduction heat sealing",
          "Precise temperature and dwell time control",
          "Cost-effective alternative to induction sealers",
          "Available in desktop and inline conveyor versions",
          "Suitable for heat-sensitive products and smaller batch sizes",
          "Easy to operate with minimal training required"
        ],
        "specifications": [
          {
            "label": "Technology",
            "value": "Conduction Heat Sealing"
          },
          {
            "label": "Process",
            "value": "Direct Contact Heated Sealing Head"
          },
          {
            "label": "Container Types",
            "value": "Plastic Bottles, Glass Jars, Wide-Mouth Containers"
          },
          {
            "label": "Temperature Control",
            "value": "Digital Temperature Controller"
          },
          {
            "label": "Versions",
            "value": "Desktop Manual / Semi-Automatic Inline"
          },
          {
            "label": "Power",
            "value": "220V / 50Hz"
          }
        ]
      }
    ],
    "featured": false
  },
  {
    "id": "strapping-machines",
    "slug": "strapping-machines",
    "name": "Strapping Machines",
    "category": "packaging-sealing",
    "categoryLabel": "Strapping Machines",
    "shortDescription": "Semi-automatic and fully automatic arch strapping machines for secure box and bundle packaging.",
    "fullDescription": "Our strapping machine family provides secure sealing for cartons and bundles using PP and PET strapping tapes. The semi-automatic model offers foot-pedal control for varying box sizes, while the fully automatic inline machine delivers high-speed, unmanned strapping for continuous production lines.",
    "image": "/images/products/semi-automatic-strapping-machine.webp",
    "galleryImages": [
      "/images/products/semi-automatic-strapping-machine.webp",
      "/images/products/automatic-strapping-machine.webp"
    ],
    "applications": [
      "Carton & Case Coding"
    ],
    "industriesServed": [
      "FOOD",
      "BEVERAGES",
      "PHARMACEUTICALS",
      "AUTOMOTIVE & LUBRICANTS",
      "AGROCHEMICALS"
    ],
    "keyBenefits": [
      "Semi-automatic foot pedal or sensor-activated strapping cycle",
      "Adjustable strap tension for different product types",
      "Compatible with PP and PET strapping tapes",
      "Heat-seal and friction-weld strap joining methods",
      "Quick strap width and tension adjustment for multiple carton sizes",
      "Reliable, low-maintenance operation"
    ],
    "specifications": [
      {
        "label": "Type",
        "value": "Semi-Automatic Arch Strapping Machine"
      },
      {
        "label": "Strap Material",
        "value": "PP (Polypropylene) / PET (Polyester)"
      },
      {
        "label": "Strap Width",
        "value": "9 mm / 12 mm / 15 mm"
      },
      {
        "label": "Sealing Method",
        "value": "Heat Seal / Friction Weld"
      },
      {
        "label": "Tension Control",
        "value": "Adjustable Digital Tension Control"
      },
      {
        "label": "Activation",
        "value": "Foot Pedal / Automatic Sensor"
      },
      {
        "label": "Power",
        "value": "220V / 50Hz / Single Phase"
      }
    ],
    "faqs": [
      {
            "question": "What is the Strapping Machines primarily used for?",
            "answer": "The Strapping Machines is primarily used for carton & case coding and other industrial applications in the Strapping Machines category."
      },
      {
            "question": "Which industries are suitable for this product?",
            "answer": "This product is highly suitable for industries such as Food, Beverages, Pharmaceuticals, Automotive & lubricants, Agrochemicals."
      },
      {
            "question": "What is the type of the Strapping Machines?",
            "answer": "The type is specified as Semi-Automatic Arch Strapping Machine."
      },
      {
            "question": "What are the main benefits of choosing this model?",
            "answer": "Key benefits include: semi-automatic foot pedal or sensor-activated strapping cycle, as well as adjustable strap tension for different product types."
      }
],
    "relatedProductIds": [],
    "variants": [
      {
        "id": "strapping-machine-semi-auto",
        "name": "Semi-Automatic Strapping Machine",
        "shortDescription": "Semi-automatic PP and PET strap sealing machine for carton, bundle, and box strapping with foot-pedal or sensor-activated operation.",
        "fullDescription": "The Semi-Automatic Strapping Machine is designed for medium-volume carton, box, bundle, and pallet strapping using polypropylene (PP) or polyester (PET) strapping tape. The operator positions the strap around the package and triggers the sealing cycle via foot pedal or automatic sensor, and the machine feeds, tensions, seals, and cuts the strap in a single automated cycle. The adjustable tension control ensures the strap is applied at the correct force for each product type, preventing packaging damage while maintaining secure bundle integrity. Compatible with both heat-seal and friction-weld strap joining methods, the machine is ideal for packaging lines in food, beverage, pharmaceutical, and industrial sectors requiring flexible strapping of varying carton sizes.",
        "image": "/images/products/semi-automatic-strapping-machine.webp",
        "galleryImages": [
          "/images/products/labelling-machine.webp"
        ],
        "applications": [
          "Carton & Case Coding"
        ],
        "keyBenefits": [
          "Semi-automatic foot pedal or sensor-activated strapping cycle",
          "Adjustable strap tension for different product types",
          "Compatible with PP and PET strapping tapes",
          "Heat-seal and friction-weld strap joining methods",
          "Quick strap width and tension adjustment for multiple carton sizes",
          "Reliable, low-maintenance operation"
        ],
        "specifications": [
          {
            "label": "Type",
            "value": "Semi-Automatic Arch Strapping Machine"
          },
          {
            "label": "Strap Material",
            "value": "PP (Polypropylene) / PET (Polyester)"
          },
          {
            "label": "Strap Width",
            "value": "9 mm / 12 mm / 15 mm"
          },
          {
            "label": "Sealing Method",
            "value": "Heat Seal / Friction Weld"
          },
          {
            "label": "Tension Control",
            "value": "Adjustable Digital Tension Control"
          },
          {
            "label": "Activation",
            "value": "Foot Pedal / Automatic Sensor"
          },
          {
            "label": "Power",
            "value": "220V / 50Hz / Single Phase"
          }
        ]
      },
      {
        "id": "strapping-machine-auto",
        "name": "Automatic Strapping Machine",
        "shortDescription": "Fully automatic inline strapping machine for high-speed, unmanned PP and PET strap application on cartons and bundles on production lines.",
        "fullDescription": "The Fully Automatic Strapping Machine is designed for high-speed, continuous, unmanned strapping of cartons, bundles, and boxes on inline production conveyor systems. Products pass through the strapping arch on a conveyor and are automatically sensed, strapped, tensioned, sealed, and released without operator intervention. The machine delivers throughput of up to 60 straps per minute for high-volume operations, and the fully programmable strap position, tension, and cycle count allows adaptation to different product configurations. Integration with upstream carton erectors, packers, and downstream palletizers creates a fully automated end-of-line packaging system. Compatible with PP and PET strapping tapes in a range of widths.",
        "image": "/images/products/automatic-strapping-machine.webp",
        "galleryImages": [
          "/images/products/labelling-machine.webp"
        ],
        "applications": [
          "Carton & Case Coding"
        ],
        "keyBenefits": [
          "Fully automatic unmanned inline strapping operation",
          "Up to 60 straps per minute for high-volume production",
          "Automatic product sensing, strapping, and release cycle",
          "Programmable strap position, tension, and cycle count",
          "Integrates with full end-of-line packaging systems",
          "Compatible with PP and PET tapes in multiple widths"
        ],
        "specifications": [
          {
            "label": "Type",
            "value": "Fully Automatic Inline Arch Strapping Machine"
          },
          {
            "label": "Strap Material",
            "value": "PP / PET"
          },
          {
            "label": "Strap Width",
            "value": "9 mm / 12 mm / 15 mm"
          },
          {
            "label": "Speed",
            "value": "Up to 60 straps per minute"
          },
          {
            "label": "Sealing Method",
            "value": "Heat Seal / Friction Weld"
          },
          {
            "label": "Integration",
            "value": "Inline Conveyor, Upstream / Downstream Systems"
          },
          {
            "label": "Power",
            "value": "220V / 50Hz / Single Phase"
          }
        ]
      }
    ],
    "featured": false
  },
  {
    "id": "pallet-wrapping-machine",
    "slug": "pallet-wrapping-machine",
    "name": "Pallet Wrapping Machine",
    "category": "packaging-sealing",
    "categoryLabel": "Packaging Machinery",
    "shortDescription": "Automatic pallet stretch wrapper for secure, consistent stretch film wrapping of palletized goods for safe warehousing and logistics transport.",
    "fullDescription": "The Pallet Wrapping Machine is an automatic rotary arm or turntable stretch wrapper designed to securely wrap palletized goods in stretch film for protection during warehousing, storage, and logistics transport. The machine automatically applies stretch film in overlapping spiral layers around the pallet at adjustable tension and wrap counts, creating a tight, stable, weather-resistant film cocoon. Both turntable (rotating pallet) and rotary arm (rotating arm, fixed pallet) configurations are available. Pre-stretch film dispensing extends film usage by up to 250%, dramatically reducing film costs. Programmable wrap parameters including wrap count, film tension, and top/bottom reinforcement allow adaptation to a wide range of pallet sizes and product requirements.",
    "image": "/images/products/pallet-wrapping-machine.webp",
    "applications": [
      "Carton & Case Coding"
    ],
    "industriesServed": [
      "FOOD",
      "BEVERAGES",
      "PHARMACEUTICALS",
      "AUTOMOTIVE & LUBRICANTS",
      "AGROCHEMICALS"
    ],
    "keyBenefits": [
      "Automatic spiral stretch film wrapping for stable, secure pallets",
      "Pre-stretch film dispensing reduces film usage by up to 250%",
      "Available in turntable and rotary arm configurations",
      "Programmable wrap count, film tension, and layer parameters",
      "Protects palletized goods from moisture, dust, and movement",
      "Reduces labor costs versus manual pallet wrapping"
    ],
    "specifications": [
      {
        "label": "Type",
        "value": "Automatic Turntable / Rotary Arm Stretch Wrapper"
      },
      {
        "label": "Film Type",
        "value": "LLDPE Stretch Film"
      },
      {
        "label": "Film Pre-Stretch",
        "value": "Up to 250%"
      },
      {
        "label": "Pallet Size",
        "value": "Up to 1200mm × 1200mm (standard)"
      },
      {
        "label": "Max Pallet Height",
        "value": "Up to 2400 mm"
      },
      {
        "label": "Wrap Speed",
        "value": "Adjustable, up to 40 RPM"
      },
      {
        "label": "Power",
        "value": "Three Phase 380-440V / 50Hz"
      }
    ],
    "faqs": [
      {
            "question": "What is the Pallet Wrapping Machine primarily used for?",
            "answer": "The Pallet Wrapping Machine is primarily used for carton & case coding and other industrial applications in the Packaging Machinery category."
      },
      {
            "question": "Which industries are suitable for this product?",
            "answer": "This product is highly suitable for industries such as Food, Beverages, Pharmaceuticals, Automotive & lubricants, Agrochemicals."
      },
      {
            "question": "What is the type of the Pallet Wrapping Machine?",
            "answer": "The type is specified as Automatic Turntable / Rotary Arm Stretch Wrapper."
      },
      {
            "question": "What are the main benefits of choosing this model?",
            "answer": "Key benefits include: automatic spiral stretch film wrapping for stable, secure pallets, as well as pre-stretch film dispensing reduces film usage by up to 250%."
      }
],
    "relatedProductIds": [
      "strapping-machines",
      "carton-taping-machines"
    ],
    "featured": false,
    "variants": []
  },
  {
    "id": "bottle-unscrambler",
    "slug": "bottle-unscrambler-machine",
    "name": "Bottle Unscrambler Machine",
    "category": "material-handling",
    "categoryLabel": "Packaging Machinery",
    "shortDescription": "Automatic bottle unscrambler for high-speed, unattended bulk bottle feeding, orientation, and single-file delivery to filling and capping lines.",
    "fullDescription": "The Bottle Unscrambler Machine automatically orients and singulates randomly loaded bulk bottles into a continuous, correctly oriented, single-file stream for delivery to filling, capping, and labelling machines. Bottles are loaded in bulk into an infeed hopper, then conveyed through a rotating drum or centrifugal disc mechanism that gently orients each bottle upright and discharges them in a single-file sequence onto the output conveyor. The machine significantly reduces labor costs associated with manual bottle feeding and eliminates production bottlenecks caused by inconsistent bottle infeed. Compatible with a wide range of bottle shapes, sizes, and materials including HDPE, PET, PP, and glass, with changeover tooling for different bottle profiles.",
    "image": "/images/products/bottle-unscrambler.webp",
    "applications": [
      "Bottle & Glass Marking",
      "Date & Batch Coding"
    ],
    "industriesServed": [
      "PHARMACEUTICALS",
      "FOOD",
      "BEVERAGES",
      "DAIRY",
      "COSMETICS & TOILETRIES"
    ],
    "keyBenefits": [
      "Automatic bulk bottle orientation and single-file singulation",
      "Eliminates manual bottle feeding labor",
      "High-speed delivery to filling, capping, and labelling lines",
      "Compatible with HDPE, PET, PP, and glass bottle types",
      "Changeover tooling for multiple bottle profiles",
      "Reduces production bottlenecks caused by inconsistent bottle infeed"
    ],
    "specifications": [
      {
        "label": "Type",
        "value": "Automatic Bottle Unscrambler"
      },
      {
        "label": "Mechanism",
        "value": "Rotating Drum / Centrifugal Disc"
      },
      {
        "label": "Output",
        "value": "Single-File Correctly Oriented Bottles"
      },
      {
        "label": "Bottle Types",
        "value": "HDPE, PET, PP, Glass"
      },
      {
        "label": "Speed",
        "value": "Up to 200 bottles per minute (size dependent)"
      },
      {
        "label": "MOC",
        "value": "SS 304 / Food-Grade Materials"
      }
    ],
    "faqs": [
      {
            "question": "What is the Bottle Unscrambler Machine primarily used for?",
            "answer": "The Bottle Unscrambler Machine is primarily used for bottle & glass marking, date & batch coding and other industrial applications in the Packaging Machinery category."
      },
      {
            "question": "Which industries are suitable for this product?",
            "answer": "This product is highly suitable for industries such as Pharmaceuticals, Food, Beverages, Dairy, Cosmetics & toiletries."
      },
      {
            "question": "What is the type of the Bottle Unscrambler Machine?",
            "answer": "The type is specified as Automatic Bottle Unscrambler."
      },
      {
            "question": "What are the main benefits of choosing this model?",
            "answer": "Key benefits include: automatic bulk bottle orientation and single-file singulation, as well as eliminates manual bottle feeding labor."
      }
],
    "relatedProductIds": [
      "conveyor-systems",
      "cap-sealing-machines",
      "automatic-labelling-machines"
    ],
    "featured": false,
    "variants": []
  },
  {
    "id": "winder-rewinder-machine",
    "slug": "winder-rewinder-machine",
    "name": "Winder Rewinder Machine",
    "category": "material-handling",
    "categoryLabel": "Packaging Machinery",
    "shortDescription": "Industrial winder rewinder machine for precision winding and rewinding of label rolls, film rolls, and flexible packaging materials.",
    "fullDescription": "The Winder Rewinder Machine is an industrial precision winding and rewinding system designed for label rolls, flexible film, foil, shrink sleeve, and other web-based packaging materials. The machine provides tension-controlled, consistent rewinding of material rolls at high speeds, ensuring perfectly wound rolls free of telescoping, edge variations, or tension inconsistencies. Used extensively in label printing, pharmaceutical packaging, flexible pouch manufacturing, and shrink sleeve production, winder rewinders enable efficient roll changeovers, slitting, and inspection processes. Available in single-shaft and multi-shaft configurations, with optional web guide systems, edge alignment controls, and inspection station integration.",
    "image": "/images/products/winder-rewinder-machine.webp",
    "applications": [
      "Pouch & Flexible Packaging"
    ],
    "industriesServed": [
      "PHARMACEUTICALS",
      "FOOD",
      "BEVERAGES",
      "COSMETICS & TOILETRIES"
    ],
    "keyBenefits": [
      "Precision tension-controlled winding for perfectly uniform rolls",
      "Eliminates telescoping, edge variation, and tension inconsistencies",
      "High-speed rewinding for efficient production throughput",
      "Compatible with labels, film, foil, and shrink sleeve materials",
      "Optional web guide and edge alignment control systems",
      "Available in single-shaft and multi-shaft configurations"
    ],
    "specifications": [
      {
        "label": "Type",
        "value": "Industrial Winder / Rewinder"
      },
      {
        "label": "Web Materials",
        "value": "Label Roll, Flexible Film, Foil, Shrink Sleeve"
      },
      {
        "label": "Tension Control",
        "value": "Automatic Tension Control"
      },
      {
        "label": "Roll Diameter",
        "value": "Up to 600 mm OD"
      },
      {
        "label": "Web Width",
        "value": "Customizable per requirement"
      },
      {
        "label": "Drive",
        "value": "Servo / Variable Frequency Drive (VFD)"
      }
    ],
    "faqs": [
      {
            "question": "What is the Winder Rewinder Machine primarily used for?",
            "answer": "The Winder Rewinder Machine is primarily used for pouch & flexible packaging and other industrial applications in the Packaging Machinery category."
      },
      {
            "question": "Which industries are suitable for this product?",
            "answer": "This product is highly suitable for industries such as Pharmaceuticals, Food, Beverages, Cosmetics & toiletries."
      },
      {
            "question": "What is the type of the Winder Rewinder Machine?",
            "answer": "The type is specified as Industrial Winder / Rewinder."
      },
      {
            "question": "What are the main benefits of choosing this model?",
            "answer": "Key benefits include: precision tension-controlled winding for perfectly uniform rolls, as well as eliminates telescoping, edge variation, and tension inconsistencies."
      }
],
    "relatedProductIds": [
      "automatic-labelling-machines"
    ],
    "featured": false,
    "variants": []
  },
  {
    "id": "vision-inspection-system",
    "slug": "vision-inspection-system",
    "name": "Vision & Inspection System",
    "brand": "Pixora",
    "category": "material-handling",
    "categoryLabel": "Vision & Inspection Systems",
    "shortDescription": "AI-powered machine vision inspection system for 100% online quality verification of codes, labels, packaging defects, and pharmaceutical compliance.",
    "fullDescription": "Pixora Vision inspection systems are advanced AI-powered machine vision platforms designed for 100% online quality control on high-speed production lines. Using high-resolution cameras, structured lighting, and deep learning algorithms, the system performs real-time inspection of date codes, batch codes, barcodes, QR codes, labels, fill levels, cap presence, seal integrity, and packaging defects at full production line speeds. Any non-conforming product is automatically rejected by a downstream reject mechanism, ensuring only compliant products reach the consumer. Pixora systems are used extensively in pharmaceutical, food & beverage, and FMCG production for GMP compliance, brand protection, and regulatory audit readiness. Systems can be configured for standalone operation or integrated with production line PLCs, ERP, and quality management systems for real-time SPC data logging.",
    "image": "/images/products/vision-inspection-system.webp",
    "applications": [
      "Serialization & Traceability",
      "Barcode & QR Code Printing",
      "Date & Batch Coding"
    ],
    "industriesServed": [
      "PHARMACEUTICALS",
      "FOOD",
      "BEVERAGES",
      "DAIRY",
      "COSMETICS & TOILETRIES"
    ],
    "keyBenefits": [
      "100% online inspection at full production line speeds",
      "AI-powered deep learning for defect detection and code verification",
      "Automatic rejection of non-conforming products",
      "Inspects codes, labels, fill levels, cap presence, and seal integrity",
      "GMP compliant with audit trail and real-time SPC data logging",
      "PLC, ERP, and QMS integration for full production data management"
    ],
    "specifications": [
      {
        "label": "Brand",
        "value": "Pixora Vision Systems"
      },
      {
        "label": "Technology",
        "value": "AI-Powered Machine Vision with Deep Learning"
      },
      {
        "label": "Inspection Types",
        "value": "Date Code, Barcode, QR Code, Label, Fill Level, Cap, Seal"
      },
      {
        "label": "Speed",
        "value": "Up to 600 units per minute (model dependent)"
      },
      {
        "label": "Rejection",
        "value": "Automatic Downstream Rejection System"
      },
      {
        "label": "Compliance",
        "value": "GMP / FDA / EU Annex 11 Ready"
      },
      {
        "label": "Integration",
        "value": "PLC / ERP / QMS / SPC Data Logging"
      }
    ],
    "faqs": [
      {
            "question": "What is the Vision & Inspection System primarily used for?",
            "answer": "The Vision & Inspection System is primarily used for serialization & traceability, barcode & qr code printing, date & batch coding and other industrial applications in the Vision & Inspection Systems category."
      },
      {
            "question": "Which industries are suitable for this product?",
            "answer": "This product is highly suitable for industries such as Pharmaceuticals, Food, Beverages, Dairy, Cosmetics & toiletries."
      },
      {
            "question": "What is the brand of the Vision & Inspection System?",
            "answer": "The brand is specified as Pixora Vision Systems."
      },
      {
            "question": "What are the main benefits of choosing this model?",
            "answer": "Key benefits include: 100% online inspection at full production line speeds, as well as ai-powered deep learning for defect detection and code verification."
      }
],
    "relatedProductIds": [
      "citronix-ci-series",
      "anser-industrial-tij",
      "citronix-ct-series"
    ],
    "featured": false,
    "variants": []
  },
  {
    "id": "box-wrapping-machine",
    "slug": "box-wrapping-machine",
    "name": "Box Wrapping Machine",
    "category": "packaging-sealing",
    "categoryLabel": "Packaging Machinery",
    "shortDescription": "Automatic box wrapping machine for professional gift-quality wrapping of boxes and cartons with stretch film, shrink film, or wrapping paper.",
    "fullDescription": "The Box Wrapping Machine is an automatic packaging solution designed to wrap boxes, cartons, and gift packs with stretch film, shrink wrap, or wrapping paper in a professional, high-quality finish. The machine automatically feeds, wraps, folds, and seals the wrapping material around the box in a precise, consistent manner, delivering a uniform presentation suitable for retail, gifting, and premium product packaging. Available in L-sealer and tunnel shrink combinations for shrink-wrap applications, or with paper feed mechanisms for paper-wrap gift-box finishing. The machine handles a wide range of box sizes through adjustable guides and film feed rollers, with digital temperature control for the sealing elements. Ideal for cosmetics, confectionery, book, and electronics retail packaging.",
    "image": "/images/products/box-wrapping-machine.webp",
    "applications": [
      "Pouch & Flexible Packaging",
      "Carton & Case Coding"
    ],
    "industriesServed": [
      "FOOD",
      "COSMETICS & TOILETRIES",
      "PHARMACEUTICALS"
    ],
    "keyBenefits": [
      "Automatic wrapping for professional, consistent box presentation",
      "Compatible with stretch film, shrink film, and wrapping paper",
      "Handles a wide range of box sizes through adjustable guides",
      "Digital temperature control for precise sealing",
      "Ideal for retail, gifting, cosmetics, and electronics packaging",
      "Reduces labor vs manual gift wrapping operations"
    ],
    "specifications": [
      {
        "label": "Wrapping Materials",
        "value": "Stretch Film / Shrink Film / Wrapping Paper"
      },
      {
        "label": "Configuration",
        "value": "L-Sealer + Shrink Tunnel / Paper Wrap"
      },
      {
        "label": "Box Size Range",
        "value": "Adjustable for various box dimensions"
      },
      {
        "label": "Sealing Method",
        "value": "Heat Seal with Digital Temperature Control"
      },
      {
        "label": "Power",
        "value": "220V / 50Hz / Single Phase"
      }
    ],
    "faqs": [
      {
            "question": "What is the Box Wrapping Machine primarily used for?",
            "answer": "The Box Wrapping Machine is primarily used for pouch & flexible packaging, carton & case coding and other industrial applications in the Packaging Machinery category."
      },
      {
            "question": "Which industries are suitable for this product?",
            "answer": "This product is highly suitable for industries such as Food, Cosmetics & toiletries, Pharmaceuticals."
      },
      {
            "question": "What is the wrapping materials of the Box Wrapping Machine?",
            "answer": "The wrapping materials is specified as Stretch Film / Shrink Film / Wrapping Paper."
      },
      {
            "question": "What are the main benefits of choosing this model?",
            "answer": "Key benefits include: automatic wrapping for professional, consistent box presentation, as well as compatible with stretch film, shrink film, and wrapping paper."
      }
],
    "relatedProductIds": [
      "pallet-wrapping-machine",
      "carton-taping-machines",
      "strapping-machines"
    ],
    "featured": false,
    "variants": []
  },
  {
    "id": "high-speed-inkjet-system",
    "slug": "high-speed-inkjet-system",
    "name": "High Speed Inkjet Production Printer",
    "category": "coding-marking",
    "categoryLabel": "High Speed Inkjet",
    "shortDescription": "Production-grade high-speed inkjet systems for high-volume variable data printing on fast moving lines.",
    "fullDescription": "High-speed inkjet systems engineered for continuous 24/7 web-fed packaging, foil printing, and high-volume manufacturing lines requiring seamless variable data and barcode printing.",
    "image": "/images/products/high-speed-inkjet-printer.webp",
    "applications": [
      "MRP Printing",
      "Barcode & QR Code Printing",
      "Serialization & Traceability",
      "Pipe & Cable Marking"
    ],
    "industriesServed": [
      "FOOD",
      "BEVERAGES",
      "PHARMACEUTICALS",
      "CABLE & PIPES",
      "AGROCHEMICALS"
    ],
    "keyBenefits": [
      "Extreme speed up to 300 m/min",
      "Piezoelectric high-resolution print heads",
      "Industry 4.0 PLC integration"
    ],
    "specifications": [
      {
        "label": "Max Speed",
        "value": "Up to 300 m/min"
      },
      {
        "label": "Resolution",
        "value": "Up to 600 DPI"
      },
      {
        "label": "Ink System",
        "value": "UV Curable & Solvent Inks"
      }
    ],
    "faqs": [
      {
            "question": "What is the High Speed Inkjet Production Printer primarily used for?",
            "answer": "The High Speed Inkjet Production Printer is primarily used for mrp printing, barcode & qr code printing, serialization & traceability and other industrial applications in the High Speed Inkjet category."
      },
      {
            "question": "Which industries are suitable for this product?",
            "answer": "This product is highly suitable for industries such as Food, Beverages, Pharmaceuticals, Cable & pipes, Agrochemicals."
      },
      {
            "question": "What is the max speed of the High Speed Inkjet Production Printer?",
            "answer": "The max speed is specified as Up to 300 m/min."
      },
      {
            "question": "What are the main benefits of choosing this model?",
            "answer": "Key benefits include: extreme speed up to 300 m/min, as well as piezoelectric high-resolution print heads."
      },
      {
            "question": "Can it be used for pipe & cable marking?",
            "answer": "Yes, it is designed to support pipe & cable marking among its various applications."
      }
],
    "relatedProductIds": [
      "citronix-ci-series",
      "anser-industrial-tij"
    ],
    "featured": true,
    "variants": []
  }
];

