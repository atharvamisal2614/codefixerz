"use client";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Lightbulb, Cog, Rocket, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'CodeFixerz - Web Development & Digital Solutions',
        description: 'Professional web development, software solutions, and digital marketing services.',
        url: 'https://www.codefixerz.com',
        mainEntity: {
            '@type': 'LocalBusiness',
            '@id': 'https://www.codefixerz.com',
            name: 'CodeFixerz',
            image: 'https://www.codefixerz.com/images/favicon-logo.png',
            telephone: '+91-95299-26673',
            email: 'enquiry@codefixerz.com',
            address: {
                '@type': 'PostalAddress',
                streetAddress: '5405, Lonar Lane, Near Atharva Classes',
                addressLocality: 'Ahilyanager',
                addressRegion: 'Maharashtra',
                postalCode: '414001',
                addressCountry: 'IN'
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: '19.8763',
                longitude: '75.3433'
            },
            openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00'
            }
        },
        breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://www.codefixerz.com'
                }
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="flex flex-col min-h-screen">

                <Hero />

                {/* Services Preview - Increased limit as requested */}
                <Services limit={6} />

                {/* Expanded About Section */}
                <section className="py-32 relative overflow-hidden bg-[#0a0a0a]">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-[var(--accent)]/5 pointer-events-none" />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">

                            <div className="lg:w-1/2 relative">
                                <div className="grid grid-cols-2 gap-4 p-8 bg-[#121212]/50 backdrop-blur-xl rounded-3xl border border-white/10">
                                    {/* Grid Item 1 - Innovation */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                        className="relative group aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--primary)]/20 to-purple-600/20 border border-white/10 hover:border-[var(--primary)]/50 transition-all duration-500 flex items-center justify-center p-6"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="relative z-10 text-center">
                                            <Lightbulb className="w-12 h-12 mx-auto mb-3 text-[var(--primary)] group-hover:scale-110 transition-transform duration-300" />
                                            <p className="text-white font-bold text-sm">Innovation</p>
                                        </div>
                                        {/* Add your image here with: <img src="/your-image.jpg" alt="Innovation" className="absolute inset-0 w-full h-full object-cover" /> */}
                                    </motion.div>

                                    {/* Grid Item 2 - Quality */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                        className="relative group aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--accent)]/20 to-pink-600/20 border border-white/10 hover:border-[var(--accent)]/50 transition-all duration-500 flex items-center justify-center p-6"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="relative z-10 text-center">
                                            <CheckCircle2 className="w-12 h-12 mx-auto mb-3 text-[var(--accent)] group-hover:scale-110 transition-transform duration-300" />
                                            <p className="text-white font-bold text-sm">Quality</p>
                                        </div>
                                        {/* Add your image here with: <img src="/your-image.jpg" alt="Quality" className="absolute inset-0 w-full h-full object-cover" /> */}
                                    </motion.div>

                                    {/* Grid Item 3 - Speed */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                        className="relative group aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-500/20 to-green-600/20 border border-white/10 hover:border-emerald-500/50 transition-all duration-500 flex items-center justify-center p-6"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="relative z-10 text-center">
                                            <Rocket className="w-12 h-12 mx-auto mb-3 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                                            <p className="text-white font-bold text-sm">Speed</p>
                                        </div>
                                        {/* Add your image here with: <img src="/your-image.jpg" alt="Speed" className="absolute inset-0 w-full h-full object-cover" /> */}
                                    </motion.div>

                                    {/* Grid Item 4 - Support */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 }}
                                        className="relative group aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-orange-500/20 to-red-600/20 border border-white/10 hover:border-orange-500/50 transition-all duration-500 flex items-center justify-center p-6"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="relative z-10 text-center">
                                            <CheckCircle2 className="w-12 h-12 mx-auto mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                                            <p className="text-white font-bold text-sm">24/7 Support</p>
                                        </div>
                                        {/* Add your image here with: <img src="/your-image.jpg" alt="Support" className="absolute inset-0 w-full h-full object-cover" /> */}
                                    </motion.div>
                                </div>

                                {/* Float Stats */}
                                <div className="absolute z-50 -bottom-8 -right-8 bg-[#1e1e1e] border border-white/10 p-6 rounded-2xl shadow-xl hidden md:block">
                                    <div className="flex gap-8">
                                        <div className="text-center">
                                            <p className="text-3xl font-black text-[var(--primary)]">5+</p>
                                            <p className="text-xs text-gray-400 uppercase tracking-wider">Years Exp.</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-3xl font-black text-[var(--accent)]">100+</p>
                                            <p className=" text-xs text-gray-400 uppercase tracking-wider">Clients</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-1/2">
                                <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-semibold mb-6 backdrop-blur-sm">
                                    ABOUT CODEFIXERZ
                                </div>

                                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                                    Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">Digital Excellence</span>
                                </h2>

                                <p className="text-[var(--text)] text-lg mb-6 leading-relaxed">
                                    CodeFixerz is more than just a dev agency. We are a collective of visionaries, engineers, and creatives dedicated to solving complex business challenges through technology.
                                </p>

                                <p className="text-[var(--text)] text-lg mb-8 leading-relaxed">
                                    From startups to enterprises, we partner with specialized industries to deliver bespoke software, stunning web designs, and data-driven marketing strategies that yield tangible ROI.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    {["Custom Development", "AI Solutions", "Dedicated Support", "Scalable Architecture"].map((feature, i) => (
                                        <div key={i} className="flex items-center space-x-3">
                                            <div className="w-2 h-2 rounded-full bg-[var(--accent)]"></div>
                                            <span className="text-gray-300 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href="/about"
                                    className="inline-flex items-center px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-[var(--primary)] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[var(--primary)]/30"
                                >
                                    <span>Discover Our Story</span>
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-32 bg-[var(--card)] relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">How We <span className="text-[var(--primary)]">Work</span></h2>
                            <p className="text-[var(--text)] max-w-2xl mx-auto text-lg">Our streamlined process ensures transparency and quality at every step of the journey.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--primary)] opacity-20 -z-0"></div>

                            {[
                                { icon: Lightbulb, title: "Discovery", desc: "We analyze your requirements and blueprint the perfect solution." },
                                { icon: Cog, title: "Development", desc: "Our experts build your product using cutting-edge technologies." },
                                { icon: Rocket, title: "Launch & Scale", desc: "We deploy your solution and help you grow with ongoing support." }
                            ].map((step, i) => (
                                <div key={i} className="relative z-10 bg-[#151515] p-8 rounded-2xl border border-white/5 hover:border-[var(--primary)]/30 transition-all duration-500 group text-center">
                                    <div className="w-24 h-24 mx-auto bg-[#1e1e1e] rounded-full border border-white/10 flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                                        <step.icon className="w-10 h-10 text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                                    <p className="text-[var(--text)]">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials (Placeholder) */}
                {/* <section className="py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-black text-center text-white mb-16">Client <span className="text-[var(--accent)]">Success</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { quote: "CodeFixerz transformed our online presence completely. The team is incredibly talented and professional.", author: "Sarah Johnson, CEO", company: "TechFlow Inc." },
                { quote: "Their automation solutions saved us hundreds of hours. Highly recommended for any business looking to scale.", author: "Mike Williams, Director", company: "Global Logistics" }
              ].map((testimonial, i) => (
                <div key={i} className="glass-panel p-10 rounded-3xl relative">
                  <Quote className="absolute top-8 left-8 w-10 h-10 text-[var(--primary)]/20" />
                  <p className="text-xl text-gray-300 italic mb-8 relative z-10">"{testimonial.quote}"</p>
                  <div>
                    <p className="text-white font-bold">{testimonial.author}</p>
                    <p className="text-[var(--primary)] text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

                {/* CTA Section */}
                <section className="py-32 relative">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <div className="p-12 md:p-24 rounded-[3rem] border border-white/10 relative overflow-hidden group">
                            {/* CTA Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-black z-0" />
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 z-0" />
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-50" />

                            <div className="relative z-10">
                                <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight">
                                    Ready to Transform <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">Your Business?</span>
                                </h2>

                                <p className="text-xl md:text-2xl text-[var(--text)] mb-12 max-w-3xl mx-auto font-light">
                                    Let's discuss your project and create something amazing together.
                                    Your journey to digital excellence starts here.
                                </p>

                                <Link
                                    href="https://wa.me/919876543210"
                                    className="inline-flex px-12 py-5 rounded-full bg-white text-black font-black text-xl hover:bg-[var(--primary)] hover:text-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_-5px_var(--primary)]"
                                >
                                    Get in Touch
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
