import Image from 'next/image'
import { HeroSection } from '@/components/home-sections/hero-section'
import { BelfSection } from '@/components/home-sections/belf-section'
import { SolutionsSection } from '@/components/home-sections/solutions-section'
import { WhyHigherUpSection } from '@/components/home-sections/why-higher-up-section'
import { TestimonialsSection } from '@/components/home-sections/testimonials-section'
import { Button } from '@/components/ui/button'

const Home = () => {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <BelfSection />
      <SolutionsSection />
      <WhyHigherUpSection />
      <TestimonialsSection />

      {/* Final CTA Section */}
      <section className="relative overflow-hidden py-20">
        <Image
          src={'/home-cta.webp'}
          alt="Próximo nível"
          className="absolute inset-0 h-full w-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-primary/70"></div>

        <div className="relative z-10 container text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Pronto para o Próximo Nível?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-100">
            Agende uma conversa gratuita com nosso time. Vamos entender seus
            objetivos e desenhar o programa perfeito para você.
          </p>
          <Button
            size="lg"
            className="bg-yellow-400 px-10 py-6 text-lg font-bold text-primary hover:bg-yellow-500"
          >
            Agendar Conversa Gratuita
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-12 text-white">
        <div className="container">
          <div className="mb-8 grid gap-8 md:grid-cols-4">
            <div>
              <h4 className="mb-4 text-xl font-bold">Higher Up</h4>
              <p className="text-gray-300">
                Mentoria de aceleração em inglês corporativo
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-bold">Programas</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a
                    href="/blueprint"
                    className="transition hover:text-yellow-400"
                  >
                    Blueprint
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-yellow-400">
                    Edge
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-yellow-400">
                    Signature
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold">Empresa</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="transition hover:text-yellow-400">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-yellow-400">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-yellow-400">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold">Contato</h4>
              <p className="mb-2 text-gray-300">contato@higher-up.com.br</p>
              <p className="text-gray-300">+55 (16) 99221-8981</p>
            </div>
          </div>

          <div className="border-t border-purple-800 pt-8 text-center text-gray-400">
            <p>
              &copy; 2026 Higher Up Business English. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Home
