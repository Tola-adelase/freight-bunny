"use client"

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Facebook, Twitter, Instagram, MessageCircle, Package, Users, Globe, Award, Clock, Shield, Heart, Target, Zap, Star, CheckCircle, TrendingUp, MapPin, Phone, Mail, Menu, X, Plane, Calculator, Truck, ArrowRight, ShieldCheck, Info, User, CreditCard, ArrowLeft } from "lucide-react";
import { Button } from "../../components/ui/button";

export default function AboutPage() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShipModalOpen, setIsShipModalOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/buy-for-me", label: "Buy For Me" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact Us" },
  ];

  const [quoteForm, setQuoteForm] = useState({
    weight: "",
    dimensions: "",
    from: "UK",
    to: "Nigeria",
    packageType: "",
    senderName: "",
    senderPhone: "",
    senderEmail: "",
    recipientName: "",
    recipientPhone: "",
    recipientAddress: "",
  });

  const handleQuoteFormChange = (field: string, value: string) => {
    setQuoteForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote form submitted:", quoteForm);
    alert("Thank you! We'll get back to you with a quote within 24 hours.");
    setIsShipModalOpen(false);
    setQuoteForm({
      weight: "",
      dimensions: "",
      from: "UK",
      to: "Nigeria",
      packageType: "",
      senderName: "",
      senderPhone: "",
      senderEmail: "",
      recipientName: "",
      recipientPhone: "",
      recipientAddress: "",
    });
  };

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
        {/* Hero Section - Redesigned to match the image */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 overflow-hidden">
          <div className="absolute -top-24 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-blue-100 via-blue-50 to-transparent rounded-full blur-3xl opacity-60 z-0"></div>
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tr from-blue-100 via-blue-50 to-transparent rounded-full blur-2xl opacity-50 z-0"></div>
          
          <div className="container mx-auto text-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
              <Plane className="w-4 h-4 mr-2" />
              Fast, Reliable Air Freight
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 animate-pulse">
              UK <span className="text-blue-600">↔</span> Nigeria Shipping
            </h1>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-6 border-b-2 border-blue-600 inline-block animate-pulse">
              Made Easy
            </div>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-2xl mx-auto animate-fade-in-up">
              Fast, reliable, and affordable shipping between the UK and Nigeria
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Transparent pricing, real-time updates, and a personal touch
            </p>

            {/* Pricing Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-blue-200 p-8 max-w-md mx-auto mb-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
              <div className="flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-blue-900 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 font-medium">Prices starting from</span>
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors duration-300">£9/kg</div>
              <div className="text-gray-600 text-sm">Delivery: 7-10 days after shipment</div>
            </div>

            {/* CTA Buttons - Reduced length and changed title */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-white text-gray-800 hover:bg-gray-50 shadow-lg px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center min-h-[44px] border border-gray-300 cursor-pointer w-auto">
                <Calculator className="mr-2 h-4 w-4" />
                Get Quote
              </button>
              <button className="bg-blue-900 text-white hover:bg-blue-800 shadow-lg px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center min-h-[44px] cursor-pointer w-auto" onClick={() => setIsShipModalOpen(true)}>
                <Package className="mr-2 h-4 w-4" />
                Ship Now
              </button>
            </div>

            {/* Feature Badges */}
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center bg-green-50 border border-green-200 text-green-800 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-green-100 transition-colors duration-300 hover:scale-105 cursor-pointer animate-in fade-in duration-500" style={{ animationDelay: '0.1s' }}>
                <CheckCircle className="w-3 h-3 mr-1.5" />
                Fully Insured
              </div>
              <div className="flex items-center bg-blue-50 border border-blue-200 text-blue-800 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors duration-300 hover:scale-105 cursor-pointer animate-in fade-in duration-500" style={{ animationDelay: '0.2s' }}>
                <Clock className="w-3 h-3 mr-1.5" />
                Real-time Tracking
              </div>
              <div className="flex items-center bg-yellow-50 border border-yellow-200 text-yellow-800 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-yellow-100 transition-colors duration-300 hover:scale-105 cursor-pointer animate-in fade-in duration-500" style={{ animationDelay: '0.3s' }}>
                <Star className="w-3 h-3 mr-1.5 text-yellow-500" />
                5-Star Service
              </div>
              <div className="flex items-center bg-green-50 border border-green-200 text-green-800 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-green-100 transition-colors duration-300 hover:scale-105 cursor-pointer animate-in fade-in duration-500" style={{ animationDelay: '0.4s' }}>
                <CheckCircle className="w-3 h-3 mr-1.5" />
                No Hidden Fees
              </div>
            </div>
          </div>
        </section>

        {/* Our Shipping Services Section */}
        <section className="py-16 px-4 bg-[#f6faff]">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] mb-4 animate-fade-in-up">Our Shipping Services</h2>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in fade-in duration-500" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-bold text-[#002147] mb-2">Air Freight UK → Nigeria</h3>
              <p className="text-gray-700 mb-2 text-center">Weekly shipments, safe handling, and fast delivery. We handle your cargo with care and keep you updated every step of the way.</p>
              <p className="text-sm text-gray-500 mb-4 text-center">Delivery: 7–10 days after shipment (may vary). Customer can arrange their own delivery if preferred.</p>
              <a href="#contact" className="mt-auto inline-block bg-[#002147] hover:bg-[#001634] text-white font-semibold px-6 py-3 text-base rounded-lg shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-105 mx-auto">Get a Quote</a>
            </div>
            {/* Service 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in fade-in duration-500" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold text-[#002147] mb-2">Air Freight Nigeria → UK</h3>
              <p className="text-gray-700 mb-2 text-center">Secure, efficient, and hassle-free shipping from Nigeria to the UK. Customs support included.</p>
              <p className="text-sm text-gray-500 mb-4 text-center">Delivery: Will be determined when item arrives. Customer can arrange their own delivery if preferred.</p>
              <a href="#contact" className="mt-auto inline-block bg-[#002147] hover:bg-[#001634] text-white font-semibold px-6 py-3 text-base rounded-lg shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-105 mx-auto">Get a Quote</a>
            </div>
            {/* Service 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in fade-in duration-500" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-bold text-[#002147] mb-2">Customs Clearance Support</h3>
              <p className="text-gray-700 mb-2 text-center">We help you with all paperwork and customs clearance, ensuring your shipments move smoothly and without delays.</p>
              <div className="flex-1"></div>
              <a href="#contact" className="mt-auto inline-block bg-[#002147] hover:bg-[#001634] text-white font-semibold px-6 py-3 text-base rounded-lg shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-105 mx-auto">Learn More</a>
            </div>
          </div>
        </section>

        {/* Why Ship With Us Section */}
        <section className="py-16 px-4 bg-[#f6faff]">
          <div className="max-w-4xl mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] mb-4 animate-fade-in-up">Why Ship With Us?</h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                We're passionate about connecting families and businesses across continents. With transparent pricing, real-time updates, and a personal touch, we make shipping easy and stress-free. Our team is dedicated to making international shipping simple, affordable, and reliable.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="flex flex-col items-center bg-[#f6faff] rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in fade-in duration-500" style={{ animationDelay: '0.2s' }}>
                  <span className="text-3xl mb-2">🚚</span>
                  <h3 className="font-bold text-lg mb-1 text-[#002147]">Fast Delivery</h3>
                  <p className="text-gray-600 text-sm">Weekly shipments, 7–10 day delivery, and real-time updates.</p>
                </div>
                <div className="flex flex-col items-center bg-[#f6faff] rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in fade-in duration-500" style={{ animationDelay: '0.3s' }}>
                  <span className="text-3xl mb-2">💷</span>
                  <h3 className="font-bold text-lg mb-1 text-[#002147]">Transparent Pricing</h3>
                  <p className="text-gray-600 text-sm">Just £9/kg, no hidden fees, and clear invoicing.</p>
                </div>
                <div className="flex flex-col items-center bg-[#f6faff] rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in fade-in duration-500" style={{ animationDelay: '0.4s' }}>
                  <span className="text-3xl mb-2">🤝</span>
                  <h3 className="font-bold text-lg mb-1 text-[#002147]">Personal Service</h3>
                  <p className="text-gray-600 text-sm">We treat your packages like our own and keep you informed every step.</p>
                </div>
                <div className="flex flex-col items-center bg-[#f6faff] rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in fade-in duration-500" style={{ animationDelay: '0.5s' }}>
                  <span className="text-3xl mb-2">📦</span>
                  <h3 className="font-bold text-lg mb-1 text-[#002147]">Flexible Delivery</h3>
                  <p className="text-gray-600 text-sm">Choose doorstep delivery or arrange your own pickup in Lagos.</p>
                </div>
              </div>
              <a href="#contact" className="inline-block bg-[#002147] hover:bg-[#001634] text-white font-semibold px-6 py-3 text-base rounded-lg shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-105 animate-in fade-in duration-500" style={{ animationDelay: '0.6s' }}>Contact Us</a>
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

      {/* Ship Package Modal */}
      {isShipModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setIsShipModalOpen(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-auto max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white p-6 border-b border-gray-200 rounded-t-2xl flex justify-between items-center">
              <h2 className="text-3xl font-bold text-[#111827]">Ship a Package</h2>
              <button
                onClick={() => setIsShipModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <form onSubmit={handleSubmitQuote} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-[#111827] mb-4 border-b border-gray-200 pb-2">Package Details</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="weight" className="block text-sm font-semibold text-[#111827] mb-2">Weight (kg)</label>
                        <input
                          type="number"
                          id="weight"
                          value={quoteForm.weight}
                          onChange={(e) => handleQuoteFormChange("weight", e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter weight in kg"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="dimensions" className="block text-sm font-semibold text-[#111827] mb-2">Dimensions (L x W x H cm)</label>
                        <input
                          type="text"
                          id="dimensions"
                          value={quoteForm.dimensions}
                          onChange={(e) => handleQuoteFormChange("dimensions", e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="e.g. 30 x 20 x 15"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="packageType" className="block text-sm font-semibold text-[#111827] mb-2">Package Type</label>
                        <select
                          id="packageType"
                          value={quoteForm.packageType}
                          onChange={(e) => handleQuoteFormChange("packageType", e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Select package type</option>
                          <option value="Documents">Documents</option>
                          <option value="Electronics">Electronics</option>
                          <option value="Clothing">Clothing</option>
                          <option value="Food Items">Food Items</option>
                          <option value="Medical Supplies">Medical Supplies</option>
                          <option value="General Goods">General Goods</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="from" className="block text-sm font-semibold text-[#111827] mb-2">From</label>
                          <select
                            id="from"
                            value={quoteForm.from}
                            onChange={(e) => handleQuoteFormChange("from", e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="UK">UK</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="to" className="block text-sm font-semibold text-[#111827] mb-2">To</label>
                          <select
                            id="to"
                            value={quoteForm.to}
                            onChange={(e) => handleQuoteFormChange("to", e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="Nigeria">Nigeria</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#111827] mb-4 border-b border-gray-200 pb-2">Contact Information</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-medium text-[#002147] mb-3">Sender Details</h4>
                        <div className="space-y-3">
                          <div>
                            <label htmlFor="senderName" className="block text-sm font-semibold text-[#111827] mb-1">Full Name</label>
                            <input
                              type="text"
                              id="senderName"
                              value={quoteForm.senderName}
                              onChange={(e) => handleQuoteFormChange("senderName", e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Your full name"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="senderPhone" className="block text-sm font-semibold text-[#111827] mb-1">Phone Number</label>
                            <input
                              type="tel"
                              id="senderPhone"
                              value={quoteForm.senderPhone}
                              onChange={(e) => handleQuoteFormChange("senderPhone", e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="+44 7XXX XXXXXX"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="senderEmail" className="block text-sm font-semibold text-[#111827] mb-1">Email Address</label>
                            <input
                              type="email"
                              id="senderEmail"
                              value={quoteForm.senderEmail}
                              onChange={(e) => handleQuoteFormChange("senderEmail", e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="your@email.com"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-[#002147] mb-3">Recipient Details</h4>
                        <div className="space-y-3">
                          <div>
                            <label htmlFor="recipientName" className="block text-sm font-semibold text-[#111827] mb-1">Full Name</label>
                            <input
                              type="text"
                              id="recipientName"
                              value={quoteForm.recipientName}
                              onChange={(e) => handleQuoteFormChange("recipientName", e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Recipient's full name"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="recipientPhone" className="block text-sm font-semibold text-[#111827] mb-1">Phone Number</label>
                            <input
                              type="tel"
                              id="recipientPhone"
                              value={quoteForm.recipientPhone}
                              onChange={(e) => handleQuoteFormChange("recipientPhone", e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="+234 8XX XXX XXXX"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="recipientAddress" className="block text-sm font-semibold text-[#111827] mb-1">Delivery Address</label>
                            <textarea
                              id="recipientAddress"
                              value={quoteForm.recipientAddress}
                              onChange={(e) => handleQuoteFormChange("recipientAddress", e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              rows={3}
                              placeholder="Complete delivery address in Nigeria"
                              required
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex flex-col sm:flex-row gap-4 justify-end">
                    <button
                      type="button"
                      onClick={() => setIsShipModalOpen(false)}
                      className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-[#002147] hover:bg-blue-900 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center"
                    >
                      <Package className="mr-2 h-5 w-5" />
                      Get Quote
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 