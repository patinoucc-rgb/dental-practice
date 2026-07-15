"use client";

import { motion } from "framer-motion";

export default function LogoCloud() {
  const logos = [
    { name: "Invisalign", opacity: "opacity-70 dark:opacity-60" },
    { name: "Philips Zoom!", opacity: "opacity-60 dark:opacity-50" },
    { name: "Delta Dental", opacity: "opacity-70 dark:opacity-60" },
    { name: "Cigna", opacity: "opacity-60 dark:opacity-50" },
    { name: "Aetna", opacity: "opacity-70 dark:opacity-60" },
  ];

  return (
    <section className="w-full bg-canvas-50 dark:bg-navyslate-900/50 py-10 border-y border-canvas-100 dark:border-navyslate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-navyslate-400 dark:text-navyslate-500 tracking-wider uppercase mb-8">
          Trusted Partners & Insurance Accepted
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`text-xl md:text-2xl font-black text-navyslate-900 dark:text-white ${logo.opacity} grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300`}
            >
              {logo.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
