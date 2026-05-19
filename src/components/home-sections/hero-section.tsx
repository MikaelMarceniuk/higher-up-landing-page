import Image from 'next/image'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

export const HeroSection = () => {
  return (
    <section
      className="relative flex h-screen w-full items-center justify-center overflow-hidden pt-20"
      id="hero"
    >
      <Image
        src={'/home-hero.webp'}
        alt="Profissional em contexto premium"
        className="absolute inset-0 h-full w-full object-cover"
        fill
      />
      <div className="absolute inset-0 bg-black/35"></div>

      <div className="relative z-10 container flex h-full flex-col items-center justify-center text-center text-white">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-5xl leading-tight font-bold md:text-7xl">
            Seu Inglês
            <br />
            <span className="text-secondary">em Ascensão</span>
          </h1>
          <p className="mb-8 text-xl font-light md:text-2xl">
            Mentoria de aceleração em comunicação corporativa para profissionais
            que querem impacto real nos negócios
          </p>
          <div className="flex flex-col flex-wrap justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-secondary px-8 py-6 text-lg font-bold text-primary hover:bg-yellow-500"
            >
              Descobrir Programas <ArrowRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="border-white px-8 py-6 text-lg font-bold text-white"
            >
              Diagnóstico estratégico
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
