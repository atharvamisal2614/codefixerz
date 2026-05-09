import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.codefixerz.com'),
  title: {
    default: "CodeFixerz | Expert Web Development & Innovative Digital Solutions",
    template: "%s | CodeFixerz"
  },
  description: "CodeFixerz is a leading digital agency specializing in high-performance web development, custom software engineering, and strategic digital marketing. We help brands like yours grow and innovate.",
  keywords: [
    "Codefix",
    "Codefixer",
    "Codefixers",
    "Codefixerz",
    "Web Development",
    "Software Development",
    "Automation Services",
    "Digital Marketing",
    "SEO Services",
    "Ahilyanagar Tech Agency",
    "Custom Software Solutions",
    "Mobile App Development",
    "UI/UX Design",
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
    title: "CodeFixerz | Expert Web Development & Digital Solutions",
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
    title: "CodeFixerz | Expert Web Development & Digital Solutions",
    description: "Transform your business with professional web development, software solutions, and digital marketing services.",
    images: ["/images/twitter-image.png"],
    creator: "@codefixerz",
  },
  alternates: {
    canonical: "https://www.codefixerz.com",
  },
  verification: {
    google: "your-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "CodeFixerz",
    "image": "https://www.codefixerz.com/images/favicon-logo.png",
    "url": "https://www.codefixerz.com",
    "telephone": "+91-95299-26673",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5405, Lonar Lane, Near Atharva Classes",
      "addressLocality": "Ahilyanagar",
      "addressRegion": "Maharashtra",
      "postalCode": "414001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.0948,
      "longitude": 74.7480
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/codefixerz",
      "https://twitter.com/codefixerz",
      "https://www.instagram.com/codefixerz"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
