import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CareersSection from "@/components/CareersSection";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Home - Transform Your Digital Presence",
  description: "CodeFixerz is your trusted partner for web development, software solutions, digital marketing, and automation services. We help businesses grow with innovative technology solutions.",
  keywords: [
    "web development agency",
    "software development company",
    "digital transformation",
    "custom software solutions",
    "digital marketing services",
    "business automation",
    "full-stack development"
  ],
  openGraph: {
    title: "Home - Transform Your Digital Presence | CodeFixerz",
    description: "Partner with CodeFixerz for innovative web development, software solutions, and digital marketing services that drive business growth.",
    url: "https://www.codefixerz.com",
    type: "website",
    images: [
      {
        url: "/images/og-home.png",
        width: 1200,
        height: 630,
        alt: "CodeFixerz Homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home - Transform Your Digital Presence | CodeFixerz",
    description: "Partner with CodeFixerz for innovative web development and digital solutions.",
  },
  alternates: {
    canonical: "https://www.codefixerz.com",
  },
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
