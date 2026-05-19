import { Award, Globe, Users } from 'lucide-react'

export const ExpertiseSection = () => {
  return (
    <section className="bg-primary py-20 text-white">
      <div className="container">
        <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl">
          Nossa Expertise
        </h2>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Experiência Global</h3>
              <p className="text-muted-foreground">
                Seu espaço para descrever a experiência internacional da Higher
                Up, mercados atendidos e contextos de atuação.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Reconhecimento</h3>
              <p className="text-muted-foreground">
                Seu espaço para descrever prêmios, certificações, parcerias
                estratégicas e reconhecimentos recebidos pela Higher Up.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Comunidade</h3>
              <p className="text-muted-foreground">
                Seu espaço para descrever a comunidade de profissionais que
                trabalham com a Higher Up, networking e impacto coletivo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
