"use client";

import CareersForm from "@/components/CareersForm";
import { motion } from "framer-motion";
import { Briefcase, Zap, Coffee, LaptopMinimal} from "lucide-react";

export default function CareersPage() {
    const benefits = [
        { icon: Zap, title: "Innovation", desc: "Work on cutting-edge technologies." },
        { icon: Briefcase, title: "Growth", desc: "Clear career progression paths." },
        { icon: Coffee, title: "Culture", desc: "Flexible work hours and fun environment." },
        { icon: LaptopMinimal, title: "Work From Home", desc: "Comprehensive remote work opportunities." }
    ];

    return (
        <div className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] font-semibold mb-4"
                    >
                        We're Hiring!
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-[var(--heading)] mb-6"
                    >
                        Join the <span className="text-[var(--primary)]">CodeFixerz</span> Team
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-[var(--text)] max-w-2xl mx-auto"
                    >
                        Be part of a dynamic team that is shaping the future of digital solutions.
                    </motion.p>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {benefits.map((b, i) => (
                        <motion.div
                            key={b.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--primary)]/10 text-center hover:border-[var(--primary)] transition-all"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center mx-auto mb-4">
                                <b.icon size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-[var(--heading)] mb-2">{b.title}</h3>
                            <p className="text-sm text-[var(--text)]">{b.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Content */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[var(--heading)]">Open Positions</h2>
                        <div className="space-y-4">
                            {['Frontend Developer', 'Backend Developer', 'UI/UX Designer', 'Digital Marketing Specialist'].map((job) => (
                                <div key={job} className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--muted)]/20 hover:border-[var(--primary)]/50 transition-all group cursor-pointer">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-xl font-bold text-[var(--heading)] group-hover:text-[var(--primary)] transition-colors">{job}</h3>
                                        <span className="px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm">Full Time</span>
                                    </div>
                                    <p className="mt-2 text-[var(--muted)]">Remote / On-site</p>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-500/30">
                            <p className="text-[var(--text)]">
                                Don't see your role? Send us your resume anyway! We are always looking for talented individuals.
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <CareersForm />
                </div>
            </div>
        </div>
    );
}
