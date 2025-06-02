"use client";

import Arrow from "@/components/SVGs/Arrow";
import { useIsInitialRender } from "@/hooks/useIsInitialRender";
import { useIsMouseIn } from "@/hooks/useIsMouseIn";
import { cn } from "@/utils/cn";
import { cubicBezier } from "motion";
import { HTMLMotionProps, motion } from "motion/react";
import { PropsWithChildren } from "react";
import Link from "next/link";

type ButtonProps = HTMLMotionProps<"button"> &
  PropsWithChildren & {
    href: string;
  };

export default function Button({
  children,
  className,
  href,
  ...rest
}: ButtonProps) {
  const { containerRef, mouseIn } = useIsMouseIn<HTMLButtonElement>();
  const isInitialRender = useIsInitialRender();
  return (
    <>
      <style>
        {`
        #button{
            --inset-right:52px;
            --button-x:calc(-1 * var(--inset-right));
         }
        @media (min-width:1024px){
         #button{
            --inset-right:2.66204vw;
         }
        }
         `}
      </style>
      <Link href={href}>
        <motion.button
          ref={containerRef}
          id="button"
          initial="initial"
          animate={mouseIn ? "animate" : "initial"}
          className={cn(
            "relative max-w-1/2 cursor-pointer lg:w-fit",
            className,
          )}
          {...rest}
        >
          <motion.div
            variants={{
              initial: {
                x: "var(--button-x)",
              },
              animate: {
                x: "0px",
              },
            }}
            transition={{
              duration: 0.8,
              ease: cubicBezier(0.19, 1, 0.22, 1),
            }}
            className="flex items-center justify-between gap-8 lg:gap-[1.50463vw]"
          >
            <Arrow
              variants={{
                initial: {
                  opacity: isInitialRender ? 0 : [1, 0, 1, 0],
                  x: "100%",
                },
                animate: { opacity: [0, 1, 0, 1], x: "0%" },
              }}
              transition={{
                opacity: {
                  duration: 0.3,
                  ease: cubicBezier(0.19, 1, 0.22, 1),
                },
                default: {
                  duration: 0.8,
                  ease: cubicBezier(0.19, 1, 0.22, 1),
                },
              }}
              className="h-4.5 w-5 shrink-0 lg:h-[1.04167vw] lg:w-[1.15741vw]"
            />
            <span className="shrink-0 text-[24px] leading-[1] font-[440] tracking-[-0.01em] text-nowrap lg:text-[1.85185vw] lg:leading-[1.1]">
              {children}
            </span>
            <Arrow
              variants={{
                initial: {
                  opacity: isInitialRender ? 1 : [0, 1, 0, 1],
                  x: "0%",
                },
                animate: { opacity: [1, 0, 1, 0], x: "-100%" },
              }}
              transition={{
                opacity: {
                  duration: 0.3,
                  ease: cubicBezier(0.19, 1, 0.22, 1),
                },
                default: {
                  duration: 0.8,
                  ease: cubicBezier(0.19, 1, 0.22, 1),
                },
              }}
              className="h-4.5 w-5 shrink-0 lg:h-[1.04167vw] lg:w-[1.15741vw]"
            />
          </motion.div>

          <motion.div
            className="absolute bottom-0 h-[1.5px] bg-void-black"
            variants={{
              animate: {
                width: "0%",
                right: "var(--inset-right)",
                left: "auto",
              },
              initial: {
                width: "calc(100% - var(--inset-right))",
                left: "0px",
                right: "auto",
              },
            }}
            transition={{
              left: {
                duration: 0,
              },
              right: {
                duration: 0,
              },
              default: {
                duration: 0.8,
                times: [0, 1, 1],
                ease: cubicBezier(0.19, 1, 0.22, 1),
              },
            }}
          />
        </motion.button>
      </Link>
    </>
  );
}
