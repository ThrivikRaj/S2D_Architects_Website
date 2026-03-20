"use client"

import { useState } from "react"
import { useFadeIn } from "@/hooks/use-fade-in"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  
  const { ref: leftRef, isVisible: leftVisible } = useFadeIn(0.1)
  const { ref: rightRef, isVisible: rightVisible } = useFadeIn(0.1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section
      id="contact"
      className="bg-foreground px-6 py-24 text-background lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column - Contact Info */}
          <div 
            ref={leftRef}
            className={`transition-all duration-700 ${
              leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="mb-4 text-sm tracking-[0.2em] uppercase opacity-60">
              Get in Touch
            </p>
            <h2 className="text-3xl font-light tracking-tight lg:text-4xl xl:text-5xl">
              Contact Us
            </h2>

            <div className="mt-12 space-y-8">
              <div>
                <span className="mb-2 block text-sm tracking-wide opacity-60">
                  Address
                </span>
                <address className="text-base not-italic leading-relaxed lg:text-lg">
                  S2D Architects
                  <br />
                  Hanamkonda, Warangal
                  <br />
                  Telangana, India
                </address>
              </div>
              
              <div>
                <span className="mb-2 block text-sm tracking-wide opacity-60">
                  Email
                </span>
                <a
                  href="mailto:info@s2darchitects.com"
                  className="text-base transition-opacity hover:opacity-80 lg:text-lg"
                >
                  info@s2darchitects.com
                </a>
              </div>
              
              <div>
                <span className="mb-2 block text-sm tracking-wide opacity-60">
                  Phone
                </span>
                <a
                  href="tel:+919876543210"
                  className="block text-base transition-opacity hover:opacity-80 lg:text-lg"
                >
                  +91 98765 43210
                </a>
                <a
                  href="tel:+919876543211"
                  className="block text-base transition-opacity hover:opacity-80 lg:text-lg"
                >
                  +91 98765 43211
                </a>
              </div>
              
              <div>
                <span className="mb-2 block text-sm tracking-wide opacity-60">
                  Office Hours
                </span>
                <p className="text-base lg:text-lg">
                  Monday - Saturday
                  <br />
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div 
            ref={rightRef}
            className={`flex flex-col justify-center transition-all duration-700 delay-200 ${
              rightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm tracking-wide opacity-60">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-b border-background/30 bg-transparent py-3 text-base outline-none transition-colors placeholder:opacity-40 focus:border-background"
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="mb-2 block text-sm tracking-wide opacity-60">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border-b border-background/30 bg-transparent py-3 text-base outline-none transition-colors placeholder:opacity-40 focus:border-background"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm tracking-wide opacity-60">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border-b border-background/30 bg-transparent py-3 text-base outline-none transition-colors placeholder:opacity-40 focus:border-background"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="mb-2 block text-sm tracking-wide opacity-60">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none border-b border-background/30 bg-transparent py-3 text-base outline-none transition-colors placeholder:opacity-40 focus:border-background"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="mt-2 rounded-full border border-background px-10 py-3 text-sm font-medium tracking-wide transition-colors hover:bg-background hover:text-foreground"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
