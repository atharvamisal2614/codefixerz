"use client";

import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-[var(--heading)] mb-6"
                    >
                        Get In <span className="text-[var(--primary)]">Touch</span>
                    </motion.h1>
                    <p className="text-xl text-[var(--text)] max-w-2xl mx-auto">
                        Have a project in mind? We'd love to hear from you. Let's build something amazing together.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="p-8 rounded-3xl bg-[var(--card)] border border-[var(--primary)]/10 hover:border-[var(--primary)]/30 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-[var(--heading)] mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                                        <Mail className="text-[var(--primary)] w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[var(--heading)]">Email Us</p>
                                        <a href="mailto:enquiry@codefixerz.com" className="text-[var(--text)]">enquiry@codefixerz.com</a><br/>
                                        <a href="mailto:hr@codefixerz.com" className="text-[var(--text)]">hr@codefixerz.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                                        <Phone className="text-[var(--primary)] w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[var(--heading)]">Call Us</p>
                                        <a href="tel:+919529926673" className="text-[var(--text)]">+91 95299 26673</a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                                        <MapPin className="text-[var(--primary)] w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[var(--heading)]">Visit Us</p>
                                        <p className="text-[var(--text)]">5405, Lonar Lane, Near Atharva Classes, Ahilyanager, Maharashtra, 414001</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                                        <Clock className="text-[var(--primary)] w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[var(--heading)]">Business Hours</p>
                                        <p className="text-[var(--text)]">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-3xl bg-gradient-to-br from-[var(--primary)]/20 to-purple-600/20 border border-[var(--primary)]/20">
                            <h3 className="text-xl font-bold text-[var(--heading)] mb-2">Ready to start?</h3>
                            <p className="text-[var(--text)]">
                                Our team is ready to analyze your requirements and provide the best solution for your business.
                            </p>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
