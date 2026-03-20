"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

interface EnquiryModalProps {
  isOpen: boolean
  onClose: () => void
}

const serviceTypes = [
  "General consultation",
  "Structural designing",
  "Architect valuation",
  "3D elevation drawing",
  "2D elevation drawing",
  "Urban designing",
]

const buildingTypes = [
  "Residential building",
  "Commercial building",
  "Corporate building",
  "Hospital",
  "Urban landscape",
]

export function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [selectedService, setSelectedService] = useState("")
  const [selectedBuilding, setSelectedBuilding] = useState("")

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg rounded-2xl bg-background p-8 shadow-2xl animate-scale-in max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-light tracking-tight">Enquire Now</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Fill in your details and we will get back to you shortly.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-foreground focus:outline-none"
              placeholder="Your full name"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number
            </label>
            <div className="flex gap-2">
              <div className="flex items-center rounded-lg border border-border bg-muted px-3 text-sm text-muted-foreground">
                +91
              </div>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-foreground focus:outline-none"
                placeholder="Your phone number"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email <span className="text-muted-foreground">(optional)</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-foreground focus:outline-none"
              placeholder="your@email.com"
            />
          </div>

          {/* Service Type */}
          <div>
            <label className="block text-sm font-medium mb-3">
              What type of architectural service do you need?
            </label>
            <div className="flex flex-wrap gap-2">
              {serviceTypes.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className={`rounded-full border px-4 py-2 text-sm transition-all ${
                    selectedService === service
                      ? "border-foreground bg-foreground text-background"
                      : "border-border hover:border-foreground"
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Building Type */}
          <div>
            <label className="block text-sm font-medium mb-3">
              What kind of building do you want the service for?
            </label>
            <div className="flex flex-wrap gap-2">
              {buildingTypes.map((building) => (
                <button
                  key={building}
                  type="button"
                  onClick={() => setSelectedBuilding(building)}
                  className={`rounded-full border px-4 py-2 text-sm transition-all ${
                    selectedBuilding === building
                      ? "border-foreground bg-foreground text-background"
                      : "border-border hover:border-foreground"
                  }`}
                >
                  {building}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-full bg-foreground py-3.5 text-sm font-medium text-background transition-all hover:bg-foreground/90"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  )
}
