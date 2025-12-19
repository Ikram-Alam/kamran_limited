'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-charcoal text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tight">
            <span className="text-accent">KAMRAN</span> LIMITED
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-accent transition-colors font-medium">
              HOME
            </Link>
            <Link href="/about" className="hover:text-accent transition-colors font-medium">
              ABOUT
            </Link>
            
            {/* Products Link (No Dropdown) */}
            <Link href="/products" className="hover:text-accent transition-colors font-medium">
              PRODUCTS
            </Link>

            <Link href="/brands" className="hover:text-accent transition-colors font-medium">
              BRANDS
            </Link>
            <Link href="/services" className="hover:text-accent transition-colors font-medium">
              SERVICES
            </Link>
            <Link href="/industries" className="hover:text-accent transition-colors font-medium">
              INDUSTRIES
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors font-medium">
              CONTACT
            </Link>
          </nav>

          {/* CTA Button */}
          <Link 
            href="/quote" 
            className="hidden md:block bg-accent text-charcoal px-6 py-3 rounded font-bold hover:bg-yellow-500 transition-colors uppercase"
          >
            Get Quote
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 hover:text-accent font-medium">
              HOME
            </Link>
            <Link href="/about" className="block py-2 hover:text-accent font-medium">
              ABOUT
            </Link>
            <Link href="/products" className="block py-2 hover:text-accent font-medium">
              PRODUCTS
            </Link>
            <Link href="/brands" className="block py-2 hover:text-accent font-medium">
              BRANDS
            </Link>
            <Link href="/services" className="block py-2 hover:text-accent font-medium">
              SERVICES
            </Link>
            <Link href="/industries" className="block py-2 hover:text-accent font-medium">
              INDUSTRIES
            </Link>
            <Link href="/contact" className="block py-2 hover:text-accent font-medium">
              CONTACT
            </Link>
            <Link href="/quote" className="block bg-accent text-charcoal px-6 py-3 rounded font-bold text-center mt-4">
              GET QUOTE
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
