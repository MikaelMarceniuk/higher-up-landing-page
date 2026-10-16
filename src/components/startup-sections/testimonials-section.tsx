'use client'

import { useState } from 'react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'
import { displayFont, headingClass, SectionMarker } from './startup-ui'

// TODO: validar com a cliente se estes depoimentos permanecem na página
const testimonials = [
  {
    quote:
      'A mentoria aumentou significativamente minha confiança. Hoje me sinto totalmente confortável conduzindo apresentações em inglês para stakeholders seniores.',
    name: 'Eduardo Monaco',
    role: 'Head de Vendas',
  },
  {
    quote:
      'Passei a explicar dados e gráficos com clareza durante reuniões. Em uma call global com líderes seniores, consegui apresentar meus números com sucesso mesmo sem preparação prévia.',
    name: 'Henrique Leão',
    role: 'Data Manager',
  },
  {
    quote:
      'Cada sessão inclui feedback claro e objetivo sobre precisão, pronúncia e eficácia. Foi o treinamento mais eficaz que já tive na minha carreira.',
    name: 'Tarcizo Minuzzi',
    role: 'Gerente de Vendas',
  },
]

const formatIndex = (index: number) => String(index + 1).padStart(2, '0')

export const TestimonialsSection = () => {
  const [index, setIndex] = useState(0)

  const showSlide = (newIndex: number) =>
    setIndex((newIndex + testimonials.length) % testimonials.length)

  const controlClass =
    'grid size-9.25 place-items-center rounded-full border border-white/40 text-white transition-colors hover:border-secondary hover:bg-secondary hover:text-primary'

  return (
    <section
      id="depoimentos"
      className="scroll-mt-18 overflow-hidden bg-[#2a001f] text-white"
    >
      <div className="container py-20 md:py-34">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionMarker number="04" label="Transformações reais" onDark />
            <h2 className={headingClass}>
              Confiança que se torna{' '}
              <span className="text-secondary">resultado.</span>
            </h2>
          </Reveal>
          <Reveal
            delay={90}
            className="flex items-center gap-3 text-[0.8rem] text-white/80 md:pb-1.5"
          >
            <button
              type="button"
              aria-label="Depoimento anterior"
              className={controlClass}
              onClick={() => showSlide(index - 1)}
            >
              ←
            </button>
            <span>
              <b className="text-secondary">{formatIndex(index)}</b> /{' '}
              {formatIndex(testimonials.length - 1)}
            </span>
            <button
              type="button"
              aria-label="Próximo depoimento"
              className={controlClass}
              onClick={() => showSlide(index + 1)}
            >
              →
            </button>
          </Reveal>
        </div>

        <Reveal
          delay={130}
          className="relative mt-10 min-h-96 md:mt-17 md:min-h-80"
        >
          {testimonials.map((testimonial, i) => (
            <figure
              key={testimonial.name}
              aria-hidden={i !== index}
              className={cn(
                'absolute inset-0 m-0 flex flex-col justify-between border-t border-white/25 pt-4 transition-all duration-350 md:pl-[7%] lg:pl-[13%]',
                i === index
                  ? 'pointer-events-auto translate-x-0 opacity-100'
                  : 'pointer-events-none translate-x-7.5 opacity-0'
              )}
            >
              <blockquote
                className={cn(
                  displayFont,
                  'mt-7 mb-8 max-w-205 text-[clamp(1.78rem,9vw,2.4rem)] leading-[1.15] font-semibold tracking-[-0.055em] md:mt-11 md:text-[clamp(1.8rem,3.35vw,3.25rem)]'
                )}
              >
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="grid gap-1">
                <strong className="text-[0.93rem]">{testimonial.name}</strong>
                <span className="text-[0.76rem] text-secondary">
                  {testimonial.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
