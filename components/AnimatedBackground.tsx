"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Base background */}
      <div className="absolute inset-0 bg-canvas-50 dark:bg-navyslate-950 transition-colors duration-500" />

      {/* Subtle dotted grid */}
      <div className="absolute inset-0 bg-dot-grid text-navyslate-900/[0.04] dark:text-white/[0.04]" />

      {/* Soft radial spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_70%_20%,theme(colors.trustcyan.500/0.10),transparent)]" />

      {/* Two gentle, slow glows */}
      <motion.div
        animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-8%] right-[-6%] w-[42%] h-[42%] rounded-full bg-trustcyan-400/20 dark:bg-trustcyan-500/15 blur-[110px]"
      />
      <motion.div
        animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-[-10%] left-[-6%] w-[40%] h-[40%] rounded-full bg-trustcyan-300/15 dark:bg-trustcyan-700/15 blur-[120px]"
      />

      {/* Fade to page bottom for a clean seam */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-canvas-50 dark:to-navyslate-950" />
    </div>
  );
}
