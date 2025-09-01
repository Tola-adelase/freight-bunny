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
  Send,
  MessageSquare,
  Calendar,
  Clock as ClockIcon,
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"

export default function ContactPage() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    service: "",
    urgency: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      service: "",
      urgency: ""
    })
    
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      details: [
        { label: "UK Office", value: "+44 739 217 1558" },
        { label: "Nigeria Office", value: "+234 803 123 4567" }
      ],
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email Support",
      details: [
        { label: "General Inquiries", value: "info@freightbunny.com" },
        { label: "Support", value: "support@freightbunny.com" }
      ],
      description: "Send us an email anytime"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      details: [
        { label: "WhatsApp", value: "+44 739 217 1558" }
      ],
      description: "Chat with us on WhatsApp"
    }
  ]

  const officeLocations = [
    {
      country: "United Kingdom",
      city: "London",
      address: "123 Shipping Lane, London, UK",
      phone: "+44 739 217 1558",
      email: "uk@freightbunny.com",
      hours: "Mon-Fri: 9AM-6PM GMT",
      icon: Building
    },
    {
      country: "Nigeria",
      city: "Lagos",
      address: "456 Freight Street, Lagos, Nigeria",
      phone: "+234 803 123 4567",
      email: "ng@freightbunny.com",
      hours: "Mon-Fri: 8AM-5PM WAT",
      icon: Building
    }
  ]

  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/share/16Wjxof9Gd/?mibextid=wwXIfr", icon: Facebook, color: "text-blue-600" },
    { name: "Twitter/X", url: "https://twitter.com/freightbunny", icon: Twitter, color: "text-blue-400" },
    { name: "Instagram", url: "https://www.instagram.com/shipwithbunny?igsh=MXNpaGpwZnllbDg0ag==", icon: Instagram, color: "text-pink-600" },
    { name: "WhatsApp", url: "https://wa.me/447392171558", icon: MessageCircle, color: "text-green-600" }
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
              <MessageSquare className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Contact<br />
              <span className="text-blue-600">FreightBunny</span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              We're here to help with all your shipping needs. Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>How Can We Help?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className={`text-center transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                <CardHeader>
                  <method.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <CardTitle className={`transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{method.title}</CardTitle>
                  <CardDescription className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {method.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="text-center">
                        <p className={`font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{detail.label}</p>
                        <a 
                          href={method.icon === Phone ? `tel:${detail.value}` : method.icon === Mail ? `mailto:${detail.value}` : method.icon === MessageSquare ? `https://wa.me/${detail.value.replace(/\D/g, '')}` : '#'}
                          className={`text-blue-600 hover:text-blue-700 transition-colors duration-200 ${method.icon === MessageSquare ? 'hover:underline' : ''}`}
                        >
                          {detail.value}
                        </a>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Office Locations */}
      <section className={`py-16 px-4 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className={`text-3xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Send Us a Message</h2>
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <CheckCircle className="w-5 h-5 inline mr-2" />
                  Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className={`transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className={`mt-1 transition-colors duration-300 ${isDarkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300'}`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className={`transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className={`mt-1 transition-colors duration-300 ${isDarkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300'}`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className={`transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`mt-1 transition-colors duration-300 ${isDarkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300'}`}
                      placeholder="+44 7XXX XXXXXX"
                    />
                  </div>
                  <div>
                    <Label htmlFor="service" className={`transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Service Interest</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className={`mt-1 transition-colors duration-300 ${isDarkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300'}`}>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="air-freight-uk-nigeria">Air Freight UK → Nigeria</SelectItem>
                        <SelectItem value="air-freight-nigeria-uk">Air Freight Nigeria → UK</SelectItem>
                        <SelectItem value="customs-clearance">Customs Clearance</SelectItem>
                        <SelectItem value="buy-for-me">Buy For Me Service</SelectItem>
                        <SelectItem value="express-shipping">Express Shipping</SelectItem>
                        <SelectItem value="bulk-shipping">Bulk Shipping</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject" className={`transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Subject *</Label>
                  <Input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    required
                    className={`mt-1 transition-colors duration-300 ${isDarkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300'}`}
                    placeholder="What can we help you with?"
                  />
                </div>
                <div>
                  <Label htmlFor="urgency" className={`transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Urgency Level</Label>
                  <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                    <SelectTrigger className={`mt-1 transition-colors duration-300 ${isDarkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300'}`}>
                      <SelectValue placeholder="Select urgency level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low - General inquiry</SelectItem>
                      <SelectItem value="medium">Medium - Planning ahead</SelectItem>
                      <SelectItem value="high">High - Urgent shipment</SelectItem>
                      <SelectItem value="emergency">Emergency - Immediate assistance needed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message" className={`transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    rows={5}
                    className={`mt-1 transition-colors duration-300 ${isDarkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300'}`}
                    placeholder="Tell us about your shipping needs..."
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 text-lg rounded-xl transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className={`text-3xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Offices</h2>
              <div className="space-y-6">
                {officeLocations.map((office, index) => (
                  <Card key={index} className={`transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                    <CardHeader>
                      <div className="flex items-center">
                        <office.icon className="w-8 h-8 text-blue-600 mr-3" />
                        <div>
                          <CardTitle className={`transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            {office.city}, {office.country}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                        <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{office.address}</p>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" />
                        <a 
                          href={`tel:${office.phone}`}
                          className={`text-blue-600 hover:text-blue-700 transition-colors duration-200 ${isDarkMode ? 'text-blue-400' : ''}`}
                        >
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" />
                        <a 
                          href={`mailto:${office.email}`}
                          className={`text-blue-600 hover:text-blue-700 transition-colors duration-200 ${isDarkMode ? 'text-blue-400' : ''}`}
                        >
                          {office.email}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" />
                        <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{office.hours}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Follow Us</h2>
          <p className={`text-lg mb-8 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Stay updated with our latest news, shipping tips, and special offers
          </p>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}
              >
                <social.icon className={`w-6 h-6 ${social.color}`} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-16 px-4 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "How long does shipping take?",
                answer: "Standard air freight takes 7-10 days, while express shipping takes 3-5 days. Delivery times may vary based on customs clearance and destination."
              },
              {
                question: "What are your shipping rates?",
                answer: "Our rates start at £9/kg for standard air freight from UK to Nigeria. Express shipping is £18/kg. Contact us for bulk shipping quotes."
              },
              {
                question: "Do you provide customs clearance?",
                answer: "Yes, we offer comprehensive customs clearance support including document preparation, duty calculation, and compliance verification."
              },
              {
                question: "What items can I ship?",
                answer: "We ship most items except dangerous goods, illegal items, and certain restricted items. Contact us for specific item inquiries."
              },
              {
                question: "How do I track my package?",
                answer: "We provide real-time tracking updates via email and SMS. You can also track your package on our website using your tracking number."
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a personalized shipping quote and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white hover:bg-blue-50 text-[#002147] font-bold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Calculator className="mr-2 h-5 w-5" />
              Get a Quote
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#002147] font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
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