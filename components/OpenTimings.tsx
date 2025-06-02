"use client";
import { motion } from "motion/react";
import Label from "./Label";
import BlinkText from "./Server/BlinkText";
import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
export default function OpenTimings() {
  const [isStudioOpen, setIsStudioOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const londonTimeIn24 = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/london",
      hour: "2-digit",
      hour12: false,
    }).format(new Date());
    setIsStudioOpen(Number(londonTimeIn24) > 10 && Number(londonTimeIn24) < 18);
  }, []);
  if (isStudioOpen == null) {
    return null;
  }
  return (
    <motion.span
      initial="initial"
      {...(isStudioOpen && { whileHover: "whileHover" })}
    >
      <Label>
        <BlinkText
          initial={false}
          whileHover={undefined}
          repeat={1}
          className={cn(
            "after:inline-block after:rounded-full after:p-[0.23148vw]",
            isStudioOpen ? "after:bg-flare-red" : "after:bg-void-black",
          )}
        />
        &nbsp; {isStudioOpen ? "Open" : "Closed"}&nbsp;(10—6pm)
      </Label>
    </motion.span>
  );
}
