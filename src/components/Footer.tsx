"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { HiOutlineArrowUpRight, HiOutlineMapPin, HiOutlineEnvelope, HiOutlinePhone, HiArrowRight } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="relative bg-[#020617] pt-20 pb-10 overflow-hidden text-white">

      {/* ── Background Glows ── */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">


        {/* ═══ Main Footer Links ═══ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand Col */}
          <div className="flex flex-col lg:pr-8">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/favicon-logo.png"
                  alt="Codefixerz Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Codefixerz
              </span>
            </Link>
            <p className="text-blue-100/60 text-sm leading-relaxed mb-8 max-w-sm">
              A premier digital agency specializing in high-performance web development, custom software, and data-driven marketing.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/codefixerz" },
                { icon: <FaWhatsapp />, href: "https://wa.me/9529926673" },
                { icon: <FaFacebookF />, href: "https://www.facebook.com/Codefixerz" },
                { icon: <FaInstagram />, href: "https://www.instagram.com/codefixerz" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-blue-100/80 hover:bg-primary hover:border-primary hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-[16px] mb-6 text-white tracking-wide">Our Services</h4>
            <ul className="flex flex-col gap-4">
              {[
                "Custom Software Development",
                "Web & App Design",
                "E-Commerce Solutions",
                "Digital Marketing & SEO",
                "Business Automation"
              ].map((service, i) => (
                <li key={i}>
                  <Link href="#" className="text-blue-100/60 text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-[16px] mb-6 text-white tracking-wide">Company</h4>
            <ul className="flex flex-col gap-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Work", href: "/services" },
                { name: "Careers", href: "/careers" },
                { name: "Contact Us", href: "/contact" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-blue-100/60 text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-[16px] mb-6 text-white tracking-wide">Get in Touch</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3 text-blue-100/60 text-sm">
                <HiOutlineMapPin className="text-xl text-primary flex-shrink-0" />
                <span className="leading-relaxed">5405, Lonar Lane, Near Atharva Classes, Ahilyanagar, IN 414001</span>
              </li>
              <li className="flex items-center gap-3 text-blue-100/60 text-sm">
                <HiOutlinePhone className="text-xl text-primary flex-shrink-0" />
                <span>+91-95299-26673</span>
              </li>
              <li className="flex items-start gap-3 text-blue-100/60 text-sm">
                <HiOutlineEnvelope className="text-xl text-primary flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:info@codefixerz.com" className="hover:text-white transition-colors">info@codefixerz.com</a>
                  <a href="mailto:hr@codefixerz.com" className="hover:text-white transition-colors">hr@codefixerz.com</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* ═══ Bottom Copyright Strip ═══ */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-blue-100/50 text-sm">
            © {new Date().getFullYear()} Codefixerz. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-blue-100/50 text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-blue-100/50 text-sm hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="text-blue-100/50 text-sm hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
