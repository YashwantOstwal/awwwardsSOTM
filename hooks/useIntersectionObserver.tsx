import { useEffect, useRef } from "react";

export default function useIntersectionObserver<T extends HTMLElement>(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  });
  return ref;
}
