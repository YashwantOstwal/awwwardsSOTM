"use client";

import LogoWithTrademark from "@/components/SVGs/LogoWithTrademark";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";
export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "-15deg"]);
  return (
    <>
      <motion.div
        ref={ref}
        style={{ x, rotate }}
        className="absolute inset-x-0 top-0 z-20 h-screen origin-bottom-left bg-[#ff0000] [mix-blend-mode:multiply]"
      />
      <motion.div
        style={{ x, rotate }}
        className="absolute inset-0 z-20 flex h-screen origin-bottom-left flex-col justify-end px-2 pb-2 lg:px-[1.27315vw] lg:pb-[1.27315vw]"
      >
        <LogoWithTrademark fill="#f8f8f8" />
      </motion.div>
    </>
  );
}
