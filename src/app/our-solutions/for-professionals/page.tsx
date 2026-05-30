'use client'

import { cn } from '@/lib/utils'
import {
  Briefcase,
  Cpu,
  HeartPulse,
  Scale,
  TrendingUp,
  GraduationCap,
} from 'lucide-react'
import { SoluctionCard } from './_components/solution-card'
import { solutions } from '@/constants/solutions.constants'

const segments = [
  { label: 'Negócios', icon: Briefcase },
  { label: 'Tecnologia', icon: Cpu },
  { label: 'Saúde', icon: HeartPulse },
  { label: 'Jurídico', icon: Scale },
  { label: 'Finanças', icon: TrendingUp },
  { label: 'Educação', icon: GraduationCap },
]

const ForProfessionalsPage = () => {
  return (
    <div className="w-full bg-white pt-18.25">
      <section className="w-full bg-primary px-6 py-16 md:px-16 md:py-20">
        <p className="mb-6 text-center text-xs tracking-[0.25em] text-white/50 uppercase">
          Para Profissionais
        </p>
        <h1 className="mx-auto max-w-4xl text-center text-3xl leading-tight font-light text-white md:text-5xl lg:text-6xl">
          Soluções de comunicação em inglês para{' '}
          <span className="font-normal text-secondary">
            cada momento da sua jornada
          </span>
          .
        </h1>
      </section>

      <section className="w-full font-sans">
        {/* ── Segments section ── */}
        <div className="w-full bg-[#f5f5f5] px-6 py-14 md:px-16">
          <p className="mb-12 text-center text-xl font-normal text-zinc-800 md:text-2xl">
            Oferecemos soluções nos segmentos de
          </p>

          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-4 md:gap-6">
            {segments.map((seg, i) => {
              const Icon = seg.icon
              return (
                <div key={i} className="group flex flex-col items-center gap-3">
                  <div
                    className={cn(
                      'h-28 w-28 rounded-full bg-primary md:h-36 md:w-36',
                      'flex flex-col items-center justify-center gap-2',
                      'transition-transform duration-300 group-hover:scale-105',
                      'shadow-lg shadow-primary/30'
                    )}
                  >
                    <Icon
                      className="h-6 w-6 text-secondary md:h-7 md:w-7"
                      strokeWidth={1.8}
                    />
                    <span className="px-2 text-center text-sm leading-tight font-semibold text-secondary md:text-base">
                      {seg.label}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          <p className="mt-12 text-center text-xl font-normal text-zinc-700 md:text-2xl">
            e mais!
          </p>
        </div>

        {/* ── Products section ── */}
        <div className="w-full bg-white px-6 py-16 md:px-12 lg:px-16">
          <p className="mb-3 text-center text-xs tracking-[0.25em] text-zinc-400 uppercase">
            Nossas Soluções
          </p>
          <h2 className="mx-auto mb-12 max-w-xl text-center text-2xl font-light text-[#1a0a2e] md:text-3xl">
            Escolha o produto certo para a sua{' '}
            <span className="font-semibold text-[#2d0a4e]">jornada</span>
          </h2>

          {/* 1 col on mobile → 2 col on sm → 4 col on lg */}
          <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-6">
            {solutions.map((product) => (
              <SoluctionCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ForProfessionalsPage
