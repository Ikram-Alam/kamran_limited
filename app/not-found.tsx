'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-charcoal via-gray-900 to-charcoal flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-industrial-green/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        {/* 404 Number */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-[300px] sm:text-[400px] font-black text-white/5 select-none leading-none">
              404
            </div>
          </div>
          <div className="relative">
            <h1 className="text-8xl sm:text-9xl md:text-[200px] font-black mb-4">
              <span className="bg-gradient-to-r from-industrial-green via-accent to-industrial-green bg-clip-text text-transparent animate-gradient">
                404
              </span>
            </h1>
          </div>
        </div>

        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-industrial-green/30 blur-2xl rounded-full"></div>
            <div className="relative w-32 h-32 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-3xl flex items-center justify-center animate-bounce">
              <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-2">
            Oops! The page you are looking for seems to have been moved or does not exist.
          </p>
          <p className="text-base text-gray-400">
            Don not worry, lets get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Home Button */}
          <Link href="/" className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-industrial-green to-accent rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-gradient-to-r from-industrial-green to-accent text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all flex items-center gap-3 shadow-xl">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Back to Home</span>
            </div>
          </Link>

          {/* Contact Button */}
          <Link href="/contact" className="group">
            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 hover:scale-105 transition-all flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Contact Us</span>
            </div>
          </Link>
        </div>

        {/* Popular Links */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-400 mb-4 font-semibold uppercase tracking-wider">
            Popular Pages
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/products" className="text-industrial-green hover:text-accent transition-colors font-semibold">
              Products
            </Link>
            <span className="text-white/30">•</span>
            <Link href="/brands" className="text-industrial-green hover:text-accent transition-colors font-semibold">
              Brands
            </Link>
            <span className="text-white/30">•</span>
            <Link href="/services" className="text-industrial-green hover:text-accent transition-colors font-semibold">
              Services
            </Link>
            <span className="text-white/30">•</span>
            <Link href="/about" className="text-industrial-green hover:text-accent transition-colors font-semibold">
              About
            </Link>
            <span className="text-white/30">•</span>
            <Link href="/quote" className="text-industrial-green hover:text-accent transition-colors font-semibold">
              Get Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Cement Bags Animation */}
      <div className="absolute bottom-10 left-10 opacity-20 animate-float">
        <div className="text-6xl">📦</div>
      </div>
      <div className="absolute top-20 right-20 opacity-20 animate-float" style={{ animationDelay: '1s', animationDuration: '4s' }}>
        <div className="text-5xl">🏗️</div>
      </div>
      <div className="absolute bottom-32 right-32 opacity-20 animate-float" style={{ animationDelay: '2s', animationDuration: '5s' }}>
        <div className="text-4xl">🧱</div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
