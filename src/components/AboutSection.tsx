"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  HiOutlineLightBulb,
  HiOutlineTrophy,
  HiOutlineUserGroup,
  HiOutlineRocketLaunch
} from "react-icons/hi2";

const AboutSection = () => {
  const coreValues = [
    { title: "Innovation", icon: <HiOutlineLightBulb /> },
    { title: "Quality", icon: <HiOutlineTrophy /> },
    { title: "Transparency", icon: <HiOutlineUserGroup /> },
    { title: "Growth", icon: <HiOutlineRocketLaunch /> },
  ];

  return (
    <section className="py-8 sm:py-16 lg:py-12 relative overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* ═══ Main Section Flex/Grid ═══ */}
        <div className="flex flex-col lg:flex-row gap-x-12 lg:gap-x-20 gap-y-8 items-start mb-16 sm:mb-20">

          {/* LEFT COLUMN: Heading & Paragraphs (and Image on Mobile) */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {/* 1. Header */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <span className="text-[10px] font-bold tracking-widest uppercase text-blue-600">
                  About Us
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 !text-black" style={{ color: '#000000' }}>
                We Are More Than <br className="hidden sm:block" />
                Just a <span className="text-primary">Digital Agency</span>
              </h2>
            </motion.div>

            {/* 2. Image (Mobile Only: Appears after heading) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:hidden mb-8 relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/codefixerz-about-us-team.png"
                alt="Our Team"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* 3. Description (Appears after heading on desktop, after image on mobile) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-6 text-gray-600 text-base lg:text-lg leading-relaxed max-w-lg"
            >
              <p>
                CodeFixerz is a team of passionate developers, designers, marketers, and strategists
                dedicated to delivering high-quality digital solutions.
              </p>
              <p>
                Our mission is simple — to help businesses grow, scale, and succeed
                in the digital era.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Image (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block w-1/2 relative sticky top-32"
          >
            <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image
                src="/images/codefixerz-about-us-team.png"
                alt="Our Team"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* ═══ Bottom Section: 4 Cards in Row ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {coreValues.map((val, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-center p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-primary flex items-center justify-center text-3xl mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                {val.icon}
              </div>
              <h4 className="font-bold text-base sm:text-lg !text-black" style={{ color: '#000000' }}>{val.title}</h4>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
