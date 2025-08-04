"use client"

import React from "react"
import { Plane, Package, Calculator, ShieldCheck, Clock, Star, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  onGetQuote: () => void
  onShipNow: () => void
}

export default function HeroSection({ onGetQuote, onShipNow }: HeroSectionProps) {
  const trustIndicators = [
    { icon: ShieldCheck, text: "Fully Insured", bgColor: "bg-green-50/90", textColor: "text-green-700", iconBg: "bg-green-500" },
    { icon: Clock, text: "Real-time Tracking", bgColor: "bg-blue-50/90", textColor: "text-blue-700", iconBg: "bg-blue-500" },
    { icon: Star, text: "5-Star Service", bgColor: "bg-yellow-50/90", textColor: "text-yellow-700", iconBg: "bg-yellow-500" },
    { icon: CheckCircle, text: "No Hidden Fees", bgColor: "bg-emerald-50/90", textColor: "text-emerald-700", iconBg: "bg-emerald-500" }
  ]

  return (
    <section className="relative min-h-[85vh] sm:min-h-[calc(100vh-64px)] flex flex-col justify-start items-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f6faff] via-[#eaf3fb] to-[#f6faff] overflow-hidden">
      {/* Abstract Shapes for Visual Interest */}
      <div className="absolute -top-24 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-blue-100 via-blue-50 to-transparent rounded-full blur-3xl opacity-60 z-0 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tr from-blue-100 via-blue-50 to-transparent rounded-full blur-2xl opacity-50 z-0"></div>

      <div className="container mx-auto flex flex-col justify-start items-center h-full relative z-10 pt-8 pb-4 sm:py-8">
        {/* Badge */}
        <div className="mb-6 sm:mb-7 animate-fade-in">
          <span className="inline-flex items-center px-4 py-2 sm:px-4 rounded-full bg-gradient-to-r from-[#e0eaff] via-[#d0ddff] to-[#c7e0ff] text-[#002147] text-base sm:text-base font-bold shadow-lg border border-blue-200/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <div className="bg-[#002147] p-1 rounded-full mr-3">
              <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            Fast, Reliable Air Freight
          </span>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-4 sm:mb-6 animate-slide-up">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111827] mb-2 leading-[1.1] px-2">
            UK ↔ Nigeria Shipping
          </h1>
          <div className="relative flex justify-center">
            <span className="block text-[#002147] text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold px-2 relative">
              Made Easy
              <span className="absolute left-1/2 -bottom-1 w-3/4 h-2 sm:h-2 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 rounded-full -translate-x-1/2 z-[-1] shadow-sm"></span>
            </span>
          </div>
        </div>

        {/* Subheading */}
        <div className="text-center mb-4 sm:mb-8 animate-fade-in-delayed">
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold mb-1 px-4 leading-tight">
            Fast, reliable, and affordable shipping between the UK and Nigeria.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 px-4 leading-relaxed">
            Transparent pricing, real-time updates, and a personal touch.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="mb-4 sm:mb-8 flex justify-center w-full px-4 animate-scale-in">
          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl shadow-2xl p-4 sm:p-6 max-w-sm sm:max-w-md w-full border border-blue-100/50 flex flex-col items-center relative overflow-hidden backdrop-blur-sm hover:shadow-3xl transition-shadow duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent rounded-3xl"></div>
            <div className="relative z-10 flex items-center justify-center mb-2">
              <div className="bg-gradient-to-r from-[#002147] to-[#003366] p-2 rounded-full mr-3 shadow-lg">
                <Package className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <p className="text-gray-600 font-semibold text-base sm:text-base">Prices starting from</p>
            </div>
            <div className="relative z-10 mb-1 flex items-baseline">
              <span className="text-3xl sm:text-5xl font-black text-[#002147] drop-shadow-sm">£9</span>
              <span className="text-base sm:text-xl font-semibold text-gray-600 ml-1">/kg</span>
            </div>
            <div className="relative z-10 bg-blue-50/80 px-4 py-2 rounded-full border border-blue-100">
              <p className="text-sm sm:text-sm text-gray-700 text-center font-medium">Delivery: 7–10 days after shipment</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row gap-2 sm:gap-4 mb-4 sm:mb-6 justify-center w-full max-w-lg sm:max-w-2xl px-4 animate-slide-up-delayed">
          <Button
            size="lg"
            variant="outline"
            className="bg-gradient-to-r from-white to-blue-50/30 hover:from-blue-50 hover:to-blue-100/50 border-2 border-[#002147] text-[#002147] shadow-lg hover:shadow-xl px-4 py-3 sm:py-3 text-sm sm:text-base font-bold rounded-xl flex items-center justify-center w-full max-w-[140px] sm:w-auto sm:max-w-none transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 mx-auto sm:mx-0 backdrop-blur-sm"
            onClick={onGetQuote}
          >
            <Calculator className="mr-1 h-4 w-4 sm:h-6 sm:w-6 text-[#002147] flex-shrink-0" />
            <span className="hidden xs:inline">Get Free Quote</span>
            <span className="xs:hidden">Get Quote</span>
          </Button>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#002147] to-[#003366] hover:from-[#001634] hover:to-[#002147] text-white shadow-xl hover:shadow-2xl border-0 px-4 py-3 sm:py-3 text-sm sm:text-base font-bold rounded-xl flex items-center justify-center w-full max-w-[140px] sm:w-auto sm:max-w-none transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 mx-auto sm:mx-0"
            onClick={onShipNow}
          >
            <Package className="mr-1 h-4 w-4 sm:h-6 sm:w-6 text-white flex-shrink-0" />
            Ship Now
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-3 sm:gap-6 mb-4 sm:mb-8 mt-3 sm:mt-0 px-4 animate-fade-in-stagger">
          {trustIndicators.map((indicator, index) => (
            <div key={indicator.text} className={`flex items-center gap-1 ${indicator.bgColor} backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-2 rounded-full border ${indicator.bgColor.replace('50/', '100/')} shadow-sm text-center justify-center hover:scale-105 transition-transform duration-200`} style={{ animationDelay: `${index * 100}ms` }}>
              <div className={`${indicator.iconBg} p-0.5 sm:p-1 rounded-full`}>
                <indicator.icon className="h-3 w-3 sm:h-4 sm:w-4 text-white flex-shrink-0" />
              </div>
              <span className={`${indicator.textColor} text-xs sm:text-sm font-semibold whitespace-nowrap`}>{indicator.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}