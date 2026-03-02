"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";

const careers = [
  {
    period: "2025 — Present",
    role: "Full-Stack Developer",
    company: "Personal Projects & Freelance",
    description:
      "Built 10+ production-ready platforms including e-commerce and mobile apps using the MERN stack and React Native.",
  },
  {
    period: "2025",
    role: "React Native Specialist",
    company: "Mobile Development",
    description:
      "Deep-dived into the React Native ecosystem, mastering Expo, NativeWind, and complex state management with Redux Toolkit.",
  },
  {
    period: "2017",
    role: "HSC Graduate",
    company: "Fateyabad City College",
    description:
      "Completed Higher Secondary Certificate with a focus on science and technology fundamentals.",
  },
  {
    period: "2015",
    role: "SSC Graduate",
    company: "Hathazari Parbati High School",
    description:
      "Completed Secondary School Certificate, laying the foundation for a career in engineering.",
  },
];

export function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const update = () => {
      const track = trackRef.current;
      const container = containerRef.current;
      if (!track || !container) return;
      setScrollDistance(
        Math.max(0, track.scrollWidth - container.clientWidth),
      );
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  return (
    <section ref={sectionRef} className="relative h-[250vh]">
      <div
        ref={containerRef}
        className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden"
      >
        <div className="mb-8 px-6 lg:pl-[max(1.5rem,calc((100vw-960px)/2))]">
          <BlurFade delay={0} inView>
            <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-[var(--gray-7)]">
              Previously
            </p>
          </BlurFade>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-6 pl-6 pr-6 lg:pl-[max(1.5rem,calc((100vw-960px)/2))]"
        >
          {careers.map((c, i) => (
            <div
              key={c.company}
              className={`living-card living-card-${i % 3} w-[360px] shrink-0 overflow-hidden bg-[var(--gray-2)] md:w-[400px]`}
            >
              <div className="flex h-full flex-col gap-4 p-7">
                <span className="font-mono text-[11px] text-[var(--gray-6)]">
                  {c.period}
                </span>
                <div>
                  <h3 className="text-[18px] font-semibold tracking-[-0.01em] text-[var(--gray-12)]">
                    {c.role}
                  </h3>
                  <p className="mt-1 text-[14px] font-medium text-[var(--gray-9)]">
                    {c.company}
                  </p>
                </div>
                <p className="text-[14px] leading-[1.65] text-[var(--gray-8)]">
                  {c.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll progress indicator */}
        <div className="mt-8 px-6 lg:pl-[max(1.5rem,calc((100vw-960px)/2))]">
          <div className="h-px w-[200px] overflow-hidden rounded-full bg-[var(--gray-3)]">
            <motion.div
              className="h-full rounded-full bg-[var(--gray-7)]"
              style={{
                width: useTransform(
                  scrollYProgress,
                  [0, 1],
                  ["0%", "100%"],
                ),
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
