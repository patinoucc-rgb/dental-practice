"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionEyebrow from "./SectionEyebrow";

export default function TreatmentExplorer() {
  const [activeTab, setActiveTab] = useState("cosmetic");

  const categories = [
    { id: "cosmetic", name: "Cosmetic", desc: "Transform your smile" },
    { id: "restorative", name: "Restorative", desc: "Rebuild and protect" },
    { id: "preventive", name: "Preventive", desc: "Maintain oral health" },
  ];

  const treatments = {
    cosmetic: [
      { name: "Invisalign®", price: "From $99/mo", image: "/hero-1.png" },
      { name: "Porcelain Veneers", price: "Custom Pricing", image: "/hero-2.png" },
      { name: "Professional Whitening", price: "From $299", image: "/hero-3.png" },
    ],
    restorative: [
      { name: "Dental Implants", price: "Free Consultation", image: "/hero-1.png" },
      { name: "Same-Day Crowns", price: "Insurance Accepted", image: "/hero-3.png" },
      { name: "Root Canal Therapy", price: "Pain-Free Option", image: "/hero-2.png" },
    ],
    preventive: [
      { name: "Comprehensive Exam", price: "$99 New Patient Special", image: "/hero-2.png" },
      { name: "Professional Cleaning", price: "Insurance Accepted", image: "/hero-1.png" },
      { name: "Oral Cancer Screening", price: "Included in Exam", image: "/hero-3.png" },
    ],
  };

  return (
    <section id="treatments" className="w-full py-24 bg-white dark:bg-navyslate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionEyebrow>Our Services</SectionEyebrow>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-navyslate-900 dark:text-white mb-4 tracking-tight text-balance">
            Comprehensive <span className="italic text-trustcyan-500">Care Options</span>
          </h2>
          <p className="text-lg text-navyslate-600 dark:text-navyslate-300">
            Explore our world-class treatments designed to restore health and aesthetics.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tabs */}
          <div className="w-full lg:w-1/3 flex flex-col space-y-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`text-left px-6 py-5 rounded-2xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-trustcyan-500 ${
                  activeTab === cat.id
                    ? "bg-canvas-50 dark:bg-navyslate-900 border-l-4 border-trustcyan-500 shadow-sm"
                    : "hover:bg-canvas-50/50 dark:hover:bg-navyslate-900/50 border-l-4 border-transparent"
                }`}
              >
                <h3 className={`text-xl font-bold ${activeTab === cat.id ? "text-navyslate-900 dark:text-white" : "text-navyslate-500 dark:text-navyslate-400"}`}>
                  {cat.name}
                </h3>
                <p className={`text-sm mt-1 ${activeTab === cat.id ? "text-navyslate-600 dark:text-navyslate-300" : "text-navyslate-400 dark:text-navyslate-500"}`}>
                  {cat.desc}
                </p>
              </button>
            ))}
          </div>

          {/* Treatment Cards Grid */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {treatments[activeTab as keyof typeof treatments].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white dark:bg-navyslate-900 rounded-2xl overflow-hidden border border-canvas-100 dark:border-navyslate-800 shadow-sm hover:shadow-2xl hover:shadow-trustcyan-500/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-48 relative overflow-hidden bg-canvas-50 dark:bg-navyslate-800">
                  <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-trustcyan-500/0 group-hover:bg-trustcyan-500/10 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-navyslate-900 dark:text-white mb-2">{item.name}</h4>
                  <p className="text-trustcyan-500 font-semibold text-sm mb-4">{item.price}</p>
                  <button className="text-navyslate-900 dark:text-white font-medium text-sm flex items-center group-hover:text-trustcyan-500 dark:group-hover:text-trustcyan-400 transition-colors focus:outline-none rounded-sm cursor-pointer">
                    Learn more 
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
