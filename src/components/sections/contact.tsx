"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { Magnetic } from "@/components/ui/magnetic";
import { GravitationalText } from "@/components/ui/gravitational-text";
import { AvatarMosaic } from "@/components/ui/avatar-mosaic";

const socials = [
  { name: "GitHub", url: "https://github.com/ArfatChowdhury" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/naim-uddin-arafat" },
  { name: "Behance", url: "https://behance.net/arfatChowdhury" },
];

export function Contact() {
  return (
    <section id="contact" className="relative w-full px-6 py-40">
      <div className="mx-auto flex max-w-[960px] flex-col items-center text-center">
        {/* Scattered Assembly Avatar — fragments fly together on scroll */}
        <AvatarMosaic className="mb-16" />

        {/* Name reveal */}
        <BlurFade delay={0} inView>
          <GravitationalText
            intensity={12}
            radius={160}
            className="text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[0.9] tracking-[-0.04em] text-[var(--gray-12)]"
          >
            Naim Uddin Arafat
          </GravitationalText>
        </BlurFade>

        <BlurFade delay={0.1} inView>
          <p className="mt-6 text-[15px] leading-[1.6] text-[var(--gray-8)]">
            Full-Stack JavaScript & React Native Developer.
            <br />
            Specializing in MERN stack and mobile apps.
          </p>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <p className="mt-8 text-[14px] text-[var(--gray-6)]">
            If you care about this stuff too &mdash;
          </p>
        </BlurFade>

        <BlurFade delay={0.3} inView>
          <div className="mt-4">
            <Magnetic strength={0.15}>
              <a
                href="mailto:arfatahsan60@gmail.com"
                className="group inline-flex select-none items-center gap-2 rounded-full bg-[var(--gray-12)] px-6 py-3 text-[14px] font-medium text-[var(--gray-1)] transition-transform duration-[var(--duration-fast)] active:scale-[0.96]"
              >
                arfatahsan60@gmail.com
                <span className="inline-block transition-transform duration-[var(--duration-normal)] group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </a>
            </Magnetic>
          </div>
        </BlurFade>

        {/* Social links */}
        <BlurFade delay={0.4} inView>
          <div className="mt-12 flex gap-6">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] text-[var(--gray-6)] transition-colors duration-[var(--duration-fast)] hover:text-[var(--gray-10)]"
              >
                {s.name}
              </a>
            ))}
          </div>
        </BlurFade>

        {/* Copyright */}
        <div className="mt-20 flex items-center gap-3 text-[11px] text-[var(--gray-5)]">
          <p>&copy; {new Date().getFullYear()} Naim Uddin Arafat</p>
          <span className="text-[var(--gray-4)]">/</span>
          <a
            href="https://www.opale-ui.design/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-[var(--gray-8)]"
          >
            Designed by Opale UI
          </a>
        </div>
      </div>
    </section>
  );
}
