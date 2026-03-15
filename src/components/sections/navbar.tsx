"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const ease = [0.2, 0.8, 0.2, 1] as const;

export function Navbar() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > globalThis.innerHeight * 0.75);
  });

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease }}
      className="pointer-events-none fixed top-0 left-0 right-0 z-50"
    >
      <div className="pointer-events-auto mx-auto flex max-w-[960px] items-center justify-between px-6 py-5 lg:px-0">
        <a
          href="#"
          className="text-[14px] font-semibold tracking-tight text-[var(--gray-12)] transition-opacity duration-[var(--duration-fast)] hover:opacity-70"
        >
          NA
        </a>

        <div className="flex items-center gap-3">
          <AnimatedThemeToggler />

          {/* Download CV dropdown */}
          <div className="relative">
            <button
              onClick={() => setCvOpen((o) => !o)}
              onBlur={() => setTimeout(() => setCvOpen(false), 150)}
              className="select-none inline-flex items-center gap-1.5 rounded-full border border-[var(--gray-4)] px-4 py-1.5 text-[12px] text-[var(--gray-9)] transition-all duration-[var(--duration-fast)] hover:border-[var(--gray-6)] hover:text-[var(--gray-12)]"
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
              <svg
                width="9"
                height="9"
                viewBox="0 0 10 10"
                fill="currentColor"
                className={`transition-transform duration-200 ${cvOpen ? "rotate-180" : ""}`}
              >
                <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </button>

            <AnimatePresence>
              {cvOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.97 }}
                  transition={{ duration: 0.18, ease }}
                  className="absolute right-0 top-full mt-2 w-[180px] overflow-hidden rounded-xl border border-[var(--gray-4)] bg-[var(--gray-2)] shadow-xl"
                >
                  <a
                    href="/CV_ReactNative_1Page.docx"
                    download
                    className="flex w-full items-center gap-2.5 px-4 py-3 text-[12px] text-[var(--gray-9)] transition-colors hover:bg-[var(--gray-3)] hover:text-[var(--gray-12)]"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    React Native CV
                  </a>
                  <div className="mx-4 h-px bg-[var(--gray-3)]" />
                  <a
                    href="/CV_MERN_1Page.docx"
                    download
                    className="flex w-full items-center gap-2.5 px-4 py-3 text-[12px] text-[var(--gray-9)] transition-colors hover:bg-[var(--gray-3)] hover:text-[var(--gray-12)]"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    MERN Stack CV
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="mailto:arfatahsan60@gmail.com"
            className="select-none rounded-full border border-[var(--gray-4)] px-4 py-1.5 text-[12px] text-[var(--gray-9)] transition-all duration-[var(--duration-fast)] hover:border-[var(--gray-6)] hover:text-[var(--gray-12)]"
          >
            Email me
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
