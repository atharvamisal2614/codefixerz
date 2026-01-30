import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeFixerz | Web Development & Digital Solutions",
  description: "CodeFixerz offers professional Website Development, Software Development, Automation, Digital Marketing, and HR services to elevate your business.",
  keywords: "Web Development, Software Development, Automation, Digital Marketing, SEO, Recruitment, CodeFixerz",
 icons: {
    icon: "/images/favicon-logo.png",
    apple: "/images/favicon-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
