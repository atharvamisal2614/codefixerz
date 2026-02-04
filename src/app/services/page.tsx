import type { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
    title: "Our Services - Web Development & Digital Solutions",
    description: "Explore our comprehensive range of services: Website Development, Software Development, Automation, Digital Marketing, Social Media Management, and Graphic Design. Expert solutions tailored to your business needs.",
    keywords: [
        "web development services",
        "software development",
        "automation solutions",
        "digital marketing",
        "social media management",
        "graphic design",
        "custom software development",
        "responsive website design",
        "SEO services",
        "business automation"
    ],
    openGraph: {
        title: "Our Services - Web Development & Digital Solutions | CodeFixerz",
        description: "Comprehensive digital services including web development, software solutions, automation, and digital marketing to transform your business.",
        url: "https://www.codefixerz.com/services",
        type: "website",
        images: [
            {
                url: "/images/og-services.png",
                width: 1200,
                height: 630,
                alt: "CodeFixerz Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Services - Web Development & Digital Solutions | CodeFixerz",
        description: "Transform your business with our expert web development, software, and digital marketing services.",
    },
    alternates: {
        canonical: "https://www.codefixerz.com/services",
    },
};

export default function ServicesPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'CodeFixerz Services',
        description: 'Comprehensive digital services including web development, software solutions, and digital marketing.',
        provider: {
            '@type': 'Organization',
            name: 'CodeFixerz',
            url: 'https://www.codefixerz.com'
        },
        areaServed: 'Worldwide',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Digital Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Website Development',
                        description: 'Responsive, high-performance websites tailored to your brand identity.'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Software Development',
                        description: 'Custom software solutions to streamline your business operations.'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Automation Software',
                        description: 'Automate repetitive tasks and increase efficiency with our bots and tools.'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Digital Marketing',
                        description: 'Strategic marketing campaigns to boost your online presence.'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Social Media Management',
                        description: 'Engaging content and management for all your social media platforms.'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Graphic Design',
                        description: 'Stunning visuals and branding materials that captivate your audience.'
                    }
                }
            ]
        },
        breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://www.codefixerz.com'
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Services',
                    item: 'https://www.codefixerz.com/services'
                }
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="pt-10">
                <Services />
            </div>
        </>
    );
}
