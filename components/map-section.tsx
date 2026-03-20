"use client"

import { useFadeIn } from "@/hooks/use-fade-in"
import { MapPin } from "lucide-react"

export function MapSection() {
  const { ref, isVisible } = useFadeIn(0.1)

  return (
    <section
      id="location"
      className="border-t border-border"
    >
      <div 
        ref={ref}
        className={`transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Header */}
        <div className="px-6 py-12 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-[1400px] flex flex-col items-center text-center">
            <MapPin className="h-6 w-6 text-muted-foreground mb-4" />
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
              Find us here
            </p>
            <h2 className="mt-3 text-2xl font-light tracking-tight lg:text-3xl">
              S2D Architects, Hanamkonda
            </h2>
          </div>
        </div>

        {/* Map */}
        <div className="relative h-[400px] w-full lg:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.5289!2d79.535090!3d17.996672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334e5d0000001%3A0x1234567890abcdef!2sSBI%20ATM%2C%202-10-444%2FB%2C%20Teachers%20Colony%20Rd!5e0!3m2!1sen!2sin!4v1710950400"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(100%) contrast(1.1)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="S2D Architects Location"
            className="absolute inset-0"
          />
        </div>
      </div>
    </section>
  )
}
