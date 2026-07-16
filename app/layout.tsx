import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import GoogleTranslate from "../components/GoogleTranslate";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumina Dental - Premium Dental Care",
  description:
    "Experience state-of-the-art dentistry in a relaxing, modern environment. Board-certified specialists dedicated to your optimal oral health.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} h-full antialiased bg-canvas-100 dark:bg-navyslate-950`} suppressHydrationWarning>      
      <body className="min-h-full flex flex-col bg-canvas-100 text-navyslate-900 dark:bg-navyslate-950 dark:text-navyslate-100 transition-colors duration-300">
        <ThemeProvider>
          <GoogleTranslate />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
