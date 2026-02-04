import type { Metadata } from "next";
import ContactPageClient from "@/components/ContactPageClient";

export const metadata: Metadata = {
    title: "Contact Us - Get in Touch",
    description: "Contact CodeFixerz for web development, software solutions, and digital marketing services. Reach us via email at enquiry@codefixerz.com or call +91 95299 26673. We're located in Ahilyanager, Maharashtra. Business hours: Mon-Fri, 9AM-6PM.",
    keywords: [
        "contact codefixerz",
        "web development contact",
        "software development inquiry",
        "digital marketing contact",
        "get quote",
        "business contact",
        "customer support"
    ],
    openGraph: {
        title: "Contact Us - Get in Touch | CodeFixerz",
        description: "Have a project in mind? Contact CodeFixerz for professional web development and digital solutions. We'd love to hear from you.",
        url: "https://www.codefixerz.com/contact",
        type: "website",
        images: [
            {
                url: "/images/og-contact.png",
                width: 1200,
                height: 630,
                alt: "Contact CodeFixerz",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us - Get in Touch | CodeFixerz",
        description: "Have a project in mind? Contact CodeFixerz for professional web development and digital solutions.",
    },
    alternates: {
        canonical: "https://www.codefixerz.com/contact",
    },
};

export default function ContactPage() {
    return <ContactPageClient />;
}
