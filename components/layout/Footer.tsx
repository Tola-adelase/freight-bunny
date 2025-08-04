"use client"

import React from "react"
import { Facebook, Twitter, Instagram, MessageCircle } from "lucide-react"

interface FooterLink {
  label: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

const footerSections: FooterSection[] = [
  {
    title: "Services",
    links: [
      { label: "Express Shipping", href: "#" },
      { label: "Standard Shipping", href: "#" },
      { label: "Cargo Shipping", href: "#" },
      { label: "Package Tracking", href: "#" }
    ]
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Shipping Guide", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" }
    ]
  }
]

const socialLinks = [
  { 
    icon: Facebook, 
    label: "Facebook", 
    href: "https://www.facebook.com/share/16Wjxof9Gd/?mibextid=wwXIfr",
    color: "text-blue-600" 
  },
  { 
    icon: Twitter, 
    label: "Twitter/X", 
    href: "https://twitter.com/freightbunny",
    color: "text-blue-400" 
  },
  { 
    icon: Instagram, 
    label: "Instagram", 
    href: "https://www.instagram.com/shipwithbunny?igsh=MXNpaGpwZnllbDg0ag==",
    color: "text-pink-600" 
  },
  { 
    icon: MessageCircle, 
    label: "WhatsApp", 
    href: "https://wa.me/447392171558",
    color: "text-green-600" 
  }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start animate-fade-in">
            <div className="flex items-center space-x-2 mb-4 justify-center md:justify-start">
              <img
                src="/images/Headerlogo.jpg"
                alt="FreightBunny - Fast Shipping"
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-bold">FreightBunny</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs mx-auto md:mx-0 text-center md:text-left leading-relaxed">
              Connecting UK and Nigeria through reliable, fast, and secure shipping services.
            </p>
          </div>

          {/* Services & Support Sections */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="flex flex-col items-center md:items-start animate-slide-up" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="hover:text-white transition-colors duration-200 hover:underline focus-ring rounded px-1 py-0.5"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start animate-slide-up" style={{ animationDelay: "300ms" }}>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center md:justify-start space-x-2 hover:text-white transition-all duration-200 hover:scale-105 focus-ring rounded px-1 py-1 group"
                  >
                    <social.icon className={`h-4 w-4 ${social.color} group-hover:scale-110 transition-transform duration-200`} />
                    <span>{social.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-800" />

        <div className="text-center text-sm text-gray-400 animate-fade-in-delayed">
          <p>&copy; 2024 FreightBunny. All rights reserved. | Connecting UK & Nigeria with reliable shipping.</p>
        </div>
      </div>
    </footer>
  )
}