import Link from 'next/link';

interface ProductCategory {
  icon: string;
  title: string;
  description: string;
  features: string[];
  link: string;
  linkText: string;
  gradient: string;
}

const categories: ProductCategory[] = [
  {
    icon: '🏗️',
    title: 'OPC Cement',
    description: 'Ordinary Portland Cement for general construction, RCC work, and structural applications',
    features: ['Grade 53 Strength', 'Fast Setting', 'High Durability'],
    link: '/products?type=opc',
    linkText: 'View OPC Products',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: '🌊',
    title: 'SRC Cement',
    description: 'Sulfate Resistant Cement for marine structures and sulfate-prone environments',
    features: ['Sulfate Resistant', 'Marine Grade', 'Long-lasting'],
    link: '/products?type=src',
    linkText: 'View SRC Products',
    gradient: 'from-cyan-500 to-teal-600'
  },
  {
    icon: '⚪',
    title: 'Block & White Cement',
    description: 'Specialized cement for block manufacturing and premium finishing work',
    features: ['Fast Setting', 'Pure White Color', 'Smooth Finish'],
    link: '/products?type=block',
    linkText: 'View Specialty Products',
    gradient: 'from-gray-400 to-gray-600'
  }
];

export default function ProductCategoriesSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-cement-light to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-industrial-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-industrial-green font-bold text-sm uppercase tracking-widest mb-2 block">Product Range</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-charcoal mb-3 uppercase tracking-tight">
              Cement For Every Need
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-industrial-green to-accent mx-auto rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Comprehensive range of cement types for every construction requirement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-industrial-green/20 hover:-translate-y-2"
            >
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${category.gradient}`}></div>
              
              <div className="p-8">
                <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-industrial-green/10 to-accent/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-5xl">{category.icon}</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3 group-hover:text-industrial-green transition-colors uppercase tracking-tight">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="mb-6 space-y-3">
                  {category.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-industrial-green/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-industrial-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  href={category.link} 
                  className="group/link inline-flex items-center gap-2 text-industrial-green font-bold hover:text-accent transition-colors"
                >
                  {category.linkText}
                  <svg className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
              
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-industrial-green/0 to-accent/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/products"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-industrial-green to-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-industrial-green/30 transition-all hover:scale-105 uppercase"
          >
            Explore All Products
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
