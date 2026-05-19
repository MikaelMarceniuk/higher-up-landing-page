import { Button } from '@/src/components/ui/button'
import { Shield, Zap, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import { HeroSection } from '../components/home-sections/hero-section'

const Home = () => {
  return (
    <div className="w-full bg-white">
      <HeroSection />

      {/* BELF Section */}
      <section className="bg-purple-900 py-20 text-white">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              BELF: ENGLISH AS BUSINESS
              <br />
              LINGUA FRANCA
            </h2>
            <p className="text-xl text-gray-200">
              Única empresa do Brasil com pedagogia BELF!
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-400">
                <Shield className="h-8 w-8 text-purple-900" />
              </div>
              <h3 className="mb-3 text-xl font-bold">CONFIANÇA</h3>
              <p className="text-gray-200">
                Seu inglês não precisa ser perfeito e nem &quot;nativo&quot;;
                precisa ser efetivo.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-400">
                <Zap className="h-8 w-8 text-purple-900" />
              </div>
              <h3 className="mb-3 text-xl font-bold">PRATICIDADE</h3>
              <p className="text-gray-200">
                Foco em situações reais, negociações, apresentações, etc.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-400">
                <TrendingUp className="h-8 w-8 text-purple-900" />
              </div>
              <h3 className="mb-3 text-xl font-bold">MENSURÁVEL</h3>
              <p className="text-gray-200">
                Resultados claros: negócios fechados, promoções conquistadas,
                influência expandida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solucoes" className="bg-gray-50 py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-purple-900 md:text-5xl">
              SOLUÇÕES DE COMUNICAÇÃO
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Para Empresas */}
            <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
              <Image
                src={'/home-company.webp'}
                alt="Solução para empresas"
                className="h-64 w-full object-cover"
                width={800}
                height={256}
              />
              <div className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-400">
                  <span className="text-lg font-bold text-purple-900">🏢</span>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-purple-900">
                  Para empresas
                </h3>
                <p className="mb-6 text-gray-700">
                  Eleve a comunicação de sua equipe. Impulsione resultados
                  globais.
                </p>
                <p className="mb-6 text-sm text-gray-600">
                  Programas para empresas e times que precisam elevar seu nível
                  com idiomas que precisam de soluções especializadas em
                  comunicação corporativa internacional.
                </p>
                <Button className="bg-yellow-400 font-bold text-purple-900 hover:bg-yellow-500">
                  Saiba Mais
                </Button>
              </div>
            </div>

            {/* Para Profissionais */}
            <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
              <Image
                src={'/home-professional.webp'}
                alt="Solução para profissionais"
                className="h-64 w-full object-cover"
                width={800}
                height={256}
              />
              <div className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-400">
                  <span className="text-lg font-bold text-purple-900">👤</span>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-purple-900">
                  Para profissionais
                </h3>
                <p className="mb-6 text-gray-700">
                  Desenvolva sua comunicação. Avance em sua carreira.
                </p>
                <p className="mb-6 text-sm text-gray-600">
                  Soluções para profissionais buscando elevar seu nível de
                  inglês corporativo com foco em comunicação assertiva e
                  intercultural.
                </p>
                <Button className="bg-yellow-400 font-bold text-purple-900 hover:bg-yellow-500">
                  Saiba Mais
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Higher Up Section */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-purple-900 md:text-5xl">
              POR QUE A HIGHER-UP?
            </h2>
          </div>

          <div className="mx-auto max-w-3xl space-y-8">
            <div className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-400">
                <span className="text-lg font-bold text-white">1</span>
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-bold text-purple-900">
                  Mentoria
                </h3>
                <p className="text-gray-700">
                  Não somos uma escola de inglês. Não há aulas, nem provas, nem
                  livro didático.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-400">
                <span className="text-lg font-bold text-white">2</span>
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-bold text-purple-900">
                  Resultados
                </h3>
                <p className="text-gray-700">
                  Os programas entregam resultados rápidos e focados na sua
                  necessidade de comunicação atual.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-400">
                <span className="text-lg font-bold text-white">3</span>
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-bold text-purple-900">
                  Competência intercultural
                </h3>
                <p className="text-gray-700">
                  Além do idioma, trabalhamos questões culturais que podem
                  comprometer sua comunicação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-purple-900 md:text-5xl">
              TRANSFORMAÇÕES REAIS
            </h2>
            <p className="text-lg text-gray-600">
              Profissionais que elevaram sua comunicação e impacto
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex min-h-64 flex-col items-center justify-center rounded-lg bg-red-600 p-8 text-center text-white shadow-lg transition-all hover:shadow-xl">
              <h3 className="mb-4 text-2xl font-bold">
                CARROSSEL
                <br />
                TESTIMONIALS
              </h3>
              <p className="text-sm">Depoimento de cliente</p>
            </div>

            <div className="flex min-h-64 flex-col items-center justify-center rounded-lg bg-red-600 p-8 text-center text-white shadow-lg transition-all hover:shadow-xl">
              <h3 className="mb-4 text-2xl font-bold">
                CARROSSEL
                <br />
                TESTIMONIALS
              </h3>
              <p className="text-sm">Depoimento de cliente</p>
            </div>

            <div className="flex min-h-64 flex-col items-center justify-center rounded-lg bg-red-600 p-8 text-center text-white shadow-lg transition-all hover:shadow-xl">
              <h3 className="mb-4 text-2xl font-bold">
                CARROSSEL
                <br />
                TESTIMONIALS
              </h3>
              <p className="text-sm">Depoimento de cliente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden py-20">
        <Image
          src={'/home-cta.webp'}
          alt="Próximo nível"
          className="absolute inset-0 h-full w-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-purple-900/70"></div>

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
            className="bg-yellow-400 px-10 py-6 text-lg font-bold text-purple-900 hover:bg-yellow-500"
          >
            Agendar Conversa Gratuita
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 py-12 text-white">
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
