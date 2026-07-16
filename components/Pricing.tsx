"use client";

import { motion } from "framer-motion";
import SectionEyebrow from "./SectionEyebrow";

export default function Pricing() {
  const plans = [
    {
      name: "New Patient Special",
      price: "$99",
      period: "one-time",
      desc: "Perfect introduction to our practice.",
      features: [
        "Comprehensive Dental Exam",
        "Full Mouth X-Rays",
        "Professional Cleaning",
        "Personalized Treatment Plan",
      ],
      cta: "Claim Offer",
      popular: false,
    },
    {
      name: "Lumina VIP Membership",
      price: "$29",
      period: "/month",
      desc: "No insurance? No problem. Complete care.",
      features: [
        "2 Professional Cleanings per Year",
        "2 Doctor Exams & All X-Rays",
        "1 Emergency Exam",
        "20% Off All Other Treatments",
      ],
      cta: "Join the Club",
      popular: true,
    },
    {
      name: "Family Plan",
      price: "$89",
      period: "/month",
      desc: "Comprehensive coverage for up to 4 family members.",
      features: [
        "All VIP Membership Benefits",
        "Free Orthodontic Consultation",
        "Fluoride Treatments for Kids",
        "Priority Scheduling",
      ],
      cta: "Protect Your Family",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="w-full py-24 bg-canvas-100 dark:bg-navyslate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-trustcyan-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionEyebrow>Membership & Plans</SectionEyebrow>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-navyslate-900 dark:text-white mb-4 tracking-tight text-balance">
            Transparent, <span className="italic text-trustcyan-500">Accessible Care</span>
          </h2>
          <p className="text-lg text-navyslate-600 dark:text-navyslate-300">
            Premium dentistry shouldn't break the bank. Choose the plan that works best for your smile.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`relative bg-white dark:bg-navyslate-900 rounded-3xl p-8 shadow-xl border ${
                plan.popular 
                  ? "border-trustcyan-500 lg:-translate-y-4 shadow-trustcyan-500/20 z-10" 
                  : "border-canvas-50 dark:border-navyslate-800"
              } transition-all duration-300 hover:shadow-2xl flex flex-col h-full`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-trustcyan-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold text-navyslate-900 dark:text-white mb-2">{plan.name}</h3>
              <p className="text-sm text-navyslate-500 dark:text-navyslate-400 mb-6 min-h-[40px]">{plan.desc}</p>
              
              <div className="mb-6 flex items-baseline">
                <span className="font-display text-5xl font-semibold text-navyslate-900 dark:text-white">{plan.price}</span>
                <span className="text-navyslate-500 ml-1">{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start">
                    <svg className="w-5 h-5 text-trustcyan-500 mr-3 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navyslate-700 dark:text-navyslate-300 text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all focus:outline-none focus-visible:ring-4 cursor-pointer mt-auto ${
                plan.popular
                  ? "bg-trustcyan-500 hover:bg-trustcyan-600 text-white shadow-lg hover:shadow-trustcyan-500/40 focus-visible:ring-trustcyan-500/50"
                  : "bg-canvas-50 dark:bg-navyslate-800 text-navyslate-900 dark:text-white hover:bg-canvas-100 dark:hover:bg-navyslate-700 focus-visible:ring-navyslate-500/30"
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
