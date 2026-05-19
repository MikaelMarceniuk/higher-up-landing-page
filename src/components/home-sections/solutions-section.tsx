import Image from 'next/image'
import { Button } from '../ui/button'
import { Building2, User } from 'lucide-react'

export const SolutionsSection = () => {
  return (
    <section id="solucoes" className="bg-gray-50 py-20">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
            SOLUÇÕES DE COMUNICAÇÃO
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Para Empresas */}
          <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
            <Image
              src={'/home-company.webp'}
              alt="Solução para empresas"
              className="h-64 w-full object-cover"
              width={800}
              height={256}
            />
            <div className="p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <Building2 className="size-6 text-white" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-primary">
                Para empresas
              </h3>
              <p className="mb-6 text-gray-700">
                Eleve a comunicação de sua equipe. Impulsione resultados
                globais.
              </p>
              <p className="mb-6 text-sm text-gray-600">
                Programas para empresas e times que precisam elevar seu nível
                com idiomas que precisam de soluções especializadas em
                comunicação corporativa internacional.
              </p>
              <Button className="bg-secondary font-bold text-primary hover:bg-yellow-500">
                Saiba Mais
              </Button>
            </div>
          </div>

          {/* Para Profissionais */}
          <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
            <Image
              src={'/home-professional.webp'}
              alt="Solução para profissionais"
              className="h-64 w-full object-cover"
              width={800}
              height={256}
            />
            <div className="p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <User className="size-6 text-white" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-primary">
                Para profissionais
              </h3>
              <p className="mb-6 text-gray-700">
                Desenvolva sua comunicação. Avance em sua carreira.
              </p>
              <p className="mb-6 text-sm text-gray-600">
                Soluções para profissionais buscando elevar seu nível de inglês
                corporativo com foco em comunicação assertiva e intercultural.
              </p>
              <Button className="bg-secondary font-bold text-primary hover:bg-yellow-500">
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
