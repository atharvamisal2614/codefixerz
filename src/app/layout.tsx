import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.codefixerz.com'),
  title: {
    default: "CodeFixerz | Web Development & Digital Solutions",
    template: "%s | CodeFixerz"
  },
  description: "CodeFixerz offers professional Website Development, Software Development, Automation, Digital Marketing, and HR services to elevate your business. Transform your digital presence with our expert team.",
  keywords: [
    "Web Development",
    "Software Development",
    "Automation Services",
    "Digital Marketing",
    "SEO Services",
    "Recruitment Services",
    "CodeFixerz",
    "Custom Software Solutions",
    "Mobile App Development",
    "E-commerce Development",
    "UI/UX Design",
    "Cloud Solutions",
    "API Development",
    "Full Stack Development"
  ],
  authors: [{ name: "CodeFixerz Team" }],
  creator: "CodeFixerz",
  publisher: "CodeFixerz",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/images/favicon-logo.png",
    apple: "/images/favicon-logo.png",
    shortcut: "/images/favicon-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.codefixerz.com",
    siteName: "CodeFixerz",
    title: "CodeFixerz | Web Development & Digital Solutions",
    description: "Transform your business with professional web development, software solutions, and digital marketing services. Expert team delivering innovative solutions.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodeFixerz - Web Development & Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeFixerz | Web Development & Digital Solutions",
    description: "Transform your business with professional web development, software solutions, and digital marketing services.",
    images: ["/images/twitter-image.png"],
    creator: "@codefixerz",
  },
  alternates: {
    canonical: "https://www.codefixerz.com",
  },
  verification: {
    google: "your-google-site-verification-code",
    // Add other verification codes as needed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CodeFixerz',
    url: 'https://www.codefixerz.com',
    logo: 'https://www.codefixerz.com/images/favicon-logo.png',
    description: 'Professional web development, software solutions, and digital marketing services.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5405, Lonar Lane, Near Atharva Classes',
      addressLocality: 'Ahilyanager',
      addressRegion: 'Maharashtra',
      postalCode: '414001',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-95299-26673',
      contactType: 'customer service',
      email: 'webagency2614@gmail.com',
      availableLanguage: ['English', 'Hindi']
    },
    sameAs: [
      'https://www.linkedin.com/company/codefixerz',
      'https://www.instagram.com/codefixerz',
      'https://twitter.com/codefixerz'
    ],
    foundingDate: '2019',
    areaServed: 'Worldwide',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '50'
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased selection:bg-[#3B82F6] selection:text-white`}>
        <SmoothScroll />
        <Navbar />
        <main className="min-h-screen pt-20">

          {children}


        </main>
        <Footer />
      </body>
    </html>
  );
}
