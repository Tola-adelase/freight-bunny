"use client"

import React from "react"

interface Service {
  title: string
  description: string
  timeline: string
  actionText: string
  actionHref: string
}

const services: Service[] = [
  {
    title: "Air Freight UK → Nigeria",
    description: "Weekly shipments, safe handling, and fast delivery. We handle your cargo with care and keep you updated every step of the way.",
    timeline: "Delivery: 7–10 days after shipment (may vary). Customer can arrange their own delivery if preferred.",
    actionText: "Get a Quote",
    actionHref: "#contact"
  },
  {
    title: "Air Freight Nigeria → UK",
    description: "Secure, efficient, and hassle-free shipping from Nigeria to the UK. Customs support included.",
    timeline: "Delivery: Will be determined when item arrives. Customer can arrange their own delivery if preferred.",
    actionText: "Get a Quote",
    actionHref: "#contact"
  },
  {
    title: "Customs Clearance Support",
    description: "We help you with all paperwork and customs clearance, ensuring your shipments move smoothly and without delays.",
    timeline: "",
    actionText: "Learn More",
    actionHref: "#contact"
  }
]

export default function ServicesSection() {
  return (
    <section className="py-12 sm:py-16 px-4 bg-[#f6faff]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827] mb-4">
            Our Shipping Services
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 md:p-6 lg:p-6 flex flex-col items-center min-h-[300px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[300px] hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-1 flex flex-col items-center justify-start pt-4">
                <h3 className="text-lg sm:text-xl font-bold text-[#002147] mb-3 text-center min-h-[3.5rem] flex items-center">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-2 text-center text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
                {service.timeline && (
                  <p className="text-xs sm:text-sm text-gray-500 mb-4 text-center">
                    {service.timeline}
                  </p>
                )}
              </div>
              <div className="w-full flex justify-center mt-auto">
                <a 
                  href={service.actionHref}
                  className="bg-[#002147] hover:bg-[#001634] text-white font-semibold px-6 py-3 text-sm sm:text-base md:px-8 md:py-3 lg:px-6 lg:py-3 rounded-lg shadow-lg transition-all duration-200 hover:scale-105 hover:-translate-y-1 w-full sm:w-auto md:w-full lg:w-auto max-w-[180px] sm:max-w-[200px] md:max-w-none text-center focus-ring"
                >
                  {service.actionText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}