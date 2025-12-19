import Link from 'next/link';

interface IndustryProps {
  icon: string;
  title: string;
  description: string;
  applications: string[];
  recommendedCement: string;
}

export default function IndustryApplicationsSection({ industries }: { industries?: IndustryProps[] }) {
  const defaultIndustries: IndustryProps[] = [
    {
      icon: "🏘️",
      title: "Residential Construction",
      description: "Building homes and residential complexes with quality and durability",
      applications: [
        "Foundation work",
        "RCC structures",
        "Plastering & finishing",
        "Boundary walls"
      ],
      recommendedCement: "OPC Grade 53"
    },
    {
      icon: "🏢",
      title: "Commercial Projects",
      description: "Large-scale commercial buildings, malls, and office complexes",
      applications: [
        "High-rise structures",
        "Load-bearing walls",
        "Basement construction",
        "Facade work"
      ],
      recommendedCement: "OPC & Composite Cement"
    },
    {
      icon: "🛣️",
      title: "Infrastructure Development",
      description: "Roads, bridges, dams, and public infrastructure projects",
      applications: [
        "Road construction",
        "Bridge structures",
        "Flyovers & underpasses",
        "Dams & canals"
      ],
      recommendedCement: "OPC Grade 53"
    },
    {
      icon: "⚓",
      title: "Marine & Coastal",
      description: "Construction in high-sulfate and saline environments",
      applications: [
        "Port structures",
        "Coastal buildings",
        "Seawater exposure areas",
        "Underground sewerage"
      ],
      recommendedCement: "Sulfate Resistant Cement (SRC)"
    },
    {
      icon: "🧱",
      title: "Precast & Block Industry",
      description: "Manufacturing concrete blocks, tiles, and precast elements",
      applications: [
        "Concrete blocks",
        "Paving tiles",
        "Boundary wall blocks",
        "Precast panels"
      ],
      recommendedCement: "Block Cement & White Cement"
    }
  ];

  const industriesList = industries || defaultIndustries;

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-cement-light to-white overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a1a1a' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-industrial-green/10 to-accent/10 border border-industrial-green/30 rounded-full mb-4">
            <span className="text-sm font-semibold bg-gradient-to-r from-industrial-green to-accent bg-clip-text text-transparent uppercase tracking-wider">Our Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4 uppercase tracking-tight">
            Industries <span className="bg-gradient-to-r from-industrial-green to-accent bg-clip-text text-transparent">We Serve</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Trusted cement supplier across diverse construction sectors
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-industrial-green to-accent mx-auto rounded-full mt-4"></div>
        </div>

        {/* Industries Cards */}
        <div className="space-y-8 lg:space-y-12">
          {industriesList.map((industry, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Hover Glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-industrial-green to-accent rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500"></div>
              
              {/* Card Container */}
              <div className={`relative bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-transparent group-hover:border-industrial-green/30 transition-all duration-300 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}>
                
                {/* Icon Side */}
                <div className="lg:w-2/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-industrial-green via-industrial-green to-accent"></div>
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                  }}></div>
                  <div className="relative p-8 lg:p-12 flex flex-col items-center justify-center text-center h-full min-h-[280px]">
                    <div className="text-7xl lg:text-8xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">{industry.icon}</div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white uppercase leading-tight">{industry.title}</h3>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-3/5 p-6 lg:p-10">
                  <p className="text-gray-700 text-base lg:text-lg mb-6 lg:mb-8 leading-relaxed">{industry.description}</p>
                  
                  {/* Key Applications */}
                  <div className="mb-6 lg:mb-8">
                    <h4 className="font-bold text-charcoal mb-4 text-lg flex items-center gap-2">
                      <span className="w-8 h-8 bg-gradient-to-br from-industrial-green to-accent rounded-lg flex items-center justify-center text-white text-sm">✓</span>
                      Key Applications
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3 lg:gap-4">
                      {industry.applications.map((app, idx) => (
                        <div key={idx} className="flex items-start gap-3 group/item">
                          <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-industrial-green to-accent rounded-full flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform">
                            <span className="text-white text-xs font-bold">✓</span>
                          </div>
                          <span className="text-gray-700 leading-tight">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommended Cement */}
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-industrial-green to-accent rounded-xl blur opacity-20"></div>
                    <div className="relative bg-gradient-to-br from-cement-light to-white p-4 lg:p-5 rounded-xl border border-industrial-green/20">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-charcoal">Recommended Cement:</span>
                        <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-industrial-green to-accent text-white font-bold rounded-lg text-sm">{industry.recommendedCement}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expert Consultation CTA */}
        <div className="mt-12 lg:mt-16 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-industrial-green via-accent to-industrial-green rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
          <div className="relative bg-gradient-to-br from-white to-cement-light p-8 lg:p-12 rounded-3xl border-2 border-industrial-green/20 text-center">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-4">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">Expert Guidance</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-charcoal mb-4">
              Need Help Choosing the <span className="bg-gradient-to-r from-industrial-green to-accent bg-clip-text text-transparent">Right Cement?</span>
            </h3>
            <p className="text-gray-600 mb-6 lg:mb-8 text-base lg:text-lg max-w-2xl mx-auto">
              Our technical experts can guide you in selecting the perfect cement type for your project
            </p>
            <div className="inline-block relative group/btn">
              <div className="absolute -inset-1 bg-gradient-to-r from-industrial-green via-accent to-industrial-green rounded-xl blur-lg opacity-70 group-hover/btn:opacity-100 animate-pulse"></div>
              <Link 
                href="/contact" 
                className="relative inline-flex items-center gap-3 bg-gradient-to-r from-industrial-green to-accent text-white px-8 py-4 rounded-xl font-bold text-base lg:text-lg hover:scale-105 transition-all uppercase shadow-xl"
              >
                <span>Consult Our Experts</span>
                <span className="text-xl group-hover/btn:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
