"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { NavLink } from "@/types"

interface HeaderProps {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
  navLinks: NavLink[]
}

export default function Header({ isMenuOpen, setIsMenuOpen, navLinks }: HeaderProps) {
  const pathname = usePathname()

  return (
    <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
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
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
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
                className={`font-semibold transition-colors duration-200 pb-1 flex items-center hover:scale-105 ${
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
                className={`font-semibold transition-all duration-200 px-4 py-2 rounded-lg w-full max-w-xs text-center hover:scale-105 ${
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
  )
}