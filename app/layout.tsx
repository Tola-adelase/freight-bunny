import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'FreightBunny - UK to Nigeria Shipping Made Easy',
    template: '%s | FreightBunny'
  },
  description: 'Fast, reliable, and affordable shipping between the UK and Nigeria. Air freight, customs clearance, and Buy For Me services. Get your packages delivered in 7-10 days.',
  keywords: [
    'UK to Nigeria shipping',
    'air freight',
    'international shipping',
    'Nigeria shipping',
    'UK shipping',
    'customs clearance',
    'buy for me service',
    'package delivery',
    'freight forwarding',
    'shipping company'
  ],
  authors: [{ name: 'FreightBunny' }],
  creator: 'FreightBunny',
  publisher: 'FreightBunny',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://freightbunny.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://freightbunny.com',
    title: 'FreightBunny - UK to Nigeria Shipping Made Easy',
    description: 'Fast, reliable, and affordable shipping between the UK and Nigeria. Air freight, customs clearance, and Buy For Me services.',
    siteName: 'FreightBunny',
    images: [
      {
        url: '/images/Freight_Bunny_Hero_Image.jpg',
        width: 1200,
        height: 630,
        alt: 'FreightBunny - UK to Nigeria Shipping',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FreightBunny - UK to Nigeria Shipping Made Easy',
    description: 'Fast, reliable, and affordable shipping between the UK and Nigeria.',
    images: ['/images/Freight_Bunny_Hero_Image.jpg'],
    creator: '@freightbunny',
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
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#002147" />
        
        {/* Additional meta tags for better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "FreightBunny",
              "description": "Fast, reliable, and affordable shipping between the UK and Nigeria",
              "url": "https://freightbunny.com",
              "logo": "https://freightbunny.com/images/Headerlogo.jpg",
              "image": "https://freightbunny.com/images/Freight_Bunny_Hero_Image.jpg",
              "telephone": "+44 739 217 1558",
              "email": "info@freightbunny.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "GB",
                "addressLocality": "London",
                "addressRegion": "England"
              },
              "sameAs": [
                "https://www.facebook.com/share/16Wjxof9Gd/?mibextid=wwXIfr",
                "https://twitter.com/freightbunny",
                "https://www.instagram.com/shipwithbunny",
                "https://wa.me/447392171558"
              ],
              "serviceArea": {
                "@type": "Country",
                "name": "Nigeria"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Shipping Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Air Freight UK to Nigeria",
                      "description": "Fast air freight service from UK to Nigeria"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Buy For Me Service",
                      "description": "Personal shopping service in the UK"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
