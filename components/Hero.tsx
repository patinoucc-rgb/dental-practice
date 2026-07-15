import Image from "next/image";
import AnimatedBackground from "./AnimatedBackground";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24 transition-colors duration-300">
      
      {/* Dynamic Animated Background */}
      <AnimatedBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTA */}
          <div className="flex flex-col items-start space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white dark:bg-navyslate-900 shadow-sm border border-canvas-100 dark:border-navyslate-800 text-sm font-medium text-trustcyan-600 dark:text-trustcyan-400">
              <span className="flex h-2 w-2 rounded-full bg-trustcyan-500 mr-2 animate-pulse"></span>
              Accepting New Patients
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navyslate-900 dark:text-white tracking-tight leading-tight">
              Premium Dental Care for a <span className="text-trustcyan-500">Confident Smile</span>
            </h1>
            
            <p className="text-lg md:text-xl text-navyslate-600 dark:text-navyslate-300 max-w-lg leading-relaxed">
              Experience state-of-the-art dentistry in a relaxing, modern environment. Our board-certified specialists are dedicated to your optimal oral health.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <button className="bg-trustcyan-500 hover:bg-trustcyan-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto cursor-pointer">
                Book Consultation
              </button>
              <button className="bg-white dark:bg-navyslate-800 border-2 border-canvas-100 dark:border-navyslate-700 text-navyslate-800 dark:text-white hover:border-trustcyan-500 dark:hover:border-trustcyan-500 hover:text-trustcyan-500 dark:hover:text-trustcyan-400 px-8 py-4 rounded-full font-bold text-lg transition-all w-full sm:w-auto cursor-pointer">
                View Treatments
              </button>
            </div>
            
            <div className="flex items-center gap-4 pt-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-navyslate-950 bg-canvas-50 dark:bg-navyslate-800 flex items-center justify-center overflow-hidden">
                    <Image src={`/hero-${i > 3 ? 1 : i}.png`} alt="Patient" width={40} height={40} className="object-cover w-full h-full" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-medium text-navyslate-700 dark:text-navyslate-300">500+ 5-Star Reviews</p>
              </div>
            </div>
          </div>
          
          {/* Right Column: Masonry Image Grid */}
          <div className="relative lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0">
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="space-y-4 pt-12">
                <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-xl transform transition-transform hover:scale-105">
                  <Image src="/hero-1.png" alt="Premium Dental Care" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="relative h-48 w-full rounded-2xl overflow-hidden shadow-lg transform transition-transform hover:scale-105">
                  <Image src="/hero-2.png" alt="Happy Patient Smile" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-48 w-full rounded-2xl overflow-hidden shadow-lg transform transition-transform hover:scale-105">
                  <Image src="/hero-3.png" alt="Modern Clinic Interior" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="relative h-72 w-full rounded-2xl overflow-hidden shadow-xl transform transition-transform hover:scale-105">
                  <Image src="/hero-1.png" alt="Advanced Equipment" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md bg-trustcyan-500 rounded-full blur-[100px] opacity-10"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
