import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'
import { ScrollLink } from './scroll-link'
import { displayFont, Eyebrow, headingClass } from './startup-ui'

export const BelfSection = () => {
  return (
    <section
      id="belf"
      className="scroll-mt-18 overflow-hidden bg-primary text-white"
    >
      <div className="relative container flex items-center md:min-h-155">
        <div
          aria-hidden="true"
          className="absolute -top-30 -right-62.5 size-115 rounded-full border border-white/25 shadow-[0_0_0_56px_rgba(255,255,255,.055),0_0_0_112px_rgba(255,255,255,.035)] md:-top-47.5 md:-right-20 md:size-155"
        />
        <Reveal
          className={cn(
            displayFont,
            'pointer-events-none absolute -bottom-14.5 -left-[.05em] text-[10rem] leading-[.75] font-extrabold tracking-[-0.13em] text-white/8 select-none md:-bottom-38 md:text-[clamp(13rem,31vw,27rem)]'
          )}
        >
          <span aria-hidden="true">BELF</span>
        </Reveal>

        <Reveal
          delay={90}
          className="relative z-10 ml-auto w-full py-22 md:w-[min(620px,90%)] md:py-27"
        >
          <Eyebrow line className="text-secondary">
            Nossa metodologia
          </Eyebrow>
          <h2 className={cn(headingClass, 'mb-8')}>
            Inglês não é o fim.
            <br />
            <span className="text-secondary">É o meio.</span>
          </h2>
          <p className="mb-4 max-w-137.5 text-[1.05rem] leading-[1.62] text-white/85">
            A proposta pedagógica da Higher Up é explicitamente baseada em BELF
            —{' '}
            <em className="font-bold text-white not-italic">
              English as a Business Lingua Franca.
            </em>
          </p>
          <p className="mb-4 max-w-137.5 text-[1.05rem] leading-[1.62] text-white/85">
            Isso significa desenvolver uma comunicação clara, confiante e eficaz
            entre pessoas de diferentes culturas — sem a cobrança de soar nativo
            ou falar um inglês perfeito.
          </p>
          <ScrollLink targetId="diferenciais" className="mt-4">
            Conheça nosso jeito de desenvolver profissionais
          </ScrollLink>
        </Reveal>
      </div>
    </section>
  )
}
