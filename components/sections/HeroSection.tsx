'use client';

import Link from 'next/link';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  highlightedText: string;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function HeroSection({ title, highlightedText, subtitle, primaryButtonText = "Get a Quote", primaryButtonLink = "/quote", secondaryButtonText = "View Products", secondaryButtonLink = "/products" }: HeroSectionProps) {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Optimized Hero Background Image - Priority for LCP */}
      <Image
        src="/hero-bg.jpg"
        alt="Kamran Limited Cement Supplier Pakistan"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-center"
        style={{ objectPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/85 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/60"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-industrial-green/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 z-10">
        <div className="max-w-4xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-industrial-green/20 backdrop-blur-sm border border-industrial-green/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 opacity-0 animate-fade-in-up delay-200">
            <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-accent"></span>
            </span>
            <span className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wider">Authorized Dealer Since 1990</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-3 sm:mb-4 leading-tight opacity-0 animate-fade-in-up delay-400">
            <span className="text-white block">{title}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-400 to-accent animate-gradient-x bg-[length:200%_auto] block mt-1 sm:mt-2">{highlightedText}</span>
          </h1>

          <div className="mb-4 sm:mb-6 opacity-0 animate-fade-in-up delay-600">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed mb-3 sm:mb-4 max-w-3xl">Building Pakistan&apos;s future with premium cement from top manufacturers</p>
            <div className="flex flex-wrap gap-2 sm:gap-3 text-white/90">
              {['Quality Guaranteed', 'Competitive Prices', 'Timely Delivery', '24/7 Support'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm rounded-full px-2.5 sm:px-3 py-1.5 sm:py-2 border border-white/20 hover:bg-white/20 transition-all">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-industrial-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="font-semibold text-xs sm:text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 opacity-0 animate-fade-in-up delay-800">
            <Link href={primaryButtonLink} className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-accent via-yellow-400 to-accent bg-[length:200%_auto] text-charcoal px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base lg:text-lg hover:shadow-2xl hover:shadow-accent/50 transition-all hover:scale-105 uppercase animate-gradient-x overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                {primaryButtonText}
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </span>
            </Link>
            <Link href={secondaryButtonLink} className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base lg:text-lg hover:bg-white hover:text-charcoal transition-all uppercase hover:border-white">
              {secondaryButtonText}
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-white/80 opacity-0 animate-fade-in-up delay-1000">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-industrial-green/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-industrial-green/30">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-industrial-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white">5+</div>
                <div className="text-xs sm:text-sm">Premium Brands</div>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-industrial-green/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-industrial-green/30">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-industrial-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white">1000+</div>
                <div className="text-xs sm:text-sm">Happy Clients</div>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-industrial-green/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-industrial-green/30">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-industrial-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white">500K+</div>
                <div className="text-xs sm:text-sm">Tons Supplied</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
