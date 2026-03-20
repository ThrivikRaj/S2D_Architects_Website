"use client"

import Link from "next/link"
import { useFadeIn } from "@/hooks/use-fade-in"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#team", label: "Team" },
  { href: "#projects", label: "Projects" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  const { ref, isVisible } = useFadeIn(0.1)

  return (
    <footer 
      ref={ref}
      className={`border-t border-border px-6 py-12 lg:px-12 lg:py-16 transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-16">
          {/* Logo & Description */}
          <div>
            <Link
              href="/"
              className="text-sm font-semibold tracking-tight"
            >
              S2D Architects
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Architecture studio in Hanamkonda, Warangal, Telangana. Creating thoughtful spaces through careful study, research, and artistic judgment.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <span className="mb-5 block text-sm tracking-wide text-muted-foreground">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/login"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <span className="mb-5 block text-sm tracking-wide text-muted-foreground">
              Contact
            </span>
            <div className="space-y-2.5">
              <a
                href="mailto:info@s2darchitects.com"
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                info@s2darchitects.com
              </a>
              <a
                href="tel:+919876543210"
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                +91 98765 43210
              </a>
              <p className="text-sm text-muted-foreground">
                Hanamkonda, Warangal
                <br />
                Telangana, India
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} S2D Architects. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
