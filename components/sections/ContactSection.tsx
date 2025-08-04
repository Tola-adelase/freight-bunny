"use client"

import React, { useState } from "react"
import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram, MessageCircle, Music } from "lucide-react"

interface ContactInfo {
  icon: React.ElementType
  label: string
  value: string
  color: string
}

interface SocialLink {
  icon: React.ElementType
  platform: string
  handle: string
  url: string
  color: string
}

const contactInfo: ContactInfo[] = [
  { icon: Phone, label: "UK Office", value: "+44 7392 171558", color: "text-blue-600" },
  { icon: Phone, label: "Nigeria Office", value: "+234 1 234 5678", color: "text-green-600" },
  { icon: Mail, label: "Email", value: "hello@freightbunny.com", color: "text-purple-600" }
]

const socialLinks: SocialLink[] = [
  { icon: Facebook, platform: "Facebook", handle: "@freightbunny", url: "https://www.facebook.com/share/16Wjxof9Gd/?mibextid=wwXIfr", color: "text-blue-600" },
  { icon: Twitter, platform: "Twitter/X", handle: "@freightbunny", url: "#", color: "text-blue-400" },
  { icon: Linkedin, platform: "LinkedIn", handle: "FreightBunny", url: "https://www.linkedin.com/company/freightbunny/", color: "text-blue-700" },
  { icon: Instagram, platform: "Instagram", handle: "@shipwithbunny", url: "https://www.instagram.com/shipwithbunny?igsh=MXNpaGpwZnllbDg0ag==", color: "text-pink-600" },
  { icon: MessageCircle, platform: "WhatsApp", handle: "+44 7392 171558", url: "https://wa.me/447392171558", color: "text-green-600" },
  { icon: Music, platform: "TikTok", handle: "@freightbunny", url: "https://www.tiktok.com/@freightbunny?_t=ZN-8xI2uoApuII&_r=1", color: "text-black" }
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Contact form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-700 text-lg font-medium">
              Got questions, shipping dreams, or just want to say hi? We're all ears—and boxes!<br />
              Reach out for anything you need, and don't forget to follow us on social media for the latest updates, tips, and a sprinkle of shipping magic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Contact Information */}
            <div className="bg-white rounded-lg border shadow-sm mx-auto w-full max-w-sm md:max-w-none hover-lift animate-slide-up">
              <div className="p-4 md:p-6 border-b text-center md:text-left">
                <h3 className="text-lg md:text-xl font-extrabold text-gray-900">Contact Information</h3>
              </div>
              <div className="p-3 md:p-6 space-y-3 md:space-y-6">
                <div className="space-y-3 md:space-y-4">
                  {/* Phone numbers */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2 md:gap-0 md:space-y-4">
                    {contactInfo.slice(0, 2).map((contact, index) => (
                      <div key={contact.label} className="flex items-center justify-center md:justify-start space-x-2">
                        <contact.icon className={`h-4 w-4 md:h-5 md:w-5 ${contact.color} flex-shrink-0`} />
                        <div className="text-center md:text-left">
                          <p className="font-semibold text-gray-900 text-xs md:text-sm">{contact.label}</p>
                          <p className="text-xs md:text-base font-medium text-gray-800">{contact.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Email */}
                  <div className="flex items-center justify-center md:justify-start space-x-2 mt-2 md:mt-0">
                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-purple-600 flex-shrink-0" />
                    <div className="text-center md:text-left">
                      <p className="font-semibold text-gray-900 text-xs md:text-sm">Email</p>
                      <p className="text-xs md:text-base font-medium text-gray-800">hello@freightbunny.com</p>
                    </div>
                  </div>
                </div>
                <hr className="my-2 md:my-4" />
                <div className="text-center md:text-left">
                  <p className="font-semibold text-gray-900 mb-1 md:mb-2 text-xs md:text-sm">Business Hours</p>
                  <p className="text-xs md:text-sm text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM (GMT)</p>
                  <p className="text-xs md:text-sm text-gray-700">Saturday: 10:00 AM - 4:00 PM (GMT)</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-lg border shadow-sm mx-auto w-full max-w-sm md:max-w-none hover-lift animate-slide-up" style={{ animationDelay: "100ms" }}>
              <div className="p-4 md:p-6 border-b text-center md:text-left">
                <h3 className="text-lg md:text-xl font-extrabold text-gray-900">Follow Us</h3>
              </div>
              <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                <div className="space-y-2 md:space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center md:justify-start space-x-3 p-2 md:p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 hover:scale-105 focus-ring group"
                    >
                      <social.icon className={`h-5 w-5 ${social.color} flex-shrink-0 group-hover:scale-110 transition-transform duration-200`} />
                      <div className="text-center md:text-left">
                        <p className="font-medium text-gray-900">{social.platform}</p>
                        <p className="text-xs md:text-sm text-gray-700">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg border shadow-sm mx-auto w-full max-w-sm md:max-w-none hover-lift animate-slide-up" style={{ animationDelay: "200ms" }}>
              <div className="p-4 md:p-6 border-b text-center md:text-left">
                <h3 className="text-lg md:text-xl font-extrabold text-gray-900">Send us a Message</h3>
              </div>
              <div className="p-4 md:p-6">
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="flex flex-col items-center md:items-start">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2 text-center md:text-left">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="w-full max-w-xs md:max-w-none px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500 text-center md:text-left focus-ring transition-all duration-200"
                      required
                    />
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2 text-center md:text-left">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full max-w-xs md:max-w-none px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500 text-center md:text-left focus-ring transition-all duration-200"
                      required
                    />
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2 text-center md:text-left">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="How can we help you?"
                      rows={6}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500 text-center md:text-left focus-ring transition-all duration-200"
                      required
                    ></textarea>
                  </div>
                  <div className="flex justify-center md:justify-start">
                    <button 
                      type="submit"
                      className="w-full max-w-xs md:max-w-none bg-blue-600 text-white py-3 px-4 rounded-md font-bold text-base md:text-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105 hover:-translate-y-1 focus-ring"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}