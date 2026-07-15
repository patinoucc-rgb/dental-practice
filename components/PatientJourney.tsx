export default function PatientJourney() {
  const steps = [
    { number: "01", title: "Schedule Consultation", desc: "Book your visit online or call our front desk. We offer flexible scheduling, including same-day appointments." },
    { number: "02", title: "Comprehensive Exam", desc: "Meet with your doctor for a detailed 3D scan and oral exam. We listen to your concerns." },
    { number: "03", title: "Custom Treatment Plan", desc: "We design a tailored plan with transparent pricing and a clear timeline." },
    { number: "04", title: "Achieve Your Dream Smile", desc: "Experience pain-free, premium care and walk out with renewed confidence." },
  ];

  return (
    <section id="journey" className="w-full py-24 bg-canvas-50 dark:bg-navyslate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navyslate-900 dark:text-white mb-4">
            Your Journey to a <span className="text-trustcyan-500">Perfect Smile</span>
          </h2>
          <p className="text-lg text-navyslate-600 dark:text-navyslate-300">
            A seamless, stress-free process designed around your comfort.
          </p>
        </div>

        <ol className="space-y-6">
          {steps.map((step, index) => {
            const isEven = index % 2 !== 0;
            return (
              <li 
                key={index} 
                className={`flex flex-col md:flex-row items-start md:items-center gap-6 bg-white dark:bg-navyslate-800 p-8 rounded-2xl shadow-sm border border-canvas-100 dark:border-navyslate-700 transition-transform hover:-translate-y-1 ${
                  isEven ? "md:ml-16" : "md:mr-16"
                }`}
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-trustcyan-50 dark:bg-navyslate-900 border-2 border-trustcyan-100 dark:border-trustcyan-900 flex items-center justify-center">
                  <span className="text-2xl font-bold text-trustcyan-600 dark:text-trustcyan-400">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navyslate-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-navyslate-600 dark:text-navyslate-300">{step.desc}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
