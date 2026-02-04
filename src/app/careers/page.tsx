import type { Metadata } from "next";
import CareersPageClient from "@/components/CareersPageClient";

export const metadata: Metadata = {
    title: "Careers - Join Our Team",
    description: "Join CodeFixerz and be part of a dynamic team shaping the future of digital solutions. We're hiring Frontend Developers, Backend Developers, UI/UX Designers, and Digital Marketing Specialists. Competitive benefits, remote work options, and growth opportunities.",
    keywords: [
        "careers at codefixerz",
        "web developer jobs",
        "software developer jobs",
        "frontend developer jobs",
        "backend developer jobs",
        "UI/UX designer jobs",
        "digital marketing jobs",
        "remote work opportunities",
        "tech jobs"
    ],
    openGraph: {
        title: "Careers - Join Our Team | CodeFixerz",
        description: "Join CodeFixerz and work on cutting-edge technologies. Multiple positions available with competitive benefits and growth opportunities.",
        url: "https://www.codefixerz.com/careers",
        type: "website",
        images: [
            {
                url: "/images/og-careers.png",
                width: 1200,
                height: 630,
                alt: "Careers at CodeFixerz",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Careers - Join Our Team | CodeFixerz",
        description: "Join CodeFixerz and work on cutting-edge technologies. We're hiring talented professionals.",
    },
    alternates: {
        canonical: "https://www.codefixerz.com/careers",
    },
};

export default function CareersPage() {
    return <CareersPageClient />;
}
