import PageHeader from '@/components/sections/PageHeader';
import ServicesSection from '@/components/sections/ServicesSection';
import CTASection from '@/components/CTASection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cement Supply Services - Bulk Orders, Delivery & Expert Consultation Pakistan",
  description: "🚚 Comprehensive cement supply services in Pakistan. ✓ Bulk Orders ✓ Fast Delivery ✓ Expert Consultation ✓ Quality Testing ✓ After-Sales Support. Serving residential, commercial & infrastructure projects nationwide. Get quote: 0336-9283119",
  keywords: "cement delivery service Pakistan, bulk cement order, cement supplier services, construction material delivery, cement consultation, quality cement testing, after-sales support cement",
  openGraph: {
    title: "Professional Cement Supply Services | Kamran Limited",
    description: "Bulk orders, fast delivery, expert consultation & quality testing services for all cement needs.",
  },
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <PageHeader 
        title="Our"
        highlightedText="Services"
        subtitle="Comprehensive cement supply solutions for all your construction needs"
        backgroundImage="/service.jpg"
      />

      {/* Services Section */}
      <ServicesSection />

      {/* Why Choose Our Services */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-charcoal via-charcoal to-gray-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-industrial-green/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block px-4 py-2 bg-industrial-green/10 border border-industrial-green/30 rounded-full mb-4">
              <span className="text-sm font-semibold text-industrial-green uppercase tracking-wider">Our Advantages</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tight">
              Why Choose <span className="bg-gradient-to-r from-industrial-green to-accent bg-clip-text text-transparent">Our Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-industrial-green to-accent mx-auto rounded-full"></div>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-industrial-green/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 lg:p-8 rounded-2xl hover:bg-white/10 hover:border-industrial-green/50 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-industrial-green to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-industrial-green transition-colors">Fast Processing</h3>
                <p className="text-gray-400 leading-relaxed">
                  Quick order processing and fulfillment to keep your project on schedule
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-industrial-green/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 lg:p-8 rounded-2xl hover:bg-white/10 hover:border-accent/50 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-industrial-green rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">Accurate Delivery</h3>
                <p className="text-gray-400 leading-relaxed">
                  Right product, right quantity, right place, every single time
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-industrial-green/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 lg:p-8 rounded-2xl hover:bg-white/10 hover:border-industrial-green/50 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-industrial-green to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <span className="text-3xl">💪</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-industrial-green transition-colors">Reliable Supply</h3>
                <p className="text-gray-400 leading-relaxed">
                  Consistent stock availability and supply continuity guaranteed
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-industrial-green/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 lg:p-8 rounded-2xl hover:bg-white/10 hover:border-accent/50 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-industrial-green rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <span className="text-3xl">👨‍💼</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">Expert Support</h3>
                <p className="text-gray-400 leading-relaxed">
                  Professional team ready to assist with technical queries and support
                </p>
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
