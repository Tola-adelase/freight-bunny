"use client"

import React from "react"
import { X, Package, ArrowRight, User, MapPin, CreditCard, CheckCircle, ArrowLeft, Calculator, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SimpleSelect } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { ShipNowFormData } from "@/types"

interface ShipNowModalProps {
  isOpen: boolean
  onClose: () => void
  form: ShipNowFormData
  currentStep: number
  estimatedCost: number | null
  updateField: (field: keyof ShipNowFormData, value: string | boolean) => void
  nextStep: () => void
  prevStep: () => void
  setCurrentStep: (step: number) => void
  onSubmit: () => void
}

export default function ShipNowModal({
  isOpen,
  onClose,
  form,
  currentStep,
  estimatedCost,
  updateField,
  nextStep,
  prevStep,
  setCurrentStep,
  onSubmit
}: ShipNowModalProps) {
  if (!isOpen) return null

  const steps = [
    { number: 1, title: "Shipping Direction", icon: ArrowRight },
    { number: 2, title: "Sender Details", icon: User },
    { number: 3, title: "Recipient Details", icon: MapPin },
    { number: 4, title: "Package Details", icon: Package },
    { number: 5, title: "Review & Pay", icon: CreditCard },
  ]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl mx-auto max-h-[98vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="sticky top-0 bg-white p-3 sm:p-4 border-b border-gray-200 rounded-t-xl flex justify-between items-center">
          <div className="opacity-0">
            <X className="h-5 w-5" />
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center">
              <Package className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
              <h2 className="text-base sm:text-lg font-bold text-[#111827]">Ship Your Package</h2>
            </div>
            <p className="text-gray-600 mt-1 text-xs sm:text-sm">Complete the form below to ship your package</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors focus-ring rounded-lg p-1"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-3 sm:p-4">
          {/* Progress Steps */}
          <div className="mb-6 sm:mb-8">
            {/* Mobile Progress */}
            <div className="sm:hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-600">Step {currentStep} of 5</span>
                <span className="text-sm text-gray-500">
                  {steps.find(s => s.number === currentStep)?.title}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${(currentStep / 5) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Desktop Progress */}
            <div className="hidden sm:flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 cursor-pointer transition-all duration-200 hover:scale-105 focus-ring ${
                      currentStep >= step.number
                        ? "bg-blue-600 border-blue-600 text-white"
                        : "border-gray-300 text-gray-400 hover:border-blue-300 hover:text-blue-500"
                    }`}
                    onClick={() => {
                      if (step.number <= currentStep || step.number === currentStep + 1) {
                        setCurrentStep(step.number)
                      }
                    }}
                  >
                    {currentStep > step.number ? <CheckCircle className="h-5 w-5" /> : <step.icon className="h-5 w-5" />}
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <p className={`text-sm font-medium ${currentStep >= step.number ? "text-blue-600" : "text-gray-400"}`}>
                      Step {step.number}
                    </p>
                    <p className={`text-xs ${currentStep >= step.number ? "text-gray-900" : "text-gray-400"}`}>
                      {step.title}
                    </p>
                  </div>
                  {index < 4 && <ArrowRight className="mx-4 h-4 w-4 text-gray-400 hidden sm:block" />}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          {currentStep === 1 && (
            <ShippingDirectionStep form={form} updateField={updateField} />
          )}
          
          {currentStep === 2 && (
            <SenderInformationStep form={form} updateField={updateField} />
          )}
          
          {currentStep === 3 && (
            <RecipientInformationStep form={form} updateField={updateField} />
          )}
          
          {currentStep === 4 && (
            <PackageInformationStep form={form} updateField={updateField} />
          )}
          
          {currentStep === 5 && (
            <ReviewAndPaymentStep form={form} estimatedCost={estimatedCost} />
          )}

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between pt-6 border-t gap-3 sm:gap-0">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center justify-center bg-white text-gray-700 border-gray-300 hover:bg-gray-50 order-2 sm:order-1 w-full sm:w-auto focus-ring"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>

            {currentStep < 5 ? (
              <Button 
                onClick={nextStep} 
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white order-1 sm:order-2 w-full sm:w-auto focus-ring"
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button 
                onClick={onSubmit} 
                className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-center order-1 sm:order-2 w-full sm:w-auto focus-ring"
              >
                <CreditCard className="mr-2 h-4 w-4" />
                Proceed to Payment
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Step Components
function ShippingDirectionStep({ form, updateField }: { form: ShipNowFormData, updateField: Function }) {
  return (
    <div className="bg-white rounded-lg border shadow-sm animate-fade-in">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <ArrowRight className="mr-2 h-5 w-5 text-blue-600" />
          Shipping Direction
        </h3>
        <p className="text-sm text-gray-600 mt-1">Choose your shipping route</p>
      </div>
      <div className="p-4 space-y-4">
        <div className="space-y-3">
          <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer transition-colors focus-ring">
            <input
              type="radio"
              name="shipDirection"
              value="uk-nigeria"
              checked={form.direction === "uk-nigeria"}
              onChange={() => updateField("direction", "uk-nigeria")}
              className="w-4 h-4 text-blue-600 focus-ring"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className="text-base font-medium text-gray-900">🇬🇧 UK → Nigeria 🇳🇬</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Ship from United Kingdom to Nigeria</p>
            </div>
          </label>
          <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer transition-colors focus-ring">
            <input
              type="radio"
              name="shipDirection"
              value="nigeria-uk"
              checked={form.direction === "nigeria-uk"}
              onChange={() => updateField("direction", "nigeria-uk")}
              className="w-4 h-4 text-blue-600 focus-ring"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className="text-base font-medium text-gray-900">🇳🇬 Nigeria → UK 🇬🇧</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Ship from Nigeria to United Kingdom</p>
            </div>
          </label>
        </div>
      </div>
    </div>
  )
}

function SenderInformationStep({ form, updateField }: { form: ShipNowFormData, updateField: Function }) {
  return (
    <div className="bg-white rounded-lg border shadow-sm animate-fade-in">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <User className="mr-2 h-5 w-5 text-blue-600" />
          Sender Information
        </h3>
        <p className="text-sm text-gray-600 mt-1">Enter your details as the sender</p>
      </div>
      <div className="p-4 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="senderName" className="text-sm font-medium text-gray-900">Full Name *</Label>
            <Input
              id="senderName"
              value={form.senderName}
              onChange={(e) => updateField("senderName", e.target.value)}
              placeholder="John Smith"
              className="mt-1 bg-white border-gray-300 text-gray-900 focus-ring"
              required
            />
          </div>
          <div>
            <Label htmlFor="senderEmail" className="text-sm font-medium text-gray-900">Email Address *</Label>
            <Input
              id="senderEmail"
              type="email"
              value={form.senderEmail}
              onChange={(e) => updateField("senderEmail", e.target.value)}
              placeholder="john@example.com"
              className="mt-1 bg-white border-gray-300 text-gray-900 focus-ring"
              required
            />
          </div>
        </div>
        {/* Add remaining sender fields... */}
      </div>
    </div>
  )
}

function RecipientInformationStep({ form, updateField }: { form: ShipNowFormData, updateField: Function }) {
  return (
    <div className="bg-white rounded-lg border shadow-sm animate-fade-in">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <MapPin className="mr-2 h-5 w-5 text-blue-600" />
          Recipient Information
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          Enter the recipient's details in {form.direction === "uk-nigeria" ? "Nigeria" : "United Kingdom"}
        </p>
      </div>
      <div className="p-4 space-y-4">
        {/* Add recipient fields... */}
      </div>
    </div>
  )
}

function PackageInformationStep({ form, updateField }: { form: ShipNowFormData, updateField: Function }) {
  return (
    <div className="bg-white rounded-lg border shadow-sm animate-fade-in">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Package className="mr-2 h-5 w-5 text-blue-600" />
          Package Information
        </h3>
        <p className="text-sm text-gray-600 mt-1">Provide details about your package</p>
      </div>
      <div className="p-4 space-y-6">
        {/* Add package fields... */}
      </div>
    </div>
  )
}

function ReviewAndPaymentStep({ form, estimatedCost }: { form: ShipNowFormData, estimatedCost: number | null }) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-4 border-b">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <Calculator className="mr-2 h-5 w-5 text-blue-600" />
            Shipping Summary
          </h3>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-900">Route:</span>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                {form.direction === "uk-nigeria" ? "🇬🇧 UK → Nigeria 🇳🇬" : "🇳🇬 Nigeria → UK 🇬🇧"}
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-900">Service:</span>
              <Badge variant="outline">
                {form.shippingService === "express" ? "Express (3-5 days)" : "Standard (7-10 days)"}
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-900">Weight:</span>
              <span className="text-gray-900">{form.weight} kg</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-900">Base Cost:</span>
              <span className="text-gray-900">£{estimatedCost?.toFixed(2)}</span>
            </div>
            {form.signature && (
              <div className="flex justify-between items-center">
                <span className="text-gray-900">Signature Required:</span>
                <span className="text-gray-900">£5.00</span>
              </div>
            )}
            <Separator />
            <div className="flex justify-between items-center font-bold text-lg">
              <span className="text-gray-900">Total:</span>
              <span className="text-blue-600">£{((estimatedCost || 0) + (form.signature ? 5 : 0)).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-4 border-b">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <CreditCard className="mr-2 h-5 w-5 text-blue-600" />
            Payment Information
          </h3>
        </div>
        <div className="p-4">
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <div className="flex items-center space-x-2 text-blue-800">
              <Shield className="h-5 w-5" />
              <span className="font-medium">Secure Payment</span>
            </div>
            <p className="text-sm text-blue-700 mt-1">Your payment information is encrypted and secure</p>
          </div>
          <p className="text-sm text-gray-600">
            You will be redirected to our secure payment processor to complete your transaction.
          </p>
        </div>
      </div>
    </div>
  )
}