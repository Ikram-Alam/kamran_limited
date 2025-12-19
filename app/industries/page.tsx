import PageHeader from '@/components/sections/PageHeader';
import IndustryApplicationsSection from '@/components/sections/IndustryApplicationsSection';
import CTASection from '@/components/CTASection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cement for Industries - Residential, Commercial, Infrastructure Projects Pakistan",
  description: "🏭 Quality cement for all industries in Pakistan. ✓ Residential Construction ✓ Commercial Buildings ✓ Infrastructure Projects ✓ Marine Works ✓ Industrial Facilities. Trusted by 1000+ projects. Get industry-specific cement solutions: 0336-9283119",
  keywords: "cement for residential construction, commercial building cement, infrastructure cement Pakistan, marine cement, industrial cement, cement for housing projects, cement for roads bridges",
  openGraph: {
    title: "Cement Solutions for All Industries | Kamran Limited",
    description: "Specialized cement solutions for residential, commercial, infrastructure and industrial projects.",
  },
};

export default function IndustriesPage() {
  return (
    <main>
      {/* Hero Section */}
      <PageHeader 
        title="Industries"
        highlightedText="We Serve"
        subtitle="Trusted cement supplier across diverse construction sectors in Pakistan"
        backgroundImage="/Industries.jpg"
      />

      {/* Industries Section */}
      <IndustryApplicationsSection />

      {/* Success Stats */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-charcoal via-gray-900 to-charcoal overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-industrial-green/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-4">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">Achievement Metrics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tight">
              Our Industry <span className="bg-gradient-to-r from-industrial-green to-accent bg-clip-text text-transparent">Impact</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-industrial-green to-accent mx-auto rounded-full"></div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-industrial-green/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 lg:p-8 rounded-2xl text-center hover:bg-white/10 hover:border-industrial-green/50 transition-all duration-300">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-industrial-green to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">1000+</div>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 font-semibold">Projects Delivered</p>
                <div className="mt-4 h-1 w-16 mx-auto bg-gradient-to-r from-industrial-green to-accent rounded-full"></div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-industrial-green/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 lg:p-8 rounded-2xl text-center hover:bg-white/10 hover:border-accent/50 transition-all duration-300">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-accent to-industrial-green bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">500K+</div>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 font-semibold">Tons Supplied</p>
                <div className="mt-4 h-1 w-16 mx-auto bg-gradient-to-r from-accent to-industrial-green rounded-full"></div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-industrial-green/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 lg:p-8 rounded-2xl text-center hover:bg-white/10 hover:border-industrial-green/50 transition-all duration-300">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-industrial-green to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">5</div>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 font-semibold">Industries Served</p>
                <div className="mt-4 h-1 w-16 mx-auto bg-gradient-to-r from-industrial-green to-accent rounded-full"></div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-industrial-green/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 lg:p-8 rounded-2xl text-center hover:bg-white/10 hover:border-accent/50 transition-all duration-300">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-accent to-industrial-green bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">15+</div>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 font-semibold">Years Experience</p>
                <div className="mt-4 h-1 w-16 mx-auto bg-gradient-to-r from-accent to-industrial-green rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
