import { useEffect, useRef, useState } from "react";

export const useIsMouseIn = <T extends HTMLElement>() => {
  const containerRef = useRef<T>(null);
  const [mouseIn, setMouseIn] = useState(false);
  useEffect(() => {
    const handleMouseEnter = () => setMouseIn(true);
    const handleMouseLeave = () => setMouseIn(false);
    if (containerRef.current) {
      containerRef.current.addEventListener("mouseenter", handleMouseEnter);
      containerRef.current.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          "mouseenter",
          handleMouseEnter,
        );
        containerRef.current.removeEventListener(
          "mouseleave",
          handleMouseLeave,
        );
      }
    };
  });
  return { containerRef, mouseIn };
};
