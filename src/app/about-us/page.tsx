import { HeroSection } from '@/components/about-us-sections/hero-section'
import { StorySection } from '@/components/about-us-sections/story-section'
import { MissionVisionValuesSection } from '@/components/about-us-sections/mission-vision-values-section'
import { TeamSection } from '@/components/about-us-sections/team-section'
import { BELFPedagogySection } from '@/components/about-us-sections/belf-pedagogy-section'
import { CTASection } from '@/components/about-us-sections/cta-section'

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
