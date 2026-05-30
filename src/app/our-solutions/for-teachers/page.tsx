import { Button } from '@/components/ui/button'
import { BookOpen, TrendingUp, Zap } from 'lucide-react'
import Link from 'next/link'

const MODULES = [
  {
    id: 1,
    title: 'Fundamentos de ELF',
    description:
      'O curso de Fundamentos de ELF é projetado para ajudar professores a compreender a natureza do inglês como língua franca. Aprofunde seu conhecimento sobre o uso do inglês como uma língua de comunicação internacional, destacando suas características, práticas linguísticas e culturais. Este curso irá promover uma mudança drástica de mentalidade e prepará-lo(a) para traduzir esses conceitos em sala de aula.',
  },
]

const BENEFITS = [
  {
    id: 1,
    icon: BookOpen,
    title: 'Metodologia Comprovada',
    description:
      'Aprenda uma metodologia testada com centenas de profissionais, com resultados mensuráveis.',
  },
  {
    id: 2,
    icon: TrendingUp,
    title: 'Aumente Sua Demanda',
    description:
      'Ofereça um diferencial no mercado e atraia profissionais que buscam transformação real.',
  },
  {
    id: 3,
    icon: Zap,
    title: 'Recursos Exclusivos',
    description:
      'Acesso a materiais, templates, planos de aula e ferramentas prontas para usar.',
  },
]

const ForTeachersPage = () => {
  return (
    <div className="w-full bg-white pt-18.25">
      {/* Hero Section */}
      <section className="w-full bg-primary px-6 py-16 md:px-16 md:py-20">
        <p className="mb-6 text-center text-xs tracking-[0.25em] text-white/50 uppercase">
          Para Professores de Inglês
        </p>
        <h1 className="mx-auto max-w-4xl text-center text-3xl leading-tight font-light text-white md:text-5xl lg:text-6xl">
          Capacitação em{' '}
          <span className="font-normal text-secondary">Inglês Corporativo</span>{' '}
          e Metodologia <span className="font-normal text-secondary">BELF</span>{' '}
          para Educadores
        </h1>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-primary md:text-5xl">
              Transforme Sua Prática Docente
            </h2>
            <p className="mb-8 text-xl text-gray-700">
              Nosso programa de treinamento foi desenvolvido para professores de
              inglês que desejam se especializar em comunicação corporativa e
              metodologia BELF. Aprenda técnicas comprovadas para preparar seus
              alunos para o mercado de trabalho globalizado.
            </p>
            <p className="text-lg text-gray-600">
              Junte-se a centenas de educadores que já transformaram sua prática
              e impactam profissionais em ascensão.
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-4xl font-bold text-primary md:text-5xl">
            Estrutura do Programa
          </h2>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-1">
            {MODULES.map((module) => (
              <div
                key={module.id}
                className="rounded-lg bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary font-bold text-primary">
                    {module.id}
                  </div>
                  <h3 className="text-xl font-bold text-primary">
                    {module.title}
                  </h3>
                </div>
                <p className="mb-4 text-gray-700">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-4xl font-bold text-primary md:text-5xl">
            Por Que Fazer Este Treinamento?
          </h2>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.id} className="rounded-lg bg-gray-50 p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-primary">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-primary md:text-5xl">
              Pronto para Transformar Sua Prática?
            </h2>
            <p className="mb-8 text-xl text-gray-700">
              Junte-se a educadores que estão impactando profissionais com uma
              metodologia comprovada e reconhecida.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href={
                  'https://docs.google.com/forms/d/e/1FAIpQLSfl-iLq4sS_rYL0wo53lxp07bu2aQkUZXOLg-SXQJL8ytwCcg/viewform?usp=publish-editor'
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-secondary px-8 py-6 text-lg font-bold text-primary hover:bg-yellow-500"
                >
                  Fale com um especialista
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-4xl font-bold text-primary md:text-5xl">
            Perguntas Frequentes
          </h2>

          <div className="mx-auto max-w-3xl space-y-6">
            <div className="rounded-lg bg-white p-6">
              <h3 className="mb-3 text-xl font-bold text-primary">
                Qual é o pré-requisito para participar?
              </h3>
              <p className="text-gray-700">
                Seu espaço para descrever os pré-requisitos: nível de inglês
                mínimo, experiência como professor, etc.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6">
              <h3 className="mb-3 text-xl font-bold text-primary">
                Como funciona o acesso aos materiais?
              </h3>
              <p className="text-gray-700">
                Seu espaço para explicar como os participantes acessam os
                materiais, plataforma utilizada, suporte técnico, etc.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6">
              <h3 className="mb-3 text-xl font-bold text-primary">
                Posso usar os materiais com meus alunos?
              </h3>
              <p className="text-gray-700">
                Seu espaço para esclarecer sobre direitos de uso dos materiais,
                licenças e como os professores podem aplicar o aprendizado.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6">
              <h3 className="mb-3 text-xl font-bold text-primary">
                Há suporte após o término do programa?
              </h3>
              <p className="text-gray-700">
                Seu espaço para descrever o suporte contínuo, comunidade de
                ex-alunos, atualizações, mentoria, etc.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ForTeachersPage
