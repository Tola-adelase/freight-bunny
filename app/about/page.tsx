"use client"

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Facebook, Twitter, Instagram, MessageCircle, Package, Users, Globe, Award, Clock, Shield, Heart, Target, Zap, Star, CheckCircle, TrendingUp, MapPin, Phone, Mail, Menu, X } from "lucide-react";
import { Button } from "../../components/ui/button";

export default function AboutPage() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShipModalOpen, setIsShipModalOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/buy-for-me", label: "Buy For Me" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact Us" },
  ];
  const [trackingNumber, setTrackingNumber] = useState("");
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

  const stats = [
    { number: "10,000+", label: "Packages Delivered", icon: Package },
    { number: "2,500+", label: "Happy Customers", icon: Users },
    { number: "7-10", label: "Days Delivery", icon: Clock },
    { number: "99.9%", label: "Success Rate", icon: Award },
  ];

  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "We ensure every package reaches its destination safely and on time, with full insurance coverage."
    },
    {
      icon: Heart,
      title: "Personal Touch",
      description: "We treat every shipment as if it were our own, providing personalized service and care."
    },
    {
      icon: Target,
      title: "Transparency",
      description: "Clear pricing, real-time tracking, and honest communication throughout the shipping process."
    },
    {
      icon: Zap,
      title: "Speed",
      description: "Fast processing and efficient logistics to get your packages moving quickly."
    },
  ];

  const team = [
    {
      name: "Obafunke Ogunbanjo",
      role: "Founder & CEO",
      image: "/images/team-ceo.jpg",
      bio: "With over 15 years in logistics and a passion for connecting communities, Obafunke founded Freight Bunny to bridge the gap between UK and Nigeria."
    },
    {
      name: "Adebusola Falaye",
      role: "Operations Manager",
      image: "/images/team-operations.jpg",
      bio: "Adebusola ensures smooth operations and customer satisfaction with her expertise in international shipping and supply chain management."
    },
    {
      name: "David Thompson",
      role: "Customer Success Manager",
      image: "/images/team-customer.jpg",
      bio: "David leads our customer support team, ensuring every customer receives exceptional service and support throughout their shipping journey."
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Freight Bunny was established with a vision to make UK-Nigeria shipping simple and affordable."
    },
    {
      year: "2021",
      title: "1,000th Package",
      description: "Celebrated our first major milestone of successfully delivering 1,000 packages."
    },
    {
      year: "2022",
      title: "Service Expansion",
      description: "Expanded our services to include Buy-for-Me and same-day collection options."
    },
    {
      year: "2023",
      title: "10,000+ Deliveries",
      description: "Reached over 10,000 successful deliveries, establishing ourselves as a trusted shipping partner."
    },
    {
      year: "2024",
      title: "Digital Innovation",
      description: "Launched our advanced tracking system and mobile-optimized platform for better customer experience."
    },
  ];

  const handleQuoteFormChange = (field: string, value: string) => {
    setQuoteForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Quote form submitted:", quoteForm);
    alert("Thank you! We'll get back to you with a quote within 24 hours.");
    setIsShipModalOpen(false);
    // Reset form
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
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-[#f6faff] via-[#eaf3fb] to-[#f6faff] overflow-hidden">
          <div className="absolute -top-24 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-blue-100 via-blue-50 to-transparent rounded-full blur-3xl opacity-60 z-0"></div>
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tr from-blue-100 via-blue-50 to-transparent rounded-full blur-2xl opacity-50 z-0"></div>
          
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#111827] mb-6 leading-tight">
              About <span className="text-[#002147]">Freight Bunny</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Connecting hearts, homes, and businesses between the UK and Nigeria through reliable, fast, and affordable shipping solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-2xl shadow-lg p-6 mb-4 w-32 h-32 flex flex-col items-center justify-center">
                    <stat.icon className="w-8 h-8 text-[#002147] mb-2" />
                    <div className="text-2xl font-bold text-[#002147]">{stat.number}</div>
                  </div>
                  <p className="text-gray-600 font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#111827] mb-6">Our Story</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Freight Bunny was born from a simple yet powerful idea: to make shipping between the UK and Nigeria as easy as sending a message to a friend. Founded by Obafunke Ogunbanjo, who experienced firsthand the challenges of sending packages home to Nigeria, we understood the pain points that many faced.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  What started as a personal mission to help friends and family has grown into a trusted shipping partner for thousands of customers. We've built our reputation on reliability, transparency, and genuine care for every package we handle.
                </p>
                <p className="text-lg text-gray-700">
                  Today, we're proud to be the bridge that connects communities, enabling people to share love, support businesses, and maintain relationships across continents.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/images/Freight_Bunny_Hero_Image.jpg"
                  alt="Freight Bunny Story"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#002147] text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-2xl font-bold">2020</div>
                  <div className="text-sm">Founded</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#111827] mb-4">Our Mission & Vision</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Driving our passion for connecting people and businesses across borders
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-[#002147] p-3 rounded-full mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#111827]">Our Mission</h3>
                </div>
                <p className="text-gray-700 text-lg">
                  To provide the most reliable, affordable, and customer-focused shipping service between the UK and Nigeria, making it easy for people to send love, support, and business opportunities across borders.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-[#002147] p-3 rounded-full mr-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#111827]">Our Vision</h3>
                </div>
                <p className="text-gray-700 text-lg">
                  To become the leading shipping bridge between the UK and Nigeria, known for our innovation, reliability, and genuine care for our customers' needs and aspirations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#111827] mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-[#f6faff] to-[#eaf3fb] p-6 rounded-2xl mb-4 group hover:shadow-lg transition-shadow">
                    <value.icon className="w-12 h-12 text-[#002147] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-[#111827] mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#111827] mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The passionate people behind Freight Bunny's success
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-64 bg-gradient-to-br from-[#f6faff] to-[#eaf3fb] flex items-center justify-center">
                    <Users className="w-24 h-24 text-[#002147] opacity-50" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#111827] mb-2">{member.name}</h3>
                    <p className="text-[#002147] font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#111827] mb-4">Our Journey</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Key milestones in our growth and development
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#002147] opacity-20"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#002147]">
                        <div className="text-2xl font-bold text-[#002147] mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-[#111827] mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-[#002147] rounded-full absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-[#f6faff] via-[#eaf3fb] to-[#f6faff]">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#111827] mb-4">Why Choose Freight Bunny?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We're more than just a shipping company - we're your trusted partner
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-[#111827] mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">No hidden fees, no surprises. What you see is what you pay.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <Clock className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-[#111827] mb-2">Fast Delivery</h3>
                <p className="text-gray-600">7-10 days delivery time with real-time tracking updates.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <Shield className="w-12 h-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold text-[#111827] mb-2">Fully Insured</h3>
                <p className="text-gray-600">Complete insurance coverage for peace of mind.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <Heart className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-[#111827] mb-2">Personal Service</h3>
                <p className="text-gray-600">Dedicated customer support that truly cares about your needs.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-[#111827] mb-2">99.9% Success Rate</h3>
                <p className="text-gray-600">Proven track record of successful deliveries.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <MapPin className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-[#111827] mb-2">Door-to-Door Service</h3>
                <p className="text-gray-600">Convenient pickup and delivery to your specified locations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-[#002147] text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Ship with Freight Bunny?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied customers who trust us with their precious packages
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#002147] hover:bg-gray-100 shadow-lg px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center min-h-[56px] border-2 border-white cursor-pointer" onClick={() => setIsShipModalOpen(true)}>
                <Package className="mr-2 h-6 w-6" />
                Start Shipping
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#002147] px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center min-h-[56px] cursor-pointer">
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