"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error("Failed to send message");

            setStatus("success");
        } catch (error) {
            console.error(error);
            setErrorMessage("Something went wrong. Please try again.");
            setStatus("error");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-panel p-8 md:p-10 rounded-[2rem] shadow-2xl backdrop-blur-xl"
        >
            <h3 className="text-2xl font-bold text-[var(--heading)] mb-6">Send us a Message</h3>

            {status === "success" ? (
                <div className="text-center py-10">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-[var(--heading)] mb-2">Message Sent!</h4>
                    <p className="text-[var(--text)]">We'll get back to you shortly.</p>
                    <button
                        onClick={() => setStatus("idle")}
                        className="mt-6 text-[var(--primary)] hover:underline"
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-[var(--muted)]">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--muted)]/20 text-[var(--heading)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all"
                                placeholder="Full Name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-[var(--muted)]">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--muted)]/20 text-[var(--heading)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all"
                                placeholder="example@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-[var(--muted)]">Subject</label>
                        <form className="hidden">
                            {/* honeypot */}
                            <input type="text" name="_honey" style={{ display: "none" }} />
                        </form>
                        <select
                            id="subject"
                            name="subject"
                            className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--muted)]/20 text-[var(--heading)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all"
                        >
                            <option value="General Enquiry">General Enquiry</option>
                            <option value="Identify Project">Website Development</option>
                            <option value="Software Development">Software Development</option>
                            <option value="Marketing">Digital Marketing</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-[var(--muted)]">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--muted)]/20 text-[var(--heading)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all resize-none"
                            placeholder="Tell us about your project..."
                        />
                    </div>

                    {status === "error" && (
                        <div className="flex items-center text-red-500 text-sm bg-red-500/10 p-3 rounded-lg">
                            <AlertCircle className="w-4 h-4 mr-2" />
                            {errorMessage}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full py-4 rounded-xl bg-[var(--primary)] text-white font-bold text-lg hover:bg-[var(--primary-hover)] hover:shadow-[0_0_20px_var(--primary)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {status === "submitting" ? (
                            <>Sending...</>
                        ) : (
                            <>
                                Send Message
                                <Send size={18} />
                            </>
                        )}
                    </button>
                </form>
            )}
        </motion.div>
    );
}
