"use client";

import { BlurFade } from "@/components/ui/blur-fade";

const details = [
  { label: "Focus", value: "React Native · MERN Stack" },
  { label: "Based in", value: "Chittagong, Bangladesh" },
  { label: "Status", value: "Open to Remote Opportunities" },
  { label: "GitHub", value: "github.com/ArfatChowdhury" },
];

export function About() {
  return (
    <section id="about" className="relative w-full py-32 px-6">
      <div className="mx-auto max-w-[640px]">
        <BlurFade delay={0} inView>
          <p className="text-[clamp(1.125rem,2.5vw,1.375rem)] font-normal leading-[1.6] tracking-[-0.01em] text-[var(--gray-11)]">
            I&apos;m Naim Uddin Arafat — a self-taught full-stack developer from
            Chittagong, Bangladesh. I started designing interfaces on Fiverr in
            2019, and I never stopped building. Today I specialise in React Native
            and MERN Stack, with real production apps shipping to the Play Store
            and a social media app in development for a startup.
          </p>
        </BlurFade>

        <BlurFade delay={0.1} inView>
          <p className="mt-8 text-[15px] leading-[1.7] text-[var(--gray-8)]">
            I don&apos;t wait to feel ready. I ship, learn, and ship again.
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
