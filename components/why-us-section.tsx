"use client"

import { useFadeIn } from "@/hooks/use-fade-in"

const reasons = [
  {
    title: "Our Aim",
    description:
      "To create architecture that transcends trends and serves the fundamental human need for spaces that inspire, protect, and nurture. We pursue excellence in every project, regardless of scale.",
  },
  {
    title: "Our Team",
    description:
      "A dedicated group of architects, designers, and engineers united by a shared passion for meaningful design. Our collaborative approach ensures diverse perspectives inform every decision.",
  },
  {
    title: "Our Design",
    description:
      "Rooted in research and refined through iteration, our design philosophy balances innovation with practicality. We believe the best solutions emerge from deep understanding of context and purpose.",
  },
]

function ReasonCard({ reason, index }: { reason: typeof reasons[0]; index: number }) {
  const { ref, isVisible } = useFadeIn(0.1)
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <span className="mb-5 block text-sm opacity-40">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mb-5 text-xl font-medium tracking-tight lg:text-2xl">
        {reason.title}
      </h3>
      <p className="text-base leading-relaxed opacity-70">
        {reason.description}
      </p>
    </div>
  )
}

export function WhyUsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useFadeIn(0.1)

  return (
    <section
      id="why-us"
      className="bg-foreground px-6 py-24 text-background lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`mb-16 lg:mb-24 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="mb-4 text-sm tracking-[0.2em] uppercase opacity-60">
            Our Philosophy
          </p>
          <h2 className="text-3xl font-light tracking-tight lg:text-4xl xl:text-5xl">
            Why Choose Us
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid gap-12 md:grid-cols-3 lg:gap-16">
          {reasons.map((reason, index) => (
            <ReasonCard key={reason.title} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
