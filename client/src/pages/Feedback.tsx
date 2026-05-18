import { Button } from "@/components/ui/button";
import { Play, Star, Quote, ArrowRight } from "lucide-react";
import { useState } from "react";

/**
 * Feedback de Clientes - Testimoniais em Vídeo
 *
 * Design Philosophy: Luxo Contemporâneo com Narrativa Visual
 * - Foco em histórias de transformação real
 * - Vídeos de clientes satisfeitos
 * - Paleta: Roxo profundo (#45023E), Amarelo vibrante (#FFD400), Azul-acinzentado (#6A8D92)
 */

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/executive-leadership-moment-iUrFydhg58GmDVKfudA3XW.webp";

// Placeholder para vídeos - você pode adicionar os links depois
const TESTIMONIALS = [
  {
    id: 1,
    name: "Cliente 1",
    position: "Cargo / Empresa",
    videoUrl: "",
    thumbnail:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/executive-leadership-moment-iUrFydhg58GmDVKfudA3XW.webp",
    quote: "Seu espaço para adicionar o depoimento do cliente",
    rating: 5,
  },
  {
    id: 2,
    name: "Cliente 2",
    position: "Cargo / Empresa",
    videoUrl: "",
    thumbnail:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/international-team-collaboration-NPMtAZsShLERHkytVoBD6p.webp",
    quote: "Seu espaço para adicionar o depoimento do cliente",
    rating: 5,
  },
  {
    id: 3,
    name: "Cliente 3",
    position: "Cargo / Empresa",
    videoUrl: "",
    thumbnail:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/growth-trajectory-abstract-aUVBF5qhbi7UbQCEVrvByJ.webp",
    quote: "Seu espaço para adicionar o depoimento do cliente",
    rating: 5,
  },
  {
    id: 4,
    name: "Cliente 4",
    position: "Cargo / Empresa",
    videoUrl: "",
    thumbnail:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/hero-professional-meeting.png",
    quote: "Seu espaço para adicionar o depoimento do cliente",
    rating: 5,
  },
  {
    id: 5,
    name: "Cliente 5",
    position: "Cargo / Empresa",
    videoUrl: "",
    thumbnail:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/blueprint-interview-presentation.png",
    quote: "Seu espaço para adicionar o depoimento do cliente",
    rating: 5,
  },
  {
    id: 6,
    name: "Cliente 6",
    position: "Cargo / Empresa",
    videoUrl: "",
    thumbnail:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/blueprint-networking-moment.png",
    quote: "Seu espaço para adicionar o depoimento do cliente",
    rating: 5,
  },
];

export default function Feedback() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<
    (typeof TESTIMONIALS)[0] | null
  >(null);

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
          alt="Feedback de clientes"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 container flex flex-col items-center justify-center text-center h-full text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Histórias de
              <br />
              <span className="text-yellow-400">Transformação Real</span>
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Veja como nossos clientes elevaram sua comunicação em inglês e
              impactaram suas carreiras
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6 text-center">
              Feedback de Nossos Clientes
            </h2>
            <p className="text-xl text-gray-700 text-center">
              Profissionais que transformaram sua comunicação estratégica e
              impactaram seus negócios
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map(testimonial => (
              <div
                key={testimonial.id}
                className="group cursor-pointer"
                onClick={() => setSelectedTestimonial(testimonial)}
              >
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-video bg-gray-200">
                  <img
                    src={testimonial.thumbnail}
                    alt={testimonial.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-purple-900 fill-purple-900" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <h3 className="text-lg font-bold text-purple-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}
                  </p>

                  <p className="text-gray-700 line-clamp-3 italic">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedTestimonial && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedTestimonial(null)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative bg-gray-900 aspect-video">
              {selectedTestimonial.videoUrl ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={selectedTestimonial.videoUrl}
                  title={selectedTestimonial.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <img
                    src={selectedTestimonial.thumbnail}
                    alt={selectedTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-white text-lg font-semibold mb-4">
                        Vídeo em breve
                      </p>
                      <p className="text-gray-300">
                        Adicione o link do vídeo aqui
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-2">
                {selectedTestimonial.name}
              </h3>
              <p className="text-gray-600 mb-4">
                {selectedTestimonial.position}
              </p>

              <div className="flex gap-1 mb-4">
                {[...Array(selectedTestimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <blockquote className="text-gray-700 italic mb-6">
                "{selectedTestimonial.quote}"
              </blockquote>

              <button
                onClick={() => setSelectedTestimonial(null)}
                className="w-full py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-lg transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Text Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6 text-center">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-gray-700 text-center">
              Depoimentos de profissionais que transformaram sua comunicação
              estratégica
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg border-l-4 border-yellow-400 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Seu espaço para adicionar o depoimento em texto do cliente.
                Conte a história de transformação, os resultados alcançados e o
                impacto na carreira."
              </p>
              <div>
                <h4 className="font-bold text-purple-900">Nome do Cliente</h4>
                <p className="text-gray-600 text-sm">Cargo / Empresa</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border-l-4 border-yellow-400 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Seu espaço para adicionar o depoimento em texto do cliente.
                Conte a história de transformação, os resultados alcançados e o
                impacto na carreira."
              </p>
              <div>
                <h4 className="font-bold text-purple-900">Nome do Cliente</h4>
                <p className="text-gray-600 text-sm">Cargo / Empresa</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border-l-4 border-yellow-400 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Seu espaço para adicionar o depoimento em texto do cliente.
                Conte a história de transformação, os resultados alcançados e o
                impacto na carreira."
              </p>
              <div>
                <h4 className="font-bold text-purple-900">Nome do Cliente</h4>
                <p className="text-gray-600 text-sm">Cargo / Empresa</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border-l-4 border-yellow-400 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Seu espaço para adicionar o depoimento em texto do cliente.
                Conte a história de transformação, os resultados alcançados e o
                impacto na carreira."
              </p>
              <div>
                <h4 className="font-bold text-purple-900">Nome do Cliente</h4>
                <p className="text-gray-600 text-sm">Cargo / Empresa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">
                500+
              </div>
              <p className="text-xl">Profissionais Transformados</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">
                4.9★
              </div>
              <p className="text-xl">Avaliação Média dos Clientes</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">95%</div>
              <p className="text-xl">Taxa de Satisfação</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
              Você Também Pode Transformar Sua Comunicação
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Junte-se a centenas de profissionais que já elevaram seu inglês
              corporativo e impactaram suas carreiras
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
                className="border-purple-900 text-purple-900 hover:bg-purple-50 text-lg font-bold px-8 py-6"
              >
                Conhecer Programas
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
