import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'

export const CTASection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-primary md:text-5xl">
            Faça Parte da Nossa Jornada
          </h2>
          <p className="mb-8 text-xl text-muted-foreground">
            Transforme sua comunicação em inglês e impacte sua carreira. Conheça
            nossos programas e descubra como podemos ajudá-lo a alcançar o
            próximo nível.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-yellow-400 px-8 py-6 text-lg font-bold text-primary hover:bg-secondary"
            >
              Conhecer Programas <ArrowRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary px-8 py-6 text-lg font-bold text-primary hover:bg-purple-50"
            >
              Agendar Conversa
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
