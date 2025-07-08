import { motion } from "framer-motion";

export function PromptToTestIcon() {
  return (
    <motion.svg width="48" height="48" viewBox="0 0 48 48" fill="none" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <rect x="4" y="8" width="40" height="32" rx="8" fill="#6366F1"/>
      <rect x="10" y="14" width="28" height="8" rx="4" fill="#fff"/>
      <rect x="10" y="26" width="18" height="4" rx="2" fill="#A5B4FC"/>
      <motion.circle cx="36" cy="28" r="4" fill="#3B82F6" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 1.5, repeat: Infinity }}/>
    </motion.svg>
  );
}
export function MultiCaseIcon() {
  return (
    <motion.svg width="48" height="48" viewBox="0 0 48 48" fill="none" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
      <rect x="8" y="8" width="32" height="32" rx="8" fill="#A5B4FC"/>
      <rect x="14" y="14" width="20" height="6" rx="3" fill="#fff"/>
      <rect x="14" y="26" width="20" height="6" rx="3" fill="#fff"/>
      <motion.circle cx="24" cy="24" r="4" fill="#6366F1" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.2, repeat: Infinity }}/>
    </motion.svg>
  );
}
export function BrowserIcon() {
  return (
    <motion.svg width="48" height="48" viewBox="0 0 48 48" fill="none" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
      <rect x="6" y="12" width="36" height="24" rx="6" fill="#3B82F6"/>
      <rect x="12" y="18" width="24" height="12" rx="3" fill="#fff"/>
      <motion.circle cx="16" cy="24" r="2" fill="#6366F1" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.3, repeat: Infinity }}/>
      <motion.circle cx="32" cy="24" r="2" fill="#6366F1" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.3, repeat: Infinity, delay: 0.2 }}/>
    </motion.svg>
  );
}
export function ScreenshotIcon() {
  return (
    <motion.svg width="48" height="48" viewBox="0 0 48 48" fill="none" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
      <rect x="10" y="14" width="28" height="20" rx="6" fill="#fff"/>
      <rect x="14" y="18" width="20" height="12" rx="3" fill="#6366F1"/>
      <motion.rect x="18" y="22" width="12" height="4" rx="2" fill="#A5B4FC" animate={{ scaleX: [1, 1.1, 1] }} transition={{ duration: 1.2, repeat: Infinity }}/>
    </motion.svg>
  );
}
export function AgentIcon() {
  return (
    <motion.svg width="48" height="48" viewBox="0 0 48 48" fill="none" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
      <circle cx="24" cy="24" r="20" fill="#6366F1"/>
      <motion.circle cx="24" cy="24" r="10" fill="#fff" animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 1.5, repeat: Infinity }}/>
      <rect x="20" y="20" width="8" height="8" rx="2" fill="#A5B4FC"/>
    </motion.svg>
  );
}
export function CICDIcon() {
  return (
    <motion.svg width="48" height="48" viewBox="0 0 48 48" fill="none" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
      <rect x="8" y="16" width="32" height="16" rx="8" fill="#3B82F6"/>
      <rect x="14" y="22" width="20" height="4" rx="2" fill="#fff"/>
      <motion.circle cx="24" cy="24" r="4" fill="#6366F1" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 1.2, repeat: Infinity }}/>
    </motion.svg>
  );
} 