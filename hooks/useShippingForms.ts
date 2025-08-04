"use client"

import { useState, useEffect } from "react"
import { ShipNowFormData, QuoteCalculatorFormData, CalculatedQuote, NigerianZones } from "@/types"

// Initial form data
const initialShipNowForm: ShipNowFormData = {
  direction: "uk-nigeria",
  senderName: "",
  senderEmail: "",
  senderPhone: "",
  senderAddress: "",
  senderCity: "",
  senderPostcode: "",
  senderState: "",
  senderCountry: "United Kingdom",
  recipientName: "",
  recipientEmail: "",
  recipientPhone: "",
  recipientAddress: "",
  recipientCity: "",
  recipientState: "",
  recipientPostcode: "",
  recipientCountry: "Nigeria",
  packageType: "",
  weight: "",
  length: "",
  width: "",
  height: "",
  value: "",
  description: "",
  shippingService: "",
  insurance: true,
  signature: false,
  tracking: true,
}

const initialQuoteForm: QuoteCalculatorFormData = {
  weight: "",
  packageType: "",
  customPackageType: "",
  from: "UK",
  to: "Nigeria",
  deliveryLocation: "",
  deliveryAddress: "",
  needsDelivery: true,
  senderName: "",
  senderEmail: "",
  senderPhone: "",
}

// Nigerian zones data
const nigerianZones: NigerianZones = {
  "Zone 1": {
    states: ["Lagos"],
    rates: { "0-10kg": 10000, "11-30kg": 25000, "31-50kg": 35000, "above50kg": 500 }
  },
  "Zone 2": {
    states: ["Oyo", "Ogun", "Ekiti", "Ondo", "Osun"],
    rates: { "0-10kg": 13000, "11-30kg": 28000, "31-50kg": 38000, "above50kg": 650 }
  },
  "Zone 3": {
    states: ["Benue", "Kogi", "Kwara", "Nassarawa", "Niger", "Plateau", "Abuja (FCT)"],
    rates: { "0-10kg": 15000, "11-30kg": 30000, "31-50kg": 40000, "above50kg": 900 }
  },
  "Zone 4": {
    states: ["Akwa Ibom", "Bayelsa", "Rivers", "Cross River", "Delta", "Edo"],
    rates: { "0-10kg": 17000, "11-30kg": 33000, "31-50kg": 45000, "above50kg": 1000 }
  },
  "Zone 5": {
    states: ["Abia", "Anambra", "Ebonyi", "Enugu", "Imo"],
    rates: { "0-10kg": 20000, "11-30kg": 36000, "31-50kg": 48000, "above50kg": 1150 }
  },
  "Zone 6": {
    states: ["Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Sokoto", "Zamfara"],
    rates: { "0-10kg": 22000, "11-30kg": 40000, "31-50kg": 50000, "above50kg": 1250 }
  },
  "Zone 7": {
    states: ["Adamawa", "Bauchi", "Borno", "Gombe", "Taraba", "Yobe"],
    rates: { "0-10kg": 25000, "11-30kg": 45000, "31-50kg": 55000, "above50kg": 1400 }
  }
}

export function useShipNowForm() {
  const [form, setForm] = useState<ShipNowFormData>(initialShipNowForm)
  const [currentStep, setCurrentStep] = useState(1)
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null)

  const updateField = (field: keyof ShipNowFormData, value: string | boolean) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const calculateEstimate = () => {
    const weight = Number.parseFloat(form.weight) || 0
    const baseRate = form.shippingService === "express" ? 25 : 15
    const cost = weight * baseRate
    setEstimatedCost(cost)
  }

  const resetForm = () => {
    setForm(initialShipNowForm)
    setCurrentStep(1)
    setEstimatedCost(null)
  }

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
      if (currentStep === 4) {
        calculateEstimate()
      }
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return {
    form,
    currentStep,
    estimatedCost,
    updateField,
    calculateEstimate,
    resetForm,
    nextStep,
    prevStep,
    setCurrentStep
  }
}

export function useQuoteCalculator() {
  const [form, setForm] = useState<QuoteCalculatorFormData>(initialQuoteForm)
  const [calculatedQuote, setCalculatedQuote] = useState<CalculatedQuote | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const updateField = (field: keyof QuoteCalculatorFormData, value: string | boolean) => {
    const updatedForm = { ...form, [field]: value }
    
    // Clear custom package type when package type changes to something other than "other"
    if (field === "packageType" && value !== "other") {
      updatedForm.customPackageType = ""
    }
    
    // Clear delivery address when switching from delivery to pickup
    if (field === "needsDelivery" && !value) {
      updatedForm.deliveryAddress = ""
    }
    
    setForm(updatedForm)
    
    // Recalculate quote when relevant fields change
    if (['weight', 'packageType', 'customPackageType', 'from', 'to', 'deliveryLocation', 'deliveryAddress', 'needsDelivery'].includes(field)) {
      setTimeout(() => calculateQuote(updatedForm), 100)
    }
  }

  const calculateQuote = (formData: QuoteCalculatorFormData) => {
    const weight = parseFloat(formData.weight)
    if (!weight || weight <= 0) {
      setCalculatedQuote(null)
      return
    }

    const actualWeight = Math.max(weight, 1) // Minimum 1kg
    let shippingCost = actualWeight * 9 // £9 per kg base rate
    let handlingFee = 0
    let deliveryFee = 0
    let deliveryFeeCurrency = ""
    
    // Calculate handling fees
    if (formData.from === "UK" && formData.to === "Nigeria") {
      // Special item handling fees
      if (formData.packageType === "phones") handlingFee = 20
      else if (formData.packageType === "ipads") handlingFee = 20
      else if (formData.packageType === "laptops") handlingFee = 30
      else handlingFee = 30 // General handling fee
      
      // Calculate delivery fee within Nigeria (convert to GBP)
      if (formData.needsDelivery && formData.deliveryAddress) {
        let ngnDeliveryFee = 0
        const address = formData.deliveryAddress.toLowerCase()
        let estimatedZone = null
        
        if (address.includes('lagos') || address.includes('abuja')) {
          estimatedZone = nigerianZones['Zone 1']
        } else if (address.includes('ogun') || address.includes('oyo') || address.includes('osun') || 
                   address.includes('ondo') || address.includes('ekiti') || address.includes('kwara') || 
                   address.includes('kogi') || address.includes('niger') || address.includes('kaduna') || 
                   address.includes('kano')) {
          estimatedZone = nigerianZones['Zone 2']
        } else {
          // Default to Zone 3 for other areas
          estimatedZone = nigerianZones['Zone 3']
        }
        
        if (estimatedZone) {
          const rates = estimatedZone.rates
          if (actualWeight <= 10) ngnDeliveryFee = rates["0-10kg"]
          else if (actualWeight <= 30) ngnDeliveryFee = rates["11-30kg"]
          else if (actualWeight <= 50) ngnDeliveryFee = rates["31-50kg"]
          else ngnDeliveryFee = actualWeight * rates["above50kg"]
          
          // Convert NGN to GBP (approximate rate: 1 GBP = 1800 NGN)
          const ngnToGbpRate = 1800
          deliveryFee = Math.round((ngnDeliveryFee / ngnToGbpRate) * 100) / 100
          deliveryFeeCurrency = "GBP"
        }
      }
    } else if (formData.from === "Nigeria" && formData.to === "UK") {
      handlingFee = 5 // £5 handling fee for Nigeria to UK
      
      // Calculate delivery fee within UK
      if (formData.needsDelivery) {
        if (actualWeight <= 2) deliveryFee = 5
        else if (actualWeight <= 5) deliveryFee = 9
        else if (actualWeight <= 10) deliveryFee = 13
        else {
          deliveryFee = 0 // Customer arranges delivery for 10kg+
          deliveryFeeCurrency = "ARRANGE"
        }
        
        if (deliveryFeeCurrency !== "ARRANGE") {
          deliveryFeeCurrency = "GBP"
        }
      }
    }

    const totalGBP = shippingCost + handlingFee + (deliveryFeeCurrency === "GBP" ? deliveryFee : 0)
    
    setCalculatedQuote({
      weight: actualWeight,
      shippingCost,
      handlingFee,
      deliveryFee,
      deliveryFeeCurrency,
      totalGBP,
      from: formData.from,
      to: formData.to,
      packageType: formData.packageType,
      deliveryLocation: formData.deliveryLocation,
      needsDelivery: formData.needsDelivery
    })
  }

  const resetForm = () => {
    setForm(initialQuoteForm)
    setCalculatedQuote(null)
    setIsSubmitting(false)
  }

  // Auto-calculate quote when form changes
  useEffect(() => {
    if (form.weight && form.from && form.to) {
      const timer = setTimeout(() => {
        calculateQuote(form)
      }, 100)
      return () => clearTimeout(timer)
    } else {
      setCalculatedQuote(null)
    }
  }, [form])

  return {
    form,
    calculatedQuote,
    isSubmitting,
    setIsSubmitting,
    updateField,
    calculateQuote,
    resetForm,
    nigerianZones
  }
}