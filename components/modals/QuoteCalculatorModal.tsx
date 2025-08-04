"use client"

import React from "react"
import { X, Calculator, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { QuoteCalculatorFormData, CalculatedQuote, NigerianZones } from "@/types"

interface QuoteCalculatorModalProps {
  isOpen: boolean
  onClose: () => void
  form: QuoteCalculatorFormData
  calculatedQuote: CalculatedQuote | null
  isSubmitting: boolean
  updateField: (field: keyof QuoteCalculatorFormData, value: string | boolean) => void
  onSubmit: () => void
  nigerianZones: NigerianZones
}

export default function QuoteCalculatorModal({
  isOpen,
  onClose,
  form,
  calculatedQuote,
  isSubmitting,
  updateField,
  onSubmit,
  nigerianZones
}: QuoteCalculatorModalProps) {
  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-7xl mx-auto max-h-[98vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="sticky top-0 bg-white p-3 sm:p-4 border-b border-gray-200 rounded-t-xl flex justify-between items-center">
          <div className="opacity-0">
            <X className="h-5 w-5" />
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center">
              <Calculator className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
              <h2 className="text-base sm:text-lg font-bold text-[#111827]">Get Shipping Quote</h2>
            </div>
            <p className="text-gray-600 mt-1 text-xs sm:text-sm">Calculate accurate shipping costs for your package</p>
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
        <div className="grid lg:grid-cols-2 gap-3 sm:gap-4 p-3 sm:p-4">
          {/* Quote Form */}
          <div className="space-y-3">
            <div className="bg-white rounded-lg border shadow-sm animate-fade-in">
              <div className="p-3 border-b">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 flex items-center">
                  <Package className="mr-2 h-4 w-4 text-blue-600" />
                  Shipping Details
                </h3>
              </div>
              <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                {/* Direction */}
                <div>
                  <label className="text-sm sm:text-base font-medium mb-2 block text-gray-900">Shipping Direction</label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="direction"
                        value="uk-nigeria"
                        checked={form.from === "UK" && form.to === "Nigeria"}
                        onChange={() => {
                          updateField("from", "UK")
                          updateField("to", "Nigeria")
                          updateField("deliveryLocation", "")
                          updateField("packageType", "")
                          updateField("customPackageType", "")
                        }}
                        className="w-4 h-4 text-blue-600 focus-ring"
                      />
                      <span className="text-sm sm:text-base text-gray-700">UK → Nigeria</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="direction"
                        value="nigeria-uk"
                        checked={form.from === "Nigeria" && form.to === "UK"}
                        onChange={() => {
                          updateField("from", "Nigeria")
                          updateField("to", "UK")
                          updateField("deliveryLocation", "")
                          updateField("packageType", "")
                          updateField("customPackageType", "")
                        }}
                        className="w-4 h-4 text-blue-600 focus-ring"
                      />
                      <span className="text-sm sm:text-base text-gray-700">Nigeria → UK</span>
                    </label>
                  </div>
                </div>

                {/* Weight */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Package Weight (kg) *</label>
                  <input
                    type="number"
                    step="0.1"
                    min="0.1"
                    value={form.weight}
                    onChange={(e) => updateField("weight", e.target.value)}
                    className="w-full px-3 py-3 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-base sm:text-sm focus-ring"
                    placeholder="Enter weight in kg"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Minimum weight: 1kg</p>
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    {form.from === "UK" && form.to === "Nigeria" 
                      ? "Destination State in Nigeria" 
                      : "Destination in UK"} *
                  </label>
                  {form.from === "UK" && form.to === "Nigeria" ? (
                    <select
                      value={form.deliveryLocation}
                      onChange={(e) => updateField("deliveryLocation", e.target.value)}
                      className="w-full px-3 py-3 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-base sm:text-sm focus-ring"
                      required
                    >
                      <option value="">Select destination state</option>
                      {Object.entries(nigerianZones).map(([zoneName, zoneData]) =>
                        zoneData.states.map(state => (
                          <option key={state} value={state}>{state}</option>
                        ))
                      )}
                    </select>
                  ) : (
                    <input
                      type="text"
                      value={form.deliveryLocation}
                      onChange={(e) => updateField("deliveryLocation", e.target.value)}
                      className="w-full px-3 py-3 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-base sm:text-sm focus-ring"
                      placeholder="Enter UK destination"
                      required
                    />
                  )}
                </div>

                {/* Package Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Package Type</label>
                  <select
                    value={form.packageType}
                    onChange={(e) => updateField("packageType", e.target.value)}
                    className="w-full px-3 py-3 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-base sm:text-sm focus-ring"
                    required
                  >
                    <option value="">Select package type</option>
                    {form.from === "UK" && form.to === "Nigeria" && (
                      <>
                        <option value="phones">Phones (£20 handling fee)</option>
                        <option value="ipads">iPads (£20 handling fee)</option>
                        <option value="laptops">Laptops (£30 handling fee)</option>
                      </>
                    )}
                    <option value="general">General Items (£{form.from === "UK" ? "30" : "5"} handling fee)</option>
                    <option value="electronics">Electronics</option>
                    <option value="documents">Documents</option>
                    <option value="clothing">Clothing</option>
                    <option value="medical">Medical Supplies</option>
                    <option value="gifts">Gifts</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Custom Package Type */}
                {form.packageType === "other" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Specify Item Type *</label>
                    <input
                      type="text"
                      value={form.customPackageType}
                      onChange={(e) => updateField("customPackageType", e.target.value)}
                      className="w-full px-3 py-3 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-base sm:text-sm focus-ring"
                      placeholder="Please describe what you're shipping"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">Be specific about the item(s) you want to ship</p>
                  </div>
                )}

                {/* Delivery Options */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">Delivery Required?</label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needsDelivery"
                        checked={form.needsDelivery === true}
                        onChange={() => updateField("needsDelivery", true)}
                        className="w-4 h-4 text-blue-600 focus-ring"
                      />
                      <span className="text-sm sm:text-base text-gray-700">Yes, deliver to my address</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needsDelivery"
                        checked={form.needsDelivery === false}
                        onChange={() => updateField("needsDelivery", false)}
                        className="w-4 h-4 text-blue-600 focus-ring"
                      />
                      <span className="text-sm sm:text-base text-gray-700">No, I'll arrange pickup</span>
                    </label>
                  </div>
                </div>

                {/* Delivery Address */}
                {form.needsDelivery && (
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Delivery Address *</label>
                    <textarea
                      value={form.deliveryAddress}
                      onChange={(e) => updateField("deliveryAddress", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-base sm:text-sm focus-ring"
                      placeholder="Enter full delivery address including landmarks"
                      rows={3}
                      required
                    />
                  </div>
                )}

                {/* Contact Information */}
                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Contact Information</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        value={form.senderName}
                        onChange={(e) => updateField("senderName", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm focus-ring"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        value={form.senderEmail}
                        onChange={(e) => updateField("senderEmail", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm focus-ring"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        value={form.senderPhone}
                        onChange={(e) => updateField("senderPhone", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm focus-ring"
                        placeholder="+44 or +234 ..."
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Results */}
          <div className="space-y-3">
            {calculatedQuote ? (
              <div className="bg-white rounded-lg border shadow-sm animate-scale-in">
                <div className="p-3 border-b">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Your Quote</h3>
                </div>
                <div className="p-3 sm:p-4 space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Weight:</span>
                      <span className="font-medium text-gray-900">{calculatedQuote.weight} kg</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Shipping Cost:</span>
                      <span className="font-medium text-gray-900">£{calculatedQuote.shippingCost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Handling Fee:</span>
                      <span className="font-medium text-gray-900">£{calculatedQuote.handlingFee.toFixed(2)}</span>
                    </div>
                    {calculatedQuote.deliveryFee > 0 && (
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-700">Delivery Fee:</span>
                        <span className="font-medium text-gray-900">
                          {calculatedQuote.deliveryFeeCurrency === "GBP" ? `£${calculatedQuote.deliveryFee.toFixed(2)}` : "Customer arranges"}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between items-center py-3 bg-blue-50 px-4 rounded-lg">
                      <span className="text-lg font-bold text-gray-900">Total Cost:</span>
                      <span className="text-xl font-bold text-blue-600">£{calculatedQuote.totalGBP.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      onClick={handleSubmit}
                      disabled={isSubmitting || !form.senderName || !form.senderEmail || !form.senderPhone}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 text-base rounded-lg transition-all duration-200 hover:scale-105 hover:-translate-y-1 focus-ring"
                    >
                      {isSubmitting ? "Submitting..." : "Get This Quote"}
                    </Button>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      We'll contact you within 2 hours to confirm details and arrange shipment
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 text-center animate-fade-in">
                <Calculator className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Get Your Quote</h3>
                <p className="text-gray-600">
                  Fill in the shipping details on the left to calculate your shipping costs.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}