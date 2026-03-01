"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { personalInfo } from "@/lib/data";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/5 shadow-lg"
                    : "bg-transparent"
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-[72px]">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow duration-300">
                            NA
                        </div>
                        <span className="text-[var(--text-primary)] font-semibold text-sm hidden sm:block">
                            Naim Arafat
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-white/5"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href={personalInfo.cvUrl}
                            download
                            className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white border border-white/10 hover:border-indigo-500/50 rounded-lg transition-all duration-200"
                        >
                            Download CV
                        </a>
                        <a
                            href="#contact"
                            className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-600 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/20"
                        >
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-[#0A0A0F]/95 backdrop-blur-xl border-b border-white/5"
                    >
                        <div className="container-custom py-4 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="px-4 py-3 text-[var(--text-muted)] hover:text-[var(--text-primary)] text-sm font-medium transition-colors rounded-lg hover:bg-white/5"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="flex gap-2 mt-3 pt-3 border-t border-white/5">
                                <a
                                    href={personalInfo.cvUrl}
                                    download
                                    className="flex-1 text-center px-4 py-2.5 text-sm font-medium text-white/70 border border-white/10 rounded-lg"
                                >
                                    Download CV
                                </a>
                                <a
                                    href="#contact"
                                    onClick={() => setMenuOpen(false)}
                                    className="flex-1 text-center px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-600 rounded-lg"
                                >
                                    Hire Me
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
