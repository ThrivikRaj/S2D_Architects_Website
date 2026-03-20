"use client"

import Image from "next/image"
import { useFadeIn } from "@/hooks/use-fade-in"

const services = [
  {
    title: "Residential",
    description: "Thoughtfully designed homes that balance comfort, function, and timeless aesthetics for modern living.",
    image: "/images/service-residential.jpg",
  },
  {
    title: "Commercial",
    description: "Dynamic workspaces and retail environments that inspire productivity and elevate brand presence.",
    image: "/images/service-commercial.jpg",
  },
  {
    title: "Hospitality",
    description: "Immersive hotel and restaurant designs that create memorable guest experiences through spatial storytelling.",
    image: "/images/service-hospitality.jpg",
  },
  {
    title: "Recreational",
    description: "Community spaces and leisure facilities that foster connection and well-being through thoughtful design.",
    image: "/images/service-recreational.jpg",
  },
  {
    title: "Interiors",
    description: "Interior solutions that harmonize with architecture, crafting spaces of beauty and purpose.",
    image: "/images/service-interiors.jpg",
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isVisible } = useFadeIn(0.1)
  
  return (
    <div
      ref={ref}
      className={`group cursor-pointer transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/10" />
      </div>
      
      {/* Content */}
      <span className="mb-3 block text-sm text-muted-foreground">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mb-3 text-xl font-medium tracking-tight transition-colors group-hover:text-muted-foreground lg:text-2xl">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground lg:text-base">
        {service.description}
      </p>
    </div>
  )
}

export function ServicesSection() {
  const { ref: headerRef, isVisible: headerVisible } = useFadeIn(0.1)
  
  return (
    <section
      id="services"
      className="border-t border-border px-6 py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`mb-16 lg:mb-24 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="mb-4 text-sm tracking-[0.2em] uppercase text-muted-foreground">
            What We Do
          </p>
          <h2 className="text-3xl font-light tracking-tight lg:text-4xl xl:text-5xl">
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
