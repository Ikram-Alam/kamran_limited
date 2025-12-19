interface Stat {
  value: string;
  label: string;
  icon: string;
  gradient: string;
}

interface CompanyStatsProps {
  stats?: Stat[];
  backgroundColor?: string;
}

const defaultStats: Stat[] = [
  { value: '15+', label: 'Years Experience', icon: '⏳', gradient: 'from-blue-400 to-blue-600' },
  { value: '500K+', label: 'Tons Supplied', icon: '📦', gradient: 'from-green-400 to-emerald-600' },
  { value: '1000+', label: 'Projects Completed', icon: '🏗️', gradient: 'from-orange-400 to-red-600' },
  { value: '5', label: 'Premium Brands', icon: '⭐', gradient: 'from-yellow-400 to-orange-500' }
];

export default function CompanyStatsSection({ 
  stats = defaultStats,
  backgroundColor = 'bg-gradient-to-br from-white via-cement-light to-white'
}: CompanyStatsProps) {
  return (
    <section className={`relative py-12 sm:py-16 md:py-20 lg:py-24 ${backgroundColor} overflow-hidden`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-industrial-green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-industrial-green font-bold text-sm uppercase tracking-widest mb-2 block">Our Achievements</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-charcoal mb-3 uppercase tracking-tight">
              Our Track Record
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-industrial-green to-accent mx-auto rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 border-gray-100 hover:border-industrial-green/30 overflow-hidden shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-industrial-green/0 to-accent/0 group-hover:from-industrial-green/5 group-hover:to-accent/5 transition-all duration-300"></div>
              
              <div className="relative">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  {stat.icon}
                </div>
                
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 text-charcoal group-hover:text-industrial-green group-hover:scale-110 transition-all duration-300">
                  {stat.value}
                </div>
                
                <p className="text-base md:text-lg font-bold text-gray-600 uppercase tracking-wide">
                  {stat.label}
                </p>
                
                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-industrial-green to-accent group-hover:w-full transition-all duration-300 mx-auto rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl text-charcoal font-bold mb-6">
            Trusted by Pakistan&apos;s leading builders and contractors
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <div className="bg-gradient-to-r from-industrial-green to-emerald-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              <span className="font-bold">✓ ISO Certified</span>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              <span className="font-bold">✓ Authorized Dealer</span>
            </div>
            <div className="bg-gradient-to-r from-accent to-orange-500 text-charcoal px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              <span className="font-bold">✓ Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
