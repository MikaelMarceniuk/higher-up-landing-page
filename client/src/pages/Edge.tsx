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
  Crown,
} from "lucide-react";

/**
 * Edge - Executive Development in Global English
 *
 * Design Philosophy: Luxo Contemporâneo com Narrativa Visual
 * - Foco em executivos e líderes
 * - Posicionamento premium e de alto valor
 * - Comunicação estratégica e autoridade
 * - Paleta: Roxo profundo (#45023E), Amarelo vibrante (#FFD400), Azul-acinzentado (#6A8D92)
 */

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/executive-leadership-moment-iUrFydhg58GmDVKfudA3XW.webp";
const LEADERSHIP_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/international-team-collaboration-NPMtAZsShLERHkytVoBD6p.webp";
const GROWTH_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/growth-trajectory-abstract-aUVBF5qhbi7UbQCEVrvByJ.webp";

export default function Edge() {
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
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
        <img
          src={HERO_IMAGE}
          alt="Líder executivo em contexto global"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 container flex flex-col items-center justify-center text-center h-full text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Sua Liderança
              <br />
              <span className="text-yellow-400">Em Inglês Global</span>
            </h1>
            <p className="text-2xl text-yellow-400 font-bold mb-6">
              EDGE (Executive Development in Global English)
            </p>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Comunicação estratégica para executivos que precisam de
              autoridade, clareza e persuasão em contextos internacionais
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-yellow-400 text-purple-900 hover:bg-yellow-500 text-lg font-bold px-8 py-6"
              >
                Agendar Diagnóstico Estratégico <ArrowRight className="ml-2" />
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
              Os Desafios do Líder Global
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-900 font-bold text-lg">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">
                    "Não tenho tempo a perder"
                  </h3>
                  <p className="text-gray-700 text-lg">
                    Você é ocupado. Precisa de resultados rápidos, não de aulas
                    genéricas que não agregam
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-900 font-bold text-lg">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">
                    "Eu não pareço um líder falando inglês"
                  </h3>
                  <p className="text-gray-700 text-lg">
                    Em português você é autoridade. Em inglês, sente que perde
                    presença e impacto
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-900 font-bold text-lg">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">
                    "Eu travo em situações de pressão"
                  </h3>
                  <p className="text-gray-700 text-lg">
                    Negociações críticas, board meetings, situações de pressão -
                    é quando você mais precisa estar seguro
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-900 font-bold text-lg">4</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">
                    "Preciso mostrar autoridade em inglês"
                  </h3>
                  <p className="text-gray-700 text-lg">
                    Sua comunicação em inglês precisa refletir seu nível de
                    liderança e experiência
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Structure Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-12 text-center">
            Estrutura do Programa
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-purple-50 to-yellow-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-purple-900" />
              </div>
              <h3 className="text-2xl font-bold text-purple-900 mb-3">
                2 Sessões Semanais Intensivas
              </h3>
              <p className="text-gray-700 text-lg font-semibold">
                6 Meses de Programa
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-yellow-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-900" />
              </div>
              <h3 className="text-2xl font-bold text-purple-900 mb-3">
                Resultados Mensuráveis
              </h3>
              <p className="text-gray-700 text-lg font-semibold">
                Report de Performance + Growth Roadmap
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-purple-900 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Os 4 Sprints do Edge</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 font-bold text-purple-900">
                  1
                </div>
                <div>
                  <p className="font-bold">Sprint 1: Clareza</p>
                  <p className="text-gray-200 text-sm">
                    Comunique suas ideias com precisão e impacto
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 font-bold text-purple-900">
                  2
                </div>
                <div>
                  <p className="font-bold">Sprint 2: Assertividade</p>
                  <p className="text-gray-200 text-sm">
                    Defenda suas posições com confiança e respeito
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 font-bold text-purple-900">
                  3
                </div>
                <div>
                  <p className="font-bold">Sprint 3: Persuasão</p>
                  <p className="text-gray-200 text-sm">
                    Influencie decisões e conquiste apoio para suas ideias
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 font-bold text-purple-900">
                  4
                </div>
                <div>
                  <p className="font-bold">Sprint 4: Autoridade</p>
                  <p className="text-gray-200 text-sm">
                    Lidere com presença, confiança e impacto global
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* During Session Section */}
      <section className="py-20 bg-gray-50">
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
                Simulamos situações reais da sua rotina de liderança: board
                meetings, negociações críticas, apresentações estratégicas
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-yellow-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-900" />
              </div>
              <h3 className="text-2xl font-bold text-purple-900 mb-3">
                Refinamento Premium
              </h3>
              <p className="text-gray-700">
                Pronúncia, naturalidade, presença. Você aprende a se comunicar
                com a autoridade que merece
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-yellow-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-900" />
              </div>
              <h3 className="text-2xl font-bold text-purple-900 mb-3">
                Comunicação Sob Pressão
              </h3>
              <p className="text-gray-700">
                Prática intensiva em situações de pressão. Você aprende a manter
                clareza e autoridade mesmo em momentos críticos
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-yellow-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-purple-900" />
              </div>
              <h3 className="text-2xl font-bold text-purple-900 mb-3">
                Feedback em Tempo Real
              </h3>
              <p className="text-gray-700">
                Feedback imediato e construtivo. Você sabe exatamente o que
                melhorar e como aplicar no trabalho
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Edge Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-12 text-center">
            Por Que Edge?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-purple-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">
                  Focado em Líderes
                </h3>
                <p className="text-gray-700">
                  Desenhado especificamente para executivos, C-level, diretores
                  e founders
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-purple-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">
                  Intensivo e Rápido
                </h3>
                <p className="text-gray-700">
                  2 sessões semanais. Você vê transformação real em 6 meses
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-purple-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">
                  Estratégico
                </h3>
                <p className="text-gray-700">
                  Não é apenas inglês - é comunicação estratégica para liderança
                  global
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-purple-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">
                  Resultados Comprovados
                </h3>
                <p className="text-gray-700">
                  Executivos que transformaram sua presença e impacto em inglês
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
          alt="Crescimento executivo"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-purple-900/70"></div>

        <div className="relative z-10 container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para o Próximo Nível?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            O EDGE é um programa para líderes a partir do nível avançado de
            inglês. Para saber se você consegue acompanhar o conteúdo, agende um
            diagnóstico estratégico.
          </p>
          <Button
            size="lg"
            className="bg-yellow-400 text-purple-900 hover:bg-yellow-500 text-lg font-bold px-10 py-6"
          >
            Agendar Diagnóstico Estratégico
          </Button>
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
