"use client"

import React from "react"

interface Feature {
  emoji: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    emoji: "🚚",
    title: "Fast Delivery",
    description: "Weekly shipments, 7–10 day delivery, and real-time updates."
  },
  {
    emoji: "💷",
    title: "Transparent Pricing",
    description: "Just £9/kg, no hidden fees, and clear invoicing."
  },
  {
    emoji: "🤝",
    title: "Personal Service",
    description: "We treat your packages like our own and keep you informed every step."
  },
  {
    emoji: "📦",
    title: "Flexible Delivery",
    description: "Choose doorstep delivery or arrange your own pickup in Lagos."
  }
]

export default function WhyChooseUsSection() {
  return (
    <section className="py-12 sm:py-16 px-4 bg-[#f6faff]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827] mb-4">
            Why Ship With Us?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 px-2 leading-relaxed">
            We're passionate about connecting families and businesses across continents. With transparent pricing, 
            real-time updates, and a personal touch, we make shipping easy and stress-free. Our team is dedicated 
            to making international shipping simple, affordable, and reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 justify-items-center">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="flex flex-col items-center bg-white rounded-xl p-3 sm:p-4 md:p-6 shadow-sm border border-gray-100 w-full max-w-xs sm:max-w-none md:max-w-[280px] hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <span className="text-xl sm:text-2xl md:text-3xl mb-1 md:mb-2 animate-pulse">
                {feature.emoji}
              </span>
              <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 text-[#002147] text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-sm text-center leading-snug md:leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in-delayed">
          <a 
            href="#contact"
            className="inline-block bg-[#002147] hover:bg-[#001634] text-white font-semibold px-6 py-3 text-sm sm:text-base rounded-lg shadow-lg transition-all duration-200 hover:scale-105 hover:-translate-y-1 w-full sm:w-auto max-w-[200px] mx-auto focus-ring"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}