import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  MapPin,
  Users,
  Zap,
  Waves,
  Award,
} from "lucide-react";

/**
 * Point Break - Imersão Executiva de Business English em Ubatuba
 *
 * Design Philosophy: Luxo Contemporâneo com Narrativa Visual
 * - Evento premium com experiência única
 * - Foco em transformação através de imersão
 * - Paleta: Roxo profundo (#45023E), Amarelo vibrante (#FFD400), Azul-acinzentado (#6A8D92)
 */

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/executive-leadership-moment-iUrFydhg58GmDVKfudA3XW.webp";
const BEACH_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/international-team-collaboration-NPMtAZsShLERHkytVoBD6p.webp";
const GROWTH_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/growth-trajectory-abstract-aUVBF5qhbi7UbQCEVrvByJ.webp";

export default function PointBreak() {
  const handleInscription = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdINqlffgtOgjZ-NuhYYCpUmBMAlfGmYJ8KBZDwMDk0HTeogg/viewform?usp=header",
      "_blank"
    );
  };

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
            <Button
              onClick={handleInscription}
              className="bg-yellow-400 text-purple-900 hover:bg-yellow-500"
            >
              Inscrever-se
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
        <img
          src={HERO_IMAGE}
          alt="Evento Point Break em Ubatuba"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 container flex flex-col items-center justify-center text-center h-full text-white">
          <div className="max-w-3xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Waves className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">
                Evento Exclusivo
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Seu Inglês Não Será
              <br />
              <span className="text-yellow-400">Mais o Mesmo</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Uma imersão executiva de Business English na beira do mar. Surf de
              manhã. Estratégia à tarde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleInscription}
                size="lg"
                className="bg-yellow-400 text-purple-900 hover:bg-yellow-500 text-lg font-bold px-8 py-6"
              >
                Inscrever-se Agora <ArrowRight className="ml-2" />
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

      {/* Concept Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              O Conceito Point Break
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Não há aulas de gramática. Não há lições de inglês. Não há teoria
              sem aplicação.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Waves className="w-6 h-6 text-purple-900" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Surf de Manhã</h3>
              <p className="text-gray-200">
                Aulas de surf conduzidas em inglês, transformando o oceano em
                laboratório de fluência
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-purple-900" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Estratégia à Tarde</h3>
              <p className="text-gray-200">
                Sessões intensivas de comunicação estratégica e liderança em
                contextos corporativos
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-purple-900" />
              </div>
              <h3 className="text-2xl font-bold mb-3">100% Imersivo</h3>
              <p className="text-gray-200">
                Ambiente acelerador de desbloqueiro e naturalidade com
                networking qualificado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Achieve Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-12 text-center">
            O Que Você Vai Conquistar
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-purple-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">
                  Clareza Estruturada
                </h3>
                <p className="text-gray-700">
                  Comunique suas ideias com precisão e impacto em contextos
                  estratégicos
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-purple-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">
                  Segurança em Reuniões
                </h3>
                <p className="text-gray-700">
                  Se posicione com confiança em negociações e contextos de
                  pressão
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-purple-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">
                  Vocabulário Estratégico
                </h3>
                <p className="text-gray-700">
                  Domine termos e expressões para contextos corporativos
                  internacionais
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-purple-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">
                  Naturalidade
                </h3>
                <p className="text-gray-700">
                  Fale com confiança e presença, deixando a insegurança para
                  trás
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-purple-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">
                  Agilidade Mental
                </h3>
                <p className="text-gray-700">
                  Responda com rapidez e precisão em situações desafiadoras
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-purple-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">
                  Networking Premium
                </h3>
                <p className="text-gray-700">
                  Conecte-se com outros líderes de alta performance e evolução
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-12 text-center">
            Este Programa é Para Você?
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-purple-900 font-bold text-sm">✓</span>
              </div>
              <div>
                <p className="text-lg text-gray-700">
                  <span className="font-bold">
                    Você já possui nível intermediário ou avançado de inglês
                  </span>{" "}
                  e quer evoluir para um patamar estratégico
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-purple-900 font-bold text-sm">✓</span>
              </div>
              <div>
                <p className="text-lg text-gray-700">
                  <span className="font-bold">
                    Utiliza inglês no seu ambiente profissional
                  </span>{" "}
                  e sente que pode melhorar sua comunicação
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-purple-900 font-bold text-sm">✓</span>
              </div>
              <div>
                <p className="text-lg text-gray-700">
                  <span className="font-bold">Ocupa posição de liderança</span>{" "}
                  (gerência, diretoria, executivo ou C-level)
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-purple-900 font-bold text-sm">✓</span>
              </div>
              <div>
                <p className="text-lg text-gray-700">
                  <span className="font-bold">Está disposto a se desafiar</span>{" "}
                  e evoluir sua comunicação em um ambiente imersivo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-12 text-center">
            Detalhes do Evento
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-purple-50 to-yellow-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-purple-900" />
              </div>
              <h3 className="text-2xl font-bold text-purple-900 mb-3">Local</h3>
              <p className="text-gray-700 text-lg font-semibold">
                Ubatuba, São Paulo
              </p>
              <p className="text-gray-600 mt-2">Giprila Wellness Hotel</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-yellow-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Waves className="w-6 h-6 text-purple-900" />
              </div>
              <h3 className="text-2xl font-bold text-purple-900 mb-3">
                Quando
              </h3>
              <p className="text-gray-700 text-lg font-semibold">Em Outubro</p>
              <p className="text-gray-600 mt-2">3 dias de imersão total</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-yellow-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-900" />
              </div>
              <h3 className="text-2xl font-bold text-purple-900 mb-3">
                Capacidade
              </h3>
              <p className="text-gray-700 text-lg font-semibold">
                Limitado a 10 Participantes
              </p>
              <p className="text-gray-600 mt-2">
                Programa exclusivo e personalizado
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-yellow-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-purple-900" />
              </div>
              <h3 className="text-2xl font-bold text-purple-900 mb-3">
                O que Está Incluso
              </h3>
              <ul className="text-gray-700 space-y-1">
                <li>✓ Imersão em Business English</li>
                <li>✓ 2 Sessões de Surf</li>
                <li>✓ 2 Diárias no Hotel</li>
                <li>✓ Refeições e Coffee Break</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <img
          src={GROWTH_IMAGE}
          alt="Transformação profissional"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-purple-900/70"></div>

        <div className="relative z-10 container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para Esta Experiência?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Vagas limitadas a 10 participantes. Inscreva-se agora e garanta seu
            lugar nesta imersão transformadora.
          </p>
          <Button
            onClick={handleInscription}
            size="lg"
            className="bg-yellow-400 text-purple-900 hover:bg-yellow-500 text-lg font-bold px-10 py-6"
          >
            Inscrever-se Agora
          </Button>
          <p className="text-gray-200 mt-6 text-sm">
            Clientes Higher-up têm condição especial. Consulte conosco!
          </p>
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
              <h4 className="font-bold mb-4">Eventos</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a
                    href="/pointbreak"
                    className="hover:text-yellow-400 transition"
                  >
                    Point Break
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-yellow-400 transition">
                    Voltar
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
