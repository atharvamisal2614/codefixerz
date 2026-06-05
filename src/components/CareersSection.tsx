"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  HiOutlineComputerDesktop,
  HiOutlineServerStack,
  HiOutlinePencil,
  HiOutlineMegaphone,
  HiOutlineArrowUpRight,
  HiPaperAirplane
} from "react-icons/hi2";

const CareersSection = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    position: "",
  });
  const [resume, setResume] = React.useState<File | null>(null);
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.position || !resume) {
      setErrorMessage("Please fill in all fields and upload a resume.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("position", formData.position);
      data.append("resume", resume);

      const res = await fetch("/api/careers", {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        throw new Error("Failed to send application.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", position: "" });
      setResume(null);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  const positions = [
    {
      role: "Frontend Developer",
      stack: "React.js, Next.js, Tailwind CSS",
      type: "Full Time",
      location: "Remote",
      icon: <HiOutlineComputerDesktop />,
    },
    {
      role: "Backend Developer",
      stack: "Node.js, Express, MongoDB",
      type: "Full Time",
      location: "Remote",
      icon: <HiOutlineServerStack />,
    },
    {
      role: "UI/UX Designer",
      stack: "Figma, Adobe XD, Photoshop",
      type: "Full Time",
      location: "On-site",
      icon: <HiOutlinePencil />,
    },
    {
      role: "Digital Marketing Specialist",
      stack: "SEO, SEM, Social Media",
      type: "Full Time",
      location: "Remote",
      icon: <HiOutlineMegaphone />,
    },
    {
      role: "SEO Specialist",
      stack: "Google SEO, SMO, Local SEO",
      type: "Full Time",
      location: "Remote",
      icon: <HiOutlineComputerDesktop />,
    },
  ];

  return (
    <section className="py-8 sm:py-16 bg-white relative overflow-hidden">
      <div className="px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* ═══ Top Header Section ═══ */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-stretch mb-12 sm:mb-20">

          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col text-center lg:text-left justify-center h-full"
          >
            {/* Badge */}
            <div
              className="inline-flex items-center w-fit self-center lg:self-start px-3.5 py-1.5 rounded-full mb-6"
              style={{
                background: "rgba(59,130,246,0.1)",
                border: "1px solid rgba(59,130,246,0.2)",
              }}
            >
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                Careers
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 !text-black" style={{ color: '#000000' }}>
              Build Your Career <br className="hidden sm:block" />
              With <span className="text-primary">Codefixerz</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
              We are always looking for talented, passionate, and curious people to join our growing team.
            </p>
          </motion.div>

          {/* Right: Office Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-[16/9] lg:aspect-auto lg:h-full min-h-[300px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/codefixerz-careers-office.png"
              alt="Codefixerz Office"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* ═══ Bottom Section: Positions & Form ═══ */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left: Open Positions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8"
          >
            <h3 className="text-2xl font-bold mb-6 !text-black" style={{ color: '#000000' }}>Open Positions</h3>
            <div className="flex flex-col gap-3">
              {positions.map((pos, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-2xl border border-gray-100 bg-white hover:border-blue-100 hover:shadow-md transition-all duration-300 gap-4 group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-700 text-2xl border border-gray-100 flex-shrink-0 group-hover:bg-blue-50 group-hover:text-primary group-hover:border-blue-100 transition-colors">
                      {pos.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[15px] !text-black" style={{ color: '#000000' }}>{pos.role}</h4>
                      <div className="flex items-center gap-3 text-gray-500 text-[12px] mt-1 font-medium">
                        <span>{pos.type}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                        <span>{pos.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-primary text-sm font-semibold group-hover:text-blue-700 transition-colors">
                      Apply Now &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-10"
          >
            <h3 className="text-2xl font-bold mb-6 !text-black" style={{ color: '#000000' }}>Submit Your Application</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm text-gray-900" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm text-gray-900" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">Position</label>
                <select name="position" value={formData.position} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm text-gray-900 bg-white">
                  <option value="">Select a position...</option>
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="Backend Developer">Backend Developer</option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="Digital Marketing">Digital Marketing Specialist</option>
                  <option value="Other">Other / Open Application</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">Upload Resume</label>
                <input type="file" onChange={handleFileChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-primary hover:file:bg-blue-100" />
              </div>

              {status === "error" && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
              {status === "success" && <p className="text-green-500 text-sm mt-1">Application sent successfully!</p>}

              <button type="submit" disabled={status === "loading"} className="w-full py-4 mt-2 bg-primary text-white text-sm font-bold rounded-xl shadow-sm hover:shadow-md hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed">
                {status === "loading" ? "Sending..." : "Send Application"} <HiPaperAirplane className="text-lg group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
