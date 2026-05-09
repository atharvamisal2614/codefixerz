import React from "react";
import ServicesSection from "@/components/ServicesSection";

export const metadata = {
  title: "Our Services | Codefixerz",
  description: "Explore the comprehensive digital services offered by Codefixerz, from custom software development to SEO and marketing.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="pt-36 pb-20 bg-[#0B1736] text-center relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/20 rounded-[100%] blur-[100px] pointer-events-none" />
        <div className="relative z-10 px-5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">Our Services</h1>
          <p className="text-blue-100/70 text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your brand, streamline operations, and drive measurable growth.
          </p>
        </div>
      </div>
      <div className="bg-white">
        <ServicesSection />
      </div>
    </>
  );
}
