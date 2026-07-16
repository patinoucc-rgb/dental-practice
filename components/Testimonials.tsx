import Image from "next/image";
import SectionEyebrow from "./SectionEyebrow";

export default function Testimonials() {
  const testimonials = [
    { quote: "The best dental experience I've ever had. Painless, professional, and the results are stunning.", author: "Sarah Jenkins", role: "Patient" },
    { quote: "I finally have the confidence to smile again. The team made me feel incredibly comfortable.", author: "Michael Chen", role: "Patient" },
    { quote: "State-of-the-art clinic with doctors who truly care about your long-term oral health.", author: "Emma Watson", role: "Patient" },
  ];

  return (
    <section id="testimonials" className="w-full py-24 bg-white dark:bg-navyslate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionEyebrow>Testimonials</SectionEyebrow>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-navyslate-900 dark:text-white mb-4 tracking-tight text-balance">
            Patient <span className="italic text-trustcyan-500">Stories</span>
          </h2>
          <p className="text-lg text-navyslate-600 dark:text-navyslate-300">Don&apos;t just take our word for it.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="flex flex-col bg-canvas-50 dark:bg-navyslate-900 p-8 rounded-3xl relative shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-canvas-100 dark:border-navyslate-800">
              <div className="flex text-yellow-400 mb-5" aria-label="5 out of 5 stars">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-navyslate-800 dark:text-navyslate-200 mb-8 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-canvas-100 dark:bg-navyslate-800 overflow-hidden relative">
                  <Image 
                    src={`/hero-${(idx % 3) + 1}.png`} 
                    alt={testimonial.author} 
                    fill 
                    className="object-cover" 
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-navyslate-900 dark:text-white">{testimonial.author}</h4>
                  <p className="text-sm text-navyslate-500 dark:text-navyslate-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
