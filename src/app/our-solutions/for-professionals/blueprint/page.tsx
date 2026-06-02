import { Button } from '@/components/ui/button'
import { CONTACT_LINKS } from '@/constants/contact-links.constants'
import {
  Check,
  Clock,
  Target,
  Users,
  Zap,
  BookOpen,
  TrendingUp,
  Globe2,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Journey {
  id: string
  name: string
  icon: React.ReactNode
}

const JOURNEYS: Journey[] = [
  {
    id: 'interviews',
    name: 'Preparação para Entrevistas',
    icon: <Target className="h-5 w-5" />,
  },
  {
    id: 'meetings',
    name: 'Participar de Reuniões',
    icon: <Users className="h-5 w-5" />,
  },
  {
    id: 'presentations',
    name: 'Apresentações Internas',
    icon: <Zap className="h-5 w-5" />,
  },
  {
    id: 'events',
    name: 'Apresentação em Eventos',
    icon: <TrendingUp className="h-5 w-5" />,
  },
  { id: 'networking', name: 'Networking', icon: <Users className="h-5 w-5" /> },
  {
    id: 'conduct',
    name: 'Conduzir Reuniões',
    icon: <Check className="h-5 w-5" />,
  },
  {
    id: 'negotiations',
    name: 'Negociações',
    icon: <Target className="h-5 w-5" />,
  },
  {
    id: 'pressure',
    name: 'Situações de Pressão',
    icon: <Zap className="h-5 w-5" />,
  },
  {
    id: 'social',
    name: 'Situações Sociais',
    icon: <Users className="h-5 w-5" />,
  },
  {
    id: 'daily',
    name: 'Trabalho do Dia-a-Dia',
    icon: <Clock className="h-5 w-5" />,
  },
  {
    id: 'visits',
    name: 'Visitas Técnicas',
    icon: <Target className="h-5 w-5" />,
  },
  {
    id: 'trends',
    name: 'Discutindo Trending Topics',
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    id: 'writing',
    name: 'Comunicação Escrita',
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    id: 'colleagues',
    name: 'Interação com Colegas',
    icon: <Users className="h-5 w-5" />,
  },
  {
    id: 'travel',
    name: 'Viagem a Trabalho',
    icon: <Clock className="h-5 w-5" />,
  },
  {
    id: 'bni',
    name: 'Exclusiva p/ o BNI: 1a1 internacional',
    icon: <Globe2 className="h-5 w-5" />,
  },
]

const PROGRAM_OPTIONS = [
  {
    id: '1journey',
    title: '1 Journey',
    duration: '2 meses',
    sessions: '8 sessões',
    frequency: '1x por semana',
    includes: [
      '8 sessões de 60 minutos',
      'Programa individual',
      'Report final de performance',
      '1 sessão de reposição',
      'Weekly actions entre sessões',
    ],
  },
  {
    id: '2journeys',
    title: '2 Journeys',
    duration: '4 meses',
    sessions: '16 sessões',
    frequency: '1x por semana',
    includes: [
      '16 sessões de 60 minutos',
      'Programa individual',
      'Report final de performance',
      '2 sessões de reposição',
      'E-book: Desenvolvendo Competência Intercultural',
      'Weekly actions entre sessões',
    ],
  },
  {
    id: '3journeys',
    title: '3 Journeys',
    duration: '6 meses',
    sessions: '24 sessões',
    frequency: '1x por semana',
    includes: [
      '24 sessões de 60 minutos',
      'Programa individual',
      'Report final de performance',
      '4 sessões de reposição',
      'E-book: Desenvolvendo Competência Intercultural',
      'Participação em 2 sessões do WorkLab',
      'Weekly actions entre sessões',
    ],
    featured: true,
  },
]

export const BlueprintPage = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden pt-20">
        <Image
          src={'/blueprint-interview-presentation.webp'}
          alt="Profissional apresentando com confiança"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 container flex h-full flex-col items-center justify-center text-center text-white">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl leading-tight font-bold md:text-7xl">
              Você Sabe Inglês,
              <br />
              <span className="text-secondary">
                Mas Trava na Hora que Importa
              </span>
            </h1>
            <p className="mb-8 text-xl font-light md:text-2xl">
              Blueprint é o programa para profissionais que querem resolver
              dores pontuais de inglês e impactar sua carreira
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href={CONTACT_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="cursor-pointer bg-secondary px-8 py-6 text-lg font-bold text-primary hover:bg-secondary/80"
                >
                  Agendar diagnóstico estratégico
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-4xl font-bold text-primary md:text-5xl">
              Você Não Está Sozinho
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <span className="text-lg font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-primary">
                    &quot;Eu sei inglês, mas travo na hora que importa&quot;
                  </h3>
                  <p className="text-lg text-gray-700">
                    Você tem conhecimento, mas falta confiança e naturalidade em
                    situações críticas: entrevistas, negociações, apresentações
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <span className="text-lg font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-primary">
                    Cursos genéricos não resolvem seu problema
                  </h3>
                  <p className="text-lg text-gray-700">
                    Você precisa de algo focado, prático, que trabalhe suas
                    dores específicas - não mais um curso genérico
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <span className="text-lg font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-primary">
                    Você não tem tempo a perder
                  </h3>
                  <p className="text-lg text-gray-700">
                    Precisa de resultados rápidos. Uma promoção, um novo
                    emprego, ou impacto real nos seus negócios - agora
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative overflow-hidden py-20">
        <Image
          src={'/blueprint-networking-moment.webp'}
          alt="Profissionais em networking"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 container">
          <div className="max-w-2xl">
            <h2 className="mb-8 text-4xl font-bold text-white md:text-5xl">
              A Solução: Blueprint
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Programa Individual
                  </h3>
                  <p className="text-gray-200">
                    Focado 100% na sua área, função e dores específicas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Sessões Práticas de 60 Minutos
                  </h3>
                  <p className="text-gray-200">
                    Simulações de situações reais, feedback em tempo real,
                    refinamento de pronúncia e naturalidade.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Weekly Actions
                  </h3>
                  <p className="text-gray-200">
                    Ações entre sessões para acelerar progresso. Você não estuda
                    sozinho, tem suporte contínuo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Resultados Mensuráveis
                  </h3>
                  <p className="text-gray-200">
                    Report final de performance. Você sabe exatamente o que
                    evoluiu e como aplicar no trabalho.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journeys Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
              16 Journeys para Escolher
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Cada Journey é um tópico de foco. Você escolhe qual (ou quais)
              trabalhar com a gente.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {JOURNEYS.map((journey) => (
              <div
                key={journey.id}
                className="cursor-pointer rounded-lg border-l-4 border-secondary bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-yellow-500">{journey.icon}</div>
                  <p className="text-sm font-semibold text-primary">
                    {journey.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* During Session Section */}
      <section className="bg-white py-20">
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
                Feedback de comunicação
              </h3>
              <p className="text-gray-700">
                Feedback sobre sua comunicação como um todo, não só sobre seu
                inglês.
              </p>
            </div>

            <div className="rounded-lg bg-linear-to-br from-purple-50 to-yellow-50 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-primary">
                Refinamento
              </h3>
              <p className="text-gray-700">
                Pronúncia, naturalidade, presença. Você aprende a se comunicar
                com confiança e autenticidade.
              </p>
            </div>

            <div className="rounded-lg bg-linear-to-br from-purple-50 to-yellow-50 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-primary">
                Adaptação
              </h3>
              <p className="text-gray-700">
                Você aprende a adaptar sua comunicação para diferentes
                interlocutores e contextos corporativos.
              </p>
            </div>

            <div className="rounded-lg bg-linear-to-br from-purple-50 to-yellow-50 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-primary">
                Vocabulário
              </h3>
              <p className="text-gray-700">
                Expansão de vocabulário específico da sua área e função. Você
                fala a linguagem do seu mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Options Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-4xl font-bold text-primary md:text-5xl">
            Escolha Seu Caminho
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {PROGRAM_OPTIONS.map((option) => (
              <div
                key={option.id}
                className={`overflow-hidden rounded-xl shadow-lg transition-all duration-300 ${
                  option.featured
                    ? 'scale-105 transform ring-2 ring-secondary'
                    : ''
                }`}
              >
                {option.featured && (
                  <div className="bg-secondary py-2 text-center font-bold text-primary">
                    MAIS POPULAR
                  </div>
                )}

                <div className="bg-white p-8">
                  <h3 className="mb-2 text-2xl font-bold text-primary">
                    {option.title}
                  </h3>
                  <p className="mb-6 font-semibold text-yellow-500">
                    {option.duration}
                  </p>

                  <div className="mb-6 border-b border-gray-200 pb-6">
                    <p className="mb-2 text-sm text-gray-600">
                      <span className="font-semibold text-primary">
                        {option.sessions}
                      </span>{' '}
                      • {option.frequency}
                    </p>
                  </div>

                  <div className="mb-8 space-y-3">
                    {option.includes.map((item, idx) => (
                      <div key={idx} className="flex gap-3 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full ${
                      option.featured
                        ? 'bg-secondary text-primary hover:bg-secondary/80'
                        : 'bg-primary text-white hover:bg-primary/80'
                    } font-bold`}
                  >
                    Saber Mais
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Blueprint Section */}
      <section className="bg-white py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-4xl font-bold text-primary md:text-5xl">
            Por Que Blueprint?
          </h2>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-primary">
                  Focado em Você
                </h3>
                <p className="text-gray-700">
                  Não é um programa genérico. É desenhado para sua área, função
                  e dores específicas.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-primary">
                  Prático e Rápido
                </h3>
                <p className="text-gray-700">
                  Você verá resultado com poucas sessões, não é um curso de
                  inglês com anos de duração
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-primary">
                  Suporte Contínuo
                </h3>
                <p className="text-gray-700">
                  Weekly actions entre sessões. Você não estuda sozinho - tem
                  orientação contínua.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-primary">
                  Resultados Mensuráveis
                </h3>
                <p className="text-gray-700">
                  Report final de performance. Você sabe exatamente o que
                  evoluiu e como aplicar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20">
        <Image
          src={'/growth-trajectory-abstract.webp'}
          alt="Crescimento profissional"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/70"></div>

        <div className="relative z-10 container text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Pronto para levar seu inglês para outro nível e{' '}
            <span className="text-secondary">
              ir mais longe em sua carreira?
            </span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-100">
            Agende uma conversa gratuita com nosso time. Vamos entender suas
            dores específicas e desenhar o Blueprint perfeito para você.
          </p>
          <Link
            href={CONTACT_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="cursor-pointer bg-secondary px-10 py-6 text-lg font-bold text-primary hover:bg-secondary/80"
            >
              Agendar diagnóstico estratégico
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="container max-w-3xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-primary md:text-5xl">
            Dúvidas Frequentes
          </h2>

          <div className="space-y-6">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-primary">
                Qual é a diferença entre Blueprint e Edge?
              </h3>
              <p className="text-gray-700">
                <span className="font-semibold">Blueprint</span> é para
                profissionais que querem resolver dores pontuais de inglês no
                trabalho. <span className="font-semibold">Edge</span> é para
                líderes que querem desenvolver comunicação assertiva e
                influência. Blueprint é mais focado e prático; Edge é mais
                estratégico e de longo prazo.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-primary">
                Posso escolher mais de um Journey?
              </h3>
              <p className="text-gray-700">
                Sim! Você pode escolher 1, 2 ou 3 Journeys. Quanto mais
                Journeys, mais tempo você tem para aprofundar e mais benefícios
                você recebe (e-book, participação no WorkLab, etc).
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-primary">
                Como funciona o Weekly Actions?
              </h3>
              <p className="text-gray-700">
                Entre as sessões, você recebe ações práticas para fazer durante
                a semana. Pode ser um vídeo para assistir, um exercício para
                gravar, ou uma tarefa para fazer no trabalho. Tudo desenhado
                para acelerar seu progresso.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-primary">
                Qual é o meu nível de inglês ideal para Blueprint?
              </h3>
              <p className="text-gray-700">
                Blueprint é para profissionais com nível B1 a C1. Você já tem
                base de inglês, mas quer melhorar sua comunicação em contextos
                específicos de trabalho.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlueprintPage
