"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

const SECTIONS = [
    { id: "opening", label: "Intro", long: true },
    { id: "work", label: "Work", long: true },
    { id: "skills", label: "Stack", long: false },
    { id: "contact", label: "Contact", long: true },
];

const TICK_COUNT = 40; // Total number of precision ticks in the ruler

export function LensScrollbar() {
    const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
    const { scrollYProgress } = useScroll();
    const rulerRef = useRef<HTMLDivElement>(null);

    // Smooth spring for the filling line and dot
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const scrollPercentage = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const [pct, setPct] = useState(0);

    useEffect(() => {
        const unsubscribe = scrollPercentage.onChange((v) => setPct(Math.round(v)));
        return () => unsubscribe();
    }, [scrollPercentage]);

    useEffect(() => {
        const handleScroll = () => {
            const mid = window.scrollY + window.innerHeight * 0.4;
            let currentSection = SECTIONS[0].id;

            for (const section of SECTIONS) {
                const element = document.getElementById(section.id);
                if (element && element.offsetTop <= mid) {
                    currentSection = section.id;
                }
            }
            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            {/* LEFT — TECHNICAL RULER SCALE */}
            <div
                ref={rulerRef}
        className="fixed left-6 top-1/2 z-50 hidden md:flex h-[70vh] -translate-y-1/2 flex-col items-start px-2"
                style={{ perspective: "1000px" }}
            >
                {/* Main Track Line */}
                <div className="absolute left-[8px] top-0 bottom-0 w-px bg-[var(--gray-3)] opacity-30" />

                {/* Progress Fill Line */}
                <motion.div
                    className="absolute left-[8px] top-0 w-px origin-top bg-gradient-to-b from-orange-500 via-orange-400 to-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.4)]"
                    style={{ scaleY }}
                />

                {/* Floating Focus Indicator (The Lens 'Dot') */}
                <motion.div
                    className="absolute left-[4px] z-20 h-2.5 w-2.5 rounded-full border border-orange-400 bg-orange-600 shadow-[0_0_12px_#f97316]"
                    style={{
                        top: useTransform(scaleY, [0, 1], ["0%", "100%"]),
                        translateY: "-50%"
                    }}
                />

                {/* Ticker Scale (Physical Ruler Look) */}
                <div className="relative flex h-full w-full flex-col justify-between pt-[1px] pb-[1px]">
                    {Array.from({ length: TICK_COUNT + 1 }).map((_, i) => {
                        const isNth = i % 5 === 0;
                        const isTenth = i % 10 === 0;

                        return (
                            <div key={i} className="flex items-center gap-2">
                                <motion.div
                                    className={cn(
                                        "h-px transition-colors duration-300",
                                        isTenth ? "w-4 bg-[var(--gray-7)]" : isNth ? "w-2.5 bg-[var(--gray-5)]" : "w-1.5 bg-[var(--gray-3)]"
                                    )}
                                    style={{
                                        backgroundColor: useTransform(scaleY, [(i - 2) / TICK_COUNT, i / TICK_COUNT, (i + 2) / TICK_COUNT], ["var(--ruler-tick-base)", "rgba(249,115,22,0.8)", "var(--ruler-tick-base)"])
                                    }}
                                />
                                {isTenth && (
                                    <span className="font-mono text-[7px] text-[var(--gray-9)]">
                                        {String(i).padStart(2, "0")}
                                    </span>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Section Labels (Overlaid at their respective scroll zones) */}
                <div className="absolute left-10 top-0 bottom-0 flex flex-col justify-between py-2">
                    {SECTIONS.map((sec) => (
                        <button
                            key={sec.id}
                            onClick={() => scrollTo(sec.id)}
                            className={cn(
                                "group flex items-center gap-3 transition-all duration-500",
                                activeSection === sec.id ? "scale-105" : "opacity-40 hover:opacity-100"
                            )}
                        >
                            <span
                                className={cn(
                                    "font-mono text-[9px] uppercase tracking-[0.2em] transition-all duration-300",
                                    activeSection === sec.id ? "text-orange-500 tracking-[0.4em] font-bold" : "text-[var(--gray-9)]"
                                )}
                            >
                                {sec.label}
                            </span>
                            {activeSection === sec.id && (
                                <motion.div
                                    layoutId="active-indicator"
                                    className="h-1 w-1 rounded-full bg-orange-500"
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* RIGHT — DYNAMIC PERCENTAGE BANNER */}
            <motion.div
                initial={{ x: 220 }}
                animate={{ x: pct > 5 ? 0 : 220 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="fixed right-0 top-1/2 z-50 -translate-y-1/2 hidden md:flex flex-col items-center"
            >
                <button
                    onClick={() => scrollTo("contact")}
                    className="group flex flex-row-reverse items-center justify-between gap-4 border border-r-0 border-orange-500/20 bg-black/80 px-4 py-8 backdrop-blur-xl transition-all duration-500 hover:border-orange-500 hover:shadow-[-10px_0_40px_rgba(249,115,22,0.2)] [writing-mode:vertical-rl]"
                >
                    <span className="text-[14px] text-orange-500 animate-bounce">↓</span>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-[6px] text-white">
                        Let&apos;s Talk
                    </span>
                    <motion.span
                        animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]"
                    />
                </button>
                <div className="flex w-full items-center justify-center border border-t-0 border-r-0 border-orange-500/10 bg-black/90 p-2 font-mono text-[10px] tabular-nums text-orange-500/60">
                    {String(pct).padStart(3, "0")}%
                </div>
            </motion.div>
        </>
    );
}
