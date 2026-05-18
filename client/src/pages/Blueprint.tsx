import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Clock,
  Target,
  Users,
  Zap,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

/**
 * Blueprint - Página Dedicada
 *
 * Design Philosophy: Luxo Contemporâneo com Narrativa Visual
 * - Foco em conversão: fazer o visitante entrar em contato
 * - Sem exibir valores (estratégia de contato)
 * - Narrativa: "Você sabe inglês, mas trava na hora que importa"
 * - Solução: Programa individual, prático, com resultados
 */

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/blueprint-interview-presentation-WFm9FMPoC6ET9HzoiKpmW7.webp";
const NETWORKING_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/blueprint-networking-moment-SQH7XsFxiPezbpZw6FTAU9.webp";
const GROWTH_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/growth-trajectory-abstract-aUVBF5qhbi7UbQCEVrvByJ.webp";

interface Journey {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const JOURNEYS: Journey[] = [
  {
    id: "interviews",
    name: "Preparação para Entrevistas",
    icon: <Target className="w-5 h-5" />,
  },
  {
    id: "meetings",
    name: "Participar de Reuniões",
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: "presentations",
    name: "Apresentações Internas",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: "events",
    name: "Apresentação em Eventos",
    icon: <TrendingUp className="w-5 h-5" />,
  },
  { id: "networking", name: "Networking", icon: <Users className="w-5 h-5" /> },
  {
    id: "conduct",
    name: "Conduzir Reuniões",
    icon: <Check className="w-5 h-5" />,
  },
  {
    id: "negotiations",
    name: "Negociações",
    icon: <Target className="w-5 h-5" />,
  },
  {
    id: "pressure",
    name: "Situações de Pressão",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: "social",
    name: "Situações Sociais",
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: "daily",
    name: "Trabalho do Dia-a-Dia",
    icon: <Clock className="w-5 h-5" />,
  },
  {
    id: "visits",
    name: "Visitas Técnicas",
    icon: <Target className="w-5 h-5" />,
  },
  {
    id: "trends",
    name: "Discutindo Trending Topics",
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    id: "writing",
    name: "Comunicação Escrita",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    id: "colleagues",
    name: "Interação com Colegas",
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: "travel",
    name: "Viagem a Trabalho",
    icon: <Clock className="w-5 h-5" />,
  },
];

const PROGRAM_OPTIONS = [
  {
    id: "1journey",
    title: "1 Journey",
    duration: "2 meses",
    sessions: "8 sessões",
    frequency: "1x por semana",
    includes: [
      "8 sessões de 60 minutos",
      "Programa individual",
      "Report final de performance",
      "1 sessão de reposição",
      "Weekly actions entre sessões",
    ],
  },
  {
    id: "2journeys",
    title: "2 Journeys",
    duration: "4 meses",
    sessions: "16 sessões",
    frequency: "1x por semana",
    includes: [
      "16 sessões de 60 minutos",
      "Programa individual",
      "Report final de performance",
      "2 sessões de reposição",
      "E-book: Desenvolvendo Competência Intercultural",
      "Weekly actions entre sessões",
    ],
  },
  {
    id: "3journeys",
    title: "3 Journeys",
    duration: "6 meses",
    sessions: "24 sessões",
    frequency: "1x por semana",
    includes: [
      "24 sessões de 60 minutos",
      "Programa individual",
      "Report final de performance",
      "4 sessões de reposição",
      "E-book: Desenvolvendo Competência Intercultural",
      "Participação em 2 sessões do WorkLab",
      "Weekly actions entre sessões",
    ],
    featured: true,
  },
];

export default function Blueprint() {
  const [expandedJourney, setExpandedJourney] = useState<string | null>(null);

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
              href="/#produtos"
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
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
        <img
          src={HERO_IMAGE}
          alt="Profissional apresentando com confiança"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 container flex flex-col items-center justify-center text-center h-full text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Você Sabe Inglês,
              <br />
              <span className="text-yellow-400">
                Mas Trava na Hora que Importa
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Blueprint é o programa para profissionais que querem resolver
              dores pontuais de inglês e impactar sua carreira
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-yellow-400 text-purple-900 hover:bg-yellow-500 text-lg font-bold px-8 py-6"
              >
                Agendar Conversa <ArrowRight className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg font-bold px-8 py-6"
              >
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-8 text-center">
              Você Não Está Sozinho
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-900 font-bold text-lg">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">
                    "Eu sei inglês, mas travo na hora que importa"
                  </h3>
                  <p className="text-gray-700 text-lg">
                    Você tem conhecimento, mas falta confiança e naturalidade em
                    situações críticas: entrevistas, negociações, apresentações
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-900 font-bold text-lg">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">
                    Cursos genéricos não resolvem seu problema
                  </h3>
                  <p className="text-gray-700 text-lg">
                    Você precisa de algo focado, prático, que trabalhe suas
                    dores específicas - não mais um curso genérico
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-900 font-bold text-lg">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">
                    Você não tem tempo a perder
                  </h3>
                  <p className="text-gray-700 text-lg">
                    Precisa de resultados rápidos. Uma promoção, um novo
                    emprego, ou impacto real nos seus negócios - agora
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative py-20 overflow-hidden">
        <img
          src={NETWORKING_IMAGE}
          alt="Profissionais em networking"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 container">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              A Solução: Blueprint
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-purple-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Programa Individual
                  </h3>
                  <p className="text-gray-200">
                    Focado 100% na sua área, função e dores específicas. Não
                    existe Blueprint genérico.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-purple-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Sessões Práticas de 60 Minutos
                  </h3>
                  <p className="text-gray-200">
                    Simulações de situações reais, feedback em tempo real,
                    refinamento de pronúncia e naturalidade.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-purple-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Weekly Actions
                  </h3>
                  <p className="text-gray-200">
                    Ações entre sessões para acelerar progresso. Você não estuda
                    sozinho - tem suporte contínuo.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-purple-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Resultados Mensuráveis
                  </h3>
                  <p className="text-gray-200">
                    Report final de performance. Você sabe exatamente o que
                    evoluiu e como aplicar no trabalho.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journeys Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
              16 Journeys para Escolher
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada Journey é um tópico de foco. Você escolhe qual (ou quais)
              trabalhar com a gente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {JOURNEYS.map(journey => (
              <div
                key={journey.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 border-yellow-400"
                onClick={() =>
                  setExpandedJourney(
                    expandedJourney === journey.id ? null : journey.id
                  )
                }
              >
                <div className="flex items-start gap-3">
                  <div className="text-yellow-500 mt-1">{journey.icon}</div>
                  <p className="font-semibold text-purple-900 text-sm">
                    {journey.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg">
              Exemplos: Preparação para entrevistas, Negociações, Apresentações,
              Networking, Reuniões, Comunicação escrita, e muito mais.
            </p>
          </div>
        </div>
      </section>

      {/* During Session Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-12 text-center">
            Durante a Sessão
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-yellow-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-purple-900" />
              </div>
              <h3 className="text-2xl font-bold text-purple-900 mb-3">
                Simulações Reais
              </h3>
              <p className="text-gray-700">
                Simulamos situações reais da sua rotina profissional. Você
                pratica em contexto, não em vácuo.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-yellow-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-900" />
              </div>
              <h3 className="text-2xl font-bold text-purple-900 mb-3">
                Refinamento
              </h3>
              <p className="text-gray-700">
                Pronúncia, naturalidade, presença. Você aprende a se comunicar
                com confiança e autenticidade.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-yellow-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-900" />
              </div>
              <h3 className="text-2xl font-bold text-purple-900 mb-3">
                Adaptação
              </h3>
              <p className="text-gray-700">
                Você aprende a adaptar sua comunicação para diferentes
                interlocutores e contextos corporativos.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-yellow-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-purple-900" />
              </div>
              <h3 className="text-2xl font-bold text-purple-900 mb-3">
                Vocabulário
              </h3>
              <p className="text-gray-700">
                Expansão de vocabulário específico da sua área e função. Você
                fala a linguagem do seu mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Options Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-12 text-center">
            Escolha Seu Caminho
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {PROGRAM_OPTIONS.map(option => (
              <div
                key={option.id}
                className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
                  option.featured
                    ? "ring-2 ring-yellow-400 transform scale-105"
                    : ""
                }`}
              >
                {option.featured && (
                  <div className="bg-yellow-400 text-purple-900 py-2 text-center font-bold">
                    MAIS POPULAR
                  </div>
                )}

                <div className="bg-white p-8">
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-yellow-500 font-semibold mb-6">
                    {option.duration}
                  </p>

                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <p className="text-gray-600 text-sm mb-2">
                      <span className="font-semibold text-purple-900">
                        {option.sessions}
                      </span>{" "}
                      • {option.frequency}
                    </p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {option.includes.map((item, idx) => (
                      <div key={idx} className="flex gap-3 text-sm">
                        <Check className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full ${
                      option.featured
                        ? "bg-yellow-400 text-purple-900 hover:bg-yellow-500"
                        : "bg-purple-900 text-white hover:bg-purple-800"
                    } font-bold`}
                  >
                    Saber Mais
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg">
              Todos os programas incluem{" "}
              <span className="font-bold text-purple-900">
                report final de performance
              </span>{" "}
              e{" "}
              <span className="font-bold text-purple-900">weekly actions</span>{" "}
              entre sessões.
            </p>
          </div>
        </div>
      </section>

      {/* Why Blueprint Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-12 text-center">
            Por Que Blueprint?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-purple-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">
                  Focado em Você
                </h3>
                <p className="text-gray-700">
                  Não é um programa genérico. É desenhado para sua área, função
                  e dores específicas.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-purple-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">
                  Prático e Rápido
                </h3>
                <p className="text-gray-700">
                  Sessões de 60 minutos, 1x por semana. Você vê progresso rápido
                  com impacto real.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-purple-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">
                  Suporte Contínuo
                </h3>
                <p className="text-gray-700">
                  Weekly actions entre sessões. Você não estuda sozinho - tem
                  orientação contínua.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-purple-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">
                  Resultados Mensuráveis
                </h3>
                <p className="text-gray-700">
                  Report final de performance. Você sabe exatamente o que
                  evoluiu e como aplicar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <img
          src={GROWTH_IMAGE}
          alt="Crescimento profissional"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-purple-900/70"></div>

        <div className="relative z-10 container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para Resolver Suas Dores?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Agende uma conversa gratuita com nosso time. Vamos entender suas
            dores específicas e desenhar o Blueprint perfeito para você.
          </p>
          <Button
            size="lg"
            className="bg-yellow-400 text-purple-900 hover:bg-yellow-500 text-lg font-bold px-10 py-6"
          >
            Agendar Conversa Gratuita
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-12 text-center">
            Dúvidas Frequentes
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-purple-900 mb-3">
                Qual é a diferença entre Blueprint e Edge?
              </h3>
              <p className="text-gray-700">
                <span className="font-semibold">Blueprint</span> é para
                profissionais que querem resolver dores pontuais de inglês no
                trabalho. <span className="font-semibold">Edge</span> é para
                líderes que querem desenvolver comunicação assertiva e
                influência. Blueprint é mais focado e prático; Edge é mais
                estratégico e de longo prazo.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-purple-900 mb-3">
                Posso escolher mais de um Journey?
              </h3>
              <p className="text-gray-700">
                Sim! Você pode escolher 1, 2 ou 3 Journeys. Quanto mais
                Journeys, mais tempo você tem para aprofundar e mais benefícios
                você recebe (e-book, participação no WorkLab, etc).
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-purple-900 mb-3">
                Como funciona o Weekly Actions?
              </h3>
              <p className="text-gray-700">
                Entre as sessões, você recebe ações práticas para fazer durante
                a semana. Pode ser um vídeo para assistir, um exercício para
                gravar, ou uma tarefa para fazer no trabalho. Tudo desenhado
                para acelerar seu progresso.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-purple-900 mb-3">
                Qual é o meu nível de inglês ideal para Blueprint?
              </h3>
              <p className="text-gray-700">
                Blueprint é para profissionais com nível B1 a C1. Você já tem
                base de inglês, mas quer melhorar sua comunicação em contextos
                específicos de trabalho.
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
                    href="/#produtos"
                    className="hover:text-yellow-400 transition"
                  >
                    Voltar para Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Edge
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Signature
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Blog
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
