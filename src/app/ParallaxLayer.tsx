import { useEffect, useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

type ParallaxLayerProps = {
  children: ReactNode;
  speed?: number;
  className?: string;
};

export default function ParallaxLayer({ children, speed = 0.2, className = "" }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setOffset(window.scrollY * speed - rect.top * speed);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);
  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ willChange: "transform" }}
      animate={{ y: offset }}
      transition={{ type: "spring", stiffness: 40, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

export type { ParallaxLayerProps }; 