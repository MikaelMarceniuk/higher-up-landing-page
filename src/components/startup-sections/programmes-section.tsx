import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { whatsappWithText } from '@/constants/contact-links.constants'
import { cn } from '@/lib/utils'
import { displayFont, headingClass, SectionMarker } from './startup-ui'

type Programme = {
  route: string
  pace: string
  name: string
  subtitle: string
  statement: string
  items: string[]
  duration: string
  accent?: string
}

const programmes: Programme[] = [
  {
    route: 'Rota 01',
    pace: 'Curta e intensa',
    name: 'MVP',
    subtitle: 'Para ganhar clareza rapidamente',
    statement:
      'Seu pitch, sua mensagem e a segurança para entrar na próxima conversa internacional.',
    items: [
      'Pitch deck em inglês',
      'Pitch em inglês',
      '2 sessões online ao vivo por semana',
    ],
    duration: '1 mês',
  },
  {
    route: 'Rota 02',
    pace: 'Construção contínua',
    name: 'Scale-up',
    subtitle: 'Para comunicar-se com consistência',
    statement:
      'Da primeira apresentação aos relacionamentos que sustentam seu crescimento internacional.',
    items: [
      'Pitch deck e pitch em inglês',
      'Reuniões e networking em inglês',
      '1 ou 2 sessões online ao vivo por semana',
    ],
    duration: '3 ou 6 meses',
    accent: 'Mais fôlego para ganhar escala',
  },
]

export const ProgrammesSection = () => {
  return (
    <section id="modalidades" className="scroll-mt-18 bg-[#2a001f] text-white">
      <div className="container py-20 md:py-34">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
          <Reveal>
            <SectionMarker number="02" label="Modalidades" onDark />
            <h2 className={headingClass}>
              O programa no ritmo <br className="hidden lg:block" />
              do seu <span className="text-secondary">momento.</span>
            </h2>
          </Reveal>
          <Reveal delay={90} className="md:max-w-90">
            <p className="mb-2 leading-normal text-white/70">
              Duas rotas para desenvolver uma comunicação estratégica, com
              trabalho ao vivo e individual. Escolha a profundidade que o
              momento da sua startup pede.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:mt-17 md:grid-cols-2">
          {programmes.map((programme, i) => {
            const isLight = Boolean(programme.accent)

            return (
              <Reveal key={programme.name} delay={i * 120}>
                <article
                  className={cn(
                    'relative flex h-full flex-col overflow-hidden p-7 md:min-h-135',
                    isLight ? 'bg-white text-primary' : 'bg-primary text-white'
                  )}
                >
                  {programme.accent && (
                    <div className="absolute top-32 -right-10.5 hidden rotate-43 bg-secondary px-13 py-1.5 text-[0.62rem] font-extrabold tracking-[0.08em] text-primary uppercase lg:block">
                      {programme.accent}
                    </div>
                  )}

                  <div className="flex justify-between border-b border-current pb-4 text-[0.65rem] font-extrabold tracking-[0.12em] uppercase opacity-70">
                    <span>{programme.route}</span>
                    <span>{programme.pace}</span>
                  </div>

                  <div className="pt-10">
                    {programme.accent && (
                      <span className="mb-4 inline-block bg-secondary px-2.5 py-1 text-[0.62rem] font-extrabold tracking-[0.08em] text-primary uppercase lg:hidden">
                        {programme.accent}
                      </span>
                    )}
                    <p
                      className={cn(
                        displayFont,
                        'mb-1 text-[clamp(3rem,5vw,5.2rem)] leading-[.9] font-extrabold tracking-[-0.08em]'
                      )}
                    >
                      {programme.name}
                    </p>
                    <span className="text-[0.87rem] font-bold">
                      {programme.subtitle}
                    </span>
                  </div>

                  <div className="max-w-105 pt-10 pb-10">
                    <p className="mb-6 text-[1.11rem] leading-[1.4] font-semibold md:min-h-14.5">
                      {programme.statement}
                    </p>
                    <ul className="grid gap-3.5 text-[0.9rem] leading-[1.3]">
                      {programme.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check
                            aria-hidden="true"
                            className={cn(
                              'size-4.25 shrink-0',
                              isLight ? 'text-primary' : 'text-secondary'
                            )}
                            strokeWidth={2.6}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto flex items-end justify-between gap-4 border-t border-current pt-6">
                    <strong
                      className={cn(displayFont, 'text-2xl tracking-[-0.05em]')}
                    >
                      {programme.duration}
                    </strong>
                    <span className="text-[0.68rem] tracking-[0.08em] uppercase opacity-70">
                      mentoria individual
                    </span>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-6 grid gap-3 border-t border-white/25 pt-6 md:grid-cols-[1.1fr_1.4fr_1.55fr] md:gap-8">
          <span className="text-[0.7rem] font-extrabold tracking-[0.12em] text-secondary uppercase">
            Formato
          </span>
          <p className="mb-0 text-[0.9rem] leading-normal text-white/75">
            Programa individual ou em grupo. Cada sessão trabalha a comunicação
            que sua startup precisa usar — não exercícios genéricos.
          </p>
          <a
            href={whatsappWithText(
              'Olá, gostaria de entender qual modalidade do Startup Programme é mais adequada para mim.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-[0.8rem] leading-[1.4] font-bold text-secondary transition-opacity hover:opacity-80 md:mt-0 md:justify-self-end"
          >
            Quero entender qual rota faz sentido{' '}
            <b className="pl-1.5 text-lg">↗</b>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
