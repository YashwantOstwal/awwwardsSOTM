"use client";
import { useIsDesktop } from "@/app/providers/root/WindowSizeProvider";
import dynamic from "next/dynamic";
const ScrollBar = dynamic(() => import("@/components/ScrollBar"), {
  ssr: false,
});

export default function ScrollBarWrapper() {
  const isDesktop = useIsDesktop();
  if (typeof isDesktop != "boolean" || !isDesktop) {
    return null;
  }
  return <ScrollBar />;
}
