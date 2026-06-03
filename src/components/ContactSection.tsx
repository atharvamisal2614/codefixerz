"use client";

import React from "react";
import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiPaperAirplane
} from "react-icons/hi2";
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="bg-white border-t border-gray-100">
      <div className="py-8 sm:py-16 lg:py-8 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left: Contact Info */}
          <div className="flex flex-col">
            {/* Header Content - Centered on Mobile */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full mb-6" style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}>
                <span className="text-xs font-bold tracking-widest uppercase text-primary">
                  Contact Us
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 !text-black" style={{ color: '#000000' }}>
                Let&apos;s Start a Project <br className="hidden sm:block" />
                <span className="text-primary">Together</span>
              </h2>

              {/* Subtext */}
              <p className="text-gray-600 text-base sm:text-lg mb-10 max-w-md leading-relaxed">
                Have a project in mind or want to discuss how we can help your business grow? We&apos;d love to hear from you.
              </p>
            </div>

            {/* Contact Details - Always Left Aligned */}
            <div className="flex flex-col items-start">
              <div className="flex flex-col gap-6 mb-12 w-full">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-primary flex items-center justify-center text-xl flex-shrink-0">
                  <HiOutlinePhone />
                </div>
                <div>
                  <h4 className="font-bold text-[15px] !text-black" style={{ color: '#000000' }}>Phone</h4>
                  <p className="text-gray-600 text-sm mt-1">+91-95299-26673</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-primary flex items-center justify-center text-xl flex-shrink-0">
                  <HiOutlineEnvelope />
                </div>
                <div>
                  <h4 className="font-bold text-[15px] !text-black" style={{ color: '#000000' }}>Email</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    info@codefixerz.com<br />
                    hr@codefixerz.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-primary flex items-center justify-center text-xl flex-shrink-0">
                  <HiOutlineMapPin />
                </div>
                <div>
                  <h4 className="font-bold text-[15px] !text-black" style={{ color: '#000000' }}>Location</h4>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed max-w-[250px]">
                    5405, Lonar Lane, Near Atharva Classes, Ahilyanagar, Maharashtra, 414001, IN
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-center lg:items-start w-full">
              <h4 className="font-bold text-[15px] mb-4 !text-black" style={{ color: '#000000' }}>Follow Us</h4>
              <div className="flex items-center justify-center lg:justify-start gap-3 w-full">
                {[
                  { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/codefixerz" },
                  { icon: <FaTwitter />, href: "https://twitter.com/codefixerz" },
                  { icon: <FaFacebookF />, href: "#" },
                  { icon: <FaInstagram />, href: "https://www.instagram.com/codefixerz" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

          {/* Right: Message Form & Map */}
          <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6 sm:p-10">
            <h3 className="text-2xl font-bold mb-8 !text-black" style={{ color: '#000000' }}>Send Us a Message</h3>

            <form className="flex flex-col gap-4 mb-8">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm resize-none"
              />

              <button
                type="button"
                className="w-full py-4 mt-2 bg-primary text-white text-sm font-bold rounded-xl shadow-sm hover:shadow-md hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Send Message
                <HiPaperAirplane className="text-lg group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* Map Area */}
            <div className="relative w-full h-[200px] sm:h-[250px] rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
              {/* <iframe
                src="https://maps.app.goo.gl/L5j9CZiTtUoRj8kz5"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              /> */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.2232966528227!2d74.73545647466571!3d19.09785755128704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb17aff85990f%3A0x39863fab9443a03e!2sCodefixerz!5e0!3m2!1sen!2sin!4v1780470370943!5m2!1sen!2sin" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
