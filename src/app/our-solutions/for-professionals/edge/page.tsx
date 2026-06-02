import { CTAButton } from '@/components/cta-button'
import { Check, Clock, Users, Zap, BookOpen, TrendingUp } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Edge — Inglês para Apresentações e Negociações',
  description:
    'Com o Edge, executivos ganham precisão e confiança em apresentações, negociações e reuniões internacionais em inglês.',
  openGraph: {
    url: '/our-solutions/for-professionals/edge',
    images: [{ url: '/og/og-edge.png', width: 1200, height: 630 }],
  },
}

export default function Edge() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden pt-20">
        <Image
          src="/executive-leadership-moment.webp"
          alt="Líder executivo em contexto global"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 container flex h-full flex-col items-center justify-center text-center text-white">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl leading-tight font-bold md:text-7xl">
              Sua Liderança
              <br />
              <span className="text-secondary">Em Inglês Global</span>
            </h1>
            <p className="mb-6 text-2xl font-bold text-secondary">
              EDGE (Executive Development in Global English)
            </p>
            <p className="mb-8 text-xl font-light md:text-2xl">
              Comunicação estratégica para executivos que precisam de
              autoridade, clareza e persuasão em contextos internacionais
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <CTAButton />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-4xl font-bold text-primary md:text-5xl">
              Os Desafios do Líder Global
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <span className="text-lg font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-primary">
                    &quot;Não tenho tempo a perder&quot;
                  </h3>
                  <p className="text-lg text-gray-700">
                    Você é ocupado. Precisa de resultados rápidos, não de aulas
                    genéricas que não agregam
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <span className="text-lg font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-primary">
                    &quot;Eu não pareço um líder falando inglês&quot;
                  </h3>
                  <p className="text-lg text-gray-700">
                    Em português você é autoridade. Em inglês, sente que perde
                    presença e impacto
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <span className="text-lg font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-primary">
                    &quot;Eu travo em situações de pressão&quot;
                  </h3>
                  <p className="text-lg text-gray-700">
                    Negociações críticas, board meetings, situações de pressão -
                    é quando você mais precisa estar seguro
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <span className="text-lg font-bold text-primary">4</span>
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-primary">
                    &quot;Preciso mostrar autoridade em inglês&quot;
                  </h3>
                  <p className="text-lg text-gray-700">
                    Sua comunicação em inglês precisa refletir seu nível de
                    liderança e experiência
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Structure Section */}
      <section className="bg-white py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-4xl font-bold text-primary md:text-5xl">
            Estrutura do Programa
          </h2>

          <div className="mx-auto mb-12 grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-linear-to-br from-purple-50 to-yellow-50 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-primary">
                2 Sessões Semanais Intensivas
              </h3>
              <p className="text-lg font-semibold text-gray-700">
                6 Meses de Programa
              </p>
            </div>

            <div className="rounded-lg bg-linear-to-br from-purple-50 to-yellow-50 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-primary">
                Resultados Mensuráveis
              </h3>
              <p className="text-lg font-semibold text-gray-700">
                Report de Performance + Growth Roadmap
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl rounded-lg bg-primary p-8 text-white">
            <h3 className="mb-6 text-2xl font-bold">Os 4 Sprints do Edge</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary font-bold text-primary">
                  1
                </div>
                <div>
                  <p className="font-bold">Sprint 1: Clareza</p>
                  <p className="text-sm text-gray-200">
                    Comunique suas ideias com precisão e impacto
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary font-bold text-primary">
                  2
                </div>
                <div>
                  <p className="font-bold">Sprint 2: Assertividade</p>
                  <p className="text-sm text-gray-200">
                    Defenda suas posições com confiança e respeito
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary font-bold text-primary">
                  3
                </div>
                <div>
                  <p className="font-bold">Sprint 3: Persuasão</p>
                  <p className="text-sm text-gray-200">
                    Influencie decisões e conquiste apoio para suas ideias
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary font-bold text-primary">
                  4
                </div>
                <div>
                  <p className="font-bold">Sprint 4: Autoridade</p>
                  <p className="text-sm text-gray-200">
                    Lidere com presença, confiança e impacto global
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* During Session Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-4xl font-bold text-primary md:text-5xl">
            Durante a Sessão
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-linear-to-br from-purple-50 to-yellow-50 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-primary">
                Simulações Reais
              </h3>
              <p className="text-gray-700">
                Simulamos situações reais da sua rotina de liderança: board
                meetings, negociações críticas, apresentações estratégicas
              </p>
            </div>

            <div className="rounded-lg bg-linear-to-br from-purple-50 to-yellow-50 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-primary">
                Refinamento Premium
              </h3>
              <p className="text-gray-700">
                Pronúncia, naturalidade, presença. Você aprende a se comunicar
                com a autoridade que merece
              </p>
            </div>

            <div className="rounded-lg bg-linear-to-br from-purple-50 to-yellow-50 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-primary">
                Comunicação Sob Pressão
              </h3>
              <p className="text-gray-700">
                Prática intensiva em situações de pressão. Você aprende a manter
                clareza e autoridade mesmo em momentos críticos
              </p>
            </div>

            <div className="rounded-lg bg-linear-to-br from-purple-50 to-yellow-50 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-primary">
                Feedback em Tempo Real
              </h3>
              <p className="text-gray-700">
                Feedback imediato e construtivo. Você sabe exatamente o que
                melhorar e como aplicar no trabalho
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Edge Section */}
      <section className="bg-white py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-4xl font-bold text-primary md:text-5xl">
            Por Que Edge?
          </h2>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-primary">
                  Focado em Líderes
                </h3>
                <p className="text-gray-700">
                  Desenhado especificamente para executivos, C-level, diretores
                  e founders
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-primary">
                  Intensivo e Rápido
                </h3>
                <p className="text-gray-700">
                  2 sessões semanais. Você vê transformação real em 6 meses
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-primary">
                  Estratégico
                </h3>
                <p className="text-gray-700">
                  Não é apenas inglês - é comunicação estratégica para liderança
                  global
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-primary">
                  Resultados Comprovados
                </h3>
                <p className="text-gray-700">
                  Executivos que transformaram sua presença e impacto em inglês
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20">
        <Image
          src="/growth-trajectory-abstract.webp"
          alt="Crescimento executivo"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/70"></div>

        <div className="relative z-10 container text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Pronto para o Próximo Nível?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-100">
            O EDGE é um programa para líderes a partir do nível avançado de
            inglês. Para saber se você consegue acompanhar o conteúdo, agende um
            diagnóstico estratégico.
          </p>
          <CTAButton />
        </div>
      </section>
    </div>
  )
}
