"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt3, HiX, HiPhone } from "react-icons/hi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "py-4 bg-background/80 backdrop-blur-md" : "py-6 bg-transparent"
        }`}
    >
      <div className="container-padding flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10">
            <Image
              src="/images/favicon-logo.png"
              alt="CodeFixerz Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">
            Codefixerz
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="tel:+919529926673"
            className="px-6 py-2.5 bg-[#1E40AF] hover:bg-blue-700 text-white text-md font-semibold rounded-xl transition-all hover:scale-105 active:scale-95  flex items-center gap-2"
          >
            <HiPhone className="text-lg" />
            95299 26673
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#020617] z-[60] md:hidden transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Background Glows */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[70%] h-[70%] bg-blue-600/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[5%] w-[70%] h-[70%] bg-blue-500/15 rounded-full blur-[120px]" />
        </div>

        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-white text-4xl p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all z-50 shadow-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <HiX />
        </button>

        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-3xl font-bold text-white hover:text-primary transition-colors tracking-tight"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="tel:+919529926673"
            className="mt-6 px-10 py-4 hover:bg-[#1E40AF] bg-blue-700 text-white text-xl font-bold rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all active:scale-95 flex items-center gap-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <HiPhone className="text-2xl" />
            9529926673
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
