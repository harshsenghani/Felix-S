"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function LocationMap({ className = "" }: { className?: string }) {
  const mumbaiOffice = siteConfig.offices[0];
  const gujaratOffice = siteConfig.offices[1];

  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    "Felix Solutions Gami Industrial Park Pawane Navi Mumbai 400705"
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={`bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg ${className}`}>
      {/* HEADER BAR */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-felix-blue/30 text-felix-cyan text-[11px] font-extrabold uppercase tracking-widest mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>HEADQUARTERS & REGIONAL LOCATION</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Felix Solutions Location Map
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            Pawane MIDC, TTC Industrial Area, Navi Mumbai & Ahmedabad Branch
          </p>
        </div>

        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mumbaiOffice.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-felix-blue hover:bg-felix-cyan hover:text-slate-900 text-white text-xs font-bold rounded-xl transition-all shadow shrink-0"
        >
          <span>Open in Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5 ml-2" />
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* MAP EMBED (7 COLS) */}
        <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[420px] bg-slate-100">
          <iframe
            title="Felix Solutions Navi Mumbai Location Map"
            src={mapEmbedUrl}
            className="w-full h-full min-h-[360px] border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>

        {/* LOCATION DETAILS CARD (5 COLS) */}
        <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-50 border-t lg:border-t-0 lg:border-l border-gray-200 flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            {/* MUMBAI HO */}
            <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-2 text-felix-blue text-xs font-extrabold uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4 text-felix-blue shrink-0" />
                <span>MUMBAI (HEADQUARTERS)</span>
              </div>
              <h4 className="text-sm font-black text-slate-900 mb-1">
                Felix Solutions — Navi Mumbai HO
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {mumbaiOffice.address}
              </p>
            </div>

            {/* GUJARAT OFFICE */}
            <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-2 text-felix-blue text-xs font-extrabold uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4 text-felix-blue shrink-0" />
                <span>GUJARAT (REGIONAL OFFICE)</span>
              </div>
              <h4 className="text-sm font-black text-slate-900 mb-1">
                Felix Solutions — Ahmedabad Branch
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {gujaratOffice.address}
              </p>
            </div>
          </div>

          {/* HELPLINE & TIMINGS */}
          <div className="pt-4 border-t border-gray-200/80 space-y-2 text-xs text-slate-700 font-medium">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-felix-blue shrink-0" />
              <span>Helpline: {siteConfig.phones[0]} / {siteConfig.phones[1]}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-felix-blue shrink-0" />
              <span>Email: {siteConfig.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-felix-blue shrink-0" />
              <span>Working Hours: Mon to Sat: 10 a.m. to 6 p.m.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
