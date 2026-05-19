import { Heart, Lightbulb, Target } from 'lucide-react'

export const MissionVisionValuesSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container">
        <h2 className="mb-12 text-center text-4xl font-bold text-primary md:text-5xl">
          Nossa Missão, Visão e Valores
        </h2>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-white p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-primary">Missão</h3>
            <p className="text-muted-foreground">
              Seu espaço para descrever a missão da Higher Up. O que a empresa
              se propõe a fazer, para quem, e qual é o impacto que busca gerar
              no mercado.
            </p>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-primary">Visão</h3>
            <p className="text-muted-foreground">
              Seu espaço para descrever a visão da Higher Up. Onde a empresa
              quer chegar, qual é o futuro que imagina e como pretende
              transformar o mercado de educação corporativa.
            </p>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-primary">Valores</h3>
            <p className="text-muted-foreground">
              Seu espaço para descrever os valores da Higher Up. Os princípios
              que guiam as decisões, as relações com clientes e a forma como a
              equipe trabalha.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
