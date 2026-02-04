import type { Metadata } from "next";
import AboutPageClient from "@/components/AboutPageClient";

export const metadata: Metadata = {
    title: "About Us - Our Mission & Vision",
    description: "Learn about CodeFixerz - a team of passionate developers, designers, and strategists dedicated to transforming businesses through technology. Over 100 projects completed with 50+ happy clients.",
    keywords: [
        "about codefixerz",
        "web development team",
        "software development company",
        "digital agency mission",
        "technology solutions provider",
        "professional developers"
    ],
    openGraph: {
        title: "About Us - Our Mission & Vision | CodeFixerz",
        description: "Discover CodeFixerz - transforming businesses through innovative technology solutions with 5+ years of experience.",
        url: "https://www.codefixerz.com/about",
        type: "website",
        images: [
            {
                url: "/images/og-about.png",
                width: 1200,
                height: 630,
                alt: "About CodeFixerz",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us - Our Mission & Vision | CodeFixerz",
        description: "Discover CodeFixerz - transforming businesses through innovative technology solutions.",
    },
    alternates: {
        canonical: "https://www.codefixerz.com/about",
    },
};

export default function AboutPage() {
    return <AboutPageClient />;
}
