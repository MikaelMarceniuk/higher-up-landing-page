# Migração — Startup Programme

Migrar o conteúdo do `<main id="conteudo">` de `startupup/public/index.html` (página estática gerada por outra IA) para a landing page Next.js, como uma nova página de solução.

## Decisões

| Tema | Decisão |
|---|---|
| Rota | `/our-solutions/for-startups` |
| Menu | `Soluções de comunicação > Para startups` (dropdown do `AppNavbar`) |
| Cores | **Não importar.** Usar apenas os tokens que já existem no projeto (`primary`, `secondary`, `muted`, etc.) |
| Fontes | **Importar** Manrope (títulos) e DM Sans (texto) via `next/font/google`, usadas só nesta página |
| Depoimentos | Manter os 3 depoimentos em texto por enquanto — pendente de validação com a cliente |
| Header / footer / botão WhatsApp | **Não migrar** — o `layout.tsx` já fornece `AppNavbar`, `AppFooter` e `WhatsappButton` |

## Mapeamento de cores

As cores do startupup serão trocadas pelos equivalentes já usados no projeto:

| startupup | Valor original | No projeto |
|---|---|---|
| `--plum` | `#2a0b47` | `primary` (`#45023e`) |
| `--plum-deep` | `#160522` | `#2a001f` (já usado em `.bg-gradient-dark-purple`) |
| `--violet` | `#5e2a87` | `primary` (acentos) / `primary/80` (fundos) |
| `--yellow` | `#ffe000` | `secondary` (`#ffd400`) |
| `--cream` | `#f8f5ef` | `muted` (`#f5f5f5`) / `bg-gray-50` |
| `--ink` | `#241f2a` | `foreground` / `text-gray-900` |
| `--muted` | `#766f7b` | `text-gray-600` (padrão das outras páginas) |
| `--line` | `rgba(42,11,71,.15)` | `border-primary/15` |
| Gradiente do hero | radial roxo | `.bg-gradient-dark-purple` ou radial com `primary` → `#2a001f` |

## Fontes

Adicionar em `src/app/layout.tsx`, no mesmo padrão das fontes dos produtos:

```ts
const manrope = Manrope({ subsets: ['latin'], variable: '--font-startup-display' })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-startup-text' })
```

Na página: wrapper com `font-(family-name:--font-startup-text)` e títulos com `font-(family-name:--font-startup-display)` (constantes `displayFont` / `headingClass` em `startup-ui.tsx`).

> Atenção: o `globals.css` força `font-family: 'Poppins'` em `h1–h6` dentro de `@layer base`. Classes utilitárias têm prioridade sobre `base`, então aplicar a fonte via classe diretamente nos títulos funciona.

## Estrutura de arquivos

```
src/app/our-solutions/for-startups/page.tsx        # página + metadata
src/components/startup-sections/
  startup-ui.tsx               # constantes de classe + Eyebrow + SectionMarker (server)
  scroll-link.tsx              # 'use client' — link âncora com scroll suave
  hero-section.tsx
  audience-section.tsx         # "Para quem"
  programmes-section.tsx       # MVP / Scale-up
  belf-section.tsx
  differentials-section.tsx    # "Por que Higher Up"
  journey-section.tsx          # Diagnóstico → Estratégia → Prática
  testimonials-section.tsx     # 'use client' (slider)
  cta-section.tsx
src/components/reveal.tsx                         # 'use client' — animação ao rolar
```

Padrão igual a `home-sections/` e `about-us-sections/`. Conteúdo repetido vira array no topo de cada arquivo (como em `for-companies/page.tsx`).

## Seções

| # | Componente | id | Conteúdo | Observações |
|---|---|---|---|---|
| 1 | `HeroSection` | — | Título, subtítulo, CTA WhatsApp, link "Conheça as modalidades", card amarelo inclinado, 3 destaques no rodapé | Órbitas com `animate-[spin_28s_linear_infinite]`, grid de fundo com `bg-[linear-gradient(...)]`. Adicionar padding-top para a navbar fixa (`pt-18.25`). Card escondido abaixo de `md` |
| 2 | `AudienceSection` | `programa` | "Você não precisa de mais uma aula de inglês." + 4 perfis | Faixa de 4 → 2 → 1 colunas, hover `bg-secondary` |
| 3 | `ProgrammesSection` | `modalidades` | Cards MVP (1 mês) e Scale-up (3 ou 6 meses) + nota de formato com CTA | Faixa diagonal "Mais fôlego para ganhar escala" no Scale-up. Ícones `Check` do lucide |
| 4 | `BelfSection` | `belf` | "Inglês não é o fim. É o meio." | Palavra "BELF" gigante no fundo com baixa opacidade |
| 5 | `DifferentialsSection` | `diferenciais` | 3 diferenciais em lista | Hover com padding e fundo; seta `↘` some no mobile |
| 6 | `JourneySection` | — | 3 passos numerados | Linha tracejada entre os passos |
| 7 | `TestimonialsSection` | `depoimentos` | 3 depoimentos em texto | Slider com `useState` (anterior/próximo + contador `01 / 03`). **Pendente de validação com a cliente** |
| 8 | `CTASection` | — | "Seu pitch já conta a história que a sua startup merece?" | Órbita tracejada decorativa |

## Interatividade (JS → React)

| startupup (`script.js`) | Na landing |
|---|---|
| Header muda ao rolar | Não migrar (navbar própria) |
| Menu mobile | Não migrar (navbar própria) |
| `.reveal` + IntersectionObserver | Componente `<Reveal delay={ms}>` client com IntersectionObserver; respeitar `prefers-reduced-motion` (`motion-reduce:`) |
| Slider de depoimentos | `useState` no `TestimonialsSection` |

## Links do WhatsApp

Cada CTA tem uma mensagem pré-preenchida diferente. Adicionar em `src/constants/contact-links.constants.tsx`:

```ts
export const whatsappWithText = (text: string) =>
  `${CONTACT_LINKS.whatsapp}?text=${encodeURIComponent(text)}`
```

E aceitar `href` opcional no `CTAButton`:

| CTA | Mensagem |
|---|---|
| Hero | Olá, quero agendar meu diagnóstico para o Startup Programme. |
| Nota das modalidades | Olá, gostaria de entender qual modalidade do Startup Programme é mais adequada para mim. |
| CTA final | Olá, quero agendar um diagnóstico gratuito para o Startup Programme. |

## Navbar

Em `src/components/app-navbar.tsx`, adicionar no dropdown de "SOLUÇÕES DE COMUNICAÇÃO":

```tsx
<li>
  <Link href="/our-solutions/for-startups" className="...">
    Para startups
  </Link>
</li>
```

## Metadata

```ts
export const metadata: Metadata = {
  title: 'Startup Programme — Inglês para Founders',
  description:
    'Mentoria individual de comunicação em inglês para founders e equipes que precisam transformar oportunidades internacionais em negócios concretos.',
  openGraph: {
    url: '/our-solutions/for-startups',
    images: [{ url: '/og/og-home.png', width: 1200, height: 630 }], // TODO: criar og-startup.png
  },
}
```

## Checklist

- [x] Fontes Manrope e DM Sans no `layout.tsx`
- [x] `whatsappWithText` + `href` opcional no `CTAButton`
- [x] Componente `Reveal`
- [x] 8 seções em `src/components/startup-sections/`
- [x] Página `src/app/our-solutions/for-startups/page.tsx` com metadata
- [x] Item "Para startups" no dropdown da navbar
- [x] `pnpm build` ok; lint ok nos arquivos novos; nenhum erro novo de `tsc` (os existentes são anteriores)
- [x] Conferência visual (desktop 1440px, tablet 820px, mobile 390px)
- [x] Remover a pasta `startupup/`

## Notas da implementação

- `startup-ui.tsx` **não** pode ter `'use client'`: Server Components que importam constantes de um módulo client recebem referências em vez das strings, e o `cn()` descarta as classes. Por isso o `ScrollLink` fica em `scroll-link.tsx`.
- A faixa diagonal "Mais fôlego para ganhar escala" só aparece a partir de `lg`; abaixo disso vira um selo acima do nome do card (evita sobrepor título/rótulos).
- Os depoimentos usam grid empilhado (`col-start-1 row-start-1`) em vez de `absolute`, então a altura acompanha o depoimento mais longo.
- O `Reveal` começa com `opacity-0`; com `prefers-reduced-motion` o conteúdo aparece direto.

## Pendências

- **Depoimentos:** validar com a cliente se Eduardo Monaco, Henrique Leão e Tarcizo Minuzzi ficam (texto gerado pela outra IA). Alternativa: usar as imagens de `public/testimonials/` como na home.
- **Email:** startupup usa `contato@higher-up.com.br`; o footer da landing usa `contato@higherup.com.br`. Confirmar qual é o correto.
- **OG image:** criar `public/og/og-startup.png`.
- **Link no footer:** decidir se "Para startups" também entra no `AppFooter`.
- **Navbar mobile:** o `AppNavbar` não tem menu no mobile (afeta o site todo, fora do escopo desta migração).
