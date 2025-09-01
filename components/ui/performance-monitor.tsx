"use client"

import { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        console.log('LCP:', lastEntry.startTime)
        
        // Send to analytics
        if (lastEntry.startTime < 2500) {
          console.log('LCP: Good')
        } else if (lastEntry.startTime < 4000) {
          console.log('LCP: Needs Improvement')
        } else {
          console.log('LCP: Poor')
        }
      })
      
      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
      } catch (e) {
        console.warn('LCP observer not supported')
      }

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          console.log('FID:', entry.processingStart - entry.startTime)
          
          const fid = entry.processingStart - entry.startTime
          if (fid < 100) {
            console.log('FID: Good')
          } else if (fid < 300) {
            console.log('FID: Needs Improvement')
          } else {
            console.log('FID: Poor')
          }
        })
      })
      
      try {
        fidObserver.observe({ entryTypes: ['first-input'] })
      } catch (e) {
        console.warn('FID observer not supported')
      }

      // Cumulative Layout Shift (CLS)
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        })
        
        console.log('CLS:', clsValue)
        
        if (clsValue < 0.1) {
          console.log('CLS: Good')
        } else if (clsValue < 0.25) {
          console.log('CLS: Needs Improvement')
        } else {
          console.log('CLS: Poor')
        }
      })
      
      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] })
      } catch (e) {
        console.warn('CLS observer not supported')
      }
    }

    // Monitor page load time
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        const loadTime = performance.now()
        console.log('Page Load Time:', loadTime)
        
        // Navigation timing
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (navigation) {
          console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart)
          console.log('Load Complete:', navigation.loadEventEnd - navigation.loadEventStart)
        }
      })
    }
  }, [])

  return null
}
