import { cn } from "@/utils/cn";
import * as motion from "motion/react-client";
import { MotionProps } from "motion/react";
import React, { PropsWithChildren } from "react";

type DashedLinkProps = PropsWithChildren &
  MotionProps & {
    className?: string;
    underlineColor?: string;
  };
export default function UnderlineOnHover({
  children,
  className,
  underlineColor,

  ...rest
}: DashedLinkProps) {
  return (
    <motion.div
      initial="initial"
      whileHover="whileHover"
      className={cn("relative w-fit [line-height:1.2]", className)}
      {...rest}
    >
      {children}
      <motion.div
        style={{ backgroundColor: `${underlineColor}` }}
        className="absolute bottom-0 h-[1.25px] bg-void-black"
        variants={{
          initial: { width: "0%", right: "0px", left: "auto" },
          whileHover: { width: "100%", left: "0px", right: "auto" },
        }}
        transition={{
          left: {
            duration: 0,
          },
          right: {
            duration: 0,
          },
          default: {
            ease: [0.19, 1, 0.22, 1],
            duration: 0.8,
          },
        }}
      />
    </motion.div>
  );
}
