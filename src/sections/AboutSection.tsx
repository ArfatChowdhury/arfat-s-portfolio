"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiMail, FiGithub } from "react-icons/fi";
import { personalInfo } from "@/lib/data";

const stats = [
    { value: "3+", label: "Production Projects" },
    { value: "18mo", label: "of Shipping Code" },
    { value: "2+", label: "Platforms (Web + Mobile)" },
    { value: "100%", label: "Self-Taught" },
];

export default function AboutSection() {
    return (
        <section id="about" className="section-padding">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        {/* Avatar / Initials card */}
                        <div className="relative w-full max-w-sm mx-auto lg:mx-0">
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-500/20 via-violet-600/10 to-transparent border border-indigo-500/10 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-indigo-500/20">
                                        <span className="text-4xl font-bold text-white">NA</span>
                                    </div>
                                    <p className="text-[var(--text-primary)] font-semibold">Naim Uddin Arafat</p>
                                    <p className="text-sm text-[var(--text-muted)] mt-1">Full-Stack JS Engineer</p>
                                </div>
                            </div>

                            {/* Floating badges */}
                            <motion.div
                                animate={{ y: [-4, 4, -4] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-3 -right-3 px-3 py-2 rounded-xl bg-[var(--bg-elevated)] border border-white/8 shadow-xl"
                            >
                                <p className="text-xs font-semibold text-emerald-400">🟢 Open to Work</p>
                            </motion.div>

                            <motion.div
                                animate={{ y: [4, -4, 4] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-3 -left-3 px-3 py-2 rounded-xl bg-[var(--bg-elevated)] border border-white/8 shadow-xl"
                            >
                                <p className="text-xs font-semibold text-indigo-400">📍 Bangladesh (Remote)</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col gap-6"
                    >
                        <div>
                            <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">
                                About Me
                            </span>
                            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
                                Self-taught. <span className="gradient-text">Production-proven.</span>
                            </h2>
                        </div>

                        <p className="text-[var(--text-muted)] leading-relaxed">
                            {personalInfo.bio}
                        </p>

                        {/* Quick info */}
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                                <FiMapPin size={15} className="text-indigo-400 flex-shrink-0" />
                                {personalInfo.location}
                            </div>
                            <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                                <FiMail size={15} className="text-indigo-400 flex-shrink-0" />
                                {personalInfo.email}
                            </div>
                            <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                                <FiGithub size={15} className="text-indigo-400 flex-shrink-0" />
                                github.com/ArfatChowdhury
                            </div>
                        </div>

                        {/* Stats row */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="text-center p-4 rounded-xl bg-white/3 border border-white/6"
                                >
                                    <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                                    <p className="text-xs text-[var(--text-muted)] mt-1 leading-tight">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex gap-3 pt-2">
                            <a
                                href="#contact"
                                className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-600 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-indigo-500/20"
                            >
                                Let's Work Together
                            </a>
                            <a
                                href={personalInfo.cvUrl}
                                download
                                className="px-5 py-2.5 text-sm font-medium text-[var(--text-muted)] border border-white/10 rounded-xl hover:border-indigo-500/30 hover:text-white transition-all"
                            >
                                Download CV
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
