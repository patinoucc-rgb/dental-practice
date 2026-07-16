"use client";

import { motion } from "framer-motion";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
      {/* Base canvas */}
      <div className="absolute inset-0 bg-canvas-100 dark:bg-navyslate-950 transition-colors duration-500" />

      {/* Subtle dotted grid */}
      <div className="absolute inset-0 bg-dot-grid text-navyslate-900/[0.035] dark:text-white/[0.04]" />

      {/* Slowly drifting ambient glows kept within the viewport */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-8%] w-[45vw] h-[45vw] rounded-full bg-trustcyan-400/15 dark:bg-trustcyan-500/12 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, -20, 0], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-[-12%] left-[-8%] w-[42vw] h-[42vw] rounded-full bg-trustcyan-300/12 dark:bg-trustcyan-700/12 blur-[130px]"
      />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -30, 0], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 8 }}
        className="absolute top-[35%] left-[40%] w-[35vw] h-[35vw] rounded-full bg-trustcyan-500/10 dark:bg-trustcyan-600/10 blur-[140px]"
      />
    </div>
  );
}
