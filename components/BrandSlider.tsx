'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const brands = [
  { name: 'Falcon Cement', image: '/falcon.jpeg' },
  { name: 'Lucky Cement', image: '/lucky.jpeg' },
  { name: 'Thatta Cement', image: '/tahtta.jpeg' },
  { name: 'DG Cement', image: '/dg.png' },
];

export default function BrandSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % brands.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-cement-light via-white to-cement-light overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-industrial-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block">
            <span className="text-industrial-green font-bold text-sm uppercase tracking-widest mb-2 block">Trusted Partners</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-charcoal mb-3 uppercase tracking-tight">
              Premium Cement Brands
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-industrial-green to-accent mx-auto rounded-full"></div>
          </div>
          <p className="text-base sm:text-lg mt-4 max-w-2xl mx-auto text-gray-600">
            Authorized dealer of Pakistan&apos;s most trusted cement manufacturers
          </p>
        </div>
        
        {/* Desktop View - All Brands */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-industrial-green/20 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-industrial-green/0 to-accent/0 group-hover:from-industrial-green/5 group-hover:to-accent/5 transition-all duration-300"></div>
              <div className="relative w-32 h-32 mb-4 flex items-center justify-center">
                <Image 
                  src={brand.image} 
                  alt={brand.name}
                  width={128}
                  height={128}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p className="text-base font-bold text-charcoal text-center group-hover:text-industrial-green transition-colors uppercase tracking-wide">{brand.name}</p>
              <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-industrial-green to-accent group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Mobile View - Slider */}
        <div className="md:hidden relative px-4">
          <div className="flex overflow-hidden rounded-xl shadow-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out w-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {brands.map((brand, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center justify-center border-2 border-industrial-green/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-industrial-green/5 to-accent/5"></div>
                    <div className="relative w-40 h-40 mb-4 flex items-center justify-center">
                      <Image 
                        src={brand.image} 
                        alt={brand.name}
                        width={160}
                        height={160}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-xl font-bold text-charcoal uppercase tracking-wide relative">{brand.name}</p>
                    <div className="mt-3 h-1 w-16 bg-gradient-to-r from-industrial-green to-accent rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + brands.length) % brands.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-industrial-green hover:text-white transition-all border border-industrial-green/20"
            aria-label="Previous brand"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % brands.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-industrial-green hover:text-white transition-all border border-industrial-green/20"
            aria-label="Next brand"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {brands.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-industrial-green to-accent w-8' 
                    : 'bg-gray-300 w-2.5 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
