"use client"

import Image from "next/image"
import { useFadeIn } from "@/hooks/use-fade-in"

const testimonials = [
  {
    quote:
      "S2D Architects transformed our vision into reality. Their attention to detail and understanding of our needs resulted in a home that exceeds our expectations.",
    author: "Ramesh Rao",
    role: "Homeowner, Warangal",
    image: "/images/testimonial-1.jpg",
  },
  {
    quote:
      "Working with S2D was a seamless experience. Their professionalism and innovative design approach made our commercial project a landmark in the city.",
    author: "Priyanka Reddy",
    role: "Director, Kakatiya Enterprises",
    image: "/images/testimonial-2.jpg",
  },
  {
    quote:
      "The team at S2D brought creativity and technical expertise to every stage of our project. We couldn't be happier with the results.",
    author: "Dr. Sunil Kumar",
    role: "Medical Center Project",
    image: "/images/testimonial-3.jpg",
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const { ref, isVisible } = useFadeIn(0.1)
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-8 flex items-center gap-4">
        <div className="relative h-14 w-14 overflow-hidden rounded-full">
          <Image
            src={testimonial.image}
            alt={testimonial.author}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <span className="block font-medium">{testimonial.author}</span>
          <span className="mt-0.5 block text-sm text-muted-foreground">
            {testimonial.role}
          </span>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useFadeIn(0.1)

  return (
    <section
      id="testimonials"
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
            Client Stories
          </p>
          <h2 className="text-3xl font-light tracking-tight lg:text-4xl xl:text-5xl">
            Testimonials
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-12 md:grid-cols-3 lg:gap-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
