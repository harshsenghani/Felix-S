import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ArrowLeft, ChevronRight } from "lucide-react";
import { industries } from "@/data/industries";
import { products } from "@/data/products";

export async function generateStaticParams() {
  return industries.map((ind) => ({ slug: ind.slug }));
}

export default async function IndustryDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const industry = industries.find((i) => i.slug === params.slug);

  if (!industry) {
    notFound();
  }

  const recommendedProducts = products.filter((p) =>
    industry.recommendedProductIds.includes(p.id)
  );

  return (
    <div className="py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BACK LINK */}
        <Link
          href="/industries"
          className="inline-flex items-center text-xs font-bold text-felix-blue hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          <span>Back to All Industries</span>
        </Link>

        {/* HERO AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* LEFT: CONTENT */}
          <div className="lg:col-span-6">
            <div className="text-xs font-extrabold text-felix-blue uppercase tracking-widest mb-2">
              INDUSTRY SOLUTION VERTICAL
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-felix-black tracking-tight mb-4">
              Coding & Marking for {industry.name} Industry
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              {industry.fullDescription}
            </p>

            {/* REQUIREMENTS */}
            <div className="space-y-2 mb-8">
              <h3 className="text-xs font-bold text-felix-black uppercase tracking-wider mb-3">
                Key Industry Coding Requirements:
              </h3>
              {industry.codingRequirements.map((req) => (
                <div key={req} className="flex items-start space-x-2 text-xs text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-felix-blue flex-shrink-0 mt-0.5" />
                  <span>{req}</span>
                </div>
              ))}
            </div>

            <Link
              href={`/quote?industry=${encodeURIComponent(industry.name)}`}
              className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold text-white bg-felix-blue hover:bg-felix-dark rounded-xl transition-all shadow-lg group"
            >
              <span>REQUEST A MACHINE QUOTE</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* RIGHT: PHOTOREALISTIC INDUSTRY HERO IMAGE */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
              <Image
                src={industry.image}
                alt={industry.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>

        {/* RECOMMENDED PRODUCTS SECTION */}
        <div className="py-12 border-t border-gray-200">
          <h2 className="text-2xl font-black text-felix-black tracking-tight mb-8">
            Recommended Products for {industry.name}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {recommendedProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full h-40 bg-gray-50 rounded-lg overflow-hidden mb-4 p-2">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-felix-black group-hover:text-felix-blue transition-colors line-clamp-1 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {product.shortDescription}
                  </p>
                </div>
                <div className="pt-3 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-felix-blue">
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
