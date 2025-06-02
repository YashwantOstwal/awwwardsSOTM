"use client";
import { useState } from "react";
import ReachOut from "./ReachOut";
import AccordianGroup from "@/components/Client/AccordianGroup";
import { useIsDesktop } from "@/app/providers/root/WindowSizeProvider";

export default function FooterMobile() {
  const isDesktop = useIsDesktop();
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  if (isDesktop != false) {
    return null;
  }
  return (
    <>
      <ReachOut />
      <AccordianGroup
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </>
  );
}
