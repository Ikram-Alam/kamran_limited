'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/sections/PageHeader';
import { products } from '@/data/products';
import { Product } from '@/types';

function ProductsContent() {
  const searchParams = useSearchParams();
  const [selectedBrand, setSelectedBrand] = useState<string>(searchParams.get('brand') || 'all');
  const [selectedType, setSelectedType] = useState<string>(searchParams.get('type') || 'all');
  const [selectedUsage, setSelectedUsage] = useState<string>('all');

  // Filter products
  const filteredProducts = products.filter(product => {
    const brandMatch = selectedBrand === 'all' || 
      product.brand.toLowerCase().includes(selectedBrand.toLowerCase());
    
    const typeMatch = selectedType === 'all' || 
      product.type.toLowerCase().includes(selectedType.toLowerCase());
    
    const usageMatch = selectedUsage === 'all' || 
      product.usage.some(u => u.toLowerCase().includes(selectedUsage.toLowerCase()));

    return brandMatch && typeMatch && usageMatch;
  });

  return (
    <main>
      {/* Hero Section */}
      <PageHeader 
        title="Our"
        highlightedText="Products"
        subtitle="Premium quality cement from Pakistan's most trusted brands"
        backgroundImage="/hero-bg.jpg"
      />

      {/* Filters */}
      <section className="lg:sticky lg:top-16 z-40 bg-gradient-to-r from-charcoal via-gray-900 to-charcoal shadow-2xl backdrop-blur-sm">
        <div className="relative py-6">
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            {/* Filter Header */}
            <div className="text-center mb-6">
              <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-2">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">🔍 Smart Filters</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 lg:gap-6">
              {/* Brand Filter */}
              <div className="group">
                <label className="flex items-center gap-2 text-sm font-bold text-white mb-2">
                  <span className="w-6 h-6 bg-gradient-to-br from-industrial-green to-accent rounded-lg flex items-center justify-center text-xs">🏭</span>
                  Filter by Brand
                </label>
                <div className="relative">
                  <select 
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-white/20 bg-white/10 text-white backdrop-blur-sm focus:border-industrial-green focus:ring-4 focus:ring-industrial-green/20 outline-none transition-all appearance-none cursor-pointer hover:bg-white/20"
                  >
                    <option value="all" className="bg-charcoal">All Brands</option>
                    <option value="falcon" className="bg-charcoal">Falcon Cement</option>
                    <option value="lucky" className="bg-charcoal">Lucky Cement</option>
                    <option value="thatta" className="bg-charcoal">Thatta Cement</option>
                    <option value="dg" className="bg-charcoal">DG Cement</option>
                    <option value="white" className="bg-charcoal">White Cement</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-industrial-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Type Filter */}
              <div className="group">
                <label className="flex items-center gap-2 text-sm font-bold text-white mb-2">
                  <span className="w-6 h-6 bg-gradient-to-br from-industrial-green to-accent rounded-lg flex items-center justify-center text-xs">📦</span>
                  Filter by Type
                </label>
                <div className="relative">
                  <select 
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-white/20 bg-white/10 text-white backdrop-blur-sm focus:border-accent focus:ring-4 focus:ring-accent/20 outline-none transition-all appearance-none cursor-pointer hover:bg-white/20"
                  >
                    <option value="all" className="bg-charcoal">All Types</option>
                    <option value="opc" className="bg-charcoal">OPC Cement</option>
                    <option value="src" className="bg-charcoal">SRC Cement</option>
                    <option value="block" className="bg-charcoal">Block Cement</option>
                    <option value="white" className="bg-charcoal">White Cement</option>
                    <option value="composite" className="bg-charcoal">Composite Cement</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Usage Filter */}
              <div className="group">
                <label className="flex items-center gap-2 text-sm font-bold text-white mb-2">
                  <span className="w-6 h-6 bg-gradient-to-br from-industrial-green to-accent rounded-lg flex items-center justify-center text-xs">🏗️</span>
                  Filter by Usage
                </label>
                <div className="relative">
                  <select 
                    value={selectedUsage}
                    onChange={(e) => setSelectedUsage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-white/20 bg-white/10 text-white backdrop-blur-sm focus:border-industrial-green focus:ring-4 focus:ring-industrial-green/20 outline-none transition-all appearance-none cursor-pointer hover:bg-white/20"
                  >
                    <option value="all" className="bg-charcoal">All Uses</option>
                    <option value="residential" className="bg-charcoal">Residential</option>
                    <option value="commercial" className="bg-charcoal">Commercial</option>
                    <option value="infrastructure" className="bg-charcoal">Infrastructure</option>
                    <option value="marine" className="bg-charcoal">Marine</option>
                    <option value="precast" className="bg-charcoal">Block & Precast</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-industrial-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-cement-light to-white overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a1a1a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Results Counter */}
          <div className="mb-8 lg:mb-12 text-center">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-industrial-green/10 to-accent/10 border border-industrial-green/30 rounded-full">
              <p className="text-base sm:text-lg font-semibold">
                <span className="bg-gradient-to-r from-industrial-green to-accent bg-clip-text text-transparent">Showing {filteredProducts.length}</span>
                <span className="text-charcoal"> product{filteredProducts.length !== 1 ? 's' : ''}</span>
              </p>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 lg:py-24">
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-industrial-green/20 blur-3xl rounded-full"></div>
                <div className="relative text-8xl animate-bounce">📦</div>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">No Products Found</h3>
              <p className="text-gray-600 mb-8 text-lg">Try adjusting your filters to see more results</p>
              <div className="inline-block relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-industrial-green via-accent to-industrial-green rounded-xl blur-lg opacity-70 group-hover:opacity-100 animate-pulse"></div>
                <button 
                  onClick={() => {
                    setSelectedBrand('all');
                    setSelectedType('all');
                    setSelectedUsage('all');
                  }}
                  className="relative bg-gradient-to-r from-industrial-green to-accent text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all uppercase shadow-xl flex items-center gap-3"
                >
                  <span>Clear All Filters</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const brandImages: { [key: string]: string } = {
    'Falcon Cement': '/falcon.jpeg',
    'Lucky Cement': '/lucky.jpeg',
    'Thatta Cement': '/tahtta.jpeg',
    'DG Cement': '/dg.png',
    'White Cement': '/dg.png'
  };

  const brandImage = brandImages[product.brand] || '/dg.png';

  return (
    <div 
      className="group relative"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Hover Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-br from-industrial-green to-accent rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
      
      {/* Card */}
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-industrial-green/30 transition-all duration-300 h-full flex flex-col">
        {/* Product Header with Image */}
        <div className="relative h-48 bg-gradient-to-br from-industrial-green via-emerald-600 to-accent overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>

          {/* Brand Logo */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="relative w-32 h-32 bg-white rounded-2xl p-4 shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <Image 
                src={brandImage}
                alt={`${product.brand} logo`}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Strength Badge */}
          <div className="absolute top-4 right-4">
            <div className="relative">
              <div className="absolute -inset-1 bg-accent blur opacity-50"></div>
              <div className="relative bg-white/20 backdrop-blur-sm border border-white/30 px-3 py-2 rounded-xl">
                <p className="text-xs font-bold text-white">{product.strength}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Body */}
        <div className="p-6 flex-grow flex flex-col">
          {/* Brand & Name */}
          <div className="mb-4">
            <p className="text-sm font-semibold text-industrial-green mb-1">{product.brand}</p>
            <h3 className="text-xl font-bold text-charcoal group-hover:text-industrial-green transition-colors">{product.name}</h3>
          </div>

          {/* Type Badge */}
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-industrial-green/10 to-accent/10 border border-industrial-green/30 rounded-full text-sm font-bold text-charcoal">
              {product.type}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-4 leading-relaxed text-sm">
            {product.description}
          </p>

          {/* Features */}
          <div className="mb-4">
            <h4 className="font-bold text-charcoal mb-3 text-sm flex items-center gap-2">
              <span className="w-6 h-6 bg-industrial-green/10 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-industrial-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Key Features
            </h4>
            <ul className="space-y-2">
              {product.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 group/item">
                  <div className="w-5 h-5 bg-gradient-to-br from-industrial-green to-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm leading-tight">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Usage Tags */}
          <div className="mb-6 flex-grow">
            <h4 className="font-bold text-charcoal mb-3 text-sm flex items-center gap-2">
              <span className="w-6 h-6 bg-accent/10 rounded-lg flex items-center justify-center text-xs">🏗️</span>
              Recommended For
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.usage.map((usage, idx) => (
                <span key={idx} className="bg-gradient-to-r from-cement-light to-gray-100 text-charcoal px-3 py-1 rounded-full text-xs font-semibold border border-gray-200 hover:border-industrial-green hover:shadow-md transition-all">
                  {usage}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-auto">
            <Link 
              href={`/quote?product=${product.id}`}
              className="group/btn flex-1 relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-industrial-green to-accent rounded-xl blur opacity-50 group-hover/btn:opacity-100 transition"></div>
              <div className="relative bg-gradient-to-r from-industrial-green to-accent text-white px-4 py-3 rounded-xl font-bold hover:scale-105 transition-all text-center text-sm flex items-center justify-center gap-2">
                <span>Get Quote</span>
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Link>
            <Link 
              href={`/contact`}
              className="flex-1 border-2 border-industrial-green text-industrial-green px-4 py-3 rounded-xl font-bold hover:bg-industrial-green hover:text-white transition-all text-center text-sm hover:scale-105"
            >
              Inquire
            </Link>
          </div>
        </div>

        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
