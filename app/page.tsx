"use client"

import React, { useState, useEffect } from "react"
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
} from "lucide-react"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"
import { SimpleSelect } from "../components/ui/select"
import { Checkbox } from "../components/ui/checkbox"
import { Separator } from "../components/ui/separator"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../components/ui/dialog"

export default function FreightBunnyHome() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isShipNowModalOpen, setIsShipNowModalOpen] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/buy-for-me", label: "Buy For Me" },
    { href: "/pricing", label: "Pricing" },
    { href: "#contact", label: "Contact Us" },
  ]
  const [trackingNumber, setTrackingNumber] = useState("")
  const [quoteForm, setQuoteForm] = useState({
    weight: "",
    dimensions: "",
    from: "UK",
    to: "Nigeria",
    packageType: "",
  })
  const [currentStep, setCurrentStep] = useState(1)
  const [shipNowForm, setShipNowForm] = useState({
    // Sender Information
    senderName: "",
    senderEmail: "",
    senderPhone: "",
    senderAddress: "",
    senderCity: "",
    senderPostcode: "",
    senderCountry: "United Kingdom",

    // Recipient Information
    recipientName: "",
    recipientEmail: "",
    recipientPhone: "",
    recipientAddress: "",
    recipientCity: "",
    recipientState: "",
    recipientCountry: "Nigeria",

    // Package Information
    packageType: "",
    weight: "",
    length: "",
    width: "",
    height: "",
    value: "",
    description: "",
    shippingService: "",

    // Additional Options
    insurance: true,
    signature: false,
    tracking: true,
  })
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null)

  const initialQuoteForm = {
    weight: "",
    packageType: "",
    customPackageType: "",
    from: "UK",
    to: "Nigeria",
    deliveryLocation: "",
    deliveryAddress: "",
    needsDelivery: true,
    senderName: "",
    senderEmail: "",
    senderPhone: "",
  };

  const [quoteCalculatorForm, setQuoteCalculatorForm] = useState(initialQuoteForm)

  // Function to reset quote form to initial state
  const resetQuoteForm = () => {
    setQuoteCalculatorForm(initialQuoteForm);
    setCalculatedQuote(null);
    setQuoteDetailsModal(false);
    setIsSubmittingQuote(false);
  }

  const [calculatedQuote, setCalculatedQuote] = useState<{
    weight: number;
    shippingCost: number;
    handlingFee: number;
    deliveryFee: number;
    deliveryFeeCurrency: string;
    totalGBP: number;
    from: string;
    to: string;
    packageType: string;
    deliveryLocation: string;
    needsDelivery: boolean;
  } | null>(null)
  const [isSubmittingQuote, setIsSubmittingQuote] = useState(false)
  const [quoteDetailsModal, setQuoteDetailsModal] = useState(false)

  // Nigerian states by delivery zones
  const nigerianZones = {
    "Zone 1": {
      states: ["Lagos"],
      rates: { "0-10kg": 10000, "11-30kg": 25000, "31-50kg": 35000, "above50kg": 500 }
    },
    "Zone 2": {
      states: ["Oyo", "Ogun", "Ekiti", "Ondo", "Osun"],
      rates: { "0-10kg": 13000, "11-30kg": 28000, "31-50kg": 38000, "above50kg": 650 }
    },
    "Zone 3": {
      states: ["Benue", "Kogi", "Kwara", "Nassarawa", "Niger", "Plateau", "Abuja (FCT)"],
      rates: { "0-10kg": 15000, "11-30kg": 30000, "31-50kg": 40000, "above50kg": 900 }
    },
    "Zone 4": {
      states: ["Akwa Ibom", "Bayelsa", "Rivers", "Cross River", "Delta", "Edo"],
      rates: { "0-10kg": 17000, "11-30kg": 33000, "31-50kg": 45000, "above50kg": 1000 }
    },
    "Zone 5": {
      states: ["Abia", "Anambra", "Ebonyi", "Enugu", "Imo"],
      rates: { "0-10kg": 20000, "11-30kg": 36000, "31-50kg": 48000, "above50kg": 1150 }
    },
    "Zone 6": {
      states: ["Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Sokoto", "Zamfara"],
      rates: { "0-10kg": 22000, "11-30kg": 40000, "31-50kg": 50000, "above50kg": 1250 }
    },
    "Zone 7": {
      states: ["Adamawa", "Bauchi", "Borno", "Gombe", "Taraba", "Yobe"],
      rates: { "0-10kg": 25000, "11-30kg": 45000, "31-50kg": 55000, "above50kg": 1400 }
    }
  };

  const handleQuoteFormChange = (field: string, value: string | boolean) => {
    const updatedForm = { ...quoteCalculatorForm, [field]: value };
    
    // Clear custom package type when package type changes to something other than "other"
    if (field === "packageType" && value !== "other") {
      updatedForm.customPackageType = "";
    }
    
    // Clear delivery address when switching from delivery to pickup
    if (field === "needsDelivery" && !value) {
      updatedForm.deliveryAddress = "";
    }
    
    setQuoteCalculatorForm(updatedForm);
    
    // Recalculate quote when relevant fields change
    if (['weight', 'packageType', 'customPackageType', 'from', 'to', 'deliveryLocation', 'deliveryAddress', 'needsDelivery'].includes(field)) {
      setTimeout(() => calculateQuote(updatedForm), 100);
    }
  };

  const calculateQuote = (formData: typeof quoteCalculatorForm) => {
    const weight = parseFloat(formData.weight);
    if (!weight || weight <= 0) {
      setCalculatedQuote(null);
      return;
    }

    const actualWeight = Math.max(weight, 1); // Minimum 1kg
    let shippingCost = actualWeight * 9; // £9 per kg base rate
    let handlingFee = 0;
    let deliveryFee = 0;
    let deliveryFeeCurrency = "";
    
    // Calculate handling fees
    if (formData.from === "UK" && formData.to === "Nigeria") {
      // Special item handling fees
      if (formData.packageType === "phones") handlingFee = 20;
      else if (formData.packageType === "ipads") handlingFee = 20;
      else if (formData.packageType === "laptops") handlingFee = 30;
      else handlingFee = 30; // General handling fee
      
      // Calculate delivery fee within Nigeria (convert to GBP)
      if (formData.needsDelivery && formData.deliveryAddress) {
        // For address delivery, we can estimate the zone based on major cities mentioned
        // or apply a standard delivery rate in GBP
        let ngnDeliveryFee = 0;
        
        // Check if major cities are mentioned in the address for zone estimation
        const address = formData.deliveryAddress.toLowerCase();
        let estimatedZone = null;
        
                 if (address.includes('lagos') || address.includes('abuja')) {
           estimatedZone = nigerianZones['Zone 1'];
         } else if (address.includes('ogun') || address.includes('oyo') || address.includes('osun') || 
                    address.includes('ondo') || address.includes('ekiti') || address.includes('kwara') || 
                    address.includes('kogi') || address.includes('niger') || address.includes('kaduna') || 
                    address.includes('kano')) {
           estimatedZone = nigerianZones['Zone 2'];
         } else {
           // Default to Zone 3 for other areas
           estimatedZone = nigerianZones['Zone 3'];
         }
        
        if (estimatedZone) {
          const rates = estimatedZone.rates;
          if (actualWeight <= 10) ngnDeliveryFee = rates["0-10kg"];
          else if (actualWeight <= 30) ngnDeliveryFee = rates["11-30kg"];
          else if (actualWeight <= 50) ngnDeliveryFee = rates["31-50kg"];
          else ngnDeliveryFee = actualWeight * rates["above50kg"];
          
          // Convert NGN to GBP (approximate rate: 1 GBP = 1800 NGN)
          const ngnToGbpRate = 1800;
          deliveryFee = Math.round((ngnDeliveryFee / ngnToGbpRate) * 100) / 100; // Round to 2 decimal places
          deliveryFeeCurrency = "GBP";
        }
      }
    } else if (formData.from === "Nigeria" && formData.to === "UK") {
      handlingFee = 5; // £5 handling fee for Nigeria to UK
      
      // Calculate delivery fee within UK
      if (formData.needsDelivery) {
        if (actualWeight <= 2) deliveryFee = 5;
        else if (actualWeight <= 5) deliveryFee = 9;
        else if (actualWeight <= 10) deliveryFee = 13;
        else {
          deliveryFee = 0; // Customer arranges delivery for 10kg+
          deliveryFeeCurrency = "ARRANGE";
        }
        
        if (deliveryFeeCurrency !== "ARRANGE") {
          deliveryFeeCurrency = "GBP";
        }
      }
    }

    const totalGBP = shippingCost + handlingFee + (deliveryFeeCurrency === "GBP" ? deliveryFee : 0);
    
    setCalculatedQuote({
      weight: actualWeight,
      shippingCost,
      handlingFee,
      deliveryFee,
      deliveryFeeCurrency,
      totalGBP,
      from: formData.from,
      to: formData.to,
      packageType: formData.packageType,
      deliveryLocation: formData.deliveryLocation,
      needsDelivery: formData.needsDelivery
    });
  };

  const handleQuoteSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!calculatedQuote || !quoteCalculatorForm.senderName || !quoteCalculatorForm.senderEmail || !quoteCalculatorForm.senderPhone) return;
    if (quoteCalculatorForm.packageType === "other" && !quoteCalculatorForm.customPackageType) return;
    if (!quoteCalculatorForm.deliveryLocation) return;
    if (quoteCalculatorForm.needsDelivery && !quoteCalculatorForm.deliveryAddress) return;
    
    setIsSubmittingQuote(true);
    
    try {
      // Prepare quote data for API submission
      const quoteData = {
        customerInfo: {
          name: quoteCalculatorForm.senderName,
          email: quoteCalculatorForm.senderEmail,
          phone: quoteCalculatorForm.senderPhone
        },
        shippingDetails: {
          weight: quoteCalculatorForm.weight,
          packageType: quoteCalculatorForm.packageType,
          customPackageType: quoteCalculatorForm.customPackageType,
          from: quoteCalculatorForm.from,
          to: quoteCalculatorForm.to,
          deliveryLocation: quoteCalculatorForm.deliveryLocation,
          deliveryAddress: quoteCalculatorForm.deliveryAddress,
          needsDelivery: quoteCalculatorForm.needsDelivery
        },
        quote: calculatedQuote
      };
      
      // Submit to API (and Google Sheets)
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quoteData),
      });
      
      // Always show quote details modal to customer first
      setQuoteDetailsModal(true);
      
      const result = await response.json();
      
      if (result.success) {
        // Success message after showing quote
        setTimeout(() => {
          alert("✅ Quote submitted successfully! Your quote has been saved and you'll receive a follow-up within 2 hours.");
        }, 500);
      } else {
        // Show success message even if submission fails
        setTimeout(() => {
          alert("✅ Quote generated successfully! Note: We're experiencing technical issues with our system, but your quote is displayed in the popup. Please save this information and contact us directly to proceed.");
        }, 500);
      }
      
    } catch (error) {
      console.error('Error submitting quote:', error);
      // Show quote details modal even if API fails
      setQuoteDetailsModal(true);
      setTimeout(() => {
        alert("✅ Quote generated successfully! Note: We're experiencing technical issues with our system, but your quote is displayed in the popup. Please save this information and contact us directly to proceed.");
      }, 500);
    } finally {
      setIsSubmittingQuote(false);
    }
  };

  // Add useEffect to recalculate quote when form changes
  useEffect(() => {
    if (quoteCalculatorForm.weight && quoteCalculatorForm.from && quoteCalculatorForm.to) {
      const timer = setTimeout(() => {
        calculateQuote(quoteCalculatorForm);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setCalculatedQuote(null);
    }
  }, [quoteCalculatorForm]);

  type ShipNowFormField = keyof typeof shipNowForm;

  const handleShipNowFormChange = (field: ShipNowFormField, value: string | boolean) => {
    setShipNowForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateEstimate = () => {
    const weight = Number.parseFloat(shipNowForm.weight) || 0
    const baseRate = shipNowForm.shippingService === "express" ? 25 : 15
    const cost = weight * baseRate
    setEstimatedCost(cost)
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
      if (currentStep === 3) {
        calculateEstimate()
      }
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmitShipNow = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Ship Now form submitted:", shipNowForm);
    alert("Thank you! Your shipping request has been submitted. We'll contact you within 2 hours to arrange pickup and payment.");
    setIsShipNowModalOpen(false);
    setCurrentStep(1);
    // Reset form
    setShipNowForm({
      // Sender Information
      senderName: "",
      senderEmail: "",
      senderPhone: "",
      senderAddress: "",
      senderCity: "",
      senderPostcode: "",
      senderCountry: "United Kingdom",

      // Recipient Information
      recipientName: "",
      recipientEmail: "",
      recipientPhone: "",
      recipientAddress: "",
      recipientCity: "",
      recipientState: "",
      recipientCountry: "Nigeria",

      // Package Information
      packageType: "",
      weight: "",
      length: "",
      width: "",
      height: "",
      value: "",
      description: "",
      shippingService: "",

      // Additional Options
      insurance: true,
      signature: false,
      tracking: true,
    });
    setEstimatedCost(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-3 sm:py-4">
            <div className="flex items-center space-x-2">
              <img
                src="/images/Headerlogo.jpg"
                alt="FreightBunny Logo"
                className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
              />
              <span className="text-lg sm:text-xl font-bold text-blue-900">Freight Bunny</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none rounded-lg hover:bg-gray-100 transition-colors"
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
              isMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
            } overflow-hidden bg-white border-t border-gray-100`}
          >
            <nav className="py-4 flex flex-col items-center space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-semibold transition-colors px-4 py-2 rounded-lg w-full max-w-xs text-center ${
                    (pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href)))
                      ? "text-blue-900 bg-blue-50 border border-blue-200"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-64px)] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f6faff] via-[#eaf3fb] to-[#f6faff] overflow-hidden">
        {/* Abstract Shape for Visual Interest */}
        <div className="absolute -top-24 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-blue-100 via-blue-50 to-transparent rounded-full blur-3xl opacity-60 z-0"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tr from-blue-100 via-blue-50 to-transparent rounded-full blur-2xl opacity-50 z-0"></div>

        <div className="container mx-auto flex flex-col justify-center items-center h-full min-h-[60vh] relative z-10 py-8">
          {/* Badge */}
          <div className="mb-6 sm:mb-7">
            <span className="inline-flex items-center px-3 py-1.5 sm:px-4 rounded-full bg-gradient-to-r from-[#e0eaff] to-[#c7e0ff] text-[#002147] text-sm sm:text-base font-semibold shadow-md">
              <Plane className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#002147]" />
              Fast, Reliable Air Freight
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111827] text-center mb-1 leading-tight px-2">
            UK ↔ Nigeria Shipping
          </h1>
          <div className="relative flex justify-center mb-4 sm:mb-6">
            <span className="block text-[#002147] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center px-2 relative">
              Made Easy
              <span className="absolute left-1/2 -bottom-1 w-3/4 h-1.5 sm:h-2 bg-blue-100 rounded-full -translate-x-1/2 z-[-1]"></span>
            </span>
          </div>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 font-medium text-center mb-2 px-4">
            Fast, reliable, and affordable shipping between the UK and Nigeria.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 text-center mb-6 sm:mb-8 px-4">
            Transparent pricing, real-time updates, and a personal touch.
          </p>

          {/* Pricing Card */}
          <div className="mb-6 sm:mb-8 flex justify-center w-full px-4">
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 max-w-sm sm:max-w-md w-full border border-gray-100 flex flex-col items-center">
              <div className="flex items-center justify-center mb-2">
                <Package className="w-5 h-5 sm:w-6 sm:h-6 text-[#002147] mr-2" />
                <p className="text-gray-500 font-semibold text-sm sm:text-base">Prices starting from</p>
              </div>
              <div className="mb-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#002147]">£9</span>
                <span className="text-base sm:text-lg font-medium text-gray-700">/kg</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 text-center">Delivery: 7–10 days after shipment (may vary)</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center w-full max-w-lg sm:max-w-2xl px-4">
            <Button
              size="lg"
              variant="outline"
              className="bg-white hover:bg-[#f3f4f6] border-2 border-[#002147] text-[#002147] shadow-md px-6 py-4 text-base font-semibold rounded-lg flex items-center justify-center w-full transition-transform duration-200 hover:scale-105"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                resetQuoteForm(); // Reset form to fresh state
                setIsQuoteModalOpen(true);
              }}
            >
              <Calculator className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
              Get Free Quote
            </Button>
            <Button
              size="lg"
              className="bg-[#002147] hover:bg-[#001634] text-white shadow-lg border-0 px-6 py-4 text-base font-semibold rounded-lg flex items-center justify-center w-full transition-transform duration-200 hover:scale-105"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                console.log("Main Ship Now button clicked");
                setIsShipNowModalOpen(true);
                console.log("Ship Now modal state set to true");
              }}
            >
              <Package className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
              Ship Now
            </Button>
          </div>

          {/* Trust Indicators Row */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-3 sm:gap-6 mb-8 sm:mb-10 px-4">
            <div className="flex items-center gap-2 text-gray-700 text-xs sm:text-sm">
              <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 text-xs sm:text-sm">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 flex-shrink-0" />
              <span>Real-time Tracking</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 text-xs sm:text-sm">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 flex-shrink-0" />
              <span>5-Star Service</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 text-xs sm:text-sm">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
              <span>No Hidden Fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tracking */}
      <section id="tracking" className="py-12 sm:py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Track Your Package</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 px-2">Enter your tracking number to get real-time updates</p>
            <div className="flex flex-col gap-3 sm:gap-2 max-w-2xl mx-auto w-full">
              <input
                type="text"
                placeholder="Enter tracking number (e.g., FB123456789)"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-1 px-4 py-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 text-sm sm:text-base"
              />
              <Button className="bg-[#002147] hover:bg-[#001634] text-white font-semibold px-6 py-4 sm:py-3 text-base rounded-lg shadow-lg flex items-center justify-center w-full sm:w-auto transition-transform duration-200 hover:scale-105 cursor-pointer">
                <Search className="h-4 w-4 mr-2" />
                Track
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Shipping Services Section */}
      <section className="py-12 sm:py-16 px-4 bg-[#f6faff]">
        <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827] mb-4">Our Shipping Services</h2>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Service 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 flex flex-col items-center min-h-[300px] sm:min-h-[280px]">
            <h3 className="text-lg sm:text-xl font-bold text-[#002147] mb-3 text-center">Air Freight UK → Nigeria</h3>
            <p className="text-gray-700 mb-2 text-center text-sm sm:text-base leading-relaxed">Weekly shipments, safe handling, and fast delivery. We handle your cargo with care and keep you updated every step of the way.</p>
            <p className="text-xs sm:text-sm text-gray-500 mb-4 text-center">Delivery: 7–10 days after shipment (may vary). Customer can arrange their own delivery if preferred.</p>
            <a href="#contact" className="mt-auto inline-block bg-[#002147] hover:bg-[#001634] text-white font-semibold px-5 sm:px-6 py-3 text-sm sm:text-base rounded-lg shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-105 w-full sm:w-auto">Get a Quote</a>
          </div>
          {/* Service 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 flex flex-col items-center min-h-[300px] sm:min-h-[280px]">
            <h3 className="text-lg sm:text-xl font-bold text-[#002147] mb-3 text-center">Air Freight Nigeria → UK</h3>
            <p className="text-gray-700 mb-2 text-center text-sm sm:text-base leading-relaxed">Secure, efficient, and hassle-free shipping from Nigeria to the UK. Customs support included.</p>
            <p className="text-xs sm:text-sm text-gray-500 mb-4 text-center">Delivery: Will be determined when item arrives. Customer can arrange their own delivery if preferred.</p>
            <a href="#contact" className="mt-auto inline-block bg-[#002147] hover:bg-[#001634] text-white font-semibold px-5 sm:px-6 py-3 text-sm sm:text-base rounded-lg shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-105 w-full sm:w-auto">Get a Quote</a>
          </div>
          {/* Service 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 flex flex-col items-center min-h-[300px] sm:min-h-[280px]">
            <h3 className="text-lg sm:text-xl font-bold text-[#002147] mb-3 text-center">Customs Clearance Support</h3>
            <p className="text-gray-700 mb-2 text-center text-sm sm:text-base leading-relaxed">We help you with all paperwork and customs clearance, ensuring your shipments move smoothly and without delays.</p>
            <div className="flex-1"></div>
            <a href="#contact" className="mt-auto inline-block bg-[#002147] hover:bg-[#001634] text-white font-semibold px-5 sm:px-6 py-3 text-sm sm:text-base rounded-lg shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-105 w-full sm:w-auto">Learn More</a>
          </div>
        </div>
      </section>

      {/* Why Ship With Us Section */}
      <section className="py-12 sm:py-16 px-4 bg-[#f6faff]">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827] mb-4">Why Ship With Us?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 px-2">
              We're passionate about connecting families and businesses across continents. With transparent pricing, real-time updates, and a personal touch, we make shipping easy and stress-free. Our team is dedicated to making international shipping simple, affordable, and reliable.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex flex-col items-center bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                <span className="text-2xl sm:text-3xl mb-2">🚚</span>
                <h3 className="font-bold text-base sm:text-lg mb-1 text-[#002147] text-center">Fast Delivery</h3>
                <p className="text-gray-600 text-xs sm:text-sm text-center leading-relaxed">Weekly shipments, 7–10 day delivery, and real-time updates.</p>
              </div>
              <div className="flex flex-col items-center bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                <span className="text-2xl sm:text-3xl mb-2">💷</span>
                <h3 className="font-bold text-base sm:text-lg mb-1 text-[#002147] text-center">Transparent Pricing</h3>
                <p className="text-gray-600 text-xs sm:text-sm text-center leading-relaxed">Just £9/kg, no hidden fees, and clear invoicing.</p>
              </div>
              <div className="flex flex-col items-center bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                <span className="text-2xl sm:text-3xl mb-2">🤝</span>
                <h3 className="font-bold text-base sm:text-lg mb-1 text-[#002147] text-center">Personal Service</h3>
                <p className="text-gray-600 text-xs sm:text-sm text-center leading-relaxed">We treat your packages like our own and keep you informed every step.</p>
              </div>
              <div className="flex flex-col items-center bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                <span className="text-2xl sm:text-3xl mb-2">📦</span>
                <h3 className="font-bold text-base sm:text-lg mb-1 text-[#002147] text-center">Flexible Delivery</h3>
                <p className="text-gray-600 text-xs sm:text-sm text-center leading-relaxed">Choose doorstep delivery or arrange your own pickup in Lagos.</p>
              </div>
            </div>
            <a href="#contact" className="inline-block bg-[#002147] hover:bg-[#001634] text-white font-semibold px-6 py-3 text-sm sm:text-base rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 w-full sm:w-auto max-w-xs mx-auto">Contact Us</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-700 text-lg font-medium">
                Got questions, shipping dreams, or just want to say hi? We're all ears—and boxes!<br />
                Reach out for anything you need, and don't forget to follow us on social media for the latest updates, tips, and a sprinkle of shipping magic.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg border shadow-sm">
                <div className="p-6 border-b">
                  <h3 className="text-xl font-extrabold text-gray-900">Contact Information</h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-900">UK Office</p>
                        <p className="text-base font-medium text-gray-800">+44 7392 171558</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-semibold text-gray-900">Nigeria Office</p>
                        <p className="text-base font-medium text-gray-800">+234 1 234 5678</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-purple-600" />
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <p className="text-base font-medium text-gray-800">hello@freightbunny.com</p>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Business Hours</p>
                    <p className="text-sm text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM (GMT)</p>
                    <p className="text-sm text-gray-700">Saturday: 10:00 AM - 4:00 PM (GMT)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm">
                <div className="p-6 border-b">
                  <h3 className="text-xl font-extrabold text-gray-900">Follow Us</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-3">
                    <a href="https://www.facebook.com/share/16Wjxof9Gd/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <Facebook className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">Facebook</p>
                        <p className="text-sm text-gray-700">@freightbunny</p>
                      </div>
                    </a>
                    <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <Twitter className="h-5 w-5 text-blue-400" />
                      <div>
                        <p className="font-medium text-gray-900">Twitter/X</p>
                        <p className="text-sm text-gray-700">@freightbunny</p>
                      </div>
                    </a>
                    <a href="https://www.linkedin.com/company/freightbunny/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <Linkedin className="h-5 w-5 text-blue-700" />
                      <div>
                        <p className="font-medium text-gray-900">LinkedIn</p>
                        <p className="text-sm text-gray-700">FreightBunny</p>
                      </div>
                    </a>
                    <a href="https://www.instagram.com/shipwithbunny?igsh=MXNpaGpwZnllbDg0ag==" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <Instagram className="h-5 w-5 text-pink-600" />
                      <div>
                        <p className="font-medium text-gray-900">Instagram</p>
                        <p className="text-sm text-gray-700">@shipwithbunny</p>
                      </div>
                    </a>
                    <a href="https://wa.me/447392171558" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <MessageCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-gray-900">WhatsApp</p>
                        <p className="text-sm text-gray-700">+44 7392 171558</p>
                      </div>
                    </a>
                    <a href="https://www.tiktok.com/@freightbunny?_t=ZN-8xI2uoApuII&_r=1" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <Music className="h-5 w-5 text-black" />
                      <div>
                        <p className="font-medium text-gray-900">TikTok</p>
                        <p className="text-sm text-gray-700">@freightbunny</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm">
                <div className="p-6 border-b">
                  <h3 className="text-xl font-extrabold text-gray-900">Send us a Message</h3>
                </div>
                <div className="p-6">
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                      <input
                        id="name"
                        placeholder="Your name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
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
                  <a href="https://twitter.com/freightbunny" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start space-x-2 hover:text-white transition-colors">
                    <Twitter className="h-4 w-4 text-blue-400" />
                    <span>Twitter/X</span>
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

      {/* Ship Now Modal */}
      <Dialog open={isShipNowModalOpen} onOpenChange={setIsShipNowModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center text-2xl">
              <Package className="mr-3 h-6 w-6 text-blue-600" />
              Ship a Package
            </DialogTitle>
            <DialogDescription>Complete the form below to ship your package from UK to Nigeria</DialogDescription>
          </DialogHeader>

          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-8">
            {[
              { number: 1, title: "Sender Details", icon: User },
              { number: 2, title: "Recipient Details", icon: MapPin },
              { number: 3, title: "Package Details", icon: Package },
              { number: 4, title: "Review & Pay", icon: CreditCard },
            ].map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    currentStep >= step.number
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "border-gray-300 text-gray-400"
                  }`}
                >
                  {currentStep > step.number ? <CheckCircle className="h-5 w-5" /> : <step.icon className="h-5 w-5" />}
                </div>
                <div className="ml-3 hidden sm:block">
                  <p className={`text-sm font-medium ${currentStep >= step.number ? "text-blue-600" : "text-gray-400"}`}>
                    Step {step.number}
                  </p>
                  <p className={`text-xs ${currentStep >= step.number ? "text-gray-900" : "text-gray-400"}`}>
                    {step.title}
                  </p>
                </div>
                {index < 3 && <ArrowRight className="mx-4 h-4 w-4 text-gray-400 hidden sm:block" />}
              </div>
            ))}
          </div>

          {/* Step 1: Sender Information */}
          {currentStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Sender Information
                </CardTitle>
                <CardDescription>Enter your details as the sender</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="senderName">Full Name *</Label>
                    <Input
                      id="senderName"
                      value={shipNowForm.senderName}
                      onChange={(e) => handleShipNowFormChange("senderName", e.target.value)}
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <Label htmlFor="senderEmail">Email Address *</Label>
                    <Input
                      id="senderEmail"
                      type="email"
                      value={shipNowForm.senderEmail}
                      onChange={(e) => handleShipNowFormChange("senderEmail", e.target.value)}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="senderPhone">Phone Number *</Label>
                    <Input
                      id="senderPhone"
                      value={shipNowForm.senderPhone}
                      onChange={(e) => handleShipNowFormChange("senderPhone", e.target.value)}
                      placeholder="+44 20 1234 5678"
                    />
                  </div>
                  <div>
                    <Label htmlFor="senderCountry">Country</Label>
                    <SimpleSelect
                      value={shipNowForm.senderCountry}
                      onValueChange={(value) => handleShipNowFormChange("senderCountry", value)}
                    >
                      <option value="United Kingdom">United Kingdom</option>
                    </SimpleSelect>
                  </div>
                </div>
                <div>
                  <Label htmlFor="senderAddress">Address *</Label>
                  <Input
                    id="senderAddress"
                    value={shipNowForm.senderAddress}
                    onChange={(e) => handleShipNowFormChange("senderAddress", e.target.value)}
                    placeholder="123 High Street"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="senderCity">City *</Label>
                    <Input
                      id="senderCity"
                      value={shipNowForm.senderCity}
                      onChange={(e) => handleShipNowFormChange("senderCity", e.target.value)}
                      placeholder="London"
                    />
                  </div>
                  <div>
                    <Label htmlFor="senderPostcode">Postcode *</Label>
                    <Input
                      id="senderPostcode"
                      value={shipNowForm.senderPostcode}
                      onChange={(e) => handleShipNowFormChange("senderPostcode", e.target.value)}
                      placeholder="SW1A 1AA"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Recipient Information */}
          {currentStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  Recipient Information
                </CardTitle>
                <CardDescription>Enter the recipient's details in Nigeria</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="recipientName">Full Name *</Label>
                    <Input
                      id="recipientName"
                      value={shipNowForm.recipientName}
                      onChange={(e) => handleShipNowFormChange("recipientName", e.target.value)}
                      placeholder="Adebayo Johnson"
                    />
                  </div>
                  <div>
                    <Label htmlFor="recipientEmail">Email Address</Label>
                    <Input
                      id="recipientEmail"
                      type="email"
                      value={shipNowForm.recipientEmail}
                      onChange={(e) => handleShipNowFormChange("recipientEmail", e.target.value)}
                      placeholder="adebayo@example.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="recipientPhone">Phone Number *</Label>
                    <Input
                      id="recipientPhone"
                      value={shipNowForm.recipientPhone}
                      onChange={(e) => handleShipNowFormChange("recipientPhone", e.target.value)}
                      placeholder="+234 1 234 5678"
                    />
                  </div>
                  <div>
                    <Label htmlFor="recipientCountry">Country</Label>
                    <SimpleSelect
                      value={shipNowForm.recipientCountry}
                      onValueChange={(value) => handleShipNowFormChange("recipientCountry", value)}
                    >
                      <option value="Nigeria">Nigeria</option>
                    </SimpleSelect>
                  </div>
                </div>
                <div>
                  <Label htmlFor="recipientAddress">Address *</Label>
                  <Input
                    id="recipientAddress"
                    value={shipNowForm.recipientAddress}
                    onChange={(e) => handleShipNowFormChange("recipientAddress", e.target.value)}
                    placeholder="15 Victoria Island Road"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="recipientCity">City *</Label>
                    <Input
                      id="recipientCity"
                      value={shipNowForm.recipientCity}
                      onChange={(e) => handleShipNowFormChange("recipientCity", e.target.value)}
                      placeholder="Lagos"
                    />
                  </div>
                  <div>
                    <Label htmlFor="recipientState">State *</Label>
                    <SimpleSelect
                      value={shipNowForm.recipientState}
                      onValueChange={(value) => handleShipNowFormChange("recipientState", value)}
                    >
                      <option value="">Select state</option>
                      <option value="Lagos">Lagos</option>
                      <option value="Abuja">Abuja (FCT)</option>
                      <option value="Kano">Kano</option>
                      <option value="Rivers">Rivers</option>
                      <option value="Oyo">Oyo</option>
                      <option value="Other">Other</option>
                    </SimpleSelect>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Package Information */}
          {currentStep === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="mr-2 h-5 w-5" />
                  Package Information
                </CardTitle>
                <CardDescription>Provide details about your package</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="packageType">Package Type *</Label>
                    <SimpleSelect 
                      value={shipNowForm.packageType} 
                      onValueChange={(value) => handleShipNowFormChange("packageType", value)}
                    >
                      <option value="">Select package type</option>
                      <option value="documents">Documents</option>
                      <option value="electronics">Electronics</option>
                      <option value="clothing">Clothing</option>
                      <option value="food">Food Items</option>
                      <option value="gifts">Gifts</option>
                      <option value="other">Other</option>
                    </SimpleSelect>
                  </div>
                  <div>
                    <Label htmlFor="weight">Weight (kg) *</Label>
                    <Input
                      id="weight"
                      type="number"
                      step="0.1"
                      value={shipNowForm.weight}
                      onChange={(e) => handleShipNowFormChange("weight", e.target.value)}
                      placeholder="2.5"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium">Dimensions (cm) *</Label>
                  <div className="grid grid-cols-3 gap-4 mt-2">
                    <div>
                      <Label htmlFor="length" className="text-sm">Length</Label>
                      <Input
                        id="length"
                        type="number"
                        value={shipNowForm.length}
                        onChange={(e) => handleShipNowFormChange("length", e.target.value)}
                        placeholder="30"
                      />
                    </div>
                    <div>
                      <Label htmlFor="width" className="text-sm">Width</Label>
                      <Input
                        id="width"
                        type="number"
                        value={shipNowForm.width}
                        onChange={(e) => handleShipNowFormChange("width", e.target.value)}
                        placeholder="20"
                      />
                    </div>
                    <div>
                      <Label htmlFor="height" className="text-sm">Height</Label>
                      <Input
                        id="height"
                        type="number"
                        value={shipNowForm.height}
                        onChange={(e) => handleShipNowFormChange("height", e.target.value)}
                        placeholder="15"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="value">Declared Value (£) *</Label>
                    <Input
                      id="value"
                      type="number"
                      step="0.01"
                      value={shipNowForm.value}
                      onChange={(e) => handleShipNowFormChange("value", e.target.value)}
                      placeholder="100.00"
                    />
                  </div>
                  <div>
                    <Label htmlFor="shippingService">Shipping Service *</Label>
                    <SimpleSelect
                      value={shipNowForm.shippingService}
                      onValueChange={(value) => handleShipNowFormChange("shippingService", value)}
                    >
                      <option value="">Select service</option>
                      <option value="standard">Standard (7-10 days) - £9/kg</option>
                      <option value="express">Express (3-5 days) - £15/kg</option>
                    </SimpleSelect>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Package Description *</Label>
                  <Textarea
                    id="description"
                    value={shipNowForm.description}
                    onChange={(e) => handleShipNowFormChange("description", e.target.value)}
                    placeholder="Describe the contents of your package in detail"
                    rows={3}
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-base font-medium">Additional Services</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="insurance"
                        checked={shipNowForm.insurance}
                        onCheckedChange={(checked) => handleShipNowFormChange("insurance", checked as boolean)}
                      />
                      <Label htmlFor="insurance" className="text-sm">
                        Insurance Coverage (Recommended) - Free
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="signature"
                        checked={shipNowForm.signature}
                        onCheckedChange={(checked) => handleShipNowFormChange("signature", checked as boolean)}
                      />
                      <Label htmlFor="signature" className="text-sm">
                        Signature Required - £5
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="tracking"
                        checked={shipNowForm.tracking}
                        onCheckedChange={(checked) => handleShipNowFormChange("tracking", checked as boolean)}
                      />
                      <Label htmlFor="tracking" className="text-sm">
                        SMS Tracking Updates - Free
                      </Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Review & Payment */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="mr-2 h-5 w-5" />
                    Shipping Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Service:</span>
                      <Badge variant="outline">
                        {shipNowForm.shippingService === "express" ? "Express (3-5 days)" : "Standard (7-10 days)"}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Weight:</span>
                      <span>{shipNowForm.weight} kg</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Base Cost:</span>
                      <span>£{estimatedCost?.toFixed(2)}</span>
                    </div>
                    {shipNowForm.signature && (
                      <div className="flex justify-between items-center">
                        <span>Signature Required:</span>
                        <span>£5.00</span>
                      </div>
                    )}
                    <Separator />
                    <div className="flex justify-between items-center font-bold text-lg">
                      <span>Total:</span>
                      <span>£{((estimatedCost || 0) + (shipNowForm.signature ? 5 : 0)).toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Shipping Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">From:</h4>
                      <p className="text-sm text-gray-600">
                        {shipNowForm.senderName}
                        <br />
                        {shipNowForm.senderAddress}
                        <br />
                        {shipNowForm.senderCity}, {shipNowForm.senderPostcode}
                        <br />
                        {shipNowForm.senderCountry}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">To:</h4>
                      <p className="text-sm text-gray-600">
                        {shipNowForm.recipientName}
                        <br />
                        {shipNowForm.recipientAddress}
                        <br />
                        {shipNowForm.recipientCity}, {shipNowForm.recipientState}
                        <br />
                        {shipNowForm.recipientCountry}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Package:</h4>
                    <p className="text-sm text-gray-600">
                      {shipNowForm.packageType} - {shipNowForm.weight}kg
                      <br />
                      Dimensions: {shipNowForm.length} × {shipNowForm.width} × {shipNowForm.height} cm
                      <br />
                      Value: £{shipNowForm.value}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Payment Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <div className="flex items-center space-x-2 text-blue-800">
                      <Shield className="h-5 w-5" />
                      <span className="font-medium">Secure Payment</span>
                    </div>
                    <p className="text-sm text-blue-700 mt-1">Your payment information is encrypted and secure</p>
                  </div>
                  <p className="text-sm text-gray-600">
                    You will be redirected to our secure payment processor to complete your transaction.
                  </p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6 border-t">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center bg-transparent"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>

            {currentStep < 4 ? (
              <Button onClick={nextStep} className="flex items-center">
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={() => handleSubmitShipNow()} className="bg-green-600 hover:bg-green-700 flex items-center">
                <CreditCard className="mr-2 h-4 w-4" />
                Proceed to Payment
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Quote Calculator Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2" onClick={() => {
          resetQuoteForm();
          setIsQuoteModalOpen(false);
        }}>
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-7xl mx-auto max-h-[98vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white p-3 border-b border-gray-200 rounded-t-xl flex justify-between items-center">
              <button
                onClick={() => setIsQuoteModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors opacity-0"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <Calculator className="mr-2 h-5 w-5 text-blue-600" />
                  <h2 className="text-lg font-bold text-[#111827]">Get Shipping Quote</h2>
                </div>
                <p className="text-gray-600 mt-1 text-sm">Calculate accurate shipping costs for your package with our instant quote calculator</p>
              </div>
                              <button
                  onClick={() => {
                    resetQuoteForm();
                    setIsQuoteModalOpen(false);
                  }}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-4 p-3">
              {/* Quote Form */}
              <div className="space-y-3">
                <div className="bg-white rounded-lg border shadow-sm">
                  <div className="p-3 border-b">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <Package className="mr-2 h-4 w-4 text-blue-600" />
                      Shipping Details
                    </h3>
                  </div>
                  <div className="p-4 space-y-3">
                    {/* Direction */}
                    <div>
                      <label className="text-base font-medium mb-2 block text-gray-900">Shipping Direction</label>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="direction"
                            value="uk-nigeria"
                            checked={quoteCalculatorForm.from === "UK" && quoteCalculatorForm.to === "Nigeria"}
                            onChange={() => {
                              setQuoteCalculatorForm(prev => ({
                                ...prev,
                                from: "UK",
                                to: "Nigeria",
                                deliveryLocation: "",
                                packageType: "",
                                customPackageType: ""
                              }));
                            }}
                            className="w-4 h-4 text-blue-600"
                          />
                          <span className="text-gray-700">UK → Nigeria</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="direction"
                            value="nigeria-uk"
                            checked={quoteCalculatorForm.from === "Nigeria" && quoteCalculatorForm.to === "UK"}
                            onChange={() => {
                              setQuoteCalculatorForm(prev => ({
                                ...prev,
                                from: "Nigeria",
                                to: "UK",
                                deliveryLocation: "",
                                packageType: "",
                                customPackageType: ""
                              }));
                            }}
                            className="w-4 h-4 text-blue-600"
                          />
                          <span className="text-gray-700">Nigeria → UK</span>
                        </label>
                      </div>
                    </div>

                    {/* Weight */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Package Weight (kg) *</label>
                                              <input
                          type="number"
                          step="0.1"
                          min="0.1"
                          value={quoteCalculatorForm.weight}
                          onChange={(e) => handleQuoteFormChange("weight", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                          placeholder="Enter weight in kg"
                          required
                        />
                        <p className="text-xs text-gray-500 mt-1">Minimum weight: 1kg</p>
                    </div>

                    {/* Destination */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        {quoteCalculatorForm.from === "UK" && quoteCalculatorForm.to === "Nigeria" 
                          ? "Destination State in Nigeria" 
                          : "Destination in UK"} *
                      </label>
                      {quoteCalculatorForm.from === "UK" && quoteCalculatorForm.to === "Nigeria" ? (
                        <select
                          value={quoteCalculatorForm.deliveryLocation}
                          onChange={(e) => handleQuoteFormChange("deliveryLocation", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                          required
                        >
                          <option value="">Select destination state</option>
                          {Object.entries(nigerianZones).map(([zoneName, zoneData]) =>
                            zoneData.states.map(state => (
                              <option key={state} value={state}>{state}</option>
                            ))
                          )}
                        </select>
                      ) : (
                        <input
                          type="text"
                          value={quoteCalculatorForm.deliveryLocation}
                          onChange={(e) => handleQuoteFormChange("deliveryLocation", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                          placeholder="Enter UK destination"
                          required
                        />
                      )}
                    </div>

                    {/* Package Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Package Type</label>
                      <select
                        value={quoteCalculatorForm.packageType}
                        onChange={(e) => handleQuoteFormChange("packageType", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                        required
                      >
                        <option value="">Select package type</option>
                        {quoteCalculatorForm.from === "UK" && quoteCalculatorForm.to === "Nigeria" && (
                          <>
                            <option value="phones">Phones (£20 handling fee)</option>
                            <option value="ipads">iPads (£20 handling fee)</option>
                            <option value="laptops">Laptops (£30 handling fee)</option>
                          </>
                        )}
                        <option value="general">General Items (£{quoteCalculatorForm.from === "UK" ? "30" : "5"} handling fee)</option>
                        <option value="electronics">Electronics</option>
                        <option value="documents">Documents</option>
                        <option value="clothing">Clothing</option>
                        <option value="medical">Medical Supplies</option>
                        <option value="gifts">Gifts</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Custom Package Type - appears when "Other" is selected */}
                    {quoteCalculatorForm.packageType === "other" && (
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Specify Item Type *</label>
                        <input
                          type="text"
                          value={quoteCalculatorForm.customPackageType}
                          onChange={(e) => handleQuoteFormChange("customPackageType", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                          placeholder="Please describe what you're shipping"
                          required
                        />
                        <p className="text-xs text-gray-500 mt-1">Be specific about the item(s) you want to ship</p>
                      </div>
                    )}

                    {/* Delivery Options */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-3">Delivery Required?</label>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="needsDelivery"
                            checked={quoteCalculatorForm.needsDelivery === true}
                            onChange={() => handleQuoteFormChange("needsDelivery", true)}
                            className="w-4 h-4 text-blue-600"
                          />
                          <span className="text-gray-700">Yes, deliver to my address</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="needsDelivery"
                            checked={quoteCalculatorForm.needsDelivery === false}
                            onChange={() => handleQuoteFormChange("needsDelivery", false)}
                            className="w-4 h-4 text-blue-600"
                          />
                          <span className="text-gray-700">No, I'll arrange pickup myself</span>
                        </label>
                      </div>
                    </div>

                    {/* Delivery Location - appears when delivery is needed */}
                    {quoteCalculatorForm.needsDelivery && (
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          {quoteCalculatorForm.from === "UK" && quoteCalculatorForm.to === "Nigeria" 
                            ? "Delivery Address in Nigeria" 
                            : "Delivery Address in UK"} *
                        </label>
                        <textarea
                          value={quoteCalculatorForm.deliveryAddress}
                          onChange={(e) => handleQuoteFormChange("deliveryAddress", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 min-h-[80px]"
                          placeholder={quoteCalculatorForm.from === "UK" && quoteCalculatorForm.to === "Nigeria" 
                            ? "Enter complete delivery address in Nigeria\nExample: 15 Victoria Island Road, Victoria Island, Lagos State"
                            : "Enter complete delivery address in UK\nExample: 123 High Street, London SW1A 1AA"
                          }
                          required={quoteCalculatorForm.needsDelivery}
                          rows={3}
                        />
                        <div className="text-xs text-gray-600 mt-1 space-y-1">
                          <p>💡 Please include complete address with street, area/district, city, and state for accurate delivery</p>
                          <p>💰 Delivery fees are automatically converted from NGN to GBP for your convenience</p>
                        </div>
                      </div>
                    )}

                    {/* Restrictions for Nigeria to UK */}
                    {quoteCalculatorForm.from === "Nigeria" && quoteCalculatorForm.to === "UK" && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <Info className="h-5 w-5 text-red-400" />
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-red-800">Shipping Restrictions:</h3>
                            <p className="mt-1 text-sm text-red-700">
                              We do not ship phones, food items, or any items containing lithium from Nigeria to the UK.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Quote Results */}
              <div className="space-y-3">
                {/* Contact Information Form - Moved to top */}
                <div className="bg-white rounded-lg border shadow-sm">
                  <div className="p-3 border-b">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <User className="mr-2 h-4 w-4 text-blue-600" />
                      Contact Information
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">Required to generate and email your quote</p>
                  </div>
                  <div className="p-3 space-y-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-1">Full Name *</label>
                      <input
                        type="text"
                        value={quoteCalculatorForm.senderName}
                        onChange={(e) => handleQuoteFormChange("senderName", e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-1">Email Address *</label>
                      <input
                        type="email"
                        value={quoteCalculatorForm.senderEmail}
                        onChange={(e) => handleQuoteFormChange("senderEmail", e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        value={quoteCalculatorForm.senderPhone}
                        onChange={(e) => handleQuoteFormChange("senderPhone", e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                        placeholder="+44 7XXX XXXXXX"
                        required
                      />
                    </div>
                  </div>
                </div>

                {calculatedQuote && (
                  <div className="bg-white rounded-lg border-2 border-blue-200 shadow-sm">
                    <div className="p-3 border-b">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                        <Calculator className="mr-2 h-4 w-4 text-blue-600" />
                        Your Quote
                      </h3>
                    </div>
                    <div className="p-3 space-y-3">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Shipping Cost ({Math.max(parseFloat(quoteCalculatorForm.weight) || 0, 1)}kg @ £9/kg):</span>
                          <span className="font-medium text-gray-900">£{calculatedQuote.shippingCost.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Handling Fee:</span>
                          <span className="font-medium text-gray-900">£{calculatedQuote.handlingFee.toFixed(2)}</span>
                        </div>

                        {calculatedQuote.needsDelivery && (
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700">Delivery Fee:</span>
                            <span className="font-medium text-gray-900">
                              {calculatedQuote.deliveryFeeCurrency === "GBP"
                                ? `£${calculatedQuote.deliveryFee.toFixed(2)}`
                                : calculatedQuote.deliveryFeeCurrency === "ARRANGE"
                                ? "Customer arranges (10kg+)"
                                : "Included"}
                            </span>
                          </div>
                        )}

                        <div className="border-t pt-3">
                          <div className="flex justify-between items-center text-lg font-bold">
                            <span className="text-gray-900">Total Cost:</span>
                            <span className="text-green-600">
                              £{calculatedQuote.totalGBP.toFixed(2)}
                            </span>
                          </div>
                          {calculatedQuote.deliveryFeeCurrency === "ARRANGE" && (
                            <p className="text-xs text-amber-600 mt-2">
                              * Delivery cost for packages over 10kg will be determined upon arrival. You may also arrange your own delivery.
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-blue-600" />
                          <span className="font-medium text-blue-800">Delivery Time</span>
                        </div>
                        <p className="text-sm text-blue-700">10-15 days shipping + 3-5 days delivery</p>
                      </div>

                                            <div className="space-y-3">
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex flex-col items-center">
                          <button 
                          onClick={handleQuoteSubmit}
                          disabled={!calculatedQuote || !quoteCalculatorForm.senderName || !quoteCalculatorForm.senderEmail || !quoteCalculatorForm.senderPhone || (quoteCalculatorForm.packageType === "other" && !quoteCalculatorForm.customPackageType) || !quoteCalculatorForm.deliveryLocation || (quoteCalculatorForm.needsDelivery && !quoteCalculatorForm.deliveryAddress) || isSubmittingQuote}
                                                      className={`w-auto mx-auto font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center text-base shadow-lg ${
                              calculatedQuote && quoteCalculatorForm.senderName && quoteCalculatorForm.senderEmail && quoteCalculatorForm.senderPhone && (quoteCalculatorForm.packageType !== "other" || quoteCalculatorForm.customPackageType) && quoteCalculatorForm.deliveryLocation && (!quoteCalculatorForm.needsDelivery || quoteCalculatorForm.deliveryAddress) && !isSubmittingQuote
                              ? "bg-[#002147] hover:bg-blue-900 text-white hover:scale-105"
                              : "bg-gray-300 text-gray-500 cursor-not-allowed"
                          }`}
                        >
                            {isSubmittingQuote ? (
                              <>
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                Submitting...
                              </>
                            ) : (
                              <>
                                <Mail className="mr-2 h-5 w-5" />
                                📧 Submit My Quote
                              </>
                            )}
                          </button>
                          {(!calculatedQuote || !quoteCalculatorForm.senderName || !quoteCalculatorForm.senderEmail || !quoteCalculatorForm.senderPhone || (quoteCalculatorForm.packageType === "other" && !quoteCalculatorForm.customPackageType) || !quoteCalculatorForm.deliveryLocation || (quoteCalculatorForm.needsDelivery && !quoteCalculatorForm.deliveryAddress)) && (
                            <p className="text-xs text-amber-600 text-center mt-2 font-medium">
                              Complete all fields above to submit your quote
                              {quoteCalculatorForm.packageType === "other" && !quoteCalculatorForm.customPackageType && (
                                <span className="block">Please specify what item you're shipping</span>
                              )}
                              {!quoteCalculatorForm.deliveryLocation && (
                                <span className="block">Please select destination state</span>
                              )}
                              {quoteCalculatorForm.needsDelivery && !quoteCalculatorForm.deliveryAddress && (
                                <span className="block">Please enter delivery address</span>
                              )}
                            </p>
                          )}
                        </div>

                        <div className="border-t border-gray-200 pt-3 flex flex-col items-center space-y-3">
                          <p className="text-sm text-gray-600 text-center font-medium">Ready to proceed?</p>
                          <button 
                            onClick={() => {
                              setIsQuoteModalOpen(false);
                              setIsShipNowModalOpen(true);
                            }}
                            className="w-auto mx-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center hover:scale-105 shadow-lg text-base"
                          >
                            <Package className="mr-2 h-5 w-5" />
                            Proceed to Ship Package
                          </button>
                          <button 
                            onClick={() => {
                              const choice = confirm(`📞 Contact us for a custom quote!\n\nChoose your preferred contact:\n\n✅ Click OK for UK Office\n❌ Click Cancel for Nigeria Office`);
                              
                              if (choice) {
                                // UK Office selected
                                alert(`🇬🇧 UK Office Contact:\n\n📞 Phone: +44 7392 171558\n📧 Email: info@freightbunny.com\n\n🕒 Business Hours (GMT):\nMonday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed\n\n💬 WhatsApp: Available on this number`);
                              } else {
                                // Nigeria Office selected  
                                alert(`🇳🇬 Nigeria Office Contact:\n\n📞 Phone: +234 1 234 5678\n📧 Email: nigeria@freightbunny.com\n\n🕒 Business Hours (WAT):\nMonday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed\n\n💬 WhatsApp: Available on this number`);
                              }
                            }}
                            className="w-auto mx-auto border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center text-base shadow-lg"
                          >
                            <Phone className="mr-2 h-5 w-5" />
                            Contact Us for Custom Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}



                {/* How It Works */}
                <div className="bg-white rounded-lg border shadow-sm">
                  <div className="p-3 border-b">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <Truck className="mr-2 h-4 w-4 text-blue-600" />
                      How It Works
                    </h3>
                  </div>
                  <div className="p-3 space-y-2 text-xs">
                    <div className="flex items-start space-x-2">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">1</div>
                      <p className="text-gray-700">You send your item to our address</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">2</div>
                      <p className="text-gray-700">We weigh it, send you pictures & invoice</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">3</div>
                      <p className="text-gray-700">We ship after you pay the invoice</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">4</div>
                      <p className="text-gray-700">Cargo pickup: Tuesdays | Ship: Fridays</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">5</div>
                      <p className="text-gray-700">10-15 days to Lagos + 3-5 days doorstep delivery</p>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-4">
                      <p className="text-amber-800 text-xs font-medium">
                        📝 <strong>Note:</strong> We do not ship phones, food items, or lithium-containing items from Nigeria to UK.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quote Details Modal */}
      {quoteDetailsModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => {
          setQuoteDetailsModal(false);
          setIsQuoteModalOpen(false);
          resetQuoteForm();
        }}>
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-auto max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-t-2xl flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold flex items-center">
                  <CheckCircle className="mr-3 h-7 w-7" />
                  Your Quote Summary
                </h2>
                <p className="text-green-100 mt-1">Quote ID: FB-{Date.now().toString().slice(-6)}</p>
              </div>
              <button
                onClick={() => {
                  setQuoteDetailsModal(false);
                  setIsQuoteModalOpen(false);
                  resetQuoteForm();
                }}
                className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Customer Information */}
              <div className="bg-blue-50 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <User className="mr-2 h-5 w-5 text-blue-600" />
                  Customer Details
                </h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Name:</span>
                    <p className="text-gray-900">{quoteCalculatorForm.senderName}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Email:</span>
                    <p className="text-gray-900">{quoteCalculatorForm.senderEmail}</p>
                  </div>
                  <div className="md:col-span-2">
                    <span className="font-medium text-gray-700">Phone:</span>
                    <p className="text-gray-900">{quoteCalculatorForm.senderPhone}</p>
                  </div>
                </div>
              </div>

              {/* Shipment Details */}
              <div className="bg-purple-50 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Package className="mr-2 h-5 w-5 text-purple-600" />
                  Shipment Details
                </h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Route:</span>
                    <p className="text-gray-900">{quoteCalculatorForm.from} → {quoteCalculatorForm.to}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Weight:</span>
                    <p className="text-gray-900">{quoteCalculatorForm.weight}kg</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Package Type:</span>
                    <p className="text-gray-900">
                      {quoteCalculatorForm.packageType === "other" 
                        ? `Other - ${quoteCalculatorForm.customPackageType}`
                        : quoteCalculatorForm.packageType.charAt(0).toUpperCase() + quoteCalculatorForm.packageType.slice(1)}
                    </p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">
                      {quoteCalculatorForm.needsDelivery ? "Destination State:" : "Pickup State:"}
                    </span>
                    <p className="text-gray-900">{quoteCalculatorForm.deliveryLocation}</p>
                  </div>
                  {quoteCalculatorForm.needsDelivery && quoteCalculatorForm.deliveryAddress && (
                    <div className="md:col-span-2">
                      <span className="font-medium text-gray-700">Delivery Address:</span>
                      <p className="text-gray-900 text-sm">{quoteCalculatorForm.deliveryAddress}</p>
                    </div>
                  )}
                  <div className="md:col-span-2">
                    <span className="font-medium text-gray-700">Delivery:</span>
                    <p className="text-gray-900">
                      {quoteCalculatorForm.needsDelivery ? "Yes, deliver to address" : "Customer arranges pickup"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Cost Breakdown */}
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Calculator className="mr-2 h-5 w-5 text-green-600" />
                  Cost Breakdown
                </h3>
                <div className="space-y-3">
                  {calculatedQuote ? (
                    <>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-700">Shipping Cost ({Math.max(parseFloat(quoteCalculatorForm.weight) || 0, 1)}kg @ £9/kg):</span>
                        <span className="font-semibold text-gray-900">£{calculatedQuote.shippingCost.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-700">Handling Fee:</span>
                        <span className="font-semibold text-gray-900">£{calculatedQuote.handlingFee.toFixed(2)}</span>
                      </div>
                      {calculatedQuote.needsDelivery && calculatedQuote.deliveryFee > 0 && (
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-700">Delivery Fee:</span>
                          <span className="font-semibold text-gray-900">
                            {calculatedQuote.deliveryFeeCurrency === "GBP"
                              ? `£${calculatedQuote.deliveryFee.toFixed(2)}`
                              : calculatedQuote.deliveryFeeCurrency === "ARRANGE"
                              ? "Customer arranges"
                              : "Included"}
                          </span>
                        </div>
                      )}
                      <div className="border-t pt-3 flex justify-between items-center">
                        <span className="text-lg font-bold text-green-700">Total Cost:</span>
                        <span className="text-xl font-bold text-green-700">
                          £{calculatedQuote.totalGBP.toFixed(2)}
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-4">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-2"></div>
                      <p className="text-sm text-gray-600">Recalculating quote...</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Delivery Time */}
              <div className="bg-blue-100 rounded-xl p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-semibold text-blue-900">Estimated Delivery Time</span>
                </div>
                <p className="text-blue-800 font-medium">10-15 days shipping + 3-5 days delivery</p>
                <p className="text-sm text-blue-700 mt-2">We'll follow up within 2 hours to finalize your booking!</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                  <button
                    onClick={() => {
                      setQuoteDetailsModal(false);
                      setIsQuoteModalOpen(false);
                      resetQuoteForm();
                    }}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Close Quote
                  </button>
                  <button
                    onClick={() => {
                      if (!calculatedQuote) {
                        alert("⏳ Please wait for the quote to finish calculating before proceeding.");
                        return;
                      }
                      
                      console.log("Proceed to Ship button clicked - transferring data to Ship Now modal");
                      
                      // Pre-fill Ship Now form with comprehensive quote data
                      const updatedShipNowForm = {
                        // Sender information from quote
                        senderName: quoteCalculatorForm.senderName,
                        senderEmail: quoteCalculatorForm.senderEmail,
                        senderPhone: quoteCalculatorForm.senderPhone,
                        senderCountry: quoteCalculatorForm.from === "UK" ? "United Kingdom" : "Nigeria",
                        senderAddress: "", // User will fill this
                        senderCity: "",
                        senderPostcode: "",
                        
                        // Recipient information based on quote
                        recipientName: "", // User will fill this
                        recipientEmail: "", // User will fill this
                        recipientPhone: "", // User will fill this
                        recipientAddress: quoteCalculatorForm.needsDelivery ? quoteCalculatorForm.deliveryAddress : "",
                        recipientCity: "", // Will be extracted from address if possible
                        recipientState: quoteCalculatorForm.deliveryLocation,
                        recipientCountry: quoteCalculatorForm.to === "Nigeria" ? "Nigeria" : "United Kingdom",
                        
                        // Package information from quote
                        packageType: quoteCalculatorForm.packageType === "other" ? "other" : quoteCalculatorForm.packageType,
                        weight: quoteCalculatorForm.weight,
                        length: "", // User will specify
                        width: "", // User will specify
                        height: "", // User will specify
                        value: "", // User will specify
                        description: quoteCalculatorForm.packageType === "other" 
                          ? `${quoteCalculatorForm.customPackageType} - ${quoteCalculatorForm.weight}kg package`
                          : `${quoteCalculatorForm.packageType.charAt(0).toUpperCase() + quoteCalculatorForm.packageType.slice(1)} package - ${quoteCalculatorForm.weight}kg`,
                        
                        // Shipping preferences
                        shippingService: "standard", // Based on quote (standard = £9/kg)
                        insurance: true, // Recommended and free
                        signature: false, // Optional £5 service
                        tracking: true   // Free SMS updates
                      };
                      
                      // Update the ship now form
                      setShipNowForm(updatedShipNowForm);
                      
                      // Calculate initial estimate based on transferred data
                      if (updatedShipNowForm.weight && updatedShipNowForm.shippingService) {
                        const weight = parseFloat(updatedShipNowForm.weight);
                        const baseRate = updatedShipNowForm.shippingService === "express" ? 15 : 9;
                        const baseCost = weight * baseRate;
                        const signatureCost = updatedShipNowForm.signature ? 5 : 0;
                        setEstimatedCost(baseCost + signatureCost);
                      }
                      
                      // Start from step 1 of shipping process
                      setCurrentStep(1);
                      
                      // Close quote modal and open ship now modal
                      console.log("Closing quote modal and opening Ship Now modal");
                      setQuoteDetailsModal(false);
                      setIsShipNowModalOpen(true);
                      console.log("Ship Now modal should now be open");
                      
                      // Show success message
                      setTimeout(() => {
                        alert("✅ Great! Your quote information has been transferred to the shipping form. Please review and complete the remaining details to finalize your booking.");
                      }, 300);
                    }}
                    disabled={!calculatedQuote}
                    className={`flex-1 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center ${
                      calculatedQuote 
                        ? "bg-green-600 hover:bg-green-700 text-white" 
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    <Package className="mr-2 h-5 w-5" />
                    Proceed to Ship
                  </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
