import { Shield, TrendingUp, Zap } from 'lucide-react'

export const BelfSection = () => {
  return (
    <section className="bg-primary py-20 text-white">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            BELF: ENGLISH AS BUSINESS
            <br />
            LINGUA FRANCA
          </h2>
          <p className="text-xl text-gray-200">
            Única empresa do Brasil com pedagogia BELF!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-3 text-xl font-bold">CONFIANÇA</h3>
            <p className="text-gray-200">
              Seu inglês não precisa ser perfeito e nem &quot;nativo&quot;;
              precisa ser efetivo.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-3 text-xl font-bold">PRATICIDADE</h3>
            <p className="text-gray-200">
              Foco em situações reais, negociações, apresentações, etc.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-3 text-xl font-bold">MENSURÁVEL</h3>
            <p className="text-gray-200">
              Resultados claros: negócios fechados, promoções conquistadas,
              influência expandida.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
