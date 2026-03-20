import { Navigation } from "../components/navigation"
import { HeroSection } from "../components/hero-section"
import { AboutSection } from "../components/about-section"
import { ServicesSection } from "../components/services-section"
import { TeamSection } from "../components/team-section"
import { WhyUsSection } from "../components/why-us-section"
import { ProjectsSection } from "../components/projects-section"
import { GallerySection } from "../components/gallery-section"
import { TestimonialsSection } from "../components/testimonials-section"
import { ContactSection } from "../components/contact-section"
import { MapSection } from "../components/map-section"
import { Footer } from "../components/footer"

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <WhyUsSection />
      <ProjectsSection />
      <GallerySection />
      <TestimonialsSection />
      <MapSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
