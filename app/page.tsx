import { Header, Preloader, Cursor, Footer, Tilt } from '@/components/layout'
import {
  HeroSection,
  ServiceSection,
  AboutSection,
  CTASection,
  TestimonialSection,
  ContactSection,
} from '@/components/sections'

export default function Home() {
  return (
    <main>
      {/* Preloader — white curtain that splits on load */}
      <Preloader />

      {/* Header — sticky on scroll, hamburger on mobile */}
      <Header />

      {/* Custom cursor — dot + outline, only on ≥768px via CSS */}
      <Cursor />

      {/* Tilt effect — wires [data-tilt] elements after mount */}
      <Tilt />

      <article>
        <HeroSection />
        <ServiceSection />
        <AboutSection />
        <CTASection />
        <TestimonialSection />
        <ContactSection />
      </article>

      <Footer />
    </main>
  )
}
