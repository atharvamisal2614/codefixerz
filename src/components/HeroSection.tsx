"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  HiArrowRight,
  HiOutlineComputerDesktop,
  HiOutlineUserGroup,
  HiOutlineClock,
  HiOutlineTrophy
} from "react-icons/hi2";

const HeroSection = () => {
  const stats = [
    { label: "Projects Completed", value: "100+", icon: <HiOutlineComputerDesktop /> },
    { label: "Happy Clients", value: "50+", icon: <HiOutlineUserGroup /> },
    { label: "Years Experience", value: "5+", icon: <HiOutlineClock /> },
    { label: "Team Members", value: "20+", icon: <HiOutlineTrophy /> },
  ];

  return (
    <section className="py-12 lg:py-20 relative overflow-hidden bg-[#020617] text-white">

      {/* ── Background Glows ── */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10 flex-grow flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-12 lg:py-0">

          {/* ═══ LEFT — Content ═══ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tagline Badge */}

            {/* Main Title - Smaller, 2 lines with top padding */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8 tracking-tight pt-8 max-w-lg">
              We Build Digital Solutions <br />
              That Drive <span className="text-[#3B82F6]">Real Results</span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
              From powerful websites and software to result-driven marketing and
              social media management — we help businesses grow, innovate and
              scale in the digital world.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button className="px-7 py-3.5 hover:bg-[#1E40AF] bg-blue-700 text-white font-bold rounded-xl flex items-center gap-3 transition-all">
                Explore Services <HiArrowRight className="text-xl" />
              </button>
              <button className="px-7 py-3.5 bg-transparent border border-white/20 hover:bg-white/5 text-white font-bold rounded-xl flex items-center gap-3 transition-all">
                Get a Free Quote <HiArrowRight className="text-xl" />
              </button>
            </div>
          </motion.div>

          {/* ═══ RIGHT — Image & Floating Elements ═══ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Futuristic Laptop/Display Image */}
            <div className="relative w-full max-w-[550px] aspect-[4/3] flex items-center justify-center">
              <Image
                src="/images/codefixerz-home-bg.png"
                alt="Digital Interface"
                width={500}
                height={375}
                className="object-contain relative z-10"
              />

              {/* Floating UI Elements */}


              {/* Blue circular ring at base */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-blue-500/20 rounded-full blur-xl z-0" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-[2px] bg-blue-500/40 rounded-full z-0 shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
            </div>
          </motion.div>

        </div>

        {/* ═══ BOTTOM STATS BAR ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full mb-12 sm:mb-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl text-blue-400 flex-shrink-0">
                  {stat.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight">{stat.value}</span>
                  <span className="text-[10px] sm:text-xs font-medium text-gray-400 uppercase tracking-widest">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
