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
  Users,
  Target,
  Heart,
  Award,
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"

export default function AboutPage() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/buy-for-me", label: "Buy For Me" },
    { href: "/pricing", label: "Pricing" },
    { href: "#contact", label: "Contact Us" },
  ]

  const teamMembers = [
    {
      name: "Oludayo Obafunke",
      role: "Founder & CEO",
      image: "/images/team/oludayo.jpg",
      bio: "With over 15 years in international logistics, Oludayo founded FreightBunny to make shipping between the UK and Nigeria accessible to everyone.",
      email: "oludayo@freightbunny.com"
    },
    {
      name: "Subomi Samuel",
      role: "Operations Director",
      image: "/images/team/subomi.jpg",
      bio: "Subomi brings extensive experience in customs clearance and ensures smooth operations across all our shipping routes.",
      email: "subomi@freightbunny.com"
    },
    {
      name: "Busola Falaye",
      role: "Customer Success Manager",
      image: "/images/team/busola.jpg",
      bio: "Busola is dedicated to providing exceptional customer service and ensuring every shipment meets our high standards.",
      email: "busola@freightbunny.com"
    }
  ]

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "We put our customers at the heart of everything we do, ensuring their satisfaction and success."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Your packages are handled with the utmost care and delivered on time, every time."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service, from packaging to delivery."
    },
    {
      icon: Users,
      title: "Community",
      description: "We're building bridges between communities, connecting families and businesses across continents."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b backdrop-blur-sm sticky top-0 z-50 bg-white/80 border-gray-200">
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
      <section className="relative py-20 px-4 bg-gradient-to-br from-[#f6faff] via-[#eaf3fb] to-[#f6faff] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-contain bg-no-repeat opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23002147\' stroke-width=\'1\'%3E%3Cpath d=\'M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z\'/%3E%3C/svg%3E")' }}></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-contain bg-no-repeat opacity-15" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23002147\' stroke-width=\'1\'%3E%3Cpath d=\'M20 7h-9m9 0v9m0-9L3 21\'/%3E%3C/svg%3E")' }}></div>
        </div>
        {/* Abstract Shapes for Visual Interest */}
        <div className="absolute -top-24 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-blue-100 via-blue-50 to-transparent rounded-full blur-3xl opacity-60 z-0 transform transition-transform duration-1000 hover:scale-110"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tr from-blue-100 via-blue-50 to-transparent rounded-full blur-2xl opacity-50 z-0 transform transition-transform duration-1000 hover:scale-110"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200 animate-fade-in-up">
              <Plane className="w-4 h-4 mr-2" />
              About FreightBunny
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#111827] animate-fade-in-up">
              Connecting Continents,<br />
              <span className="text-[#002147] relative">
                One Package at a Time
                <span className="absolute left-1/2 -bottom-1 w-3/4 h-2 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 rounded-full -translate-x-1/2 z-[-1] shadow-lg animate-pulse"></span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 font-semibold animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              We're passionate about bridging the gap between the UK and Nigeria, making international shipping accessible, reliable, and personal.
            </p>
            </div>
          </div>
        </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 bg-[#f6faff] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-contain bg-no-repeat" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23002147\' stroke-width=\'1\'%3E%3Cpath d=\'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\'/%3E%3C/svg%3E")' }}></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#111827] animate-fade-in-up">Our Story</h2>
              <p className="text-lg mb-6 text-gray-700 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                FreightBunny was born from a simple observation: shipping between the UK and Nigeria was unnecessarily complicated, expensive, and impersonal. We saw families struggling to send care packages, businesses facing logistical nightmares, and individuals paying exorbitant fees for basic shipping services.
              </p>
              <p className="text-lg mb-6 text-gray-700 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                In 2020, we set out to change this. We built a service that combines the reliability of major carriers with the personal touch of a family business. Our mission is simple: make shipping between the UK and Nigeria as easy as sending a text message.
              </p>
              <p className="text-lg text-gray-700 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                Today, we've helped thousands of customers ship everything from personal care packages to business documents, always maintaining our commitment to transparency, reliability, and exceptional service.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="text-center">
                  <div className="bg-white/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <Package className="w-10 h-10 text-white animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Fast, Reliable Air Freight</h3>
                  <p className="text-blue-100 mb-6">
                    Weekly shipments, safe handling, and fast delivery. We handle your cargo with care and keep you updated every step of the way.
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-2xl font-bold">7-10</div>
                      <div className="text-sm text-blue-100">Days Delivery</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm text-blue-100">Support</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-sm text-blue-100">Insured</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 px-4 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-contain bg-no-repeat" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23002147\' stroke-width=\'1\'%3E%3Cpath d=\'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\'/%3E%3C/svg%3E")' }}></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-[#111827] animate-fade-in-up">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-500 hover:scale-105 hover:-translate-y-2 group cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-50/0 group-hover:from-blue-50/20 group-hover:via-blue-50/10 group-hover:to-blue-50/20 transition-all duration-500 rounded-2xl"></div>
              <CardHeader className="relative z-10">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-full shadow-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:animate-bounce">
                  <Target className="w-8 h-8 text-white animate-pulse group-hover:animate-spin-slow group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <CardTitle className="text-[#002147] group-hover:text-blue-600 transition-colors duration-300">Simplify Shipping</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                  Make international shipping as simple and straightforward as possible, removing the complexity and confusion that often comes with cross-border logistics.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-500 hover:scale-105 hover:-translate-y-2 group cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 via-emerald-50/0 to-emerald-50/0 group-hover:from-emerald-50/20 group-hover:via-emerald-50/10 group-hover:to-emerald-50/20 transition-all duration-500 rounded-2xl"></div>
              <CardHeader className="relative z-10">
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-3 rounded-full shadow-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:animate-bounce">
                  <Heart className="w-8 h-8 text-white animate-pulse group-hover:animate-spin-slow group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <CardTitle className="text-[#002147] group-hover:text-blue-600 transition-colors duration-300">Personal Touch</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                  Provide a personal, human touch to every shipment, treating each package as if it were our own and each customer as family.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-500 hover:scale-105 hover:-translate-y-2 group cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 via-purple-50/0 to-purple-50/0 group-hover:from-purple-50/20 group-hover:via-purple-50/10 group-hover:to-purple-50/20 transition-all duration-500 rounded-2xl"></div>
              <CardHeader className="relative z-10">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-full shadow-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:animate-bounce">
                  <Award className="w-8 h-8 text-white animate-pulse group-hover:animate-ping" />
                </div>
                <CardTitle className="text-[#002147] group-hover:text-blue-600 transition-colors duration-300">Excellence</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                  Maintain the highest standards of service quality, reliability, and customer satisfaction in everything we do.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 bg-[#f6faff] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-contain bg-no-repeat" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23002147\' stroke-width=\'1\'%3E%3Cpath d=\'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\'/%3E%3C/svg%3E")' }}></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#111827] animate-fade-in-up">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 hover:border-blue-200 group cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-50/0 group-hover:from-blue-50/20 group-hover:via-blue-50/10 group-hover:to-blue-50/20 transition-all duration-500 rounded-2xl"></div>
                <CardHeader className="relative z-10">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-full shadow-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:animate-bounce">
                    <value.icon className="w-8 h-8 text-white animate-pulse group-hover:animate-spin-slow group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-[#002147] group-hover:text-blue-600 transition-colors duration-300">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">{value.description}</p>
                </CardContent>
              </Card>
            ))}
                  </div>
                </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-contain bg-no-repeat" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23002147\' stroke-width=\'1\'%3E%3Cpath d=\'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\'/%3E%3C/svg%3E")' }}></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#111827] animate-fade-in-up">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 hover:border-blue-200 group cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-50/0 group-hover:from-blue-50/20 group-hover:via-blue-50/10 group-hover:to-blue-50/20 transition-all duration-500 rounded-2xl"></div>
                <CardHeader className="relative z-10">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:animate-bounce group-hover:scale-110 transition-transform duration-300">
                    <User className="w-12 h-12 text-white animate-pulse group-hover:animate-spin-slow group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-[#002147] group-hover:text-blue-600 transition-colors duration-300">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="mb-4 text-gray-700 group-hover:text-gray-800 transition-colors duration-300">{member.bio}</p>
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 group-hover:text-blue-800"
                  >
                    {member.email}
                  </a>
                </CardContent>
              </Card>
            ))}
                </div>
            </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#002147] to-[#003366]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Ship with Us?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers who trust FreightBunny for their shipping needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#002147] hover:bg-[#001634] text-white font-semibold px-6 py-3 text-sm sm:text-base md:px-8 md:py-4 lg:px-6 lg:py-3 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 w-full sm:w-auto md:w-full lg:w-auto max-w-[180px] sm:max-w-[200px] md:max-w-none text-center min-h-[44px] flex items-center justify-center">
              <Calculator className="mr-2 h-5 w-5" />
              Get a Quote
            </Button>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#002147] font-semibold px-6 py-3 text-sm sm:text-base md:px-8 md:py-4 lg:px-6 lg:py-3 rounded-lg shadow-lg transition-all duration-200 hover:scale-105 w-full sm:w-auto md:w-full lg:w-auto max-w-[180px] sm:max-w-[200px] md:max-w-none text-center min-h-[44px] flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gradient-to-br from-[#002147] to-[#003366] border-t border-blue-300/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-blue-100">
            © 2024 FreightBunny. All rights reserved. Connecting UK & Nigeria with reliable shipping.
          </p>
        </div>
      </footer>
    </div>
  )
} 