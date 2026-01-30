"use client";

import { motion } from "framer-motion";
import { Monitor, Code, Bot, Megaphone, Share2, Map, Palette, Users, ArrowUpRight } from "lucide-react";

const services = [
    {
        title: "Website Development",
        description: "Responsive, high-performance websites tailored to your brand identity. We build scalable solutions that grow with your business.",
        icon: Monitor,
        color: "from-blue-500 to-cyan-500",
        shadow: "shadow-blue-500/20"
    },
    {
        title: "Software Development",
        description: "Custom software solutions to streamline your business operations. Robust, secure, and efficient architectures.",
        icon: Code,
        color: "from-purple-500 to-pink-500",
        shadow: "shadow-purple-500/20"
    },
    {
        title: "Automation Software",
        description: "Automate repetitive tasks and increase efficiency with our bots and tools. Save time and reduce operational costs.",
        icon: Bot,
        color: "from-emerald-500 to-green-500",
        shadow: "shadow-emerald-500/20"
    },
    {
        title: "Social Media Mgmt",
        description: "Engaging content and management for all your social media platforms. Build a loyal community a round your brand.",
        icon: Share2,
        color: "from-pink-500 to-rose-500",
        shadow: "shadow-pink-500/20"
    },
    {
        title: "Graphic Design",
        description: "Stunning visuals and branding materials that captivate your audience. Consistent design language across all touchpoints.",
        icon: Palette,
        color: "from-indigo-500 to-blue-500",
        shadow: "shadow-indigo-500/20"
    },


    {
        title: "Digital Marketing",
        description: "Strategic marketing campaigns to boost your online presence. Data-driven approaches to maximize ROI and engagement.",
        icon: Megaphone,
        color: "from-orange-500 to-red-500",
        shadow: "shadow-orange-500/20"
    },

];

const Services = ({ limit }: { limit?: number }) => {
    const displayServices = limit ? services.slice(0, limit) : services;

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--primary)]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-[var(--heading)] mb-6 tracking-tight"
                    >
                        Transforming Ideas <br className="hidden md:block" />
                        Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">Digital Reality</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayServices.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative p-8 h-full rounded-[2rem] bg-[#121212]/80 backdrop-blur-xl border border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col"
                        >
                            {/* Hover Gradient Background */}
                            <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                            {/* Inner Glow Border effect */}
                            <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/5 group-hover:ring-white/10 transition-all duration-500" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-8 flex justify-between items-start">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-[1px] shadow-lg ${service.shadow} group-hover:shadow-[0_0_30px_-5px_var(--primary)] transition-all duration-500 group-hover:scale-110`}>
                                        <div className="w-full h-full rounded-2xl bg-[#1a1a1a] flex items-center justify-center">
                                            <service.icon className="w-8 h-8 text-white relative z-10" />
                                        </div>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                        <ArrowUpRight className="w-5 h-5 text-white" />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-[var(--heading)] mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-[var(--muted)] text-base leading-relaxed mb-6 group-hover:text-[var(--text)] transition-colors duration-300 flex-grow">
                                    {service.description}
                                </p>

                                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
