"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";

/* ─── Project Data ─── */

const projects = [
  {
    id: "MOB-001",
    tag: "[MOB-001]",
    tagBadge: "AI-Powered · Play Store Soon",
    period: "Oct 2025 – Present",
    title: "Expense Tracker – Panda Edition",
    type: "React Native Mobile App",
    lede: "AI-powered personal finance manager. Snap a receipt — Groq Llama 4 Vision extracts everything instantly.",
    description:
      "A full-featured AI-powered personal finance manager with a sleek Panda (Black & White) theme. Snap a photo of any receipt — Groq Llama 4 Vision extracts the title, amount and category instantly. No manual entry needed.",
    features: [
      "AI receipt scanning with Groq Llama 4 Vision (zero-shot extraction)",
      "Smart category budgets with intelligent over-budget alerts",
      "Interactive analytics — Today, Weekly, Monthly, All Time views",
      "Automatic monthly budget resets",
      "PDF export of monthly summaries",
      "Custom native push notification reminders",
      "Firebase Auth & Firestore cloud sync",
      "Offline-first with AsyncStorage",
    ],
    stackPreview: ["React Native", "Groq SDK", "Firebase"],
    stack: ["React Native", "Expo SDK 54", "NativeWind", "Groq SDK", "Firebase", "Context API", "AsyncStorage", "expo-notifications", "expo-print"],
    github: "https://github.com/ArfatChowdhury/react-native-expense-tracker",
    live: null,
  },
  {
    id: "MOB-002",
    tag: "[MOB-002]",
    tagBadge: "Finance · Play Store Soon",
    period: "Jan 2026 – Present",
    title: "EMI Smart Loan Planner",
    type: "React Native Mobile App",
    lede: "Premium dark-themed financial app for calculating and managing loans with SVG charts and amortization schedules.",
    description:
      "A premium dark-themed financial app for calculating, analysing and managing loans. Real-time SVG donut chart visualisations, full amortization schedules and Google Ads monetization built in.",
    features: [
      "Reducing Balance and Flat Rate EMI calculations",
      "Interactive SVG donut charts (Interest vs Principal split)",
      "Full month-by-month amortization schedule",
      "Prepayment analysis — shows interest savings and tenure reduction",
      "PDF export of loan summaries",
      "Save multiple loan profiles to compare",
      "Multi-currency support (BDT, USD, etc.)",
      "Google Mobile Ads monetization",
      "expo-haptics premium feedback",
    ],
    stackPreview: ["React Native", "Expo Router", "React Native SVG"],
    stack: ["React Native", "Expo SDK 54", "Expo Router", "Reanimated", "React Native SVG", "AsyncStorage", "expo-print", "Google Mobile Ads"],
    github: "https://github.com/ArfatChowdhury/EMI-Calculator---Smart-Loan-Planner",
    live: null,
  },
  {
    id: "WEB-001",
    tag: "[WEB-001]",
    tagBadge: "Frontend · Live",
    period: "Feb 2026",
    title: "KICKS – Premium Sneaker Store",
    type: "Next.js Web App",
    lede: "High-end sneaker e-commerce storefront with pixel-perfect micro-animations and custom image magnifier.",
    description:
      "A high-end, pixel-perfect sneaker e-commerce storefront with premium micro-animations, robust API state handling and a custom image magnifier for product exploration.",
    features: [
      "Pixel-perfect custom image magnifier on product detail",
      "Unique vertical-pair carousel for mobile, horizontal for desktop",
      "Pulse skeleton loaders during data fetching",
      "Styled error cards with \"Try Again\" retry logic",
      "Full Redux cart — add, remove, update quantity and size",
      "Animated Add-to-Cart button with checkmark success state",
      "Fully responsive up to 1400px desktop",
      "Balanced 3-column header layout",
    ],
    stackPreview: ["Next.js 15", "Redux Toolkit", "Tailwind CSS 4"],
    stack: ["Next.js 15", "TypeScript", "Redux Toolkit", "Tailwind CSS 4", "Embla Carousel", "Lucide React", "Vercel"],
    github: "https://github.com/ArfatChowdhury/kicks-zavisoft-frontend-task",
    live: "https://kicks-zavisoft-frontend-task-q49v.vercel.app/",
  },
  {
    id: "WEB-002",
    tag: "[WEB-002]",
    tagBadge: "Full-Stack · Live",
    period: "Dec 2025 – Jan 2026",
    title: "Nemo E-commerce – Full-Stack Web Platform",
    type: "Next.js + Firebase Full-Stack",
    lede: "Production-ready e-commerce platform with Firebase auth, role-based access and full admin dashboard.",
    description:
      "A production-ready responsive e-commerce platform with Firebase authentication, role-based access control and a full admin dashboard for product and order management.",
    features: [
      "50+ products with search, filtering, cart and wishlist",
      "Firebase Authentication with role-based access control",
      "Full admin dashboard — CRUD for products, orders and users",
      "Deployed on Vercel with CI/CD and environment variable management",
      "Optimised for mobile and desktop",
    ],
    stackPreview: ["Next.js 16", "Firebase", "TypeScript"],
    stack: ["Next.js 16", "TypeScript", "Redux Toolkit", "Firebase", "Tailwind CSS 4", "DaisyUI", "Vercel"],
    github: "https://github.com/ArfatChowdhury/nemo-e-commerce-web-app",
    live: "https://nemo-e-commerce-web-app.vercel.app",
  },
  {
    id: "MOB-003",
    tag: "[MOB-003]",
    tagBadge: "Full-Stack · API + Mobile",
    period: "Oct – Dec 2025",
    title: "Full-Stack E-commerce Mobile App",
    type: "React Native + Node.js",
    lede: "Complete mobile e-commerce solution with a custom Node.js/Express REST API — built and owned solo.",
    description:
      "Complete mobile e-commerce solution — a custom Node.js/Express REST API backend connected to a React Native client. Built and owned the entire stack solo.",
    features: [
      "Custom REST API from scratch — products, cart, user endpoints",
      "Infinite scroll FlatList with 200+ items, smooth performance",
      "Cart and wishlist with real-time Redux state updates",
      "Full authentication and data validation",
    ],
    stackPreview: ["React Native", "Node.js", "MongoDB"],
    stack: ["React Native", "TypeScript", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "React Navigation"],
    github: "https://github.com/ArfatChowdhury/nemo-e-commerce-app",
    live: null,
  },
];

const stats = [
  { number: 12, suffix: "+", label: "Projects shipped" },
  { number: 6, suffix: "+", label: "Years of craft" },
  { number: 3, suffix: "", label: "Apps on Play Store" },
  { number: 4, suffix: "+", label: "Happy clients" },
];

/* ─── Modal ─── */

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center sm:px-4 sm:py-6"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        {/* Modal panel — full screen on mobile, card on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative z-10 w-full sm:max-w-[640px] h-[92vh] sm:h-auto sm:max-h-[85vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-[var(--gray-2)] border-t sm:border border-[var(--gray-4)] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--gray-3)] text-[var(--gray-8)] transition-colors hover:bg-[var(--gray-4)] hover:text-[var(--gray-12)]"
            aria-label="Close modal"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          <div className="p-5 sm:p-7">
            {/* Header */}
            <div className="mb-6">
              <div className="mb-2 flex items-center gap-2 flex-wrap">
                <span className="font-mono text-[11px] text-[var(--gray-6)]">{project.tag}</span>
                <span className="rounded-full bg-[var(--gray-3)] px-2 py-0.5 text-[11px] text-[var(--gray-7)]">
                  {project.tagBadge}
                </span>
              </div>
              <h2 className="text-[clamp(1.25rem,3vw,1.75rem)] font-bold tracking-[-0.02em] text-[var(--gray-12)]">
                {project.title}
              </h2>
              <p className="mt-1 text-[12px] text-[var(--gray-6)]">
                {project.type} · {project.period}
              </p>
            </div>

            {/* Description */}
            <p className="mb-6 text-[14px] leading-[1.7] text-[var(--gray-9)]">
              {project.description}
            </p>

            {/* Features */}
            <div className="mb-6">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--gray-6)]">
                Key Features
              </p>
              <ul className="flex flex-col gap-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13px] leading-[1.6] text-[var(--gray-8)]">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--gray-6)]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack */}
            <div className="mb-7">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--gray-6)]">
                Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-[var(--gray-3)]/80 px-2 py-0.5 text-[11px] font-medium text-[var(--gray-8)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--gray-4)] px-4 py-2 text-[12px] text-[var(--gray-9)] transition-all hover:border-[var(--gray-7)] hover:text-[var(--gray-12)]"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--gray-12)] px-4 py-2 text-[12px] font-medium text-[var(--gray-1)] transition-opacity hover:opacity-80"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Project Card ─── */

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: (typeof projects)[0];
  index: number;
  onClick: () => void;
}) {
  return (
    <BlurFade delay={0.05 + index * 0.06} inView>
      <button
        onClick={onClick}
        className={`living-card living-card-${index % 3} group w-full h-full cursor-pointer bg-[var(--gray-2)] text-left transition-all duration-300 hover:scale-[1.015]`}
      >
        <div className="flex h-full flex-col gap-3 p-6">
          {/* Tag row */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] text-[var(--gray-6)]">{project.tag}</span>
              <span className="rounded-full bg-[var(--gray-3)] px-2 py-0.5 text-[10px] text-[var(--gray-7)]">
                {project.tagBadge}
              </span>
            </div>
            <span className="text-[11px] font-mono text-[var(--gray-5)]">{project.period}</span>
          </div>

          {/* Title */}
          <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-[var(--gray-12)]">
            {project.title}
          </h3>

          {/* One-liner */}
          <p className="text-[13px] leading-[1.6] text-[var(--gray-8)]">
            {project.lede}
          </p>

          {/* Stack preview */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.stackPreview.map((t) => (
              <span
                key={t}
                className="rounded-md bg-[var(--gray-3)]/80 px-2 py-0.5 text-[11px] font-medium text-[var(--gray-8)]"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Hover CTA */}
          <span className="mt-1 text-[12px] text-[var(--gray-6)] transition-all duration-300 group-hover:text-[var(--gray-10)] group-hover:translate-x-0.5 inline-flex items-center gap-1">
            View Project <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </span>
        </div>
      </button>
    </BlurFade>
  );
}

/* ─── Main Component ─── */

export function Work() {
  const [activeProject, setActiveProject] = useState<(typeof projects)[0] | null>(null);

  return (
    <section id="work" className="relative w-full">
      {/* Modal */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}

      {/* ═══ Stats row ═══ */}
      <div className="py-24 px-6">
        <div className="mx-auto grid max-w-[960px] grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <BlurFade key={stat.label} delay={i * 0.06} inView>
              <div className="flex flex-col gap-1">
                <p className="text-[clamp(2rem,5vw,3rem)] font-bold tracking-[-0.03em] text-[var(--gray-12)]">
                  <NumberTicker value={stat.number} delay={0.2 + i * 0.1} />
                  {stat.suffix}
                </p>
                <p className="text-[13px] text-[var(--gray-7)]">
                  {stat.label}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>

      {/* ═══ Philosophy aside ═══ */}
      <div className="py-24 px-6">
        <BlurFade delay={0} inView>
          <div className="mx-auto max-w-[640px]">
            <p className="text-center text-[clamp(1.25rem,3vw,1.75rem)] font-normal leading-[1.5] tracking-[-0.01em] text-[var(--gray-10)]">
              There are 200 milliseconds between a click and a response. That
              tiny gap is where trust lives &mdash; or dies. I spend most of my
              time there.
            </p>
          </div>
        </BlurFade>
      </div>

      {/* ═══ Projects Grid ═══ */}
      <div className="py-16 px-6 pb-32">
        <div className="mx-auto max-w-[960px]">
          <BlurFade delay={0} inView>
            <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.15em] text-[var(--gray-7)]">
              Selected Work
            </p>
          </BlurFade>
          <BlurFade delay={0.04} inView>
            <p className="mb-12 max-w-[480px] text-[clamp(1.125rem,2.5vw,1.375rem)] font-normal leading-[1.6] tracking-[-0.01em] text-[var(--gray-11)]">
              Five projects across web and mobile — click any card for full details.
            </p>
          </BlurFade>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 items-stretch">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => setActiveProject(project)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
