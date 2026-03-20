"use client"

import Image from "next/image"
import { useFadeIn } from "@/hooks/use-fade-in"

export function AboutSection() {
  const { ref: imageRef, isVisible: imageVisible } = useFadeIn(0.1)
  const { ref: contentRef, isVisible: contentVisible } = useFadeIn(0.1)

  return (
    <section
      id="about"
      className="px-6 py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column - Image */}
          <div 
            ref={imageRef}
            className={`relative aspect-[4/5] overflow-hidden rounded-lg transition-all duration-700 ${
              imageVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <Image
              src="/images/project-2.jpg"
              alt="S2D Architects design philosophy"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column - Content */}
          <div 
            ref={contentRef}
            className={`flex flex-col justify-center transition-all duration-700 delay-200 ${
              contentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <p className="mb-6 text-sm tracking-[0.2em] uppercase text-muted-foreground">
              About Us
            </p>
            <h2 className="text-3xl font-light leading-tight tracking-tight lg:text-4xl xl:text-5xl text-balance">
              Good design is produced from careful study and research
            </h2>
            
            <div className="mt-10 space-y-6 lg:mt-12">
              <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
                We, S2D Architects, situated at Hanamkonda, Warangal, Telangana believe good design is produced from careful study and research, combined with technical knowledge and artistic judgment.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
                Our approach integrates innovative solutions with timeless principles, ensuring each project reflects both functionality and aesthetic excellence. We work closely with our clients to understand their vision and translate it into architectural reality.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
                Every space we create is a testament to our commitment to quality, sustainability, and the art of thoughtful design that enhances the lives of those who inhabit it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
