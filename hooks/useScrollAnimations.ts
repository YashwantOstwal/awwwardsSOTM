import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function useScrollAnimations(values: {
  x: string[];
  y: string[];
  rotate: string[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], values["x"]);
  const y = useTransform(scrollYProgress, [0, 1], values["y"]);
  const rotate = useTransform(scrollYProgress, [0, 1], values["rotate"]);
  return {
    containerRef,
    style: { x, y, rotate },
  };
}

export { useScrollAnimations };
