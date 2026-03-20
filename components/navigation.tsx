"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#gallery", label: "Gallery" },
  { href: "#team", label: "Team" },
  { href: "#about", label: "About" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Floating Pill Navigation */}
      <header className="fixed top-6 left-0 right-0 z-50 px-4 lg:px-8 animate-fade-in">
        <nav className={`mx-auto flex h-14 max-w-4xl items-center justify-between rounded-full px-2 pl-6 transition-all duration-500 ${
          isScrolled 
            ? "bg-background/90 shadow-lg backdrop-blur-md" 
            : "bg-background/80 backdrop-blur-sm"
        }`}>
          {/* Logo */}
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight"
          >
            S2D Architects
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-5 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.justdial.com/Warangal/S2D-Architects-Hanamkonda/0870PX870-X870-190912165812-T2F1_BZDET"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              JustDial
            </a>
          </div>

          {/* Contact Button + Mobile Menu */}
          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-all hover:bg-foreground/90"
            >
              Contact
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full lg:hidden"
              aria-label="Toggle menu"
            >
              <span
                className={`h-0.5 w-5 rounded-full bg-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? "translate-y-[4px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 rounded-full bg-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? "-translate-y-[4px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        <div
          className={`mx-auto mt-2 max-w-4xl overflow-hidden rounded-2xl bg-background/95 shadow-lg backdrop-blur-md transition-all duration-300 lg:hidden ${
            isMobileMenuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 p-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm transition-colors hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.justdial.com/Warangal/S2D-Architects-Hanamkonda/0870PX870-X870-190912165812-T2F1_BZDET"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-sm transition-colors hover:bg-muted"
            >
              JustDial
            </a>
            <div className="mt-2 flex gap-2 border-t border-border pt-3">
              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex-1 rounded-lg border border-border px-4 py-2.5 text-center text-sm transition-colors hover:bg-muted"
              >
                Login
              </Link>
              <Link
                href="/signup"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex-1 rounded-lg bg-foreground px-4 py-2.5 text-center text-sm text-background transition-colors hover:bg-foreground/90"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
