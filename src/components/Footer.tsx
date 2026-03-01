"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalInfo } from "@/lib/data";

export default function Footer() {
    return (
        <footer className="border-t border-[var(--border)] bg-[var(--bg-surface)]/50">
            <div className="container-custom py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-xs">
                            NA
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-[var(--text-primary)]">Naim Uddin Arafat</p>
                            <p className="text-xs text-[var(--text-muted)]">Full-Stack JS & React Native Engineer</p>
                        </div>
                    </div>

                    {/* Nav */}
                    <div className="flex items-center gap-6 text-sm text-[var(--text-muted)]">
                        {["#projects", "#skills", "#about", "#contact"].map((href) => (
                            <Link
                                key={href}
                                href={href}
                                className="hover:text-[var(--text-primary)] transition-colors capitalize"
                            >
                                {href.replace("#", "")}
                            </Link>
                        ))}
                    </div>

                    {/* Socials */}
                    <div className="flex items-center gap-3">
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="w-9 h-9 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-indigo-500/50 transition-all"
                        >
                            <FiGithub size={16} />
                        </a>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="w-9 h-9 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-indigo-500/50 transition-all"
                        >
                            <FiLinkedin size={16} />
                        </a>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            aria-label="Email"
                            className="w-9 h-9 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-indigo-500/50 transition-all"
                        >
                            <FiMail size={16} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-2">
                    <p className="text-xs text-[var(--text-muted)]">
                        © {new Date().getFullYear()} Naim Uddin Arafat. All rights reserved.
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">
                        Built with Next.js · TypeScript · Tailwind · React Three Fiber
                    </p>
                </div>
            </div>
        </footer>
    );
}
