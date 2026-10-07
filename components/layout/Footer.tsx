"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ArrowRight, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { industries } from "@/data/industries";
import { products } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-felix-dark text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP BRAND & NEWSLETTER STRIP */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-12 border-b border-gray-800 gap-6">
          <div className="flex items-center space-x-4">
            <div className="relative w-48 h-14 bg-white p-2 rounded-lg">
              <Image
                src={siteConfig.logoPath}
                alt="Felix Solutions"
                fill
                className="object-contain p-1"
              />
            </div>
          </div>

          <div className="flex items-center space-x-3 w-full md:w-auto">
            <span className="text-xs font-bold text-white uppercase tracking-wider hidden sm:inline">
              Get a Free Callback:
            </span>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Our expert will call you shortly.");
              }}
              className="flex w-full sm:w-auto"
            >
              <input
                type="tel"
                placeholder="Enter contact number..."
                required
                className="px-4 py-2 text-xs bg-gray-800 border border-gray-700 rounded-l-lg text-white focus:outline-none focus:border-felix-cyan"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-felix-blue hover:bg-felix-cyan hover:text-felix-dark text-white rounded-r-lg font-bold text-xs transition-colors flex items-center"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* MAIN FOOTER COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-12 border-b border-gray-800 text-xs">
          
          {/* COL 1: ABOUT */}
          <div className="lg:col-span-2 pr-0 lg:pr-6">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-4">
              About Felix Solutions
            </h4>
            <p className="text-gray-400 leading-relaxed mb-6">
              {siteConfig.description}
            </p>

            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-felix-cyan flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Mumbai (HO):</strong>
                  {siteConfig.offices[0].address}
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-felix-cyan flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Gujarat Office:</strong>
                  {siteConfig.offices[1].address}
                </div>
              </div>
            </div>
          </div>

          {/* COL 2: QUICK LINKS */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-felix-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-felix-cyan transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="text-gray-400 hover:text-felix-cyan transition-colors"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="text-felix-cyan font-bold hover:underline"
                >
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 3: INDUSTRIES */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-4">
              Industries
            </h4>
            <ul className="space-y-2.5">
              {industries.slice(0, 7).map((ind) => (
                <li key={ind.id}>
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="text-gray-400 hover:text-felix-cyan transition-colors"
                  >
                    {ind.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4: CONTACT & HELPLINE */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-felix-cyan flex-shrink-0" />
                <span>{siteConfig.phones[0]}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-felix-cyan flex-shrink-0" />
                <span>{siteConfig.phones[1]}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-felix-cyan flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:underline">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-felix-cyan flex-shrink-0" />
                <span>Mon to Sat: 10 a.m. to 6 p.m.</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-5 pt-4 border-t border-gray-800 flex items-center space-x-2">
              {siteConfig.socialLinks.map((s) => {
                let IconComp = ArrowRight;
                if (s.platform === "LinkedIn") IconComp = Linkedin;
                if (s.platform === "Instagram") IconComp = Instagram;
                if (s.platform === "Facebook") IconComp = Facebook;
                if (s.platform === "YouTube") IconComp = Youtube;

                return (
                  <a
                    key={s.platform}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.platform}
                    className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-felix-blue hover:text-white text-gray-300 flex items-center justify-center transition-colors border border-gray-700"
                  >
                    <IconComp className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* COPYRIGHT STRIP */}
        <div className="pt-8 text-center text-xs text-gray-500">
          <p>
            Copyright © {new Date().getFullYear()}{" "}
            <span className="text-white font-bold">{siteConfig.name}</span>. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
