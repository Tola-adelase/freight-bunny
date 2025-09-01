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
  DollarSign,
  Percent,
  Calendar,
  Clock as ClockIcon,
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"

export default function PricingPage() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

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

  const pricingPlans = [
    {
      id: "standard",
      name: "Standard Air Freight",
      icon: Plane,
      price: "£9",
      unit: "per kg",
      description: "Reliable air freight service with standard delivery times",
      features: [
        "7-10 days delivery",
        "Real-time tracking",
        "Basic insurance",
        "Customs documentation",
        "Email support",
        "Standard packaging"
      ],
      restrictions: [
        "Maximum 50kg per package",
        "No dangerous goods",
        "Size restrictions apply"
      ],
      popular: false
    },
    {
      id: "express",
      name: "Express Shipping",
      icon: Zap,
      price: "£18",
      unit: "per kg",
      description: "Priority shipping for urgent deliveries",
      features: [
        "3-5 days delivery",
        "Priority handling",
        "Enhanced insurance",
        "Dedicated support",
        "Express customs clearance",
        "Premium packaging"
      ],
      restrictions: [
        "Maximum 30kg per package",
        "Limited destinations",
        "Additional fees may apply"
      ],
      popular: true
    },
    {
      id: "bulk",
      name: "Bulk Shipping",
      icon: Truck,
      price: "Contact Us",
      unit: "for quote",
      description: "Cost-effective solutions for large shipments",
      features: [
        "Volume discounts",
        "Flexible scheduling",
        "Account manager",
        "Custom solutions",
        "Warehouse storage",
        "Priority support"
      ],
      restrictions: [
        "Minimum volume requirements",
        "Advance booking required",
        "Custom documentation"
      ],
      popular: false
    }
  ]

  const additionalServices = [
    {
      name: "Customs Clearance",
      price: "£25",
      unit: "per shipment",
      description: "Expert assistance with customs documentation and clearance"
    },
    {
      name: "Buy For Me Service",
      price: "10%",
      unit: "service fee",
      description: "We shop for you in the UK and ship to Nigeria"
    },
    {
      name: "Insurance Upgrade",
      price: "£5",
      unit: "per £100 value",
      description: "Enhanced insurance coverage for valuable items"
    },
    {
      name: "Packaging Service",
      price: "£15",
      unit: "per package",
      description: "Professional packaging and preparation"
    }
  ]

  const shippingExamples = [
    {
      item: "Documents (0.5kg)",
      standard: "£4.50",
      express: "£9.00",
      time: "7-10 days / 3-5 days"
    },
    {
      item: "Small Package (2kg)",
      standard: "£18.00",
      express: "£36.00",
      time: "7-10 days / 3-5 days"
    },
    {
      item: "Medium Package (5kg)",
      standard: "£45.00",
      express: "£90.00",
      time: "7-10 days / 3-5 days"
    },
    {
      item: "Large Package (10kg)",
      standard: "£90.00",
      express: "£180.00",
      time: "7-10 days / 3-5 days"
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
              <DollarSign className="w-4 h-4 mr-2" />
              Transparent Pricing
            </Badge>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Simple, Transparent<br />
              <span className="text-blue-600">Pricing</span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              No hidden fees, no surprises. Just clear, competitive pricing for all your shipping needs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <Card 
                key={plan.id}
                className={`relative transition-all duration-300 hover:scale-105 cursor-pointer ${isDarkMode ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-white border-gray-200 hover:bg-gray-50'}`}
                onClick={() => setSelectedPlan(selectedPlan === plan.id ? null : plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <plan.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <CardTitle className={`text-2xl transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center">
                    <span className={`text-4xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                    <span className={`text-lg ml-1 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{plan.unit}</span>
                  </div>
                  <CardDescription className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {selectedPlan === plan.id && (
                    <div className="space-y-4 mt-4">
                      <div>
                        <h4 className={`font-semibold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Features:</h4>
                        <ul className="space-y-1">
                          {plan.features.map((feature, index) => (
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
                          {plan.restrictions.map((restriction, index) => (
                            <li key={index} className={`flex items-center text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                              <Info className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {restriction}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  <div className="mt-6">
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'} text-white`}
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

      {/* Additional Services */}
      <section className={`py-16 px-4 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Additional Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className={`text-center transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                <CardHeader>
                  <CardTitle className={`transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{service.name}</CardTitle>
                  <div className="flex items-baseline justify-center">
                    <span className={`text-2xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{service.price}</span>
                    <span className={`text-sm ml-1 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{service.unit}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Examples */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Shipping Examples</h2>
          <div className={`overflow-x-auto rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
            <table className="w-full">
              <thead>
                <tr className={`border-b transition-colors duration-300 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                  <th className={`px-6 py-4 text-left font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Item</th>
                  <th className={`px-6 py-4 text-left font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Standard</th>
                  <th className={`px-6 py-4 text-left font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Express</th>
                  <th className={`px-6 py-4 text-left font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Delivery Time</th>
                </tr>
              </thead>
              <tbody>
                {shippingExamples.map((example, index) => (
                  <tr key={index} className={`border-b transition-colors duration-300 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    <td className={`px-6 py-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{example.item}</td>
                    <td className={`px-6 py-4 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{example.standard}</td>
                    <td className={`px-6 py-4 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{example.express}</td>
                    <td className={`px-6 py-4 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{example.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className={`py-16 px-4 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Pricing FAQ</h2>
          <div className="space-y-6">
            {[
              {
                question: "Are there any hidden fees?",
                answer: "No, we believe in complete transparency. All our prices are clearly stated with no hidden charges. You'll know exactly what you're paying for upfront."
              },
              {
                question: "Do you offer volume discounts?",
                answer: "Yes, we offer competitive volume discounts for bulk shipments. Contact us for a personalized quote based on your shipping volume."
              },
              {
                question: "What's included in the shipping price?",
                answer: "Our prices include air freight, basic insurance, customs documentation, and tracking. Additional services like express handling or enhanced insurance are extra."
              },
              {
                question: "How do you calculate shipping costs?",
                answer: "We calculate costs based on the actual weight of your package. For larger items, we may also consider dimensional weight. Contact us for an accurate quote."
              },
              {
                question: "Do you offer refunds if delivery is delayed?",
                answer: "While we strive for on-time delivery, we don't offer refunds for delays as they're often beyond our control. We do provide real-time tracking and updates."
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Ship?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a personalized quote based on your specific shipping needs.
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