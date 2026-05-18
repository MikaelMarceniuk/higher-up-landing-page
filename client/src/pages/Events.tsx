import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, ArrowRight, Users } from "lucide-react";

/**
 * Eventos - Events Page
 *
 * Design Philosophy: Luxo Contemporâneo com Narrativa Visual
 * - Página simples para listar eventos
 * - Paleta: Roxo profundo (#45023E), Amarelo vibrante (#FFD400), Azul-acinzentado (#6A8D92)
 */

const EVENTS = [
  {
    id: 1,
    title: "Point Break - Imersão Executiva em Ubatuba",
    date: "Outubro 2026",
    location: "Ubatuba, SP",
    time: "3 dias de imersão",
    description:
      "Experiência exclusiva combinando estratégia de comunicação corporativa com atividades de desenvolvimento pessoal em ambiente premium.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/growth-trajectory-abstract-aUVBF5qhbi7UbQCEVrvByJ.webp",
    capacity: "10 pessoas",
    cta: "Saiba Mais",
    link: "/pointbreak",
  },
  {
    id: 2,
    title: "Workshop: Comunicação Estratégica em Inglês",
    date: "Seu espaço para adicionar a data",
    location: "Online",
    time: "2 horas",
    description:
      "Workshop prático focado em técnicas de comunicação estratégica para profissionais que desejam impactar em contextos corporativos.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/blueprint-interview-presentation.png",
    capacity: "Vagas ilimitadas",
    cta: "Inscrever-se",
    link: "#",
  },
  {
    id: 3,
    title: "Webinar: BELF - English as Business Lingua Franca",
    date: "Seu espaço para adicionar a data",
    location: "Online",
    time: "1 hora",
    description:
      "Entenda a filosofia BELF e como aplicar essa metodologia para melhorar sua comunicação em inglês corporativo.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/international-team-collaboration-NPMtAZsShLERHkytVoBD6p.webp",
    capacity: "Vagas ilimitadas",
    cta: "Inscrever-se",
    link: "#",
  },
];

export default function Events() {
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
      <section className="relative w-full h-80 flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-teal-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container flex flex-col items-center justify-center text-center h-full text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Eventos
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Acompanhe nossos eventos, workshops e imersões
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {EVENTS.map(event => (
                <a
                  key={event.id}
                  href={event.link}
                  className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300"
                >
                  {/* Event Image */}
                  <div className="relative overflow-hidden h-48 bg-gray-200">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Event Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-purple-900 mb-4 group-hover:text-yellow-400 transition-colors">
                      {event.title}
                    </h3>

                    <div className="space-y-3 mb-6 text-gray-700">
                      <div className="flex gap-3 items-start">
                        <Calendar className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex gap-3 items-start">
                        <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex gap-3 items-start">
                        <Clock className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex gap-3 items-start">
                        <Users className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{event.capacity}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 text-sm mb-6 line-clamp-3">
                      {event.description}
                    </p>

                    <Button className="w-full bg-yellow-400 text-purple-900 hover:bg-yellow-500 font-bold">
                      {event.cta} <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
              Não Encontrou o Evento Que Procura?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Agende uma conversa com nosso time para conhecer outras
              oportunidades de desenvolvimento.
            </p>
            <Button
              size="lg"
              className="bg-yellow-400 text-purple-900 hover:bg-yellow-500 text-lg font-bold px-8 py-6"
            >
              Agendar Conversa <ArrowRight className="ml-2" />
            </Button>
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
