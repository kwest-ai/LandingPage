import { motion } from "framer-motion";
import type { CSSProperties } from "react";

export default function AnimatedLogo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.08, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <defs>
        <linearGradient id="kgrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366F1" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="20" fill="url(#kgrad)" />
      <motion.text
        x="50%"
        y="54%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="22"
        fontWeight="bold"
        fill="#fff"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ fontFamily: 'Inter, sans-serif' } as CSSProperties}
      >
        K
      </motion.text>
    </motion.svg>
  );
} 