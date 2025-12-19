interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineSectionProps {
  title?: string;
  items?: TimelineEvent[];
  backgroundColor?: string;
  textColor?: string;
}

const defaultEvents: TimelineEvent[] = [
  {
    year: '2009',
    title: 'Company Established',
    description: 'Started as a small cement dealer in Karachi, focusing on quality and customer service.'
  },
  {
    year: '2012',
    title: 'Authorized Dealerships',
    description: 'Secured authorized dealerships from major cement brands including Falcon and Lucky Cement.'
  },
  {
    year: '2017',
    title: 'Expansion',
    description: 'Expanded distribution network across Pakistan, serving multiple cities and regions.'
  },
  {
    year: '2024',
    title: 'Leading Supplier',
    description: 'Recognized as one of Pakistan\'s most trusted cement suppliers with 1000+ completed projects.'
  }
];

export default function TimelineSection({ 
  title = "Our Journey",
  items,
  backgroundColor = "bg-charcoal",
  textColor = "text-white"
}: TimelineSectionProps) {
  const events = items || defaultEvents;

  return (
    <section className={`relative py-12 sm:py-16 md:py-20 lg:py-24 ${backgroundColor} ${textColor} overflow-hidden`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-industrial-green/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block">
            <span className="text-industrial-green font-bold text-sm uppercase tracking-widest mb-2 block">Our Story</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 uppercase tracking-tight">
              {title}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-industrial-green to-accent mx-auto rounded-full"></div>
          </div>
          <p className="text-gray-300 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            15+ years of excellence in cement supply and distribution
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-industrial-green via-accent to-industrial-green"></div>
            
            <div className="space-y-8 md:space-y-12">
              {events.map((event, index) => (
                <div 
                  key={index} 
                  className="group relative flex flex-col md:flex-row gap-6 md:gap-8"
                >
                  {/* Year Badge */}
                  <div className="shrink-0 relative z-10">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-accent via-yellow-400 to-accent rounded-2xl flex items-center justify-center font-extrabold text-lg md:text-xl text-charcoal shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {event.year}
                    </div>
                    {/* Connector Dot for Desktop */}
                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 w-4 h-4 bg-industrial-green rounded-full border-4 border-charcoal"></div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="flex-1 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 p-6 sm:p-8 rounded-2xl shadow-xl group-hover:border-industrial-green/50 group-hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-industrial-green to-emerald-600 rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-all duration-300">
                        {index === 0 ? '🏢' : index === 1 ? '🤝' : index === 2 ? '🚀' : '🏆'}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-industrial-green transition-colors uppercase tracking-tight">
                          {event.title}
                        </h4>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 h-1 w-0 bg-gradient-to-r from-industrial-green to-accent group-hover:w-full transition-all duration-500 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-industrial-green/50 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-accent mb-2">15+</div>
            <div className="text-gray-300 text-xs sm:text-sm font-semibold uppercase">Years</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-industrial-green/50 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-accent mb-2">4</div>
            <div className="text-gray-300 text-xs sm:text-sm font-semibold uppercase">Brands</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-industrial-green/50 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-accent mb-2">1000+</div>
            <div className="text-gray-300 text-xs sm:text-sm font-semibold uppercase">Projects</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-industrial-green/50 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-accent mb-2">500K+</div>
            <div className="text-gray-300 text-xs sm:text-sm font-semibold uppercase">Tons</div>
          </div>
        </div>
      </div>
    </section>
  );
}
