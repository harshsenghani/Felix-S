export interface OfficeLocation {
  city: string;
  type: string;
  address: string;
  addressLines: string[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  logoPath: string;
  phones: string[];
  email: string;
  secondaryEmail: string;
  offices: OfficeLocation[];
  workingHours: string;
  navLinks: { label: string; href: string }[];
  socialLinks: { platform: string; href: string }[];
}

export const siteConfig: SiteConfig = {
  name: "Felix Solutions",
  tagline: "PACK • CODE • MARK",
  description:
    "We bring global expertise, in-depth domain knowledge and vast local industry experience to successfully cater to wide ranging coding needs across various industry segments.",
  logoPath: "/assets/felix-logo.webp",
  phones: ["+91 9870610432", "+91 9967554054"],
  email: "felixsolutions1@gmail.com",
  secondaryEmail: "felixsolutions2@gmail.com",
  workingHours: "Mon to Sat: 10 a.m. to 6 p.m.",
  offices: [
    {
      city: "Mumbai (HO)",
      type: "Headquarters",
      address:
        "Bldg A, Unit No. 2, 1st Floor, GAMI INDUSTRIAL PARK, Plot No. C-39A, TTC Industrial Area, Pawane MIDC, Navi Mumbai – 400705, Maharashtra, India.",
      addressLines: [
        "Felix Solutions - Mumbai (HO)",
        "Bldg A, Unit No. 2, 1st Floor,",
        "GAMI INDUSTRIAL PARK, Plot No. C-39A,",
        "TTC Industrial Area, Pawane MIDC,",
        "Navi Mumbai – 400705, Maharashtra, India.",
      ],
    },
    {
      city: "Ahmedabad (Gujarat)",
      type: "Regional Office",
      address:
        "F-405, HN SUMEL BUSINESS PARK-6, Dudheshwar Rd, Dudheshwar, Ahmedabad, Gujarat 380004.",
      addressLines: [
        "Felix Solutions - Gujarat Office",
        "F-405, HN SUMEL BUSINESS PARK-6,",
        "Dudheshwar Rd, Dudheshwar,",
        "Ahmedabad, Gujarat 380004",
      ],
    },
  ],
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Industries", href: "/industries" },
    { label: "Applications", href: "/applications" },
    { label: "About", href: "/about" },
  ],
  socialLinks: [
    { platform: "Facebook", href: "https://www.facebook.com/felix.solutionss" },
    { platform: "Instagram", href: "https://www.instagram.com/felixsolutions1/" },
    { platform: "YouTube", href: "https://www.youtube.com/channel/UCY19nHG7BRW_8esn0eQJXpA/videos" },
    { platform: "LinkedIn", href: "https://in.linkedin.com/company/felixsolutions" },
    { platform: "Twitter", href: "https://twitter.com/felixsolutions1" },
  ],
};
