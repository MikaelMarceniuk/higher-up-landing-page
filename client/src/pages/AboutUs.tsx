import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Target,
  Lightbulb,
  Heart,
  Users,
  Award,
  Globe,
} from "lucide-react";

/**
 * Quem Somos - About Us Page
 *
 * Design Philosophy: Luxo Contemporâneo com Narrativa Visual
 * - Foco em história, missão e valores da empresa
 * - Apresentação da equipe e expertise
 * - Paleta: Roxo profundo (#45023E), Amarelo vibrante (#FFD400), Azul-acinzentado (#6A8D92)
 */

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/international-team-collaboration-NPMtAZsShLERHkytVoBD6p.webp";
const TEAM_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/executive-leadership-moment-iUrFydhg58GmDVKfudA3XW.webp";

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Nome do Fundador",
    position: "Fundador & CEO",
    bio: "Seu espaço para adicionar a bio do fundador, experiência e expertise em educação corporativa.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/executive-leadership-moment-iUrFydhg58GmDVKfudA3XW.webp",
  },
  {
    id: 2,
    name: "Nome do Membro",
    position: "Mentor & Especialista",
    bio: "Seu espaço para adicionar a bio do membro da equipe, experiência e especialidades.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/international-team-collaboration-NPMtAZsShLERHkytVoBD6p.webp",
  },
  {
    id: 3,
    name: "Nome do Membro",
    position: "Mentor & Especialista",
    bio: "Seu espaço para adicionar a bio do membro da equipe, experiência e especialidades.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/growth-trajectory-abstract-aUVBF5qhbi7UbQCEVrvByJ.webp",
  },
];

export default function AboutUs() {
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
          alt="Quem Somos - Higher Up"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 container flex flex-col items-center justify-center text-center h-full text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Quem Somos
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Transformando profissionais em líderes de comunicação estratégica
              global
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-8">
              Nossa História
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Seu espaço para contar a história da Higher Up. Como tudo
                começou, qual foi a inspiração para criar a empresa, e o que a
                diferencia no mercado de educação corporativa em inglês.
              </p>
              <p>
                Descreva a jornada, os desafios enfrentados, as conquistas
                alcançadas e como isso moldou a visão e missão da empresa.
                Conecte a história com os valores que guiam as decisões diárias.
              </p>
              <p>
                Fale sobre o impacto que a Higher Up tem tido na vida
                profissional dos clientes e como isso motiva a equipe a
                continuar evoluindo e oferecendo excelência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-12 text-center">
            Nossa Missão, Visão e Valores
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-purple-900" />
              </div>
              <h3 className="text-2xl font-bold text-purple-900 mb-4">
                Missão
              </h3>
              <p className="text-gray-700">
                Seu espaço para descrever a missão da Higher Up. O que a empresa
                se propõe a fazer, para quem, e qual é o impacto que busca gerar
                no mercado.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-purple-900" />
              </div>
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Visão</h3>
              <p className="text-gray-700">
                Seu espaço para descrever a visão da Higher Up. Onde a empresa
                quer chegar, qual é o futuro que imagina e como pretende
                transformar o mercado de educação corporativa.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-purple-900" />
              </div>
              <h3 className="text-2xl font-bold text-purple-900 mb-4">
                Valores
              </h3>
              <p className="text-gray-700">
                Seu espaço para descrever os valores da Higher Up. Os princípios
                que guiam as decisões, as relações com clientes e a forma como a
                equipe trabalha.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Do It Section */}
      <section className="relative py-20 overflow-hidden">
        <img
          src={TEAM_IMAGE}
          alt="Por que fazemos"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 container">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Por Que Fazemos Isso?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Seu espaço para explicar a motivação por trás da Higher Up. O que
              move a equipe, qual é a paixão que guia o trabalho diário, e como
              isso se reflete na qualidade dos programas oferecidos.
            </p>
            <p className="text-lg text-gray-200">
              Conecte a motivação com o impacto real que a empresa gera na vida
              dos profissionais que trabalham com a Higher Up.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-12 text-center">
            Nossa Equipe
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {TEAM_MEMBERS.map(member => (
              <div key={member.id} className="text-center">
                <div className="mb-6 overflow-hidden rounded-lg aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-purple-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-yellow-400 font-semibold mb-4">
                  {member.position}
                </p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Nossa Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-purple-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Experiência Global</h3>
                <p className="text-gray-200">
                  Seu espaço para descrever a experiência internacional da
                  Higher Up, mercados atendidos e contextos de atuação.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-purple-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Reconhecimento</h3>
                <p className="text-gray-200">
                  Seu espaço para descrever prêmios, certificações, parcerias
                  estratégicas e reconhecimentos recebidos pela Higher Up.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-purple-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Comunidade</h3>
                <p className="text-gray-200">
                  Seu espaço para descrever a comunidade de profissionais que
                  trabalham com a Higher Up, networking e impacto coletivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
              Faça Parte da Nossa Jornada
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Transforme sua comunicação em inglês e impacte sua carreira.
              Conheça nossos programas e descubra como podemos ajudá-lo a
              alcançar o próximo nível.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-yellow-400 text-purple-900 hover:bg-yellow-500 text-lg font-bold px-8 py-6"
              >
                Conhecer Programas <ArrowRight className="ml-2" />
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
