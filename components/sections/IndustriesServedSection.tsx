interface Industry {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

const industries: Industry[] = [
  { icon: '🏘️', title: 'Residential', description: 'Housing & Apartments', gradient: 'from-orange-500 to-red-600' },
  { icon: '🏢', title: 'Commercial', description: 'Offices & Malls', gradient: 'from-blue-500 to-indigo-600' },
  { icon: '🛣️', title: 'Infrastructure', description: 'Roads & Bridges', gradient: 'from-gray-500 to-slate-700' },
  { icon: '⚓', title: 'Marine', description: 'Ports & Structures', gradient: 'from-cyan-500 to-blue-700' },
  { icon: '🧱', title: 'Precast', description: 'Block Manufacturing', gradient: 'from-amber-500 to-orange-600' }
];

export default function IndustriesServedSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-charcoal overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-industrial-green/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-industrial-green font-bold text-sm uppercase tracking-widest mb-2 block">Our Expertise</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 uppercase tracking-tight">
              Industries We Serve
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-industrial-green to-accent mx-auto rounded-full"></div>
          </div>
          <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
            Trusted by builders, contractors, and suppliers across multiple sectors
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            {industries.slice(0, 3).map((industry, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 text-center transition-all duration-500 hover:scale-105 border border-white/20 hover:border-industrial-green/50 overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-industrial-green/10 rounded-full blur-2xl group-hover:bg-industrial-green/20 transition-all duration-500"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-500"></div>
                
                <div className="relative">
                  <div className={`w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center text-5xl shadow-2xl group-hover:rotate-[360deg] transition-all duration-700`}>
                    {industry.icon}
                  </div>
                  
                  <h4 className="font-bold text-2xl text-white mb-2 group-hover:text-industrial-green transition-colors uppercase tracking-tight">
                    {industry.title}
                  </h4>
                  
                  <p className="text-sm text-gray-300 font-medium mb-4">
                    {industry.description}
                  </p>
                  
                  <div className="h-1 w-16 bg-gradient-to-r from-industrial-green to-accent group-hover:w-full transition-all duration-500 mx-auto rounded-full"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
            {industries.slice(3).map((industry, index) => (
              <div 
                key={index + 3} 
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 text-center transition-all duration-500 hover:scale-105 border border-white/20 hover:border-industrial-green/50 overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-industrial-green/10 rounded-full blur-2xl group-hover:bg-industrial-green/20 transition-all duration-500"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-500"></div>
                
                <div className="relative">
                  <div className={`w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center text-5xl shadow-2xl group-hover:rotate-[360deg] transition-all duration-700`}>
                    {industry.icon}
                  </div>
                  
                  <h4 className="font-bold text-2xl text-white mb-2 group-hover:text-industrial-green transition-colors uppercase tracking-tight">
                    {industry.title}
                  </h4>
                  
                  <p className="text-sm text-gray-300 font-medium mb-4">
                    {industry.description}
                  </p>
                  
                  <div className="h-1 w-16 bg-gradient-to-r from-industrial-green to-accent group-hover:w-full transition-all duration-500 mx-auto rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-green/20 via-accent/20 to-industrial-green/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-to-r from-industrial-green/10 to-accent/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-center">
              <div className="group">
                <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-industrial-green to-emerald-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-white font-bold text-lg uppercase tracking-wide">Projects Completed</div>
                <div className="mt-3 h-1 w-16 bg-gradient-to-r from-industrial-green to-accent mx-auto rounded-full"></div>
              </div>
              <div className="group">
                <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">1000+</div>
                <div className="text-white font-bold text-lg uppercase tracking-wide">Satisfied Clients</div>
                <div className="mt-3 h-1 w-16 bg-gradient-to-r from-accent to-orange-400 mx-auto rounded-full"></div>
              </div>
              <div className="group">
                <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">35+</div>
                <div className="text-white font-bold text-lg uppercase tracking-wide">Years Experience</div>
                <div className="mt-3 h-1 w-16 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
