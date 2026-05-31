'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Users,
  Globe,
  Star,
  Shield,
  MessageSquare,
  RefreshCw,
  UserCheck,
  UsersRound,
} from 'lucide-react'
import { CTAButton } from '@/components/cta-button'

const audiences = [
  {
    icon: <Users className="h-10 w-10" strokeWidth={1.2} />,
    desc: 'Executivos expostos a clientes, investidores ou stakeholders globais',
  },
  {
    icon: <Globe className="h-10 w-10" strokeWidth={1.2} />,
    desc: 'Empresas em expansão internacional',
  },
  {
    icon: <Star className="h-10 w-10" strokeWidth={1.2} />,
    desc: 'Lideranças que precisam transmitir mais clareza, influência e segurança em inglês',
  },
  {
    icon: <Shield className="h-10 w-10" strokeWidth={1.2} />,
    desc: 'Organizações que não podem mais tratar comunicação global como um detalhe operacional',
  },
]

const workItems = [
  {
    icon: <Users className="h-8 w-8" strokeWidth={1.2} />,
    label: 'Reuniões\ncríticas',
  },
  {
    icon: <Globe className="h-8 w-8" strokeWidth={1.2} />,
    label: 'Interações\nglobais',
  },
  {
    icon: <MessageSquare className="h-8 w-8" strokeWidth={1.2} />,
    label: 'Comunicação\nde liderança',
  },
  {
    icon: <RefreshCw className="h-8 w-8" strokeWidth={1.2} />,
    label: 'Refinamento\nem tempo real',
  },
  {
    icon: <UserCheck className="h-8 w-8" strokeWidth={1.2} />,
    label: 'Presença\nexecutiva em inglês',
  },
  {
    icon: <UsersRound className="h-8 w-8" strokeWidth={1.2} />,
    label: 'Contextos\nmulticulturais',
  },
]

const steps = [
  {
    number: '01',
    title: 'Diagnóstico\nestruturado',
    desc: 'Avaliação da comunicação e identificação de riscos que impactam a influência e os resultados do negócio.',
  },
  {
    number: '02',
    title: 'Intervenção presencial intensiva',
    desc: 'Uma semana imersiva dentro da empresa, com observação, ajustes em tempo real e preparação para situações-chave.',
  },
  {
    number: '03',
    title: 'Acompanhamento online',
    desc: 'Três semanas de acompanhamento com diretrizes de comunicação e plano de evolução pós-projeto.',
  },
]

const SignaturePage = () => {
  return (
    <div className="w-full bg-white font-sans">
      <section className="w-full bg-white px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="mb-6">
            <Image
              src="/signature.png"
              alt="Signature"
              width={420}
              height={160}
              className="h-auto w-70 object-contain md:w-105"
            />
          </div>

          <h1 className="mb-5 text-3xl leading-tight font-bold text-primary md:text-4xl">
            Intervenção estratégica para comunicação executiva em{' '}
            <span className="text-secondary">contextos globais</span>.
          </h1>

          <p className="mb-8 max-w-sm text-sm leading-relaxed text-primary">
            Um processo intensivo e personalizado para refinar como sua
            liderança se comunica, influencia e gera impacto em ambientes
            internacionais.
          </p>

          <CTAButton text="Solicite uma conversa estratégica" />
        </div>
      </section>

      {/* ── Para empresas e lideranças ── */}
      <section className="w-full bg-[#f7f5f2] px-6 py-16 md:px-12 lg:px-16">
        <p className="mb-3 text-center text-xs tracking-[0.25em] text-primary uppercase">
          Para empresas e lideranças que
        </p>
        <div className="mx-auto mb-3 h-0.5 w-8 rounded-full bg-secondary" />
        <h2 className="mx-auto mb-14 max-w-2xl text-center text-2xl font-light text-primary md:text-3xl">
          Para empresas e lideranças que já operam —{' '}
          <br className="hidden md:block" />
          ou precisam operar — em ambientes internacionais.
        </h2>

        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-px bg-zinc-200 md:grid-cols-4">
          {audiences.map((a, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-[#f7f5f2] px-8 py-14 text-center"
            >
              <div className="mb-6 text-secondary">{a.icon}</div>
              <p className="text-sm leading-relaxed text-primary">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── O que trabalhamos ── */}
      <section className="w-full bg-primary px-6 py-16 md:px-12 lg:px-16">
        <p className="mb-3 text-center text-xs tracking-[0.25em] text-muted-foreground uppercase">
          O que trabalhamos
        </p>
        <div className="mx-auto mb-3 h-0.5 w-8 rounded-full bg-secondary" />
        <h2 className="mx-auto mb-14 max-w-xl text-center text-2xl font-light text-white md:text-3xl">
          Comunicação executiva em ambientes internacionais reais.
        </h2>

        <div className="mx-auto grid max-w-3xl grid-cols-3 gap-8 md:grid-cols-6">
          {workItems.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-3 text-secondary">{item.icon}</div>
              <p className="text-xs leading-relaxed whitespace-pre-line text-white/70">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Como funciona ── */}
      <section className="w-full bg-white px-6 pt-16 md:px-12 lg:px-16">
        <p className="mb-3 text-center text-xs tracking-[0.25em] text-primary uppercase">
          Como funciona
        </p>
        <div className="mx-auto mb-3 h-0.5 w-8 rounded-full bg-secondary" />

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col border-l-0 md:border-l md:border-zinc-200 md:pl-8 first:md:border-l-0 first:md:pl-0"
            >
              <span className="mb-3 text-5xl font-bold text-primary md:text-6xl">
                {step.number}
              </span>
              <h3 className="mb-4 text-xl leading-snug font-light whitespace-pre-line text-primary md:text-2xl">
                {step.title}
              </h3>
              <div className="mb-4 h-0.5 w-8 rounded-full bg-secondary" />
              <p className="text-sm leading-relaxed text-primary">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Signature note box */}
        <div className="mx-auto mt-14 max-w-4xl border-2 border-primary px-8 py-7 md:flex md:items-center md:gap-10">
          <div className="mb-4 shrink-0 md:mb-0">
            <Image
              src="/signature.png"
              alt="Signature"
              width={200}
              height={80}
              className="h-auto w-35 object-contain mix-blend-multiply md:w-50"
            />
          </div>
          <p className="text-lg leading-relaxed text-primary">
            O Signature é uma intervenção altamente personalizada, conduzida
            pessoalmente por Hellen Haga para um número limitado de empresas a
            cada ano.
          </p>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="w-full bg-white px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-0 md:grid-cols-2 md:items-center md:divide-x-2 md:divide-secondary">
          {/* Left text */}
          <div className="pb-10 md:pr-14 md:pb-0">
            <p className="text-2xl leading-snug font-light text-primary md:text-3xl">
              Não é um programa.
              <br />É uma intervenção estratégica para{' '}
              <span className="text-secondary">elevar a comunicação</span> da
              sua liderança e os resultados da sua empresa.
            </p>
          </div>

          {/* Right CTA */}
          <div className="flex flex-col gap-5 pt-10 md:pt-0 md:pl-14">
            <p className="text-base font-light text-primary">
              Vamos conversar sobre os desafios e objetivos da sua empresa?
            </p>
            <CTAButton text="Solicite uma conversa estratégica" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default SignaturePage
