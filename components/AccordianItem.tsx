import { Dispatch, ReactNode, SetStateAction } from "react";
import { motion, AnimatePresence } from "motion/react";
import Arrow from "@/components/SVGs/Arrow";

export default function AccordianItem({
  activeIndex,
  setActiveIndex,
  label,
  children,
  index,
}: {
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  label: string;
  children: ReactNode;
  index: number;
}) {
  return (
    <motion.div
      layoutId={`item[${index}]`}
      className="relative overflow-hidden text-off-white"
    >
      <motion.button
        layoutId={`button[${index}]`}
        onClick={() =>
          activeIndex === index ? setActiveIndex(-1) : setActiveIndex(index)
        }
        className="relative mb-4 flex w-full items-start justify-between pb-[10px]"
      >
        <span className="text-[24px] leading-[0.95] font-[440] tracking-[-0.01em]">
          {label}
        </span>
        <div className="absolute inset-x-0 bottom-0 h-px bg-off-white" />
        <motion.span
          initial={{ rotate: "90deg" }}
          animate={{ rotate: activeIndex == index ? "-90deg" : "90deg" }}
        >
          <Arrow fill="#f8f8f8" />
        </motion.span>
      </motion.button>
      <AnimatePresence mode="popLayout">
        {activeIndex === index && (
          <motion.div
            layoutId={`description[${index}]`}
            className="flex flex-col pb-[30px] text-base leading-tight underline decoration-off-white"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
