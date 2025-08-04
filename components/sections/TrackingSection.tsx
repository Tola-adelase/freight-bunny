"use client"

import React from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TrackingSectionProps {
  trackingNumber: string
  setTrackingNumber: (value: string) => void
}

export default function TrackingSection({ trackingNumber, setTrackingNumber }: TrackingSectionProps) {
  const handleTrackingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (trackingNumber.trim()) {
      // Handle tracking logic here
      console.log("Tracking:", trackingNumber)
    }
  }

  return (
    <section id="tracking" className="py-16 sm:py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50/20">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-4">Track Your Package</h2>
            <p className="text-base sm:text-base text-gray-600 mb-8 sm:mb-8 px-2 leading-relaxed">
              Enter your tracking number to get real-time updates
            </p>
          </div>
          
          <form onSubmit={handleTrackingSubmit} className="animate-slide-up">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-2 max-w-2xl mx-auto w-full">
              <input
                type="text"
                placeholder="Enter tracking number (e.g., FB123456789)"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-1 px-4 py-4 sm:py-3 border border-gray-200 bg-white/70 backdrop-blur-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-gray-900 placeholder-gray-500 text-base sm:text-base text-center sm:text-left placeholder:text-center sm:placeholder:text-left shadow-lg transition-all duration-200 hover:shadow-xl focus-ring"
                required
              />
              <Button 
                type="submit"
                variant="default"
                className="bg-gradient-to-r from-[#002147] to-[#003366] hover:from-[#001634] hover:to-[#002147] text-white font-bold px-6 py-4 sm:py-3 text-base rounded-xl shadow-xl hover:shadow-2xl flex items-center justify-center w-full max-w-[180px] sm:w-auto sm:max-w-none mx-auto sm:mx-0 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 cursor-pointer focus-ring"
              >
                <Search className="h-6 w-6 mr-2 text-white flex-shrink-0" />
                Track
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}