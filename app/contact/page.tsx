"use client"

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MessageCircle,
  Music,
  Menu,
  X,
  MapPin,
} from "lucide-react";

export default function ContactPage() {
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

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-[#f6faff] via-[#eaf3fb] to-[#f6faff] overflow-hidden">
        <div className="absolute -top-24 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-blue-100 via-blue-50 to-transparent rounded-full blur-3xl opacity-60 z-0"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tr from-blue-100 via-blue-50 to-transparent rounded-full blur-2xl opacity-50 z-0"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#e0eaff] to-[#c7e0ff] text-[#002147] text-base font-semibold shadow-md">
              <MessageCircle className="w-5 h-5 mr-2 text-[#002147]" />
              Let's Connect
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#111827] mb-6 leading-tight">
            Get in <span className="text-[#002147]">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Got questions, shipping dreams, or just want to say hi? We're all ears—and boxes! Reach out for anything you need.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#111827] mb-4">Contact Information</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Multiple ways to reach us - choose what works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-lg md:max-w-3xl lg:max-w-none mx-auto">
              <div className="bg-white rounded-lg border shadow-sm">
                <div className="p-6 border-b text-center">
                  <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="space-y-8">
                    <div className="flex flex-col items-center space-y-3">
                      <Phone className="h-8 w-8 text-blue-600" />
                      <div className="text-center">
                        <p className="text-xl font-bold text-gray-900">UK Office</p>
                        <p className="text-lg text-gray-800">+44 7392 171558</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center space-y-3">
                      <Phone className="h-8 w-8 text-green-600" />
                      <div className="text-center">
                        <p className="text-xl font-bold text-gray-900">Nigeria Office</p>
                        <p className="text-lg text-gray-800">+234 1 234 5678</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center space-y-3">
                      <Mail className="h-8 w-8 text-purple-600" />
                      <div className="text-center">
                        <p className="text-xl font-bold text-gray-900">Email</p>
                        <p className="text-lg text-gray-800">hello@freightbunny.com</p>
                      </div>
                    </div>
                  </div>
                  <hr className="my-8" />
                  <div className="text-center">
                    <p className="text-xl font-bold text-gray-900 mb-6">Our Offices</p>
                    <div className="space-y-8">
                      <div className="flex flex-col items-center space-y-3">
                        <MapPin className="h-8 w-8 text-blue-600" />
                        <div className="text-center">
                          <p className="text-lg font-bold text-gray-900">UK Office</p>
                          <p className="text-base text-gray-800">123 Shipping Lane</p>
                          <p className="text-base text-gray-800">Manchester, M1 2AB</p>
                          <p className="text-base text-gray-800">United Kingdom</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center space-y-3">
                        <MapPin className="h-8 w-8 text-green-600" />
                        <div className="text-center">
                          <p className="text-lg font-bold text-gray-900">Nigeria Office</p>
                          <p className="text-base text-gray-800">45 Ikeja Way</p>
                          <p className="text-base text-gray-800">Ikeja, Lagos State</p>
                          <p className="text-base text-gray-800">Nigeria</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-8" />
                  <div className="text-center">
                    <p className="text-xl font-bold text-gray-900 mb-4">Business Hours</p>
                    <p className="text-lg text-gray-800">Monday - Friday: 9:00 AM - 6:00 PM (GMT)</p>
                    <p className="text-lg text-gray-800">Saturday: 10:00 AM - 4:00 PM (GMT)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm">
                <div className="p-6 border-b text-center lg:text-left">
                  <h3 className="text-xl font-extrabold text-gray-900">Follow Us</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-3">
                    <a href="https://www.facebook.com/share/16Wjxof9Gd/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" 
                      className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start space-y-2 lg:space-y-0 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                      <Facebook className="h-5 w-5 text-blue-600 mb-2 lg:mb-0 lg:mr-3" />
                      <div className="text-center lg:text-left">
                        <p className="font-medium text-gray-900">Facebook</p>
                        <p className="text-sm text-gray-700">@freightbunny</p>
                      </div>
                    </a>
                    <a href="https://twitter.com/freightbunny" target="_blank" rel="noopener noreferrer" className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start space-y-2 lg:space-y-0 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                      <Twitter className="h-5 w-5 text-blue-400 mb-2 lg:mb-0 lg:mr-3" />
                      <div className="text-center lg:text-left">
                        <p className="font-medium text-gray-900">Twitter/X</p>
                        <p className="text-sm text-gray-700">@freightbunny</p>
                      </div>
                    </a>
                    <a href="https://www.instagram.com/shipwithbunny?igsh=MXNpaGpwZnllbDg0ag==" target="_blank" rel="noopener noreferrer" 
                      className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start space-y-2 lg:space-y-0 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                      <Instagram className="h-5 w-5 text-pink-600 mb-2 lg:mb-0 lg:mr-3" />
                      <div className="text-center lg:text-left">
                        <p className="font-medium text-gray-900">Instagram</p>
                        <p className="text-sm text-gray-700">@shipwithbunny</p>
                      </div>
                    </a>
                    <a href="https://wa.me/447392171558" target="_blank" rel="noopener noreferrer" 
                      className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start space-y-2 lg:space-y-0 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                      <MessageCircle className="h-5 w-5 text-green-600 mb-2 lg:mb-0 lg:mr-3" />
                      <div className="text-center lg:text-left">
                        <p className="font-medium text-gray-900">WhatsApp</p>
                        <p className="text-sm text-gray-700">+44 7392 171558</p>
                      </div>
                    </a>
                    <a href="https://www.tiktok.com/@freightbunny?_t=ZN-8xI2uoApuII&_r=1" target="_blank" rel="noopener noreferrer" 
                      className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start space-y-2 lg:space-y-0 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                      <Music className="h-5 w-5 text-black mb-2 lg:mb-0 lg:mr-3" />
                      <div className="text-center lg:text-left">
                        <p className="font-medium text-gray-900">TikTok</p>
                        <p className="text-sm text-gray-700">@freightbunny</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm">
                <div className="p-6 border-b text-center lg:text-left">
                  <h3 className="text-xl font-extrabold text-gray-900">Send us a Message</h3>
                </div>
                <div className="p-6">
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2 text-center lg:text-left">Full Name</label>
                      <input
                        id="name"
                        placeholder="Your name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2 text-center lg:text-left">Email</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2 text-center lg:text-left">Message</label>
                      <textarea
                        id="message"
                        placeholder="How can we help you?"
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                      ></textarea>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-bold text-lg hover:bg-blue-700 transition-colors">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            {/* Company Info */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center space-x-2 mb-4 justify-center md:justify-start">
                <img
                  src="/images/Headerlogo.jpg"
                  alt="FreightBunny - Fast Shipping"
                  className="h-8 w-8 object-contain"
                />
                <span className="text-xl font-bold">FreightBunny</span>
              </div>
              <p className="text-gray-400 text-sm max-w-xs mx-auto md:mx-0 text-center md:text-left">
                Connecting UK and Nigeria through reliable, fast, and secure shipping services.
              </p>
            </div>

            {/* Services */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Express Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Standard Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cargo Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Package Tracking
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Shipping Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="https://www.facebook.com/share/16Wjxof9Gd/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" 
                    className="flex items-center justify-center md:justify-start space-x-2 hover:text-white transition-colors">
                    <Facebook className="h-4 w-4 text-blue-600" />
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center md:justify-start space-x-2 hover:text-white transition-colors">
                    <Twitter className="h-4 w-4 text-blue-400" />
                    <span>Twitter/X</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/freightbunny/" target="_blank" rel="noopener noreferrer" 
                    className="flex items-center justify-center md:justify-start space-x-2 hover:text-white transition-colors">
                    <Linkedin className="h-4 w-4 text-blue-700" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/shipwithbunny?igsh=MXNpaGpwZnllbDg0ag==" target="_blank" rel="noopener noreferrer" 
                    className="flex items-center justify-center md:justify-start space-x-2 hover:text-white transition-colors">
                    <Instagram className="h-4 w-4 text-pink-600" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/447392171558" target="_blank" rel="noopener noreferrer" 
                    className="flex items-center justify-center md:justify-start space-x-2 hover:text-white transition-colors">
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