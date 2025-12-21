interface WhyChooseItem {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

const reasons: WhyChooseItem[] = [
  {
    icon: '✓',
    title: 'Authorized Dealer',
    description: 'Official dealer of top cement brands with genuine products',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    icon: '🚚',
    title: 'Timely Delivery',
    description: 'On-time delivery to your project site across Pakistan',
    gradient: 'from-blue-500 to-cyan-600'
  },
  {
    icon: '💰',
    title: 'Competitive Prices',
    description: 'Best market rates with transparent pricing',
    gradient: 'from-yellow-500 to-orange-600'
  },
  {
    icon: '🎯',
    title: 'Expert Guidance',
    description: 'Technical consultation for cement selection',
    gradient: 'from-purple-500 to-pink-600'
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-cement-light to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-industrial-green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-industrial-green font-bold text-sm uppercase tracking-widest mb-2 block">Our Advantages</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-charcoal mb-3 uppercase tracking-tight">
              Why Choose Kamran Limited
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-industrial-green to-accent mx-auto rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Building trust through quality, reliability, and exceptional service since 1990
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-industrial-green/30 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-industrial-green/0 to-accent/0 group-hover:from-industrial-green/5 group-hover:to-accent/5 transition-all duration-300"></div>
              
              <div className="relative">
                <div className={`w-20 h-20 bg-gradient-to-br ${reason.gradient} rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  {reason.icon}
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-3 group-hover:text-industrial-green transition-colors uppercase tracking-tight text-center">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {reason.description}
                </p>
                
                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-industrial-green to-accent group-hover:w-full transition-all duration-300 mx-auto rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-industrial-green to-accent rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 uppercase">Ready to Start Your Project?</h3>
              <p className="text-white/90 text-lg">Get expert consultation and competitive quotes today</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/quote"
                className="inline-flex items-center justify-center gap-2 bg-white text-charcoal px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all hover:scale-105 uppercase whitespace-nowrap"
              >
                Get Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-charcoal transition-all uppercase whitespace-nowrap"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
