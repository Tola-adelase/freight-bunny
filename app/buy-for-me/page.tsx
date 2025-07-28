"use client"

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  MessageCircle, 
  ShoppingCart, 
  Package, 
  Clock, 
  Shield, 
  Star, 
  CheckCircle, 
  Search, 
  CreditCard, 
  Phone, 
  Mail, 
  Calculator, 
  Menu, 
  X,
  ArrowRight,
  Users,
  Globe,
  DollarSign,
  MapPin,
  AlertCircle,
  Headphones,
  Eye,
  Truck,
  Gift,
  Home,
  Heart,
  ShoppingBag,
  Zap,
  Award
} from "lucide-react";
import { Button } from "../../components/ui/button";

export default function BuyForMePage() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/buy-for-me", label: "Buy For Me" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact Us" },
  ];

  const process = [
    {
      step: "1",
      title: "Tell Us What You Want",
      description: "Share the item details, store links, or product descriptions",
      icon: Search
    },
    {
      step: "2",
      title: "We Find & Quote",
      description: "Our team sources the item and provides you with a detailed quote",
      icon: Eye
    },
    {
      step: "3",
      title: "You Approve & Pay",
      description: "Review the quote and make payment through our secure system",
      icon: CreditCard
    },
    {
      step: "4",
      title: "We Purchase & Check",
      description: "We buy the item and conduct quality checks before shipping",
      icon: ShoppingCart
    },
    {
      step: "5",
      title: "We Ship to You",
      description: "Your item is carefully packaged and shipped to Nigeria",
      icon: Package
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Access Any UK Store",
      description: "Shop from stores that don't ship to Nigeria or have restricted access"
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Know exactly what you'll pay upfront with no hidden fees"
    },
    {
      icon: Eye,
      title: "Quality Assurance",
      description: "We inspect every item before shipping to ensure quality"
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Your payments are protected with our secure payment system"
    },
    {
      icon: Users,
      title: "Personal Service",
      description: "Dedicated support throughout your shopping journey"
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Quick turnaround from purchase to shipping"
    }
  ];

  const categories = [
    {
      icon: ShoppingBag,
      title: "Fashion & Accessories",
      description: "Clothing, shoes, jewelry, and designer items",
      popular: ["Designer handbags", "UK fashion brands", "Luxury watches"]
    },
    {
      icon: Zap,
      title: "Electronics",
      description: "Phones, laptops, gadgets, and accessories",
      popular: ["Latest smartphones", "Gaming consoles", "Smart home devices"]
    },
    {
      icon: Gift,
      title: "Baby & Kids",
      description: "Toys, clothing, strollers, and essentials",
      popular: ["Educational toys", "Designer baby wear", "Safety products"]
    },
    {
      icon: Home,
      title: "Home & Garden",
      description: "Furniture, decor, kitchen items, and tools",
      popular: ["Kitchen appliances", "Home decor", "Garden tools"]
    },
    {
      icon: Heart,
      title: "Health & Beauty",
      description: "Skincare, makeup, supplements, and wellness",
      popular: ["Luxury skincare", "Organic products", "Beauty tools"]
    },
    {
      icon: Award,
      title: "Sports & Outdoors",
      description: "Equipment, clothing, and accessories for sports",
      popular: ["Fitness equipment", "Outdoor gear", "Sports wear"]
    }
  ];

  const pricing = [
    {
      range: "£0 - £100",
      fee: "5%",
      minimum: "£5",
      description: "Perfect for small items and accessories"
    },
    {
      range: "£101 - £500",
      fee: "4%",
      minimum: "£15",
      description: "Great for electronics and fashion items"
    },
    {
      range: "£501 - £1000",
      fee: "3%",
      minimum: "£25",
      description: "Ideal for high-value purchases"
    },
    {
      range: "£1000+",
      fee: "2%",
      minimum: "£50",
      description: "Best rates for luxury items"
    }
  ];

  const faqs = [
    {
      question: "How long does the Buy For Me service take?",
      answer: "Typically 2-3 business days for sourcing and purchasing, plus our standard shipping time of 7-10 days."
    },
    {
      question: "What if the item is out of stock?",
      answer: "We'll notify you immediately and help find alternatives or refund your payment if no suitable replacement is available."
    },
    {
      question: "Do you provide purchase receipts?",
      answer: "Yes, we provide digital copies of all purchase receipts for your records and warranty purposes."
    },
    {
      question: "Are there any items you can't buy?",
      answer: "We follow all UK and Nigerian import regulations. Prohibited items include weapons, certain medications, and hazardous materials."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-2">
              <img
                src="/images/Headerlogo.jpg"
                alt="FreightBunny Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold text-blue-900">Freight Bunny</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none cursor-pointer"
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
                  className={`font-bold transition-colors pb-1 flex items-center cursor-pointer ${
                    (pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href)))
                      ? "text-blue-900 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                  style={{ fontSize: '1rem', paddingBottom: '2px' }}
                >
                  {link.label}
                </a>
              ))}
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
                  className={`font-bold transition-colors pb-1 flex items-center cursor-pointer ${
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

      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-[#f6faff] via-[#eaf3fb] to-[#f6faff] overflow-hidden">
          <div className="absolute -top-24 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-blue-100 via-blue-50 to-transparent rounded-full blur-3xl opacity-60 z-0"></div>
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tr from-blue-100 via-blue-50 to-transparent rounded-full blur-2xl opacity-50 z-0"></div>
          
          <div className="container mx-auto text-center relative z-10">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#e0eaff] to-[#c7e0ff] text-[#002147] text-base font-semibold shadow-md">
                <ShoppingCart className="w-5 h-5 mr-2 text-[#002147]" />
                Personal Shopping Service
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#111827] mb-6 leading-tight">
              We <span className="text-[#002147]">Buy For You</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Can't access UK stores? We'll shop for you! From fashion to electronics, we buy what you want and ship it straight to Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#002147] hover:bg-[#001634] text-white shadow-lg px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center cursor-pointer">
                <ShoppingCart className="mr-2 h-6 w-6" />
                Start Shopping
              </button>
              <button className="bg-white hover:bg-gray-100 border-2 border-[#002147] text-[#002147] shadow-lg px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center cursor-pointer">
                <Calculator className="mr-2 h-6 w-6" />
                Get Quote
              </button>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#111827] mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Simple steps to get any item from UK stores delivered to your door in Nigeria
              </p>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-[#002147] via-[#002147] to-[#002147] opacity-20"></div>
              <div className="grid md:grid-cols-5 gap-8 relative">
                {process.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-[#002147] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                      {step.step}
                    </div>
                    <div className="bg-gradient-to-r from-[#f6faff] to-[#eaf3fb] p-4 rounded-full mb-4 inline-block">
                      <step.icon className="w-8 h-8 text-[#002147]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#111827] mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#111827] mb-4">Why Use Our Buy For Me Service?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experience the convenience of having your own personal shopper in the UK
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-r from-[#f6faff] to-[#eaf3fb] p-4 rounded-full mb-4 inline-block">
                    <benefit.icon className="w-8 h-8 text-[#002147]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111827] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#111827] mb-4">What Can We Buy For You?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From fashion to electronics, we can source almost anything from UK stores
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border hover:shadow-xl transition-shadow p-6">
                  <div className="bg-gradient-to-r from-[#f6faff] to-[#eaf3fb] p-4 rounded-full mb-4 inline-block">
                    <category.icon className="w-8 h-8 text-[#002147]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111827] mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="border-t pt-4">
                    <h4 className="text-sm font-semibold text-[#002147] mb-2">Popular Items:</h4>
                    <ul className="space-y-1">
                      {category.popular.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#111827] mb-4">Transparent Pricing</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our service fee is based on the item value - the more you buy, the less you pay per item
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricing.map((tier, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border hover:shadow-xl transition-shadow">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-[#111827] mb-2">{tier.range}</h3>
                    <div className="text-3xl font-bold text-[#002147] mb-1">{tier.fee}</div>
                    <div className="text-sm text-gray-600">Service Fee</div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="text-sm text-gray-600 mb-2">Minimum fee: <span className="font-semibold">{tier.minimum}</span></div>
                    <p className="text-sm text-gray-600">{tier.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <div className="bg-blue-50 rounded-2xl p-6 max-w-3xl mx-auto">
                <h3 className="text-lg font-bold text-[#111827] mb-2">What's Included:</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Item sourcing and purchasing
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Quality inspection
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Secure packaging
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Purchase receipt
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#111827] mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get answers to common questions about our Buy For Me service
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-[#111827] mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-[#002147] text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Shopping?</h2>
            <p className="text-xl mb-8 opacity-90">
              Tell us what you want and we'll handle the rest. Your personal UK shopping assistant is just a message away!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#002147] hover:bg-gray-100 shadow-lg px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center cursor-pointer">
                <ShoppingCart className="mr-2 h-6 w-6" />
                Start Shopping
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#002147] px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center cursor-pointer">
                <Phone className="mr-2 h-6 w-6" />
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/images/Headerlogo.jpg"
                  alt="FreightBunny - Fast Shipping"
                  className="h-8 w-8 object-contain"
                />
                <span className="text-xl font-bold">FreightBunny</span>
              </div>
              <p className="text-gray-400 text-sm">
                Connecting UK and Nigeria through reliable, fast, and secure shipping services.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors cursor-pointer">
                    Express Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors cursor-pointer">
                    Standard Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors cursor-pointer">
                    Cargo Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors cursor-pointer">
                    Package Tracking
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors cursor-pointer">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors cursor-pointer">
                    Shipping Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors cursor-pointer">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors cursor-pointer">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="https://www.facebook.com/share/16Wjxof9Gd/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer">
                    <Facebook className="h-4 w-4 text-blue-600" />
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/freightbunny" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer">
                    <Twitter className="h-4 w-4 text-blue-400" />
                    <span>Twitter/X</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/shipwithbunny?igsh=MXNpaGpwZnllbDg0ag==" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer">
                    <Instagram className="h-4 w-4 text-pink-600" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/447392171558" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer">
                    <MessageCircle className="h-4 w-4 text-green-600" />
                    <span>WhatsApp</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-8 border-gray-800" />
          <div className="text-center text-sm text-gray-400">
            <p>&copy; 2024 FreightBunny. All rights reserved. | Connecting UK & Nigeria with reliable shipping.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 