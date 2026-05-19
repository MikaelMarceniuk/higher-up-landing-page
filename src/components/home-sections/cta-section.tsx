import Image from 'next/image'
import { Button } from '@/ui/button'

export const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-20">
      <Image
        src={'/home-cta.webp'}
        alt="Próximo nível"
        className="absolute inset-0 h-full w-full object-cover"
        fill
      />
      <div className="absolute inset-0 bg-primary/70"></div>

      <div className="relative z-10 container text-center">
        <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
          Pronto para o Próximo Nível?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-100">
          Agende uma diagnóstico estratégico com nosso time. Vamos entender seus
          objetivos e desenhar o programa perfeito para você.
        </p>
        <Button
          size="lg"
          className="bg-secondary px-10 py-6 text-lg font-bold text-primary hover:bg-yellow-500"
        >
          Agendar diagnóstico estratégico
        </Button>
      </div>
    </section>
  )
}
