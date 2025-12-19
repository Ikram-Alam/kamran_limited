'use client';

import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  highlightedText?: string;
  subtitle: string;
  backgroundColor?: string;
  backgroundImage?: string;
}

export default function PageHeader({ 
  title, 
  highlightedText, 
  subtitle,
  backgroundColor = 'bg-charcoal',
  backgroundImage
}: PageHeaderProps) {
  return (
    <section className={`relative ${backgroundColor} text-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden`}>
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt={`${title} ${highlightedText || ''}`}
            fill
            priority
            quality={80}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/85 to-charcoal/70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/60"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-industrial-green/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </>
      )}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 uppercase tracking-tight leading-tight">
            {title} {highlightedText && <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-400 to-accent animate-gradient-x bg-[length:200%_auto]">{highlightedText}</span>}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
