import PageHeader from '@/components/sections/PageHeader';
import CoreValuesSection from '@/components/sections/CoreValuesSection';
import TimelineSection from '@/components/sections/TimelineSection';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: "About Us - Kamran Limited | Leading Cement Dealer in Pakistan",
  description: "Learn about Kamran Limited, Pakistan's trusted cement supplier. Authorized dealer with 15+ years of experience in providing quality cement products.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <PageHeader 
        title="About"
        highlightedText="Kamran Limited"
        subtitle="Building Pakistan's future with quality cement products since 2009"
        backgroundImage="/about.jpeg"
      />

      {/* Company Overview */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-cement-light/50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-industrial-green font-bold text-sm uppercase tracking-widest mb-2 block">Our Story</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-charcoal uppercase tracking-tight">
                Who We Are
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-industrial-green to-accent mx-auto rounded-full"></div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 border-2 border-gray-100">
              <div className="text-gray-600 space-y-6 text-base sm:text-lg leading-relaxed">
                <p>
                  <strong className="text-charcoal font-bold">Kamran Limited</strong> is a leading authorized cement dealer in Pakistan, 
                  serving builders, contractors, and construction companies since 2009. We specialize in supplying premium quality 
                  cement from Pakistan&apos;s most trusted brands including Falcon Cement, Lucky Cement, Thatta Cement, and DG Cement.
                </p>
                <p>
                  With over 15 years of experience in the cement supply industry, we have established ourselves as a reliable 
                  partner for construction projects of all scales - from residential buildings to large-scale commercial and infrastructure developments.
                </p>
                <p>
                  Our commitment to quality, competitive pricing, and timely delivery has earned us the trust of over 1000+ satisfied 
                  clients across Pakistan. We take pride in being an authorized dealer, ensuring that every bag of cement we supply 
                  meets the highest industry standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-industrial-green/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-5xl mx-auto">
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 sm:p-10 rounded-3xl shadow-xl border border-white/20 hover:border-industrial-green/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">🎯</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 uppercase tracking-tight group-hover:text-industrial-green transition-colors">Our Mission</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                To be Pakistan&apos;s most trusted cement supplier by providing authentic, high-quality cement products 
                at competitive prices, coupled with exceptional customer service and reliable delivery.
              </p>
              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-industrial-green to-accent group-hover:w-full transition-all duration-300 rounded-full"></div>
            </div>
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 sm:p-10 rounded-3xl shadow-xl border border-white/20 hover:border-industrial-green/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">👁️</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 uppercase tracking-tight group-hover:text-industrial-green transition-colors">Our Vision</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                To build a stronger Pakistan by supporting construction excellence through reliable supply of premium 
                cement products, contributing to the nation&apos;s infrastructure development and economic growth.
              </p>
              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-industrial-green to-accent group-hover:w-full transition-all duration-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <CoreValuesSection />

      {/* Company Journey */}
      <TimelineSection 
        title="Our Journey"
        backgroundColor="bg-industrial-green"
        textColor="text-white"
        items={[
          {
            year: "2009",
            title: "Company Established",
            description: "Started as a small cement dealer in Karachi, focusing on quality and customer service."
          },
          {
            year: "2012",
            title: "Authorized Dealerships",
            description: "Secured authorized dealerships from major cement brands including Falcon and Lucky Cement."
          },
          {
            year: "2017",
            title: "Expansion",
            description: "Expanded distribution network across Pakistan, serving multiple cities and regions."
          },
          {
            year: "2024",
            title: "Leading Supplier",
            description: "Recognized as one of Pakistan's most trusted cement suppliers with 1000+ completed projects."
          }
        ]}
      />

      {/* Authorized Dealer Statement */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-cement-light/50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-industrial-green to-accent p-8 sm:p-10 md:p-12 lg:p-16 rounded-3xl text-center shadow-2xl">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-5xl sm:text-6xl mb-6 mx-auto">🏆</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 uppercase tracking-tight">
              Authorized Cement Dealer
            </h2>
            <p className="text-white text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed">
              We are proud authorized dealers of Pakistan&apos;s leading cement brands. Every product we supply comes 
              with manufacturer warranty and quality guarantee.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-white font-bold">
              <span className="bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base hover:bg-white/30 transition-all">Falcon Cement</span>
              <span className="bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base hover:bg-white/30 transition-all">Lucky Cement</span>
              <span className="bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base hover:bg-white/30 transition-all">Thatta Cement</span>
              <span className="bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base hover:bg-white/30 transition-all">DG Cement</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-industrial-green/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-industrial-green font-bold text-sm uppercase tracking-widest mb-2 block">Nationwide Service</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-white uppercase tracking-tight">
                Service Coverage
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-industrial-green to-accent mx-auto rounded-full"></div>
            </div>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 p-8 sm:p-10 md:p-12 rounded-3xl shadow-xl">
              <p className="text-gray-200 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-center leading-relaxed">
                We deliver quality cement products across Pakistan to support your construction projects
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl hover:border-industrial-green/50 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-industrial-green to-emerald-600 rounded-xl flex items-center justify-center text-2xl shadow-lg">📍</div>
                    <h4 className="font-bold text-white text-lg sm:text-xl uppercase">Primary Coverage</h4>
                  </div>
                  <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
                    <li className="flex items-center gap-2"><span className="text-industrial-green">✓</span> Karachi</li>
                    <li className="flex items-center gap-2"><span className="text-industrial-green">✓</span> Hyderabad</li>
                    <li className="flex items-center gap-2"><span className="text-industrial-green">✓</span> Lahore</li>
                    <li className="flex items-center gap-2"><span className="text-industrial-green">✓</span> Islamabad</li>
                  </ul>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl hover:border-industrial-green/50 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-2xl shadow-lg">🚚</div>
                    <h4 className="font-bold text-white text-lg sm:text-xl uppercase">Extended Delivery</h4>
                  </div>
                  <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
                    <li className="flex items-center gap-2"><span className="text-industrial-green">✓</span> All major cities</li>
                    <li className="flex items-center gap-2"><span className="text-industrial-green">✓</span> Construction sites</li>
                    <li className="flex items-center gap-2"><span className="text-industrial-green">✓</span> Industrial zones</li>
                    <li className="flex items-center gap-2"><span className="text-industrial-green">✓</span> Remote locations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </main>
  );
}
