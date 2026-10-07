import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/ui/PageTransition";
import ScrollProgress from "@/components/ui/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Felix Solutions | Industrial Inkjet, Coding & Marking Machines",
  description:
    "Leading manufacturer and supplier of Continuous Inkjet Printers (CIJ), Thermal Inkjet Printers (TIJ), Laser Marking Machines, and Automated Labelling Systems in Mumbai and India.",
  keywords: [
    "Industrial Inkjet Printer",
    "Continuous Inkjet Printer",
    "Thermal Inkjet Printer",
    "Batch Coding Machine",
    "Expiry Date Printing Machine",
    "MRP Printing Machine",
    "Felix Solutions Mumbai",
    "Labelling Machine India",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#FEFEFE] text-[#1D1D1D] antialiased">
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
