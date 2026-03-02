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
        {/* Main statement — gravitational text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.8, ease }}
        >
          <GravitationalText
            intensity={18}
            radius={220}
            className="text-[clamp(3rem,11vw,9rem)] font-bold leading-[0.88] tracking-[-0.05em] text-[var(--gray-12)]"
          >
            The invisible
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
            className="text-[clamp(3rem,11vw,9rem)] font-bold leading-[0.88] tracking-[-0.05em] text-[var(--gray-12)]"
          >
            Naim Uddin Arafat
          </GravitationalText>
        </motion.div>

        {/* Morphing philosophy — cycles through beliefs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.6, ease }}
          className="mt-8"
        >
          <MorphingText
            texts={philosophies}
            className="text-[clamp(0.875rem,2vw,1.125rem)] font-normal text-[var(--gray-8)]"
          />
        </motion.div>

        {/* Bridge text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 4.2, ease }}
          className="mt-8 max-w-[320px] text-[14px] leading-[1.6] text-[var(--gray-6)]"
        >
          I&apos;m a Full-Stack JavaScript & React Native Developer.
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
