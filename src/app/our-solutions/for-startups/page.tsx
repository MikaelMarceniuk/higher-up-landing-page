import { Metadata } from 'next'
import { HeroSection } from '@/components/startup-sections/hero-section'
import { AudienceSection } from '@/components/startup-sections/audience-section'
import { ProgrammesSection } from '@/components/startup-sections/programmes-section'
import { BelfSection } from '@/components/startup-sections/belf-section'
import { DifferentialsSection } from '@/components/startup-sections/differentials-section'
import { JourneySection } from '@/components/startup-sections/journey-section'
import { TestimonialsSection } from '@/components/startup-sections/testimonials-section'
import { CTASection } from '@/components/startup-sections/cta-section'

export const metadata: Metadata = {
  title: 'Startup Programme — Inglês para Founders',
  description:
    'Mentoria individual de comunicação em inglês para founders e equipes que precisam transformar oportunidades internacionais em negócios concretos.',
  openGraph: {
    url: '/our-solutions/for-startups',
    // TODO: criar /og/og-startup.png
    images: [{ url: '/og/og-home.png', width: 1200, height: 630 }],
  },
}

const ForStartupsPage = () => {
  return (
    <div className="w-full bg-white font-(family-name:--font-startup-text)">
      <HeroSection />
      <AudienceSection />
      <ProgrammesSection />
      <BelfSection />
      <DifferentialsSection />
      <JourneySection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}

export default ForStartupsPage
