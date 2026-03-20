"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { EnquiryModal } from "./enquiry-modal"

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id="home" className="relative flex min-h-screen flex-col justify-center px-6 lg:px-12">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-architecture.jpg"
            alt="Modern architectural design by S2D Architects"
            fill
            priority
            loading="eager"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>

        {/* Main Content */}
        <div className="mx-auto flex w-full max-w-[1800px] flex-col items-center justify-center text-center text-background">
          <h1 className="text-6xl font-light leading-none tracking-[0.3em] uppercase md:text-8xl lg:text-9xl opacity-0 animate-fade-in-up animation-delay-200">
            S2D
          </h1>
          <h1 className="mt-2 text-4xl font-light leading-none tracking-[0.4em] uppercase md:text-5xl lg:text-6xl opacity-0 animate-fade-in-up animation-delay-400">
            Architects
          </h1>
          <div className="mt-12 h-px w-24 bg-background/40 opacity-0 animate-fade-in animation-delay-600" />
          <p className="mt-12 max-w-xl text-lg font-light leading-relaxed tracking-wide opacity-0 lg:text-xl animate-fade-in-up animation-delay-800">
            Crafting timeless spaces through vision and precision
          </p>

          {/* Enquire Now Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-10 rounded-full border border-background/60 px-8 py-3 text-sm font-medium tracking-wide text-background transition-all hover:bg-background hover:text-foreground opacity-0 animate-fade-in-up animation-delay-1000"
          >
            Enquire Now
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-1200">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-background opacity-60 transition-opacity hover:opacity-100"
            aria-label="Scroll to about section"
          >
            <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </section>

      {/* Enquiry Modal */}
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
