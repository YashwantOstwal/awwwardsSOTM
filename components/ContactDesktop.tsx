"use client";

import ClosingLogoBlock from "./ClosingLogoBlock";
import CallToAction from "./Server/CallToAction";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ContactDesktop() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 1", "1 0"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "-12deg"]);

  return (
    <motion.div
      ref={ref}
      style={{ x, rotate }}
      className="origin-[0%_50%] bg-off-white"
    >
      <CallToAction />
      <ClosingLogoBlock />
    </motion.div>
  );
}
