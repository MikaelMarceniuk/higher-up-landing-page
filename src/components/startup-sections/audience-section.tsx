import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'
import { displayFont, Eyebrow, headingClass, SectionMarker } from './startup-ui'

const profiles = [
  {
    title: 'Captação e validação',
    desc: 'Startups em pré-seed ou seed buscando investimento e os primeiros clientes.',
  },
  {
    title: 'Novos mercados',
    desc: 'Equipes validando a solução, construindo tração ou preparando uma expansão.',
  },
  {
    title: 'Conexões globais',
    desc: 'Founders em busca de parceiros, clientes ou oportunidades fora do Brasil.',
  },
  {
    title: 'Momentos decisivos',
    desc: 'Quem vai participar de conferências, eventos e missões internacionais.',
  },
]

export const AudienceSection = () => {
  return (
    <section id="programa" className="scroll-mt-18 bg-muted">
      <div className="container py-20 md:py-34">
        <Reveal>
          <SectionMarker number="01" label="Para quem" />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.07fr_.78fr] lg:gap-[8%]">
          <Reveal>
            <Eyebrow>Comunicação que acompanha a ambição</Eyebrow>
            <h2 className={cn(headingClass, 'text-primary')}>
              Você não precisa de mais uma aula de inglês.
            </h2>
          </Reveal>
          <Reveal delay={90} className="self-end pb-2">
            <p className="mb-4 text-[1.16rem] leading-[1.45] font-semibold text-primary md:text-[1.3rem]">
              Precisa se fazer entender quando o investidor pergunta, o cliente
              internacional responde ou a parceria finalmente acontece.
            </p>
            <p className="text-[1.03rem] leading-[1.6] text-gray-600">
              O Startup Programme foi desenhado para founders e equipes que
              estão prontas para se comunicar com mais presença em cada conversa
              que pode mudar o rumo do negócio.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={150}
          className="mt-14 grid gap-px bg-primary text-white sm:grid-cols-2 lg:mt-21.5 lg:grid-cols-4"
        >
          {profiles.map((profile, i) => (
            <article
              key={profile.title}
              className="group bg-primary p-6 transition-colors hover:bg-secondary hover:text-primary md:min-h-56 md:p-7"
            >
              <span className="mb-5 block text-[0.78rem] font-bold text-secondary transition-colors group-hover:text-primary md:mb-10">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3
                className={cn(
                  displayFont,
                  'mb-2.5 text-[1.05rem] font-bold tracking-[-0.03em] md:text-[1.05rem]'
                )}
              >
                {profile.title}
              </h3>
              <p className="mb-0 text-[0.87rem] leading-normal opacity-80">
                {profile.desc}
              </p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
