import { CTAButton } from '@/components/cta-button'
import { CheckCircle, Zap } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WorkLab — Treinamento de Inglês In-Company',
  description:
    'O WorkLab leva treinamento de inglês corporativo direto para dentro da sua empresa, com trilhas customizadas por área e nível.',
  openGraph: {
    url: '/our-solutions/for-professionals/worklab',
    images: [{ url: '/og/og-worklab.png', width: 1200, height: 630 }],
  },
}

const PROBLEMS = [
  'Você consegue entender, mas trava na hora de falar',
  'Quer participar de discussões mas sente falta de vocabulário',
  'Precisa de prática real com profissionais de verdade',
  'Quer ganhar confiança e segurança ao se posicionar',
  'Busca falar sobre tendências globais em inglês',
]

const TOPICS = [
  'Trabalho do dia-a-dia',
  'Participar de reuniões',
  'Apresentações internas',
  'Networking',
  'Conduzir reuniões',
  'Apresentação em eventos',
  'Negociações',
  'Situações de pressão',
  'Situações sociais',
  'Interação com colegas',
  'Trending topics',
  'E muito mais!',
]

const CHARACTERISTICS = [
  { label: 'Quando', value: 'Sessões semanais ao vivo de 90min' },
  { label: 'Nível', value: 'Intermediário e acima' },
  { label: 'Formato', value: 'Em grupo' },
  { label: 'Duração', value: '6 meses' },
]

const DIFFERENTIALS = [
  'Prática guiada em discussões sobre negócios',
  'Simulações de situações reais de trabalho',
  'Networking com profissionais de diferentes áreas',
  'Sem homework, sem provas, sem pressão',
]

const FAQ_ITEMS = [
  {
    question: 'É uma aula de conversação?',
    answer:
      "Não é conversa solta para 'praticar inglês'. É prática guiada para você aprender a acompanhar, reagir e opinar em discussões sobre assuntos que estão ocorrendo no mundo e o impacto destes em sua empresa/trabalho/segmento.",
  },
  {
    question: 'Tem lição de casa?',
    answer:
      'A Higher-up não é uma escola de inglês. Não tem homework nem provas. E não há necessidade de se preparar para as sessões deste grupo, é só vir disposto/a a falar (e muito!)',
  },
  {
    question: 'São muitas pessoas, vou conseguir falar?',
    answer:
      'Sim! Faremos várias dinâmicas diferentes, em grupos menores e em duplas. Você vai interagir com pessoas de diferentes áreas e trabalhos.',
  },
  {
    question: 'E se o nível das pessoas for maior do que o meu?',
    answer:
      'O nível dos participantes pode ser diferente, mas todas/os conseguirão participar e contribuir. Além disso, você com certeza sairá das sessões com muito mais confiança em sua fala.',
  },
]

const WorklabPage = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section
        className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-24 pb-16"
        style={{
          backgroundImage: 'url(/worklab-group-discussion.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 container">
          <div className="mx-auto max-w-3xl text-white">
            <p className="mb-4 text-sm font-bold tracking-widest text-secondary">
              WORKLAB
            </p>
            <h1 className="font-worklab mb-6 text-5xl leading-tight font-bold italic md:text-6xl">
              Grupo de Prática em Inglês para Profissionais
            </h1>
            <p className="mb-8 text-lg font-light text-muted md:text-xl">
              Já consegue usar inglês no trabalho, mas quer ir além do
              intermediário? Ganhe confiança e segurança ao se posicionar em
              discussões reais sobre negócios e tendências globais.
            </p>
            <CTAButton />
          </div>
        </div>
      </section>

      {/* Problemas Section */}
      <section className="bg-muted-foreground py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <p className="mb-4 text-center text-sm font-bold tracking-widest text-secondary">
              OS DESAFIOS
            </p>
            <h2 className="mb-12 text-center text-4xl font-bold text-primary">
              Você se identifica com algum desses?
            </h2>

            <div className="grid gap-4">
              {PROBLEMS.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-lg border-l-4 border-secondary bg-white p-6"
                >
                  <Zap className="mt-0.5 h-6 w-6 shrink-0 text-secondary" />
                  <p className="text-lg text-primary">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solução Section */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <p className="mb-4 text-sm font-bold tracking-widest text-secondary">
              A SOLUÇÃO
            </p>
            <h2 className="mb-6 text-4xl font-bold text-primary">
              WorkLab: Prática Real com Profissionais
            </h2>
            <p className="text-xl text-muted-foreground">
              Um espaço seguro e desafiador para você praticar inglês com
              profissionais de verdade, discutindo assuntos que importam para
              sua carreira.
            </p>
          </div>

          <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
            {DIFFERENTIALS.map((diff, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-secondary" />
                <p className="text-lg text-primary">{diff}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Características Section */}
      <section className="bg-primary py-20">
        <div className="container">
          <p className="mb-4 text-center text-sm font-bold tracking-widest text-secondary">
            ESTRUTURA
          </p>
          <h2 className="mb-12 text-center text-4xl font-bold text-white">
            A Estrutura do Programa
          </h2>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-4">
            {CHARACTERISTICS.map((char, index) => (
              <div
                key={index}
                className="rounded-lg border border-white/20 bg-white/10 p-6 text-center backdrop-blur-sm"
              >
                <p className="mb-3 text-sm font-bold tracking-widest text-white">
                  {char.label}
                </p>
                <p className="text-lg font-bold text-secondary">{char.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tópicos Section */}
      <section className="bg-white py-20">
        <div className="container">
          <p className="mb-4 text-center text-sm font-bold tracking-widest text-secondary">
            TÓPICOS DE FOCO
          </p>
          <h2 className="mb-12 text-center text-4xl font-bold text-primary">
            O que você vai praticar
          </h2>

          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
            {TOPICS.map((topic, index) => (
              <div
                key={index}
                className="rounded-lg border-2 border-secondary bg-secondary/10 p-4 text-center"
              >
                <p className="font-medium text-primary">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted-foreground py-20">
        <div className="container">
          <p className="mb-4 text-center text-sm font-bold tracking-widest text-secondary">
            DÚVIDAS FREQUENTES
          </p>
          <h2 className="mb-12 text-center text-4xl font-bold text-primary">
            Perguntas Comuns
          </h2>

          <div className="mx-auto max-w-3xl space-y-6">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border-l-4 border-secondary bg-white p-8"
              >
                <h3 className="mb-3 text-xl font-bold text-primary">
                  {item.question}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 text-white">
        <div className="absolute inset-0 bg-primary"></div>
        <div className="relative z-10">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                Pronto para Ganhar Confiança em Inglês?
              </h2>
              <p className="mb-8 text-xl text-gray-100">
                Agende uma conversa com nosso time. Vamos entender seu nível e
                seus objetivos para indicar a melhor opção para você.
              </p>
              <CTAButton />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WorklabPage
