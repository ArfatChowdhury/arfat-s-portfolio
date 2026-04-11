"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Safari } from "@/components/ui/safari";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

const projects = [
  {
    title: "Nemo E-commerce Web",
    description:
      "A responsive full-stack web platform with product listing, search, filtering, and admin dashboard. Built with Next.js and Firebase.",
    role: "Full-Stack Web Developer",
    url: "nemo-e-commerce-web-app.vercel.app",
    year: "2026",
    tags: ["Next.js 16", "TypeScript", "Redux Toolkit", "Firebase"],
  },
  {
    title: "E-commerce Mobile",
    description:
      "Complete mobile solution with separate React Native client and Node.js/Express REST API. Features infinite scroll product listing.",
    role: "Mobile App Developer",
    url: "github.com/ArfatChowdhury/nemo-e-commerce-app",
    year: "2025",
    tags: ["React Native", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Wallety - Ai budget Tracker",
    description:
      "Cross-platform mobile app for tracking expenses with global state management and offline persistence using AsyncStorage.",
    role: "Mobile App Developer",
    url: "github.com/ArfatChowdhury/wallety-ai",
    year: "2025",
    tags: ["React Native", "Expo", "Context API", "React Navigation"],
  },
  {
    title: "EMI Smart Loan Planner",
    description:
      "Premium dark-themed financial app for calculating, analysing and managing loans with SVG charts and amortization schedules.",
    role: "Mobile App Developer",
    url: "play.google.com/store/apps/details?id=com.naim.emicalculator",
    year: "2026",
    tags: ["React Native", "Expo", "React Native SVG", "Google Mobile Ads"],
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const mockupY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const isOdd = index % 2 === 1;

  return (
    <BlurFade delay={0.05 + index * 0.08} inView>
      <SpotlightCard>
        <div
          ref={ref}
          className="grid gap-6 p-6 md:grid-cols-[1fr,1.1fr] md:gap-10 md:p-8"
        >
          <div
            className={`flex flex-col justify-center gap-4 ${isOdd ? "md:order-2" : ""}`}
          >
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-[var(--gray-6)]">
                0{index + 1}
              </span>
              <div className="h-px flex-1 bg-[var(--gray-3)]" />
              <span className="text-[11px] font-mono text-[var(--gray-6)]">
                {project.year}
              </span>
            </div>

            <h3 className="text-[clamp(1.25rem,3vw,1.75rem)] font-bold tracking-[-0.02em] text-[var(--gray-12)]">
              {project.title}
            </h3>

            <p className="text-[14px] leading-[1.65] text-[var(--gray-8)]">
              {project.description}
            </p>

            <p className="text-[12px] text-[var(--gray-6)]">{project.role}</p>

            <div className="mt-1 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-[var(--gray-3)] px-2 py-0.5 text-[11px] font-medium text-[var(--gray-8)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            style={{ y: mockupY }}
            className={isOdd ? "md:order-1" : ""}
          >
            <Safari url={project.url} className="shadow-lg shadow-black/10">
              {project.title === "Wallety - Ai budget Tracker" ? (
                <img
                  src="/wallety-screenshot/1.png"
                  alt={project.title}
                  width={560}
                  height={340}
                  className="rounded-none object-cover"
                />
              ) : project.title === "EMI Smart Loan Planner" ? (
                <div className="flex h-[340px] w-full items-center justify-center bg-[var(--gray-2)]">
                  <img
                    src="/Emi.png"
                    alt={project.title}
                    className="w-32 h-32 md:w-48 md:h-48 object-contain rounded-2xl md:rounded-3xl shadow-xl"
                  />
                </div>
              ) : (
                <PlaceholderImage
                  width={560}
                  height={340}
                  label={project.title}
                  className="rounded-none border-0"
                />
              )}
            </Safari>
          </motion.div>
        </div>
      </SpotlightCard>
    </BlurFade>
  );
}

export function ProjectsGallery() {
  return (
    <section id="work" className="relative w-full py-32 px-6">
      <div className="mx-auto max-w-[960px]">
        <BlurFade delay={0} inView>
          <p className="mb-16 text-[13px] font-medium uppercase tracking-[0.15em] text-[var(--gray-7)]">
            Selected Work
          </p>
        </BlurFade>

        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
