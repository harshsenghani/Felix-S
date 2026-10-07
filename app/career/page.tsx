"use client";

import React, { useState } from "react";
import { 
  Briefcase, 
  Upload, 
  CheckCircle2, 
  Send, 
  FileText, 
  MapPin, 
  Award, 
  Users,
  AlertCircle,
  X
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import GeometricBackground from "@/components/ui/GeometricBackground";

export default function CareerPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    position: "",
    city: "",
    coverMessage: "",
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError("");

    if (!file) {
      setResumeFile(null);
      return;
    }

    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    const validExtensions = [".pdf", ".doc", ".docx"];
    const fileExt = "." + file.name.split(".").pop()?.toLowerCase();

    if (!validTypes.includes(file.type) && !validExtensions.includes(fileExt)) {
      setFileError("Invalid file type. Please upload a PDF, DOC, or DOCX document.");
      setResumeFile(null);
      return;
    }

    // 5MB limit
    if (file.size > 5 * 1024 * 1024) {
      setFileError("File size exceeds 5MB limit. Please upload a smaller file.");
      setResumeFile(null);
      return;
    }

    setResumeFile(file);
  };

  const removeFile = () => {
    setResumeFile(null);
    setFileError("");
  };

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
    if (!formData.mobile.trim() || formData.mobile.length < 8) {
      setFormError("Please enter a valid mobile number.");
      return;
    }
    if (!formData.position) {
      setFormError("Please select the position/role you are applying for.");
      return;
    }
    if (!formData.city.trim()) {
      setFormError("Please enter your current city.");
      return;
    }
    if (!resumeFile) {
      setFileError("Please upload your updated Resume/CV.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <GeometricBackground>
      <div className="py-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO / INTRODUCTION SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Build Your Future With Felix Solutions
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
            Join India's leading team of continuous inkjet, thermal inkjet, laser marking, and automated labelling specialists. We empower talented engineers, sales professionals, and technical experts to shape the future of industrial packaging lines.
          </p>
        </div>

        {/* WHY WORK WITH US HIGHLIGHT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <div className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-sm flex items-start space-x-4">
            <div className="p-3 bg-blue-50 text-felix-blue rounded-xl border border-blue-100 flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                Domain Excellence
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Work alongside industry veterans with decades of experience in coding, marking, and high-speed packaging automation.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-sm flex items-start space-x-4">
            <div className="p-3 bg-blue-50 text-felix-blue rounded-xl border border-blue-100 flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                Strategic Presence
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Career opportunities across our Navi Mumbai Headquarters and Gujarat Regional Office in Ahmedabad.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-sm flex items-start space-x-4">
            <div className="p-3 bg-blue-50 text-felix-blue rounded-xl border border-blue-100 flex-shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                Growth Culture
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Continuous technical training, OEM product certifications, and clear career progression pathways.
              </p>
            </div>
          </div>
        </div>

        {/* APPLICATION FORM SECTION */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-10 shadow-xl">
            
            <div className="border-b border-slate-100 pb-6 mb-8 text-center sm:text-left">
              <div className="text-[11px] font-extrabold text-felix-blue uppercase tracking-widest mb-1">
                JOIN OUR TEAM
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Submit Your Application
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Fill in candidate details below and attach your updated CV/Resume.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-100">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  Application Submitted Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you for applying to Felix Solutions. Our HR team will review your qualifications and contact you if your profile aligns with our current openings.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      mobile: "",
                      position: "",
                      city: "",
                      coverMessage: "",
                    });
                    setResumeFile(null);
                  }}
                  className="px-6 py-3 text-xs font-bold text-white bg-felix-blue hover:bg-blue-600 rounded-xl transition-all shadow-md"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {formError && (
                  <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl flex items-center space-x-2 text-rose-700 text-xs font-bold">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                {/* NAME & EMAIL */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-felix-blue focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-felix-blue focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* MOBILE & CITY */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      MOBILE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9876543210"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-felix-blue focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      CURRENT CITY *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mumbai, Ahmedabad, Pune"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-felix-blue focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* POSITION / ROLE SELECT */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    POSITION / ROLE *
                  </label>
                  <select
                    required
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full px-4 py-3 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-felix-blue focus:bg-white transition-all"
                  >
                    <option value="">Select Target Position / Role...</option>
                    <option value="Application Engineer - CIJ & TIJ Systems">
                      Application Engineer - CIJ & TIJ Systems
                    </option>
                    <option value="Field Service & Maintenance Engineer">
                      Field Service & Maintenance Engineer
                    </option>
                    <option value="Sales Executive - Industrial Coding & Labelling">
                      Sales Executive - Industrial Coding & Labelling
                    </option>
                    <option value="Labelling Machinery Specialist">
                      Labelling Machinery Specialist
                    </option>
                    <option value="Software & Serialization Integration Specialist">
                      Software & Serialization Integration Specialist
                    </option>
                    <option value="General Application / Future Opportunities">
                      General Application / Future Opportunities
                    </option>
                  </select>
                </div>

                {/* RESUME / CV UPLOAD */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    RESUME / CV (PDF, DOC, DOCX - MAX 5MB) *
                  </label>
                  
                  {resumeFile ? (
                    <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-xl">
                      <div className="flex items-center space-x-3 overflow-hidden">
                        <FileText className="w-6 h-6 text-felix-blue flex-shrink-0" />
                        <div className="truncate">
                          <p className="text-xs font-bold text-slate-900 truncate">
                            {resumeFile.name}
                          </p>
                          <p className="text-[10px] text-slate-500">
                            {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-white rounded-lg transition-colors"
                        title="Remove file"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <label className="relative flex flex-col items-center justify-center w-full p-6 border-2 border-dashed border-slate-300 hover:border-felix-blue bg-slate-50 hover:bg-blue-50/50 rounded-xl cursor-pointer transition-all">
                      <Upload className="w-8 h-8 text-slate-400 mb-2" />
                      <span className="text-xs font-bold text-slate-700 mb-1">
                        Click or drag & drop to upload CV / Resume
                      </span>
                      <span className="text-[10px] text-slate-400">
                        Accepted Formats: PDF, DOC, DOCX (Max 5MB)
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        onChange={handleFileChange}
                        className="sr-only"
                      />
                    </label>
                  )}

                  {fileError && (
                    <p className="text-[11px] font-bold text-rose-600 mt-1.5 flex items-center">
                      <AlertCircle className="w-3.5 h-3.5 mr-1" />
                      {fileError}
                    </p>
                  )}
                </div>

                {/* COVER MESSAGE */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    COVER MESSAGE / REQUIREMENTS (OPTIONAL)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your industrial coding experience, technical skills, or key achievements..."
                    value={formData.coverMessage}
                    onChange={(e) => setFormData({ ...formData, coverMessage: e.target.value })}
                    className="w-full px-4 py-3 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-felix-blue focus:bg-white transition-all"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full py-4 text-xs font-bold text-white bg-felix-blue hover:bg-blue-600 rounded-xl transition-all shadow-lg hover:shadow-xl group"
                >
                  <span>SUBMIT APPLICATION</span>
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}

          </div>
        </div>
      </div>
    </div>
    </GeometricBackground>
  );
}
