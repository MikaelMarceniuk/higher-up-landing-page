import { HeroSection } from '@/components/home-sections/hero-section'
import { BelfSection } from '@/components/home-sections/belf-section'
import { SolutionsSection } from '@/components/home-sections/solutions-section'
import { WhyHigherUpSection } from '@/components/home-sections/why-higher-up-section'
import { TestimonialsSection } from '@/components/home-sections/testimonials-section'
import { CTASection } from '@/components/home-sections/cta-section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Higher-Up | Inglês para Negócios',
  description:
    'Eleve a comunicação da sua liderança com inglês para negócios de alto nível. Metodologia BELF para executivos e empresas que competem globalmente.',
  openGraph: {
    title: 'Higher-Up | Inglês para Negócios',
    description: 'Metodologia BELF para executivos e empresas globais.',
    url: '/',
    images: [{ url: '/og/og-home.png', width: 1200, height: 630 }],
  },
}

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
