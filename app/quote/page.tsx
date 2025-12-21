'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PageHeader from '@/components/sections/PageHeader';
import { products } from '@/data/products';
import { Brand, CementType } from '@/types';

function QuoteFormContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get('product');
  const selectedProduct = productId ? products.find(p => p.id === productId) : null;

  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    cementBrand: selectedProduct?.brand || '',
    cementType: selectedProduct?.type || '',
    quantity: '',
    deliveryLocation: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format WhatsApp message with quote request data
    const message = `*Quote Request*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Company:* ${formData.companyName || 'N/A'}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n\n` +
      `*Product Details:*\n` +
      `*Brand:* ${formData.cementBrand}\n` +
      `*Type:* ${formData.cementType}\n` +
      `*Quantity:* ${formData.quantity}\n` +
      `*Delivery Location:* ${formData.deliveryLocation}\n\n` +
      `${formData.message ? `*Additional Message:*\n${formData.message}` : ''}`;
    
    // Redirect to WhatsApp after short delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      const whatsappNumber = '923219283119';
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, '_blank');
      
      // Reset form after redirection
      setTimeout(() => {
        setFormData({
          name: '',
          companyName: '',
          phone: '',
          email: '',
          cementBrand: '',
          cementType: '',
          quantity: '',
          deliveryLocation: '',
          message: ''
        });
        setSubmitStatus('idle');
      }, 2000);
    }, 500);
  };

  return (
    <main>
      {/* Hero Section */}
      <PageHeader 
        title="Get a"
        highlightedText="Quote"
        subtitle="Fill out the form below and we'll get back to you with competitive pricing"
        backgroundImage="/contact.jpg"
      />

      {/* Quote Form Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-white via-cement-light to-white overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a1a1a' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Section Header */}
          <div className="text-center mb-10 lg:mb-12">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-industrial-green/10 to-accent/10 border border-industrial-green/30 rounded-full mb-4">
              <span className="text-sm font-semibold bg-gradient-to-r from-industrial-green to-accent bg-clip-text text-transparent uppercase tracking-wider">Request Pricing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4 uppercase tracking-tight">
              Get Your <span className="bg-gradient-to-r from-industrial-green to-accent bg-clip-text text-transparent">Best Quote</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-industrial-green to-accent mx-auto rounded-full"></div>
          </div>

          {/* Selected Product Banner */}
          {selectedProduct && (
            <div className="relative group mb-8 lg:mb-12">
              <div className="absolute -inset-1 bg-gradient-to-r from-industrial-green via-accent to-industrial-green rounded-2xl blur-lg opacity-50 group-hover:opacity-75 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-industrial-green to-accent text-white p-6 lg:p-8 rounded-2xl text-center">
                <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold mb-3">Selected Product</div>
                <h3 className="text-xl lg:text-2xl font-bold">{selectedProduct.brand} - {selectedProduct.name}</h3>
              </div>
            </div>
          )}

          {/* Form Container */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-industrial-green via-accent to-industrial-green rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-6 lg:p-10 xl:p-12 border-2 border-industrial-green/10">
              <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
                {/* Personal Information */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-br from-industrial-green to-accent rounded-lg flex items-center justify-center text-white text-sm font-bold">1</div>
                    <h3 className="text-xl font-bold text-charcoal">Personal Information</h3>
                    <div className="flex-grow h-px bg-gradient-to-r from-industrial-green/30 to-transparent ml-3"></div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-charcoal mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 bg-gradient-to-br from-industrial-green to-accent rounded-lg flex items-center justify-center text-white text-xs">👤</span>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-industrial-green focus:ring-4 focus:ring-industrial-green/10 outline-none transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="companyName" className="block text-sm font-bold text-charcoal mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 bg-gradient-to-br from-industrial-green to-accent rounded-lg flex items-center justify-center text-white text-xs">🏢</span>
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-industrial-green focus:ring-4 focus:ring-industrial-green/10 outline-none transition-all"
                        placeholder="Your company name (optional)"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-br from-industrial-green to-accent rounded-lg flex items-center justify-center text-white text-sm font-bold">2</div>
                    <h3 className="text-xl font-bold text-charcoal">Contact Details</h3>
                    <div className="flex-grow h-px bg-gradient-to-r from-industrial-green/30 to-transparent ml-3"></div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-charcoal mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 bg-gradient-to-br from-industrial-green to-accent rounded-lg flex items-center justify-center text-white text-xs">📱</span>
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-industrial-green focus:ring-4 focus:ring-industrial-green/10 outline-none transition-all"
                        placeholder="+92 XXX XXXXXXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-charcoal mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 bg-gradient-to-br from-industrial-green to-accent rounded-lg flex items-center justify-center text-white text-xs">✉️</span>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-industrial-green focus:ring-4 focus:ring-industrial-green/10 outline-none transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Product Information */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-br from-industrial-green to-accent rounded-lg flex items-center justify-center text-white text-sm font-bold">3</div>
                    <h3 className="text-xl font-bold text-charcoal">Product Selection</h3>
                    <div className="flex-grow h-px bg-gradient-to-r from-industrial-green/30 to-transparent ml-3"></div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="cementBrand" className="block text-sm font-bold text-charcoal mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 bg-gradient-to-br from-industrial-green to-accent rounded-lg flex items-center justify-center text-white text-xs">🏭</span>
                        Cement Brand *
                      </label>
                      <select
                        id="cementBrand"
                        name="cementBrand"
                        required
                        value={formData.cementBrand}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-industrial-green focus:ring-4 focus:ring-industrial-green/10 outline-none transition-all"
                      >
                        <option value="">Select Brand</option>
                        {Object.values(Brand).map((brand) => (
                          <option key={brand} value={brand}>{brand}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="cementType" className="block text-sm font-bold text-charcoal mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 bg-gradient-to-br from-industrial-green to-accent rounded-lg flex items-center justify-center text-white text-xs">📦</span>
                        Cement Type *
                      </label>
                      <select
                        id="cementType"
                        name="cementType"
                        required
                        value={formData.cementType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-industrial-green focus:ring-4 focus:ring-industrial-green/10 outline-none transition-all"
                      >
                        <option value="">Select Type</option>
                        {Object.values(CementType).map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Quantity and Location */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-br from-industrial-green to-accent rounded-lg flex items-center justify-center text-white text-sm font-bold">4</div>
                    <h3 className="text-xl font-bold text-charcoal">Order Details</h3>
                    <div className="flex-grow h-px bg-gradient-to-r from-industrial-green/30 to-transparent ml-3"></div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-bold text-charcoal mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 bg-gradient-to-br from-industrial-green to-accent rounded-lg flex items-center justify-center text-white text-xs">⚖️</span>
                        Quantity (Bags / Tons) *
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        required
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-industrial-green focus:ring-4 focus:ring-industrial-green/10 outline-none transition-all"
                        placeholder="e.g., 1000 bags or 50 tons"
                      />
                    </div>

                    <div>
                      <label htmlFor="deliveryLocation" className="block text-sm font-bold text-charcoal mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 bg-gradient-to-br from-industrial-green to-accent rounded-lg flex items-center justify-center text-white text-xs">📍</span>
                        Delivery Location *
                      </label>
                      <input
                        type="text"
                        id="deliveryLocation"
                        name="deliveryLocation"
                        required
                        value={formData.deliveryLocation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-industrial-green focus:ring-4 focus:ring-industrial-green/10 outline-none transition-all"
                        placeholder="City or specific address"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-br from-industrial-green to-accent rounded-lg flex items-center justify-center text-white text-sm font-bold">5</div>
                    <h3 className="text-xl font-bold text-charcoal">Additional Information</h3>
                    <div className="flex-grow h-px bg-gradient-to-r from-industrial-green/30 to-transparent ml-3"></div>
                  </div>
                  <label htmlFor="message" className="block text-sm font-bold text-charcoal mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 bg-gradient-to-br from-industrial-green to-accent rounded-lg flex items-center justify-center text-white text-xs">💬</span>
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-industrial-green focus:ring-4 focus:ring-industrial-green/10 outline-none resize-none transition-all"
                    placeholder="Any specific requirements or questions..."
                  />
                </div>

                {/* Submit Button */}
                <div className="relative group/btn pt-4">
                  <div className="absolute -inset-1 bg-gradient-to-r from-industrial-green via-accent to-industrial-green rounded-xl blur-lg opacity-70 group-hover/btn:opacity-100 animate-pulse"></div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full bg-gradient-to-r from-industrial-green to-accent text-white px-8 py-4 rounded-xl font-bold text-base lg:text-lg hover:scale-[1.02] transition-all uppercase shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Quote Request</span>
                        <span className="text-xl group-hover/btn:translate-x-1 transition-transform">→</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="relative group/success mt-6">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-50 animate-pulse"></div>
                    <div className="relative bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500 p-6 rounded-2xl text-center">
                      <div className="text-5xl mb-3 animate-bounce">✓</div>
                      <p className="font-bold text-xl text-green-700 mb-2">Quote Request Submitted Successfully!</p>
                      <p className="text-sm text-green-600">We&apos;ll contact you shortly with our best pricing.</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="mt-8 lg:mt-12 grid sm:grid-cols-3 gap-6">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-industrial-green to-accent rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-industrial-green/30 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-industrial-green to-accent rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">⚡</div>
                <h3 className="font-bold text-charcoal mb-2 text-lg group-hover:text-industrial-green transition-colors">Quick Response</h3>
                <p className="text-sm text-gray-600">Get a quote within 24 hours</p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-accent to-industrial-green rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-accent/30 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-industrial-green rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">💰</div>
                <h3 className="font-bold text-charcoal mb-2 text-lg group-hover:text-accent transition-colors">Best Prices</h3>
                <p className="text-sm text-gray-600">Competitive market rates</p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-industrial-green to-accent rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-industrial-green/30 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-industrial-green to-accent rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">🤝</div>
                <h3 className="font-bold text-charcoal mb-2 text-lg group-hover:text-industrial-green transition-colors">No Obligation</h3>
                <p className="text-sm text-gray-600">Free quote, no commitment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function QuotePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <QuoteFormContent />
    </Suspense>
  );
}
