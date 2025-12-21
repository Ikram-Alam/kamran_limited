'use client';

import { useState } from 'react';
import PageHeader from '@/components/sections/PageHeader';
import ContactInfoSection from '@/components/sections/ContactInfoSection';
import { ContactFormData } from '@/types';

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format WhatsApp message with form data
    const message = `*New Contact Request*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Company:* ${formData.company || 'N/A'}\n\n` +
      `*Message:*\n${formData.message}`;
    
    // Redirect to WhatsApp
    const whatsappNumber = '923219283119';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <main>
      {/* Hero Section */}
      <PageHeader 
        title="Contact"
        highlightedText="Us"
        subtitle="Get in touch with our team for inquiries, quotes, or support"
        backgroundImage="/contact.jpg"
      />

      {/* Contact Info Cards */}
      <ContactInfoSection />

      {/* Contact Form Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-white via-cement-light to-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%231a1a1a' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>

        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Section Header */}
          <div className="text-center mb-10 lg:mb-12">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-industrial-green/10 to-accent/10 border border-industrial-green/30 rounded-full mb-4">
              <span className="text-sm font-semibold bg-gradient-to-r from-industrial-green to-accent bg-clip-text text-transparent uppercase tracking-wider">Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4 uppercase tracking-tight">
              Send Us a <span className="bg-gradient-to-r from-industrial-green to-accent bg-clip-text text-transparent">Message</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Fill out the form below and our team will get back to you within 24 hours
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-industrial-green to-accent mx-auto rounded-full mt-4"></div>
          </div>

          {/* Form Container */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-industrial-green via-accent to-industrial-green rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
            <div className="relative bg-white rounded-3xl p-6 lg:p-10 shadow-2xl border-2 border-industrial-green/10">
              <form onSubmit={handleSubmit}>
                {/* Name & Email Row */}
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div className="group/input">
                    <label htmlFor="name" className="block text-sm font-bold text-charcoal mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 bg-gradient-to-br from-industrial-green to-accent rounded-lg flex items-center justify-center text-white text-xs">👤</span>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-industrial-green focus:ring-4 focus:ring-industrial-green/10 transition-all bg-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="group/input">
                    <label htmlFor="email" className="block text-sm font-bold text-charcoal mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 bg-gradient-to-br from-industrial-green to-accent rounded-lg flex items-center justify-center text-white text-xs">✉️</span>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-industrial-green focus:ring-4 focus:ring-industrial-green/10 transition-all bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone & Company Row */}
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div className="group/input">
                    <label htmlFor="phone" className="block text-sm font-bold text-charcoal mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 bg-gradient-to-br from-industrial-green to-accent rounded-lg flex items-center justify-center text-white text-xs">📱</span>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-industrial-green focus:ring-4 focus:ring-industrial-green/10 transition-all bg-white"
                      placeholder="+92 300 1234567"
                    />
                  </div>
                  <div className="group/input">
                    <label htmlFor="company" className="block text-sm font-bold text-charcoal mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 bg-gradient-to-br from-industrial-green to-accent rounded-lg flex items-center justify-center text-white text-xs">🏢</span>
                      Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-industrial-green focus:ring-4 focus:ring-industrial-green/10 transition-all bg-white"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-bold text-charcoal mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 bg-gradient-to-br from-industrial-green to-accent rounded-lg flex items-center justify-center text-white text-xs">💬</span>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-industrial-green focus:ring-4 focus:ring-industrial-green/10 transition-all resize-none bg-white"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="relative group/btn">
                  <div className="absolute -inset-1 bg-gradient-to-r from-industrial-green via-accent to-industrial-green rounded-xl blur-lg opacity-70 group-hover/btn:opacity-100 animate-pulse"></div>
                  <button
                    type="submit"
                    className="relative w-full bg-gradient-to-r from-industrial-green to-accent text-white py-4 px-6 rounded-xl font-bold text-base lg:text-lg hover:scale-[1.02] transition-all uppercase shadow-xl flex items-center justify-center gap-3"
                  >
                    <span>Send Message</span>
                    <span className="text-xl group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-charcoal via-gray-900 to-charcoal overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-industrial-green/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Section Header */}
          <div className="text-center mb-10 lg:mb-12">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-4">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">Operating Schedule</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 uppercase tracking-tight">
              Business <span className="bg-gradient-to-r from-industrial-green to-accent bg-clip-text text-transparent">Hours</span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-industrial-green to-accent mx-auto rounded-full"></div>
          </div>

          {/* Hours Container */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-industrial-green via-accent to-industrial-green rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 lg:p-10 rounded-3xl">
              {/* Days Grid */}
              <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-8">
                {/* Weekdays */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-industrial-green to-accent rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-industrial-green to-accent rounded-xl flex items-center justify-center text-2xl">📅</div>
                      <h4 className="font-bold text-white text-xl">Weekdays</h4>
                    </div>
                    <p className="text-gray-300 mb-2">Monday - Friday</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-industrial-green to-accent bg-clip-text text-transparent">9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                {/* Weekend */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-accent to-industrial-green rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-industrial-green rounded-xl flex items-center justify-center text-2xl">📅</div>
                      <h4 className="font-bold text-white text-xl">Weekend</h4>
                    </div>
                    <p className="text-gray-300">Saturday</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-accent to-industrial-green bg-clip-text text-transparent mb-3">9:00 AM - 2:00 PM</p>
                    <p className="text-gray-400 text-sm">Sunday - Closed</p>
                  </div>
                </div>
              </div>

              {/* Emergency Notice */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent via-industrial-green to-accent rounded-2xl blur opacity-30"></div>
                <div className="relative bg-gradient-to-r from-accent/20 to-industrial-green/20 backdrop-blur-sm border border-white/20 p-6 rounded-2xl text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-2xl">⚡</span>
                    <p className="font-bold text-white text-lg">Emergency Orders</p>
                  </div>
                  <p className="text-gray-300">
                    Contact us on WhatsApp for urgent cement requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
