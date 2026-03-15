"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { GravitationalText } from "@/components/ui/gravitational-text";
import { MorphingText } from "@/components/ui/morphing-text";

const HeroScene = dynamic(
  () => import("@/components/3d/hero-noise").then((m) => m.HeroScene),
  { ssr: false },
);

const philosophies = [
  "Every pixel is a decision",
  "Performance is a priority",
  "User-centric at heart",
  "Clean code, Scalable apps",
];

const ease = [0.2, 0.8, 0.2, 1] as const;

export function Opening() {
  return (
    <section id="opening" className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden px-6">
      {/* Living noise shader */}
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.5, ease }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 text-[13px] text-[var(--gray-8)]">
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-emerald-500/80" />
            Open to Remote Opportunities
          </span>
        </motion.div>

        {/* Main statement — gravitational text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.8, ease }}
        >
          <GravitationalText
            intensity={18}
            radius={220}
            className="text-[clamp(2.5rem,9vw,7rem)] font-bold leading-[0.9] tracking-[-0.05em] text-[var(--gray-12)]"
          >
            I turn ideas into
          </GravitationalText>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.0, ease }}
        >
          <GravitationalText
            intensity={18}
            radius={220}
            className="text-[clamp(2.5rem,9vw,7rem)] font-bold leading-[0.9] tracking-[-0.05em] text-[var(--gray-12)]"
          >
            shipped products.
          </GravitationalText>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.4, ease }}
          className="mt-6 max-w-[420px] text-[14px] leading-[1.65] text-[var(--gray-7)]"
        >
          Full-Stack JavaScript &amp; React Native Developer —{" "}
          building web apps, mobile apps and shipping to the Play Store.
        </motion.p>

        {/* Morphing philosophy — cycles through beliefs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.8, ease }}
          className="mt-8"
        >
          <MorphingText
            texts={philosophies}
            className="text-[clamp(0.875rem,2vw,1.125rem)] font-normal text-[var(--gray-8)]"
          />
        </motion.div>

        {/* Name */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 4.2, ease }}
          className="mt-8 max-w-[320px] text-[14px] leading-[1.6] text-[var(--gray-6)]"
        >
          Naim Uddin Arafat
          <br />
          This is my journey.
        </motion.p>
      </div>

      {/* Bottom fade — blends shader into page background */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-32 bg-gradient-to-b from-transparent to-[var(--gray-1)]" />

      {/* Scroll indicator — minimal pulsing line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-12 w-px bg-gradient-to-b from-transparent via-[var(--gray-5)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
