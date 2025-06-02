"use client";

import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Label from "./Label";

interface HoverRevealProps {
  beforeHover: ReactNode | string;
  afterHover: ReactNode | string;
  className?: string;
}

export default function HoverReveal({
  beforeHover,
  afterHover,
  className,
}: HoverRevealProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={className}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0,
            },
          }}
          exit={{
            opacity: [0, 0, 1, 1, 0, 0],
            transition: {
              duration: 0.3,
              times: [0, 0.1, 0.1, 0.2, 0.2, 0.3].map((time) => time / 0.3),
            },
          }}
          key={isHovered ? "afterHover" : "beforeHover"}
          className="h-fit"
        >
          <Label>{isHovered ? afterHover : beforeHover}</Label>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
