"use client"

import Image from "next/image"
import { useFadeIn } from "@/hooks/use-fade-in"

const consultancyProjects = [
  {
    title: "Warangal Medical Center",
    category: "Healthcare",
    image: "/images/project-1.jpg",
  },
  {
    title: "Kakatiya Business Park",
    category: "Commercial",
    image: "/images/project-2.jpg",
  },
  {
    title: "Lake View Residences",
    category: "Residential",
    image: "/images/project-3.jpg",
  },
  {
    title: "Heritage Cultural Center",
    category: "Institutional",
    image: "/images/project-4.jpg",
  },
]

const constructionProjects = [
  {
    title: "Green Valley Township",
    category: "Residential Complex",
    image: "/images/project-2.jpg",
  },
  {
    title: "Sunrise Shopping Mall",
    category: "Commercial",
    image: "/images/project-3.jpg",
  },
  {
    title: "Lotus Garden Villas",
    category: "Luxury Residential",
    image: "/images/project-4.jpg",
  },
  {
    title: "Tech Hub Office Tower",
    category: "Corporate",
    image: "/images/project-1.jpg",
  },
]

function ProjectCard({ project, index }: { project: typeof consultancyProjects[0]; index: number }) {
  const { ref, isVisible } = useFadeIn(0.1)
  
  return (
    <div 
      ref={ref}
      className={`group cursor-pointer transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/10" />
      </div>
      <div className="mt-5">
        <span className="text-sm text-muted-foreground">
          {project.category}
        </span>
        <h4 className="mt-1 text-lg font-medium tracking-tight lg:text-xl">
          {project.title}
        </h4>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useFadeIn(0.1)
  const { ref: consultancyRef, isVisible: consultancyVisible } = useFadeIn(0.1)
  const { ref: constructionRef, isVisible: constructionVisible } = useFadeIn(0.1)

  return (
    <section id="projects" className="border-t border-border px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`mb-16 lg:mb-24 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="mb-4 text-sm tracking-[0.2em] uppercase text-muted-foreground">
            Our Work
          </p>
          <h2 className="text-3xl font-light tracking-tight lg:text-4xl xl:text-5xl">
            Our Projects
          </h2>
        </div>

        {/* Consultancy Projects */}
        <div className="mb-20 lg:mb-28">
          <h3 
            ref={consultancyRef}
            className={`mb-10 text-xl font-light tracking-tight text-muted-foreground lg:mb-12 lg:text-2xl transition-all duration-700 ${
              consultancyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Consultancy Projects
          </h3>
          <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
            {consultancyProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Construction Contracts */}
        <div>
          <h3 
            ref={constructionRef}
            className={`mb-10 text-xl font-light tracking-tight text-muted-foreground lg:mb-12 lg:text-2xl transition-all duration-700 ${
              constructionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Construction Contracts
          </h3>
          <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
            {constructionProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
