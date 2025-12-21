import Link from 'next/link';

interface ServiceItemProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export default function ServicesSection({ services }: { services?: ServiceItemProps[] }) {
  const defaultServices: ServiceItemProps[] = [
    {
      icon: "🚚",
      title: "Bulk Cement Supply",
      description: "Large-scale cement delivery for major construction projects",
      features: [
        "Minimum order: 100 bags",
        "Direct factory rates",
        "Scheduled deliveries",
        "Bulk discounts available"
      ]
    },
    {
      icon: "📦",
      title: "Retail Supply",
      description: "Flexible ordering for small to medium construction needs",
      features: [
        "No minimum order",
        "Same-day delivery",
        "Cash on delivery",
        "Quality assurance"
      ]
    },
    {
      icon: "🚛",
      title: "Site Delivery",
      description: "Direct delivery to your construction site anywhere in Pakistan",
      features: [
        "GPS tracked vehicles",
        "Professional drivers",
        "On-time guarantee",
        "Damage-free delivery"
      ]
    },
    {
      icon: "💡",
      title: "Technical Consultation",
      description: "Expert guidance on cement selection for your project",
      features: [
        "Free consultation",
        "Project assessment",
        "Product recommendations",
        "Quality testing support"
      ]
    },
    {
      icon: "🏗️",
      title: "Related Construction Materials",
      description: "One-stop solution for all your construction material needs",
      features: [
        "Steel bars & rods",
        "Construction sand & gravel",
        "Bricks & blocks",
        "Aggregates & crushed stones"
      ]
    },
    {
      icon: "🔄",
      title: "After-Sales Support",
      description: "Continuous support throughout your project lifecycle",
      features: [
        "24/7 customer support",
        "Quality issue resolution",
        "Replacement guarantee",
        "Technical assistance"
      ]
    }
  ];

  const servicesList = services || defaultServices;

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-cement-light to-white overflow-hidden">
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a1a1a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-industrial-green/10 to-accent/10 border border-industrial-green/30 rounded-full mb-4">
            <span className="text-sm font-semibold bg-gradient-to-r from-industrial-green to-accent bg-clip-text text-transparent uppercase tracking-wider">What We Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4 uppercase tracking-tight">
            Our <span className="bg-gradient-to-r from-industrial-green to-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive cement supply solutions tailored to your needs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-industrial-green to-accent mx-auto rounded-full mt-4"></div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="group relative">
              {/* Hover Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-industrial-green to-accent rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
              
              {/* Card */}
              <div className="relative bg-white rounded-2xl p-6 lg:p-8 border-2 border-transparent hover:border-industrial-green/30 shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Icon Box with Gradient */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-industrial-green to-accent rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-industrial-green to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <span className="text-4xl">{service.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-bold text-charcoal mb-3 group-hover:text-industrial-green transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 group/item">
                      <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-industrial-green to-accent rounded-full flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-sm text-gray-700 leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-industrial-green/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="inline-block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-industrial-green via-accent to-industrial-green rounded-xl blur-lg opacity-70 group-hover:opacity-100 animate-pulse"></div>
            <Link 
              href="/quote" 
              className="relative inline-flex items-center gap-3 bg-gradient-to-r from-industrial-green to-accent text-white px-8 py-4 rounded-xl font-bold text-base lg:text-lg hover:scale-105 transition-all uppercase shadow-xl"
            >
              <span>Request a Service Quote</span>
              <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
