import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CareersSection from "@/components/CareersSection";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "CodeFixerz | Innovative Web Development & Software Solutions Agency",
  description: "Welcome to CodeFixerz (also known as Codefix, Codefixer, or Codefixers). We build high-performance digital solutions, from custom web applications to strategic digital marketing, helping businesses scale globally.",
  keywords: ["Codefix", "Codefixer", "Codefixers", "Codefixerz", "Web Design Agency", "Software Development India"],
  openGraph: {
    title: "CodeFixerz | Leading Digital Solutions Agency",
    description: "Transform your business with professional web development, software solutions, and digital marketing services.",
    url: "https://www.codefixerz.com",
    images: ["/images/og-image.png"],
  }
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CareersSection />
      <ContactSection />
    </>
  );
}
