"use client";
import {
  motion,
  MotionValue,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect } from "react";
import SectionHeader from "@/components/Server/SectionHeader";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useSetNavTheme } from "@/app/providers/root/NavThemeProvider";

export default function HighlightCard({
  backgroundColor,
}: {
  backgroundColor: MotionValue<string>;
}) {
  const setNavTheme = useSetNavTheme();
  const ref = useIntersectionObserver<HTMLDivElement>(
    ([
      {
        isIntersecting,
        boundingClientRect: { top },
      },
    ]) => {
      if (isIntersecting) {
        setNavTheme("light");
      } else if (!isIntersecting && top < 0) {
        setNavTheme("dark");
      }
    },
    { threshold: 1 },
  );
  const isInView = useInView(ref);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.3, 0.55, 1],
    ["7deg", "0deg", "0deg", "-3deg"],
  );
  const x = useTransform(
    scrollYProgress,
    [0, 0.3, 0.55, 1],
    ["-10%", "0%", "0%", "-8%"],
  );
  const y = useTransform(scrollYProgress, [0.55, 1], ["0%", "3%"]);
  useEffect(() => {
    if (isInView) backgroundColor.set("transparent");
    else backgroundColor.set("var(--color-cool-gray)");
  }, [isInView, backgroundColor]);

  return (
    <div ref={ref} className="relative z-20 max-h-[25vh]">
      <motion.div
        style={{ x, rotate, y }}
        className="h-screen origin-[0%_0%] bg-off-white px-2 pt-2 lg:origin-[0%_50%] lg:px-[0.46296vw] lg:pt-[0.46296vw]"
      >
        <SectionHeader label="About the Line" title="Highlights" />
      </motion.div>
    </div>
  );
}
