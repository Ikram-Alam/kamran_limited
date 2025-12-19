import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyQuoteButton from "@/components/StickyQuoteButton";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kamran Limited - Best Cement Dealer in Pakistan | Falcon, Lucky, Thatta, DG Cement Supplier",
    template: "%s | Kamran Limited"
  },
  description: "🏆 Top cement supplier in Pakistan. Authorized dealer of Falcon, Lucky, Thatta & DG Cement. ✓ Best Prices ✓ Quality Assured ✓ Fast Delivery. OPC, SRC, White Cement for residential, commercial & infrastructure projects. Call 0336-9283119 for quotes!",
  keywords: [
    // Primary Keywords
    "cement dealer Pakistan",
    "cement supplier Pakistan",
    "best cement price Pakistan",
    "buy cement online Pakistan",
    
    // Brand Keywords
    "Falcon cement dealer",
    "Lucky cement supplier",
    "Thatta cement price",
    "DG Khan cement",
    "authorized cement dealer",
    
    // Product Keywords
    "OPC cement Pakistan",
    "SRC cement supplier",
    "white cement Pakistan",
    "block cement",
    "composite cement",
    "construction cement",
    
    // Local SEO
    "cement dealer near me",
    "cement supplier Karachi",
    "cement supplier Lahore",
    "cement supplier Islamabad",
    
    // Use Case Keywords
    "residential cement",
    "commercial cement",
    "infrastructure cement",
    "construction materials Pakistan",
    "building materials supplier",
    
    // Long-tail Keywords
    "best quality cement in Pakistan",
    "affordable cement supplier",
    "bulk cement order Pakistan",
    "cement wholesale dealer",
  ],
  authors: [{ name: "Kamran Limited" }],
  creator: "Kamran Limited",
  publisher: "Kamran Limited",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL('https://kamranlimited.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Kamran Limited - Best Cement Dealer in Pakistan | Falcon, Lucky, Thatta, DG Cement",
    description: "Top cement supplier in Pakistan. Authorized dealer of premium cement brands. Best prices, quality assured, fast delivery across Pakistan. Get your quote today!",
    url: 'https://kamranlimited.com',
    siteName: 'Kamran Limited',
    images: [
      {
        url: '/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Kamran Limited - Cement Supplier Pakistan',
      },
    ],
    locale: 'en_PK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kamran Limited - Best Cement Dealer in Pakistan',
    description: 'Top cement supplier in Pakistan. Falcon, Lucky, Thatta & DG Cement. Best prices & fast delivery.',
    images: ['/hero-bg.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-verification-code',
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://kamranlimited.com/#organization",
        "name": "Kamran Limited",
        "url": "https://kamranlimited.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://kamranlimited.com/hero-bg.jpg",
          "width": "1200",
          "height": "630"
        },
        "description": "Leading cement supplier in Pakistan, authorized dealer of Falcon, Lucky, Thatta, and DG Cement",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+92-336-9283119",
            "contactType": "Customer Service",
            "areaServed": "PK",
            "availableLanguage": ["English", "Urdu"]
          },
          {
            "@type": "ContactPoint",
            "telephone": "+92-315-9283119",
            "contactType": "Sales",
            "areaServed": "PK"
          }
        ],
        "sameAs": [
          "https://wa.me/923369283119"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "PK",
          "addressLocality": "Pakistan"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://kamranlimited.com/#localbusiness",
        "name": "Kamran Limited",
        "image": {
          "@type": "ImageObject",
          "url": "https://kamranlimited.com/hero-bg.jpg",
          "width": "1200",
          "height": "630"
        },
        "telephone": "+92-336-9283119",
        "email": "kamran.company09@gmail.com",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "PK"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "24.8607",
          "longitude": "67.0011"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "150",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "Product",
        "name": "Cement",
        "description": "Premium quality cement from top Pakistani brands - Falcon, Lucky, Thatta, DG Khan",
        "image": "https://kamranlimited.com/hero-bg.jpg",
        "brand": [
          {
            "@type": "Brand",
            "name": "Falcon Cement"
          },
          {
            "@type": "Brand",
            "name": "Lucky Cement"
          },
          {
            "@type": "Brand",
            "name": "Thatta Cement"
          },
          {
            "@type": "Brand",
            "name": "DG Khan Cement"
          }
        ],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "PKR",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Kamran Limited"
          }
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://kamranlimited.com/#website",
        "url": "https://kamranlimited.com",
        "name": "Kamran Limited",
        "description": "Best cement supplier in Pakistan",
        "publisher": {
          "@id": "https://kamranlimited.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://kamranlimited.com/products?search={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://kamranlimited.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Products",
            "item": "https://kamranlimited.com/products"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Brands",
            "item": "https://kamranlimited.com/brands"
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <StickyQuoteButton />
      </body>
    </html>
  );
}

