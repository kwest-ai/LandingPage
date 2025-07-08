import { motion } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";

export default function DynamicBackground({ className = "", style = {}, children }: { className?: string; style?: CSSProperties; children?: ReactNode }) {
  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 ${className}`} style={style}>
      {/* Very light animated gradient */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ background: "linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%)" }}
        animate={{ background: [
          "linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%)",
          "linear-gradient(135deg, #f3f4f6 0%, #e0e7ff 100%)",
          "linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%)"
        ] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        style={{ opacity: 0.08 }}
      />
      {/* Floating SVG shapes, very faint */}
      <motion.svg width="320" height="320" className="absolute -top-24 -left-24" style={{ opacity: 0.07 }} initial={{ y: 0 }} animate={{ y: [0, 30, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}>
        <ellipse cx="160" cy="160" rx="160" ry="120" fill="#6366F1" />
      </motion.svg>
      <motion.svg width="120" height="120" className="absolute top-1/2 left-0" style={{ opacity: 0.05 }} initial={{ x: 0 }} animate={{ x: [0, 40, 0] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}>
        <circle cx="60" cy="60" r="60" fill="#3B82F6" />
      </motion.svg>
      <motion.svg width="180" height="180" className="absolute bottom-0 right-0" style={{ opacity: 0.06 }} initial={{ y: 0 }} animate={{ y: [0, -40, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}>
        <polygon points="90,10 170,170 10,170" fill="#7C3AED" />
      </motion.svg>
      {children}
    </div>
  );
} 