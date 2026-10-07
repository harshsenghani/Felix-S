"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, HelpCircle, Briefcase } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import GeometricBackground from "@/components/ui/GeometricBackground";

export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    enquiryType: "Product Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!formData.fullName.trim()) {
      setFormError("Please enter your full name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setFormError("Please enter a valid email address.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setFormError("Please enter a valid phone/mobile number.");
      return;
    }
    if (!formData.companyName.trim()) {
      setFormError("Please enter your company name.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <GeometricBackground>
      <div className="py-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* HEADER */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-extrabold text-felix-blue uppercase tracking-widest mb-2">
              FELIX SOLUTIONS ENQUIRY
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-felix-black tracking-tight mb-4">
              Submit an Enquiry
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed">
              Connect directly with our engineering, sales, and career departments. We provide expert advice for all batch coding, marking, and packaging machinery needs.
            </p>
          </div>

          {/* QUICK PORTAL NAVIGATION CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <Link 
              href="/contact"
              className="p-6 bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md hover:border-felix-blue transition-all group flex items-start space-x-4"
            >
              <div className="p-3 bg-blue-50 text-felix-blue rounded-xl border border-blue-100 flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-felix-blue transition-colors mb-1">
                  Contact Us
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Headquarters & Regional office contacts, direct sales helpline, and customer service contacts.
                </p>
              </div>
            </Link>

            <Link 
              href="/career"
              className="p-6 bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md hover:border-felix-blue transition-all group flex items-start space-x-4"
            >
              <div className="p-3 bg-blue-50 text-felix-blue rounded-xl border border-blue-100 flex-shrink-0">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-felix-blue transition-colors mb-1">
                  Career Opportunities
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Join our engineering team. Explore current openings and submit your candidate application & CV.
                </p>
              </div>
            </Link>
          </div>

          {/* MAIN FORM */}
          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm border border-gray-200/80 rounded-2xl p-6 sm:p-10 shadow-xl">
            <h2 className="text-xl font-bold text-felix-black mb-6">
              General Enquiry Form
            </h2>

            {submitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-100">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-extrabold text-felix-black mb-2">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="text-xs text-gray-600 max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you for submitting your enquiry. A Felix Solutions representative will contact you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      companyName: "",
                      enquiryType: "Product Inquiry",
                      message: "",
                    });
                  }}
                  className="px-6 py-2.5 text-xs font-bold text-white bg-felix-blue hover:bg-felix-dark rounded-xl transition-all shadow"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {formError && (
                  <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl flex items-center space-x-2 text-rose-700 text-xs font-bold">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-felix-blue focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      COMPANY NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter company name"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-felix-blue focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-felix-blue focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-felix-blue focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    ENQUIRY TYPE *
                  </label>
                  <select
                    required
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-felix-blue focus:bg-white transition-all"
                  >
                    <option value="Product Inquiry">Product Inquiry (CIJ, TIJ, Laser, Labelling)</option>
                    <option value="Sales & Quotation">Sales & Quotation Request</option>
                    <option value="Technical Support">Technical Support & Maintenance</option>
                    <option value="Career / Job Opportunities">Career & Recruitment</option>
                    <option value="General Information">General Information</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    MESSAGE / DETAILS
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your coding, marking, or labelling requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-felix-blue focus:bg-white transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold text-white bg-felix-blue hover:bg-felix-dark rounded-xl transition-all shadow-md group"
                >
                  <span>SEND ENQUIRY</span>
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </GeometricBackground>
  );
}
