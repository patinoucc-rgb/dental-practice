"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="bg-navyslate-900 text-white px-4 py-3 relative z-50 overflow-hidden"
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-trustcyan-600/20 via-trustcyan-400/20 to-trustcyan-600/20 animate-gradient bg-[length:200%_auto]"></div>
          
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 relative z-10 text-sm font-medium">
            <div className="flex items-center gap-2 text-center sm:text-left">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-trustcyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-trustcyan-500"></span>
              </span>
              <span>
                <strong className="text-trustcyan-300">Summer Special:</strong> Free Initial Consultation & X-Rays for the first 50 new patients.
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-white/10 px-3 py-1 rounded-full border border-white/20 text-xs font-bold font-mono text-trustcyan-100">
                ONLY 12 SPOTS LEFT
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-white/60 hover:text-white transition-colors focus:outline-none p-1 cursor-pointer"
                aria-label="Close banner"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
