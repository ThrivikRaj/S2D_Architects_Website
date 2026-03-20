"use client"

import Image from "next/image"
import { useFadeIn } from "@/hooks/use-fade-in"

const galleryImages = [
  { src: "/images/project-1.jpg", alt: "Architecture project 1" },
  { src: "/images/project-2.jpg", alt: "Architecture project 2" },
  { src: "/images/project-3.jpg", alt: "Architecture project 3" },
  { src: "/images/project-4.jpg", alt: "Architecture project 4" },
  { src: "/images/hero-architecture.jpg", alt: "Featured architecture" },
  { src: "/images/service-interiors.jpg", alt: "Interior design" },
]

function GalleryImage({ image, index, isLarge }: { image: typeof galleryImages[0]; index: number; isLarge?: boolean }) {
  const { ref, isVisible } = useFadeIn(0.1)
  
  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-700 ${
        isLarge ? "md:col-span-2 md:row-span-2" : ""
      } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className={`relative ${isLarge ? "aspect-square" : "aspect-[4/3]"}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/10" />
      </div>
    </div>
  )
}

export function GallerySection() {
  const { ref: headerRef, isVisible: headerVisible } = useFadeIn(0.1)

  return (
    <section
      id="gallery"
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
            Visual Portfolio
          </p>
          <h2 className="text-3xl font-light tracking-tight lg:text-4xl xl:text-5xl">
            Gallery
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {galleryImages.map((image, index) => (
            <GalleryImage 
              key={index} 
              image={image} 
              index={index} 
              isLarge={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
