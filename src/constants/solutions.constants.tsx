import { Product } from '@/@types/product.type'

export const solutions: Product[] = [
  {
    id: 'signature',
    label: 'Signature',
    tagline: 'Intervenção intensiva para empresas e lideranças estratégicas.',
    accent: '#D4AF37',
    bg: '#2d0a4e',
    features: [
      'Transformação em cenários críticos',
      'Diagnóstico e intervenção personalizada',
      'Impacto direto nos resultados',
    ],
    cta: 'Conhecer o Signature',
    // Taken by Vultures → declare via next/font/local as --font-signature
    fontStyle: { fontFamily: 'var(--font-signature), serif' },
    labelClassName: 'text-7xl tracking-widest leading-none',
    image: '/images/signature-building.jpg',
  },
  {
    id: 'edge',
    label: 'Edge',
    tagline: 'Fluência acelerada para profissionais que não podem esperar.',
    accent: '#FF6B35',
    bg: '#1a0a00',
    features: [
      'Método intensivo personalizado',
      'Foco em resultados rápidos',
      'Vocabulário de nicho e conversação',
    ],
    cta: 'Conhecer o Edge',
    // Lovelo → declare via next/font/local as --font-edge
    fontStyle: { fontFamily: 'var(--font-edge), sans-serif' },
    image: '/images/edge-bg.jpg',
  },
  {
    id: 'blueprint',
    label: 'Blueprint',
    tagline: 'Estruture sua comunicação técnica com precisão e clareza.',
    accent: '#4FC3F7',
    bg: '#0a1628',
    features: [
      'Comunicação técnica avançada',
      'Documentação e relatórios em inglês',
      'Apresentações de alto impacto',
    ],
    cta: 'Conhecer o Blueprint',
    // Agrandir Grand → declare via next/font/local as --font-blueprint
    fontStyle: { fontFamily: 'var(--font-blueprint), sans-serif' },
    image: '/images/blueprint-bg.jpg',
  },
  {
    id: 'worklab',
    label: 'WorkLab',
    tagline: 'Inglês aplicado ao seu ambiente de trabalho real.',
    accent: '#69F0AE',
    bg: '#0d1f0d',
    features: [
      'Simulações de situações reais',
      'E-mails, reuniões e negociações',
      'Feedback contínuo e prático',
    ],
    cta: 'Conhecer o WorkLab',
    // Montserrat Italic → declare via next/font/google as --font-worklab
    fontStyle: {
      fontFamily: 'var(--font-worklab), sans-serif',
      fontStyle: 'italic',
    },
    image: '/images/worklab-bg.jpg',
  },
]
