"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LeadCapture() {
  return (
    <section className="w-full py-20 bg-canvas-50 dark:bg-navyslate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-navyslate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-canvas-100 dark:border-navyslate-700"
        >
          {/* Left Side: Copy & Image */}
          <div className="md:w-5/12 bg-trustcyan-600 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-trustcyan-500 rounded-full blur-[80px] opacity-50 pointer-events-none"></div>
            
            <div className="relative z-10 text-white">
              <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
                Don't let dental anxiety hold you back.
              </h3>
              <p className="text-trustcyan-100 mb-8">
                Download our free guide on "Pain-Free Modern Dentistry" or book your no-pressure consultation today. We listen before we treat.
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full border-2 border-white/20 bg-trustcyan-500 flex items-center justify-center overflow-hidden shrink-0">
                  <Image src="/hero-1.png" alt="Dr. Smith" width={48} height={48} className="object-cover" />
                </div>
                <div>
                  <p className="font-bold">Dr. Sarah Jenkins</p>
                  <p className="text-sm text-trustcyan-200">Lead Practitioner</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="md:w-7/12 p-8 md:p-12 bg-white dark:bg-navyslate-800">
            <h4 className="text-xl font-bold text-navyslate-900 dark:text-white mb-6">
              Request Your Free Consultation
            </h4>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="first_name" className="text-sm font-medium text-navyslate-700 dark:text-navyslate-300">First Name</label>
                  <input type="text" id="first_name" className="w-full px-4 py-3 rounded-lg border border-canvas-100 dark:border-navyslate-700 bg-canvas-50 dark:bg-navyslate-900 text-navyslate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-trustcyan-500 focus:border-transparent transition-shadow" placeholder="John" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="last_name" className="text-sm font-medium text-navyslate-700 dark:text-navyslate-300">Last Name</label>
                  <input type="text" id="last_name" className="w-full px-4 py-3 rounded-lg border border-canvas-100 dark:border-navyslate-700 bg-canvas-50 dark:bg-navyslate-900 text-navyslate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-trustcyan-500 focus:border-transparent transition-shadow" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-medium text-navyslate-700 dark:text-navyslate-300">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-canvas-100 dark:border-navyslate-700 bg-canvas-50 dark:bg-navyslate-900 text-navyslate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-trustcyan-500 focus:border-transparent transition-shadow" placeholder="john@example.com" />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="phone" className="text-sm font-medium text-navyslate-700 dark:text-navyslate-300">Phone Number</label>
                <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-canvas-100 dark:border-navyslate-700 bg-canvas-50 dark:bg-navyslate-900 text-navyslate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-trustcyan-500 focus:border-transparent transition-shadow" placeholder="(555) 123-4567" />
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-trustcyan-500 hover:bg-trustcyan-600 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-md hover:shadow-lg cursor-pointer flex justify-center items-center gap-2">
                  Secure My Spot
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
                <p className="text-center text-xs text-navyslate-400 dark:text-navyslate-500 mt-4 flex items-center justify-center gap-1">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  Your information is 100% secure and HIPAA compliant.
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
