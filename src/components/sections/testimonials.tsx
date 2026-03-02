"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const testimonials = [
  {
    quote:
      "Alex has a rare ability to bridge design and engineering. The interfaces he builds feel alive.",
    name: "Sarah Kim",
    role: "VP of Product, Vercel",
  },
  {
    quote:
      "Delivered our design system ahead of schedule. The component quality is best-in-class.",
    name: "David Park",
    role: "Engineering Manager, Stripe",
  },
  {
    quote:
      "He approaches every project like it\u2019s his own product. That level of ownership is rare.",
    name: "Lisa Chen",
    role: "Founder, Meridian",
  },
];

function TestimonialSlide({
  testimonial,
  scrollProgress,
  index,
  total,
}: {
  testimonial: (typeof testimonials)[0];
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  index: number;
  total: number;
}) {
  const segment = 1 / total;
  const start = index * segment;
  const fadeIn = start + segment * 0.15;
  const fadeOut = start + segment * 0.85;
  const end = (index + 1) * segment;

  const opacity = useTransform(
    scrollProgress,
    [start, fadeIn, fadeOut, end],
    [0, 1, 1, 0],
  );
  const y = useTransform(
    scrollProgress,
    [start, fadeIn, fadeOut, end],
    [40, 0, 0, -40],
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col items-center justify-center px-6"
    >
      <p className="max-w-[680px] text-center text-[clamp(1.5rem,4vw,2.25rem)] font-normal leading-[1.4] tracking-[-0.02em] text-[var(--gray-11)]">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-8 text-center">
        <p className="text-[14px] font-medium text-[var(--gray-10)]">
          {testimonial.name}
        </p>
        <p className="mt-1 text-[12px] text-[var(--gray-6)]">
          {testimonial.role}
        </p>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={ref}
      style={{ height: `${testimonials.length * 100}vh` }}
      className="relative"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <div className="relative h-full w-full">
          {testimonials.map((t, i) => (
            <TestimonialSlide
              key={t.name}
              testimonial={t}
              scrollProgress={scrollYProgress}
              index={i}
              total={testimonials.length}
            />
          ))}
        </div>

        {/* Progress dots */}
        <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 gap-2">
          {testimonials.map((_, i) => {
            const segment = 1 / testimonials.length;
            const midpoint = (i + 0.5) * segment;
            return (
              <ProgressDot
                key={i}
                scrollProgress={scrollYProgress}
                midpoint={midpoint}
                segment={segment}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProgressDot({
  scrollProgress,
  midpoint,
  segment,
}: {
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  midpoint: number;
  segment: number;
}) {
  const opacity = useTransform(
    scrollProgress,
    [midpoint - segment * 0.5, midpoint, midpoint + segment * 0.5],
    [0.2, 1, 0.2],
  );
  const scale = useTransform(
    scrollProgress,
    [midpoint - segment * 0.5, midpoint, midpoint + segment * 0.5],
    [1, 1.5, 1],
  );

  return (
    <motion.div
      style={{ opacity, scale }}
      className="h-1.5 w-1.5 rounded-full bg-[var(--gray-8)]"
    />
  );
}
