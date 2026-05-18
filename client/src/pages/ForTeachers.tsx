import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Users,
  TrendingUp,
  Award,
  Zap,
  Globe,
  CheckCircle,
} from "lucide-react";

/**
 * Para Professores - Training Program for English Teachers
 *
 * Design Philosophy: Luxo Contemporâneo com Narrativa Visual
 * - Foco em treinamento e capacitação de professores de inglês
 * - Apresentação de programa de formação BELF
 * - Paleta: Roxo profundo (#45023E), Amarelo vibrante (#FFD400), Azul-acinzentado (#6A8D92)
 */

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/blueprint-networking-moment.png";

const MODULES = [
  {
    id: 1,
    title: "Módulo 1: Fundamentos BELF",
    description:
      "Entenda a filosofia Business English as Lingua Franca e como aplicar em suas aulas.",
    topics: [
      "Conceitos BELF",
      "Comunicação estratégica",
      "Contextos corporativos",
      "Prática imediata",
    ],
  },
  {
    id: 2,
    title: "Módulo 2: Metodologia de Ensino",
    description:
      "Técnicas e estratégias para ensinar inglês corporativo com foco em resultados.",
    topics: [
      "Planejamento de aulas",
      "Dinâmicas interativas",
      "Feedback efetivo",
      "Avaliação de progresso",
    ],
  },
  {
    id: 3,
    title: "Módulo 3: Comunicação Estratégica",
    description:
      "Desenvolva habilidades para ensinar comunicação em situações de pressão.",
    topics: [
      "Apresentações",
      "Negociações",
      "Liderança em inglês",
      "Gestão de conflitos",
    ],
  },
  {
    id: 4,
    title: "Módulo 4: Prática e Certificação",
    description: "Sessões práticas, estudos de caso e certificação final.",
    topics: [
      "Simulações reais",
      "Análise de casos",
      "Mentoria prática",
      "Certificado BELF",
    ],
  },
];

const BENEFITS = [
  {
    id: 1,
    icon: BookOpen,
    title: "Metodologia Comprovada",
    description:
      "Aprenda uma metodologia testada com centenas de profissionais, com resultados mensuráveis.",
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "Aumente Sua Demanda",
    description:
      "Ofereça um diferencial no mercado e atraia profissionais que buscam transformação real.",
  },
  {
    id: 3,
    icon: Award,
    title: "Certificação Reconhecida",
    description:
      "Receba certificação em Treinamento BELF reconhecida no mercado de educação corporativa.",
  },
  {
    id: 4,
    icon: Users,
    title: "Comunidade de Educadores",
    description:
      "Conecte-se com outros professores e compartilhe experiências e melhores práticas.",
  },
  {
    id: 5,
    icon: Zap,
    title: "Recursos Exclusivos",
    description:
      "Acesso a materiais, templates, planos de aula e ferramentas prontas para usar.",
  },
  {
    id: 6,
    icon: Globe,
    title: "Impacto Global",
    description:
      "Prepare seus alunos para comunicação efetiva em contextos internacionais.",
  },
];

export default function ForTeachers() {
  return (
    <div className="w-full bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container flex items-center justify-between py-4">
          <a href="/" className="text-2xl font-bold text-purple-900">
            Higher Up
          </a>
          <div className="hidden md:flex gap-8 items-center">
            <a
              href="/"
              className="text-gray-700 hover:text-purple-900 transition"
            >
              Voltar
            </a>
            <Button className="bg-yellow-400 text-purple-900 hover:bg-yellow-500">
              Contato
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-96 flex items-center justify-center overflow-hidden pt-20">
        <img
          src={HERO_IMAGE}
          alt="Para Professores"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 container flex flex-col items-center justify-center text-center h-full text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Para Professores de Inglês
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Capacitação em Inglês Corporativo e Metodologia BELF para
              Educadores
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
              Transforme Sua Prática Docente
            </h2>
            <p className="text-xl text-gray-700 mb-8">
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
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-12 text-center">
            Estrutura do Programa
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {MODULES.map(module => (
              <div
                key={module.id}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 font-bold text-purple-900">
                    {module.id}
                  </div>
                  <h3 className="text-xl font-bold text-purple-900">
                    {module.title}
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">{module.description}</p>
                <ul className="space-y-2">
                  {module.topics.map((topic, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 items-start text-gray-700"
                    >
                      <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-12 text-center">
            Por Que Fazer Este Treinamento?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {BENEFITS.map(benefit => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.id} className="bg-gray-50 p-8 rounded-lg">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-purple-900" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            O Que Você Aprenderá
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                  Conhecimento Técnico
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-yellow-400">✓</span>
                    <span>Fundamentos de BELF e comunicação estratégica</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400">✓</span>
                    <span>Análise de necessidades corporativas</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400">✓</span>
                    <span>Planejamento e estruturação de cursos</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400">✓</span>
                    <span>Avaliação de progresso e resultados</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                  Habilidades Práticas
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-yellow-400">✓</span>
                    <span>Técnicas de ensino interativas</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400">✓</span>
                    <span>Simulações de situações reais</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400">✓</span>
                    <span>Feedback efetivo e coaching</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400">✓</span>
                    <span>Uso de ferramentas e plataformas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-12 text-center">
            Detalhes do Programa
          </h2>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">
                Duração
              </h3>
              <p className="text-gray-700 text-lg">
                Seu espaço para adicionar a duração total do programa, carga
                horária, formato (online/presencial) e cronograma.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">
                Formato
              </h3>
              <p className="text-gray-700 text-lg">
                Seu espaço para descrever o formato do treinamento: aulas ao
                vivo, gravadas, materiais de estudo, sessões práticas, etc.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">
                Certificação
              </h3>
              <p className="text-gray-700 text-lg">
                Seu espaço para descrever a certificação oferecida,
                reconhecimento no mercado e como será emitida.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">
                Suporte
              </h3>
              <p className="text-gray-700 text-lg">
                Seu espaço para descrever o suporte oferecido: mentoria,
                comunidade, acesso a recursos, atualizações, etc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
              Pronto para Transformar Sua Prática?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Junte-se a educadores que estão impactando profissionais com uma
              metodologia comprovada e reconhecida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-yellow-400 text-purple-900 hover:bg-yellow-500 text-lg font-bold px-8 py-6"
              >
                Conhecer o Programa <ArrowRight className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-900 text-purple-900 hover:bg-purple-50 text-lg font-bold px-8 py-6"
              >
                Agendar Conversa
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-12 text-center">
            Perguntas Frequentes
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-900 mb-3">
                Qual é o pré-requisito para participar?
              </h3>
              <p className="text-gray-700">
                Seu espaço para descrever os pré-requisitos: nível de inglês
                mínimo, experiência como professor, etc.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-900 mb-3">
                Como funciona o acesso aos materiais?
              </h3>
              <p className="text-gray-700">
                Seu espaço para explicar como os participantes acessam os
                materiais, plataforma utilizada, suporte técnico, etc.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-900 mb-3">
                Posso usar os materiais com meus alunos?
              </h3>
              <p className="text-gray-700">
                Seu espaço para esclarecer sobre direitos de uso dos materiais,
                licenças e como os professores podem aplicar o aprendizado.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-900 mb-3">
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

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Higher Up</h4>
              <p className="text-gray-300">
                Mentoria de aceleração em inglês corporativo
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Programas</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a
                    href="/blueprint"
                    className="hover:text-yellow-400 transition"
                  >
                    Blueprint
                  </a>
                </li>
                <li>
                  <a href="/edge" className="hover:text-yellow-400 transition">
                    Edge
                  </a>
                </li>
                <li>
                  <a
                    href="/pointbreak"
                    className="hover:text-yellow-400 transition"
                  >
                    Point Break
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="/about" className="hover:text-yellow-400 transition">
                    Quem Somos
                  </a>
                </li>
                <li>
                  <a
                    href="/feedback"
                    className="hover:text-yellow-400 transition"
                  >
                    Feedback
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <p className="text-gray-300 mb-2">contato@higher-up.com.br</p>
              <p className="text-gray-300">+55 (16) 99221-8981</p>
            </div>
          </div>

          <div className="border-t border-purple-800 pt-8 text-center text-gray-400">
            <p>
              &copy; 2026 Higher Up Business English. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
