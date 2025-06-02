"use client";
import { cn } from "@/utils/cn";
import { motion, MotionStyle } from "motion/react";
import { PropsWithChildren } from "react";
interface CursorProps extends PropsWithChildren {
  renderCursor: boolean;
  style: MotionStyle;
  className?: string;
}
export default function Cursor({
  renderCursor,
  children,
  className,
  style,
}: CursorProps) {
  return (
    <>
      {renderCursor && (
        <motion.div
          style={{ ...style }}
          aria-hidden
          className={cn("pointer-events-none fixed z-[50]", className)}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
