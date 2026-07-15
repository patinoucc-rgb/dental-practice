import Image from "next/image";

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
          <h2 className="text-3xl md:text-4xl font-bold text-navyslate-900 dark:text-white mb-4">
            Patient <span className="text-trustcyan-500">Stories</span>
          </h2>
          <p className="text-lg text-navyslate-600 dark:text-navyslate-300">Don't just take our word for it.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-canvas-50 dark:bg-navyslate-900 p-8 rounded-2xl relative shadow-sm hover:shadow-md transition-shadow border border-transparent dark:border-navyslate-800">
              <div className="text-trustcyan-500 mb-4">
                <svg className="w-10 h-10 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-lg text-navyslate-800 dark:text-navyslate-200 italic mb-8">"{testimonial.quote}"</p>
              
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
