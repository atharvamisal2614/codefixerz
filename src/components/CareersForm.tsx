"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Upload } from "lucide-react";

export default function CareersForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [fileName, setFileName] = useState("");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.currentTarget);

        try {
            const res = await fetch("/api/careers", {
                method: "POST",
                body: formData, // Send as FormData for file upload
            });

            if (!res.ok) throw new Error("Failed to submit application");

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
            className="bg-[var(--card)] p-8 rounded-3xl border border-[var(--primary)]/20 shadow-xl"
        >
            <h3 className="text-2xl font-bold text-[var(--heading)] mb-6">Apply Now</h3>

            {status === "success" ? (
                <div className="text-center py-10">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-[var(--heading)] mb-2">Application Received!</h4>
                    <p className="text-[var(--text)]">Our HR team will review your resume and contact you soon.</p>
                    <button
                        onClick={() => {
                            setStatus("idle");
                            setFileName("");
                        }}
                        className="mt-6 text-[var(--primary)] hover:underline"
                    >
                        Submit another application
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
                        <label htmlFor="phone" className="text-sm font-medium text-[var(--muted)]">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--muted)]/20 text-[var(--heading)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all"
                            placeholder="+91 9876543210"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="position" className="text-sm font-medium text-[var(--muted)]">Position Applied For</label>
                        <select
                            id="position"
                            name="position"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--muted)]/20 text-[var(--heading)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all"
                        >
                            <option value="" disabled selected>Select a position</option>
                            <option value="Frontend Developer">Frontend Developer</option>
                            <option value="Backend Developer">Backend Developer</option>
                            <option value="UI/UX Designer">UI/UX Designer</option>
                            <option value="Digital Marketing Specialist">Digital Marketing Specialist</option>
                            <option value="Internship">Internship</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="resume" className="text-sm font-medium text-[var(--muted)]">Resume / CV (PDF, DOCX)</label>
                        <div className="relative">
                            <input
                                type="file"
                                id="resume"
                                name="resume"
                                accept=".pdf,.doc,.docx"
                                required
                                onChange={handleFileChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div className="w-full px-4 py-4 rounded-xl bg-[var(--background)] border-2 border-dashed border-[var(--muted)]/30 hover:border-[var(--primary)] transition-all flex flex-col items-center justify-center text-[var(--muted)] hover:text-[var(--primary)]">
                                <Upload className="w-8 h-8 mb-2" />
                                <span className="text-sm font-medium">{fileName || "Click to upload your resume"}</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="coverLetter" className="text-sm font-medium text-[var(--muted)]">Cover Letter (Optional)</label>
                        <textarea
                            id="coverLetter"
                            name="coverLetter"
                            rows={4}
                            className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--muted)]/20 text-[var(--heading)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all resize-none"
                            placeholder="Why are you a good fit?"
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
                            <>Submitting...</>
                        ) : (
                            <>
                                Submit Application
                                <Send size={18} />
                            </>
                        )}
                    </button>
                </form>
            )}
        </motion.div>
    );
}
