import { HeroSection } from '@/components/home-sections/hero-section'
import { BelfSection } from '@/components/home-sections/belf-section'
import { SolutionsSection } from '@/components/home-sections/solutions-section'
import { WhyHigherUpSection } from '@/components/home-sections/why-higher-up-section'
import { TestimonialsSection } from '@/components/home-sections/testimonials-section'
import { CTASection } from '@/components/home-sections/cta-section'

const Home = () => {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <BelfSection />
      <SolutionsSection />
      <WhyHigherUpSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
export default Home
