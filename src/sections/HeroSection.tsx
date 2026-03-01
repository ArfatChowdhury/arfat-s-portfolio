"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FiArrowDown, FiGithub, FiMail } from "react-icons/fi";
import { personalInfo } from "@/lib/data";

const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-gradient-to-br from-indigo-500/10 to-violet-600/10 rounded-full blur-3xl" />,
});

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* Background gradient blobs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="container-custom w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen py-32">
                    {/* Left: Text Content */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col gap-6"
                    >
                        {/* Availability badge */}
                        <motion.div variants={item}>
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Available for remote opportunities
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            variants={item}
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none"
                        >
                            <span className="text-[var(--text-primary)]">Naim</span>
                            <br />
                            <span className="gradient-text">Uddin Arafat</span>
                        </motion.h1>

                        {/* Title */}
                        <motion.p
                            variants={item}
                            className="text-lg sm:text-xl text-[var(--text-subtle)] font-medium max-w-md"
                        >
                            Full-Stack JS & React Native Engineer
                        </motion.p>

                        {/* Tagline */}
                        <motion.p
                            variants={item}
                            className="text-base text-[var(--text-muted)] max-w-lg leading-relaxed"
                        >
                            Building fast, scalable cross-platform products with{" "}
                            <span className="text-indigo-400 font-medium">React Native</span>
                            {" "}and{" "}
                            <span className="text-violet-400 font-medium">Next.js</span>
                            {" "}— from mobile to full-stack.
                        </motion.p>

                        {/* Tech badges */}
                        <motion.div variants={item} className="flex flex-wrap gap-2">
                            {["React Native", "Next.js", "TypeScript", "Node.js", "MongoDB"].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 text-xs font-medium text-[var(--text-muted)] bg-white/5 border border-white/8 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>

                        {/* CTAs */}
                        <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
                            <a
                                href="#projects"
                                className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-600 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0"
                            >
                                View My Work
                            </a>
                            <a
                                href="#contact"
                                className="px-6 py-3 text-sm font-semibold text-[var(--text-primary)] border border-white/10 rounded-xl hover:border-indigo-500/50 hover:bg-white/5 transition-all"
                            >
                                Get In Touch
                            </a>
                            <a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 flex items-center justify-center border border-white/10 rounded-xl text-[var(--text-muted)] hover:text-white hover:border-indigo-500/50 hover:bg-white/5 transition-all"
                                aria-label="GitHub Profile"
                            >
                                <FiGithub size={18} />
                            </a>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="w-11 h-11 flex items-center justify-center border border-white/10 rounded-xl text-[var(--text-muted)] hover:text-white hover:border-indigo-500/50 hover:bg-white/5 transition-all"
                                aria-label="Email"
                            >
                                <FiMail size={18} />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right: 3D Scene */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        className="relative h-[380px] lg:h-[520px] w-full"
                    >
                        {/* Glow behind the 3D */}
                        <div className="absolute inset-0 bg-gradient-radial from-indigo-500/20 via-transparent to-transparent rounded-full blur-2xl" />
                        <HeroScene />
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)]"
                >
                    <span className="text-xs tracking-widest uppercase">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <FiArrowDown size={16} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
