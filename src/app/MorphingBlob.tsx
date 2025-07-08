import { motion } from "framer-motion";

const blobShapes = [
  "M60,120 Q90,60 120,120 T180,120 Q210,180 240,120 T300,120 Q330,60 360,120 T420,120 Q450,180 480,120 V240 H60 Z",
  "M60,120 Q120,30 180,120 T300,120 Q360,210 420,120 T480,120 Q420,210 360,120 T240,120 Q180,30 120,120 T60,120 V240 H480 Z",
  "M60,120 Q90,180 120,120 T180,120 Q210,60 240,120 T300,120 Q330,180 360,120 T420,120 Q450,60 480,120 V240 H60 Z"
];

export default function MorphingBlob({ color = "#6366F1", duration = 8, className = "" }) {
  return (
    <svg viewBox="0 0 540 240" fill="none" className={className}>
      <motion.path
        d={blobShapes[0]}
        fill={color}
        initial={{ d: blobShapes[0] }}
        animate={{ d: blobShapes }}
        transition={{ duration, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        opacity={0.18}
      />
    </svg>
  );
} 