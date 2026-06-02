import { HeroSection } from '@/components/about-us-sections/hero-section'
import { StorySection } from '@/components/about-us-sections/story-section'
import { MissionVisionValuesSection } from '@/components/about-us-sections/mission-vision-values-section'
import { TeamSection } from '@/components/about-us-sections/team-section'
import { BELFPedagogySection } from '@/components/about-us-sections/belf-pedagogy-section'
import { CTASection } from '@/components/about-us-sections/cta-section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quem Somos',
  description:
    'Conheça a Higher-Up: especialistas em inglês para negócios com metodologia BELF, formando líderes que se comunicam com autoridade em qualquer mercado.',
  openGraph: {
    url: '/about-us',
    images: [{ url: '/og/og-about.png', width: 1200, height: 630 }],
  },
}

export default function AboutUs() {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <StorySection />
      <MissionVisionValuesSection />
      <TeamSection />
      <BELFPedagogySection />
      <CTASection />
    </div>
  )
}
