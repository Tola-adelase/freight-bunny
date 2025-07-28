"use client"

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  MessageCircle, 
  Plane, 
  Package, 
  Clock, 
  Shield, 
  Star, 
  CheckCircle, 
  Truck, 
  Globe, 
  Phone, 
  Mail, 
  Calculator, 
  Menu, 
  X,
  ArrowRight,
  TrendingUp,
  Users,
  ShieldCheck,
  Zap,
  DollarSign,
  MapPin,
  AlertCircle,
  FileText,
  Headphones
} from "lucide-react";
import { Button } from "../../components/ui/button";

export default function ServicesPage() {
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

  const services = [
    {
      icon: Plane,
      title: "Air Freight Express",
      description: "Our fastest service for urgent shipments",
      features: ["5-7 days delivery", "Real-time tracking", "Priority handling", "Full insurance"],
      price: "From £15/kg",
      color: "blue"
    },
    {
      icon: Package,
      title: "Standard Air Freight",
      description: "Perfect balance of speed and cost",
      features: ["7-10 days delivery", "Secure packaging", "Online tracking", "Door-to-door service"],
      price: "From £9/kg",
      color: "green"
    },
    {
      icon: Truck,
      title: "Sea Freight",
      description: "Cost-effective for larger shipments",
      features: ["4-6 weeks delivery", "Best value for money", "Large cargo capacity", "Professional handling"],
      price: "From £3/kg",
      color: "purple"
    },
    {
      icon: Globe,
      title: "Buy For Me Service",
      description: "We shop and ship for you",
      features: ["Personal shopping", "Item sourcing", "Quality checks", "Consolidated shipping"],
      price: "5% service fee",
      color: "orange"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete coverage for your peace of mind"
    },
    {
      icon: Clock,
      title: "Real-Time Tracking",
      description: "Monitor your shipment every step of the way"
    },
    {
      icon: Users,
      title: "Personal Support",
      description: "Dedicated customer service team"
    },
    {
      icon: CheckCircle,
      title: "Reliable Delivery",
      description: "99.9% success rate with on-time delivery"
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden fees, clear upfront costs"
    },
    {
      icon: MapPin,
      title: "Door-to-Door",
      description: "Convenient pickup and delivery service"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Get Quote",
      description: "Tell us about your shipment and get instant pricing"
    },
    {
      step: "2",
      title: "Book & Pay",
      description: "Secure your booking with our easy payment system"
    },
    {
      step: "3",
      title: "Pack & Collect",
      description: "We collect your items or you drop them off"
    },
    {
      step: "4",
      title: "Ship & Track",
      description: "Your package is on its way with full tracking"
    },
    {
      step: "5",
      title: "Delivered",
      description: "Safe delivery to your recipient in Nigeria"
    }
  ];

  const restrictions = [
    "Prohibited items: Weapons, drugs, hazardous materials",
    "Maximum single package weight: 30kg",
    "Restricted items require special handling",
    "All packages subject to customs inspection"
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
                <Plane className="w-5 h-5 mr-2 text-[#002147]" />
                Professional Shipping Services
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#111827] mb-6 leading-tight">
              Our <span className="text-[#002147]">Shipping Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              From express air freight to personal shopping, we offer comprehensive shipping solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#002147] hover:bg-[#001634] text-white shadow-lg px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center cursor-pointer">
                <Calculator className="mr-2 h-6 w-6" />
                Get Free Quote
              </button>
              <button className="bg-white hover:bg-gray-100 border-2 border-[#002147] text-[#002147] shadow-lg px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center cursor-pointer">
                <Phone className="mr-2 h-6 w-6" />
                Contact Us
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#111827] mb-4">Choose Your Service</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We offer flexible shipping options to meet your timeline and budget requirements
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border hover:shadow-xl transition-shadow p-6 group">
                  <div className={`p-4 rounded-full mb-4 inline-block bg-gradient-to-r ${
                    service.color === 'blue' ? 'from-blue-100 to-blue-200' :
                    service.color === 'green' ? 'from-green-100 to-green-200' :
                    service.color === 'purple' ? 'from-purple-100 to-purple-200' :
                    'from-orange-100 to-orange-200'
                  }`}>
                    <service.icon className={`w-8 h-8 ${
                      service.color === 'blue' ? 'text-blue-600' :
                      service.color === 'green' ? 'text-green-600' :
                      service.color === 'purple' ? 'text-purple-600' :
                      'text-orange-600'
                    }`} />
                  </div>
                  <h3 className="text-xl font-bold text-[#111827] mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#002147]">{service.price}</span>
                    <button className="text-[#002147] hover:text-[#001634] font-semibold flex items-center cursor-pointer">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#111827] mb-4">Why Choose Our Services?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We're committed to providing the best shipping experience possible
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-r from-[#f6faff] to-[#eaf3fb] p-4 rounded-full mb-4 inline-block">
                    <feature.icon className="w-8 h-8 text-[#002147]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111827] mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#111827] mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Simple steps to get your packages shipped to Nigeria
              </p>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-[#002147] via-[#002147] to-[#002147] opacity-20"></div>
              <div className="grid md:grid-cols-5 gap-8 relative">
                {process.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-[#002147] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-[#111827] mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Restrictions Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <AlertCircle className="w-8 h-8 text-orange-500 mr-3" />
                  <h2 className="text-3xl font-bold text-[#111827]">Shipping Guidelines</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#111827] mb-4">Important Restrictions</h3>
                    <ul className="space-y-3">
                      {restrictions.map((restriction, index) => (
                        <li key={index} className="flex items-start">
                          <AlertCircle className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{restriction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#111827] mb-4">Need Help?</h3>
                    <p className="text-gray-700 mb-4">
                      Not sure if your item can be shipped? Our team is here to help you navigate customs regulations and shipping requirements.
                    </p>
                    <button className="bg-[#002147] hover:bg-[#001634] text-white px-6 py-3 rounded-lg font-semibold flex items-center cursor-pointer">
                      <Headphones className="w-5 h-5 mr-2" />
                      Get Support
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-[#002147] text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Ship?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get started with your shipment today and experience the Freight Bunny difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#002147] hover:bg-gray-100 shadow-lg px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center cursor-pointer">
                <Package className="mr-2 h-6 w-6" />
                Start Shipping
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#002147] px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center cursor-pointer">
                <Calculator className="mr-2 h-6 w-6" />
                Get Quote
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