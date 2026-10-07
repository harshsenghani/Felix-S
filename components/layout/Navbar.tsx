"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Mail, Briefcase, Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import NavbarSearch from "./NavbarSearch";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [enquiryDropdownOpen, setEnquiryDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setEnquiryDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setEnquiryDropdownOpen(false);
    }, 150);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FEFEFE] border-b border-gray-200 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2 xl:gap-4">
          {/* LEFT: LOCKED OFFICIAL LOGO */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-[140px] lg:w-[150px] xl:w-[180px] h-[44px] lg:h-[48px] xl:h-[52px]">
                <Image
                  src={siteConfig.logoPath}
                  alt="Felix Solutions Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* CENTER: DESKTOP NAVIGATION LINKS */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5 flex-shrink min-w-0">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-2 xl:px-3 py-2 text-[12px] xl:text-[14px] font-semibold text-gray-700 hover:text-felix-blue transition-colors rounded-md hover:bg-felix-smoke whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}

            {/* ENQUIRY DROPDOWN ITEM */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setEnquiryDropdownOpen(!enquiryDropdownOpen)}
                className="px-2 xl:px-3 py-2 text-[12px] xl:text-[14px] font-semibold text-gray-700 hover:text-felix-blue transition-colors rounded-md hover:bg-felix-smoke inline-flex items-center gap-1 focus:outline-none whitespace-nowrap"
                aria-expanded={enquiryDropdownOpen}
              >
                <span>Enquiry</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${enquiryDropdownOpen ? "rotate-180 text-felix-blue" : "text-gray-400"}`} />
              </button>

              {/* DROPDOWN MENU */}
              {enquiryDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-50 animate-fadeIn"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href="/contact"
                    onClick={() => setEnquiryDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-gray-700 hover:text-felix-blue hover:bg-slate-50 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-felix-blue" />
                    <span>Contact Us</span>
                  </Link>
                  <Link
                    href="/career"
                    onClick={() => setEnquiryDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-gray-700 hover:text-felix-blue hover:bg-slate-50 transition-colors border-t border-gray-100"
                  >
                    <Briefcase className="w-4 h-4 text-felix-blue" />
                    <span>Career</span>
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* RIGHT: INTELLIGENT SEARCH FIELD + REQUEST QUOTE CTA */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3.5 flex-shrink-0 ml-auto">
            {/* Intelligent Global Search Input */}
            <NavbarSearch />

            {/* Request Quote Button */}
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-3 xl:px-4 py-2 text-xs font-bold text-white bg-felix-blue hover:bg-felix-dark rounded-lg transition-all shadow-sm hover:shadow group whitespace-nowrap flex-shrink-0"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="lg:hidden flex items-center space-x-2">
            <Link
              href="/quote"
              className="px-3 py-1.5 text-xs font-bold text-white bg-felix-blue rounded-md"
            >
              Quote
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-felix-blue focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3">
          <div className="mb-3">
            <NavbarSearch isMobile onResultSelect={() => setMobileMenuOpen(false)} />
          </div>

          <div className="flex flex-col space-y-2">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-gray-800 hover:text-felix-blue rounded-md hover:bg-gray-50"
              >
                {link.label}
              </Link>
            ))}

            {/* MOBILE ENQUIRY SUBMENU */}
            <div className="pt-2 border-t border-gray-100">
              <div className="px-3 py-1 text-xs font-extrabold text-felix-blue uppercase tracking-wider">
                Enquiry
              </div>
              <div className="pl-3 mt-1 flex flex-col space-y-1">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-felix-blue rounded-md hover:bg-gray-50 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-felix-blue" />
                  <span>Contact Us</span>
                </Link>
                <Link
                  href="/career"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-felix-blue rounded-md hover:bg-gray-50 flex items-center gap-2"
                >
                  <Briefcase className="w-4 h-4 text-felix-blue" />
                  <span>Career</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
