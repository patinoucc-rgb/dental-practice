import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTA */}
          <div className="flex flex-col items-start space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white dark:bg-navyslate-900 shadow-sm border border-canvas-100 dark:border-navyslate-800 text-sm font-medium text-trustcyan-600 dark:text-trustcyan-400">
              <span className="flex h-2 w-2 rounded-full bg-trustcyan-500 mr-2 animate-pulse"></span>
              Accepting New Patients
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-navyslate-900 dark:text-white tracking-tight leading-[1.05] text-balance">
              Premium Dental Care for a{" "}
              <span className="italic text-trustcyan-500">Confident Smile</span>
            </h1>
            
            <p className="text-lg md:text-xl text-navyslate-600 dark:text-navyslate-300 max-w-lg leading-relaxed text-pretty">
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
            
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-2 sm:left-4 bg-white/90 dark:bg-navyslate-900/90 backdrop-blur-md rounded-2xl shadow-xl border border-canvas-100 dark:border-navyslate-800 px-5 py-4 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-trustcyan-500/10 text-trustcyan-500">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-navyslate-900 dark:text-white leading-none">5,000+</p>
                <p className="text-sm text-navyslate-500 dark:text-navyslate-400 mt-1">Smiles transformed</p>
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
