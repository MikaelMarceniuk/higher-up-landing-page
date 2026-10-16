import { CTAButton } from '@/components/cta-button'
import { Reveal } from '@/components/reveal'
import { whatsappWithText } from '@/constants/contact-links.constants'
import { cn } from '@/lib/utils'
import { ctaClass, Eyebrow, headingClass } from './startup-ui'

export const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(112deg,var(--primary)_0%,#2a001f_100%)] text-white">
      <div
        aria-hidden="true"
        className="absolute -top-65 -left-35 size-165 rounded-full border border-dashed border-secondary/85 shadow-[0_0_0_55px_rgba(255,255,255,.055),0_0_0_110px_rgba(255,255,255,.035)]"
      />

      <Reveal className="relative container py-22 md:py-31">
        <Eyebrow line className="text-secondary">
          Diagnóstico gratuito
        </Eyebrow>
        <h2 className={cn(headingClass, 'max-w-205')}>
          Seu pitch já conta a história que a sua startup merece?
        </h2>
        <div className="mt-9 flex flex-col gap-6 border-t border-white/30 pt-8 md:flex-row md:items-end md:justify-between md:gap-8">
          <p className="mb-0 max-w-127.5 text-[1.06rem] leading-[1.55] text-white/85">
            Em 20 minutos, vamos ouvir a sua apresentação e identificar os
            pontos que podem torná-la mais estratégica para investidores,
            clientes e parceiros.
          </p>
          <CTAButton
            text="Quero agendar meu diagnóstico"
            href={whatsappWithText(
              'Olá, quero agendar um diagnóstico gratuito para o Startup Programme.'
            )}
            className={ctaClass}
          />
        </div>
      </Reveal>
    </section>
  )
}
