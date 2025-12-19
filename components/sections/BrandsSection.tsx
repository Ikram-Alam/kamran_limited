import Link from 'next/link';
import Image from 'next/image';
import type { BrandInfo } from '@/types';

interface BrandSectionProps {
  brand: BrandInfo;
  index: number;
}

const brandImages: { [key: string]: string } = {
  'Falcon Cement': '/falcon.jpeg',
  'Lucky Cement': '/lucky.jpeg',
  'Thatta Cement': '/tahtta.jpeg',
  'DG Cement': '/dg.png',
//   'White Cement': '/white.png'
};

function BrandDetail({ brand, index }: BrandSectionProps) {
  const isEven = index % 2 === 0;
  const brandImage = brandImages[brand.name] || '/dg.png';
  
  return (
    <div 
      className={`group bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-industrial-green/30 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex flex-col md:flex`}
    >
      <div className="md:w-2/5 bg-gradient-to-br from-industrial-green to-accent p-8 md:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
        
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-6 bg-white rounded-2xl p-4 shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <Image 
            src={brandImage} 
            alt={`${brand.name} logo`}
            fill
            className="object-contain"
          />
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase mb-3 tracking-tight">{brand.name}</h3>
        <p className="text-white/90 text-sm sm:text-base font-semibold italic">{brand.tagline}</p>
        <div className="mt-4 h-1 w-16 bg-white/50 rounded-full"></div>
      </div>
      
      <div className="md:w-3/5 p-6 sm:p-8 md:p-10">
        <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">{brand.description}</p>
        
        <div className="mb-6 sm:mb-8">
          <h4 className="font-bold text-charcoal mb-4 text-lg sm:text-xl flex items-center gap-2">
            <span className="w-8 h-8 bg-industrial-green/10 rounded-lg flex items-center justify-center text-industrial-green">📦</span>
            Available Products
          </h4>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {brand.products.map((product, idx) => (
              <span 
                key={idx}
                className="bg-gradient-to-r from-cement-light to-gray-100 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-bold text-charcoal border border-gray-200 hover:border-industrial-green hover:shadow-md transition-all"
              >
                {product}
              </span>
            ))}
          </div>
        </div>

        {brand.features && brand.features.length > 0 && (
          <div className="mb-6 sm:mb-8">
            <h4 className="font-bold text-charcoal mb-4 text-lg sm:text-xl flex items-center gap-2">
              <span className="w-8 h-8 bg-industrial-green/10 rounded-lg flex items-center justify-center text-industrial-green">✨</span>
              Key Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {brand.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-cement-light/50 p-3 rounded-xl hover:bg-cement-light transition-all">
                  <div className="w-6 h-6 bg-industrial-green rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link 
            href={`/products?brand=${brand.name.toLowerCase()}`}
            className="group/btn inline-flex items-center justify-center gap-2 bg-gradient-to-r from-industrial-green to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:shadow-xl hover:shadow-industrial-green/30 transition-all hover:scale-105 uppercase text-sm sm:text-base"
          >
            View {brand.name} Products
            <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link 
            href="/quote"
            className="inline-flex items-center justify-center gap-2 bg-white border-2 border-industrial-green text-industrial-green px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-industrial-green hover:text-white transition-all uppercase text-sm sm:text-base"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function BrandsSection({ brands }: { brands: BrandInfo[] }) {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-cement-light via-white to-cement-light overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-industrial-green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block">
            <span className="text-industrial-green font-bold text-sm uppercase tracking-widest mb-2 block">Premium Selection</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-charcoal mb-3 uppercase tracking-tight">
              Our Premium Brands
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-industrial-green to-accent mx-auto rounded-full"></div>
          </div>
          <p className="text-gray-600 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            Authorized dealer of Pakistan&apos;s most trusted cement manufacturers
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {brands.map((brand, index) => (
            <BrandDetail key={brand.name} brand={brand} index={index} />
          ))}
        </div>

        <div className="mt-16 sm:mt-20 bg-gradient-to-br from-industrial-green to-accent text-white p-8 sm:p-10 md:p-12 rounded-3xl text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
          
          <div className="relative">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-5xl mx-auto mb-6">🛡️</div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 uppercase tracking-tight">All Products Are 100% Genuine</h3>
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
              As authorized dealers, we guarantee authentic products with manufacturer warranty
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl hover:bg-white/30 transition-all hover:scale-105">
                <div className="text-2xl sm:text-3xl mb-2">✓</div>
                <div className="font-bold text-sm sm:text-base">Factory Fresh</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl hover:bg-white/30 transition-all hover:scale-105">
                <div className="text-2xl sm:text-3xl mb-2">🏆</div>
                <div className="font-bold text-sm sm:text-base">Quality Certified</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl hover:bg-white/30 transition-all hover:scale-105">
                <div className="text-2xl sm:text-3xl mb-2">📊</div>
                <div className="font-bold text-sm sm:text-base">Batch Tracking</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl hover:bg-white/30 transition-all hover:scale-105">
                <div className="text-2xl sm:text-3xl mb-2">🛡️</div>
                <div className="font-bold text-sm sm:text-base">Warranty</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
