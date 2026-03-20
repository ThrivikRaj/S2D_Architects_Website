"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ArrowLeft, Eye, EyeOff, Check } from "lucide-react"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const passwordRequirements = [
    { label: "At least 8 characters", met: formData.password.length >= 8 },
    { label: "Contains a number", met: /\d/.test(formData.password) },
    { label: "Contains uppercase letter", met: /[A-Z]/.test(formData.password) },
  ]

  return (
    <main className="flex min-h-screen">
      {/* Left Side - Form */}
      <div className="flex w-full flex-col justify-center px-8 lg:w-1/2 lg:px-16 xl:px-24">
        {/* Back Link */}
        <Link
          href="/"
          className="absolute top-8 left-8 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground opacity-0 animate-fade-in animation-delay-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="mx-auto w-full max-w-md">
          {/* Header */}
          <div className="mb-10 opacity-0 animate-fade-in-up animation-delay-200">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              S2D
            </Link>
            <h1 className="mt-8 text-3xl font-light tracking-tight">
              Create your account
            </h1>
            <p className="mt-3 text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground">
                Sign in
              </Link>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 opacity-0 animate-fade-in-up animation-delay-400">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Full name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-foreground focus:outline-none"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-foreground focus:outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 pr-12 text-sm transition-colors focus:border-foreground focus:outline-none"
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              
              {/* Password Requirements */}
              {formData.password && (
                <div className="mt-3 space-y-2">
                  {passwordRequirements.map((req) => (
                    <div
                      key={req.label}
                      className={`flex items-center gap-2 text-xs transition-colors ${
                        req.met ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      <div className={`flex h-4 w-4 items-center justify-center rounded-full border transition-all ${
                        req.met ? "border-foreground bg-foreground text-background" : "border-muted-foreground"
                      }`}>
                        {req.met && <Check className="h-2.5 w-2.5" />}
                      </div>
                      {req.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium">
                Confirm password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-foreground focus:outline-none"
                placeholder="Confirm your password"
              />
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="mt-2 text-xs text-destructive">Passwords do not match</p>
              )}
            </div>

            <div className="flex items-start gap-2 pt-2">
              <input type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-border" />
              <label className="text-sm text-muted-foreground">
                I agree to the{" "}
                <Link href="#" className="text-foreground underline underline-offset-4">Terms of Service</Link>
                {" "}and{" "}
                <Link href="#" className="text-foreground underline underline-offset-4">Privacy Policy</Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-foreground py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Create account
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4 opacity-0 animate-fade-in animation-delay-600">
            <div className="h-px flex-1 bg-border" />
            <span className="text-sm text-muted-foreground">or continue with</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Social Signup */}
          <div className="grid grid-cols-2 gap-4 opacity-0 animate-fade-in-up animation-delay-700">
            <button className="flex items-center justify-center gap-2 rounded-lg border border-border py-3 text-sm transition-colors hover:bg-muted">
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border border-border py-3 text-sm transition-colors hover:bg-muted">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="relative hidden w-1/2 lg:block">
        <Image
          src="/images/service-interiors.jpg"
          alt="Interior Design"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="absolute bottom-12 left-12 right-12 text-background">
          <h2 className="text-4xl font-light tracking-tight opacity-0 animate-fade-in-up animation-delay-200">
            Join our community
          </h2>
          <p className="mt-4 text-lg opacity-0 animate-fade-in-up animation-delay-400">
            Start your architectural journey with S2D.
          </p>
</div>
        </div>
      </div>
    </main>
  )
}
