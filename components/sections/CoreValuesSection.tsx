interface Value {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

const values: Value[] = [
  {
    icon: '✓',
    title: 'Quality',
    description: 'Only genuine products from authorized sources',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    icon: '🤝',
    title: 'Integrity',
    description: 'Transparent pricing and honest business practices',
    gradient: 'from-blue-500 to-cyan-600'
  },
  {
    icon: '⚡',
    title: 'Reliability',
    description: 'On-time delivery and consistent performance',
    gradient: 'from-yellow-500 to-orange-600'
  },
  {
    icon: '💡',
    title: 'Excellence',
    description: 'Continuous improvement in service delivery',
    gradient: 'from-purple-500 to-pink-600'
  }
];

export default function CoreValuesSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-cement-light/50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-industrial-green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block">
            <span className="text-industrial-green font-bold text-sm uppercase tracking-widest mb-2 block">Our Foundation</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-charcoal mb-3 uppercase tracking-tight">
              Our Core Values
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-industrial-green to-accent mx-auto rounded-full"></div>
          </div>
          <p className="text-gray-600 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            The principles that guide our business and define who we are
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 text-center transition-all duration-300 hover:-translate-y-3 border-2 border-gray-100 hover:border-industrial-green/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-industrial-green/0 to-accent/0 group-hover:from-industrial-green/5 group-hover:to-accent/5 transition-all duration-300"></div>
              
              <div className="relative">
                <div className={`w-20 h-20 bg-gradient-to-br ${value.gradient} text-white rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  {value.icon}
                </div>
                
                <h4 className="text-xl sm:text-2xl font-bold text-charcoal mb-3 group-hover:text-industrial-green transition-colors uppercase tracking-tight">
                  {value.title}
                </h4>
                
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {value.description}
                </p>
                
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-industrial-green to-accent group-hover:w-full transition-all duration-300 mx-auto rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
