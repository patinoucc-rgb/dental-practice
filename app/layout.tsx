import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import GoogleTranslate from "../components/GoogleTranslate";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dental Clinic - Premium Dental Care",
  description: "Your trusted dental clinic providing comprehensive dental care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>      
      <body className="min-h-full flex flex-col bg-canvas-100 text-navyslate-900 dark:bg-navyslate-950 dark:text-navyslate-100 transition-colors duration-300">
        <ThemeProvider>
          <GoogleTranslate />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
