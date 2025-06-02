"use client";
import FlickerText from "@/components/FlickerText";
import Arrow from "@/components/SVGs/Arrow";
import { cn } from "@/utils/cn";
import { cubicBezier } from "motion";
import { motion } from "motion/react";
export default function CallToAction({ className }: { className?: string }) {
  return (
    <motion.div
      initial="initial"
      whileHover="whileHover"
      className={cn(
        "relative flex cursor-pointer items-center justify-between pt-[178px] lg:px-[0.46296vw] lg:pt-[18.51852vw]",
        className,
      )}
    >
      <Arrow
        variants={{
          initial: {
            x: "-100%",
          },
          whileHover: {
            x: "0%",
          },
        }}
        transition={{
          duration: 0.8,
          ease: cubicBezier(0.19, 1, 0.22, 1),
        }}
        className="absolute left-0 h-[50px] w-[58px] lg:left-[0.5787vw] lg:h-[8.96991vw] lg:w-[10.70602vw]"
      />
      <FlickerText>{"Let's talk"}</FlickerText>
      <Arrow
        className="right-0 h-[50px] w-[58px] lg:left-[0.5787vw] lg:h-[8.96991vw] lg:w-[10.70602vw]"
        variants={{
          initial: {
            x: "0%",
          },
          whileHover: {
            x: "100%",
          },
        }}
        transition={{
          duration: 0.8,
          ease: cubicBezier(0.19, 1, 0.22, 1),
        }}
      />
    </motion.div>
  );
}
