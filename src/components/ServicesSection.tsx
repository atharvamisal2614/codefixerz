"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineGlobeAlt,
  HiOutlineCodeBracket,
  HiOutlineShoppingCart,
  HiOutlineShare,
  HiOutlinePresentationChartBar,
  HiOutlineSwatch,
  HiArrowRight,
} from "react-icons/hi2";

const ServicesSection = () => {
  const services = [
    {
      title: "Website Development",
      description: "Custom, responsive, and high-performance websites built with the latest technologies.",
      icon: <HiOutlineGlobeAlt />,
    },
    {
      title: "Software Development",
      description: "Tailor-made software solutions to automate and streamline your business processes.",
      icon: <HiOutlineCodeBracket />,
    },
    {
      title: "E-Commerce Solutions",
      description: "Complete online store setups with secure payments and seamless user experiences.",
      icon: <HiOutlineShoppingCart />,
    },
    {
      title: "Digital Marketing",
      description: "Strategic marketing campaigns to increase your brand visibility and drive sales.",
      icon: <HiOutlineShare />,
    },
    {
      title: "SEO & SMO Services",
      description: "Optimize your online presence and engage with your audience on social media.",
      icon: <HiOutlinePresentationChartBar />,
    },
    {
      title: "Graphics & UI/UX Design",
      description: "Beautiful and intuitive designs that provide a premium experience for your users.",
      icon: <HiOutlineSwatch />,
    },
  ];

  return (
    <section className="py-8 sm:py-16 lg:py-8 bg-white relative overflow-hidden">
      <div className="px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto lg:mx-0 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col text-center lg:text-left items-center lg:items-start"
          >
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full mb-6" style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}>
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                Our Expertise
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 !text-black" style={{ color: '#000000' }}>
              Solutions That Drive <br className="hidden sm:block" />
              <span className="text-primary">Business Growth</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              We offer end-to-end digital services tailored to your business needs.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group bg-white rounded-3xl p-6 sm:p-8 border border-blue-200 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-50/80 text-primary flex items-center justify-center text-3xl group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
                <button className="w-10 h-10 rounded-full border border-blue-200 flex items-center justify-center text-primary transition-all duration-300">
                  <HiArrowRight className="text-lg" />
                </button>
              </div>

              <h3 className="text-[1.15rem] sm:text-xl font-bold mb-3 !text-black" style={{ color: '#000000' }}>
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-[13px] sm:text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
