"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { LivingCard } from "@/components/ui/living-card";
import { NumberTicker } from "@/components/ui/number-ticker";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

/* ─── Data ─── */

const projects = [
  {
    number: "01",
    year: "2026",
    title: "Nemo E-commerce",
    lede: "A responsive full-stack web platform with product listing, search, filtering, and admin dashboard. Deployed on Vercel.",
    role: "Full-Stack Web Developer",
    url: "nemo-e-commerce-web-app.vercel.app",
    tags: ["Next.js 16", "TypeScript", "Redux Toolkit", "Firebase", "Tailwind CSS"],
  },
  {
    number: "02",
    year: "2025",
    title: "E-commerce Mobile",
    lede: "Complete mobile solution with separate React Native client and Node.js/Express REST API. Features infinite scroll and real-time updates.",
    role: "Mobile App Developer",
    url: "github.com/ArfatChowdhury/nemo-e-commerce-app",
    tags: ["React Native", "Node.js", "Express.js", "MongoDB", "Redux Toolkit"],
  },
  {
    number: "03",
    year: "2025",
    title: "Expense Tracker",
    lede: "Cross-platform mobile app for tracking expenses with global state management and offline persistence via AsyncStorage.",
    role: "Mobile App Developer",
    url: "github.com/ArfatChowdhury/react-native-expense-tracker",
    tags: ["React Native", "Expo", "Context API", "AsyncStorage", "React Navigation"],
  },
];

const quotes = [
  {
    text: "He doesn\u2019t just write code, he crafts experiences. Every detail is considered.",
    name: "Marcus Rodriguez",
    title: "CTO, Wavelength",
  },
  {
    text: "His attention to detail is extraordinary. Every micro-interaction is purposeful.",
    name: "Emily Zhang",
    title: "Design Director, Linear",
  },
];

const stats = [
  { number: 40, suffix: "+", label: "Projects shipped" },
  { number: 8, suffix: "", label: "Years of craft" },
  { number: 12, suffix: "k", label: "Open source stars" },
  { number: 15, suffix: "+", label: "Happy clients" },
];

/* ─── Helpers ─── */

function Meta({ number, year }: { number: string; year: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="font-mono text-[12px] text-[var(--gray-6)]">
        {number}
      </span>
      <div className="h-px flex-1 bg-[var(--gray-4)]" />
      <span className="font-mono text-[12px] text-[var(--gray-6)]">
        {year}
      </span>
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-1.5">
      {tags.map((t) => (
        <span
          key={t}
          className="rounded-md bg-[var(--gray-3)]/80 px-2 py-0.5 text-[11px] font-medium text-[var(--gray-8)]"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function Quote({ quote }: { quote: (typeof quotes)[0] }) {
  return (
    <BlurFade delay={0.1} inView>
      <blockquote className="border-l-2 border-[var(--gray-4)] pl-8">
        <p className="max-w-[480px] text-[17px] italic leading-[1.65] text-[var(--gray-9)]">
          &ldquo;{quote.text}&rdquo;
        </p>
        <cite className="mt-4 block text-[12px] not-italic text-[var(--gray-6)]">
          {quote.name} &mdash; {quote.title}
        </cite>
      </blockquote>
    </BlurFade>
  );
}

/* ─── Main ─── */

export function Work() {
  const p1 = projects[0];
  const p2 = projects[1];
  const p3 = projects[2];

  return (
    <section className="relative w-full">
      {/* ═══ Project 1: Full immersion — living card image + text below ═══ */}
      <div className="py-32 px-6">
        <div className="mx-auto max-w-[1120px]">
          <LivingCard
            variant={0}
            image={
              <PlaceholderImage
                width={1120}
                height={640}
                label={`${p1.title} — Component Library`}
                className="w-full border-0"
              />
            }
          />

          <div className="mt-10 max-w-[640px]">
            <BlurFade delay={0} inView>
              <Meta number={p1.number} year={p1.year} />
            </BlurFade>
            <BlurFade delay={0.05} inView>
              <h2 className="mb-4 text-[clamp(2rem,6vw,3.5rem)] font-bold tracking-[-0.03em] text-[var(--gray-12)]">
                {p1.title}
              </h2>
            </BlurFade>
            <BlurFade delay={0.1} inView>
              <p className="mb-3 text-[15px] leading-[1.7] text-[var(--gray-9)]">
                {p1.lede}
              </p>
              <p className="text-[12px] text-[var(--gray-7)]">{p1.role}</p>
            </BlurFade>
            <BlurFade delay={0.15} inView>
              <Tags tags={p1.tags} />
            </BlurFade>
          </div>
        </div>

        {/* Woven quote */}
        <div className="mx-auto mt-20 max-w-[960px] px-6">
          <Quote quote={quotes[0]} />
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

      {/* ═══ Project 2: Split — text left, living card right ═══ */}
      <div className="py-32 px-6">
        <div className="mx-auto max-w-[960px]">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <BlurFade delay={0} inView>
                <Meta number={p2.number} year={p2.year} />
              </BlurFade>

              <BlurFade delay={0.05} inView>
                <h2 className="mb-6 text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.03em] text-[var(--gray-12)]">
                  {p2.title}
                </h2>
              </BlurFade>

              <BlurFade delay={0.1} inView>
                <p className="mb-3 text-[15px] leading-[1.7] text-[var(--gray-8)]">
                  {p2.lede}
                </p>
                <p className="mt-2 text-[12px] text-[var(--gray-6)]">
                  {p2.role}
                </p>
              </BlurFade>

              <BlurFade delay={0.15} inView>
                <Tags tags={p2.tags} />
              </BlurFade>
            </div>

            <LivingCard
              variant={1}
              image={
                <PlaceholderImage
                  width={640}
                  height={480}
                  label={p2.title}
                  className="w-full border-0"
                />
              }
            />
          </div>
        </div>
      </div>

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

      {/* ═══ Project 3: Split reversed — living card left, text right ═══ */}
      <div className="py-32 px-6">
        <div className="mx-auto max-w-[960px]">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <LivingCard
              variant={2}
              image={
                <PlaceholderImage
                  width={640}
                  height={480}
                  label={p3.title}
                  className="w-full border-0"
                />
              }
            />

            <div>
              <BlurFade delay={0} inView>
                <Meta number={p3.number} year={p3.year} />
              </BlurFade>

              <BlurFade delay={0.05} inView>
                <h2 className="mb-6 text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.03em] text-[var(--gray-12)]">
                  {p3.title}
                </h2>
              </BlurFade>

              <BlurFade delay={0.1} inView>
                <p className="mb-3 text-[15px] leading-[1.7] text-[var(--gray-8)]">
                  {p3.lede}
                </p>
                <p className="mt-2 text-[12px] text-[var(--gray-6)]">
                  {p3.role}
                </p>
              </BlurFade>

              <BlurFade delay={0.15} inView>
                <Tags tags={p3.tags} />
              </BlurFade>
            </div>
          </div>

          {/* Second woven quote */}
          <div className="mt-20">
            <Quote quote={quotes[1]} />
          </div>
        </div>
      </div>
    </section>
  );
}
