"use client"

import React, { useState } from "react"
import { NavLink } from "@/types"
import { useShipNowForm, useQuoteCalculator } from "@/hooks/useShippingForms"

// Layout Components
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

// Section Components  
import HeroSection from "@/components/sections/HeroSection"
import TrackingSection from "@/components/sections/TrackingSection"
import ServicesSection from "@/components/sections/ServicesSection"
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection"
import ContactSection from "@/components/sections/ContactSection"

// Modal Components
import ShipNowModal from "@/components/modals/ShipNowModal"
import QuoteCalculatorModal from "@/components/modals/QuoteCalculatorModal"

export default function FreightBunnyHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isShipNowModalOpen, setIsShipNowModalOpen] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [trackingNumber, setTrackingNumber] = useState("")

  // Navigation links
  const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/buy-for-me", label: "Buy For Me" },
    { href: "/pricing", label: "Pricing" },
    { href: "#contact", label: "Contact Us" },
  ]

  // Shipping forms
  const shipNowForm = useShipNowForm()
  const quoteCalculator = useQuoteCalculator()

  // Modal handlers
  const handleOpenShipNow = () => {
    shipNowForm.resetForm()
    setIsShipNowModalOpen(true)
  }

  const handleOpenQuote = () => {
    quoteCalculator.resetForm()
    setIsQuoteModalOpen(true)
  }

  const handleCloseShipNow = () => {
    setIsShipNowModalOpen(false)
    shipNowForm.resetForm()
  }

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false)
    quoteCalculator.resetForm()
  }

  const handleShipNowSubmit = () => {
    // Handle ship now form submission
    console.log("Ship Now form submitted:", shipNowForm.form)
    alert("Thank you! Your shipping request has been submitted. We'll contact you within 2 hours to arrange pickup and payment.")
    handleCloseShipNow()
  }

  const handleQuoteSubmit = async () => {
    if (!quoteCalculator.calculatedQuote || !quoteCalculator.form.senderName || !quoteCalculator.form.senderEmail || !quoteCalculator.form.senderPhone) return
    if (quoteCalculator.form.packageType === "other" && !quoteCalculator.form.customPackageType) return
    if (!quoteCalculator.form.deliveryLocation) return
    if (quoteCalculator.form.needsDelivery && !quoteCalculator.form.deliveryAddress) return
    
    quoteCalculator.setIsSubmitting(true)
    
    try {
      // Prepare quote data for API submission
      const quoteData = {
        customerInfo: {
          name: quoteCalculator.form.senderName,
          email: quoteCalculator.form.senderEmail,
          phone: quoteCalculator.form.senderPhone
        },
        shippingDetails: {
          weight: quoteCalculator.form.weight,
          packageType: quoteCalculator.form.packageType,
          customPackageType: quoteCalculator.form.customPackageType,
          from: quoteCalculator.form.from,
          to: quoteCalculator.form.to,
          deliveryLocation: quoteCalculator.form.deliveryLocation,
          deliveryAddress: quoteCalculator.form.deliveryAddress,
          needsDelivery: quoteCalculator.form.needsDelivery
        },
        quote: quoteCalculator.calculatedQuote
      }
      
      // Submit to API (and Google Sheets)
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quoteData),
      })
      
      const result = await response.json()
      
      if (result.success) {
        alert("✅ Quote submitted successfully! Your quote has been saved and you'll receive a follow-up within 2 hours.")
      } else {
        alert("✅ Quote generated successfully! Note: We're experiencing technical issues with our system, but your quote is displayed. Please save this information and contact us directly to proceed.")
      }
      
    } catch (error) {
      console.error('Error submitting quote:', error)
      alert("✅ Quote generated successfully! Note: We're experiencing technical issues with our system, but your quote is displayed. Please save this information and contact us directly to proceed.")
    } finally {
      quoteCalculator.setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        navLinks={navLinks} 
      />

      {/* Hero Section */}
      <HeroSection 
        onGetQuote={handleOpenQuote}
        onShipNow={handleOpenShipNow}
      />

      {/* Tracking Section */}
      <TrackingSection 
        trackingNumber={trackingNumber}
        setTrackingNumber={setTrackingNumber}
      />

      {/* Services Section */}
      <ServicesSection />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Ship Now Modal */}
      <ShipNowModal
        isOpen={isShipNowModalOpen}
        onClose={handleCloseShipNow}
        form={shipNowForm.form}
        currentStep={shipNowForm.currentStep}
        estimatedCost={shipNowForm.estimatedCost}
        updateField={shipNowForm.updateField}
        nextStep={shipNowForm.nextStep}
        prevStep={shipNowForm.prevStep}
        setCurrentStep={shipNowForm.setCurrentStep}
        onSubmit={handleShipNowSubmit}
      />

      {/* Quote Calculator Modal */}
      {isQuoteModalOpen && (
        <QuoteCalculatorModal
          isOpen={isQuoteModalOpen}
          onClose={handleCloseQuote}
          form={quoteCalculator.form}
          calculatedQuote={quoteCalculator.calculatedQuote}
          isSubmitting={quoteCalculator.isSubmitting}
          updateField={quoteCalculator.updateField}
          onSubmit={handleQuoteSubmit}
          nigerianZones={quoteCalculator.nigerianZones}
        />
      )}
    </div>
  )
}