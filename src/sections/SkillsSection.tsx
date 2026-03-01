"use client";

import { motion } from "framer-motion";
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux,
    SiExpo, SiNodedotjs, SiMongodb, SiFirebase, SiExpress,
    SiGraphql, SiGit, SiGithub, SiVercel, SiFigma, SiPostman,
} from "react-icons/si";
import { skills } from "@/lib/data";

const iconComponents: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux,
    SiExpo, SiNodedotjs, SiMongodb, SiFirebase, SiExpress,
    SiGraphql, SiGit, SiGithub, SiVercel, SiFigma, SiPostman,
    SiDaisyui: SiTailwindcss,
    SiAndroidstudio: SiReact,
    SiVisualstudiocode: SiGit,
};

const categoryColors: Record<string, string> = {
    "Frontend / Mobile": "from-indigo-500/20 to-violet-600/20 border-indigo-500/20 text-indigo-400",
    "Backend & Database": "from-emerald-500/20 to-teal-600/20 border-emerald-500/20 text-emerald-400",
    "Tools & Workflow": "from-orange-500/20 to-amber-600/20 border-orange-500/20 text-orange-400",
};

export default function SkillsSection() {
    return (
        <section id="skills" className="section-padding">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">
                        Tech Stack
                    </span>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
                        Technologies I Use
                    </h2>
                    <p className="mt-4 text-[var(--text-muted)] max-w-xl mx-auto">
                        Production-tested skills across the full stack — from native mobile to cloud APIs.
                    </p>
                </motion.div>

                <div className="grid gap-8">
                    {Object.entries(skills).map(([category, items], catIdx) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                        >
                            <h3 className="text-sm font-semibold text-[var(--text-muted)] mb-4 tracking-wider uppercase">
                                {category}
                            </h3>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                                {items.map((skill, i) => {
                                    const Icon = iconComponents[skill.icon];
                                    const colorClass = categoryColors[category];
                                    return (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: catIdx * 0.1 + i * 0.05 }}
                                            whileHover={{ y: -3 }}
                                            className="card-glass rounded-xl p-3 flex flex-col items-center gap-2 cursor-default group"
                                        >
                                            <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${colorClass} flex items-center justify-center border`}>
                                                {Icon ? (
                                                    <Icon size={18} className={colorClass.split(" ").find(c => c.startsWith("text-")) || "text-indigo-400"} />
                                                ) : (
                                                    <span className="text-xs font-bold text-indigo-400">{skill.name[0]}</span>
                                                )}
                                            </div>
                                            <span className="text-xs text-[var(--text-muted)] text-center leading-tight group-hover:text-[var(--text-subtle)] transition-colors">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Currently learning */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-10 p-6 rounded-2xl border border-dashed border-indigo-500/20 bg-indigo-500/5 text-center"
                >
                    <p className="text-sm text-[var(--text-muted)]">
                        📚 Currently diving deep into{" "}
                        <span className="text-indigo-400 font-medium">Performance Optimization</span>,{" "}
                        <span className="text-violet-400 font-medium">System Architecture</span>, and{" "}
                        <span className="text-indigo-400 font-medium">React Native New Architecture</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
