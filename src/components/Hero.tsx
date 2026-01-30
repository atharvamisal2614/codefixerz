"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Cpu, Globe, Sparkles } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--primary)]/20 rounded-full blur-[128px] animate-[pulse_6s_ease-in-out_infinite]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[var(--accent)]/15 rounded-full blur-[128px] animate-[pulse_8s_ease-in-out_infinite_1s]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-[var(--heading)] text-sm font-medium mb-10 backdrop-blur-md hover:bg-white/10 transition-colors cursor-pointer"
                >
                    <Sparkles className="w-4 h-4 text-[var(--accent)]" />
                    <span>Next-Gen Digital Innovation</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-6xl md:text-8xl font-black text-[var(--heading)] tracking-tighter mb-8 leading-[1.1]"
                >
                    We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--primary)] bg-[length:200%_auto] animate-shimmer">The Future</span> <br />
                    Of Your Business
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-[var(--text)] max-w-3xl mx-auto mb-12 leading-relaxed font-light"
                >
                    From high-performance websites to AI-driven automation.
                    We provide end-to-end digital services to elevate your brand to the global stage.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto px-10 py-5 rounded-full bg-[var(--primary)] text-white font-bold text-lg hover:bg-[var(--primary-hover)] hover:shadow-[0_0_40px_-10px_var(--primary)] transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden"
                    >
                        <span className="relative z-10">Start Your Project</span>
                        <ArrowRight className="group-hover:translate-x-1 transition-transform relative z-10" />
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </Link>
                    <Link
                        href="/services"
                        className="w-full sm:w-auto px-10 py-5 rounded-full bg-white/5 border border-white/10 text-[var(--heading)] font-semibold text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
                    >
                        Explore Services
                    </Link>
                </motion.div>

                {/* Floating Elements with improved parallax feel (simulated) */}
                <div className="absolute top-1/4 left-10 hidden xl:block opacity-30 hover:opacity-100 transition-opacity duration-700">
                    <motion.div
                        animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
                    >
                        <Code size={40} className="text-[var(--primary)]" />
                    </motion.div>
                </div>
                <div className="absolute bottom-1/3 right-10 hidden xl:block opacity-30 hover:opacity-100 transition-opacity duration-700">
                    <motion.div
                        animate={{ y: [0, 40, 0], rotate: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
                        className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
                    >
                        <Cpu size={40} className="text-[var(--accent)]" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
