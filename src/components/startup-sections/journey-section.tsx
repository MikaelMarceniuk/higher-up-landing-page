import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'
import { displayFont, Eyebrow, headingClass } from './startup-ui'

const steps = [
  {
    label: 'Diagnóstico',
    title: 'Ouvimos seu pitch atual.',
    desc: 'Em 20 minutos, entendemos o estágio da startup e os pontos de comunicação que merecem atenção.',
  },
  {
    label: 'Estratégia',
    title: 'Transformamos intenção em mensagem.',
    desc: 'Organizamos linguagem, narrativa e presença para cada tipo de conversa que está por vir.',
  },
  {
    label: 'Prática',
    title: 'Testamos para a vida real.',
    desc: 'Você pratica com feedback claro e objetivo até a mensagem ficar natural, precisa e sua.',
  },
]

export const JourneySection = () => {
  return (
    <section className="bg-primary text-white">
      <div className="container grid gap-12 py-20 md:py-34 lg:grid-cols-[.77fr_1.23fr] lg:gap-[7%]">
        <Reveal>
          <Eyebrow className="text-secondary">A sua jornada</Eyebrow>
          <h2 className={headingClass}>
            Do que você precisa dizer ao que o mundo{' '}
            <span className="text-secondary">entende.</span>
          </h2>
        </Reveal>

        <ol>
          {steps.map((step, i) => (
            <li key={step.label}>
              <Reveal
                delay={i * 70}
                className="relative grid grid-cols-[42px_1fr] gap-4 pb-8.5 md:grid-cols-[52px_1fr] md:gap-5.5"
              >
                {i < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute top-9.5 bottom-1 left-4.25 border-l border-dashed border-white/50 md:top-11.75 md:left-5.5"
                  />
                )}
                <span className="grid size-9 place-items-center self-start rounded-full bg-secondary text-sm font-extrabold text-primary md:size-11.25">
                  {i + 1}
                </span>
                <div>
                  <small className="mt-0.5 mb-1 block text-[0.66rem] font-extrabold tracking-[0.12em] text-secondary uppercase">
                    {step.label}
                  </small>
                  <h3
                    className={cn(
                      displayFont,
                      'mb-1.5 text-[1.37rem] font-bold tracking-[-0.04em] md:text-[1.37rem]'
                    )}
                  >
                    {step.title}
                  </h3>
                  <p className="mb-0 max-w-135 leading-[1.55] text-white/70">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
