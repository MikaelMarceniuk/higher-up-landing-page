'use client'

import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Check,
  MapPin,
  Users,
  Zap,
  Waves,
  Award,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function PointBreak() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden pt-20">
        <Image
          src="/executive-leadership-moment.webp"
          alt="Evento Point Break em Ubatuba"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 container flex h-full flex-col items-center justify-center text-center text-white">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Waves className="h-6 w-6 text-secondary" />
              <span className="text-sm font-bold tracking-wider text-secondary uppercase">
                Evento Exclusivo
              </span>
            </div>
            <h1 className="mb-6 text-5xl leading-tight font-bold md:text-7xl">
              Seu Inglês Não Será
              <br />
              <span className="text-secondary">Mais o Mesmo</span>
            </h1>
            <p className="mb-8 text-xl font-light md:text-2xl">
              Uma imersão executiva de Business English na beira do mar. Surf de
              manhã. Estratégia à tarde.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href={
                  'https://docs.google.com/forms/d/e/1FAIpQLSdINqlffgtOgjZ-NuhYYCpUmBMAlfGmYJ8KBZDwMDk0HTeogg/viewform?usp=header'
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-secondary px-8 py-6 text-lg font-bold text-primary hover:bg-secondary/80"
                >
                  Inscrever-se Agora <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="bg-primary py-20 text-white">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              O Conceito Point Break
            </h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Não há aulas de gramática. Não há lições de inglês. Não há teoria
              sem aplicação.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-muted bg-muted/10 p-8 backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <Waves className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">Surf de Manhã</h3>
              <p className="text-muted-foreground">
                Aulas de surf conduzidas em inglês, transformando o oceano em
                laboratório de fluência
              </p>
            </div>

            <div className="rounded-lg border border-muted bg-muted/10 p-8 backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">Estratégia à Tarde</h3>
              <p className="text-muted-foreground">
                Sessões intensivas de comunicação estratégica e liderança em
                contextos corporativos
              </p>
            </div>

            <div className="rounded-lg border border-muted bg-muted/10 p-8 backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">100% Imersivo</h3>
              <p className="text-muted-foreground">
                Ambiente acelerador de desbloqueiro e naturalidade com
                networking qualificado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Achieve Section */}
      <section className="bg-white py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-4xl font-bold text-primary md:text-5xl">
            O Que Você Vai Conquistar
          </h2>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-primary">
                  Clareza Estruturada
                </h3>
                <p className="text-muted-foreground">
                  Comunique suas ideias com precisão e impacto em contextos
                  estratégicos
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-primary">
                  Segurança em Reuniões
                </h3>
                <p className="text-muted-foreground">
                  Se posicione com confiança em negociações e contextos de
                  pressão
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-primary">
                  Vocabulário Estratégico
                </h3>
                <p className="text-muted-foreground">
                  Domine termos e expressões para contextos corporativos
                  internacionais
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-primary">
                  Naturalidade
                </h3>
                <p className="text-muted-foreground">
                  Fale com confiança e presença, deixando a insegurança para
                  trás
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-primary">
                  Agilidade Mental
                </h3>
                <p className="text-muted-foreground">
                  Responda com rapidez e precisão em situações desafiadoras
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-primary">
                  Networking Premium
                </h3>
                <p className="text-muted-foreground">
                  Conecte-se com outros líderes de alta performance e evolução
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-4xl font-bold text-primary md:text-5xl">
            Este Programa é Para Você?
          </h2>

          <div className="mx-auto max-w-3xl space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Check className="size-3 text-primary" />
              </div>
              <div>
                <p className="text-lg text-muted-foreground">
                  <span className="font-bold">
                    Você já possui nível intermediário ou avançado de inglês
                  </span>{' '}
                  e quer evoluir para um patamar estratégico
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Check className="size-3 text-primary" />
              </div>
              <div>
                <p className="text-lg text-muted-foreground">
                  <span className="font-bold">
                    Utiliza inglês no seu ambiente profissional
                  </span>{' '}
                  e sente que pode melhorar sua comunicação
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Check className="size-3 text-primary" />
              </div>
              <div>
                <p className="text-lg text-muted-foreground">
                  <span className="font-bold">Ocupa posição de liderança</span>{' '}
                  (gerência, diretoria, executivo ou C-level)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Check className="size-3 text-primary" />
              </div>
              <div>
                <p className="text-lg text-muted-foreground">
                  <span className="font-bold">Está disposto a se desafiar</span>{' '}
                  e evoluir sua comunicação em um ambiente imersivo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="bg-white py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-4xl font-bold text-primary md:text-5xl">
            Detalhes do Evento
          </h2>

          <div className="mx-auto mb-12 grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-linear-to-br from-purple-50 to-yellow-50 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-primary">Local</h3>
              <p className="text-lg font-semibold text-muted-foreground">
                Ubatuba, São Paulo
              </p>
              <p className="mt-2 text-gray-600">Giprila Wellness Hotel</p>
            </div>

            <div className="rounded-lg bg-linear-to-br from-purple-50 to-yellow-50 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <Waves className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-primary">Quando</h3>
              <p className="text-lg font-semibold text-muted-foreground">
                Em Outubro
              </p>
              <p className="mt-2 text-gray-600">3 dias de imersão total</p>
            </div>

            <div className="rounded-lg bg-linear-to-br from-purple-50 to-yellow-50 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-primary">
                Capacidade
              </h3>
              <p className="text-lg font-semibold text-muted-foreground">
                Limitado a 10 Participantes
              </p>
              <p className="mt-2 text-gray-600">
                Programa exclusivo e personalizado
              </p>
            </div>

            <div className="rounded-lg bg-linear-to-br from-purple-50 to-yellow-50 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-primary">
                O que Está Incluso
              </h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>✓ Imersão em Business English</li>
                <li>✓ 2 Sessões de Surf</li>
                <li>✓ 2 Diárias no Hotel</li>
                <li>✓ Refeições e Coffee Break</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20">
        <Image
          src={'/growth-trajectory-abstract.webp'}
          alt="Transformação profissional"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/70"></div>

        <div className="relative z-10 container text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Pronto para Esta Experiência?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-100">
            Vagas limitadas a 10 participantes. Inscreva-se agora e garanta seu
            lugar nesta imersão transformadora.
          </p>
          <Link
            href={
              'https://docs.google.com/forms/d/e/1FAIpQLSdINqlffgtOgjZ-NuhYYCpUmBMAlfGmYJ8KBZDwMDk0HTeogg/viewform?usp=header'
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-secondary px-10 py-6 text-lg font-bold text-primary hover:bg-secondary"
            >
              Inscrever-se Agora
            </Button>
          </Link>
          <p className="mt-6 text-sm text-gray-200">
            Clientes Higher-up têm condição especial. Consulte conosco!
          </p>
        </div>
      </section>
    </div>
  )
}
