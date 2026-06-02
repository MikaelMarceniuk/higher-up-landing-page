import { Target, Globe, Speech } from 'lucide-react'

export const BELFPedagogySection = () => {
  return (
    <section className="bg-primary py-20 text-white">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          {/* Header row: icon left + title centered */}
          <div className="relative mb-12 flex items-center justify-center">
            <h2 className="text-center text-xl font-bold tracking-wide">
              Pedagogia BELF
            </h2>
          </div>

          {/* Three columns — plain text only, no sub-headings */}
          <div className="grid gap-8 text-center md:grid-cols-3">
            <div className="flex flex-col items-center gap-4">
              <Target className="size-16 text-secondary" strokeWidth={1.5} />
              <p className="text-lg leading-relaxed">
                O inglês perfeito não existe! Não perca seu tempo procurando por
                ele.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Speech className="size-16 text-secondary" strokeWidth={1.5} />
              <p className="text-lg leading-relaxed">
                Tenha orgulho do seu sotaque, ele é quem você é. Não se
                envergonhe dele.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Globe className="size-16 text-secondary" strokeWidth={1.5} />
              <p className="text-lg leading-relaxed">
                A competência intercultural é tão importante quanto a gramática.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
