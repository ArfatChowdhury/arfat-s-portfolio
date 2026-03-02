"use client";

import { BlurFade } from "@/components/ui/blur-fade";

const details = [
  { label: "Focus", value: "MERN Stack, React Native" },
  { label: "Education", value: "HSC, Fateyabad College" },
  { label: "Based in", value: "Chittagong, Bangladesh" },
  { label: "Status", value: "Actively Seeking Roles" },
];

export function About() {
  return (
    <section id="about" className="relative w-full py-32 px-6">
      <div className="mx-auto max-w-[640px]">
        <BlurFade delay={0} inView>
          <p className="text-[clamp(1.125rem,2.5vw,1.375rem)] font-normal leading-[1.6] tracking-[-0.01em] text-[var(--gray-11)]">
            I&apos;m Naim Uddin Arafat. I&apos;m a self-taught Full-Stack JavaScript Developer with 10+ completed projects spanning MERN stack and React Native development.
          </p>
        </BlurFade>

        <BlurFade delay={0.1} inView>
          <p className="mt-8 text-[15px] leading-[1.7] text-[var(--gray-8)]">
            Specializing in React Native for the past 8 months, I build
            production-ready e-commerce platforms and mobile applications.
            My work sits at the intersection of performance and clean code.
          </p>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <div className="mt-10 flex flex-col gap-3 border-t border-[var(--gray-3)] pt-6">
            {details.map((d) => (
              <div
                key={d.label}
                className="flex items-center justify-between"
              >
                <span className="text-[13px] text-[var(--gray-7)]">
                  {d.label}
                </span>
                <span className="text-[13px] text-[var(--gray-10)]">
                  {d.value}
                </span>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
