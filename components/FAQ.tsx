"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionEyebrow from "./SectionEyebrow";

const faqs = [
  {
    question: "Do you accept my insurance?",
    answer: "We are in-network with most major PPO insurance providers, including Delta Dental, Cigna, Aetna, and MetLife. Our team will happily verify your benefits before your appointment to ensure you know exactly what is covered."
  },
  {
    question: "Is modern dentistry really pain-free?",
    answer: "Yes! Your comfort is our top priority. We use the latest technology, including laser dentistry and advanced local anesthetics, to minimize discomfort. We also offer sedation options for anxious patients."
  },
  {
    question: "How long does a typical new patient visit take?",
    answer: "Your initial visit will take about 60 to 90 minutes. This includes a comprehensive exam by the doctor, full mouth digital X-rays, a professional cleaning (if no gum disease is present), and a personalized consultation to discuss your smile goals."
  },
  {
    question: "Do you offer financing options if I don't have insurance?",
    answer: "Absolutely. We believe everyone deserves a healthy smile. We offer an in-house VIP Membership Plan with significant discounts, and we partner with CareCredit for flexible, interest-free payment plans."
  },
  {
    question: "What should I do in a dental emergency?",
    answer: "Call us immediately! We reserve specific times in our daily schedule to accommodate emergency patients. If you are experiencing severe pain, swelling, or a knocked-out tooth, we will make every effort to see you the same day."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-24 bg-white dark:bg-navyslate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionEyebrow>Got Questions?</SectionEyebrow>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-navyslate-900 dark:text-white mb-4 tracking-tight text-balance">
            Frequently Asked <span className="italic text-trustcyan-500">Questions</span>
          </h2>
          <p className="text-lg text-navyslate-600 dark:text-navyslate-300">
            Everything you need to know about your first visit and our practice.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="border border-canvas-100 dark:border-navyslate-800 rounded-2xl overflow-hidden bg-canvas-50 dark:bg-navyslate-900"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-trustcyan-500 cursor-pointer"
                aria-expanded={openIndex === idx}
              >
                <span className="font-bold text-lg text-navyslate-900 dark:text-white pr-8">
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? "rotate-180 text-trustcyan-500" : "text-navyslate-400"}`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 pt-1 text-navyslate-600 dark:text-navyslate-300">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
