"use client";

import { motion } from "framer-motion";
import { HiDeviceMobile, HiCode, HiDatabase } from "react-icons/hi";
import { services } from "@/lib/data";

const iconMap = {
    mobile: HiDeviceMobile,
    web: HiCode,
    backend: HiDatabase,
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
    }),
};

export default function ServicesSection() {
    return (
        <section id="services" className="section-padding">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">
                        What I Do
                    </span>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
                        End-to-End Product Development
                    </h2>
                    <p className="mt-4 text-[var(--text-muted)] max-w-xl mx-auto">
                        From mobile apps to full-stack web platforms — I own the entire product lifecycle.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service, i) => {
                        const Icon = iconMap[service.icon as keyof typeof iconMap];
                        return (
                            <motion.div
                                key={service.title}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                whileHover={{ y: -4 }}
                                className="card-glass rounded-2xl p-7 group cursor-default"
                            >
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-600/20 border border-indigo-500/20 flex items-center justify-center mb-5 group-hover:from-indigo-500/30 group-hover:to-violet-600/30 transition-all">
                                    <Icon size={22} className="text-indigo-400" />
                                </div>

                                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">
                                    {service.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5">
                                    {service.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 text-xs font-medium text-indigo-400 bg-indigo-500/10 rounded-full border border-indigo-500/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
