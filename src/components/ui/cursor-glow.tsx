"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorGlow() {
  const [hasMouse, setHasMouse] = useState(false);
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const springConfig = { stiffness: 120, damping: 25, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover)");
    setHasMouse(mq.matches);

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    if (mq.matches) {
      window.addEventListener("mousemove", handleMove);
    }
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  if (!hasMouse) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[100] h-[500px] w-[500px] rounded-full"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, var(--cursor-glow-color) 0%, transparent 60%)",
      }}
    />
  );
}
