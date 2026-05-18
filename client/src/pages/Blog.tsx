import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { useState } from "react";

/**
 * Blog - Blog Page
 *
 * Design Philosophy: Luxo Contemporâneo com Narrativa Visual
 * - Página simples para listar artigos de blog
 * - Paleta: Roxo profundo (#45023E), Amarelo vibrante (#FFD400), Azul-acinzentado (#6A8D92)
 */

const BLOG_POSTS = [
  {
    id: 1,
    title: "BELF: O Futuro do Inglês Corporativo",
    excerpt:
      "Entenda por que Business English as Lingua Franca é a abordagem mais eficaz para profissionais que precisam comunicar em contextos internacionais.",
    author: "Higher Up Team",
    date: "18 de maio de 2026",
    category: "Metodologia",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/growth-trajectory-abstract-aUVBF5qhbi7UbQCEVrvByJ.webp",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "5 Estratégias para Melhorar Sua Comunicação em Inglês",
    excerpt:
      "Dicas práticas e imediatas para elevar o nível de sua comunicação corporativa em inglês, independente do seu nível atual.",
    author: "Higher Up Team",
    date: "15 de maio de 2026",
    category: "Dicas",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/blueprint-interview-presentation.png",
    readTime: "7 min",
  },
  {
    id: 3,
    title: "Como Líderes Podem Impactar em Inglês",
    excerpt:
      "Explore as características que definem um líder efetivo em comunicação estratégica e como desenvolvê-las.",
    author: "Higher Up Team",
    date: "12 de maio de 2026",
    category: "Liderança",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/international-team-collaboration-NPMtAZsShLERHkytVoBD6p.webp",
    readTime: "6 min",
  },
  {
    id: 4,
    title: "Pronúncia e Naturalidade: Muito Mais que Sotaque",
    excerpt:
      "Descubra como desenvolver uma pronúncia natural e confiante que transmita autoridade em suas apresentações.",
    author: "Higher Up Team",
    date: "10 de maio de 2026",
    category: "Pronúncia",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/blueprint-networking-moment.png",
    readTime: "5 min",
  },
  {
    id: 5,
    title: "Negociação em Inglês: Técnicas Comprovadas",
    excerpt:
      "Aprenda as técnicas mais eficazes para negociar com confiança e autoridade em contextos internacionais.",
    author: "Higher Up Team",
    date: "8 de maio de 2026",
    category: "Negociação",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/executive-leadership-moment.png",
    readTime: "8 min",
  },
  {
    id: 6,
    title: "Apresentações em Inglês: Do Nervosismo à Confiança",
    excerpt:
      "Estratégias práticas para transformar o nervosismo em confiança e entregar apresentações memoráveis.",
    author: "Higher Up Team",
    date: "5 de maio de 2026",
    category: "Apresentações",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/hero-professional-meeting.png",
    readTime: "6 min",
  },
];

const CATEGORIES = [
  "Todos",
  "Metodologia",
  "Dicas",
  "Liderança",
  "Pronúncia",
  "Negociação",
  "Apresentações",
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = BLOG_POSTS.filter(post => {
    const categoryMatch =
      selectedCategory === "Todos" || post.category === selectedCategory;
    const searchMatch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

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
              Blog
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Artigos, dicas e insights sobre inglês corporativo e comunicação
              estratégica
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-yellow-400 text-purple-900"
                      : "bg-white text-gray-700 border border-gray-300 hover:border-yellow-400"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map(post => (
                  <a
                    key={post.id}
                    href="#"
                    className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Post Image */}
                    <div className="relative overflow-hidden h-48 bg-gray-200">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-yellow-400 text-purple-900 px-3 py-1 rounded-full text-sm font-bold">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Post Details */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-purple-900 mb-3 group-hover:text-yellow-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="space-y-3 mb-6 text-gray-600 text-sm">
                        <div className="flex gap-2 items-center">
                          <Calendar className="w-4 h-4 text-yellow-400" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex gap-2 items-center">
                          <User className="w-4 h-4 text-yellow-400" />
                          <span>{post.author}</span>
                        </div>
                        <div className="text-gray-500">
                          {post.readTime} de leitura
                        </div>
                      </div>

                      <Button className="w-full bg-yellow-400 text-purple-900 hover:bg-yellow-500 font-bold">
                        Ler Artigo <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-700 mb-4">
                  Nenhum artigo encontrado com esses critérios.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("Todos");
                  }}
                  className="bg-yellow-400 text-purple-900 hover:bg-yellow-500"
                >
                  Limpar Filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Receba Novos Artigos por Email
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Inscreva-se em nossa newsletter e receba dicas, insights e artigos
              exclusivos sobre inglês corporativo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <Button className="bg-yellow-400 text-purple-900 hover:bg-yellow-500 font-bold px-8">
                Inscrever-se
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
