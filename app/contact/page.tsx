"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import GeometricBackground from "@/components/ui/GeometricBackground";
import ScrollReveal from "@/components/ui/ScrollReveal";
import LocationMap from "@/components/ui/LocationMap";
import MagneticButton from "@/components/ui/MagneticButton";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    subject: "Product Inquiry",
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
    if (!formData.subject) {
      setFormError("Please select an enquiry subject/type.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <GeometricBackground>
      <div className="py-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PAGE HEADER */}
        <ScrollReveal variant="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-extrabold text-felix-blue uppercase tracking-widest mb-2">
              GET IN TOUCH
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-felix-black tracking-tight mb-4">
              Contact Felix Solutions
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed">
              Reach out to our industrial sales & service engineering teams for inquiries, product demonstrations, or technical assistance.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* CONTACT INFO (5 COLS) */}
          <ScrollReveal variant="fade-right" className="lg:col-span-5 space-y-8">
            <div className="p-6 bg-felix-smoke rounded-xl border border-gray-200">
              <h3 className="text-base font-bold text-felix-black mb-4">
                Headquarters (Navi Mumbai)
              </h3>
              <div className="flex items-start space-x-3 text-xs text-gray-700 leading-relaxed mb-4">
                <MapPin className="w-5 h-5 text-felix-blue flex-shrink-0 mt-0.5" />
                <span>{siteConfig.offices[0].address}</span>
              </div>
            </div>

            <div className="p-6 bg-felix-smoke rounded-xl border border-gray-200">
              <h3 className="text-base font-bold text-felix-black mb-4">
                Gujarat Regional Office (Ahmedabad)
              </h3>
              <div className="flex items-start space-x-3 text-xs text-gray-700 leading-relaxed mb-4">
                <MapPin className="w-5 h-5 text-felix-blue flex-shrink-0 mt-0.5" />
                <span>{siteConfig.offices[1].address}</span>
              </div>
            </div>

            <div className="p-6 bg-felix-blue text-white rounded-xl shadow-lg space-y-4 text-xs">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-felix-cyan" />
                <span>Sales Helpline: {siteConfig.phones[0]} / {siteConfig.phones[1]}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-felix-cyan" />
                <span>Email: {siteConfig.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-felix-cyan" />
                <span>Working Hours: {siteConfig.workingHours}</span>
              </div>
            </div>
          </ScrollReveal>

          {/* CONTACT FORM (7 COLS) */}
          <ScrollReveal variant="fade-left" className="lg:col-span-7 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md">
            <h2 className="text-xl font-bold text-felix-black mb-6">
              Send an Enquiry Message
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
                  Thank you for contacting Felix Solutions. Our sales and engineering team will review your enquiry and get back to you promptly.
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
                      subject: "Product Inquiry",
                      message: "",
                    });
                  }}
                  className="px-6 py-2.5 text-xs font-bold text-white bg-felix-blue hover:bg-felix-dark rounded-xl transition-all shadow"
                >
                  Send Another Enquiry
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
                    SUBJECT / ENQUIRY TYPE *
                  </label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-felix-blue focus:bg-white transition-all"
                  >
                    <option value="Product Inquiry">Product Inquiry (CIJ, TIJ, Laser, Labelling)</option>
                    <option value="Sales & Quotation">Sales & Quotation Request</option>
                    <option value="Technical Support / Maintenance">Technical Support & Field Maintenance</option>
                    <option value="Consumables & Inks">Consumables, Inks & Spare Parts</option>
                    <option value="Career Inquiry">Career & Recruitment Inquiry</option>
                    <option value="General Information">General Information</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    MESSAGE / ENQUIRY DETAILS
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
          </ScrollReveal>

        </div>

        {/* LOCATION MAP SECTION */}
        <div className="mt-14 sm:mt-16">
          <ScrollReveal variant="fade-up">
            <LocationMap />
          </ScrollReveal>
        </div>

      </div>
    </div>
    </GeometricBackground>
  );
}
