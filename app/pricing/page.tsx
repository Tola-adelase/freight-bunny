"use client"

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  MessageCircle, 
  Package, 
  Clock, 
  Shield, 
  Star, 
  CheckCircle, 
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
  Plane,
  Truck,
  ShoppingCart,
  Zap,
  Award,
  CreditCard,
  FileText,
  Info,
  HeartHandshake,
  Target,
  TrendingUp
} from "lucide-react";
import { Button } from "../../components/ui/button";

export default function PricingPage() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('air-freight');
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/buy-for-me", label: "Buy For Me" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact Us" },
  ];

  const pricingTiers = [
    {
      id: 'express',
      name: 'Express Air Freight',
      icon: Plane,
      price: '£15',
      unit: 'per kg',
      delivery: '5-7 days',
      description: 'Fastest delivery for urgent shipments',
      popular: false,
      features: [
        'Priority handling',
        '5-7 days delivery',
        'Real-time tracking',
        'Full insurance included',
        'SMS & Email updates',
        'Same-day collection available'
      ],
      color: 'blue'
    },
    {
      id: 'standard',
      name: 'Standard Air Freight',
      icon: Package,
      price: '£9',
      unit: 'per kg',
      delivery: '7-10 days',
      description: 'Perfect balance of speed and cost',
      popular: true,
      features: [
        'Reliable delivery',
        '7-10 days delivery',
        'Online tracking',
        'Full insurance included',
        'Email updates',
        'Door-to-door service'
      ],
      color: 'green'
    },
    {
      id: 'sea',
      name: 'Sea Freight',
      icon: Truck,
      price: '£3',
      unit: 'per kg',
      delivery: '4-6 weeks',
      description: 'Most economical for large shipments',
      popular: false,
      features: [
        'Best value for money',
        '4-6 weeks delivery',
        'Large cargo capacity',
        'Full insurance included',
        'Professional handling',
        'Bulk shipping discount'
      ],
      color: 'purple'
    }
  ];

  const buyForMePricing = [
    {
      range: '£0 - £100',
      fee: '5%',
      minimum: '£5',
      description: 'Perfect for small items and accessories',
      examples: ['Clothing', 'Accessories', 'Small electronics']
    },
    {
      range: '£101 - £500',
      fee: '4%',
      minimum: '£15',
      description: 'Great for electronics and fashion items',
      examples: ['Phones', 'Laptops', 'Designer items']
    },
    {
      range: '£501 - £1000',
      fee: '3%',
      minimum: '£25',
      description: 'Ideal for high-value purchases',
      examples: ['High-end electronics', 'Luxury items']
    },
    {
      range: '£1000+',
      fee: '2%',
      minimum: '£50',
      description: 'Best rates for luxury items',
      examples: ['Luxury goods', 'Bulk orders']
    }
  ];

  const additionalServices = [
    {
      service: 'Insurance (Additional)',
      price: '1% of item value',
      description: 'Extra coverage beyond standard insurance',
      icon: Shield
    },
    {
      service: 'Same-Day Collection',
      price: '£25',
      description: 'Emergency collection service (London only)',
      icon: Clock
    },
    {
      service: 'Fragile Item Handling',
      price: '£5 per item',
      description: 'Special care for delicate items',
      icon: HeartHandshake
    },
    {
      service: 'Customs Clearance',
      price: '£15',
      description: 'Expert customs handling (if required)',
      icon: FileText
    },
    {
      service: 'Repackaging',
      price: '£10',
      description: 'Professional repackaging service',
      icon: Package
    },
    {
      service: 'Storage (per week)',
      price: '£5',
      description: 'Secure storage at our warehouse',
      icon: MapPin
    }
  ];

  const comparisonFeatures = [
    { feature: 'Delivery Time', express: '5-7 days', standard: '7-10 days', sea: '4-6 weeks' },
    { feature: 'Price per kg', express: '£15', standard: '£9', sea: '£3' },
    { feature: 'Insurance', express: 'Included', standard: 'Included', sea: 'Included' },
    { feature: 'Real-time Tracking', express: 'Yes', standard: 'Yes', sea: 'Yes' },
    { feature: 'Same-day Collection', express: 'Available', standard: 'Available', sea: 'Available' },
    { feature: 'Weight Limit', express: '30kg', standard: '30kg', sea: '50kg' },
    { feature: 'Best For', express: 'Urgent items', standard: 'Regular shipping', sea: 'Bulk/Large items' }
  ];

  const faqs = [
    {
      question: "Are there any hidden fees?",
      answer: "No, we believe in transparent pricing. All fees are clearly stated upfront with no hidden charges."
    },
    {
      question: "What's included in the shipping price?",
      answer: "All shipping prices include basic insurance, tracking, and door-to-door delivery. Additional services are optional extras."
    },
    {
      question: "How do I calculate shipping costs?",
      answer: "Shipping costs are calculated based on weight. Simply multiply your package weight by the per-kg rate for your chosen service."
    },
    {
      question: "Do you offer discounts for bulk shipments?",
      answer: "Yes, we offer volume discounts for regular customers and bulk shipments. Contact us for a custom quote."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and PayPal for your convenience."
    },
    {
      question: "Can I change my shipping method after booking?",
      answer: "Yes, you can upgrade your shipping method before the package is dispatched. Additional fees may apply."
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
                <DollarSign className="w-5 h-5 mr-2 text-[#002147]" />
                Transparent Pricing
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#111827] mb-6 leading-tight">
              Simple, <span className="text-[#002147]">Honest Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              No hidden fees, no surprises. Choose the perfect shipping option for your needs with our transparent pricing structure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#002147] hover:bg-[#001634] text-white shadow-lg px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center cursor-pointer">
                <Calculator className="mr-2 h-6 w-6" />
                Calculate Cost
              </button>
              <button className="bg-white hover:bg-gray-100 border-2 border-[#002147] text-[#002147] shadow-lg px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center cursor-pointer">
                <Phone className="mr-2 h-6 w-6" />
                Get Quote
              </button>
            </div>
          </div>
        </section>

        {/* Pricing Tiers Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#111827] mb-4">Shipping Rates</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the perfect shipping option for your timeline and budget
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 hover:shadow-xl transition-all ${
                  tier.popular ? 'border-[#002147] scale-105' : 'border-gray-200'
                }`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-[#002147] text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <div className={`p-4 rounded-full mb-4 inline-block bg-gradient-to-r ${
                      tier.color === 'blue' ? 'from-blue-100 to-blue-200' :
                      tier.color === 'green' ? 'from-green-100 to-green-200' :
                      'from-purple-100 to-purple-200'
                    }`}>
                      <tier.icon className={`w-8 h-8 ${
                        tier.color === 'blue' ? 'text-blue-600' :
                        tier.color === 'green' ? 'text-green-600' :
                        'text-purple-600'
                      }`} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#111827] mb-2">{tier.name}</h3>
                    <p className="text-gray-600 mb-4">{tier.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-[#002147]">{tier.price}</span>
                      <span className="text-lg text-gray-600 ml-2">{tier.unit}</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 mb-6">
                      <span className="text-sm text-gray-600">Delivery: </span>
                      <span className="font-semibold text-[#002147]">{tier.delivery}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:scale-105 cursor-pointer ${
                    tier.popular 
                      ? 'bg-[#002147] text-white hover:bg-[#001634]' 
                      : 'bg-gray-100 text-[#002147] hover:bg-gray-200'
                  }`}>
                    Choose {tier.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Buy For Me Pricing Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#111827] mb-4">Buy For Me Service Fees</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Transparent pricing based on item value - the more you buy, the less you pay
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {buyForMePricing.map((tier, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-[#111827] mb-2">{tier.range}</h3>
                    <div className="text-3xl font-bold text-[#002147] mb-1">{tier.fee}</div>
                    <div className="text-sm text-gray-600">Service Fee</div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="text-sm text-gray-600 mb-2">Minimum: <span className="font-semibold">{tier.minimum}</span></div>
                    <p className="text-sm text-gray-600 mb-3">{tier.description}</p>
                    <div className="space-y-1">
                      {tier.examples.map((example, idx) => (
                        <div key={idx} className="text-xs text-gray-500 flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#111827] mb-4">Additional Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Optional extras to enhance your shipping experience
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#002147] p-3 rounded-full mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#111827]">{service.service}</h3>
                      <span className="text-xl font-bold text-[#002147]">{service.price}</span>
                    </div>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#111827] mb-4">Compare Our Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Detailed comparison to help you choose the right service
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#002147] text-white">
                    <tr>
                      <th className="text-left p-4 font-semibold">Features</th>
                      <th className="text-center p-4 font-semibold">Express</th>
                      <th className="text-center p-4 font-semibold">Standard</th>
                      <th className="text-center p-4 font-semibold">Sea Freight</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((row, index) => (
                      <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                        <td className="p-4 font-semibold text-[#111827]">{row.feature}</td>
                        <td className="text-center p-4 text-gray-700">{row.express}</td>
                        <td className="text-center p-4 text-gray-700">{row.standard}</td>
                        <td className="text-center p-4 text-gray-700">{row.sea}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Calculator Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-[#f6faff] to-[#eaf3fb] rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-[#111827] mb-4">Quick Price Calculator</h2>
                  <p className="text-lg text-gray-600">
                    Get an instant estimate for your shipment
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#111827] mb-2">Package Weight (kg)</label>
                    <input
                      type="number"
                      placeholder="Enter weight"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002147] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#111827] mb-2">Service Type</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002147] focus:border-transparent">
                      <option>Express (£15/kg)</option>
                      <option>Standard (£9/kg)</option>
                      <option>Sea Freight (£3/kg)</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <button className="bg-[#002147] hover:bg-[#001634] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 cursor-pointer">
                    <Calculator className="w-5 h-5 mr-2 inline" />
                    Calculate Cost
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#111827] mb-4">Pricing FAQ</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Common questions about our pricing and services
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
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
            <h2 className="text-4xl font-bold mb-4">Ready to Ship?</h2>
            <p className="text-xl mb-8 opacity-90">
              Start your shipment today and experience our transparent, competitive pricing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#002147] hover:bg-gray-100 shadow-lg px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center cursor-pointer">
                <Package className="mr-2 h-6 w-6" />
                Book Now
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#002147] px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center cursor-pointer">
                <Phone className="mr-2 h-6 w-6" />
                Get Custom Quote
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