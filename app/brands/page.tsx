import PageHeader from '@/components/sections/PageHeader';
import BrandsSection from '@/components/sections/BrandsSection';
import CTASection from '@/components/CTASection';
import { Metadata } from 'next';
import type { BrandInfo } from '@/types';
import { Brand } from '@/types';

export const metadata: Metadata = {
  title: "Top Cement Brands - Falcon, Lucky, Thatta, DG Cement Dealer Pakistan",
  description: "🏅 Authorized dealer of Pakistan's best cement brands. Falcon, Lucky, Thatta & DG Khan Cement. ✓ Genuine Products ✓ Factory Prices ✓ Bulk Discounts. Compare brands & get best cement for your project. Call 0336-9283119",
  keywords: "Falcon cement dealer, Lucky cement supplier Pakistan, Thatta cement price, DG Khan cement, best cement brand Pakistan, cement brands comparison, authorized cement dealer",
  openGraph: {
    title: "Top Cement Brands in Pakistan | Kamran Limited",
    description: "Authorized dealer of Falcon, Lucky, Thatta & DG Cement. Get genuine products at best prices.",
  },
};

const brandsData: BrandInfo[] = [
  {
    name: Brand.FALCON, 
    logo: '🦅',
    tagline: 'Strength You Can Trust',
    description: 'Falcon Cement is one of Pakistan\'s most trusted cement brands, known for its superior quality and consistent performance in all types of construction work. With advanced manufacturing facilities and rigorous quality control, Falcon Cement delivers exceptional strength and durability.',
    products: ['OPC Grade 53', 'SRC Cement', 'Block Cement'],
    features: [
      'Highest compressive strength',
      'Excellent durability',
      'Superior fineness for better workability',
      'Fast setting time',
      'Low heat of hydration',
      'Sulfate resistant variants'
    ]
  },
  {
    name: Brand.LUCKY,
    logo: '🍀',
    tagline: 'Pakistan\'s No. 1 Cement',
    description: 'Lucky Cement is Pakistan\'s leading cement manufacturer with state-of-the-art production facilities and an unwavering commitment to quality excellence. Trusted by major construction companies nationwide, Lucky Cement represents reliability and superior performance.',
    products: ['OPC Grade 53', 'Composite Cement', 'White Cement'],
    features: [
      'ISO certified manufacturing',
      'Eco-friendly production',
      'Extensive quality testing',
      'Premium raw materials',
      'Advanced technology',
      'Consistent color and texture'
    ]
  },
  {
    name: Brand.THATTA,
    logo: '🏛️',
    tagline: 'Building Heritage, Building Future',
    description: 'Thatta Cement has built a strong reputation for providing reliable, cost-effective cement solutions for construction projects across Pakistan. With decades of experience, Thatta Cement offers excellent value without compromising on quality.',
    products: ['OPC Grade 53', 'OPC Grade 43'],
    features: [
      'Competitive pricing',
      'Proven track record',
      'Good early strength',
      'Reliable supply chain',
      'Quality assurance',
      'Excellent customer support'
    ]
  },
  {
    name: Brand.DG,
    logo: '⚡',
    tagline: 'Power of Quality',
    description: 'DG Cement is renowned for its premium quality cement products, manufactured with advanced technology and rigorous quality control measures. Preferred for large infrastructure projects, DG Cement offers exceptional performance in demanding environments.',
    products: ['OPC Grade 53', 'SRC Cement'],
    features: [
      'Premium quality cement',
      'High strength and durability',
      'Excellent in aggressive environments',
      'Advanced manufacturing',
      'International standards',
      'Preferred for infrastructure'
    ]
  },
  // {
  //   name: Brand.WHITE,
  //   logo: '⚪',
  //   tagline: 'Pure Excellence',
  //   description: 'White Cement is a premium product used for architectural finishes, decorative work, and specialized applications requiring pure white color. Perfect for aesthetic construction needs, it provides a smooth, elegant finish.',
  //   products: ['White Cement', 'Premium Finishing Cement'],
  //   features: [
  //     'Pure white color',
  //     'Smooth finish',
  //     'Excellent workability',
  //     'High brightness',
  //     'Decorative applications',
  //     'Premium finishing'
  //   ]
  // }
];

export default function BrandsPage() {
  return (
    <main>
      {/* Hero Section */}
      <PageHeader 
        title="Our"
        highlightedText="Brands"
        subtitle="Authorized dealer of Pakistan's most trusted cement manufacturers"
        backgroundImage="/brand.jpg"
      />


      {/* Authorized Dealer Badge */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-cement-light/50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-4 bg-gradient-to-br from-industrial-green to-accent text-white px-8 sm:px-10 py-5 sm:py-6 rounded-3xl mb-8 shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-4xl">🏆</div>
              <span className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">Authorized Dealer</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal mb-4 sm:mb-6">
              100% Genuine Products Guaranteed
            </h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
              As authorized dealers, we supply authentic cement products directly from manufacturers, 
              ensuring quality, authenticity, and manufacturer warranty on every bag.
            </p>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <BrandsSection brands={brandsData} />

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
