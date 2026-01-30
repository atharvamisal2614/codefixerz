"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Users, Trophy } from "lucide-react";

export default function AboutPage() {
    const stats = [
        { label: "Projects Completed", value: "100+", icon: Trophy },
        { label: "Happy Clients", value: "50+", icon: Users },
        { label: "Years Experience", value: "5+", icon: Target },
        { label: "Team Members", value: "15+", icon: Lightbulb },
    ];

    return (
        <div className="py-20">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-[var(--heading)] mb-6">
                        About <span className="text-[var(--primary)]">CodeFixerz</span>
                    </h1>
                    <p className="text-xl text-[var(--text)] max-w-3xl mx-auto leading-relaxed">
                        We are a team of passionate developers, designers, and strategists dedicated to transforming businesses through technology.
                    </p>
                </motion.div>
            </div>

            {/* Mission & Vision */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-[var(--card)] border border-[var(--primary)]/10 hover:border-[var(--primary)]/30 transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-full bg-[var(--primary)]/20 flex items-center justify-center mb-6 text-[var(--primary)]">
                            <Target size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--heading)] mb-4">Our Mission</h2>
                        <p className="text-[var(--text)] leading-relaxed">
                            To empower businesses by providing innovative, scalable, and affordable digital solutions. We strive to be the bridge between complex technology and business success, ensuring our clients stay ahead in the digital curve.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-8 rounded-3xl bg-[var(--card)] border border-[var(--primary)]/10 hover:border-[var(--primary)]/30 transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-6 text-purple-500">
                            <Lightbulb size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--heading)] mb-4">Our Vision</h2>
                        <p className="text-[var(--text)] leading-relaxed">
                            To become a global leader in digital transformation, recognized for our commitment to quality, creativity, and client satisfaction. We envision a world where every business, big or small, has the tools to succeed online.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-[var(--card)]/50 py-16 border-y border-[var(--muted)]/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <stat.icon className="w-8 h-8 mx-auto text-[var(--primary)] mb-4" />
                                <div className="text-4xl font-bold text-[var(--heading)] mb-2">{stat.value}</div>
                                <div className="text-[var(--muted)]">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
