import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'
import { displayFont, headingClass, SectionMarker } from './startup-ui'

const differentials = [
  {
    title: 'Comunicação para negócios',
    desc: 'Especialização exclusiva em contextos corporativos e globais. Cada encontro aproxima você de situações reais de trabalho.',
  },
  {
    title: 'Competência intercultural',
    desc: 'Não basta traduzir. Você aprende a ler contextos, alinhar expectativas e construir confiança entre culturas.',
  },
  {
    title: 'Aplicação desde o início',
    desc: 'O que você desenvolve hoje pode entrar no seu próximo pitch, e-mail, reunião ou conversa de networking.',
  },
]

export const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="scroll-mt-18 bg-muted">
      <div className="container py-20 md:py-34">
        <Reveal>
          <SectionMarker number="03" label="Por que Higher Up" />
        </Reveal>
        <Reveal className="max-w-212.5">
          <h2 className={cn(headingClass, 'text-primary')}>
            Menos “inglês perfeito”.
            <br />
            Mais <span className="text-primary/70">impacto real.</span>
          </h2>
        </Reveal>

        <div className="mt-12 border-t border-primary/15 md:mt-17">
          {differentials.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <article className="grid grid-cols-[34px_1fr] items-center gap-4 border-b border-primary/15 py-5.5 transition-all md:grid-cols-[10%_1fr_auto] md:py-6 md:hover:bg-white md:hover:px-4">
                <span className="text-[0.74rem] font-extrabold text-primary/60">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3
                    className={cn(
                      displayFont,
                      'mb-1.5 text-[1.13rem] font-bold tracking-[-0.04em] text-primary md:text-[1.37rem]'
                    )}
                  >
                    {item.title}
                  </h3>
                  <p className="mb-0 max-w-162.5 leading-normal text-gray-600">
                    {item.desc}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="hidden text-3xl text-primary md:block"
                >
                  ↘
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
