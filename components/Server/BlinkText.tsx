import { cn } from "@/utils/cn";
import { MotionProps } from "motion/react";
import * as motion from "motion/react-client";
import { ReactNode } from "react";

interface BlinkTextProps extends MotionProps {
  children?: ReactNode;
  className?: string;
  repeat?: number;
}

export default function BlinkText({
  children,
  className,
  repeat = 0,
  ...rest
}: BlinkTextProps) {
  return (
    <motion.span initial="initial" whileHover="whileHover" {...rest}>
      <motion.span
        className={cn(className)}
        variants={{
          initial: { opacity: 1 },
          whileHover: {
            opacity: [0, 0, 1],
            transition: {
              duration: 0.125,
              times: [0, 0.1, 0.1].map((eachTime) => eachTime / 0.1),
              repeat,
              repeatDelay: 0.1,
            },
          },
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}
