'use client'

import { CTAButton } from '@/components/cta-button'
import { solutions } from '@/constants/solutions.constants'
import { cn } from '@/lib/utils'
import {
  Star,
  User,
  Users,
  Settings2,
  Crown,
  Network,
  TrendingUp,
  Puzzle,
  Diamond,
} from 'lucide-react'
import Image from 'next/image'

type FormatProduct = {
  id: string
  label: string
  accent: string
}

type Format = {
  icon: React.ReactNode
  title: string
  desc: string
  products: FormatProduct[]
  extraDesc?: string
}

const audiences = [
  {
    icon: <Crown className="h-10 w-10 text-secondary" strokeWidth={1.8} />,
    title: 'Lideranças',
    desc: 'Refinamento de posicionamento, tomada de fala e influência em contextos globais.',
  },
  {
    icon: <Network className="h-10 w-10 text-secondary" strokeWidth={1.8} />,
    title: 'Times operacionais',
    desc: 'Comunicação funcional para rotinas internacionais, alinhamentos e colaboração.',
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-secondary" strokeWidth={1.8} />,
    title: 'Times comerciais',
    desc: 'Comunicação para vendas, negociação e experiência do cliente.',
  },
  {
    icon: <Puzzle className="h-10 w-10 text-secondary" strokeWidth={1.8} />,
    title: 'Projetos customizados',
    desc: 'Soluções desenvolvidas sob medida para desafios específicos do seu negócio.',
  },
]

const logos = [
  {
    name: 'Bank of England',
    file: '/logos/bank-of-england.svg',
    className: 'w-auto',
  },
  {
    name: 'National Geographic Learning',
    file: '/logos/national-geographic-learning.png',
    className: 'w-auto mix-blend-multiply',
  },
  { name: 'Hydro', file: '/logos/hydro.svg', className: 'w-auto' },
  {
    name: 'Salesforce',
    file: '/logos/salesforce.svg',
    className: 'w-auto',
  },
  { name: 'Grupo SEB', file: '/logos/grupo-seb.svg', className: 'w-auto' },
  { name: 'Google', file: '/logos/google.svg', className: 'w-auto' },
  { name: 'ABInBev', file: '/logos/abinbev.svg', className: 'w-auto' },
  { name: 'Bloomberg', file: '/logos/bloomberg.svg', className: 'w-auto' },
  { name: 'Pearson', file: '/logos/pearson.svg', className: 'w-auto' },
]

const sig = solutions.find((s) => s.id === 'signature')!
const edge = solutions.find((s) => s.id === 'edge')!
const blueprint = solutions.find((s) => s.id === 'blueprint')!
const worklab = solutions.find((s) => s.id === 'worklab')!

const formats: Format[] = [
  {
    icon: <User className="h-8 w-8" strokeWidth={1.8} />,
    title: 'Desenvolvimento individual',
    desc: 'Programas de mentoria para executivos e profissionais-chave.',
    products: [
      { id: sig.id, label: sig.label, accent: sig.accent },
      { id: edge.id, label: edge.label, accent: edge.accent },
    ],
  },
  {
    icon: <Users className="h-8 w-8" strokeWidth={1.8} />,
    title: 'Desenvolvimento de equipes',
    desc: 'Programas estruturados para áreas e times corporativos.',
    products: [
      { id: blueprint.id, label: blueprint.label, accent: blueprint.accent },
      { id: worklab.id, label: worklab.label, accent: worklab.accent },
    ],
  },
  {
    icon: <Settings2 className="h-8 w-8" strokeWidth={1.8} />,
    title: 'Soluções customizadas',
    desc: 'Projetos desenhados para atender necessidades específicas da sua empresa.',
    extraDesc: 'Do diagnóstico à entrega, com foco em impacto real.',
    products: [],
  },
] as const

const cases = [
  {
    industry: 'Hotelaria',
    program:
      'Programa para capacitação de recepcionistas e atendimento de reservas',
    duration: '6 meses',
    result: 'Aumento da qualidade de atendimento na percepção do hóspede',
  },
  {
    industry: 'Serviços',
    program:
      'Programa para capacitação de Brand Ambassadors p/ venda de perfumes de marca em aeroportos',
    duration: '4 meses',
    result: 'Aumento das vendas para viajantes estrangeiros',
  },
]

const ForCompaniesPage = () => {
  return (
    <div className="w-full bg-white pt-18.25">
      {/* ── Hero ── */}
      <section className="w-full bg-primary px-6 py-16 md:px-16 md:py-20">
        <p className="mb-6 text-center text-xs tracking-[0.25em] text-white/50 uppercase">
          Para Empresas
        </p>
        <h1 className="mx-auto max-w-4xl text-center text-3xl leading-tight font-light text-white md:text-5xl lg:text-6xl">
          Comunicação corporativa em inglês que gera{' '}
          <span className="font-semibold text-secondary">
            performance e resultados.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-white/70">
          Soluções estratégicas para empresas que precisam reduzir ruídos,
          aumentar clareza e operar com segurança em ambientes internacionais.
        </p>
        <div className="mt-8 flex justify-center">
          <CTAButton />
        </div>
      </section>
      {/* ── Como podemos apoiar ── */}
      <section className="w-full px-6 py-16 md:px-12 lg:px-16">
        <h2 className="mb-3 text-center text-2xl font-light text-primary md:text-3xl">
          Como podemos apoiar a sua empresa
        </h2>
        <div className="mx-auto mb-10 h-0.75 w-10 rounded-full bg-secondary" />

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a, i) => (
            <div
              key={i}
              className="flex flex-col items-center rounded-lg bg-gray-50 p-8 text-center"
            >
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary">
                {a.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary">{a.title}</h3>
              <p className="text-gray-700">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* ── Formatos de atuação ── */}
      <section className="w-full bg-zinc-50 px-6 py-16 md:px-12 lg:px-16">
        <h2 className="mb-3 text-center text-2xl font-light text-primary md:text-3xl">
          Nossos formatos de atuação
        </h2>
        <div className="mx-auto mb-10 h-0.75 w-10 rounded-full bg-secondary" />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {formats.map((f, i) => (
            <div
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              key={i}
            >
              {/* Header: icon + title + desc */}
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-secondary">
                  {f.icon}
                </div>
                <div>
                  <h3 className="mb-1.5 text-base leading-snug font-bold text-primary">
                    {f.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-primary/80">
                    {f.desc}
                  </p>
                  {f.extraDesc && (
                    <p className="mt-4 text-xs leading-relaxed text-primary/80">
                      {f.extraDesc}
                    </p>
                  )}
                </div>
              </div>

              {/* Divider + product badges */}
              {f.products.length > 0 && (
                <>
                  <div className="my-5 h-px w-full bg-zinc-100" />
                  <div className="flex flex-wrap gap-3">
                    {f.products.map((p) => (
                      <span
                        key={p.id}
                        className="flex items-center gap-1.5 text-[11px] font-bold tracking-widest text-primary uppercase"
                      >
                        <Diamond stroke={p.accent} />
                        {p.label}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* ── Cases de Sucesso ── */}
      <section className="w-full bg-primary px-6 py-16 md:px-12 lg:px-16">
        <h2 className="mb-10 text-center text-2xl font-light text-secondary md:text-3xl">
          Cases de Sucesso
        </h2>

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
          {cases.map((c, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl bg-[#6a8d92] p-7 text-white"
            >
              <div className="flex w-full flex-col items-center">
                <h3 className="mb-2 text-base font-bold text-secondary">
                  {c.industry}
                </h3>
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-secondary text-secondary"
                    />
                  ))}
                </div>
              </div>
              <p className="mb-4 text-sm leading-relaxed">{c.program}</p>
              <p className="text-sm text-white/70">
                <span className="font-semibold text-white">Duração:</span>{' '}
                {c.duration}
              </p>
              <p className="mt-2 text-sm text-white/70">
                <span className="font-semibold text-white">Resultado:</span>{' '}
                {c.result}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* ── Logos ── */}
      <section className="w-full bg-zinc-50 px-6 py-14 md:px-12 lg:px-16">
        <h2 className="mb-3 text-center text-2xl font-light text-primary md:text-3xl">
          Clientes Higher-Up atuam em empresas como
        </h2>
        <div className="mx-auto mb-10 h-0.75 w-10 rounded-full bg-secondary" />

        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex w-[calc(20%-26px)] min-w-24 items-center justify-center"
            >
              <Image
                src={logo.file}
                alt={logo.name}
                width={200}
                height={80}
                className={cn(logo.className, 'object-contain')}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ForCompaniesPage
