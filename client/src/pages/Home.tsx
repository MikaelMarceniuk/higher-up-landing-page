import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react";

/**
 * Higher Up Business English - Landing Page
 *
 * Design Philosophy: Luxo Contemporâneo com Narrativa Visual
 * Layout redesenhado conforme especificação do usuário
 * - Hero com 3 CTAs
 * - BELF section em roxo
 * - 2 soluções (empresas/profissionais)
 * - Diferenciais
 * - Testimoniais
 * - CTA final
 */

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/hero-professional-meeting-itDCe8cKroQDExV3KUGALB.webp";
const COMPANY_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/international-team-collaboration-NPMtAZsShLERHkytVoBD6p.webp";
const PROFESSIONAL_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/executive-leadership-moment-iUrFydhg58GmDVKfudA3XW.webp";
const CTA_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/growth-trajectory-abstract-aUVBF5qhbi7UbQCEVrvByJ.webp";

export default function Home() {
  return (
    <div className="w-full bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-purple-900">Higher Up</div>
          <div className="hidden md:flex gap-8 items-center">
            <a
              href="#"
              className="text-gray-700 hover:text-purple-900 transition text-sm font-medium"
            >
              OSEM IDIOMAS
            </a>
            <a
              href="#solucoes"
              className="text-gray-700 hover:text-purple-900 transition text-sm font-medium"
            >
              SOLUÇÕES DE COMUNICAÇÃO
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-purple-900 transition text-sm font-medium"
            >
              EVENTOS
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-purple-900 transition text-sm font-medium"
            >
              BLOG
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
        <img
          src={HERO_IMAGE}
          alt="Profissional em contexto premium"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35"></div>

        <div className="relative z-10 container flex flex-col items-center justify-center text-center h-full text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Seu Inglês
              <br />
              <span className="text-yellow-400">em Ascensão</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Mentoria de aceleração em comunicação corporativa para
              profissionais que querem impacto real nos negócios
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <Button
                size="lg"
                className="bg-yellow-400 text-purple-900 hover:bg-yellow-500 text-lg font-bold px-8 py-6"
              >
                Descobrir Programas <ArrowRight className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg font-bold px-8 py-6"
              >
                Agendar Conversa
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg font-bold px-8 py-6"
              >
                Diagnóstico estratégico
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* BELF Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              BELF: ENGLISH AS BUSINESS
              <br />
              LINGUA FRANCA
            </h2>
            <p className="text-xl text-gray-200">
              Única empresa do Brasil com pedagogia BELF!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-purple-900 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">CONFIANÇA</h3>
              <p className="text-gray-200">
                Seu inglês não precisa ser perfeito e nem "nativo"; precisa ser
                efetivo.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-purple-900 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">PRATICIDADE</h3>
              <p className="text-gray-200">
                Foco em situações reais, negociações, apresentações, etc.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-purple-900 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">MENSURÁVEL</h3>
              <p className="text-gray-200">
                Resultados claros: negócios fechados, promoções conquistadas,
                influência expandida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solucoes" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
              SOLUÇÕES DE COMUNICAÇÃO
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Para Empresas */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <img
                src={COMPANY_IMAGE}
                alt="Solução para empresas"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mb-4">
                  <span className="text-purple-900 font-bold text-lg">🏢</span>
                </div>
                <h3 className="text-2xl font-bold text-purple-900 mb-3">
                  Para empresas
                </h3>
                <p className="text-gray-700 mb-6">
                  Eleve a comunicação de sua equipe. Impulsione resultados
                  globais.
                </p>
                <p className="text-sm text-gray-600 mb-6">
                  Programas para empresas e times que precisam elevar seu nível
                  com idiomas que precisam de soluções especializadas em
                  comunicação corporativa internacional.
                </p>
                <Button className="bg-yellow-400 text-purple-900 hover:bg-yellow-500 font-bold">
                  Saiba Mais
                </Button>
              </div>
            </div>

            {/* Para Profissionais */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <img
                src={PROFESSIONAL_IMAGE}
                alt="Solução para profissionais"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mb-4">
                  <span className="text-purple-900 font-bold text-lg">👤</span>
                </div>
                <h3 className="text-2xl font-bold text-purple-900 mb-3">
                  Para profissionais
                </h3>
                <p className="text-gray-700 mb-6">
                  Desenvolva sua comunicação. Avance em sua carreira.
                </p>
                <p className="text-sm text-gray-600 mb-6">
                  Soluções para profissionais buscando elevar seu nível de
                  inglês corporativo com foco em comunicação assertiva e
                  intercultural.
                </p>
                <Button className="bg-yellow-400 text-purple-900 hover:bg-yellow-500 font-bold">
                  Saiba Mais
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Higher Up Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
              POR QUE A HIGHER-UP?
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple-900 mb-2">
                  Mentoria
                </h3>
                <p className="text-gray-700">
                  Não somos uma escola de inglês. Não há aulas, nem provas, nem
                  livro didático.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple-900 mb-2">
                  Resultados
                </h3>
                <p className="text-gray-700">
                  Os programas entregam resultados rápidos e focados na sua
                  necessidade de comunicação atual.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple-900 mb-2">
                  Competência intercultural
                </h3>
                <p className="text-gray-700">
                  Além do idioma, trabalhamos questões culturais que podem
                  comprometer sua comunicação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
              TRANSFORMAÇÕES REAIS
            </h2>
            <p className="text-lg text-gray-600">
              Profissionais que elevaram sua comunicação e impacto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all min-h-64 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold mb-4">
                CARROSSEL
                <br />
                TESTIMONIALS
              </h3>
              <p className="text-sm">Depoimento de cliente</p>
            </div>

            <div className="bg-red-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all min-h-64 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold mb-4">
                CARROSSEL
                <br />
                TESTIMONIALS
              </h3>
              <p className="text-sm">Depoimento de cliente</p>
            </div>

            <div className="bg-red-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all min-h-64 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold mb-4">
                CARROSSEL
                <br />
                TESTIMONIALS
              </h3>
              <p className="text-sm">Depoimento de cliente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <img
          src={CTA_IMAGE}
          alt="Próximo nível"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-purple-900/70"></div>

        <div className="relative z-10 container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para o Próximo Nível?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Agende uma conversa gratuita com nosso time. Vamos entender seus
            objetivos e desenhar o programa perfeito para você.
          </p>
          <Button
            size="lg"
            className="bg-yellow-400 text-purple-900 hover:bg-yellow-500 text-lg font-bold px-10 py-6"
          >
            Agendar Conversa Gratuita
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
