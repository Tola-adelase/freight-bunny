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
      <section className="relative py-20 px-4 bg-gradient-to-br from-[#f6faff] via-[#eaf3fb] to-[#f6faff]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              <Plane className="w-4 h-4 mr-2" />
              About FreightBunny
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Connecting Continents,<br />
              <span className="text-blue-600">One Package at a Time</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">
              We're passionate about bridging the gap between the UK and Nigeria, making international shipping accessible, reliable, and personal.
            </p>
            </div>
          </div>
        </section>

      {/* Our Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-lg mb-6 text-gray-600">
                FreightBunny was born from a simple observation: shipping between the UK and Nigeria was unnecessarily complicated, expensive, and impersonal. We saw families struggling to send care packages, businesses facing logistical nightmares, and individuals paying exorbitant fees for basic shipping services.
              </p>
              <p className="text-lg mb-6 text-gray-600">
                In 2020, we set out to change this. We built a service that combines the reliability of major carriers with the personal touch of a family business. Our mission is simple: make shipping between the UK and Nigeria as easy as sending a text message.
              </p>
              <p className="text-lg text-gray-600">
                Today, we've helped thousands of customers ship everything from personal care packages to business documents, always maintaining our commitment to transparency, reliability, and exceptional service.
              </p>
            </div>
            <div className="relative">
              <div className={`bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-2xl transition-all duration-300 hover:scale-105`}>
                <div className="text-center">
                  <Package className="w-16 h-16 mx-auto mb-4 text-white" />
                  <h3 className="text-2xl font-bold mb-4">Fast, Reliable Air Freight</h3>
                  <p className="text-blue-100 mb-6">
                    Weekly shipments, safe handling, and fast delivery. We handle your cargo with care and keep you updated every step of the way.
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
            <div>
                      <div className="text-2xl font-bold">7-10</div>
                      <div className="text-sm text-blue-100">Days Delivery</div>
            </div>
            <div>
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm text-blue-100">Support</div>
            </div>
            <div>
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
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <Target className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <CardTitle className="text-gray-900">Simplify Shipping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Make international shipping as simple and straightforward as possible, removing the complexity and confusion that often comes with cross-border logistics.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <Heart className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <CardTitle className="text-gray-900">Personal Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Provide a personal, human touch to every shipment, treating each package as if it were our own and each customer as family.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <Award className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <CardTitle className="text-gray-900">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Maintain the highest standards of service quality, reliability, and customer satisfaction in everything we do.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center transition-all duration-300 hover:scale-105 bg-white border-gray-200">
                <CardHeader>
                  <value.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <CardTitle className="text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
                  </div>
                </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center transition-all duration-300 hover:scale-105 bg-white border-gray-200">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <CardTitle className="text-gray-900">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-600">{member.bio}</p>
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
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