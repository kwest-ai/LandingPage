import { useEffect, useRef, useState } from "react";

export default function useCountUp(end: number, duration = 2): [React.RefObject<HTMLSpanElement>, number] {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  useEffect(() => {
    let started = false;
    let frame: number;
    let startTime: number;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = (now - startTime) / 1000;
            const progress = Math.min(elapsed / duration, 1);
            setValue(Math.floor(progress * end));
            if (progress < 1) {
              frame = requestAnimationFrame(animate);
            } else {
              setValue(end);
            }
          };
          frame = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [end, duration]);
  return [ref, value];
} 