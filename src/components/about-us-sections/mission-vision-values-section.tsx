import { Heart, Lightbulb, Target } from 'lucide-react'

export const MissionVisionValuesSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container">
        <h2 className="mb-12 text-center text-4xl font-bold text-primary md:text-5xl">
          Nossa Missão, Visão e Valores
        </h2>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {/* Missão */}
          <div className="rounded-lg bg-white p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-primary">Missão</h3>
            <p className="text-muted-foreground">
              Ajudamos profissionais a operar globalmente através da comunicação
              estratégica em inglês.
            </p>
          </div>

          {/* Visão */}
          <div className="rounded-lg bg-white p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-primary">Visão</h3>
            <p className="text-muted-foreground">
              Redefinir a forma como profissionais brasileiros se comunicam em
              ambientes globais.
            </p>
          </div>

          {/* Valores */}
          <div className="rounded-lg bg-white p-8 shadow-sm md:col-span-2">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-6 text-2xl font-bold text-primary">Valores</h3>
            <ul className="grid gap-6 sm:grid-cols-2">
              <li>
                <strong className="mb-1 block text-base font-semibold text-primary">
                  Comunicação funcional acima da perfeição
                </strong>
                <p className="text-sm text-muted-foreground">
                  Priorizamos clareza, intenção e impacto real em vez de
                  perfeccionismo linguístico.
                </p>
              </li>
              <li>
                <strong className="mb-1 block text-base font-semibold text-primary">
                  Respeito à individualidade comunicativa
                </strong>
                <p className="text-sm text-muted-foreground">
                  Desenvolvemos profissionais sem apagar sotaques, repertórios
                  culturais ou personalidade.
                </p>
              </li>
              <li>
                <strong className="mb-1 block text-base font-semibold text-primary">
                  Autonomia como objetivo
                </strong>
                <p className="text-sm text-muted-foreground">
                  Nosso papel é desenvolver profissionais cada vez mais
                  independentes para atuar globalmente.
                </p>
              </li>
              <li>
                <strong className="mb-1 block text-base font-semibold text-primary">
                  Relações profissionais sustentáveis
                </strong>
                <p className="text-sm text-muted-foreground">
                  Construímos relações transparentes, respeitosas e sustentáveis
                  entre empresa, clientes e mentores.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
