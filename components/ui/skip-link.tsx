"use client"

import React from 'react'

interface SkipLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function SkipLink({ href, children, className = '' }: SkipLinkProps) {
  return (
    <a
      href={href}
      className={`absolute left-4 top-4 z-50 -translate-y-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
    >
      {children}
    </a>
  )
}
