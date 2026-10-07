"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ProductFAQ as FAQType } from "@/data/products";

interface ProductFAQProps {
  faqs?: FAQType[];
}

export default function ProductFAQ({ faqs }: ProductFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) {
    return null;
  }

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 justify-center mb-4">
          <span className="w-7 h-[2.5px] bg-felix-blue rounded-full shrink-0" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-felix-blue">
            FREQUENTLY ASKED QUESTIONS
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-snug text-center mb-10">
          Common questions about this product
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border border-gray-200 bg-white rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'shadow-md ring-1 ring-felix-blue/10' : 'hover:shadow-sm'}`}
            >
              <button 
                onClick={() => toggle(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`text-[15px] sm:text-base font-bold pr-4 transition-colors duration-200 ${openIndex === idx ? 'text-felix-blue' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-felix-blue' : 'text-slate-400'}`} />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 pt-1 text-slate-500 text-sm sm:text-[15px] leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
