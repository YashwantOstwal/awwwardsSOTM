"use client";

import { useEffect, useRef, useState } from "react";
import Arrow from "@/components/SVGs/Arrow";
import { cn } from "@/utils/cn";

export default function Input({ className }: { className?: string }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [placeholder, setPlaceholder] = useState("Newsletter");
  const controlInterval = useRef<NodeJS.Timeout>(undefined);
  const handleFocus = () => {
    const newPlaceholder = "Enter email";
    let i = 0;
    controlInterval.current = setInterval(() => {
      setPlaceholder(newPlaceholder.slice(0, i));
      i++;
      if (i > newPlaceholder.length) {
        clearInterval(controlInterval.current);
      }
    }, 100);
  };
  const handleChange = () => {
    // inputRef?.current?.value;
    clearInterval(controlInterval.current);
    setPlaceholder("Enter email");
  };
  const handleBlur = () => {
    clearInterval(controlInterval.current);
    setPlaceholder("Newletter");
  };
  useEffect(() => {
    return () => clearInterval(controlInterval.current);
  }, []);
  return (
    <form
      action={undefined}
      className={cn(
        "flex w-full border-b border-off-white text-[32px] leading-[0.8] font-[470] tracking-[-0.01em] text-off-white lg:mb-[.46296vw] lg:max-w-[53.24306vw] lg:text-[3.7037vw]",
        className,
      )}
    >
      <div className="flex-1">
        <input
          ref={inputRef}
          onFocus={handleFocus}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          type="email"
          name="email"
          placeholder={placeholder}
          className="h-full w-full placeholder-off-white accent-off-white outline-none"
        />
      </div>
      <button
        className="cursor-pointer"
        aria-label="Submit email"
        type="submit"
      >
        <Arrow fill="#f8f8f8" className="h-auto w-[25px] lg:w-[3.47222vw]" />
      </button>
    </form>
  );
}
