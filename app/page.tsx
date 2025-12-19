import HeroSection from '@/components/sections/HeroSection';
import BrandSlider from '@/components/BrandSlider';
import ProductCategoriesSection from '@/components/sections/ProductCategoriesSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import IndustriesServedSection from '@/components/sections/IndustriesServedSection';
import CompanyStatsSection from '@/components/sections/CompanyStatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';

// SEO content for homepage (hidden but indexed by search engines)
const seoContent = {
  h1: "Best Cement Supplier in Pakistan - Kamran Limited",
  content: [
    "Buy premium quality cement from Pakistan's most trusted supplier. Kamran Limited is the authorized dealer of top cement brands including Falcon Cement, Lucky Cement, Thatta Cement, and DG Khan Cement.",
    "We supply OPC cement, SRC cement, white cement, block cement, and composite cement for residential, commercial, and infrastructure projects across Pakistan.",
    "Get the best cement prices in Pakistan with guaranteed quality, fast delivery, and excellent customer service. Contact us at 0336-9283119 for instant quotes.",
  ],
};

export default function Home() {
  return (
    <main>
      {/* Hidden SEO Content for Search Engines */}
      <div className="sr-only">
        <h1>{seoContent.h1}</h1>
        {seoContent.content.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>

      {/* Hero Section */}
      <HeroSection 
        title="Pakistan's Trusted"
        highlightedText="Cement Supplier"
        subtitle="Authorized dealer of premium cement brands • Quality guaranteed • Competitive prices • Timely delivery"
      />

      {/* Brand Logos Strip */}
      <BrandSlider />

      {/* Product Categories Overview */}
      <ProductCategoriesSection />

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Industries Served */}
      <IndustriesServedSection />

      {/* Company Stats */}
      <CompanyStatsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}

