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
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"

export default function ServicesPage() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [selectedService, setSelectedService] = useState<string | null>(null)

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

  const services = [
    {
      id: "air-freight-uk-nigeria",
      title: "Air Freight UK → Nigeria",
      icon: Plane,
      description: "Fast and reliable air freight service from the UK to Nigeria",
      features: [
        "Weekly shipments every Tuesday",
        "7-10 days delivery time",
        "Real-time tracking updates",
        "Full customs clearance support",
        "Door-to-door delivery option",
        "Comprehensive insurance coverage"
      ],
      pricing: {
        base: "£9",
        unit: "per kg",
        additional: "Additional fees may apply for special handling"
      },
      restrictions: [
        "No dangerous goods",
        "Maximum weight: 50kg per package",
        "Size restrictions apply",
        "Certain items may require special permits"
      ]
    },
    {
      id: "air-freight-nigeria-uk",
      title: "Air Freight Nigeria → UK",
      icon: Plane,
      description: "Secure and efficient shipping from Nigeria to the UK",
      features: [
        "Flexible scheduling options",
        "Customs documentation assistance",
        "Professional packaging services",
        "Express delivery available",
        "Comprehensive tracking system",
        "Customer support throughout process"
      ],
      pricing: {
        base: "£12",
        unit: "per kg",
        additional: "Express service available at additional cost"
      },
      restrictions: [
        "Export permits may be required",
        "Agricultural items restricted",
        "Maximum weight: 30kg per package",
        "Documentation must be complete"
      ]
    },
    {
      id: "customs-clearance",
      title: "Customs Clearance Support",
      icon: FileText,
      description: "Expert assistance with customs documentation and clearance",
      features: [
        "Document preparation and review",
        "Customs duty calculation",
        "Import/export permit assistance",
        "24/7 customs support",
        "Fast-track clearance options",
        "Compliance verification"
      ],
      pricing: {
        base: "£25",
        unit: "per shipment",
        additional: "Additional fees for complex shipments"
      },
      restrictions: [
        "Valid documentation required",
        "Some items may require special permits",
        "Processing times vary by complexity"
      ]
    },
    {
      id: "buy-for-me",
      title: "Buy For Me Service",
      icon: ShoppingBag,
      description: "We shop for you in the UK and ship to Nigeria",
      features: [
        "Personal shopping assistance",
        "Product sourcing and verification",
        "Quality inspection before shipping",
        "Secure payment handling",
        "Transparent pricing",
        "Customer support throughout"
      ],
      pricing: {
        base: "10%",
        unit: "service fee",
        additional: "Plus shipping costs and any applicable taxes"
      },
      restrictions: [
        "Available items subject to availability",
        "Some retailers may have restrictions",
        "Payment must be made in advance",
        "Returns subject to retailer policies"
      ]
    },
    {
      id: "express-shipping",
      title: "Express Shipping",
      icon: Zap,
      description: "Priority shipping for urgent deliveries",
      features: [
        "3-5 days delivery time",
        "Priority handling",
        "Dedicated customer support",
        "Real-time tracking",
        "Insurance included",
        "Flexible pickup options"
      ],
      pricing: {
        base: "£18",
        unit: "per kg",
        additional: "Minimum charge applies"
      },
      restrictions: [
        "Limited to certain destinations",
        "Size and weight restrictions",
        "Not available for all items",
        "Additional fees may apply"
      ]
    },
    {
      id: "bulk-shipping",
      title: "Bulk Shipping Solutions",
      icon: Truck,
      description: "Cost-effective solutions for large shipments",
      features: [
        "Volume discounts available",
        "Flexible scheduling",
        "Dedicated account manager",
        "Custom packaging solutions",
        "Warehouse storage options",
        "Consolidated shipping"
      ],
      pricing: {
        base: "Contact us",
        unit: "for quote",
        additional: "Volume discounts and custom pricing available"
      },
      restrictions: [
        "Minimum volume requirements",
        "Advance booking required",
        "Special handling may be needed",
        "Custom documentation required"
      ]
    }
  ]

  const specialServices = [
    {
      title: "Document Shipping",
      icon: FileText,
      description: "Secure handling of important documents",
      features: ["Express delivery", "Tracking included", "Signature required"]
    },
    {
      title: "Electronics Shipping",
      icon: Box,
      description: "Specialized handling for electronic devices",
      features: ["Anti-static packaging", "Insurance included", "Careful handling"]
    },
    {
      title: "Fragile Items",
      icon: Gift,
      description: "Extra care for delicate and valuable items",
      features: ["Custom packaging", "Extra insurance", "Handling instructions"]
    },
    {
      title: "Business Shipping",
      icon: Building,
      description: "Solutions for business and commercial shipments",
      features: ["Volume discounts", "Account management", "Regular scheduling"]
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
              <Package className="w-4 h-4 mr-2" />
              Our Services
            </Badge>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Comprehensive Shipping<br />
              <span className="text-blue-600">Solutions</span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              From air freight to customs clearance, we provide end-to-end shipping services between the UK and Nigeria.
            </p>
          </div>
          </div>
        </section>

      {/* Main Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Core Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card 
                key={service.id}
                className={`transition-all duration-300 hover:scale-105 cursor-pointer ${isDarkMode ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-white border-gray-200 hover:bg-gray-50'}`}
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <service.icon className="w-12 h-12 text-blue-600" />
                    <Badge className="bg-blue-100 text-blue-800">
                      {service.pricing.base} {service.pricing.unit}
                    </Badge>
                  </div>
                  <CardTitle className={`transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{service.title}</CardTitle>
                  <CardDescription className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {selectedService === service.id && (
                    <div className="space-y-4 mt-4">
                      <div>
                        <h4 className={`font-semibold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, index) => (
                            <li key={index} className={`flex items-center text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className={`font-semibold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Restrictions:</h4>
                        <ul className="space-y-1">
                          {service.restrictions.map((restriction, index) => (
                            <li key={index} className={`flex items-center text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                              <Info className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {restriction}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-4 border-t border-gray-200">
                        <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          <span className="font-semibold">Pricing:</span> {service.pricing.base} {service.pricing.unit}
                        </p>
                        <p className={`text-xs transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {service.pricing.additional}
              </p>
            </div>
                    </div>
                  )}
                  <div className="mt-4">
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={(e) => {
                        e.stopPropagation()
                        // Handle quote request
                      }}
                    >
                      <Calculator className="w-4 h-4 mr-2" />
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Services Section */}
      <section className={`py-16 px-4 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Specialized Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialServices.map((service, index) => (
              <Card key={index} className={`text-center transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                <CardHeader>
                  <service.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <CardTitle className={`transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{service.title}</CardTitle>
                  <CardDescription className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-center text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              ))}
            </div>
          </div>
        </section>

      {/* Service Comparison */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Service Comparison</h2>
          <div className={`overflow-x-auto rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
            <table className="w-full">
              <thead>
                <tr className={`border-b transition-colors duration-300 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                  <th className={`px-6 py-4 text-left font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Service</th>
                  <th className={`px-6 py-4 text-left font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Delivery Time</th>
                  <th className={`px-6 py-4 text-left font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Price</th>
                  <th className={`px-6 py-4 text-left font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className={`border-b transition-colors duration-300 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                  <td className={`px-6 py-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Standard Air Freight</td>
                  <td className={`px-6 py-4 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>7-10 days</td>
                  <td className={`px-6 py-4 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>£9/kg</td>
                  <td className={`px-6 py-4 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Regular shipments</td>
                </tr>
                <tr className={`border-b transition-colors duration-300 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                  <td className={`px-6 py-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Express Shipping</td>
                  <td className={`px-6 py-4 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>3-5 days</td>
                  <td className={`px-6 py-4 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>£18/kg</td>
                  <td className={`px-6 py-4 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Urgent deliveries</td>
                </tr>
                <tr className={`border-b transition-colors duration-300 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                  <td className={`px-6 py-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Buy For Me</td>
                  <td className={`px-6 py-4 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>10-14 days</td>
                  <td className={`px-6 py-4 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>10% + shipping</td>
                  <td className={`px-6 py-4 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Shopping assistance</td>
                </tr>
                <tr>
                  <td className={`px-6 py-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Bulk Shipping</td>
                  <td className={`px-6 py-4 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>7-12 days</td>
                  <td className={`px-6 py-4 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Contact us</td>
                  <td className={`px-6 py-4 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Large shipments</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
      <section className={`py-16 px-4 transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-br from-[#002147] to-[#003366]' : 'bg-gradient-to-br from-[#002147] to-[#003366]'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Ship?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a personalized quote for your shipping needs. Our team is ready to help you choose the best service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white hover:bg-blue-50 text-[#002147] font-bold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Calculator className="mr-2 h-5 w-5" />
              Get a Quote
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