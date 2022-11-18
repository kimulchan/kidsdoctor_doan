import { useEffect, useRef } from "react";

type animationNameType = "fadeUp" | "fadeLeft" | "fadeDown";

export const useAnimation = (
  animationName: animationNameType,
  delay: number = 0,
  option: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  }
) => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      const elTarget = entry.target as HTMLElement;
      elTarget.style.opacity = "0";
      if (entry.isIntersecting) {
        elTarget.style.animation = `1s ease ${delay}s forwards ${animationName}`;
      }
    }, option);

    ref.current && observer.observe(ref.current);
    return () => observer && observer.disconnect();
  }, [animationName, delay, option]);

  return { ref };
};
