"use client";

import { motion } from "framer-motion";

export default function ServiceHighlight() {
  return (
    <section className="w-full bg-trustcyan-500 py-16 md:py-20 relative overflow-hidden animate-gradient bg-gradient-to-r from-trustcyan-500 via-trustcyan-600 to-trustcyan-500 bg-[length:200%_200%]">
      <div className="absolute inset-0 bg-white opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
      >
        <h2 className="font-display text-4xl md:text-6xl font-semibold text-white mb-6 leading-[1.05] tracking-tight text-balance">
          Ready to transform your smile?
        </h2>
        <p className="text-trustcyan-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Join thousands of happy patients. Book your comprehensive consultation today and let us take care of the rest.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-trustcyan-600 hover:bg-canvas-50 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 cursor-pointer">
            Book Appointment Now
          </button>
          <button className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white px-8 py-4 rounded-full font-bold text-lg transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 cursor-pointer">
            Call (555) 123-4567
          </button>
        </div>
      </motion.div>
    </section>
  );
}
