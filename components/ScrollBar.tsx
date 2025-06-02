"use client";

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

export default function ScrollBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollBarHeight = (4.62963 * window.innerWidth) / 100;
  const scrollY = useMotionValue(0);

  const y = useTransform(
    scrollY,
    [
      0,
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight,
    ],
    [0, document.documentElement.clientHeight - scrollBarHeight],
  );
  const windowTop = useTransform(
    y,
    [0, document.documentElement.clientHeight - scrollBarHeight],
    [
      0,
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight,
    ],
  );

  useMotionValueEvent(windowTop, "change", (latest) => {
    window.scrollTo({
      top: Math.floor(latest),
    });
  });

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);
  return (
    <motion.div
      ref={containerRef}
      className="fixed top-0 right-0 h-screen w-[0.46296vw]"
    >
      <motion.div
        dragConstraints={containerRef}
        style={{ y }}
        drag="y"
        dragMomentum={false}
        dragElastic={false}
        className="h-[4.62963vw] w-full cursor-grab bg-void-black"
      />
    </motion.div>
  );
}
