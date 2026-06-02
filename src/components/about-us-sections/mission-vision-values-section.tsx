import { Heart, Lightbulb, Target } from 'lucide-react'

export const MissionVisionValuesSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container">
        <h2 className="mb-12 text-center text-4xl font-bold text-primary md:text-5xl">
          Nossa Missão, Visão e Valores
        </h2>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
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
          <div className="rounded-lg bg-white p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-primary">Valores</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <strong className="block text-base font-semibold text-primary">
                  Comunicação funcional acima da perfeição
                </strong>
                Priorizamos clareza, intenção e impacto real em vez de
                perfeccionismo linguístico.
              </li>
              <li>
                <strong className="block text-base font-semibold text-primary">
                  Respeito à individualidade comunicativa
                </strong>
                Desenvolvemos profissionais sem apagar sotaques, repertórios
                culturais ou personalidade.
              </li>
              <li>
                <strong className="block text-base font-semibold text-primary">
                  Autonomia como objetivo
                </strong>
                Nosso papel é desenvolver profissionais cada vez mais
                independentes para atuar globalmente.
              </li>
              <li>
                <strong className="block text-base font-semibold text-primary">
                  Relações profissionais sustentáveis
                </strong>
                Construímos relações transparentes, respeitosas e sustentáveis
                entre empresa, clientes e mentores.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
