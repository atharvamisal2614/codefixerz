import React from "react";
import AboutSection from "@/components/AboutSection";

export const metadata = {
  title: "About Us | Codefixerz",
  description: "Learn more about Codefixerz, our team, and our mission to deliver top-notch digital solutions.",
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-36 pb-20 bg-[#0B1736] text-center relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/20 rounded-[100%] blur-[100px] pointer-events-none" />
        <div className="relative z-10 px-5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">About Us</h1>
          <p className="text-blue-100/70 text-lg max-w-2xl mx-auto">
            Discover who we are, what drives us, and why we are passionate about building extraordinary digital experiences.
          </p>
        </div>
      </div>
      <div className="bg-white">
        <AboutSection />
      </div>
    </>
  );
}
