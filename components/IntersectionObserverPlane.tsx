"use client";
import { useSetNavTheme } from "@/app/providers/root/NavThemeProvider";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { cn } from "@/utils/cn";

interface IntersectionObserverPlaneProps {
  className?: string;
  setThemeTo: "dark" | "light";
  setThemeFrom: "light" | "dark";
}

export default function IntersectionObserverPlane({
  className,
  setThemeTo,
  setThemeFrom,
}: IntersectionObserverPlaneProps) {
  const setNavTheme = useSetNavTheme();
  const ref = useIntersectionObserver<HTMLDivElement>(
    ([
      {
        isIntersecting,
        boundingClientRect: { top },
      },
    ]) => {
      if (isIntersecting) {
        setNavTheme(setThemeFrom);
      } else if (!isIntersecting && top < 0) {
        setNavTheme(setThemeTo);
      }
    },
    { threshold: 1 },
  );
  return <div ref={ref} className={cn("invisible", className)} />;
}
