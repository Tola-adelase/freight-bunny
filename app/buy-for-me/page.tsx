"use client"

import React, { useState } from "react"
import { usePathname } from "next/navigation"
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MessageCircle,
  Music,
  Plane,
  Package,
  Clock,
  ArrowRight,
  Calculator,
  Shield,
  Star,
  CheckCircle,
  Menu,
  X,
  Search,
  ShieldCheck,
  Info,
  User,
  Truck,
  MapPin,
  CreditCard,
  ArrowLeft,
  Sun,
  Moon,
  Users,
  Target,
  Heart,
  Award,
  Zap,
  Globe,
  TrendingUp,
  FileText,
  Box,
  Palette,
  Gift,
  ShoppingBag,
  Car,
  Building,
  Home,
  DollarSign,
  Percent,
  Calendar,
  Clock as ClockIcon,
  ShoppingCart,
  CreditCard as CreditCardIcon,
  Eye,
  Truck as TruckIcon,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"

export default function BuyForMePage() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [selectedStep, setSelectedStep] = useState<number | null>(null)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/buy-for-me", label: "Buy For Me" },
    { href: "/pricing", label: "Pricing" },
    { href: "#contact", label: "Contact Us" },
  ]

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const processSteps = [
    {
      step: 1,
      title: "Tell Us What You Want",
      icon: ShoppingCart,
      description: "Send us the details of what you want to buy",
      details: [
        "Product name and description",
        "Preferred retailer or website",
        "Size, color, or specific requirements",
        "Your budget range"
      ]
    },
    {
      step: 2,
      title: "We Source & Verify",
      icon: Search,
      description: "We find the best deals and verify product quality",
      details: [
        "Search multiple retailers",
        "Compare prices and quality",
        "Verify product authenticity",
        "Check availability and stock"
      ]
    },
    {
      step: 3,
      title: "Purchase & Quality Check",
      icon: CreditCardIcon,
      description: "We buy the item and perform quality inspection",
      details: [
        "Secure payment processing",
        "Quality inspection before shipping",
        "Professional packaging",
        "Documentation preparation"
      ]
    },
    {
      step: 4,
      title: "Ship to Nigeria",
      icon: TruckIcon,
      description: "We ship your items safely to Nigeria",
      details: [
        "Air freight to Nigeria",
        "Real-time tracking updates",
        "Customs clearance support",
        "Door-to-door delivery"
      ]
    }
  ]

  const popularCategories = [
    {
      name: "Electronics",
      icon: Box,
      items: ["Phones", "Laptops", "Tablets", "Accessories"],
      description: "Latest gadgets and tech accessories"
    },
    {
      name: "Fashion & Beauty",
      icon: Palette,
      items: ["Clothing", "Shoes", "Cosmetics", "Jewelry"],
      description: "Trendy fashion items and beauty products"
    },
    {
      name: "Home & Garden",
      icon: Home,
      items: ["Furniture", "Decor", "Kitchen", "Garden"],
      description: "Home improvement and decoration items"
    },
    {
      name: "Sports & Fitness",
      icon: Car,
      items: ["Equipment", "Clothing", "Supplements", "Accessories"],
      description: "Sports gear and fitness equipment"
    }
  ]

  const pricingTiers = [
    {
      range: "£0 - £100",
      fee: "10%",
      minimum: "£5",
      description: "Perfect for small items and accessories",
      examples: ["Phone cases", "Cosmetics", "Small accessories"]
    },
    {
      range: "£101 - £500",
      fee: "8%",
      minimum: "£10",
      description: "Great for electronics and fashion items",
      examples: ["Phones", "Laptops", "Designer items"]
    },
    {
      range: "£501 - £1000",
      fee: "6%",
      minimum: "£30",
      description: "Ideal for high-value purchases",
      examples: ["High-end electronics", "Luxury items"]
    },
    {
      range: "£1000+",
      fee: "5%",
      minimum: "£50",
      description: "Best rates for luxury items",
      examples: ["Luxury goods", "Bulk orders"]
    }
  ]

  const benefits = [
    {
      icon: Shield,
      title: "Secure Shopping",
      description: "Your payment is protected and items are insured"
    },
    {
      icon: Eye,
      title: "Quality Assurance",
      description: "We inspect every item before shipping"
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Get your items in 10-14 days"
    },
    {
      icon: DollarSign,
      title: "Best Prices",
      description: "We find the best deals across multiple retailers"
    }
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-blue-50 to-white'}`}>
      {/* Header */}
      <header className={`border-b backdrop-blur-sm sticky top-0 z-50 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900/80 border-gray-700' : 'bg-white/80 border-gray-200'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-2">
              <img
                src="/images/Headerlogo.jpg"
                alt="FreightBunny Logo"
                className="h-10 w-10 object-contain"
              />
              <span className={`text-xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-blue-900'}`}>Freight Bunny</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-bold transition-colors pb-1 flex items-center ${
                    (pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href)))
                      ? "text-blue-900 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                  style={{ fontSize: '1rem', paddingBottom: '2px' }}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-yellow-600" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-600" />
                )}
              </button>
            </nav>
          </div>

          {/* Mobile Navigation Dropdown */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <nav className="py-4 flex flex-col items-center space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-bold transition-colors pb-1 flex items-center ${
                    (pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href)))
                      ? "text-blue-900 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ fontSize: '1rem', paddingBottom: '2px' }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`relative py-20 px-4 transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-[#f6faff] via-[#eaf3fb] to-[#f6faff]'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Shopping Service
            </Badge>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              We Shop,<br />
              <span className="text-blue-600">You Receive</span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Let us handle your UK shopping and ship everything to Nigeria. From electronics to fashion, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <Card 
                key={step.step}
                className={`relative transition-all duration-300 hover:scale-105 cursor-pointer ${isDarkMode ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-white border-gray-200 hover:bg-gray-50'}`}
                onClick={() => setSelectedStep(selectedStep === step.step ? null : step.step)}
              >
                <CardHeader className="text-center">
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge className="absolute -top-2 -right-2 bg-blue-600 text-white">
                      {step.step}
                    </Badge>
                  </div>
                  <CardTitle className={`text-xl transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{step.title}</CardTitle>
                  <CardDescription className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {selectedStep === step.step && (
                    <div className="space-y-2">
                      <h4 className={`font-semibold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>What we do:</h4>
                      <ul className="space-y-1">
                        {step.details.map((detail, index) => (
                          <li key={index} className={`flex items-center text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className={`py-16 px-4 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Popular Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCategories.map((category, index) => (
              <Card key={index} className={`text-center transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                <CardHeader>
                  <category.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <CardTitle className={`transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{category.name}</CardTitle>
                  <CardDescription className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        • {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Service Fees</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`text-center transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                <CardHeader>
                  <CardTitle className={`text-lg transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{tier.range}</CardTitle>
                  <div className="flex items-baseline justify-center">
                    <span className={`text-3xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{tier.fee}</span>
                    <span className={`text-lg ml-1 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>service fee</span>
                  </div>
                  <CardDescription className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Minimum: {tier.minimum}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className={`text-sm mb-4 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {tier.description}
                  </p>
                  <div className="space-y-1">
                    {tier.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className={`text-xs transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        • {example}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className={`py-16 px-4 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Why Choose Our Buy For Me Service?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className={`text-center transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                <CardHeader>
                  <benefit.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <CardTitle className={`transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Example Request */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Example Request</h2>
          <Card className={`transition-all duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
            <CardHeader>
              <CardTitle className={`transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Sample Shopping Request</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-600' : 'bg-gray-50'}`}>
                <h4 className={`font-semibold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Customer Request:</h4>
                <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  "I want to buy an iPhone 15 Pro, 256GB, Natural Titanium color. My budget is around £1,000. 
                  Please check Apple Store UK and other retailers for the best price."
                </p>
              </div>
              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-600' : 'bg-gray-50'}`}>
                <h4 className={`font-semibold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Response:</h4>
                <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  "We found the iPhone 15 Pro 256GB Natural Titanium for £999 at Apple Store UK. 
                  Service fee: £60 (6% of £1,000). Total cost: £1,059 + shipping. 
                  We'll purchase, inspect, and ship it to Nigeria within 10-14 days."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className={`py-16 px-4 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "How do I place a Buy For Me request?",
                answer: "Simply contact us via WhatsApp, email, or phone with the details of what you want to buy. Include product name, specifications, budget, and preferred retailer if any."
              },
              {
                question: "What retailers do you shop from?",
                answer: "We shop from major UK retailers including Amazon UK, Apple Store, John Lewis, Argos, Currys, and many more. We can also shop from specific retailers you prefer."
              },
              {
                question: "How long does the entire process take?",
                answer: "The complete process takes 10-14 days: 1-2 days for sourcing and purchase, 1-2 days for quality check, and 7-10 days for shipping to Nigeria."
              },
              {
                question: "What if the item is out of stock or unavailable?",
                answer: "We'll inform you immediately and suggest alternatives or wait for restocking. We never charge for items we can't source."
              },
              {
                question: "Can I return items if I'm not satisfied?",
                answer: "Returns are subject to the retailer's policy. We'll help you with the return process, but return shipping costs are your responsibility."
              }
            ].map((faq, index) => (
              <Card key={index} className={`transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                <CardHeader>
                  <CardTitle className={`transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 px-4 transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-br from-[#002147] to-[#003366]' : 'bg-gradient-to-br from-[#002147] to-[#003366]'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Shopping?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Tell us what you want, and we'll handle the rest. Get your UK items delivered to Nigeria hassle-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white hover:bg-blue-50 text-[#002147] font-bold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Start Shopping
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#002147] font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105">
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-4 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-900 text-white'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 FreightBunny. All rights reserved. Connecting UK & Nigeria with reliable shipping.
          </p>
        </div>
      </footer>
    </div>
  )
} 