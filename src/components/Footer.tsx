import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[var(--card)] border-t border-[var(--primary)]/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-[var(--heading)]">CodeFixerz</h2>
                        <p className="text-[var(--text)] leading-relaxed">
                            Empowering businesses with cutting-edge digital solutions. From web development to digital marketing, we transform your vision into reality.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/919529926673"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-[var(--background)] flex items-center justify-center text-[var(--muted)] hover:text-[#25D366] hover:shadow-[0_0_10px_#25D366] transition-all duration-300"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp size={20} />
                            </a>
                            {/* Phone */}
                            <a
                                href="tel:+919529926673"
                                className="w-10 h-10 rounded-full bg-[var(--background)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--primary)] hover:shadow-[0_0_10px_var(--primary)] transition-all duration-300"
                                aria-label="Call Us"
                            >
                                <Phone size={20} />
                            </a>
                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/codefixerz/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-[var(--background)] flex items-center justify-center text-[var(--muted)] hover:text-[#E4405F] hover:shadow-[0_0_10px_#E4405F] transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/company/codefixerz/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-[var(--background)] flex items-center justify-center text-[var(--muted)] hover:text-[#0A66C2] hover:shadow-[0_0_10px_#0A66C2] transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-[var(--heading)] mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Services', 'Careers', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-[var(--text)] hover:text-[var(--primary)] hover:translate-x-2 transition-all duration-300 inline-block"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold text-[var(--heading)] mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            {[
                                'Web Development',
                                'Software Development',
                                'Automation Software',
                                'Digital Marketing',
                                'Graphic Design',
                                'Google Maps Management'
                            ].map((item) => (
                                <li key={item} className="text-[var(--text)] hover:text-[var(--primary)] transition-colors cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-[var(--heading)] mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-[var(--text)]">
                                <MapPin className="w-5 h-5 text-[var(--primary)] shrink-0 mt-1" />
                                <span>5405, Sherkar Galli, Telikhunt, Near Atharva Classes, Ahilyanager, Maharashtra, 414001</span>
                            </li>
                            <li className="flex items-center space-x-3 text-[var(--text)]">
                                <Phone className="w-5 h-5 text-[var(--primary)] shrink-0" />
                                <a href="tel:+919529926673">+91 95299 26673</a>
                            </li>
                            <li className="flex items-center space-x-3 text-[var(--text)]">
                                <Mail className="w-5 h-5 text-[var(--primary)] shrink-0" />
                                <a href="mailto:webagency2614@gmail.com">enquiry@codefixerz.com</a>
                            </li>
                            <li className="flex items-center space-x-3 text-[var(--text)]">
                                <Mail className="w-5 h-5 text-[var(--primary)] shrink-0" />
                                <a href="mailto:webagency2614@gmail.com">hr@codefixerz.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[var(--background)] pt-8 flex flex-col md:flex-row justify-between items-center text-[var(--muted)] text-sm">
                    <p>© {new Date().getFullYear()} CodeFixerz. All rights reserved.</p>
                    <p>Designed & Developed with ❤️ by <a className="text-primary" href="mailto:webagency2614@gmail.com">CodeFixerz</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
