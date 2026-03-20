"use client"

import Image from "next/image"
import { useFadeIn } from "@/hooks/use-fade-in"

const teamMembers = [
  {
    name: "Ar. Suresh Kumar",
    role: "Principal Architect",
    education: "B.Arch, M.Plan",
    registration: "COA Reg. No. CA/2008/12345",
    image: "/images/team-1.jpg",
  },
  {
    name: "Ar. Deepak Reddy",
    role: "Design Director",
    education: "B.Arch, M.Arch",
    registration: "COA Reg. No. CA/2010/23456",
    image: "/images/team-2.jpg",
  },
  {
    name: "Ar. Priya Sharma",
    role: "Senior Architect",
    education: "B.Arch",
    registration: "COA Reg. No. CA/2015/34567",
    image: "/images/team-3.jpg",
  },
  {
    name: "Ar. Rajesh Goud",
    role: "Project Architect",
    education: "B.Arch",
    registration: "COA Reg. No. CA/2018/45678",
    image: "/images/team-4.jpg",
  },
]

function TeamCard({ member, index }: { member: typeof teamMembers[0]; index: number }) {
  const { ref, isVisible } = useFadeIn(0.1)
  
  return (
    <div 
      ref={ref}
      className={`group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative mb-6 aspect-[3/4] overflow-hidden rounded-lg">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/10" />
      </div>
      <h3 className="text-lg font-medium tracking-tight">
        {member.name}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {member.role}
      </p>
      <div className="mt-4 space-y-1 border-t border-border pt-4">
        <p className="text-sm text-muted-foreground">
          {member.education}
        </p>
        <p className="text-xs text-muted-foreground/70">
          {member.registration}
        </p>
      </div>
    </div>
  )
}

export function TeamSection() {
  const { ref: headerRef, isVisible: headerVisible } = useFadeIn(0.1)

  return (
    <section
      id="team"
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
            The People
          </p>
          <h2 className="text-3xl font-light tracking-tight lg:text-4xl xl:text-5xl">
            Our Team
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
