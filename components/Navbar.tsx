"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-navyslate-950/80 backdrop-blur-md border-b border-canvas-50 dark:border-navyslate-800 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-display text-2xl font-semibold text-navyslate-900 dark:text-white tracking-tight">
              Lumina<span className="text-trustcyan-500">Dental</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="#treatments" className="text-navyslate-600 dark:text-navyslate-300 hover:text-trustcyan-500 dark:hover:text-trustcyan-400 transition-colors font-medium">Treatments</Link>
            <Link href="#journey" className="text-navyslate-600 dark:text-navyslate-300 hover:text-trustcyan-500 dark:hover:text-trustcyan-400 transition-colors font-medium">Our Process</Link>
            <Link href="#testimonials" className="text-navyslate-600 dark:text-navyslate-300 hover:text-trustcyan-500 dark:hover:text-trustcyan-400 transition-colors font-medium">Reviews</Link>
            
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full bg-canvas-50 dark:bg-navyslate-800 text-navyslate-600 dark:text-navyslate-300 hover:bg-canvas-100 dark:hover:bg-navyslate-700 transition-colors focus:outline-none cursor-pointer"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                )}
              </button>
            )}

            <button className="bg-trustcyan-500 hover:bg-trustcyan-600 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer">
              Book Appointment
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full bg-canvas-50 dark:bg-navyslate-800 text-navyslate-600 dark:text-navyslate-300 hover:bg-canvas-100 dark:hover:bg-navyslate-700 transition-colors focus:outline-none cursor-pointer"
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                )}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navyslate-600 dark:text-navyslate-300 hover:text-navyslate-900 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-trustcyan-500 p-2 rounded-md"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-navyslate-900 border-t border-canvas-50 dark:border-navyslate-800 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link href="#treatments" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-navyslate-600 dark:text-navyslate-300 hover:text-trustcyan-500 dark:hover:text-trustcyan-400 hover:bg-canvas-50 dark:hover:bg-navyslate-800 rounded-md">Treatments</Link>
            <Link href="#journey" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-navyslate-600 dark:text-navyslate-300 hover:text-trustcyan-500 dark:hover:text-trustcyan-400 hover:bg-canvas-50 dark:hover:bg-navyslate-800 rounded-md">Our Process</Link>
            <Link href="#testimonials" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-navyslate-600 dark:text-navyslate-300 hover:text-trustcyan-500 dark:hover:text-trustcyan-400 hover:bg-canvas-50 dark:hover:bg-navyslate-800 rounded-md">Reviews</Link>
            <div className="pt-4">
              <button className="w-full bg-trustcyan-500 hover:bg-trustcyan-600 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
