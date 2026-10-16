import { CTAButton } from '@/components/cta-button'
import { Reveal } from '@/components/reveal'
import { whatsappWithText } from '@/constants/contact-links.constants'
import { cn } from '@/lib/utils'
import { ScrollLink } from './scroll-link'
import { ctaClass, displayFont, Eyebrow } from './startup-ui'

const highlights = [
  {
    title: 'Comunicação real',
    desc: 'para conversas que importam agora',
  },
  {
    title: 'Foco individual',
    desc: 'no desafio e estágio da sua startup',
  },
  {
    title: 'Inglês em ação',
    desc: 'sem a pressão de ser perfeito',
  },
]

const conversationLines = [
  'w-[86%] -rotate-[17deg]',
  'ml-[20%] w-[61%] rotate-[22deg]',
  'ml-[6%] w-[76%] -rotate-[5deg]',
]

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_78%_35%,var(--primary)_0%,#2a001f_100%)] text-white">
      <div
        aria-hidden="true"
        className="absolute -right-[3%] -bottom-[18%] size-[min(640px,52vw)] rounded-full border border-white/15 shadow-[0_0_0_68px_rgba(255,255,255,.035),0_0_0_135px_rgba(255,255,255,.025)]"
      />
      <div
        aria-hidden="true"
        className="absolute top-34.5 right-[10%] size-92.5 animate-[spin_28s_linear_infinite] rounded-full border border-dashed border-secondary/70 motion-reduce:animate-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-65 -left-30 size-135 animate-[spin_46s_linear_infinite_reverse] rounded-full border border-dashed border-white/25 motion-reduce:animate-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] mask-[linear-gradient(90deg,black_0%,transparent_72%)] bg-size-[64px_64px] opacity-25"
      />

      <div className="relative z-10 container flex min-h-202.5 flex-col pt-40 pb-12 md:pt-48">
        <Reveal className="mb-14 w-full lg:w-[min(725px,75%)]">
          <Eyebrow line className="text-secondary">
            Higher Up / Startup Programme
          </Eyebrow>
          <h1
            className={cn(
              displayFont,
              'mb-6 max-w-200 text-[clamp(2.8rem,12vw,4rem)] leading-[1.03] font-extrabold tracking-[-0.065em] md:text-[clamp(3rem,5.25vw,5.35rem)]'
            )}
          >
            O próximo mercado da sua startup começa com uma{' '}
            <span className="text-secondary">conversa que convence.</span>
          </h1>
          <p className="mb-8 max-w-152.5 text-[1.05rem] leading-[1.55] text-white/85 md:text-[clamp(1.05rem,1.6vw,1.3rem)]">
            Mentoria individual de comunicação em inglês para founders e equipes
            que precisam transformar oportunidades internacionais em negócios
            concretos.
          </p>
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
            <CTAButton
              text="Agendar diagnóstico gratuito"
              href={whatsappWithText(
                'Olá, quero agendar meu diagnóstico para o Startup Programme.'
              )}
              className={ctaClass}
            />
            <ScrollLink targetId="modalidades">
              Conheça as modalidades
            </ScrollLink>
          </div>
        </Reveal>

        <Reveal
          delay={120}
          className="absolute top-60 right-8 hidden w-[min(314px,29vw)] lg:block"
        >
          <div className="rotate-4 bg-secondary p-5 text-[#2a001f] shadow-[20px_24px_0_rgba(0,0,0,.11)]">
            <div className="flex items-start gap-2 text-[0.68rem] leading-tight font-extrabold tracking-[0.06em] uppercase">
              <span className="mt-0.5 inline-block size-2.25 shrink-0 rounded-full bg-[#2a001f] shadow-[0_0_0_4px_rgba(69,2,62,.15)]" />
              <span>
                De oportunidade
                <br />a negociação
              </span>
              <span
                className={cn(
                  displayFont,
                  'ml-auto text-xl tracking-[-0.08em]'
                )}
              >
                01
              </span>
            </div>
            <div aria-hidden="true" className="h-31 pt-6">
              {conversationLines.map((line) => (
                <div
                  key={line}
                  className={cn(
                    'relative h-8.25 origin-left border-t-2 border-[#2a001f]',
                    line
                  )}
                >
                  <i className="absolute -top-1 left-[42%] block size-1.75 rounded-full bg-[#2a001f]" />
                  <b className="absolute -top-1.5 right-0 size-2.75 rounded-full border-2 border-[#2a001f] bg-secondary" />
                </div>
              ))}
            </div>
            <p className="mb-0 border-t border-primary/25 pt-2 leading-snug font-semibold">
              Clareza para apresentar, negociar e construir relações em
              ambientes globais.
            </p>
          </div>
        </Reveal>

        <Reveal
          delay={220}
          className="mt-auto flex border-t border-white/30 pt-0 max-sm:flex-col"
        >
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className={cn(
                'grid flex-1 gap-1 pt-4 pr-6',
                i > 0 && 'max-sm:hidden sm:border-l sm:border-white/20 sm:pl-6'
              )}
            >
              <strong className="text-xs tracking-[0.05em] uppercase">
                {item.title}
              </strong>
              <span className="text-[0.78rem] text-white/70">{item.desc}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
