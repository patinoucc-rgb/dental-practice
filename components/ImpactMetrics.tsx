export default function ImpactMetrics() {
  const metrics = [
    { value: "10+", label: "Years Experience" },
    { value: "99%", label: "Success Rate" },
    { value: "5k+", label: "Happy Patients" },
    { value: "4.9", label: "Average Rating" },
  ];

  return (
    <section className="w-full bg-navyslate-900 dark:bg-navyslate-950 py-20 relative overflow-hidden transition-colors duration-300">
      {/* Animated Decorative background element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-trustcyan-500 blur-[120px] opacity-20 animate-float"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-trustcyan-500 blur-[120px] opacity-10 animate-float-delayed"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col">
              <dt className="text-base text-navyslate-300 font-medium order-2 mt-2">{metric.label}</dt>
              <dd className="text-4xl md:text-5xl font-extrabold text-white tracking-tight order-1">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
