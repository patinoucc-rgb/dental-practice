"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogSection() {
  const posts = [
    { title: "How to Maintain Your Invisalign Aligners", date: "Oct 12, 2023", category: "Orthodontics", image: "/hero-1.png" },
    { title: "What to Expect During Teeth Whitening", date: "Sep 28, 2023", category: "Cosmetic", image: "/hero-2.png" },
    { title: "The Truth About Dental Implants", date: "Sep 15, 2023", category: "Implants", image: "/hero-3.png" },
    { title: "5 Signs You Might Need a Root Canal", date: "Aug 30, 2023", category: "General", image: "/hero-1.png" },
  ];

  return (
    <section className="w-full py-24 bg-canvas-50 dark:bg-navyslate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navyslate-900 dark:text-white mb-4">Patient <span className="text-trustcyan-500">Resources</span></h2>
            <p className="text-lg text-navyslate-600 dark:text-navyslate-300">Educational articles to help you maintain a healthy smile.</p>
          </div>
          <Link href="/blog" className="text-trustcyan-500 font-semibold hover:text-trustcyan-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-trustcyan-500 rounded-md p-1">
            View all articles &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex"
            >
              <Link href={`/blog/${idx}`} className="group flex flex-col bg-white dark:bg-navyslate-800 rounded-2xl overflow-hidden border border-canvas-100 dark:border-navyslate-700 shadow-sm hover:shadow-2xl hover:shadow-trustcyan-500/10 hover:-translate-y-2 transition-all duration-300 w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-trustcyan-500">
              <div className="relative h-48 w-full overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-navyslate-900/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-navyslate-900 dark:text-white">
                  {post.category}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <p className="text-xs text-navyslate-400 dark:text-navyslate-500 mb-2">{post.date}</p>
                <h3 className="text-lg font-bold text-navyslate-900 dark:text-white mb-3 group-hover:text-trustcyan-500 transition-colors">{post.title}</h3>
                <p className="mt-auto text-trustcyan-500 text-sm font-semibold flex items-center">
                  Read article
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </p>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
