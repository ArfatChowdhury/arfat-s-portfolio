"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { HiDeviceMobile, HiGlobeAlt } from "react-icons/hi";
import { projects } from "@/lib/data";

const typeIcons = {
    "Web Platform": HiGlobeAlt,
    "Mobile App": HiDeviceMobile,
};

export default function ProjectsSection() {
    return (
        <section id="projects" className="section-padding">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">
                        Featured Work
                    </span>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
                        Production-Grade Projects
                    </h2>
                    <p className="mt-4 text-[var(--text-muted)] max-w-xl mx-auto">
                        Real products built with real users in mind — not tutorial projects.
                    </p>
                </motion.div>

                <div className="grid gap-6">
                    {/* Featured large card — first project */}
                    {projects.filter((p) => p.featured).map((project, i) => {
                        const Icon = typeIcons[project.type as keyof typeof typeIcons] || HiGlobeAlt;
                        return (
                            <motion.article
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="card-glass rounded-2xl p-7 group"
                            >
                                <div className="flex flex-col lg:flex-row gap-8">
                                    {/* Left content */}
                                    <div className="flex-1 flex flex-col gap-4">
                                        {/* Type badge */}
                                        <div className="flex items-center gap-2">
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                                                <Icon size={12} />
                                                {project.type}
                                            </span>
                                            {project.liveUrl && (
                                                <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                                                    Live
                                                </span>
                                            )}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-indigo-400 transition-colors">
                                            {project.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-[var(--text-muted)] leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Stats */}
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                            {project.stats.map((stat) => (
                                                <div
                                                    key={stat}
                                                    className="px-3 py-2 bg-white/3 border border-white/6 rounded-xl text-center"
                                                >
                                                    <p className="text-xs font-medium text-[var(--text-subtle)]">{stat}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2.5 py-1 text-xs font-medium text-[var(--text-muted)] bg-white/5 border border-white/8 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        <div className="flex gap-3 mt-auto pt-2">
                                            <a
                                                href={project.codeUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[var(--text-primary)] border border-white/10 rounded-xl hover:border-indigo-500/50 hover:bg-white/5 transition-all"
                                                aria-label={`View ${project.title} source code`}
                                            >
                                                <FiGithub size={15} />
                                                Source Code
                                            </a>
                                            {project.liveUrl && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-600 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-indigo-500/20"
                                                    aria-label={`View ${project.title} live`}
                                                >
                                                    <FiExternalLink size={15} />
                                                    Live Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Right: Decorative gradient block */}
                                    <div className="lg:w-64 h-40 lg:h-auto rounded-xl bg-gradient-to-br from-indigo-500/20 via-violet-600/10 to-transparent border border-indigo-500/10 flex items-center justify-center flex-shrink-0">
                                        <div className="text-center">
                                            <Icon size={40} className="text-indigo-400/50 mx-auto mb-2" />
                                            <p className="text-xs text-[var(--text-muted)]">{project.type}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}

                    {/* Non-featured grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {projects.filter((p) => !p.featured).map((project, i) => {
                            const Icon = typeIcons[project.type as keyof typeof typeIcons] || HiDeviceMobile;
                            return (
                                <motion.article
                                    key={project.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.15 }}
                                    className="card-glass rounded-2xl p-6 group"
                                >
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                                            <Icon size={12} />
                                            {project.type}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-indigo-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                                        {project.shortDesc}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {project.tags.slice(0, 4).map((tag) => (
                                            <span key={tag} className="px-2 py-0.5 text-xs text-[var(--text-muted)] bg-white/5 border border-white/8 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-2">
                                        <a
                                            href={project.codeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-[var(--text-muted)] border border-white/10 rounded-lg hover:border-indigo-500/50 hover:text-white transition-all"
                                        >
                                            <FiGithub size={13} /> Code
                                        </a>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
